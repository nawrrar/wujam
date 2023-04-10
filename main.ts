basic.showIcon(IconNames.Heart)
wuKong.setLightMode(wuKong.LightMode.BREATH)
let strip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
strip.showColor(neopixel.colors(NeoPixelColors.Red))
strip.show()
strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Blue))
strip.setPixelColor(33, neopixel.colors(NeoPixelColors.White))
strip.setPixelColor(32, neopixel.colors(NeoPixelColors.Purple))
basic.forever(function () {
	
})
