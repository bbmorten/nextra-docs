# Spotlight

To prevent **Spotlight** from indexing a specific volume on **macOS**, you have a couple of options depending on whether the volume is **internal**, **external**, or **network-mounted**.

---

### ✅ **Option 1: Use `mdutil` to Disable Spotlight Indexing**

You can disable Spotlight indexing for a specific volume using the `mdutil` command:

```bash
sudo mdutil -i off /Volumes/<YourVolumeName>
```

To also delete the existing index:

```bash
sudo mdutil -E /Volumes/<YourVolumeName>
```

To verify:

```bash
mdutil -s /Volumes/<YourVolumeName>
```

> 🔒 Requires `sudo` since it modifies system behavior.

---

### ✅ **Option 2: Add the Volume to Spotlight Privacy via GUI**

1. Open **System Settings** (or **System Preferences** on older macOS).
2. Go to **Siri & Spotlight** > Scroll down and click **Spotlight Privacy**.
3. Click the **"+"** button and add the volume (`/Volumes/<YourVolumeName>`).

This tells Spotlight **not to index** anything on the volume.

> You can use this method for USB drives, external SSDs, network shares, etc.

---

### ✅ **Option 3: Create `.metadata_never_index` File (Best for External/Removable Disks)**

For external drives or USBs:

```bash
sudo touch /Volumes/<YourVolumeName>/.metadata_never_index
```

Then eject and replug the volume. This prevents Spotlight from ever indexing that volume.

To reverse:

```bash
sudo rm /Volumes/<YourVolumeName>/.metadata_never_index
```

---

### 🔁 Summary

| Method                        | Scope                        | Best For                   |
|------------------------------|------------------------------|----------------------------|
| `mdutil -i off`              | Full control                 | Internal/boot volumes      |
| Spotlight Privacy (GUI)      | User-friendly                | All volumes                |
| `.metadata_never_index` file | Quick + portable             | External/removable volumes |

---

Let me know your use case (e.g., USB, Time Machine, VM volume), and I can suggest the best method!
