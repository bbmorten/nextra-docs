# GIT Cheatsheat

##  Setting line endings

```shell
git config --global core.autocrlf input

```

##  Merging a branch

```shell
➜  myportal git:(payments) git branch
➜  myportal git:(payments) git status
On branch payments
Your branch is up to date with 'origin/payments'.

nothing to commit, working tree clean
➜  myportal git:(payments) git push origin payments
Everything up-to-date
➜  myportal git:(payments) git checkout main
Switched to branch 'main'
Your branch is up to date with 'origin/main'.
➜  myportal git:(main) git pull origin main
From https://github.com/bbmorten/myportal
 * branch            main       -> FETCH_HEAD
Already up to date.
➜  myportal git:(main) git merge payments
Updating 13f0348..e4e888d
Fast-forward
 .github/instructions/employee-instructions.md                         |  64 +++++++++++++++++++++++++++++++++++++
 .github/instructions/payments/08-payments-instructions.md             | 139 ---------------------------------------------------------------------------------
 app/dashboard/{payments => payments-delete}/[id]/edit/page.tsx        |   0
 app/dashboard/payments-delete/create/page.tsx                         |  12 +++++++
 app/dashboard/{payments => payments-delete}/list/list-instructions.md |   0
 app/dashboard/payments-delete/page.tsx                                |  34 ++++++++++++++++++++
 app/dashboard/payments/create/page.tsx                                |  18 +++++++----
 app/dashboard/payments/list/page.tsx                                  |  15 +++++++++
 app/dashboard/payments/page.tsx                                       |  63 +++++++++++++++++++------------------
 app/lib/actions.ts                                                    |  34 +++++++++++++++++++-
 app/lib/data.ts                                                       |  21 ++++++++++++-
 app/lib/definitions.ts                                                |   9 ++++++
 app/ui/{payments => payments-delete}/CompanyEmployeeForm.tsx          |   0
 app/ui/{payments => payments-delete}/CompanySelector.tsx              |   0
 app/ui/{payments => payments-delete}/EmployeeSelector.tsx             |   0
 app/ui/payments-delete/breadcrumbs.tsx                                |  36 +++++++++++++++++++++
 app/ui/{payments => payments-delete}/select-employee-form.tsx         |   0
 app/ui/payments/buttons.tsx                                           |  30 ++++++++++++++++++
 app/ui/payments/create-form.tsx                                       |  94 +++++++++++++++++++++++++++++++++++++++++++++++++++++++
 app/ui/payments/edit-form.tsx                                         |   0
 app/ui/payments/list-form.tsx                                         |  56 +++++++++++++++++++++++++++++++++
 app/ui/payments/pagination.tsx                                        | 121 ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 app/ui/payments/table.tsx                                             |  47 ++++++++++++++++++++++++++++
 app/ui/skeletons.tsx                                                  |   4 +++
 24 files changed, 619 insertions(+), 178 deletions(-)
 create mode 100644 .github/instructions/employee-instructions.md
 delete mode 100644 .github/instructions/payments/08-payments-instructions.md
 rename app/dashboard/{payments => payments-delete}/[id]/edit/page.tsx (100%)
 create mode 100644 app/dashboard/payments-delete/create/page.tsx
 rename app/dashboard/{payments => payments-delete}/list/list-instructions.md (100%)
 create mode 100644 app/dashboard/payments-delete/page.tsx
 create mode 100644 app/dashboard/payments/list/page.tsx
 rename app/ui/{payments => payments-delete}/CompanyEmployeeForm.tsx (100%)
 rename app/ui/{payments => payments-delete}/CompanySelector.tsx (100%)
 rename app/ui/{payments => payments-delete}/EmployeeSelector.tsx (100%)
 create mode 100644 app/ui/payments-delete/breadcrumbs.tsx
 rename app/ui/{payments => payments-delete}/select-employee-form.tsx (100%)
 create mode 100644 app/ui/payments/buttons.tsx
 create mode 100644 app/ui/payments/create-form.tsx
 create mode 100644 app/ui/payments/edit-form.tsx
 create mode 100644 app/ui/payments/list-form.tsx
 create mode 100644 app/ui/payments/pagination.tsx
 create mode 100644 app/ui/payments/table.tsx
➜  myportal git:(main) 
```

##  git sparse-checkout

To pull a subdirectory of git repo use sparse-checkout. In this example we sync examples from kubernetes official documentation repo

