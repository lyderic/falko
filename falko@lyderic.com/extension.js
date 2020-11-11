const { St, Clutter, GLib, Gio } = imports.gi;
const ME = imports.misc.extensionUtils.getCurrentExtension();
const Main = imports.ui.main;
const Mainloop = imports.mainloop;
const ByteArray = imports.byteArray

const Command = ME.path + "/falko";
const OutputFile = GLib.get_user_runtime_dir() + "/falko.out";

let panelOutput, panelOutputText, timeout;

function setOutputText()  {
	GLib.spawn_command_line_async(Command);
	let message = "...";
	try {
		let file = Gio.File.new_for_path(OutputFile);
		let [res,content] = file.load_contents(null);
		message = ByteArray.toString(content);
	} catch (err) {
		log("error accessing out file: "+OutputFile);
	}
	//panelOutputText.set_text(message);
	panelOutputText.clutter_text.set_markup(message);
	return true;
}

function init() {
	log("Initializing falko extension...");
	panelOutput = new St.Bin()
	panelOutputText = new St.Label({
		style_class: "statusPanelText",
		text: "falko",
		y_align: Clutter.ActorAlign.CENTER,
	});
	panelOutput.set_child(panelOutputText);
}

function enable() {
	Main.panel._rightBox.insert_child_at_index(panelOutput, 0);
	timeout = Mainloop.timeout_add_seconds(2.5, setOutputText);
}

function disable() {
	Mainloop.source_remove(timeout);
	Main.panel._rightBox.remove_child(panelOutput);
}
