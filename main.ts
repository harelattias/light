function alef () {
    basic.showLeds(`
        . # . . .
        . # # # #
        . # # . .
        . # # # #
        . # . . .
        `)
}
function zain () {
    basic.showLeds(`
        . # # # .
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        `)
}
function kof () {
    basic.showLeds(`
        . # # # .
        . . . # .
        . # . # .
        . # . . .
        . # . . .
        `)
}
function vav () {
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        `)
}
function resh () {
    basic.showLeds(`
        . # # # #
        . . . . #
        . . . . #
        . . . . #
        . . . . #
        `)
}
function het () {
    basic.showLeds(`
        . # # # #
        . # . . #
        . # . . #
        . # . . #
        . # . . #
        `)
}
basic.forever(function () {
    if (input.lightLevel() < 50) {
        led.setBrightness(205)
        alef()
        basic.pause(5)
        vav()
        basic.pause(5)
        resh()
        basic.pause(10)
        het()
        basic.pause(5)
        zain()
        basic.pause(5)
        kof()
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
basic.forever(function () {
    if (input.lightLevel() > 205) {
        led.setBrightness(50)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
