# Running a menu as plugin

If you're using **Oh My Zsh**, the best way to integrate the menu script is to create a custom plugin or add the script to your `~/.zshrc` file in a modular way, ensuring it doesn't conflict with other configurations.

### Option 1: Create a Custom Plugin

1. **Create a Custom Plugin Directory**  
   Oh My Zsh allows you to add custom plugins easily. Create a new directory for your custom plugin:

   ```bash
   mkdir -p ~/.oh-my-zsh/custom/plugins/ssh_menu
   ```

2. **Add the Menu Script**  
   Create a new file for the plugin:

   ```bash
   nano ~/.oh-my-zsh/custom/plugins/ssh_menu/ssh_menu.plugin.zsh
   ```

   Add the following script:

   ```bash
   # ssh_menu.plugin.zsh

   ssh_menu() {
       echo "Select a server to connect to:"
       echo "1) Server 1 - 96ceef21bf1c.mylabserver.com"
       echo "2) Server 2 - <hostname2>"
       echo "3) Server 3 - <hostname3>"
       echo "4) Server 4 - <hostname4>"
       echo "5) Exit"
       read -p "Enter your choice [1-5]: " choice

       case $choice in
           1) ssh user@96ceef21bf1c.mylabserver.com ;;
           2) ssh user@<hostname2> ;;
           3) ssh user@<hostname3> ;;
           4) ssh user@<hostname4> ;;
           5) echo "Exiting..."; return ;;
           *) echo "Invalid option. Please try again."; ssh_menu ;;
       esac
   }
   ```

   Replace `<hostname2>`, `<hostname3>`, and `<hostname4>` with the actual hostnames.

3. **Enable the Plugin**  
   Edit your `~/.zshrc` file to load the plugin:

   ```bash
   plugins=(... ssh_menu)
   ```

   Add `ssh_menu` to your existing list of plugins.

4. **Reload Zsh**  
   Reload your shell configuration:

   ```bash
   source ~/.zshrc
   ```

5. **Run the Menu**  
   Invoke the menu by typing:

   ```bash
   ssh_menu
   ```

---

### Option 2: Add the Script Directly to `~/.zshrc`

If you prefer a simpler approach, append the script to your `~/.zshrc` file directly under the custom section for user-defined functions:

1. Open your `~/.zshrc` file:

   ```bash
   nano ~/.zshrc
   ```

2. Add the script under a custom section, like this:

   ```bash
   # Custom SSH Menu
   ssh_menu() {
       echo "Select a server to connect to:"
       echo "1) Server 1 - 96ceef21bf1c.mylabserver.com"
       echo "2) Server 2 - <hostname2>"
       echo "3) Server 3 - <hostname3>"
       echo "4) Server 4 - <hostname4>"
       echo "5) Exit"
       read -p "Enter your choice [1-5]: " choice

       case $choice in
           1) ssh user@96ceef21bf1c.mylabserver.com ;;
           2) ssh user@<hostname2> ;;
           3) ssh user@<hostname3> ;;
           4) ssh user@<hostname4> ;;
           5) echo "Exiting..."; return ;;
           *) echo "Invalid option. Please try again."; ssh_menu ;;
       esac
   }
   ```

3. Reload your shell:

   ```bash
   source ~/.zshrc
   ```

4. Use the menu as usual:

   ```bash
   ssh_menu
   ```

---

### Why Use a Plugin?

Using a custom plugin keeps your `~/.zshrc` file clean and makes it easier to maintain, especially if you have a lot of custom scripts. It also aligns with Oh My Zsh's modular structure, allowing you to disable or update the plugin without modifying your main configuration.
