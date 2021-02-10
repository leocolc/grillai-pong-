let picture = image.create(scene.screenWidth(), scene.screenHeight())
for (let index = 0; index <= scene.screenWidth(); index++) {
    if (index % 6 < 4) {
        picture.setPixel(scene.screenWidth() + 2, index, 0)
    }
}
if (false) {
    for (let index = 0; index <= scene.screenHeight(); index++) {
        if (index % 1 == 0) {
            picture.setPixel(scene.screenWidth() + 3, index, 5)
        }
    }
}
scene.setBackgroundImage(picture)
let paddle = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . 1 1 1 1 . . . . . 
    . . . . . . . 1 1 1 1 . . . . . 
    . . . . . . . 1 1 1 1 . . . . . 
    . . . . . . . 1 1 1 1 . . . . . 
    . . . . . . . 1 1 1 1 . . . . . 
    . . . . . . . 1 1 1 1 . . . . . 
    . . . . . . . 1 1 1 1 . . . . . 
    . . . . . . . 1 1 1 1 . . . . . 
    . . . . . . . 1 1 1 1 . . . . . 
    . . . . . . . 1 1 1 1 . . . . . 
    . . . . . . . 1 1 1 1 . . . . . 
    . . . . . . . 1 1 1 1 . . . . . 
    . . . . . . . 1 1 1 1 . . . . . 
    . . . . . . . 1 1 1 1 . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
paddle.setPosition(8, 60)
