//
let cables = ['gtceu:manasteel_single_cable', 'gtceu:manasteel_double_cable', 'gtceu:manasteel_quadruple_cable', 'gtceu:manasteel_octal_cable', 'gtceu:manasteel_hex_cable']
let wires = ['gtceu:manasteel_single_wire', 'gtceu:manasteel_double_wire', 'gtceu:manasteel_quadruple_wire', 'gtceu:manasteel_octal_wire', 'gtceu:manasteel_hex_wire']
let echo = ['cosmiccore:echo_processor', 'cosmiccore:echo_processor_assembly', 'cosmiccore:echo_processor_supercomputer', 'cosmiccore:echo_processor_mainframe']
let optical = ['cosmiccore:optical_processor', 'cosmiccore:optical_processor_assembly', 'cosmiccore:optical_processor_supercomputer', 'cosmiccore:optical_processor_mainframe']
let cosmic = ['cosmiccore:cosmic_processor', 'cosmiccore:cosmic_processor_assembly', 'cosmiccore:cosmic_processor_supercomputer', 'cosmiccore:cosmic_processor_mainframe']
let psionic = ['cosmiccore:psionic_processor', 'cosmiccore:psionic_processor_assembly', 'cosmiccore:psionic_processor_supercomputer', 'cosmiccore:psionic_processor_mainframe']
let macroverse = ['cosmiccore:macroverse_processor', 'cosmiccore:macroverse_processor_assembly', 'cosmiccore:macroverse_processor_supercomputer', 'cosmiccore:macroverse_processor_mainframe']
let boilaway = ['gtceu:bronze_large_boiler', 'gtceu:steel_large_boiler', 'gtceu:titanium_large_boiler', 'gtceu:tungstensteel_large_boiler']
ItemEvents.tooltip(event => {
  // event.add('gtceu:manasteel_single_cable', Text.of('LV Superconductor'))
  event.addAdvanced('forbidden_arcanus:eternal_stella', (item, advanced, text) => {
    text.add(1, Text.translate('item.forbidden_arcanus.eternal_stella.tooltip.1').red()) // Adds text in first line, pushing the items name down a line. If you want the line below the item name, the index must be 1
  })
  event.addAdvanced(cables, (item, advanced, text) => {
    text.add(1, Text.translate('item.forbidden_arcanus.eternal_stella.tooltip.2')) // Adds text in first line, pushing the items name down a line. If you want the line below the item name, the index must be 1
  })
  //BOILER WARNING : 
  event.addAdvanced(boilaway, (item, advanced, text) => {
    text.add(1, Text.translate('item.forbidden_arcanus.eternal_stella.tooltip.3').gray())
  })
  //ECHO CIRCUITS
  event.addAdvanced(echo, (item, advanced, text) => {
    text.add(1, Text.translate('item.forbidden_arcanus.eternal_stella.tooltip.4').gray())
  })
  event.addAdvanced('cosmiccore:echo_processor', (item, advanced, text) => {
    text.add(2, Text.translate('item.cosmiccore.echo_processor.tooltip.1').darkAqua())
  })
  event.addAdvanced('cosmiccore:echo_processor_assembly', (item, advanced, text) => {
    text.add(2, Text.translate('item.cosmiccore.echo_processor_assembly.tooltip.1').darkAqua())
  })
  event.addAdvanced('cosmiccore:echo_processor_supercomputer', (item, advanced, text) => {
    text.add(2, Text.translate('item.cosmiccore.echo_processor_supercomputer.tooltip.1').darkAqua())
  })
  event.addAdvanced('cosmiccore:echo_processor_mainframe', (item, advanced, text) => {
    text.add(2, Text.translate('item.cosmiccore.echo_processor_mainframe.tooltip.1').darkAqua())
  })
  //OPTICAL CIRCUITS
  event.addAdvanced(optical, (item, advanced, text) => {
    text.add(1, Text.translate('item.cosmiccore.echo_processor_mainframe.tooltip.2').gray())
  })
  event.addAdvanced('cosmiccore:optical_processor', (item, advanced, text) => {
    text.add(2, Text.translate('item.cosmiccore.optical_processor.tooltip.1').gold())
  })
  event.addAdvanced('cosmiccore:optical_processor_assembly', (item, advanced, text) => {
    text.add(2, Text.translate('item.cosmiccore.optical_processor_assembly.tooltip.1').gold())
  })
  event.addAdvanced('cosmiccore:optical_processor_supercomputer', (item, advanced, text) => {
    text.add(2, Text.translate('item.cosmiccore.optical_processor_supercomputer.tooltip.1').gold())
  })
  event.addAdvanced('cosmiccore:optical_processor_mainframe', (item, advanced, text) => {
    text.add(2, Text.translate('item.cosmiccore.optical_processor_mainframe.tooltip.1').gold())
  })
  //COSMIC CIRCUITS
  event.addAdvanced(cosmic, (item, advanced, text) => {
    text.add(1, Text.translate('item.cosmiccore.optical_processor_mainframe.tooltip.2').gray())
  })
  event.addAdvanced('cosmiccore:cosmic_processor', (item, advanced, text) => {
    text.add(2, Text.translate('item.cosmiccore.cosmic_processor.tooltip.1').darkPurple())
  })
  event.addAdvanced('cosmiccore:cosmic_processor_assembly', (item, advanced, text) => {
    text.add(2, Text.translate('item.cosmiccore.cosmic_processor_assembly.tooltip.1').darkPurple())
  })
  event.addAdvanced('cosmiccore:cosmic_processor_supercomputer', (item, advanced, text) => {
    text.add(2, Text.translate('item.cosmiccore.cosmic_processor_supercomputer.tooltip.1').darkPurple())
  })
  event.addAdvanced('cosmiccore:cosmic_processor_mainframe', (item, advanced, text) => {
    text.add(2, Text.translate('item.cosmiccore.cosmic_processor_mainframe.tooltip.1').darkPurple())
  })
  //PSIONIC CIRCUITS
  event.addAdvanced(psionic, (item, advanced, text) => {
    text.add(1, Text.translate('item.cosmiccore.cosmic_processor_mainframe.tooltip.2').gray())
  })
  event.addAdvanced('cosmiccore:psionic_processor', (item, advanced, text) => {
    text.add(2, Text.translate('item.cosmiccore.psionic_processor.tooltip.1').lightPurple())
  })
  event.addAdvanced('cosmiccore:psionic_processor_assembly', (item, advanced, text) => {
    text.add(2, Text.translate('item.cosmiccore.psionic_processor_assembly.tooltip.1').lightPurple())
  })
  event.addAdvanced('cosmiccore:psionic_processor_supercomputer', (item, advanced, text) => {
    text.add(2, Text.translate('item.cosmiccore.psionic_processor_supercomputer.tooltip.1').lightPurple())
  })
  event.addAdvanced('cosmiccore:psionic_processor_mainframe', (item, advanced, text) => {
    text.add(2, Text.translate('item.cosmiccore.psionic_processor_mainframe.tooltip.1').lightPurple())
  })
  //MACROVERSE CIRCUITS
  event.addAdvanced(macroverse, (item, advanced, text) => {
    text.add(1, Text.translate('item.cosmiccore.psionic_processor_mainframe.tooltip.2').red().bold())
  })
  event.addAdvanced('cosmiccore:macroverse_processor', (item, advanced, text) => {
    text.add(2, Text.translate('item.cosmiccore.macroverse_processor.tooltip.1'))
  })
  event.addAdvanced('cosmiccore:macroverse_processor_assembly', (item, advanced, text) => {
    text.add(2, Text.translate('item.cosmiccore.macroverse_processor_assembly.tooltip.1'))
  })
  event.addAdvanced('cosmiccore:macroverse_processor_supercomputer', (item, advanced, text) => {
    text.add(2, Text.translate('item.cosmiccore.macroverse_processor_supercomputer.tooltip.1'))
  })
  event.addAdvanced('cosmiccore:macroverse_processor_mainframe', (item, advanced, text) => {
    text.add(2, Text.translate('item.cosmiccore.macroverse_processor_mainframe.tooltip.1'))
    text.add(3, Text.translate('item.cosmiccore.macroverse_processor_mainframe.tooltip.2').gray())
  })
  event.addAdvanced('botania:mana_diamond', (item, advanced, text) => {
    text.add(1, Text.translate('item.botania.mana_diamond.tooltip.1').yellow())
  })
  event.addAdvanced('botania:mana_pearl', (item, advanced, text) => {
    text.add(1, Text.translate('item.botania.mana_pearl.tooltip.1').yellow())
  })
  event.addAdvanced('botania:mana_quartz', (item, advanced, text) => {
    text.add(1, Text.translate('item.botania.mana_quartz.tooltip.1').yellow())
  })
  event.addAdvanced('gtceu:industrial_grade_floral_propagator', (item, advanced, text) => {
    text.add(1, Text.translate('item.gtceu.industrial_grade_floral_propagator.tooltip.1').gray())
    text.add(2, Text.translate('item.gtceu.industrial_grade_floral_propagator.tooltip.2').white().bold())
    text.add(3, Text.translate('item.gtceu.industrial_grade_floral_propagator.tooltip.3').darkPurple())
  })
  event.addAdvanced('gtceu:arboreal_growth_facility', (item, advanced, text) => {
    text.add(1, Text.translate('item.gtceu.arboreal_growth_facility.tooltip.1').gray())
    text.add(2, Text.translate('item.gtceu.industrial_grade_floral_propagator.tooltip.2').white().bold())
    text.add(3, Text.translate('item.gtceu.industrial_grade_floral_propagator.tooltip.3').darkPurple())
  })
  event.addAdvanced('gtceu:industrial_stoneworks', (item, advanced, text) => {
    text.add(1, Text.translate('item.gtceu.industrial_stoneworks.tooltip.1').gray())
    text.add(2, Text.translate('item.gtceu.industrial_grade_floral_propagator.tooltip.2').white().bold())
    text.add(3, Text.translate('item.gtceu.industrial_grade_floral_propagator.tooltip.3').darkPurple())
  })
  event.addAdvanced('kubejs:cosmic_meatballs', (item, advanced, text) => {
    text.add(1, Text.translate('item.kubejs.cosmic_meatballs.tooltip.1').white().bold())
    text.add(2, Text.translate('item.kubejs.cosmic_meatballs.tooltip.2').white().bold())
    text.add(3, Text.translate('item.kubejs.cosmic_meatballs.tooltip.3').darkPurple().italic())
  })
  event.addAdvanced('botania:alfheim_portal', (item, advanced, text) => {
    text.add(1, Text.translate('item.botania.alfheim_portal.tooltip.1').white().bold())
    text.add(2, Text.translate('item.botania.alfheim_portal.tooltip.2').white().bold())
    text.add(3, Text.translate('item.botania.alfheim_portal.tooltip.3').darkPurple().italic())
  })
  event.addAdvanced('cosmiccore:hellfire_foundry', (item, advanced, text) => {
    text.add(1, Text.of('A crucible capable of processing ').gray())
    text.add(2, Text.of('various alchemical reactions. ').gray())
    text.add(3, [Text.of('Accepts ').white(), Text.of('One ').gold(), Text.of('Energy Input Hatch.').white()])
  })
  event.addAdvanced('cosmiccore:drygmy_grove', (item, advanced, text) => {
    text.add(1, Text.translate('item.cosmiccore.drygmy_grove.tooltip.1').white().bold())
    text.add(2, Text.translate('item.cosmiccore.drygmy_grove.tooltip.2').aqua())
    text.add(3, Text.translate('item.cosmiccore.drygmy_grove.tooltip.3'))
    text.add(4, Text.translate('item.cosmiccore.drygmy_grove.tooltip.4'))
    text.add(5, Text.translate('item.cosmiccore.drygmy_grove.tooltip.5').gold())
    text.add(6, Text.translate('item.cosmiccore.drygmy_grove.tooltip.6').red().italic())
    text.add(7, Text.translate('item.cosmiccore.drygmy_grove.tooltip.2').aqua())
    text.add(8, Text.translate('item.cosmiccore.drygmy_grove.tooltip.8'))
  })
  event.addAdvanced('cosmiccore:vomahine_celestial_laser_bore', (item, advanced, text) => {
    text.add(1, Text.translate('item.cosmiccore.vomahine_celestial_laser_bore.tooltip.1').aqua().bold())
    text.add(2, Text.translate('item.cosmiccore.vomahine_celestial_laser_bore.tooltip.2').white().bold())
    text.add(3, Text.translate('item.cosmiccore.vomahine_celestial_laser_bore.tooltip.3'))
    if (event.isShift()) {
      text.add(4, Text.translate('item.cosmiccore.drygmy_grove.tooltip.2').aqua())
      text.add(5, [Text.translate('item.cosmiccore.vomahine_celestial_laser_bore.tooltip.7_1').white(), Text.translate('item.cosmiccore.vomahine_celestial_laser_bore.tooltip.7_2').gray()])
      text.add(6, [Text.translate('item.cosmiccore.vomahine_celestial_laser_bore.tooltip.10_1').white(), Text.translate('item.cosmiccore.vomahine_celestial_laser_bore.tooltip.10_2').gray()])
      text.add(7, [Text.translate('item.cosmiccore.vomahine_celestial_laser_bore.tooltip.13_1').white(), Text.translate('item.cosmiccore.vomahine_celestial_laser_bore.tooltip.13_2').gray()])
      text.add(8, Text.translate('item.cosmiccore.drygmy_grove.tooltip.2').aqua())
      text.add(9, Text.translate('item.cosmiccore.vomahine_celestial_laser_bore.tooltip.15').darkGreen())
      text.add(10, Text.translate('item.cosmiccore.vomahine_celestial_laser_bore.tooltip.16').gold())
      text.add(11, Text.translate('item.cosmiccore.vomahine_celestial_laser_bore.tooltip.17').yellow())
      text.add(12, Text.translate('item.cosmiccore.drygmy_grove.tooltip.2').aqua())
      text.add(13, Text.translate('item.cosmiccore.vomahine_celestial_laser_bore.tooltip.19').gold())
      text.add(14, Text.translate('item.cosmiccore.vomahine_celestial_laser_bore.tooltip.20').red().italic())
      text.add(15, Text.translate('item.cosmiccore.drygmy_grove.tooltip.2').aqua())
      text.add(16, Text.translate('item.cosmiccore.vomahine_celestial_laser_bore.tooltip.22'))
    } else {
      text.add(4, [Text.translate('item.cosmiccore.vomahine_celestial_laser_bore.tooltip.23').gold(), Text.translate('item.cosmiccore.vomahine_celestial_laser_bore.tooltip.24').yellow(), Text.translate('item.cosmiccore.vomahine_celestial_laser_bore.tooltip.25').gold()])
    }
  })
  event.addAdvanced('cosmiccore:stellar_iris', (item, advanced, text) => {
    text.add(1, Text.translate('item.cosmiccore.stellar_iris.tooltip.1').aqua().bold())
    text.add(2, Text.translate('item.cosmiccore.stellar_iris.tooltip.2'))
    if (event.isShift()) {
      text.add(3, Text.translate('item.cosmiccore.drygmy_grove.tooltip.2').aqua())
      text.add(4, [Text.translate('item.cosmiccore.stellar_iris.tooltip.6_1').white(), Text.translate('item.cosmiccore.stellar_iris.tooltip.6_2').red()])
      text.add(5, [Text.translate('item.cosmiccore.stellar_iris.tooltip.9_1').white(), Text.translate('item.cosmiccore.stellar_iris.tooltip.9_2').gray()])
      text.add(6, [Text.translate('item.cosmiccore.stellar_iris.tooltip.12_1').white(), Text.translate('item.cosmiccore.stellar_iris.tooltip.12_2').gray()])
      text.add(7, Text.translate('item.cosmiccore.drygmy_grove.tooltip.2').aqua())
      text.add(8, Text.translate('item.cosmiccore.stellar_iris.tooltip.14').darkGreen())
      text.add(9, Text.translate('item.cosmiccore.stellar_iris.tooltip.15').gold())
      text.add(10, Text.translate('item.cosmiccore.stellar_iris.tooltip.16').yellow())
      text.add(11, Text.translate('item.cosmiccore.drygmy_grove.tooltip.2').aqua())
      text.add(12, Text.translate('item.cosmiccore.stellar_iris.tooltip.18').gold())
      text.add(13, Text.translate('item.cosmiccore.stellar_iris.tooltip.19').white())
      text.add(14, Text.translate('item.cosmiccore.stellar_iris.tooltip.20').red().italic())
      text.add(15, Text.translate('item.cosmiccore.stellar_iris.tooltip.21').red().italic())
      text.add(16, Text.translate('item.cosmiccore.drygmy_grove.tooltip.2').aqua())
      text.add(17, Text.translate('item.cosmiccore.stellar_iris.tooltip.23'))
    } else {
      text.add(3, [Text.translate('item.cosmiccore.vomahine_celestial_laser_bore.tooltip.23').gold(), Text.translate('item.cosmiccore.vomahine_celestial_laser_bore.tooltip.24').yellow(), Text.translate('item.cosmiccore.vomahine_celestial_laser_bore.tooltip.25').gold()])
    }
  })

  //subscript (copy and paste) ₂₃₄₅₆₇₈₉₀
})
ItemEvents.tooltip(event => {
  // event.addAdvanced(/embers:(.*)/, (item, advanced, text) => {
  //   text.add(1, Text.of('The power of the Overseers hinders your mind.').red().italic())
  //   text.add(2, Text.of('Mod NYI - Expect integration in future Updates.').white().bold())
  // })
  event.addAdvanced('gtceu:max_meteor_recipe_dummy', (item, advanced, text) => {
    text.add(1, Text.translate('item.gtceu.max_meteor_recipe_dummy.tooltip.1').red().italic())
    text.add(2, Text.translate('item.gtceu.max_meteor_recipe_dummy.tooltip.2').white().bold())
  })
  // event.addAdvanced(/naturesaura:(.*)/, (item, advanced, text) => {
  //   text.add(1, Text.of('The power of the Overseers hinders your mind.').red().italic())
  //   text.add(2, Text.of('Mod NYI - Expect integration in future Updates.').white().bold())
  // })
  // event.addAdvanced(/occultism:(.*)/, (item, advanced, text) => {
  //   text.add(1, Text.of('The power of the Overseers hinders your mind.').red().italic())
  //   text.add(2, Text.of('Mod NYI - Expect integration in future Updates.').white().bold())
  // })
  let quarktech = ['cosmiccore:space_advanced_quarktech_chestplate', 'gtceu:quarktech_leggings', 'gtceu:quarktech_boots', 'gtceu:quarktech_helmet', 'gtceu:quarktech_chestplate', 'gtceu:advanced_quarktech_chestplate', 'cosmiccore:space_quarktech_chestplate']
  event.addAdvanced(quarktech, (item, advanced, text) => {
    text.add(1, Text.translate('item.gtceu.max_meteor_recipe_dummy.tooltip.3').green())
  })
  event.addAdvanced('ae2:condenser', (item, advanced, text) => {
    text.add(1, Text.translate('item.ae2.condenser.tooltip.1').red())
  })
  event.addAdvanced('gtceu:power_substation', (item, advanced, text) => {
    text.add(1, Text.of('DEPRECATED: Use shapeless recipe to migrate to CosmicCore version!').red())
    text.add(2, Text.of('Without it you will not be able to access wireless power! \n You have been warned!').red())
  })
  event.addAdvanced('ae2:condenser', (item, advanced, text) => {
    text.add(1, Text.of('Disabled: Use the GregTech based recipes!').red())
  })
  event.addAdvanced('bloodmagic:arc', (item, advanced, text) => {
    text.add(1, Text.of('Disabled: Use the GregTech based recipes!').red())
  })
  event.addAdvanced('malum:encyclopedia_arcana', (item, advanced, text) => {
    text.add(1, Text.translate('item.malum.encyclopedia_arcana.tooltip.1').red())
  })
  event.addAdvanced('malum:encyclopedia_esoterica', (item, advanced, text) => {
    text.add(1, Text.translate('item.malum.encyclopedia_arcana.tooltip.1').red())
  })
  event.addAdvanced('botania:gaia_ingot', (item, advanced, text) => {
    text.add(1, Text.translate('item.botania.gaia_ingot.tooltip.1').red())
  })
  event.addAdvanced('kubejs:prismatic_lens', (item, advanced, text) => {
    text.add(1, Text.translate('item.kubejs.prismatic_lens.tooltip.1').lightPurple())
  })
  event.addAdvanced('gtceu:primordial_oil', (item, advanced, text) => {
    text.add(1, Text.translate('item.gtceu.primordial_oil.tooltip.1').lightPurple())
    text.add(2, Text.translate('item.gtceu.primordial_oil.tooltip.2').lightPurple())
  })
  event.addAdvanced('integrateddynamics:mechanical_squeezer', (item, advanced, text) => {
    text.add(1, Text.translate('item.integrateddynamics.mechanical_squeezer.tooltip.1').green())
    text.add(2, Text.translate('item.integrateddynamics.mechanical_squeezer.tooltip.2').green())
  })
})

