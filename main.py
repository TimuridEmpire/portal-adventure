class ActionKind(Enum):
    Walking = 0
    Idle = 1
    Jumping = 2
    WalkingRight = 3
    WalkingLeft = 4
@namespace
class SpriteKind:
    Item = SpriteKind.create()
    UI = SpriteKind.create()
    UIInventory = SpriteKind.create()
    UltimateProjectiles = SpriteKind.create()

def on_up_pressed():
    if playerCharacter.is_hitting_tile(CollisionDirection.BOTTOM):
        playerCharacter.vy = -250
controller.up.on_event(ControllerButtonEvent.PRESSED, on_up_pressed)

def on_overlap_tile(sprite, location):
    healthBar.value += 40
    tiles.set_tile_at(location, assets.tile("""
        transparency16
    """))
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        HealthPickUp
    """),
    on_overlap_tile)

def LevelSetUp(level: number):
    PlayerSetUp()
    playerCharacter.ay = 1000
    if level == 1:
        tiles.set_current_tilemap(tilemap("""
            level1
        """))
        playerCharacter.set_position(25, 50)
        EnemySpawner()
    elif level == 2:
        tiles.set_current_tilemap(tilemap("""
            level2
        """))
        playerCharacter.set_position(60, 200)
        EnemySpawner()
    elif level == 3:
        tiles.set_current_tilemap(tilemap("""
            level0
        """))
        playerCharacter.set_position(100, 200)
        EnemySpawner()
    elif level == 4:
        pass

def on_b_pressed():
    InventoryToggled()
controller.B.on_event(ControllerButtonEvent.PRESSED, on_b_pressed)

def on_overlap_tile2(sprite2, location2):
    healthBar.value += -1
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile
    """),
    on_overlap_tile2)

def on_button_pressed():
    if inventoryOpen:
        PlayerInventoryNavigation()
controller.any_button.on_event(ControllerButtonEvent.PRESSED, on_button_pressed)

def on_a_pressed():
    global projectileVelocity, projectileFired
    if canShoot:
        projectileVelocity = 200
        projectileFired = sprites.create_projectile_from_sprite(img("""
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
            """),
            playerCharacter,
            projectileVelocity * shootingDirection,
            0)
        if canUseUltimate:
            UltimateAbility()
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def PlayerAnimations():
    global walkRight, walkLeft
    walkRight = animation.create_animation(ActionKind.WalkingRight, 150)
    walkRight.add_animation_frame(img("""
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
    """))
    walkRight.add_animation_frame(img("""
        ........................
                ........................
                ........................
                ........................
                ..........bbbbb.........
                ........bb11111b........
                .......bb111111bb.......
                ......bbd1111111b.......
                ......bddd111111db......
                ......bdddd11111db......
                ......bddddddd11db......
                ......bddddddd111b......
                ......bddddddc811b......
                .......abdddb1111bb.....
                ........bbbcbdb1b1b.....
                .......bbbbbbbbbbbb.....
                ....bb.bbbbbbbbbbb......
                .....bbbbbbbb...........
                .....bbbbbbb1b1b........
                ......bbbbbbbbbb........
                ........................
                ........................
                ........................
                ........................
    """))
    animation.attach_animation(playerCharacter, walkRight)
    walkLeft = animation.create_animation(ActionKind.WalkingLeft, 150)
    walkLeft.add_animation_frame(img("""
        ........................
                ........................
                ........................
                ........................
                ..........bbbb..........
                ........bb1111bb........
                .......bb111111bb.......
                .......b1111111db.......
                ......bd1111111ddb......
                ......bd111111dddb......
                ......bd111ddddddb......
                ......bd1d8dddddbb......
                ......bbdd8ddbbbcb......
                .......b11111bbcb.......
                .......b1b1bbbbb........
                .......bbbc111bb........
                ........bb1b1bbb........
                .........bbbbbbb.b......
                ..........bbbbbbbb......
                ............bbbbb.......
                ........................
                ........................
                ........................
                ........................
    """))
    walkLeft.add_animation_frame(img("""
        ........................
                ........................
                ........................
                ........................
                .........bbbbb..........
                ........b11111bb........
                .......bb111111bb.......
                .......b1111111dbb......
                ......bd111111dddb......
                ......bd11111ddddb......
                ......bd11dddddddb......
                ......b111dddddddb......
                ......b118cddddddb......
                .....bb1111bdddbb.......
                .....b1b1bdbcbbb........
                .....bbbbbbbbbbbb.......
                ......bbbbbbbbbbb.bb....
                ...........bbbbbbbb.....
                ........b1b1bbbbbbb.....
                ........bbbbbbbbbb......
                ........................
                ........................
                ........................
                ........................
    """))
    animation.attach_animation(playerCharacter, walkLeft)