```shell
cd ~/git-repos/temp
git init kubernetes-website-examples
git remote add origin https://github.com/kubernetes/website.git
git sparse-checkout init --cone
git sparse-checkout set content/en/examples
git pull origin main
git sparse-checkout list
```

##  [Cloning a private repo](http://localhost:8006/mydocs-plog/Applications/Git/github-actions/#private-repo)

```shell
mv id_ed25519_github* ~/.ssh
eval "$(ssh-agent -s)
ssh-add  ~/.ssh/id_ed25519_github
git clone -b deployment-ndawn git@github.com:bbmorten/Django-5-by-Example.git
```

##  Testing a SSH Key

```shell
vm@qemu1:~$ ssh -T git@github.com -i ~/.ssh/id_ed25519_github
Hi bbmorten! You've successfully authenticated, but GitHub does not provide shell access.
```

## git reflog, git log --reverse, git for-each-ref

To see the **creation dates** of Git branches, there’s no direct built-in Git command that shows the exact creation date of branches. However, you can deduce it using a combination of Git commands.

Here are a few methods to achieve this:

---

### **1. Using `git reflog` to Find the Creation Date**

The `reflog` keeps a history of branch changes (like creation), and you can filter it.

```bash
git reflog show --date=iso
```

To find when a specific branch was created:

```bash
git reflog show <branch-name> --date=iso
```

Look for the first commit (creation point) of the branch in the reflog output.

---

### **2. Using `git log` to Find the First Commit on a Branch**

You can use the `git log` command to identify the first commit on a branch, which is usually the creation point.

```bash
git log --reverse --pretty=format:"%h %ad %s" --date=iso <branch-name>
```

- `--reverse` shows commits in reverse order (earliest first).
- The first entry in the output will be the branch creation point.

---

### **3. List All Branches and Their Creation Dates**

You can automate this by combining commands in a script:

```bash
for branch in $(git for-each-ref --format='%(refname:short)' refs/heads/); do
    echo -n "$branch: "
    git log --reverse --format="%ad" --date=iso $branch | head -n 1
done
```

#### Explanation

- `git for-each-ref` gets all branch names.
- `git log --reverse` fetches the first commit date for each branch.
- `head -n 1` extracts the first line of the log output, which corresponds to the branch creation date.

---

### **4. Using `git for-each-ref` for Sorted Branch Creation Dates**

This one-liner sorts all branches by their creation dates (first commit):

```bash
git for-each-ref --sort=creatordate --format '%(refname:short) %(creatordate:iso)' refs/heads/
```

#### Output Example

```
main 2024-12-01 14:23:45 +0000
feature-branch 2024-12-10 09:11:32 +0000
bugfix 2024-12-12 11:55:21 +0000
```

---

### **5. If You Use `git log` with Merge Commit**

If you branch off from `main` or `master`, you can find where the branch diverged:

```bash
git log main..<branch-name> --pretty=format:"%h %ad" --date=iso --reverse
```

This shows all commits unique to the branch in reverse order, and the first commit is often the branch creation point.

---

### **Summary**

1. Use `git reflog` for detailed history of changes.
2. Use `git log` with `--reverse` to find the first commit.
3. Combine `git for-each-ref` and `git log` to list all branches and their creation dates.

##  Trigger a workflow with a empty commit

```shell
git checkout deployment-ndawn
git commit --allow-empty -m "Trigger workflow"
git push origin deployment-ndawn
```

##  Git

