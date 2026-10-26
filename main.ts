enum ActionKind {
    Walking,
    Idle,
    Jumping,
    WalkingRight,
    WalkingLeft
}
namespace SpriteKind {
    export const Item = SpriteKind.create()
    export const UI = SpriteKind.create()
    export const UIInventory = SpriteKind.create()
    export const UltimateProjectiles = SpriteKind.create()
    export const HeavyEnemy = SpriteKind.create()
    export const ShooterEnemy = SpriteKind.create()
    export const EnemyProjectile = SpriteKind.create()
    export const MeleeWeapon = SpriteKind.create()
    export const Boss = SpriteKind.create()
    export const Block = SpriteKind.create()
}
namespace StatusBarKind {
    export const BossHealth = StatusBarKind.create()
}
sprites.onOverlap(SpriteKind.MeleeWeapon, SpriteKind.Block, function (sprite, otherSprite) {
    sprites.destroy(sprite)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (playerCharacter.isHittingTile(CollisionDirection.Bottom) && !(inventoryOpen)) {
        playerCharacter.vy = -300
    }
})
sprites.onOverlap(SpriteKind.UltimateProjectiles, SpriteKind.Boss, function (sprite, otherSprite) {
    statusbars.getStatusBarAttachedTo(StatusBarKind.BossHealth, otherSprite).value += -10
    sprites.destroy(sprite)
})
sprites.onOverlap(SpriteKind.EnemyProjectile, SpriteKind.Player, function (sprite, otherSprite) {
    statusbars.getStatusBarAttachedTo(StatusBarKind.Health, otherSprite).value += -10
    scene.cameraShake(4, 200)
    sprites.destroy(sprite)
})
function LevelSetUp (level: number) {
    if (level == 1) {
        tiles.setCurrentTilemap(tilemap`level6`)
        PlayerSetUp()
        playerCharacter.setPosition(30, 10)
        EnemySpawner()
    } else if (level == 2) {
        tiles.setCurrentTilemap(tilemap`level8`)
        PlayerSetUp()
        playerCharacter.setPosition(60, 200)
        EnemySpawner()
    } else if (level == 3) {
        tiles.setCurrentTilemap(tilemap`level9`)
        PlayerSetUp()
        playerCharacter.setPosition(40, 20)
        EnemySpawner()
    } else if (level == 4) {
        tiles.setCurrentTilemap(tilemap`level10`)
        PlayerSetUp()
        playerCharacter.setPosition(100, 200)
        EnemySpawner()
        game.showLongText("Who are you?", DialogLayout.Full)
        game.setDialogFrame(img`
            333333333333333333333333
            3dddddddddddddddddddddd3
            b3dddddddddddddddddddd3b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            bb33333333333333333333bb
            bccccccccccccccccccccccb
            cccccccccccccccccccccccc
            `)
        game.showLongText("I am the Dungeon Master", DialogLayout.Full)
        game.showLongText("I've seen what you've done to get here", DialogLayout.Full)
        game.showLongText("I can assure you that you will not be able to defeat me", DialogLayout.Full)
        game.setDialogFrame(img`
            ..bbbbbbbbbbbbbbbbbbbb..
            .bd111111111111111111db.
            bd1dbbbbbbbbbbbbbbbbd1db
            b1dbbbbbbbbbbbbbbbbbbd1b
            b1bd1111111111111111db1b
            b1b111111111111111111b1b
            b1b111111111111111111b1b
            b1b111111111111111111b1b
            b1b111111111111111111b1b
            b1b111111111111111111b1b
            b1b111111111111111111b1b
            b1b111111111111111111b1b
            b1b111111111111111111b1b
            b1b111111111111111111b1b
            b1b111111111111111111b1b
            b1b111111111111111111b1b
            b1b111111111111111111b1b
            b1b111111111111111111b1b
            b1b111111111111111111b1b
            b1bd1111111111111111db1b
            bd1bbbbbbbbbbbbbbbbbb1db
            bbd111111111111111111dbb
            .bbbbbbbbbbbbbbbbbbbbbb.
            ..bbbbbbbbbbbbbbbbbbbb..
            `)
        game.showLongText("Look I just want to go home", DialogLayout.Full)
        game.showLongText("So please just let me go home", DialogLayout.Full)
        game.setDialogFrame(img`
            333333333333333333333333
            3dddddddddddddddddddddd3
            b3dddddddddddddddddddd3b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            bb33333333333333333333bb
            bccccccccccccccccccccccb
            cccccccccccccccccccccccc
            `)
        game.showLongText("No you'll have to fight me", DialogLayout.Full)
        game.setDialogFrame(img`
            ..bbbbbbbbbbbbbbbbbbbb..
            .bd111111111111111111db.
            bd1dbbbbbbbbbbbbbbbbd1db
            b1dbbbbbbbbbbbbbbbbbbd1b
            b1bd1111111111111111db1b
            b1b111111111111111111b1b
            b1b111111111111111111b1b
            b1b111111111111111111b1b
            b1b111111111111111111b1b
            b1b111111111111111111b1b
            b1b111111111111111111b1b
            b1b111111111111111111b1b
            b1b111111111111111111b1b
            b1b111111111111111111b1b
            b1b111111111111111111b1b
            b1b111111111111111111b1b
            b1b111111111111111111b1b
            b1b111111111111111111b1b
            b1b111111111111111111b1b
            b1bd1111111111111111db1b
            bd1bbbbbbbbbbbbbbbbbb1db
            bbd111111111111111111dbb
            .bbbbbbbbbbbbbbbbbbbbbb.
            ..bbbbbbbbbbbbbbbbbbbb..
            `)
        game.showLongText("Fine", DialogLayout.Full)
    } else if (level == 5) {
        endGame = true
    }
}
sprites.onOverlap(SpriteKind.MeleeWeapon, SpriteKind.ShooterEnemy, function (sprite, otherSprite) {
    statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, otherSprite).value += -50
    sprites.destroy(sprite)
})
statusbars.onZero(StatusBarKind.BossHealth, function (status) {
    if (status.spriteAttachedTo() == boss) {
        BossDeathCutscene()
        sprites.destroy(status.spriteAttachedTo(), effects.disintegrate, 1000)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile4`, function (sprite, location) {
    currentLevel += 1
    sprites.destroy(playerCharacter, effects.coolRadial, 200)
    sprites.destroyAllSpritesOfKind(SpriteKind.Player)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    sprites.destroyAllSpritesOfKind(SpriteKind.HeavyEnemy)
    sprites.destroyAllSpritesOfKind(SpriteKind.ShooterEnemy)
    sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
    sprites.destroyAllSpritesOfKind(SpriteKind.UltimateProjectiles)
    sprites.destroyAllSpritesOfKind(SpriteKind.MeleeWeapon)
    sprites.destroyAllSpritesOfKind(SpriteKind.StatusBar)
    sprites.destroyAllSpritesOfKind(SpriteKind.UI)
    sprites.destroyAllSpritesOfKind(SpriteKind.UIInventory)
    LevelSetUp(currentLevel)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    InventoryToggled()
})
function InventorySelect () {
    equipedItem = inventory[selectedItem]
    InventoryToggled()
}
sprites.onOverlap(SpriteKind.EnemyProjectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, otherSprite).value += -10
    sprites.destroy(sprite)
})
controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    if (inventoryOpen) {
        if (controller.A.isPressed()) {
            InventorySelect()
        } else if (!(controller.B.isPressed())) {
            PlayerInventoryNavigation()
        }
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    pause(1)
    if (playerCharacter != undefined) {
        if (equipedItem.equals(assets.image`Projectile Launcher`)) {
            if (canShoot && !(gamePaused)) {
                projectileVelocity = 200
                projectileFired = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . 4 . 4 . . . . . . 
                    . . . . . . . . 4 . . . . . . . 
                    . . . . . . . 4 . 4 . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, playerCharacter, projectileVelocity * shootingDirection, 0)
                projectileFired.setFlag(SpriteFlag.AutoDestroy, false)
                music.play(music.createSoundEffect(WaveShape.Sawtooth, 1828, 716, 170, 0, 421, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
            }
        } else if (equipedItem.equals(img`
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ..............b.........
            ..............bcccccccc.
            ............bbbddddddddc
            ..............bcccccccc.
            ..............b.........
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `)) {
            if (shootingDirection > 0) {
                knife = sprites.createProjectileFromSprite(assets.image`KnifeRight`, playerCharacter, 50, 0)
                knife.lifespan = 150
            } else if (shootingDirection < 0) {
                knife = sprites.createProjectileFromSprite(assets.image`KnifeLeft`, playerCharacter, -50, 0)
                knife.lifespan = 150
            }
            knife.setKind(SpriteKind.MeleeWeapon)
        } else if (equipedItem.equals(assets.image`Ultimate`)) {
            if (canShoot && !(gamePaused)) {
                if (canUseUltimate) {
                    UltimateAbility()
                }
            }
        }
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.EnemyProjectile, function (sprite, otherSprite) {
    sprites.destroy(sprite, effects.disintegrate, 100)
    sprites.destroy(otherSprite, effects.disintegrate, 100)
})
function PlayerAnimations () {
    walkRight = animation.createAnimation(ActionKind.Walking, 150)
    walkRight.addAnimationFrame(img`
        . . . . b b b b . . . . . . . . 
        . . b b 1 1 1 1 b b . . . . . . 
        . b b 1 1 1 1 1 1 b b . . . . . 
        . b d 1 1 1 1 1 1 1 b . . . . . 
        b d d 1 1 1 1 1 1 1 d b . . . . 
        b d d d 1 1 1 1 1 1 d b . . . . 
        b d d d d d d 1 1 1 d b . . . . 
        b b d d d d d 8 d 1 d b . . . . 
        b c b b b d d 8 d d b b . . . . 
        . b c b b 1 1 1 1 1 b . . . . . 
        . . b b b b b 1 b 1 b . . . . . 
        . . b b 1 1 1 c b b b . . . . . 
        . . b b b 1 b 1 b b . . . . . . 
        b . b b b b b b b . . . . . . . 
        b b b b b b b b . . . . . . . . 
        . b b b b b . . . . . . . . . . 
        `)
    walkRight.addAnimationFrame(img`
        . . . . . . b b b b b . . . . . 
        . . . . b b 1 1 1 1 1 b . . . . 
        . . . b b 1 1 1 1 1 1 b b . . . 
        . . b b d 1 1 1 1 1 1 1 b . . . 
        . . b d d d 1 1 1 1 1 1 d b . . 
        . . b d d d d 1 1 1 1 1 d b . . 
        . . b d d d d d d d 1 1 d b . . 
        . . b d d d d d d d 1 1 1 b . . 
        . . b d d d d d d c 8 1 1 b . . 
        . . . a b d d d b 1 1 1 1 b b . 
        . . . . b b b c b d b 1 b 1 b . 
        . . . b b b b b b b b b b b b . 
        b b . b b b b b b b b b b b . . 
        . b b b b b b b b . . . . . . . 
        . b b b b b b b 1 b 1 b . . . . 
        . . b b b b b b b b b b . . . . 
        `)
    animation.attachAnimation(playerCharacter, walkRight)
    walkLeft = animation.createAnimation(ActionKind.Walking, 150)
    walkLeft.addAnimationFrame(img`
        . . . . b b b b . . . . . . . . 
        . . b b 1 1 1 1 b b . . . . . . 
        . b b 1 1 1 1 1 1 b b . . . . . 
        . b 1 1 1 1 1 1 1 d b . . . . . 
        b d 1 1 1 1 1 1 1 d d b . . . . 
        b d 1 1 1 1 1 1 d d d b . . . . 
        b d 1 1 1 d d d d d d b . . . . 
        b d 1 d 8 d d d d d b b . . . . 
        b b d d 8 d d b b b c b . . . . 
        . b 1 1 1 1 1 b b c b . . . . . 
        . b 1 b 1 b b b b b . . . . . . 
        . b b b c 1 1 1 b b . . . . . . 
        . . b b 1 b 1 b b b . . . . . . 
        . . . b b b b b b b . b . . . . 
        . . . . b b b b b b b b . . . . 
        . . . . . . b b b b b . . . . . 
        `)
    walkLeft.addAnimationFrame(img`
        . . . . b b b b b . . . . . . . 
        . . . b 1 1 1 1 1 b b . . . . . 
        . . b b 1 1 1 1 1 1 b b . . . . 
        . . b 1 1 1 1 1 1 1 d b b . . . 
        . b d 1 1 1 1 1 1 d d d b . . . 
        . b d 1 1 1 1 1 d d d d b . . . 
        . b d 1 1 d d d d d d d b . . . 
        . b 1 1 1 d d d d d d d b . . . 
        . b 1 1 8 c d d d d d d b . . . 
        b b 1 1 1 1 b d d d b b . . . . 
        b 1 b 1 b d b c b b b . . . . . 
        b b b b b b b b b b b b . . . . 
        . b b b b b b b b b b b . b b . 
        . . . . . . b b b b b b b b . . 
        . . . b 1 b 1 b b b b b b b . . 
        . . . b b b b b b b b b b . . . 
        `)
    animation.attachAnimation(playerCharacter, walkLeft)
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Boss, function (sprite, otherSprite) {
    statusbars.getStatusBarAttachedTo(StatusBarKind.BossHealth, otherSprite).value += -30
    sprites.destroy(sprite)
})
sprites.onOverlap(SpriteKind.MeleeWeapon, SpriteKind.Boss, function (sprite, otherSprite) {
    statusbars.getStatusBarAttachedTo(StatusBarKind.BossHealth, otherSprite).value += -50
    sprites.destroy(sprite)
})
function BossBlock () {
    for (let index = 0; index <= 20; index++) {
        bossBlocking = sprites.create(img`
            . . . . . . b b b b b . . . . . 
            . . . . . . b b b b b . . . . . 
            . . . . . . b b b b b . . . . . 
            . . . . . . b b b b b . . . . . 
            . . . . . . b b b b b . . . . . 
            . . . . . . b b b b b . . . . . 
            . . . . . . b b b b b . . . . . 
            . . . . . . b b b b b . . . . . 
            . . . . . . b b b b b . . . . . 
            . . . . . . b b b b b . . . . . 
            . . . . . . b b b b b . . . . . 
            . . . . . . b b b b b . . . . . 
            . . . . . . b b b b b . . . . . 
            . . . . . . b b b b b . . . . . 
            . . . . . . b b b b b . . . . . 
            . . . . . . b b b b b . . . . . 
            `, SpriteKind.Block)
        bossBlocking.setPosition(boss.x - 40, boss.y - index * 2)
        bossBlocking.lifespan = randint(2500, 4000)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.ShooterEnemy, function (sprite, otherSprite) {
    healthBar.value += -10
    scene.cameraShake(4, 200)
    pause(2000)
})
function EnemyAnimations () {
    meleeWalking = animation.createAnimation(ActionKind.Walking, 200)
    meleeWalking.addAnimationFrame(img`
        ........................
        ........................
        ........................
        ........................
        .........bbbbb..........
        .......bbbbbbbbb........
        ......bbb11111bbb.......
        ......bb111111bbbb......
        .....bbbb12121bbbbbb....
        ....bb111b1bb1b1bbbbb...
        ....bbb1b1bbbbbbbbbbb...
        .....bbbbbbb111bbbbb....
        ......bbbbabbb1bbbb.....
        .......baaababbbbb......
        ........bbbbbbbbbb......
        .........bbbbbb.........
        .........bbbbbb.........
        .........bbbbbb.........
        .........bbbbbb.........
        .........bbbbbb.........
        .........bb..bb.........
        ........bbb..bbb........
        ........bb....bb........
        ........b......b........
        `)
    meleeWalking.addAnimationFrame(img`
        ........................
        ........................
        ........................
        ........................
        .........bbbbb..........
        .......bbbbbbbbb........
        ......bbb11111bbb.......
        ......bb111111bbbb......
        .....bb1b12121b1bbbb....
        ....bb111b1bb1b1bbbbb...
        ....bbb1b1b11b111bbbb...
        .....bb11111111bbbbb....
        ......bbb1ab1b1bbbb.....
        .......baaababbbbb......
        ........bbbbbbbbbb......
        .........bbbbbb.........
        .........bbbbbb.........
        .........bbbbbb.........
        .........bbbbbb.........
        .........bbbbbb.........
        .........bb..bb.........
        .........bb..bb.........
        .......bbb....bbb.......
        .......b........b.......
        `)
    heavyWalking = animation.createAnimation(ActionKind.Walking, 400)
    heavyWalking.addAnimationFrame(img`
        ........................
        ........................
        ..ccccccccccccccccccc...
        ..ccccccccccccccccccc...
        ..ccccccccccccccccccc...
        ..ccccc2ccccccc2ccccc...
        ..ccccccccccccccccccc...
        ..ccccccccccccccccccc...
        ..ccccccccccccccccccc...
        ..bbbbbbbbbbbbbbbbbbb...
        ..bbbbbbbbbbbbbbbbbbb...
        ..bbbbbbbbbbbbbbbbbbb...
        ..bbbbbbbbbbbbbbbbbbb...
        ..bbbbbbbbbbbbbbbbbbb...
        ..bbbbbbbbbbbbbbbbbbb...
        ..bbbbbb.......bbbbbb...
        ..bbbbbb.......bbbbbb...
        ..bbbbb.........bbbbb...
        ..bbbbb.........bbbbb...
        ..bbbbb.........bbbbb...
        ..bbbbb.........bbbbb...
        ........................
        ........................
        ........................
        `)
    heavyWalking.addAnimationFrame(img`
        ........................
        ........................
        cccccccccccccccccc......
        cccccccccccccccccc......
        cccccccccccccccccc......
        ccccc2cccccc2ccccc......
        cccccccccccccccccc......
        cccccccccccccccccc......
        cccccccccccccccccc......
        bbbbbbbbbbbbbbbbbb......
        bbbbbbbbbbbbbbbbbb......
        bbbbbbbbbbbbbbbbbb......
        bbbbbbbbbbbbbbbbbb......
        bbbbbbbbbbbbbbbbbb......
        bbbbbbbbbbbbbbbbbb......
        bbbbbb......bbbbbb......
        bbbbbb......bbbbbb......
        bbbbb........bbbbb......
        bbbbb........bbbbb......
        bbbbb........bbbbb......
        bbbbb........bbbbb......
        ........................
        ........................
        ........................
        `)
    heavyWalking.addAnimationFrame(img`
        ........................
        ........................
        ......cccccccccccccccccc
        ......cccccccccccccccccc
        ......cccccccccccccccccc
        ......ccccc2cccccc2ccccc
        ......cccccccccccccccccc
        ......cccccccccccccccccc
        ......cccccccccccccccccc
        ......bbbbbbbbbbbbbbbbbb
        ......bbbbbbbbbbbbbbbbbb
        ......bbbbbbbbbbbbbbbbbb
        ......bbbbbbbbbbbbbbbbbb
        ......bbbbbbbbbbbbbbbbbb
        ......bbbbbbbbbbbbbbbbbb
        ......bbbbbbbbbbbbbbbbbb
        ......bbbbbbbbbbbbbbbbbb
        ......bbbbbb......bbbbbb
        ......bbbbb........bbbbb
        ......bbbbb........bbbbb
        ......bbbbb........bbbbb
        ........................
        ........................
        ........................
        `)
    shooterWalking = animation.createAnimation(ActionKind.Walking, 200)
    shooterWalking.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . b b b b b b . . . . . 
        . . . . b b e e e e b b . . . . 
        . . . . b e e e e e e b . . . . 
        . . . . b e 2 e e 2 e b . . . . 
        . . . . b e e e e e e b . . . . 
        . . . . b e e e e e e b . . . . 
        . . . b b e e e e e e b b . . . 
        . . . . b e e e e e e b . . . . 
        . . . . b e e e e e e b . . . . 
        . . . . b b e e e e b b . . . . 
        . . . . b b e e e e b . . . . . 
        . . . . . b b e e b b . . . . . 
        . . . . . . b b b b . . . . . . 
        `)
    shooterWalking.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 5 . . 4 . . . . . . 
        . . . 4 . 2 . . 2 . . . 5 . . . 
        . . . . . b b b b b b 2 . . . . 
        . . 2 . b b e e e e b b . . 4 . 
        . . 4 . b e e e e e e b . . . . 
        . . . . b e 2 e e 2 e b . 2 . . 
        . . 5 . b e e e e e e b . . . . 
        2 . . . b e e e e e e b 2 . . . 
        . . b b b e e e e e e b b b 5 . 
        . 4 . . b e e e e e e b . . . . 
        . . . . b e e e e e e b 2 . . . 
        . . 5 2 b b e e e e b b . . 4 . 
        . . 4 . b b e e e e b 2 . . . . 
        . . . . 2 b b e e b b . 4 5 . . 
        . . . 4 . . b b b b . . . . . . 
        `)
    shooterWalking.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . 5 . . . . 5 . . . . . . . 
        . 4 . . . . . . . . . . 4 . . . 
        . . . . . b b b b b b . . . . . 
        . . 5 . b b e e e e b b . 4 . . 
        . . . . b e e e e e e b . . . . 
        . 4 . . b e 2 e e 2 e b . . . . 
        . . . . b e e e e e e b . . 5 . 
        . . . . b e e e e e e b . . . . 
        . . b b b e e e e e e b b b . . 
        . . . . b e e e e e e b . . . . 
        . 4 . . b e e e e e e b . . 4 . 
        . . . . b b e e e e b b . . . . 
        . . 5 . b b e e e e b . . 5 . . 
        . . . . . b b e e b b . . . . . 
        . . . 4 . . b b b b . 4 . 4 . . 
        `)
    shooterWalking.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 5 . . 5 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . b b b b b b . . . . . 
        . . 5 . b b e e e e b b . 5 . . 
        . . . . b e e e e e e b . . . . 
        . 5 . . b e 2 e e 2 e b . . . . 
        . . . . b e e e e e e b . . 5 . 
        . . . . b e e e e e e b . . . . 
        . . b b b e e e e e e b b b . . 
        . . . . b e e e e e e b . . . . 
        . . . . b e e e e e e b . 5 . . 
        . . . . b b e e e e b b . . . . 
        . . 5 . b b e e e e b . . . . . 
        . . . . . b b e e b b . . 5 . . 
        . . . . . . b b b b . . . . . . 
        `)
}
sprites.onOverlap(SpriteKind.MeleeWeapon, SpriteKind.HeavyEnemy, function (sprite, otherSprite) {
    statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, otherSprite).value += -40
    sprites.destroy(sprite)
})
function EnemyAI () {
    if (!(gamePaused)) {
        for (let value of enemyList) {
            enemyDirectionX = playerCharacter.x - value.x
            enemyDirectionY = playerCharacter.y - value.y
            enemyToPlayerDistance = Math.sqrt(enemyDirectionX ** 2 + enemyDirectionY ** 2)
            if (enemyToPlayerDistance < 75) {
                if (playerCharacter.top > value.bottom) {
                    value.follow(playerCharacter, 5)
                } else {
                    if (value != heavyMeleeEnemy) {
                        value.follow(playerCharacter, 50)
                    } else {
                        value.follow(playerCharacter, 30)
                    }
                    if (!(value.tileKindAt(TileDirection.Left, assets.tile`transparency16`)) || !(value.tileKindAt(TileDirection.Right, assets.tile`transparency16`))) {
                        if (value.isHittingTile(CollisionDirection.Bottom)) {
                            value.vy = -250
                        }
                    }
                }
            }
        }
    }
}
function PlayerInventoryNavigation () {
    selectedItem += Math.constrain(controller.dx(), -1, 1)
    if (selectedItem >= inventoryDataListUI.length) {
        selectedItem = 0
    } else if (selectedItem < 0) {
        selectedItem = inventoryDataListUI.length - 1
    }
    sprites.destroy(indicatorUI)
    indicatorUI = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.UIInventory)
    if (inventory.length > 0) {
        indicatorUI.setImage(img`
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            `)
        indicatorUI.setPosition(inventoryDataListUI[selectedItem].x, inventoryDataListUI[selectedItem].y)
        indicatorUI.setFlag(SpriteFlag.RelativeToCamera, true)
        indicatorUI.setScale(2, ScaleAnchor.Middle)
        indicatorUI.z = 15
    }
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.ShooterEnemy, function (sprite, otherSprite) {
    statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, otherSprite).value += -20
    sprites.destroy(sprite)
})
statusbars.onZero(StatusBarKind.EnemyHealth, function (status) {
    sprites.destroy(status.spriteAttachedTo(), effects.disintegrate, 100)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    hasItem = false
    if (currentLevel == 1) {
        for (let value2 of inventory) {
            if (value2.equals(assets.image`Projectile Launcher`)) {
                hasItem = true
            }
        }
        if (!(hasItem)) {
            ChestOpening(assets.image`Projectile Launcher`)
            game.showLongText("Acquired Projectile Launcher", DialogLayout.Center)
            canShoot = true
            playerCharacter.sayText("I'll be needing this. Those things don't look friendly", 2000, false)
        }
    } else if (currentLevel == 2) {
        for (let value3 of inventory) {
            if (value3.equals(assets.image`KnifeRight`)) {
                hasItem = true
            }
        }
        if (!(hasItem)) {
            game.showLongText("Acquired Knife", DialogLayout.Center)
            ChestOpening(assets.image`KnifeRight`)
        }
    } else if (currentLevel == 3) {
        for (let value4 of inventory) {
            if (value4.equals(assets.image`Ultimate`)) {
                hasItem = true
            }
        }
        if (!(hasItem)) {
            game.showLongText("Acquired Ultimate Launcher", DialogLayout.Center)
            ChestOpening(assets.image`Ultimate`)
            ultimateCooldownDelay = 0
            canShoot = true
        }
    }
    tiles.setTileAt(location, sprites.dungeon.chestOpen)
    firstPlay = false
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.HeavyEnemy, function (sprite, otherSprite) {
    healthBar.value += -40
    scene.cameraShake(8, 500)
    pause(2000)
})
statusbars.onZero(StatusBarKind.Health, function (status) {
    game.splash("You died")
    pause(150)
    sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
    sprites.destroyAllSpritesOfKind(SpriteKind.UltimateProjectiles)
    sprites.destroyAllSpritesOfKind(SpriteKind.MeleeWeapon)
    sprites.destroy(playerCharacter)
    sprites.destroyAllSpritesOfKind(SpriteKind.UI)
    sprites.destroyAllSpritesOfKind(SpriteKind.UIInventory)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    sprites.destroyAllSpritesOfKind(SpriteKind.HeavyEnemy)
    sprites.destroyAllSpritesOfKind(SpriteKind.ShooterEnemy)
    sprites.destroyAllSpritesOfKind(SpriteKind.Boss)
    sprites.destroyAllSpritesOfKind(SpriteKind.EnemyProjectile)
    LevelSetUp(currentLevel)
})
function EnemySpawner () {
    enemyList = []
    for (let value5 of tiles.getTilesByType(assets.tile`tile8`)) {
        meleeEnemy = sprites.create(img`
            ........................
            ........................
            ........................
            ........................
            .........bbbbb..........
            .......bbbbbbbbb........
            ......bbb11111bbb.......
            ......bb111111bbbb......
            .....bbbb12121bbbbbb....
            ....bb111b1bb1b1bbbbb...
            ....bbb1b1bbbbbbbbbbb...
            .....bbbbbbb111bbbbb....
            ......bbbbabbb1bbbb.....
            .......baaababbbbb......
            ........bbbbbbbbbb......
            .........bbbbbb.........
            .........bbbbbb.........
            .........bbbbbb.........
            .........bbbbbb.........
            .........bbbbbb.........
            .........bb..bb.........
            ........bbb..bbb........
            ........bb....bb........
            ........b......b........
            `, SpriteKind.Enemy)
        tiles.placeOnTile(meleeEnemy, value5)
        tiles.setTileAt(value5, assets.tile`transparency16`)
        enemyHealthBar = statusbars.create(20, 4, StatusBarKind.EnemyHealth)
        enemyHealthBar.max = 50
        enemyHealthBar.attachToSprite(meleeEnemy)
        meleeEnemy.ay = 1000
        enemyList.push(meleeEnemy)
        animation.attachAnimation(meleeEnemy, meleeWalking)
        animation.setAction(meleeEnemy, ActionKind.Walking)
    }
    for (let value6 of tiles.getTilesByType(assets.tile`tile7`)) {
        heavyMeleeEnemy = sprites.create(img`
            ........................
            ........................
            ..ccccccccccccccccccc...
            ..ccccccccccccccccccc...
            ..ccccccccccccccccccc...
            ..ccccc2ccccccc2ccccc...
            ..ccccccccccccccccccc...
            ..ccccccccccccccccccc...
            ..ccccccccccccccccccc...
            ..bbbbbbbbbbbbbbbbbbb...
            ..bbbbbbbbbbbbbbbbbbb...
            ..bbbbbbbbbbbbbbbbbbb...
            ..bbbbbbbbbbbbbbbbbbb...
            ..bbbbbbbbbbbbbbbbbbb...
            ..bbbbbbbbbbbbbbbbbbb...
            ..bbbbbb.......bbbbbb...
            ..bbbbbb.......bbbbbb...
            ..bbbbb.........bbbbb...
            ..bbbbb.........bbbbb...
            ..bbbbb.........bbbbb...
            ..bbbbb.........bbbbb...
            ........................
            ........................
            ........................
            `, SpriteKind.HeavyEnemy)
        tiles.placeOnTile(heavyMeleeEnemy, value6)
        tiles.setTileAt(value6, assets.tile`transparency16`)
        enemyHealthBar = statusbars.create(20, 4, StatusBarKind.EnemyHealth)
        enemyHealthBar.max = 100
        enemyHealthBar.attachToSprite(heavyMeleeEnemy)
        heavyMeleeEnemy.ay = 1000
        enemyList.push(heavyMeleeEnemy)
        animation.attachAnimation(heavyMeleeEnemy, heavyWalking)
        animation.setAction(heavyMeleeEnemy, ActionKind.Walking)
    }
    for (let value7 of tiles.getTilesByType(assets.tile`tile6`)) {
        rangedEnemy = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . b b b b b b . . . . . 
            . . . . b b e e e e b b . . . . 
            . . . . b e e e e e e b . . . . 
            . . . . b e 2 e e 2 e b . . . . 
            . . . . b e e e e e e b . . . . 
            . . . . b e e e e e e b . . . . 
            . . . b b e e e e e e b b . . . 
            . . . . b e e e e e e b . . . . 
            . . . . b e e e e e e b . . . . 
            . . . . b b e e e e b b . . . . 
            . . . . b b e e e e b . . . . . 
            . . . . . b b e e b b . . . . . 
            . . . . . . b b b b . . . . . . 
            `, SpriteKind.ShooterEnemy)
        tiles.placeOnTile(rangedEnemy, value7)
        tiles.setTileAt(value7, assets.tile`transparency16`)
        enemyHealthBar = statusbars.create(20, 4, StatusBarKind.EnemyHealth)
        enemyHealthBar.max = 30
        enemyHealthBar.attachToSprite(rangedEnemy)
        rangedEnemy.ay = 1000
        enemyList.push(rangedEnemy)
        animation.attachAnimation(rangedEnemy, shooterWalking)
        animation.setAction(rangedEnemy, ActionKind.Walking)
    }
    for (let value8 of tiles.getTilesByType(assets.tile`tile10`)) {
        boss = sprites.create(assets.image`Boss`, SpriteKind.Boss)
        tiles.placeOnTile(boss, value8)
        tiles.setTileAt(value8, assets.tile`transparency16`)
        enemyHealthBar = statusbars.create(100, 5, StatusBarKind.BossHealth)
        enemyHealthBar.max = 1500
        enemyHealthBar.value = 1500
        enemyHealthBar.attachToSprite(boss)
    }
}
sprites.onOverlap(SpriteKind.UltimateProjectiles, SpriteKind.Enemy, function (sprite, otherSprite) {
    statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, otherSprite).value += -5
    sprites.destroy(sprite)
})
function UltimateAbility () {
    // 30 is normal and 60 is nice but a little much
    projectileNumberSemiCircle = 30
    for (let index = 0; index < 3; index++) {
        for (let index3 = 0; index3 <= projectileNumberSemiCircle - 1; index3++) {
            projectileVelocity = 200
            playerAngleTheta = index3 * (1.57 / projectileNumberSemiCircle) + projectileAngleOffset
            projectileFired = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 4 . 4 . . . . . . 
                . . . . . . . . 4 . . . . . . . 
                . . . . . . . 4 . 4 . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, playerCharacter, 100, 100)
            // Very powerful ultimate. Do not spam for sake of computer.
            projectileFired.setVelocity(Math.cos(playerAngleTheta) * projectileVelocity, Math.sin(playerAngleTheta) * projectileVelocity)
            projectileFired.setKind(SpriteKind.UltimateProjectiles)
            music.play(music.createSoundEffect(WaveShape.Sawtooth, 2547, 1978, 153, 0, 69, SoundExpressionEffect.None, InterpolationCurve.Logarithmic), music.PlaybackMode.InBackground)
        }
        pause(200)
    }
    ultimateCooldownDelay = 20
    canUseUltimate = false
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile5`, function (sprite, location) {
    healthBar.value += -1
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Block, function (sprite, otherSprite) {
    sprites.destroy(sprite, effects.disintegrate, 100)
})
sprites.onOverlap(SpriteKind.UltimateProjectiles, SpriteKind.Block, function (sprite, otherSprite) {
    sprites.destroy(sprite, effects.disintegrate, 100)
})
function ChestOpening (Item: Image) {
    inventory.push(Item)
}
controller.up.onEvent(ControllerButtonEvent.Released, function () {
    playerCharacter.vy = 0
})
function BossShootingMultiple (Target: Sprite, Shooter: Sprite, PlayerEnemyDistance: number, EnemyProjectileSpeed: number) {
    projectileNumberSemiCircle = 20
    for (let index4 = 0; index4 <= projectileNumberSemiCircle - 1; index4++) {
        bossAngleTheta = index4 * (0.785 / projectileNumberSemiCircle) + 2.8
        bossProjectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 4 . 4 . . . . . . 
            . . . . . . . . 4 . . . . . . . 
            . . . . . . . 4 . 4 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, boss, Math.cos(bossAngleTheta) * EnemyProjectileSpeed, Math.sin(bossAngleTheta) * EnemyProjectileSpeed)
        bossProjectile.setKind(SpriteKind.EnemyProjectile)
        bossProjectile.setFlag(SpriteFlag.AutoDestroy, false)
        pause(250)
    }
}
function BossShootingHoming (Target: Sprite, Shooter: Sprite, PlayerEnemyDistance: number, EnemyProjectileSpeed: number) {
    for (let index5 = 0; index5 <= 3; index5++) {
        bossProjectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . b b b . . . . . . 
            . . . . . . . b b b . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, boss, 50, 50)
        bossProjectile.setKind(SpriteKind.EnemyProjectile)
        bossProjectile.follow(playerCharacter, 100)
        bossProjectile.lifespan = 1800
        bossProjectile.setFlag(SpriteFlag.AutoDestroy, false)
        pause(500)
    }
}
sprites.onOverlap(SpriteKind.UltimateProjectiles, SpriteKind.ShooterEnemy, function (sprite, otherSprite) {
    statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, otherSprite).value += -5
    sprites.destroy(sprite)
})
function PlayerSetUp () {
    playerCharacter = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ..........bbbb..........
        ........bb1111bb........
        .......bb111111bb.......
        .......bd1111111b.......
        ......bdd1111111db......
        ......bddd111111db......
        ......bdddddd111db......
        ......bbddddd8d1db......
        ......bcbbbdd8ddbb......
        .......bcbb11111b.......
        ........bbbbb1b1b.......
        ........bb111cbbb.......
        ........bbb1b1bb........
        ......b.bbbbbbb.........
        ......bbbbbbbb..........
        .......bbbbb............
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Player)
    playerCharacter.ay = 1000
    healthBar = statusbars.create(20, 4, StatusBarKind.Health)
    healthBar.max = 100
    healthBar.attachToSprite(playerCharacter)
    playerCharacter.setStayInScreen(true)
    controller.moveSprite(playerCharacter, 100, 0)
    playerCharacter.z = 10
    scene.cameraFollowSprite(playerCharacter)
    selectedItem = 0
    if (!(inventory.length > 0)) {
        equipedItem = img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `
    }
    inventoryOpen = false
    PlayerAnimations()
    if (firstPlay) {
        canShoot = false
    } else {
        canShoot = true
    }
    ultimateCooldownUI = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.UI)
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (inventory.length > 1) {
        if (inventory.indexOf(equipedItem) + 1 >= inventory.length) {
            equipedItem = inventory[0]
        } else {
            equipedItem = inventory[inventory.indexOf(equipedItem) + 1]
        }
    }
})
sprites.onOverlap(SpriteKind.UltimateProjectiles, SpriteKind.HeavyEnemy, function (sprite, otherSprite) {
    statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, otherSprite).value += -5
    sprites.destroy(sprite)
})
function OpeningCutscene () {
    tiles.setCurrentTilemap(tilemap`level11`)
    scene.setBackgroundImage(img`
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999111199999999999999999999999999999999999999999999999999999999999999999999999999999911119999999999999999999999999999999999999999999999999999
        9999999999999999999991111119999999999999999999999999999999999999999999999999999999999999999999999999999111111999999999999999999999999999999999999999999999999999
        9999999999999999999991111119911999999999999999999999999999999999999999999999999999999999999999999999999111111991199999999999999999999999999999999999999999999999
        9999999999999999991111111119111119999999999999999999999999999999999999999999999999999999999999999999111111111911111999999999999999999999999999999999999999999999
        9999999999999999911111111111111119999999999999999999999999999999999999999999999999999999999999999991111111111111111999999999999999999999999999999999999999999999
        9999999999999999111111111111111111199999999999999999999999999999999999999999999999999999999999999911111111111111111119999999999999999999999999999999999999999999
        9999999999999999111111111111111111119999999999999999999999999999999999999999999999999999999999999911111111111111111111999999999999999999999999999999999999999999
        9999999999999999911111111111111111119991199999999999999999999999999999999999999999999999999999999991111111111111111111999119999999999999999999999999999999999999
        9999999999999111191111111111111111119911111999999999999999999999999999999999999999999999999999911119111111111111111111991111199999999999999999999999999999999999
        9999999999991111119111111111111111199911111999999999999999999999999999999999999999999999999999111111911111111111111119991111199999999999999999999999999999999999
        9999999999991111111111111111111111911111111199999999999999999999999999999999999999999999999999111111111111111111111191111111119999999999999999999999999999999999
        9999999999991111111111111111111111111111111199999999999999999999999999999999999999999999999999111111111111111111111111111111119999999999999999999999999999999999
        9999999999999111111111111111111111111111111199999999999999999999999999999999999999999999999999911111111111111111111111111111119999999999999999999999999999999999
        9911199991111911111111111111111111111111111991199999999999991111999999999999999999991119999111191111111111111111111111111111199119999999999999111199999999999999
        9111119911111111111111111111111111111111111911119999999999911111199999999999999999911111991111111111111111111111111111111111191111999999999991111119999999999999
        9111119111111111111111111111111111111111111911119999999999911111191119999999999999911111911111111111111111111111111111111111191111999999999991111119111999999999
        9911111111111111111111111111111111111111111111119999999999999111111111999999999999991111111111111111111111111111111111111111111111999999999999911111111199999999
        9111111111111111111111111111111111111111111111199999999911119111111111999999999999911111111111111111111111111111111111111111111119999999991111911111111199999999
        1111111111111111111111111111111111111111111111119999999111111111111119999999999199111111111dd1111111111111111111111111111111111111999999911111111111111999999999
        1111111111111111111111111111111111111111111111111911199111111111111111111999999ddd111111111ddd111111111111111111111111111111111111191119911111111111111111199999
        1111111111111111111111111111111111111111111111111111111111111111111111111199991ddd111111111ddd111111111111111111111111111111111111111111111111111111111111119999
        11111111111111111111111111111111111111111111111111111111111111111111111111999ddddddd111111ddddd11111111111111111111111111111111111111111111111111111111111119999
        11111111111111111111111111111111111111111ddddddddd111111111111111111111111111ddddddd111111ddddd111111111111111111111111111111111111111111dddddddddd1111111111111
        11111111111111111111111111111111111111111ddddddddd111111111111111111111111111ddddddd111111ddddd111111111111111111111111111111111111111111dddddddddd1111111111111
        1111111111111111111ddd1111111111111111111d11dddddd111111111111111111111111111d11dddd11111ddddddd11111111111111111111dd1111111111111111111dd1d1ddddd1111111111111
        111111111111111111ddddd111111111111111111ddddddd1d111111111111111111111111111ddddddd11111ddddddd1111111111111111111dddd111111111111111111dddddd11dd1111111111111
        11111111111111111dddddd111111111111111111ddddddddd1111111111d11111111ddddd111d1ddddd11111ddddddd11111111111111111dddddd111111111111111111dddddddddd1111111111111
        11111111111111111ddd1d111111d111111111111ddddddddd111111111dd11111111ddddd111ddddddd11111ddddddd11111111111111111ddd1d111111dd11111111111dddd1ddddd11111111dd111
        11111111111111111dddddd11111d111111111111ddddddd1d111111111dd11111111ddddd111ddddddd11111ddddddd11111111111111111dddddd11111dd11111111111ddddddd1dd11111111dd111
        11111111ddd111111dd11d11111ddd11111111111ddddddddd11dddddd1dd11111111ddddd111ddddddd11111ddddddd111111111dd111111ddd1d11111ddd11111111111dddddddddd1ddddddddd111
        d1dd1111ddddddddddd1ddd111ddddd1111111111ddddddd1d11d11ddd1dd111111111dd1dd11ddddddd111dddddddddd1dd1111ddddddddddddd1d1111dddd1111111111dddddd11dd1d11dddddd111
        dddd11111d1dd1ddddddddd111ddddd1111111111ddddddddd11dddd1d1dd11111111dddddd11dd1dddd111ddddddddddddd1111dd1ddd1dddddddd1111dddd1111111111dddddddddd1dddd1dddd111
        dd1d11111ddd1111ddddddd111ddddd1111111111ddddddddd11dddd1dddd11111111dddddd11ddddddd111ddddddddddd1d1111dddd1d11ddddddd1111dddd1111111111dddddddddd1dddd1dddd111
        dddd1111dddddddddddddddd11dddddd11dd1dd1ddddddddddd1d11dddddd11111111dddddd11ddddddd111ddddddddddddd1111dddddddddddddddd11dddddd111d11ddddddddddddd1d11dddddd111
        dd1d1111dddddddddddddddd11dddddd11ddddddddddddddddd1ddddddddd11d11d11dddddd11ddddddd111ddddddddddd1d1111dddddddddddddddd11dddddd111dddddddddddddddd1ddddddddd111
        ddddd1dd1d1ddddddddddddd11ddddddd1dddd11ddddddddddddd11bbddddddd1ddd11dd1dd11ddddddd111ddddddddddddddd1ddd1ddddddddddddd11ddddddd111d11ddddddbddddddd11bbbddd1dd
        ddddd1dddddddddddddddddddd1dddddd1dddddddddbbbdddddddddbbbdddddd1ddd1dddddd11ddddddd111ddddddddddddddd1dddddddddddddddddddddddddd1ddddddddddbbdddddddddbbbddd1dd
        ddddd1ddddddddddddddddddddddddddd1dddddddddbbbdddddddddbbbdddddddddddddddddddddddddd111ddddddddddddddd1dddddddddddddddddddddddddd1ddddddddddbbdddddddddbbbdddddd
        ddddd1ddddddddddddddddddddddddddd1dddddddbbbbbbbddddddbbbbbddddddddddddddddddddddddddd1ddddddddddddddd1dddddddddddddddddddddddddd1d1ddddddbbbbbbbdddddbbbbbddddd
        dddddbbbbbbbbbddddddddddddddddddd1dddddddbbbbbbbddddddbbbbbddddddddddddddddddddddddddd1ddddddddddddddbbbbbbbbbbdddddddddddddddddd1ddddddddbbbbbbbdddddbbbbbddddd
        dddddbbbbbbbbbddddddddddddddddddd1dddddddbbbbbbbddddddbbbbbddddddddddddddddddddddddddd1ddddddddddddddbbbbbbbbbbdddddddddddddddddd1ddddddddbbbbbbbdddddbbbbbddddd
        dddddbddbbbbbbddddddddddddddddddd1dddddddbddbbbbdddddbbbbbbbdd111dddddddddddddddbbdddd1ddddddddddddddbbdbdbbbbbdddddddddddddddddd1ddddddddbbbbbbbddddbbbbbbbb11d
        dddddbbbbbbbdbddddddddddddddddddd1dddddddbbbbbbbdddddbbbbbbbddd11ddddddddddddddbbbbddd1ddddddddddddddbbbbbbddbbdddddddddddddddddd1ddddddddbbbbbbbddddbbbbbbbbddd
        dddddbbbbbbbbbddddddddddbddddddddbbbbbdddbdbbbbbdddddbbbbbbbddddddddddd1dddddbbbbbbddd1ddddddddddddddbbbbbbbbbbdddddddddddddddddddbbbbddddbbbdbbbddddbbbbbbbbddd
        dddddbbbbbbbbbdddddddddbbddddddddbbbbbdddbbbbbbbdddddbbbbbbbdd1ddddddddddddddbbbdbddddddbbdddddddddddbbbbdbbbbbddddddddbbdddddddddbbbbddddbbbdbbbddddbbbbbbbbd1d
        dddddbbbbbbbdbdddddddddbbddddddddbbbbbdddbbbbbbbdddddbbbbbbbdd111ddddddddddddbbbbbbdddddbbdddddddddddbbbbbbbdbbddddddddbbddddddddbbbbbbdddbbbbbbbddddbbbbbbbb11d
        dddddbbbbbbbbbddbbbbbbdbbddddddddbbbbbdddbbbbbbbdddddbbbbbbbdddddddddbb1dddddbbbdbdddddbbbdddddddddddbbbbbbbbbbdbbbbbbbbbddddddddbbbbbbdddbbbdbbbddddbbbbbbbbddd
        dddddbbbbbbbdbddbddbbbdbbdddddddddbbdbbddbbbbbbbdddbbbbbbbbbbdbbddddbbbbbbbbbbbbbdbddddbbbbddddddddddbbbbbbddbbdbddbbbbbbddddddddbbbbbbbddbbbbbbbddbbbbbbbbbbbbb
        dddddbbbbbbbbbddbbbbdbdbbddddddddbbbbbbddbbdbbbbdddbbbbbbbbbbbbbddddbbdbbbdbbbbbbbbddddbbbbddddddddddbbbbbbbbbbdbbbbdbbbbddddddddbbbbbbbddbbbbdbbddbbbbbbbbbbbbb
        dddddbbbbbbbbbddbbbbdbbbbddddddddbbbbbbddbbbbbbbdddbbbbbbbbbbbdbddddbbbbdbddbbbbbbbddddbbbbddddddddddbbbbbbbbbbdbbbbdbbbbddddddddbbbbbbbddbbbbbbbddbbbbbbbbbbbbb
        dbbdbbbbbbbbbbbdbddbbbbbbddddddddbbbbbbddbbbbbbbdddbbbbbbbbbbbbbddddbbbbbbbbbbbbbbbbddbbbbbbdddbddbbbbbbbbbbbbbdbddbbbbbbddddddddbbbbbbbddbbbbbbbddbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbdbbbbbbbbbddbddbddbbbbbbddbbbbbbbdddbbbbbbbbbbbdbddddbbbbbbbbbbbbbbbbddbbbbbbdddbbbbbbbbbbbbbbbbdbbbbbbbbbdddddbddbbbbbbbddbbbbbbbddbbbbbbbbbbbbb
        bbddbbbbbbbbbbbbbddddbbbbbbbdbbbddbbdbbddbbbbbbbdddbbbbbbbbbbbbbbbdbbbdbbbbbbbbbbbbbddbbbbbbbdddbddbbbbbbbbbbbbbbddbdbbbbdbbdbbbdbbbbbbbddbbbbbbbddbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbdbbbbbbddbbbbbbbdddbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbdbbbbbbbbbbbddbbbbdbbddbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbddbdbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbddbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbb7bbbbb
        bbbbbb7bbb77bbbbb77bbbb7bbb7bbbb7b77bbb7bbbbbb7bbb77bbbbb77bbbb7bbb7bbbb7b77bbb7bbbbbb7bbb77bbbbb77bbbb7bbb7bbbb7b77bbb7bbbbbb7bbb77bbbbb77bbbb7bbb7bbbb7b77bbb7
        bb7bbb77b77bb7bbb77bbb77bbb77bbb7bb77b77bb7bbb77b77bb7bbb77bbb77bbb77bbb7bb77b77bb7bbb77b77bb7bbb77bbb77bbb77bbb7bb77b77bb7bbb77b77bb7bbb77bbb77bbb77bbb7bb77b77
        bb77bb77b77bb77bbb77b77bbbb77b7b77b7777bbb77bb77b77bb77bbb77b77bbbb77b7b77b7777bbb77bb77b77bb77bbb77b77bbbb77b7b77b7777bbb77bb77b77bb77bbb77b77bbbb77b7b77b7777b
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        `)
    playerCharacter = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e e e d d d f . . . 
        . . . . . f 4 d d e 4 e f . . . 
        . . . . . f e d d e 2 2 f . . . 
        . . . . f f f e e f 5 5 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `, SpriteKind.Player)
    playerCharacter.setPosition(75, 80)
    playerCharacter.setVelocity(50, 0)
    pause(1000)
    playerCharacter.setVelocity(0, 200)
}
function PauseGame () {
    if (gamePaused) {
        playerCharacter.ay = 0
        playerCharacter.setVelocity(0, 0)
        controller.moveSprite(playerCharacter, 0, 0)
        for (let value9 of enemyList) {
            value9.setVelocity(0, 0)
            value9.follow(playerCharacter, 0)
        }
    } else {
        controller.moveSprite(playerCharacter, 100, 0)
        playerCharacter.ay = 1000
    }
}
scene.onHitWall(SpriteKind.Projectile, function (sprite, location) {
    sprites.destroy(sprite, effects.disintegrate, 10)
})
sprites.onOverlap(SpriteKind.EnemyProjectile, SpriteKind.HeavyEnemy, function (sprite, otherSprite) {
    statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, otherSprite).value += -10
    sprites.destroy(sprite)
})
function BossDeathCutscene () {
    for (let value10 of tiles.getTilesByType(assets.tile`tile11`)) {
        tiles.setTileAt(value10, assets.tile`transparency16`)
        tiles.setWallAt(value10, false)
    }
    boss.sayText("Nooooo!!!", 2000, false)
    pause(2000)
    boss.sayText("This Can't Be", 1000, false)
}
sprites.onOverlap(SpriteKind.MeleeWeapon, SpriteKind.Enemy, function (sprite, otherSprite) {
    statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, otherSprite).value += -30
    sprites.destroy(sprite)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.HeavyEnemy, function (sprite, otherSprite) {
    statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, otherSprite).value += -20
    sprites.destroy(sprite)
})
function EnemyShooting (Target: Sprite, Shooter: Sprite, PlayerEnemyDistance: number, EnemyProjectileSpeed: number) {
    enemyProjectileDirectionX = Target.x - Shooter.x
    enemyProjectileDirectionY = Target.y - Shooter.y
    enemyProjectileDirectionX = enemyProjectileDirectionX / PlayerEnemyDistance
    enemyProjectileDirectionY = enemyProjectileDirectionY / PlayerEnemyDistance
    enemyProjectiles = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 4 . 4 . . . . . . 
        . . . . . . . . 4 . . . . . . . 
        . . . . . . . 4 . 4 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, Shooter, enemyProjectileDirectionX * EnemyProjectileSpeed, enemyProjectileDirectionY * EnemyProjectileSpeed)
    enemyProjectiles.setKind(SpriteKind.EnemyProjectile)
}
scene.onHitWall(SpriteKind.EnemyProjectile, function (sprite, location) {
    sprites.destroy(sprite, effects.disintegrate, 100)
})
sprites.onOverlap(SpriteKind.UltimateProjectiles, SpriteKind.EnemyProjectile, function (sprite, otherSprite) {
    sprites.destroy(sprite, effects.disintegrate, 100)
    sprites.destroy(otherSprite, effects.disintegrate, 100)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile9`, function (sprite, location) {
    healthBar.value += 40
    tiles.setTileAt(location, assets.tile`transparency16`)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, otherSprite).value += -20
    sprites.destroy(sprite)
})
function InventoryToggled () {
    if (inventoryOpen) {
        inventoryOpen = false
        gamePaused = false
        PauseGame()
        sprites.destroyAllSpritesOfKind(SpriteKind.UIInventory)
    } else if (inventory.length > 0) {
        inventoryOpen = true
        gamePaused = true
        PauseGame()
        inventoryDataListUI = []
        for (let index22 = 0; index22 <= inventory.length - 1; index22++) {
            inventoryItemUI = sprites.create(inventory[index22], SpriteKind.UIInventory)
            inventoryItemUI.setPosition(20 + 40 * index22, 10)
            inventoryItemUI.setScale(2, ScaleAnchor.Top)
            inventoryItemUI.setFlag(SpriteFlag.RelativeToCamera, true)
            inventoryItemUI.z = 20
            inventoryDataListUI.push(inventoryItemUI)
        }
        gamePaused = true
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    healthBar.value += -20
    scene.cameraShake(6, 200)
    pause(500)
})
let inventoryItemUI: Sprite = null
let enemyProjectiles: Sprite = null
let enemyProjectileDirectionY = 0
let enemyProjectileDirectionX = 0
let ultimateCooldownUI: Sprite = null
let bossProjectile: Sprite = null
let bossAngleTheta = 0
let projectileAngleOffset = 0
let playerAngleTheta = 0
let projectileNumberSemiCircle = 0
let rangedEnemy: Sprite = null
let enemyHealthBar: StatusBarSprite = null
let meleeEnemy: Sprite = null
let ultimateCooldownDelay = 0
let hasItem = false
let indicatorUI: Sprite = null
let inventoryDataListUI: Sprite[] = []
let heavyMeleeEnemy: Sprite = null
let enemyToPlayerDistance = 0
let enemyDirectionY = 0
let enemyDirectionX = 0
let enemyList: Sprite[] = []
let shooterWalking: animation.Animation = null
let heavyWalking: animation.Animation = null
let meleeWalking: animation.Animation = null
let healthBar: StatusBarSprite = null
let bossBlocking: Sprite = null
let walkLeft: animation.Animation = null
let walkRight: animation.Animation = null
let canUseUltimate = false
let knife: Sprite = null
let shootingDirection = 0
let projectileFired: Sprite = null
let projectileVelocity = 0
let gamePaused = false
let canShoot = false
let selectedItem = 0
let inventory: Image[] = []
let boss: Sprite = null
let inventoryOpen = false
let firstPlay = false
let currentLevel = 0
let playerCharacter: Sprite = null
let equipedItem: Image = null
let endGame = false
game.splash("Start")
endGame = false
equipedItem = img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `
OpeningCutscene()
sprites.destroy(playerCharacter)
scene.setBackgroundImage(img`
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    `)
currentLevel = 1
firstPlay = true
EnemyAnimations()
LevelSetUp(currentLevel)
playerCharacter.sayText("Ahhhhh!!!", 2000, false)
pause(1500)
playerCharacter.sayText("What is this place?", 2000, false)
pause(2000)
playerCharacter.sayText("Am I...a skeleton!?", 2000, false)
pause(2000)
playerCharacter.sayText("I've got to escape", 1000, false)
pause(1000)
game.showLongText("A: Abilities", DialogLayout.Top)
game.showLongText("B: Inventory/Ability Selection", DialogLayout.Top)
game.showLongText("Open Chests To Unlock Abilities", DialogLayout.Top)
game.showLongText("Up: Jump and Down: Quick Swap", DialogLayout.Top)
game.onUpdate(function () {
    if (controller.dx() > 0) {
        animation.setAction(playerCharacter, ActionKind.Walking)
        // A 45 degree offset which comes in the form of pi/4 according to the unit circle. Set negative because of direction
        projectileAngleOffset = -0.785
        shootingDirection = 1
        music.play(music.melodyPlayable(music.footstep), music.PlaybackMode.InBackground)
    } else if (controller.dx() < 0) {
        animation.setAction(playerCharacter, ActionKind.Walking)
        // A 45 degree offset but in the opposite direction from before. Requires a semicircle of pi subtracted by 45 degrees which is 0.785.
        projectileAngleOffset = 2.355
        shootingDirection = -1
        music.play(music.melodyPlayable(music.footstep), music.PlaybackMode.InBackground)
    } else {
        animation.stopAnimation(animation.AnimationTypes.All, playerCharacter)
    }
})
game.onUpdate(function () {
    EnemyAI()
    if (equipedItem.equals(assets.image`Ultimate`) && canUseUltimate == false) {
        ultimateCooldownUI.setPosition(playerCharacter.x, playerCharacter.y - 10)
        ultimateCooldownUI.sayText("Cooldown:" + convertToText(ultimateCooldownDelay), 10, false)
    } else if (equipedItem.equals(assets.image`Ultimate`) && canUseUltimate == true) {
        ultimateCooldownUI.setPosition(playerCharacter.x, playerCharacter.y - 10)
        ultimateCooldownUI.sayText("Ultimate Ready", 10, false)
    }
    if (playerCharacter.tileKindAt(TileDirection.Bottom, sprites.dungeon.stairSouth)) {
        playerCharacter.ay = 0
        playerCharacter.vy += -20
    } else if (playerCharacter.tileKindAt(TileDirection.Top, sprites.dungeon.stairSouth)) {
        playerCharacter.ay = 1000
    }
})
game.onUpdateInterval(1000, function () {
    for (let value11 of sprites.allOfKind(SpriteKind.ShooterEnemy)) {
        enemyDirectionX = playerCharacter.x - value11.x
        enemyDirectionY = playerCharacter.y - value11.y
        enemyToPlayerDistance = Math.sqrt(enemyDirectionX ** 2 + enemyDirectionY ** 2)
        if (enemyToPlayerDistance < 100 && value11.kind() == SpriteKind.ShooterEnemy) {
            EnemyShooting(playerCharacter, value11, enemyToPlayerDistance, 150)
        }
    }
    if (ultimateCooldownDelay > 0) {
        ultimateCooldownDelay += -1
        canUseUltimate = false
    } else {
        canUseUltimate = true
    }
})
forever(function () {
    pauseUntil(() => endGame)
    tiles.setCurrentTilemap(tilemap`level12`)
    scene.setBackgroundImage(img`
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999111199999999999999999999999999999999999999999999999999999999999999999999999999999911119999999999999999999999999999999999999999999999999999
        9999999999999999999991111119999999999999999999999999999999999999999999999999999999999999999999999999999111111999999999999999999999999999999999999999999999999999
        9999999999999999999991111119911999999999999999999999999999999999999999999999999999999999999999999999999111111991199999999999999999999999999999999999999999999999
        9999999999999999991111111119111119999999999999999999999999999999999999999999999999999999999999999999111111111911111999999999999999999999999999999999999999999999
        9999999999999999911111111111111119999999999999999999999999999999999999999999999999999999999999999991111111111111111999999999999999999999999999999999999999999999
        9999999999999999111111111111111111199999999999999999999999999999999999999999999999999999999999999911111111111111111119999999999999999999999999999999999999999999
        9999999999999999111111111111111111119999999999999999999999999999999999999999999999999999999999999911111111111111111111999999999999999999999999999999999999999999
        9999999999999999911111111111111111119991199999999999999999999999999999999999999999999999999999999991111111111111111111999119999999999999999999999999999999999999
        9999999999999111191111111111111111119911111999999999999999999999999999999999999999999999999999911119111111111111111111991111199999999999999999999999999999999999
        9999999999991111119111111111111111199911111999999999999999999999999999999999999999999999999999111111911111111111111119991111199999999999999999999999999999999999
        9999999999991111111111111111111111911111111199999999999999999999999999999999999999999999999999111111111111111111111191111111119999999999999999999999999999999999
        9999999999991111111111111111111111111111111199999999999999999999999999999999999999999999999999111111111111111111111111111111119999999999999999999999999999999999
        9999999999999111111111111111111111111111111199999999999999999999999999999999999999999999999999911111111111111111111111111111119999999999999999999999999999999999
        9911199991111911111111111111111111111111111991199999999999991111999999999999999999991119999111191111111111111111111111111111199119999999999999111199999999999999
        9111119911111111111111111111111111111111111911119999999999911111199999999999999999911111991111111111111111111111111111111111191111999999999991111119999999999999
        9111119111111111111111111111111111111111111911119999999999911111191119999999999999911111911111111111111111111111111111111111191111999999999991111119111999999999
        9911111111111111111111111111111111111111111111119999999999999111111111999999999999991111111111111111111111111111111111111111111111999999999999911111111199999999
        9111111111111111111111111111111111111111111111199999999911119111111111999999999999911111111111111111111111111111111111111111111119999999991111911111111199999999
        1111111111111111111111111111111111111111111111119999999111111111111119999999999199111111111dd1111111111111111111111111111111111111999999911111111111111999999999
        1111111111111111111111111111111111111111111111111911199111111111111111111999999ddd111111111ddd111111111111111111111111111111111111191119911111111111111111199999
        1111111111111111111111111111111111111111111111111111111111111111111111111199991ddd111111111ddd111111111111111111111111111111111111111111111111111111111111119999
        11111111111111111111111111111111111111111111111111111111111111111111111111999ddddddd111111ddddd11111111111111111111111111111111111111111111111111111111111119999
        11111111111111111111111111111111111111111ddddddddd111111111111111111111111111ddddddd111111ddddd111111111111111111111111111111111111111111dddddddddd1111111111111
        11111111111111111111111111111111111111111ddddddddd111111111111111111111111111ddddddd111111ddddd111111111111111111111111111111111111111111dddddddddd1111111111111
        1111111111111111111ddd1111111111111111111d11dddddd111111111111111111111111111d11dddd11111ddddddd11111111111111111111dd1111111111111111111dd1d1ddddd1111111111111
        111111111111111111ddddd111111111111111111ddddddd1d111111111111111111111111111ddddddd11111ddddddd1111111111111111111dddd111111111111111111dddddd11dd1111111111111
        11111111111111111dddddd111111111111111111ddddddddd1111111111d11111111ddddd111d1ddddd11111ddddddd11111111111111111dddddd111111111111111111dddddddddd1111111111111
        11111111111111111ddd1d111111d111111111111ddddddddd111111111dd11111111ddddd111ddddddd11111ddddddd11111111111111111ddd1d111111dd11111111111dddd1ddddd11111111dd111
        11111111111111111dddddd11111d111111111111ddddddd1d111111111dd11111111ddddd111ddddddd11111ddddddd11111111111111111dddddd11111dd11111111111ddddddd1dd11111111dd111
        11111111ddd111111dd11d11111ddd11111111111ddddddddd11dddddd1dd11111111ddddd111ddddddd11111ddddddd111111111dd111111ddd1d11111ddd11111111111dddddddddd1ddddddddd111
        d1dd1111ddddddddddd1ddd111ddddd1111111111ddddddd1d11d11ddd1dd111111111dd1dd11ddddddd111dddddddddd1dd1111ddddddddddddd1d1111dddd1111111111dddddd11dd1d11dddddd111
        dddd11111d1dd1ddddddddd111ddddd1111111111ddddddddd11dddd1d1dd11111111dddddd11dd1dddd111ddddddddddddd1111dd1ddd1dddddddd1111dddd1111111111dddddddddd1dddd1dddd111
        dd1d11111ddd1111ddddddd111ddddd1111111111ddddddddd11dddd1dddd11111111dddddd11ddddddd111ddddddddddd1d1111dddd1d11ddddddd1111dddd1111111111dddddddddd1dddd1dddd111
        dddd1111dddddddddddddddd11dddddd11dd1dd1ddddddddddd1d11dddddd11111111dddddd11ddddddd111ddddddddddddd1111dddddddddddddddd11dddddd111d11ddddddddddddd1d11dddddd111
        dd1d1111dddddddddddddddd11dddddd11ddddddddddddddddd1ddddddddd11d11d11dddddd11ddddddd111ddddddddddd1d1111dddddddddddddddd11dddddd111dddddddddddddddd1ddddddddd111
        ddddd1dd1d1ddddddddddddd11ddddddd1dddd11ddddddddddddd11bbddddddd1ddd11dd1dd11ddddddd111ddddddddddddddd1ddd1ddddddddddddd11ddddddd111d11ddddddbddddddd11bbbddd1dd
        ddddd1dddddddddddddddddddd1dddddd1dddddddddbbbdddddddddbbbdddddd1ddd1dddddd11ddddddd111ddddddddddddddd1dddddddddddddddddddddddddd1ddddddddddbbdddddddddbbbddd1dd
        ddddd1ddddddddddddddddddddddddddd1dddddddddbbbdddddddddbbbdddddddddddddddddddddddddd111ddddddddddddddd1dddddddddddddddddddddddddd1ddddddddddbbdddddddddbbbdddddd
        ddddd1ddddddddddddddddddddddddddd1dddddddbbbbbbbddddddbbbbbddddddddddddddddddddddddddd1ddddddddddddddd1dddddddddddddddddddddddddd1d1ddddddbbbbbbbdddddbbbbbddddd
        dddddbbbbbbbbbddddddddddddddddddd1dddddddbbbbbbbddddddbbbbbddddddddddddddddddddddddddd1ddddddddddddddbbbbbbbbbbdddddddddddddddddd1ddddddddbbbbbbbdddddbbbbbddddd
        dddddbbbbbbbbbddddddddddddddddddd1dddddddbbbbbbbddddddbbbbbddddddddddddddddddddddddddd1ddddddddddddddbbbbbbbbbbdddddddddddddddddd1ddddddddbbbbbbbdddddbbbbbddddd
        dddddbddbbbbbbddddddddddddddddddd1dddddddbddbbbbdddddbbbbbbbdd111dddddddddddddddbbdddd1ddddddddddddddbbdbdbbbbbdddddddddddddddddd1ddddddddbbbbbbbddddbbbbbbbb11d
        dddddbbbbbbbdbddddddddddddddddddd1dddddddbbbbbbbdddddbbbbbbbddd11ddddddddddddddbbbbddd1ddddddddddddddbbbbbbddbbdddddddddddddddddd1ddddddddbbbbbbbddddbbbbbbbbddd
        dddddbbbbbbbbbddddddddddbddddddddbbbbbdddbdbbbbbdddddbbbbbbbddddddddddd1dddddbbbbbbddd1ddddddddddddddbbbbbbbbbbdddddddddddddddddddbbbbddddbbbdbbbddddbbbbbbbbddd
        dddddbbbbbbbbbdddddddddbbddddddddbbbbbdddbbbbbbbdddddbbbbbbbdd1ddddddddddddddbbbdbddddddbbdddddddddddbbbbdbbbbbddddddddbbdddddddddbbbbddddbbbdbbbddddbbbbbbbbd1d
        dddddbbbbbbbdbdddddddddbbddddddddbbbbbdddbbbbbbbdddddbbbbbbbdd111ddddddddddddbbbbbbdddddbbdddddddddddbbbbbbbdbbddddddddbbddddddddbbbbbbdddbbbbbbbddddbbbbbbbb11d
        dddddbbbbbbbbbddbbbbbbdbbddddddddbbbbbdddbbbbbbbdddddbbbbbbbdddddddddbb1dddddbbbdbdddddbbbdddddddddddbbbbbbbbbbdbbbbbbbbbddddddddbbbbbbdddbbbdbbbddddbbbbbbbbddd
        dddddbbbbbbbdbddbddbbbdbbdddddddddbbdbbddbbbbbbbdddbbbbbbbbbbdbbddddbbbbbbbbbbbbbdbddddbbbbddddddddddbbbbbbddbbdbddbbbbbbddddddddbbbbbbbddbbbbbbbddbbbbbbbbbbbbb
        dddddbbbbbbbbbddbbbbdbdbbddddddddbbbbbbddbbdbbbbdddbbbbbbbbbbbbbddddbbdbbbdbbbbbbbbddddbbbbddddddddddbbbbbbbbbbdbbbbdbbbbddddddddbbbbbbbddbbbbdbbddbbbbbbbbbbbbb
        dddddbbbbbbbbbddbbbbdbbbbddddddddbbbbbbddbbbbbbbdddbbbbbbbbbbbdbddddbbbbdbddbbbbbbbddddbbbbddddddddddbbbbbbbbbbdbbbbdbbbbddddddddbbbbbbbddbbbbbbbddbbbbbbbbbbbbb
        dbbdbbbbbbbbbbbdbddbbbbbbddddddddbbbbbbddbbbbbbbdddbbbbbbbbbbbbbddddbbbbbbbbbbbbbbbbddbbbbbbdddbddbbbbbbbbbbbbbdbddbbbbbbddddddddbbbbbbbddbbbbbbbddbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbdbbbbbbbbbddbddbddbbbbbbddbbbbbbbdddbbbbbbbbbbbdbddddbbbbbbbbbbbbbbbbddbbbbbbdddbbbbbbbbbbbbbbbbdbbbbbbbbbdddddbddbbbbbbbddbbbbbbbddbbbbbbbbbbbbb
        bbddbbbbbbbbbbbbbddddbbbbbbbdbbbddbbdbbddbbbbbbbdddbbbbbbbbbbbbbbbdbbbdbbbbbbbbbbbbbddbbbbbbbdddbddbbbbbbbbbbbbbbddbdbbbbdbbdbbbdbbbbbbbddbbbbbbbddbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbdbbbbbbddbbbbbbbdddbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbdbbbbbbbbbbbddbbbbdbbddbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbddbdbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbddbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbb7bbbbb
        bbbbbb7bbb77bbbbb77bbbb7bbb7bbbb7b77bbb7bbbbbb7bbb77bbbbb77bbbb7bbb7bbbb7b77bbb7bbbbbb7bbb77bbbbb77bbbb7bbb7bbbb7b77bbb7bbbbbb7bbb77bbbbb77bbbb7bbb7bbbb7b77bbb7
        bb7bbb77b77bb7bbb77bbb77bbb77bbb7bb77b77bb7bbb77b77bb7bbb77bbb77bbb77bbb7bb77b77bb7bbb77b77bb7bbb77bbb77bbb77bbb7bb77b77bb7bbb77b77bb7bbb77bbb77bbb77bbb7bb77b77
        bb77bb77b77bb77bbb77b77bbbb77b7b77b7777bbb77bb77b77bb77bbb77b77bbbb77b7b77b7777bbb77bb77b77bb77bbb77b77bbbb77b7b77b7777bbb77bb77b77bb77bbb77b77bbbb77b7b77b7777b
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        `)
    playerCharacter = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.Player)
    playerCharacter.setPosition(150, 80)
    scene.cameraFollowSprite(playerCharacter)
    playerCharacter.sayText("Wait I'm not a skeleton let's go", 2000, false)
    pause(2000)
    playerCharacter.sayText("Well looks like its time to touch some grass", 2000, false)
    pause(2000)
    game.setGameOverMessage(true, "You escaped")
    game.gameOver(true)
})
forever(function () {
    playerCharacter.ay = 1000
})
forever(function () {
    if (boss != undefined) {
        pause(randint(1000, 3000))
        for (let value12 of sprites.allOfKind(SpriteKind.Boss)) {
            enemyDirectionX = playerCharacter.x - value12.x
            enemyDirectionY = playerCharacter.y - value12.y
            enemyToPlayerDistance = Math.sqrt(enemyDirectionX ** 2 + enemyDirectionY ** 2)
            if (enemyToPlayerDistance < 1000 && value12.kind() == SpriteKind.Boss) {
                projectileVelocity = 200
                BossShootingMultiple(playerCharacter, boss, enemyToPlayerDistance, projectileVelocity)
            }
        }
    }
})
forever(function () {
    if (boss != undefined) {
        pause(randint(6000, 10000))
        for (let value13 of sprites.allOfKind(SpriteKind.Boss)) {
            enemyDirectionX = playerCharacter.x - value13.x
            enemyDirectionY = playerCharacter.y - value13.y
            enemyToPlayerDistance = Math.sqrt(enemyDirectionX ** 2 + enemyDirectionY ** 2)
            if (enemyToPlayerDistance < 1000 && value13.kind() == SpriteKind.Boss) {
                BossBlock()
            }
        }
    }
})
forever(function () {
    if (boss != undefined) {
        pause(randint(2000, 4000))
        for (let value14 of sprites.allOfKind(SpriteKind.Boss)) {
            enemyDirectionX = playerCharacter.x - value14.x
            enemyDirectionY = playerCharacter.y - value14.y
            enemyToPlayerDistance = Math.sqrt(enemyDirectionX ** 2 + enemyDirectionY ** 2)
            if (enemyToPlayerDistance < 1000 && value14.kind() == SpriteKind.Boss) {
                projectileVelocity = 200
                BossShootingHoming(playerCharacter, boss, enemyToPlayerDistance, projectileVelocity)
            }
        }
    }
})
