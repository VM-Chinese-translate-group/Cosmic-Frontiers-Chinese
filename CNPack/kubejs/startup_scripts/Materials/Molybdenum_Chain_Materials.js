GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('molybdenum_oxide')
        .dust()
        .formula('Mo(IV)O3')
        .color(0xd9d589)
    event.create('ammonium_molybdate')
        .liquid()
        .formula('(NH4)2(MoO4)')
        .color(0xf5f4e9)
    event.create('ammonium_dimolybdate')
        .dust()
        .liquid()
        .formula('(NH4)2Mo2O7')
        .color(0xe5f7bc)
    event.create('molybdenum_trioxide')
        .dust()
        .formula('MoO3')
        .color(0xd9d589)
})