[Git CheatSheet](https://supersimpledev.github.io/references/git-github-reference.pdf)

[Git and GitHub - 0 Experience to Professional in 1 Tutorial (Part 1)](https://www.youtube.com/watch?v=hrTQipWp6co)
[Git and GitHub - 0 Experience to Professional in 1 Tutorial (Part 3)](https://www.youtube.com/watch?v=Q1kHG842HoI&t=9s)

### Adding to the previous commit with --amend

```shell
git commit -m "Version 1" --amend

```

## Changing the the initial branch name globally

hint: Using 'master' as the name for the initial branch. This default branch name
hint: is subject to change. To configure the initial branch name to use in all
hint: of your new repositories, which will suppress this warning, call:
hint:
hint:  ```git config --global init.defaultBranch <name>```
hint:
hint: Names commonly chosen instead of 'master' are 'main', 'trunk' and
hint: 'development'. The just-created branch can be renamed via this command:
hint:
hint:  ```git branch -m <name>```

## Commands

Command | Description
--------| -----------
**git remote show origin** | The command to show the repository URL for a Git repository is "git remote show origin". This command will display information about the remote repository, including its URL.

```zsh
(.venv) bulent@Bulents-MacBook-Pro-M1 calculator-chatgpt % git remote show origin
* remote origin
  Fetch URL: https://github.com/bbmorten/calculator-chatgpt.git
  Push  URL: https://github.com/bbmorten/calculator-chatgpt.git
  HEAD branch: master
  Remote branch:
    master tracked
  Local branch configured for 'git pull':
    master merges with remote master
  Local ref configured for 'git push':
    master pushes to master (up to date)
```

Command | Description
--------| -----------
**git commit -a -m sync** | Commit everything with a message
**git push origin --force** | Forcing a push after a stuck problem in visual studio code
**git push --set-upstream origin master --force** | VSCode stucks sometimes. This command is used to resolve the situation.

Command | Description
--------| -----------
**git rm -r --cached folderName** | To clear a Git repository from a folder
**rm -r folderName** | This command will remove the folder from the repository's history, but will not delete the folder from your file system. If you want to delete the folder from your file system as well, you can use the command.
**git commit -m "Removed folderName"** | After removing the folder, you will need to commit the changes using the command

## .gitignore file

### File with a specific extension

```.gitignore
**/*.extension
```

## Copying a subfolder

```shell
git clone --depth 1 --filter=blob:none https://github.com/istio/istio.git --branch master --single-branch samples
```

##  API Link for a user

[https://api.github.com/users/bbmorten](https://api.github.com/users/bbmorten)

## Viewing All Branches with Commit History

**Graphical Log Across All Branches:** To see a graphical representation of the commit history across all branches, use:

```shell
git log --graph --all --oneline

```

Change to any specific commit on any branch with the command

```shell
git checkout 3566dd3

```

Go back

```shell
git switch -
```

## Returning to a specific commit and get back

To return to a specific commit on a specific branch in Git, you have a few options depending on whether you want to **temporarily view** the old commit or **permanently revert** your branch to that commit.

Here’s how to do it:

### 1. Temporary Checkout to a Specific Commit

If you just want to check out a specific commit temporarily, you can do the following:

1. **Find the Commit Hash**:
   Use `git log` to find the commit hash you want to go back to. The commit hash is a unique identifier for each commit.

   ```bash
   git log
   ```

2. **Checkout the Commit**:
   Use `git checkout` with the commit hash to check out that specific commit.

   ```bash
   git checkout <commit-hash>
   ```

   - This will put you in a “detached HEAD” state, meaning any changes made here won’t affect your branches unless you explicitly create a new branch from this state.

3. **Return to Your Branch**:
   When done, return to the latest commit on your branch by checking out the branch again:

   ```bash
   git checkout <branch-name>
   ```

### 2. Permanently Reset a Branch to a Specific Commit

If you want to reset your branch to a specific commit (i.e., make that commit the branch’s current state), you can do this with `git reset`. This can be useful if you want to discard recent commits.

1. **Switch to the Branch**:

   ```bash
   git checkout <branch-name>
   ```

2. **Reset to the Specific Commit**:
   - **Soft Reset**: Keeps changes in the working directory, allowing you to recommit them.

     ```bash
     git reset --soft <commit-hash>
     ```

   - **Mixed Reset** (default): Keeps changes in the working directory but unstages them.

     ```bash
     git reset <commit-hash>
     ```

   - **Hard Reset**: Discards all changes after the specified commit. This cannot be undone.

     ```bash
     git reset --hard <commit-hash>
     ```

3. **Push the Changes** (if you’re working with a remote branch):
   If you’re working with a remote branch and want to update the remote branch to this specific commit, you’ll need to force-push the reset:

   ```bash
   git push --force origin <branch-name>
   ```

### 3. Revert to a Commit Without Discarding History

If you want to undo changes made after a specific commit without removing those commits from history, you can use `git revert`:

1. **Identify the Commit Hash**:
   Use `git log` to find the hash of the commit you want to return to.

2. **Revert Commits**:
   Use `git revert` with the commit range from the latest commit back to the specific commit you want:

   ```bash
   git revert <newer-commit-hash>..HEAD
   ```

   This will create new commits that effectively “undo” the changes in the specified commits, keeping the history intact.

### Example

To reset `feature-branch` to commit `abc1234`:

```bash
git checkout feature-branch
git reset --hard abc1234
git push --force origin feature-branch
```

This makes `abc1234` the current commit in `feature-branch` and updates the remote branch accordingly. Choose the option that best suits your needs, whether you want to view, reset, or revert to a specific commit.
