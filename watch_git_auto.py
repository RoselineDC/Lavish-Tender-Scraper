import time
import os
from datetime import datetime
from watchdog.observers import Observer
from watchdog.events import FileSystemEventHandler
import subprocess

# Set a cooldown (in seconds) to avoid repeated commits on rapid changes
COOLDOWN_SECONDS = 5
last_commit_time = 0


class GitAutoCommitHandler(FileSystemEventHandler):
    def on_any_event(self, event):
        global last_commit_time

        if event.is_directory:
            return
        if event.event_type not in ['modified', 'created', 'deleted', 'moved']:
            return

        current_time = time.time()

        if current_time - last_commit_time < COOLDOWN_SECONDS:
            # Still in cooldown window; ignore the event
            return

        last_commit_time = current_time  # update last commit time
        timestamp = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
        commit_message = f'modified by Roseline on {timestamp}'

        try:
            subprocess.run(['git', 'add', '.'], check=True)
            result = subprocess.run(['git', 'diff', '--cached', '--quiet'])
            if result.returncode == 0:
                print(f"[{timestamp}] No staged changes. Skipping commit.")
                return

            subprocess.run(['git', 'commit', '-m', commit_message], check=True)
            subprocess.run(['git', 'push'], check=True)
            print(f"[{timestamp}] Git commit and push successful.")
        except subprocess.CalledProcessError as e:
            print(f"Error during Git operation: {e}")


if __name__ == "__main__":
    path_to_watch = '.'  # current directory
    event_handler = GitAutoCommitHandler()
    observer = Observer()
    observer.schedule(event_handler, path=path_to_watch, recursive=True)

    print("Watching for file changes... Press Ctrl+C to stop.")
    observer.start()

    try:
        while True:
            time.sleep(1)
    except KeyboardInterrupt:
        observer.stop()
        print("Stopped watching.")
    observer.join()
