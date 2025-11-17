# ® **regex-based find-and-replace**

- Question

    Is there a way to use a macro in visual studio code so that when it has run, finds the links formatted \[\]\(\) and appends "{:target="_blank"}" to that lines.

Yes! You can achieve this in **Visual Studio Code** using a **macro extension** or a simple **regex-based find-and-replace** operation. Here are two approaches:

---

## **✅ Method 1: Using Find and Replace with Regex (Quick & Easy)**

1. **Open VS Code**
2. Press `Cmd (⌘) + Shift + H` (Opens Find and Replace across all files)
3. Enable **Regular Expression mode** (click `.*` button)
4. **Find:**  

   ```regex
   (\[.*?\]\(.*?\))
   ```

5. **Replace with:**  

   ```regex
   $1{:target="_blank"}
   ```

6. Click **Replace All** to update all Markdown links.

🔹 **What this does:** It finds all links in `[]()` format and appends `{:target="_blank"}` to them.

---

## **✅ Solution: Use "Multi-command" Extension**

To add arguments to `"editor.action.replaceAll"`, you need to install the **"multi-command"** extension and define the macro inside `settings.json`.

### **1️⃣ Install Multi-command Extension**

1. Open **Extensions (`Cmd + Shift + X`)**
2. Search for **"multi-command"**
3. Install **Multi Command** by **Ryuta K**.

---

### **2️⃣ Define a Macro in `settings.json`**

1. Open **Command Palette (`Cmd + Shift + P`)**
2. Search for **"Preferences: Open Settings (JSON)"**
3. Add the following JSON configuration:

```json
{
 "multiCommand.commands": [
    {
      "command": "extension.replaceMarkdownLinks",
      "sequence": [
        "editor.action.selectAll",
        {
          "command": "editor.actions.findWithArgs",
          "args": {
            "searchString": "(\\[.*?\\]\\(.*?\\))",
            "replaceString": "$1{:target=\"_blank\"}",
            "isRegex": true
          }
        },
        "editor.action.replaceAll"
      ]
    }
  ]
}
```

---

### **3️⃣ Assign a Keybinding**

Now, go to **Keybindings (`Cmd + K Cmd + S`)** and add this custom shortcut:

```json
{
  "key": "cmd+l 3",
  "command": "extension.replaceMarkdownLinks"
}
```

---

## **🚀 How It Works**

- This macro **selects all** text, **opens the find & replace panel**, and then **replaces all Markdown links** with `{target="_blank"}` added.
- You can now trigger this with **`Cmd + L 3`** to execute it in one click.

Let me know if you need further customizations! 🚀
