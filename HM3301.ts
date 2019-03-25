/**
 * Functions for the HM3301 I2C dust detection sensor and the Calliope mini
 *
 * @author Moritz Heine
 */

enum DustValues {
    //% block="P1.0"
    P1 = 0,
    //% block="P2.5"
    P2 = 1,
    //% block="P10.0"
    P10 = 2
}

namespace HM3301 {
    let ADDRESS = 0x40;
    /**
     * Read Dust Value
     */
    //% blockId=HM3301_read_value
    //% block="Read dust value %i "
    export function readDustValue(i: DustValues):void {
        
    }
    /**
     * Init
     */
    //% blockId=HM3301_init
    //% block="Initialize the sensor"
    export function init():void {
        
    }


}