ItemEvents.tooltip(event => {
  event.addAdvanced('gtceu:grand_assembly_line', (item, advanced, text) => {
    text.add(1, Text.translate('item.gtceu.grand_assembly_line.tooltip.1').aqua().bold())
    text.add(2, Text.translate('item.gtceu.grand_assembly_line.tooltip.2').white().bold())
    text.add(3, Text.translate('item.gtceu.grand_assembly_line.tooltip.3'))
    if (event.isShift()) {
      text.add(4, Text.translate('item.cosmiccore.drygmy_grove.tooltip.2').aqua())
      text.add(5, [Text.translate('item.gtceu.grand_assembly_line.tooltip.7_1').white(), Text.translate('item.gtceu.grand_assembly_line.tooltip.7_2').aqua()])
      text.add(6, [Text.translate('item.gtceu.grand_assembly_line.tooltip.8').gray(), Text.translate('item.gtceu.grand_assembly_line.tooltip.9').green(), Text.translate('item.gtceu.grand_assembly_line.tooltip.10').gray()])
      text.add(7, [Text.translate('item.gtceu.grand_assembly_line.tooltip.13_1').white(), Text.translate('item.gtceu.grand_assembly_line.tooltip.13_2').gold()])
      text.add(8, Text.translate('item.cosmiccore.drygmy_grove.tooltip.2').aqua())
      text.add(9, Text.translate('item.gtceu.grand_assembly_line.tooltip.15').gold())
      text.add(10, Text.translate('item.gtceu.grand_assembly_line.tooltip.16').white().italic())
      text.add(11, Text.translate('item.cosmiccore.drygmy_grove.tooltip.2').aqua())
      text.add(12, Text.translate('item.cosmiccore.vomahine_celestial_laser_bore.tooltip.22'))
    } else {
      text.add(4, [Text.translate('item.cosmiccore.vomahine_celestial_laser_bore.tooltip.23').gold(), Text.translate('item.cosmiccore.vomahine_celestial_laser_bore.tooltip.24').yellow(), Text.translate('item.cosmiccore.vomahine_celestial_laser_bore.tooltip.25').gold()])
    }
  })
})