# inotify-tools

To monitor changes in a directory in Ubuntu, you can use several methods. Here are some popular approaches:

### 1. Using `inotifywait` (part of `inotify-tools` package)

`inotifywait` is a command-line utility that uses the inotify system to watch for changes in directories and files.

#### Step 1: Install `inotify-tools`

```bash
sudo apt update
sudo apt install inotify-tools
```

#### Step 2: Monitor a Directory

You can use the following command to monitor a directory for changes:

```bash
inotifywait -m /path/to/directory
```

- `-m` keeps `inotifywait` running, allowing continuous monitoring.
- Replace `/path/to/directory` with the actual path of the directory you want to monitor.

#### Monitoring Specific Events

You can specify which events to monitor, such as `create`, `delete`, `modify`, etc.:

```bash
inotifywait -m -e create -e delete -e modify /path/to/directory
```

### 2. Using `watch` Command

The `watch` command can repeatedly execute a command at regular intervals and display the output.

#### Example Command

To monitor the contents of a directory every 2 seconds:

```bash
watch -n 2 ls -l /path/to/directory
```

- `-n 2` sets the interval to 2 seconds.
- `ls -l` lists the contents of the directory.

### 3. Using `entr` Tool

`entr` is a utility that runs arbitrary commands when files change. It is well-suited for monitoring directory contents and taking action when something changes.

#### Step 1: Install `entr`

```bash
sudo apt update
sudo apt install entr
```

#### Step 2: Monitor the Directory

```bash
ls /path/to/directory | entr -d echo "Directory changed"
```

- The `-d` option tells `entr` to watch the directory for changes.

### 4. Using Python's `watchdog`

For a more advanced approach, you can use a Python script with the `watchdog` library to monitor directory changes.

#### Step 1: Install `watchdog`

```bash
pip install watchdog
```

#### Step 2: Create a Python Script

```python
from watchdog.observers import Observer
from watchdog.events import FileSystemEventHandler
import time

class Watcher:
    DIRECTORY_TO_WATCH = "/path/to/directory"

    def __init__(self):
        self.event_handler = FileSystemEventHandler()
        self.event_handler.on_modified = self.on_modified
        self.event_handler.on_created = self.on_created
        self.event_handler.on_deleted = self.on_deleted

        self.observer = Observer()
        self.observer.schedule(self.event_handler, self.DIRECTORY_TO_WATCH, recursive=True)

    def on_modified(self, event):
        print(f"Modified: {event.src_path}")

    def on_created(self, event):
        print(f"Created: {event.src_path}")

    def on_deleted(self, event):
        print(f"Deleted: {event.src_path}")

    def run(self):
        self.observer.start()
        try:
            while True:
                time.sleep(1)
        except KeyboardInterrupt:
            self.observer.stop()
        self.observer.join()

watcher = Watcher()
watcher.run()
```

This script will monitor the specified directory and print changes to the console.

### Summary

- **`inotifywait`** is the most direct way to monitor directory changes in real time.
- **`watch`** can be used for periodic checks.
- **`entr`** provides an easy way to run commands in response to changes.
- **Python's `watchdog`** offers a programmatic approach for more complex monitoring.

These methods allow you to efficiently keep track of changes in directories on your Ubuntu system.
