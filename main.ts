radio.onReceivedString(function (receivedString) {
    RX_Txt = receivedString
})
input.onButtonPressed(Button.B, function () {
	
})
let LED = 0
let loop2 = 0
let loop1 = 0
let RX_Txt = ""
radio.setGroup(42)
basic.showString("Go")
basic.forever(function () {
    loop1 = parseFloat(RX_Txt.charAt(0))
    loop2 = parseFloat(RX_Txt.charAt(1))
    LED = parseFloat(RX_Txt.charAt(2))
    if (LED == 1) {
        led.plot(loop1, loop2)
    } else {
        led.unplot(loop1, loop2)
    }
})
