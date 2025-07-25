Platform.mods.kubejs.name = 'Cosmiccore'
function registerAntiblock(event, color, color_displayname) {
    event.create(`cosmiccore:antiblock_${color}`)
        .displayName(`${color_displayname}纯色方块`)
        .requiresTool()
        .soundType(SoundType.AMETHYST)
        .tagBlock('minecraft:mineable/pickaxe')
        .property(BlockProperties.LIT)
        .lightLevel(1.0)
}

StartupEvents.registry("block", event => {
    registerAntiblock(event, "black", "黑色")
    registerAntiblock(event, "blue", "蓝色")
    registerAntiblock(event, "brown", "棕色")
    registerAntiblock(event, "cyan", "青色")
    registerAntiblock(event, "green", "绿色")
    registerAntiblock(event, "gray", "灰色")
    registerAntiblock(event, "lime", "浅绿色")
    registerAntiblock(event, "light_blue", "淡蓝色")
    registerAntiblock(event, "light_gray", "浅灰色")
    registerAntiblock(event, "magenta", "品红色")
    registerAntiblock(event, "orange", "橙色")
    registerAntiblock(event, "purple", "紫色")
    registerAntiblock(event, "red", "红色")
    registerAntiblock(event, "white", "白色")
    registerAntiblock(event, "yellow", "黄色")
    registerAntiblock(event, "pink", "粉色")


})
// StartupEvents.registry('block', event => {
//     event.create('prismatic_tungsten_coil_block', 'gtceu:coil').renderType("cutout_mipped")
//         .temperature(4500)
//         .level(4)
//         .energyDiscount(2) // 
//         .tier(5)
//         .coilMaterial(() => GTMaterials.get('prismatic_tungsten'))
//         .texture('gtceu:block/casings/coils/prismatic_tungsten_coil')
//         .hardness(5)
//         .requiresTool(true)
//         .soundType(SoundType.NETHERITE_BLOCK)
//         .tagBlock('forge:mineable/wrench')
// })