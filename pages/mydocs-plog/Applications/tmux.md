# tmux One‑Page Cheatsheet


## ndawn usage


```shell
bash# Start tmux session
tmux new-session -s claude-dev

# Split window vertically (side by side)
tmux split-window -h

# Left pane: Your editor/terminal work
# Right pane: Claude Code
tmux select-pane -t 1
claude

# Switch back to left pane for coding
tmux select-pane -t 0
```

> Prefix = **Ctrl+b** (default). Press prefix, then the key.

## Sessions

* New session: `tmux`  or named: `tmux new -s <name>`
* List sessions: `tmux ls`
* Attach: `tmux attach -t <name|id>`
* Detach: **Prefix** `d`
* Rename session: **Prefix** `$`
* Kill session: `tmux kill-session -t <name|id>`
* Kill all (server): `tmux kill-server`

## Windows (tabs)

* New window: **Prefix** `c`
* Next / Prev: **Prefix** `n` / `p`
* Select #N: **Prefix** `0..9`
* List windows: **Prefix** `w`
* Rename window: **Prefix** `,`
* Move window: `:move-window -t <sess>:<win>`
* Kill window: **Prefix** `&`

## Panes (splits)

* Split horizontal: **Prefix** `"`
* Split vertical: **Prefix** `%`
* Move focus: **Prefix** `←/→/↑/↓`
* Swap panes: **Prefix** `{` / `}`
* Toggle last pane: **Prefix** `;`
* Zoom pane: **Prefix** `z`
* Close pane: `exit` or **Ctrl+d**
* Resize (hold repeat): **Prefix** `Alt+←/→/↑/↓` *(depends on config)*

## Copy / Scroll Mode

* Enter copy-mode: **Prefix** `[`  • Exit: `q`
* Scroll: Arrow keys or **PgUp/PgDn**
* Start selection: **Space**  • Copy: **Enter**
* Paste: **Prefix** `]`
* Search up / down: `/` then text, **n** / **N**

## Useful One‑liners

* Start named session and run cmd: `tmux new -s build 'npm run build'`
* Send keys to pane: `tmux send-keys -t 0:1.0 'ls -la' Enter`
* Capture pane to file: `tmux capture-pane -pS -2000 > out.txt`
* Synchronize panes (type once → all panes): `:setw synchronize-panes on`
* Show pane numbers: **Prefix** `q`

## Status & Info

* Show shortcuts help: **Prefix** `?`
* Show clock: **Prefix** `t`
* List key bindings: `tmux list-keys`

---

# Starter `.tmux.conf`

Copy below into `~/.tmux.conf`, reload with `tmux source-file ~/.tmux.conf` (or restart tmux).

```tmux
##### Basics
set -g history-limit 100000
set -g escape-time 0
set -g repeat-time 250
set -g allow-rename off
set -g renumber-windows on
set -g base-index 1
setw -g pane-base-index 1

##### Mouse & copy
set -g mouse on
setw -g mode-keys vi
bind -T copy-mode-vi v send -X begin-selection
bind -T copy-mode-vi y send -X copy-selection
bind -T copy-mode-vi Y send -X copy-line
bind -T copy-mode-vi r send -X rectangle-toggle

##### Pane management
bind -r H resize-pane -L 5
bind -r J resize-pane -D 2
bind -r K resize-pane -U 2
bind -r L resize-pane -R 5
bind | split-window -h
bind - split-window -v
unbind '"'
unbind %

##### Quality of life
bind R source-file ~/.tmux.conf \; display-message "tmux reloaded"
bind Space last-window
bind Tab last-pane
bind a last-pane
bind q display-panes

##### Status bar (clean)
set -g status-keys vi
set -g status-bg default
set -g status-fg colour250
set -g status-left-length 40
set -g status-right-length 120
set -g status-left '#[bold]#S #[fg=colour240]| #[fg=colour244]#I:#P'
set -g status-right '#[fg=colour244]%Y-%m-%d %H:%M #[fg=colour240]| #[fg=colour244]#h'

##### Choose-tree & navigation
bind s choose-tree -Zw    # navigate sessions/windows/panes interactively
bind -r C-h select-pane -L
bind -r C-j select-pane -D
bind -r C-k select-pane -U
bind -r C-l select-pane -R

##### Synchronize panes toggle
bind S setw synchronize-panes \; display-message "sync-panes: #{?pane_synchronized,on,off}"
```

**Tips**

* Yatay/ dikey bölmeyi `|` ve `-` tuşlarına aldık (daha hızlı).
* `R` ile config’i yeniden yükleyebilirsin.
* `S` ile tüm panellerde eşzamanlı yazmayı aç/kapat.
* Fare açık: sürükleyerek yeniden boyutlandır, tıkla-odaklan.
