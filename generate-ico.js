const fs = require('fs');
const path = require('path');

// Generate 32x32 BMP inside ICO format
function createIcoBuffer(width, height) {
  // We can write a direct 32x32 uncompressed 32-bit RGBA ICO file
  const bpp = 32;
  const imageSize = width * height * 4;
  const headerSize = 40; // BITMAPINFOHEADER
  const maskRowSize = Math.floor((width + 31) / 32) * 4;
  const maskSize = maskRowSize * height;
  const dibSize = headerSize + imageSize + maskSize;

  // ICO header (6 bytes) + 1 Dir Entry (16 bytes) = 22 bytes offset
  const fileSize = 22 + dibSize;
  const buf = Buffer.alloc(fileSize);

  // ICONDIR
  buf.writeUInt16LE(0, 0); // reserved
  buf.writeUInt16LE(1, 2); // 1 = ICO
  buf.writeUInt16LE(1, 4); // count = 1

  // ICONDIRENTRY
  buf.writeUInt8(width === 256 ? 0 : width, 6);
  buf.writeUInt8(height === 256 ? 0 : height, 7);
  buf.writeUInt8(0, 8); // color count
  buf.writeUInt8(0, 9); // reserved
  buf.writeUInt16LE(1, 10); // color planes
  buf.writeUInt16LE(bpp, 12); // bits per pixel
  buf.writeUInt32LE(dibSize, 14); // bytes in resource
  buf.writeUInt32LE(22, 18); // offset of (DIB header)

  // BITMAPINFOHEADER
  let offset = 22;
  buf.writeUInt32LE(40, offset); // biSize
  buf.writeInt32LE(width, offset + 4); // biWidth
  buf.writeInt32LE(height * 2, offset + 8); // biHeight (doubled for ICO mask)
  buf.writeUInt16LE(1, offset + 12); // biPlanes
  buf.writeUInt16LE(bpp, offset + 14); // biBitCount
  buf.writeUInt32LE(0, offset + 16); // biCompression = BI_RGB
  buf.writeUInt32LE(imageSize + maskSize, offset + 20); // biSizeImage
  buf.writeInt32LE(0, offset + 24); // biXPelsPerMeter
  buf.writeInt32LE(0, offset + 28); // biYPelsPerMeter
  buf.writeUInt32LE(0, offset + 32); // biClrUsed
  buf.writeUInt32LE(0, offset + 36); // biClrImportant

  // Draw 32x32 pixels: bottom-to-top in DIB format
  // Dark slate background: #0b0f17
  // Cyan border: #06b6d4
  // Code bracket < : #38bdf8
  // Code bracket > : #f43f5e
  // Center 'L' letter : #ffffff
  // Green dot : #22c55e
  offset = 22 + 40;

  for (let y = height - 1; y >= 0; y--) {
    for (let x = 0; x < width; x++) {
      let r = 11, g = 15, b = 23, a = 255; // #0b0f17 dark background

      // Rounded border
      const isBorder = (x === 1 || x === width - 2) && (y >= 1 && y <= height - 2) ||
                       (y === 1 || y === height - 2) && (x >= 1 && x <= width - 2);
      if (isBorder) {
        r = 6; g = 182; b = 212; // Cyan border #06b6d4
      }

      // Green dot at top right (x: 24..27, y: 4..7)
      if (x >= 23 && x <= 26 && y >= 4 && y <= 7) {
        r = 34; g = 197; b = 94; // Green dot #22c55e
      }

      // Left bracket '<' (around x: 5..10, y: 10..22)
      const dy = Math.abs(y - 16);
      if (x === 6 + Math.floor(dy * 0.7) || x === 7 + Math.floor(dy * 0.7)) {
        if (y >= 10 && y <= 22) {
          r = 56; g = 189; b = 248; // Electric cyan
        }
      }

      // Right bracket '>' (around x: 21..26, y: 10..22)
      if (x === 25 - Math.floor(dy * 0.7) || x === 24 - Math.floor(dy * 0.7)) {
        if (y >= 10 && y <= 22) {
          r = 244; g = 63; b = 94; // Rose red
        }
      }

      // Center letter 'L' (x: 13..18, y: 11..21)
      // Vertical bar of L: x: 13..14, y: 11..21
      if ((x === 14 || x === 15) && (y >= 11 && y <= 20)) {
        r = 255; g = 255; b = 255; // White
      }
      // Horizontal bar of L: x: 14..18, y: 19..20
      if ((x >= 14 && x <= 18) && (y === 19 || y === 20)) {
        r = 255; g = 255; b = 255; // White
      }

      // Write BGRA in DIB
      buf.writeUInt8(b, offset);
      buf.writeUInt8(g, offset + 1);
      buf.writeUInt8(r, offset + 2);
      buf.writeUInt8(a, offset + 3);
      offset += 4;
    }
  }

  return buf;
}

const icoPath = path.join(__dirname, 'lakshmi-dev-portfolio', 'public', 'favicon.ico');
const icoData = createIcoBuffer(32, 32);
fs.writeFileSync(icoPath, icoData);
console.log('favicon.ico successfully overwritten with custom Lakshmi Portfolio 32x32 icon.');
