input.onButtonPressed(Button.A, function () {
    número_de_personas += 1
})
input.onGesture(Gesture.Shake, function () {
    número_de_personas = 0
    basic.showNumber(número_de_personas)
})
input.onButtonPressed(Button.B, function () {
    if (número_de_personas > 0) {
        basic.showNumber(número_de_personas - 1)
    }
    basic.showNumber(número_de_personas)
})
let número_de_personas = 0
número_de_personas = 0
basic.forever(function () {
    if (número_de_personas > 5) {
        basic.showString("AF")
    } else {
        basic.showNumber(número_de_personas)
    }
})
