
def menu():
    opcio = game.ask_for_number("1- Celsius to Fahrenheit 2- Fahrenheit to Celsius", 1)
    return opcio

my_sprite = sprites.create(assets.image("""Normal"""))
my_sprite.set_position(80, 70)
my_sprite.say("Temp Conversor", 1500)
scene.set_background_image(assets.image(""" Space """))
pause(1500)

def color_by_temperature(valor, seleccio):
    if valor > 20 and seleccio == 1 or valor > 52 and seleccio == 2:
        my_sprite = sprites.create(assets.image("""Calor"""))
        scene.set_background_image(assets.image(""" Hot """))
        if seleccio == 1:
            my_sprite.say(str(Math.round_with_precision((valor * 9/5) + 32, 2))+ "º Fahrenheit", 5000)
        else:
            my_sprite.say(str(Math.round_with_precision((valor - 32) * 5/9, 2)) + "º Celsius", 5000)
    elif valor < 5 and seleccio ==1 or valor < 37 and seleccio == 2:
        my_sprite = sprites.create(assets.image("""Fred"""))
        scene.set_background_image(assets.image(""" Ice """))
        if seleccio == 1:
            my_sprite.say(str(Math.round_with_precision((valor * 9/5) + 32, 2)) + "º Fahrenheit", 5000)
        else:
            my_sprite.say(str(Math.round_with_precision((valor - 32) * 5/9, 2)) + "º Celsius", 5000)
    else:
        my_sprite = sprites.create(assets.image("""Normal"""))
        scene.set_background_image(assets.image(""" Forest """))
        if seleccio == 1:
            my_sprite.say(str(Math.round_with_precision((valor * 9/5) + 32, 2))+ "º Fahrenheit", 5000)
        else:
            my_sprite.say(str(Math.round_with_precision((valor - 32) * 5/9, 2)) + "º Celsius", 5000)
    
    my_sprite.set_position(80, 70)
    pause(5000)

def option():
    seleccio = menu()
    if seleccio == 1:
        valor = game.ask_for_number("Put the number to convert", 3)
        color_by_temperature(valor, seleccio)
        option()
    elif seleccio == 2:
        valor = game.ask_for_number("Put the number to convert", 3)
        color_by_temperature(valor, seleccio)
        option()
    else:
        game.game_over(False)

option()