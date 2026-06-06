"""
Reconvierte PNGs a WebP MANTENIENDO la transparencia (canal alpha).
Los JPEG no tienen transparencia, esos se convierten normal.
"""
import os
import sys
import glob
from PIL import Image

sys.stdout.reconfigure(encoding='utf-8')

IMG_DIR = r"c:\Users\user\Desktop\SAMAGH\toner-impresoras\public\images"

MAX_WIDTH = 700
WEBP_QUALITY = 82

# First, let's reconvert the original PNGs from the WebP files we have
# We need to work with what we have - the .webp files that lost transparency

# Actually we need to re-do conversion properly.
# The webp files with white backgrounds need to be replaced.
# Let's check what we have and reconvert keeping alpha.

# Re-read original files - but they're already deleted!
# We need to use the current .webp files and just remove the white background
# OR we re-convert from scratch keeping alpha.

# Since original PNGs are gone, we'll process current WebP files differently.
# For product images on white background, we can use PIL to remove white background.

def remove_white_background(img, threshold=240):
    """Remove white/near-white background from image, making it transparent."""
    img = img.convert("RGBA")
    data = img.getdata()
    new_data = []
    for r, g, b, a in data:
        # If pixel is near-white, make it transparent
        if r > threshold and g > threshold and b > threshold:
            new_data.append((255, 255, 255, 0))
        else:
            new_data.append((r, g, b, a))
    img.putdata(new_data)
    return img

# Product images that should have transparent background (toners, printers)
NEEDS_TRANSPARENCY = [
    "NEGRO", "CYAN", "MAGENTA", "YELLOW", "LEXMARK",
    "IMAGEN", "RESIDUAL", "MANTENIMIENTO", "logo-samagh"
]

count = 0
for filepath in glob.glob(os.path.join(IMG_DIR, "*.webp")):
    filename = os.path.basename(filepath)
    name = os.path.splitext(filename)[0]
    
    # Check if this image should have transparency
    needs_alpha = any(keyword in name for keyword in NEEDS_TRANSPARENCY)
    
    if needs_alpha:
        try:
            img = Image.open(filepath).convert("RGBA")
            
            # Resize if needed
            if img.width > MAX_WIDTH:
                ratio = MAX_WIDTH / float(img.width)
                new_height = int(img.height * ratio)
                img = img.resize((MAX_WIDTH, new_height), Image.Resampling.LANCZOS)
            
            # Remove white background
            img = remove_white_background(img, threshold=238)
            
            # Save as WebP with alpha (lossless for alpha channel)
            img.save(filepath, "WEBP", quality=WEBP_QUALITY, method=6)
            print(f"OK (transparent): {filename}  ({os.path.getsize(filepath)//1024}KB)")
            count += 1
        except Exception as e:
            print(f"ERROR: {filename}: {e}")

print(f"\nDone! {count} images reconverted with transparent background.")
