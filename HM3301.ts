/**
 * Functions for the HM3301 I2C dust detection sensor and the Calliope mini
 *
 * @author Moritz Heine
 */

enum DustValues {
    //% block="P1.0"
    P1 = 2,
    //% block="P2.5"
    P2 = 3,
    //% block="P10.0"
    P10 = 4
}

namespace HM3301 {
    let ADDRESS = 0x40;

    function checksum(buf: Buffer): boolean {
        if (buf.length != 29) {
            return false
        }
        let sum = -1
        for (let j = 2; j < 28; j++) {
            sum += buf[j]
        }
    
        if (sum != buf[28]) {
            return false
        }
        return true
    }

    function readBytes(num: number) {
        let buf: Buffer = pins.i2cReadBuffer(ADDRESS, num, true)
        return buf
    }

    /**
     * Read Dust Value
     */
    //% blockId=HM3301_read_value
    //% block="Read dust value|%i "
    export function readDustValue(i: DustValues): number {
        // read 29 bytes from the sensor
        let bytes = readBytes(29)
        if (bytes.length != 29) {
            return -1
        }
        if (!checksum(bytes)) {
            return -1
        }
        let value = bytes[i * 2] << 8 | bytes[i * 2 + 1]
        return value
    }

    /**
     * Init
     */
    //% blockId=HM3301_init
    //% block="Initialize the sensor"
    export function init(): void {
        pins.i2cWriteNumber(ADDRESS, 0x88, NumberFormat.Int16BE, false)
    }
}
