"""
Convierte todas las imágenes a WebP (formato ultracomprimido moderno)
y actualiza automáticamente las referencias en el código TypeScript y HTML.
"""
import os
import sys
import glob
from PIL import Image

# Fix Windows console encoding
sys.stdout.reconfigure(encoding='utf-8')

IMG_DIR = r"c:\Users\user\Desktop\SAMAGH\toner-impresoras\public\images"
TS_FILE = r"c:\Users\user\Desktop\SAMAGH\toner-impresoras\src\app\components\catalogo\catalogo.component.ts"
HEADER_FILE = r"c:\Users\user\Desktop\SAMAGH\toner-impresoras\src\app\components\header\header.component.html"
HERO_SCSS = r"c:\Users\user\Desktop\SAMAGH\toner-impresoras\src\app\components\hero\hero.component.scss"
NOSOTROS_HTML = r"c:\Users\user\Desktop\SAMAGH\toner-impresoras\src\app\components\nosotros\nosotros.component.html"
CONTACTO_HTML = r"c:\Users\user\Desktop\SAMAGH\toner-impresoras\src\app\components\contacto\contacto.component.html"

MAX_WIDTH = 700
WEBP_QUALITY = 80

renames = {}

for filepath in glob.glob(os.path.join(IMG_DIR, "*")):
    filename = os.path.basename(filepath)
    name, ext = os.path.splitext(filename)
    ext_lower = ext.lower()

    # Skip already converted
    if ext_lower == ".webp":
        continue

    try:
        img = Image.open(filepath)

        # Resize if too wide
        if img.width > MAX_WIDTH:
            ratio = MAX_WIDTH / float(img.width)
            new_height = int(img.height * ratio)
            img = img.resize((MAX_WIDTH, new_height), Image.Resampling.LANCZOS)

        # Convert to RGB if needed (PNG with alpha -> white bg)
        if img.mode in ("RGBA", "P", "LA"):
            bg = Image.new("RGB", img.size, (255, 255, 255))
            if img.mode == "P":
                img = img.convert("RGBA")
            if img.mode in ("RGBA", "LA"):
                bg.paste(img, mask=img.split()[-1])
            img = bg
        elif img.mode != "RGB":
            img = img.convert("RGB")

        webp_filename = name + ".webp"
        webp_path = os.path.join(IMG_DIR, webp_filename)
        img.save(webp_path, "WEBP", quality=WEBP_QUALITY, method=6)

        old_size = os.path.getsize(filepath)
        new_size = os.path.getsize(webp_path)
        print(f"✅ {filename} → {webp_filename}  ({old_size//1024}KB → {new_size//1024}KB)")

        renames[filename] = webp_filename

        # Remove old file
        os.remove(filepath)

    except Exception as e:
        print(f"❌ Error con {filename}: {e}")

print(f"\nTotal imágenes convertidas: {len(renames)}")
print("\nActualizando referencias en el código...")

# Update all code files
files_to_update = [TS_FILE, HEADER_FILE, HERO_SCSS, NOSOTROS_HTML, CONTACTO_HTML]

for code_file in files_to_update:
    if not os.path.exists(code_file):
        continue
    try:
        with open(code_file, "r", encoding="utf-8") as f:
            content = f.read()

        original = content
        for old_name, new_name in renames.items():
            content = content.replace(old_name, new_name)

        if content != original:
            with open(code_file, "w", encoding="utf-8") as f:
                f.write(content)
            print(f"✅ Actualizado: {os.path.basename(code_file)}")
    except Exception as e:
        print(f"❌ Error actualizando {code_file}: {e}")

print("\n🎉 ¡Listo! Todas las imágenes convertidas a WebP ultra-comprimido.")
