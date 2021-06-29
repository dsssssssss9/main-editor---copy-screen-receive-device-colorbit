radio.onReceivedString(function (receivedString) {
    RX_Txt = receivedString
})
// Set Radio Group to be the same oa the sending device.
// 
// Initialise ColorBit Display
// 
let LED = 0
let loop2 = 0
let loop1 = 0
let RX_Txt = ""
radio.setGroup(42)
let colorbit_51bit = colorbit.initColorBit(DigitalPin.P2, BitColorMode.RGB)
colorbit_51bit.setBrightness(16)
colorbit_51bit.show()
basic.showString("Ready")
colorbit_51bit.showScrollStringColor("Ready", colorbit.colors(BitColors.Red))
colorbit_51bit.clear()
basic.forever(function () {
    loop1 = parseFloat(RX_Txt.charAt(0))
    loop2 = parseFloat(RX_Txt.charAt(1))
    LED = parseFloat(RX_Txt.charAt(2))
    if (LED == 1) {
        colorbit_51bit.drawColorBit(loop1, loop2, colorbit.colors(BitColors.Blue))
    } else {
        colorbit_51bit.drawColorBit(loop1, loop2, colorbit.colors(BitColors.Black))
    }
})
