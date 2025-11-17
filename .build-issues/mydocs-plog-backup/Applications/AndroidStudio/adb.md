# Android Studio Miscellaneous

Here are several ways to install Android Debug Bridge (ADB) on macOS:

## Method 1: Homebrew (Recommended)

**Install just ADB:**

```bash
brew install android-platform-tools
```

**Or install the full Android SDK:**

```bash
brew install --cask android-sdk
```

## Method 2: Official Android SDK

1. Download Android SDK Platform Tools from [developer.android.com/studio/releases/platform-tools](https://developer.android.com/studio/releases/platform-tools)
2. Extract the zip file to a folder (e.g., `~/android-sdk/platform-tools/`)
3. Add to your PATH in `~/.zshrc` or `~/.bash_profile`:

```bash
export PATH=$PATH:~/android-sdk/platform-tools
```

4. Reload your shell: `source ~/.zshrc`

## Method 3: Through Android Studio

If you already have Android Studio installed, ADB is included:

1. Open Android Studio
2. Go to SDK Manager
3. Install "Android SDK Platform-Tools"
4. ADB will be located at: `~/Library/Android/sdk/platform-tools/adb`

## Verify Installation

Test that ADB is working:

```bash
adb version
```

## Common ADB Commands

Once installed, you can use:

```bash
# List connected devices
adb devices

# Connect to device shell
adb shell

# Install APK
adb install app.apk

# Push/pull files
adb push localfile /sdcard/
adb pull /sdcard/file localfile
```

## Enable USB Debugging on Your Phone

Don't forget to enable USB debugging on your Samsung S23:

1. Settings > About phone > Software information
2. Tap "Build number" 7 times
3. Go back to Settings > Developer options
4. Enable "USB debugging"

The Homebrew method is usually the easiest and keeps ADB updated automatically.
