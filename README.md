# falko
GNOME extension to display output of scripts in upper bar

# What does this extension do?

This is a very simple extension. Every 2.5 seconds, it executes the scripts and other executables located in ${HOME}/.config/falko, concatenates their outputs and displays them on a single line in the GNOME upper bar.

It is heavily inpired by [Argos](https://github.com/p-e-w/argos). It is much simpler however.

# How to install?

**Please note:** so far, I have only tested this extension on Ubuntu 20.04 with GNOME shell version 3.36.

1. Check your GNOME shell version:

    $ gnome-shell --version

2. Create the following directory if it doesn't exist on your system:

    $ mkdir -pv ${HOME}/.local/share/gnome-shell/extensions

3. Clone this repository:

    $ git clone https://github.com/lyderic/falko

4. Copy the extension directory to the relevant location:

    $ cp -riv falko@lyderic.com ~/.local/share/gnome-shell/extension

5. Enable this extension:

    $ gnome-extensions enable falko@lyderic.com

6. Restart GNOME shell: Alt-F2 -> r

7. You should now see 'falko' displayed in your upper bar. This is the output of the following script: **${HOME}/.config/falko/falko-example.sh**. From now on, each executable found in ${HOME}/.config/falko will be executed every 2.5 seconds and its output displayed.
