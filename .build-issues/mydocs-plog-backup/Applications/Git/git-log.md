#  git log

To see the history of changes under a specific directory in Git, you can use the `git log` command with the `--` argument followed by the directory name. This will show the commit history for changes made within that directory.

Here’s how to do it:

1. **View commit history for a specific directory:**

   ```bash
   git log -- <directory_name>
   ```

   This command will list all the commits that have made changes within the specified directory.

2. **View commit history with a summary of changes in the directory:**

   ```bash
   git log --stat -- <directory_name>
   ```

   The `--stat` option adds a summary of file changes (insertions and deletions) for each commit.

3. **View detailed changes for each commit in a specific directory:**

   ```bash
   git log -p -- <directory_name>
   ```

   The `-p` option shows the actual changes (diffs) for each commit related to the specified directory.

4. **Limit the number of commits in the log:**
   If you only want to see a limited number of recent commits, you can add the `-n` option:

   ```bash
   git log -n 5 -- <directory_name>
   ```

   This example shows the last 5 commits affecting the directory.

These commands will help you see the commit history and changes made to files under a specific directory in your Git repository.
