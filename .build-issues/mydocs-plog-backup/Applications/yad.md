# Yad - Yet Another Dialog

**Yad** (Yet Another Dialog) is a tool used in Linux environments to create graphical user interface (GUI) dialogs from shell scripts. It is an enhanced version of Zenity, offering more functionality and customization options for building complex dialogs.

### Key Features of Yad

1. **Rich Dialog Types**: Yad supports various dialog types, including text entries, file selection dialogs, lists, forms, calendars, progress bars, and notifications.
2. **Customizable Appearance**: Users can customize the appearance and behavior of the dialogs, such as setting icons, buttons, window titles, and other attributes.
3. **Script Integration**: It is commonly used in shell scripts to provide a graphical front-end to command-line programs. This makes it ideal for creating user-friendly scripts without the need for extensive programming knowledge.
4. **Extended Functionality**: Compared to Zenity, Yad adds more dialog types and options, such as tables, multi-column lists, and embedded terminals.

### Example Usage

To create a simple message box using Yad:

```bash
yad --text="Hello, World!" --button=OK
```

This command will display a dialog with the message "Hello, World!" and an "OK" button.

### Installation

To install Yad on a Debian-based system (like Ubuntu), use:

```bash
sudo apt install yad
```

Yad is a powerful tool for enhancing the interactivity of scripts, making it suitable for building lightweight GUIs for various administrative tasks.

```