def on_overlap_tile3(sprite3, location3):
    global currentLevel
    currentLevel += 1
    sprites.destroy(playerCharacter, effects.cool_radial, 200)
    sprites.destroy_all_sprites_of_kind(SpriteKind.player)
    sprites.destroy_all_sprites_of_kind(SpriteKind.enemy)
    sprites.destroy_all_sprites_of_kind(SpriteKind.projectile)
    sprites.destroy_all_sprites_of_kind(SpriteKind.status_bar)
    sprites.destroy_all_sprites_of_kind(SpriteKind.UI)
    sprites.destroy_all_sprites_of_kind(SpriteKind.UIInventory)
    LevelSetUp(currentLevel)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        Portal
    """),
    on_overlap_tile3)

def EnemyAI():
    global enemyDirectionX, enemyDirectionY, enemyToPlayerDistance
    for value in enemyList:
        enemyDirectionX = playerCharacter.x - value.x
        enemyDirectionY = playerCharacter.y - value.y
        enemyToPlayerDistance = Math.sqrt(enemyDirectionX ** 2 + enemyDirectionY ** 2)
        if enemyToPlayerDistance < 100:
            value.follow(playerCharacter, 50)
            if value.tile_kind_at(TileDirection.LEFT, assets.tile("""
                transparency16
            """)) or value.tile_kind_at(TileDirection.RIGHT, assets.tile("""
                transparency16
            """)):
                pass
def PlayerInventoryNavigation():
    global selectedItem, indicatorUI
    selectedItem += Math.constrain(controller.dx(), -1, 1)
    if selectedItem >= len(inventoryDataListUI):
        selectedItem = 0
    elif selectedItem < 0:
        selectedItem = len(inventoryDataListUI) - 1
    indicatorUI = sprites.create(img("""
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
        """),
        SpriteKind.UIInventory)
    indicatorUI.set_position(inventoryDataListUI[selectedItem].x,
        inventoryDataListUI[selectedItem].y)
    indicatorUI.set_flag(SpriteFlag.RELATIVE_TO_CAMERA, True)
    indicatorUI.set_scale(2, ScaleAnchor.MIDDLE)
    indicatorUI.z = 15

def on_on_zero(status):
    sprites.destroy(status.sprite_attached_to(), effects.disintegrate, 100)
statusbars.on_zero(StatusBarKind.enemy_health, on_on_zero)

def on_overlap_tile4(sprite4, location4):
    global canShoot, firstPlay
    if currentLevel == 1:
        ChestOpening(assets.image("""
            Sword
        """))
        game.show_long_text("Acquired Powerful Projectile Launcher", DialogLayout.CENTER)
        canShoot = True
        firstPlay = False
    tiles.set_tile_at(location4, sprites.dungeon.chest_open)
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.chest_closed,
    on_overlap_tile4)

def on_on_zero2(status2):
    game.splash("You died")
    sprites.destroy(playerCharacter)
    sprites.destroy_all_sprites_of_kind(SpriteKind.UI)
    sprites.destroy_all_sprites_of_kind(SpriteKind.UIInventory)
    LevelSetUp(currentLevel)
statusbars.on_zero(StatusBarKind.health, on_on_zero2)

def EnemySpawner():
    global enemyList, meleeEnemy, enemyHealthBar, heavyMeleeEnemy, rangedEnemy, boss
    enemyList = []
    for value2 in tiles.get_tiles_by_type(assets.tile("""
        E1
    """)):
        meleeEnemy = sprites.create(img("""
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
            """),
            SpriteKind.enemy)
        tiles.place_on_tile(meleeEnemy, value2)
        tiles.set_tile_at(value2, assets.tile("""
            transparency16
        """))
        enemyHealthBar = statusbars.create(20, 4, StatusBarKind.enemy_health)
        enemyHealthBar.max = 50
        enemyHealthBar.attach_to_sprite(meleeEnemy)
        meleeEnemy.ay = 1000
        enemyList.append(meleeEnemy)
    for value3 in tiles.get_tiles_by_type(assets.tile("""
        E2
    """)):
        heavyMeleeEnemy = sprites.create(img("""
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
            """),
            SpriteKind.enemy)
        tiles.place_on_tile(heavyMeleeEnemy, value3)
        tiles.set_tile_at(value3, assets.tile("""
            transparency16
        """))
        enemyHealthBar = statusbars.create(20, 4, StatusBarKind.enemy_health)
        enemyHealthBar.max = 100
        enemyHealthBar.attach_to_sprite(heavyMeleeEnemy)
        heavyMeleeEnemy.ay = 1000
        enemyList.append(heavyMeleeEnemy)
    for value4 in tiles.get_tiles_by_type(assets.tile("""
        E3
    """)):
        rangedEnemy = sprites.create(img("""
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
            """),
            SpriteKind.enemy)
        tiles.place_on_tile(rangedEnemy, value4)
        tiles.set_tile_at(value4, assets.tile("""
            transparency16
        """))
        enemyHealthBar = statusbars.create(20, 4, StatusBarKind.enemy_health)
        enemyHealthBar.max = 20
        enemyHealthBar.attach_to_sprite(rangedEnemy)
        rangedEnemy.ay = 1000
        enemyList.append(rangedEnemy)
    for value5 in tiles.get_tiles_by_type(assets.tile("""
        B
    """)):
        boss = sprites.create(img("""
                . . . . . . . e c 7 . . . . . . 
                            . . . . e e e c 7 7 e e . . . . 
                            . . c e e e e c 7 e 2 2 e e . . 
                            . c e e e e e c 6 e e 2 2 2 e . 
                            . c e e e 2 e c c 2 4 5 4 2 e . 
                            c e e e 2 2 2 2 2 2 4 5 5 2 2 e 
                            c e e 2 2 2 2 2 2 2 2 4 4 2 2 e 
                            c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
                            c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
                            c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
                            c e e 2 2 2 2 2 2 2 2 2 2 4 2 e 
                            . e e e 2 2 2 2 2 2 2 2 2 4 e . 
                            . 2 e e 2 2 2 2 2 2 2 2 4 2 e . 
                            . . 2 e e 2 2 2 2 2 4 4 2 e . . 
                            . . . 2 2 e e 4 4 4 2 e e . . . 
                            . . . . . 2 2 e e e e . . . . .
            """),
            SpriteKind.enemy)
        tiles.place_on_tile(boss, value5)
        tiles.set_tile_at(value5, assets.tile("""
            transparency16
        """))
        enemyHealthBar = statusbars.create(100, 5, StatusBarKind.enemy_health)
        enemyHealthBar.max = 500
        enemyHealthBar.value = 500
        enemyHealthBar.attach_to_sprite(boss)

def on_on_overlap(sprite5, otherSprite):
    statusbars.get_status_bar_attached_to(StatusBarKind.enemy_health, otherSprite).value += -5
    sprites.destroy(sprite5)
sprites.on_overlap(SpriteKind.UltimateProjectiles,
    SpriteKind.enemy,
    on_on_overlap)

def UltimateAbility():
    global projectileNumberSemiCircle, projectileVelocity, projectileFired, canUseUltimate
    # 30 is normal and 60 is nice but a little much
    projectileNumberSemiCircle = 30
    for index in range(3):
        index2 = 0
        while index2 <= projectileNumberSemiCircle - 1:
            projectileVelocity = 200
            projectileFired = sprites.create_projectile_from_sprite(img("""
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
                """),
                playerCharacter,
                100,
                100)
            # Very powerful ultimate. Do not spam for sake of computer.
            projectileFired.set_velocity(Math.cos(index2 * (1.57 / projectileNumberSemiCircle) + projectileAngleOffset) * projectileVelocity,
                Math.sin(index2 * (1.57 / projectileNumberSemiCircle) + projectileAngleOffset) * projectileVelocity)
            projectileFired.set_kind(SpriteKind.UltimateProjectiles)
            index2 += 1
        pause(200)
    canUseUltimate = False
def ChestOpening(Item2: Image):
    inventory.append(Item2)

def on_up_released():
    playerCharacter.vy = 0
controller.up.on_event(ControllerButtonEvent.RELEASED, on_up_released)

def PlayerSetUp():
    global playerCharacter, healthBar, selectedItem, inventoryOpen, canShoot
    playerCharacter = sprites.create(img("""
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
        """),
        SpriteKind.player)
    healthBar = statusbars.create(20, 4, StatusBarKind.health)
    healthBar.max = 100
    healthBar.attach_to_sprite(playerCharacter)
    playerCharacter.set_stay_in_screen(True)
    controller.move_sprite(playerCharacter, 100, 0)
    playerCharacter.z = 10
    scene.camera_follow_sprite(playerCharacter)
    selectedItem = 0
    inventoryOpen = False
    PlayerAnimations()
    if firstPlay:
        canShoot = False
    else:
        canShoot = True
def PauseGame(Paused: bool):
    global canShoot
    if Paused:
        canShoot = False
        playerCharacter.ay = 0
        playerCharacter.set_velocity(0, 0)
        controller.move_sprite(playerCharacter, 0, 0)
        for value6 in sprites.all_of_kind(SpriteKind.enemy):
            value6.set_velocity(0, 0)
    else:
        controller.move_sprite(playerCharacter, 100, 0)
        playerCharacter.ay = 1000
        canShoot = True

def on_hit_wall(sprite6, location5):
    sprites.destroy(sprite6, effects.disintegrate, 10)
scene.on_hit_wall(SpriteKind.projectile, on_hit_wall)

def on_on_overlap2(sprite7, otherSprite2):
    statusbars.get_status_bar_attached_to(StatusBarKind.enemy_health, otherSprite2).value += -20
    sprites.destroy(sprite7)
sprites.on_overlap(SpriteKind.projectile, SpriteKind.enemy, on_on_overlap2)

def InventoryToggled():
    global inventoryOpen, inventoryDataListUI, inventoryItemUI
    if inventoryOpen:
        inventoryOpen = False
        PauseGame(False)
        sprites.destroy_all_sprites_of_kind(SpriteKind.UIInventory)
    else:
        inventoryOpen = True
        PauseGame(True)
        inventoryDataListUI = []
        index22 = 0
        while index22 <= len(inventory) - 1:
            inventoryItemUI = sprites.create(inventory[index22], SpriteKind.UIInventory)
            inventoryItemUI.set_position(20 + 20 * index22, 20)
            inventoryItemUI.set_scale(2, ScaleAnchor.TOP)
            inventoryItemUI.set_flag(SpriteFlag.RELATIVE_TO_CAMERA, True)
            inventoryItemUI.z = 20
            index22 += 1
        inventoryDataListUI.append(inventoryItemUI)

def on_overlap_tile5(sprite8, location6):
    playerCharacter.vy += -20
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.stair_south,
    on_overlap_tile5)

inventoryItemUI: Sprite = None
inventory: List[Image] = []
projectileAngleOffset = 0
projectileNumberSemiCircle = 0
boss: Sprite = None
rangedEnemy: Sprite = None
heavyMeleeEnemy: Sprite = None
enemyHealthBar: StatusBarSprite = None
meleeEnemy: Sprite = None
indicatorUI: Sprite = None
inventoryDataListUI: List[Sprite] = []
selectedItem = 0
enemyToPlayerDistance = 0
enemyDirectionY = 0
enemyDirectionX = 0
enemyList: List[Sprite] = []
walkLeft: animation.Animation = None
walkRight: animation.Animation = None
canUseUltimate = False
shootingDirection = 0
projectileFired: Sprite = None
projectileVelocity = 0
canShoot = False
inventoryOpen = False
healthBar: StatusBarSprite = None
playerCharacter: Sprite = None
firstPlay = False
currentLevel = 0
currentLevel = 1
firstPlay = True
LevelSetUp(currentLevel)
game.show_long_text("A For Attacks And B For Inventory", DialogLayout.CENTER)
game.show_long_text("Inventory Is Used To Select Attacks", DialogLayout.CENTER)
game.show_long_text("No Attacks Available", DialogLayout.CENTER)
game.show_long_text("Get The Chest To Unlock An Attack", DialogLayout.CENTER)

def on_on_update():
    global projectileAngleOffset, shootingDirection
    if controller.dx() > 0:
        animation.set_action(playerCharacter, ActionKind.WalkingRight)
        # A 45 degree offset which comes in the form of pi/4 according to the unit circle. Set negative because of direction
        projectileAngleOffset = -0.785
        shootingDirection = 1
    elif controller.dx() < 0:
        animation.set_action(playerCharacter, ActionKind.WalkingLeft)
        # A 45 degree offset but in the opposite direction from before. Requires a semicircle of pi subtracted by 45 degrees which is 0.785.
        projectileAngleOffset = 2.355
        shootingDirection = -1
    else:
        animation.stop_animation(animation.AnimationTypes.ALL, playerCharacter)
game.on_update(on_on_update)

def on_on_update2():
    EnemyAI()
game.on_update(on_on_update2)

def on_update_interval():
    global canUseUltimate
    canUseUltimate = True
game.on_update_interval(20000, on_update_interval)
