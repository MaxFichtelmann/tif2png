const { PNG } = require("pngjs");
const UTIF = require("./UTIF.js");

module.exports = {
  /**
   * Simple sync conversion from tif to png.
   *
   * @param {Uint8Array} tif the binary tif image data
   * @returns {Uint8Array} the png image data
   */
  tif2png(tif) {
    const [ifd] = UTIF.decode(tif.buffer);
    UTIF.decodeImage(tif.buffer, ifd);

    const rgba = UTIF.toRGBA8(ifd);
    const { width, height } = ifd;

    const png = new PNG({ width, height });
    png.data = rgba;

    const pngBinary = PNG.sync.write(png);

    return pngBinary;
  },
};
