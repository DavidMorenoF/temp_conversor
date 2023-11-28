function menu(): number {
    let opcio = game.askForNumber("1- Celsius to Fahrenheit 2- Fahrenheit to Celsius", 1)
    return opcio
}

let my_sprite = sprites.create(assets.image`Normal`)
my_sprite.setPosition(80, 70)
my_sprite.say("Temp Conversor", 1500)
scene.setBackgroundImage(assets.image` Space `)
pause(1500)
function color_by_temperature(valor: number, seleccio: number) {
    let my_sprite: Sprite;
    if (valor > 20 && seleccio == 1 || valor > 52 && seleccio == 2) {
        my_sprite = sprites.create(assets.image`Calor`)
        scene.setBackgroundImage(assets.image` Hot `)
        if (seleccio == 1) {
            my_sprite.say("" + Math.roundWithPrecision(valor * 9 / 5 + 32, 2) + "º Fahrenheit", 5000)
        } else {
            my_sprite.say("" + Math.roundWithPrecision((valor - 32) * 5 / 9, 2) + "º Celsius", 5000)
        }
        
    } else if (valor < 5 && seleccio == 1 || valor < 37 && seleccio == 2) {
        my_sprite = sprites.create(assets.image`Fred`)
        scene.setBackgroundImage(assets.image` Ice `)
        if (seleccio == 1) {
            my_sprite.say("" + Math.roundWithPrecision(valor * 9 / 5 + 32, 2) + "º Fahrenheit", 5000)
        } else {
            my_sprite.say("" + Math.roundWithPrecision((valor - 32) * 5 / 9, 2) + "º Celsius", 5000)
        }
        
    } else {
        my_sprite = sprites.create(assets.image`Normal`)
        scene.setBackgroundImage(assets.image` Forest `)
        if (seleccio == 1) {
            my_sprite.say("" + Math.roundWithPrecision(valor * 9 / 5 + 32, 2) + "º Fahrenheit", 5000)
        } else {
            my_sprite.say("" + Math.roundWithPrecision((valor - 32) * 5 / 9, 2) + "º Celsius", 5000)
        }
        
    }
    
    my_sprite.setPosition(80, 70)
    pause(5000)
}

function option() {
    let valor: number;
    let seleccio = menu()
    if (seleccio == 1) {
        valor = game.askForNumber("Put the number to convert", 3)
        color_by_temperature(valor, seleccio)
        option()
    } else if (seleccio == 2) {
        valor = game.askForNumber("Put the number to convert", 3)
        color_by_temperature(valor, seleccio)
        option()
    } else {
        game.gameOver(false)
    }
    
}

option()
