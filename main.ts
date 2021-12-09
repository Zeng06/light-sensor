basic.forever(function () {
    basic.showNumber(smarthome.ReadLightIntensity(AnalogPin.P1))
    basic.pause(500)
    basic.clearScreen()
})
