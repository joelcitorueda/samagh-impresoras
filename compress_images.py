import os
from PIL import Image

def compress_images(directory):
    for filename in os.listdir(directory):
        if filename.endswith((".png", ".jpg", ".jpeg")):
            filepath = os.path.join(directory, filename)
            try:
                img = Image.open(filepath)
                
                if filename.endswith((".jpg", ".jpeg")) and img.mode != 'RGB':
                    img = img.convert('RGB')
                
                max_width = 800
                if img.width > max_width:
                    ratio = max_width / float(img.width)
                    new_height = int((float(img.height) * float(ratio)))
                    img = img.resize((max_width, new_height), Image.Resampling.LANCZOS)
                
                if filename.endswith(".png"):
                    img.save(filepath, "PNG", optimize=True)
                else:
                    img.save(filepath, "JPEG", optimize=True, quality=85)
                print(f"Compressed {filename}")
            except Exception as e:
                print(f"Failed to compress {filename}: {e}")

compress_images(r"c:\Users\user\Desktop\SAMAGH\toner-impresoras\public\images")
