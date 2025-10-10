#!/usr/bin/env python3
import imghdr
import os
import sys

ASSETS_DIR = "/workspace/design/assets"

def detect_ext(path: str) -> str:
    kind = imghdr.what(path)
    if kind is None:
        # fallback by header bytes
        with open(path, 'rb') as f:
            sig = f.read(12)
        if sig.startswith(b"\xFF\xD8\xFF"):
            return "jpg"
        if sig.startswith(b"\x89PNG\r\n\x1a\n"):
            return "png"
        if sig[:3] == b"GIF":
            return "gif"
        if sig[:4] == b"RIFF" and sig[8:12] == b"WEBP":
            return "webp"
        # default
        return "bin"
    if kind == "jpeg":
        return "jpg"
    return kind

def main():
    renamed = []
    for name in os.listdir(ASSETS_DIR):
        src = os.path.join(ASSETS_DIR, name)
        if not os.path.isfile(src):
            continue
        base, ext = os.path.splitext(name)
        detected = detect_ext(src)
        if detected == "bin":
            print(f"WARN: Unknown type for {name}")
            continue
        target = os.path.join(ASSETS_DIR, f"{base}.{detected}")
        if src != target:
            # Avoid overwrite
            if os.path.exists(target):
                os.remove(target)
            os.rename(src, target)
            renamed.append((name, os.path.basename(target)))
    for a, b in renamed:
        print(f"RENAMED {a} -> {b}")

if __name__ == "__main__":
    sys.exit(main())
