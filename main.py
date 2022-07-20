def alef():
    basic.show_leds("""
                . # . . .
                . # # # #
                . # # . .
                . # # # #
                . # . . .
    """)
def zain():
    basic.show_leds("""
                . # # # .
                . . # . .
                . . # . .
                . . # . .
                . . # . .
    """)
def kof():
    basic.show_leds("""
                . # # # .
                . . . # .
                . # . # .
                . # . . .
                . # . . .
    """)
def vav():
    basic.show_leds("""
                . . # . .
                . . # . .
                . . # . .
                . . # . .
                . . # . .
    """)
def resh():
    basic.show_leds("""
                . # # # #
                . . . . #
                . . . . #
                . . . . #
                . . . . #
    """)
def het():
    basic.show_leds("""
                . # # # #
                . # . . #
                . # . . #
                . # . . #
                . # . . #
    """)

def on_forever():
    if input.light_level() < 50:
        led.set_brightness(205)
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
    else:
        basic.show_leds("""
            . . . . .
                        . . . . .
                        . . . . .
                        . . . . .
                        . . . . .
        """)
basic.forever(on_forever)

def on_forever2():
    if input.light_level() > 205:
        led.set_brightness(50)
    else:
        basic.show_leds("""
            . . . . .
                        . . . . .
                        . . . . .
                        . . . . .
                        . . . . .
        """)
basic.forever(on_forever2)
