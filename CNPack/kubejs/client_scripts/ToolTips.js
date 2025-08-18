//
let cables = ['gtceu:manasteel_single_cable', 'gtceu:manasteel_double_cable', 'gtceu:manasteel_quadruple_cable', 'gtceu:manasteel_octal_cable', 'gtceu:manasteel_hex_cable']
let wires = ['gtceu:manasteel_single_wire', 'gtceu:manasteel_double_wire', 'gtceu:manasteel_quadruple_wire', 'gtceu:manasteel_octal_wire', 'gtceu:manasteel_hex_wire']
let echo = ['cosmiccore:harmonic_processor', 'cosmiccore:harmonic_processor_assembly', 'cosmiccore:harmonic_processor_supercomputer', 'cosmiccore:harmonic_processor_mainframe']
let optical = ['cosmiccore:optical_processor', 'cosmiccore:optical_processor_assembly', 'cosmiccore:optical_processor_supercomputer', 'cosmiccore:optical_processor_mainframe']
let cosmic = ['cosmiccore:suelescent_processor', 'cosmiccore:suelescent_processor_assembly', 'cosmiccore:suelescent_processor_supercomputer', 'cosmiccore:suelescent_processor_mainframe']
let akashic = ['cosmiccore:akashic_processor', 'cosmiccore:akashic_processor_assembly', 'cosmiccore:akashic_processor_supercomputer', 'cosmiccore:akashic_processor_mainframe']
let eschaton = ['cosmiccore:eschaton_processor', 'cosmiccore:eschaton_processor_assembly', 'cosmiccore:eschaton_processor_supercomputer', 'cosmiccore:eschaton_processor_mainframe']
let boilaway = ['gtceu:bronze_large_boiler', 'gtceu:steel_large_boiler', 'gtceu:titanium_large_boiler', 'gtceu:tungstensteel_large_boiler']
ItemEvents.tooltip(event => {
  // event.add('gtceu:manasteel_single_cable', Text.of('LV Superconductor'))
  event.addAdvanced('forbidden_arcanus:eternal_stella', (item, advanced, text) => {
    text.add(1, Text.of('已禁用：碰到GT工具会出问题。').red()) // Adds text in first line, pushing the items name down a line. If you want the line below the item name, the index must be 1
  })
  event.addAdvanced(cables, (item, advanced, text) => {
    text.add(1, Text.of('LV超导体 - 奥术稳定')) // Adds text in first line, pushing the items name down a line. If you want the line below the item name, the index must be 1
  })
  //BOILER WARNING : 
  event.addAdvanced(boilaway, (item, advanced, text) => {
    text.add(1, Text.of('已被禁用：大锅炉的配方仍可运作，但是在0.6.0的更新后因为蒸汽时代大改，该配方将会被移除。').gray())
  })
  //ECHO CIRCUITS
  event.addAdvanced(echo, (item, advanced, text) => {
    text.add(1, Text.of('和世界产生共鸣的电路板').gray())
  })
  event.addAdvanced('cosmiccore:harmonic_processor', (item, advanced, text) => {
    text.add(2, Text.of('ZPM级电路板').darkAqua())
  })
  event.addAdvanced('cosmiccore:harmonic_processor_assembly', (item, advanced, text) => {
    text.add(2, Text.of('UV级电路板').darkAqua())
  })
  event.addAdvanced('cosmiccore:harmonic_processor_supercomputer', (item, advanced, text) => {
    text.add(2, Text.of('UHV级电路板').darkAqua())
  })
  event.addAdvanced('cosmiccore:harmonic_processor_mainframe', (item, advanced, text) => {
    text.add(2, Text.of('UEV级电路板').darkAqua())
  })
  //OPTICAL CIRCUITS
  event.addAdvanced(optical, (item, advanced, text) => {
    text.add(1, Text.of('光速计算').gray())
  })
  event.addAdvanced('cosmiccore:optical_processor', (item, advanced, text) => {
    text.add(2, Text.of('UV级电路板').gold())
  })
  event.addAdvanced('cosmiccore:optical_processor_assembly', (item, advanced, text) => {
    text.add(2, Text.of('UHV级电路板').gold())
  })
  event.addAdvanced('cosmiccore:optical_processor_supercomputer', (item, advanced, text) => {
    text.add(2, Text.of('UEV级电路板').gold())
  })
  event.addAdvanced('cosmiccore:optical_processor_mainframe', (item, advanced, text) => {
    text.add(2, Text.of('UIV级电路板').gold())
  })
  //COSMIC CIRCUITS
  event.addAdvanced(cosmic, (item, advanced, text) => {
    text.add(1, Text.of('量子计算').gray())
  })
  event.addAdvanced('cosmiccore:suelescent_processor', (item, advanced, text) => {
    text.add(2, Text.of('UHV级电路板').darkPurple())
  })
  event.addAdvanced('cosmiccore:suelescent_processor_assembly', (item, advanced, text) => {
    text.add(2, Text.of('UEV级电路板').darkPurple())
  })
  event.addAdvanced('cosmiccore:suelescent_processor_supercomputer', (item, advanced, text) => {
    text.add(2, Text.of('UIV级电路板').darkPurple())
  })
  event.addAdvanced('cosmiccore:suelescent_processor_mainframe', (item, advanced, text) => {
    text.add(2, Text.of('UXV级电路板').darkPurple())
  })
  //akashic CIRCUITS
  event.addAdvanced(akashic, (item, advanced, text) => {
    text.add(1, Text.of('恒古记录电路板').gray())
  })
  event.addAdvanced('cosmiccore:akashic_processor', (item, advanced, text) => {
    text.add(2, Text.of('UEV级电路板').lightPurple())
  })
  event.addAdvanced('cosmiccore:akashic_processor_assembly', (item, advanced, text) => {
    text.add(2, Text.of('UIV级电路板').lightPurple())
  })
  event.addAdvanced('cosmiccore:akashic_processor_supercomputer', (item, advanced, text) => {
    text.add(2, Text.of('UXV级电路板').lightPurple())
  })
  event.addAdvanced('cosmiccore:akashic_processor_mainframe', (item, advanced, text) => {
    text.add(2, Text.of('OPV级电路板').lightPurple())
  })
  //eschaton CIRCUITS
  event.addAdvanced(eschaton, (item, advanced, text) => {
    text.add(1, Text.of('宇宙中的宇宙').red().bold())
  })
  event.addAdvanced('cosmiccore:eschaton_processor', (item, advanced, text) => {
    text.add(2, Text.of('UIV级电路板'))
  })
  event.addAdvanced('cosmiccore:eschaton_processor_assembly', (item, advanced, text) => {
    text.add(2, Text.of('UXV级电路板'))
  })
  event.addAdvanced('cosmiccore:eschaton_processor_supercomputer', (item, advanced, text) => {
    text.add(2, Text.of('OPV级电路板'))
  })
  event.addAdvanced('cosmiccore:eschaton_processor_mainframe', (item, advanced, text) => {
    text.add(2, Text.of('MAX级电路板'))
    text.add(3, Text.of('可以玩Minecraft，而且不会出现任何卡顿。真是幸福工厂给幸福开门，幸福到家了！').gray())
  })
  event.addAdvanced('botania:mana_diamond', (item, advanced, text) => {
    text.add(1, Text.of('MaC₄').yellow())
  })
  event.addAdvanced('botania:mana_pearl', (item, advanced, text) => {
    text.add(1, Text.of('Ma(BeK₄N₅)').yellow())
  })
  event.addAdvanced('botania:mana_quartz', (item, advanced, text) => {
    text.add(1, Text.of('Ma(SiO₂)').yellow())
  })
  event.addAdvanced('gtceu:industrial_grade_floral_propagator', (item, advanced, text) => {
    text.add(1, Text.of('大规模农业催生机').gray())
    text.add(2, Text.of('无损超频').white().bold())
    text.add(3, Text.of('超频时不会损失能源效率。').darkPurple())
   })
  event.addAdvanced('gtceu:arboreal_growth_facility', (item, advanced, text) => {
    text.add(1, Text.of('大规模植树机').gray())
    text.add(2, Text.of('无损超频').white().bold())
    text.add(3, Text.of('超频时不会损失能源效率。').darkPurple())
  })
  event.addAdvanced('gtceu:industrial_stoneworks', (item, advanced, text) => {
    text.add(1, Text.of('盒中火山').gray())
    text.add(2, Text.of('无损超频').white().bold())
    text.add(3, Text.of('超频时不会损失能源效率。').darkPurple())
  })
  event.addAdvanced('kubejs:cosmic_meatballs', (item, advanced, text) => {
    text.add(1, Text.of('多元宇宙之力').white().bold())
    text.add(2, Text.of('尽在这份暖心一餐之中。').white().bold())
    text.add(3, Text.of('注意：可能含有恒星物质！').darkPurple().italic())
  })
  event.addAdvanced('botania:alfheim_portal', (item, advanced, text) => {
    text.add(1, Text.of('一个能连接到异世的维度桥梁，').white().bold())
    text.add(2, Text.of('但其中空无一物，寂静而渺无生机。唯一传来的是一股浓重的死亡气息。').white().bold())
    text.add(3, Text.of('看来和精灵交易是完全不可能的了。').darkPurple().italic())
  })
  event.addAdvanced('cosmiccore:hellfire_foundry', (item, advanced, text) => {
    text.add(1, Text.of('一个可以处理许多炼金 ').gray())
    text.add(2, Text.of('反应的巨大坩埚。').gray())
    text.add(3, [Text.of('只能使用').white(), Text.of('单个').gold(), Text.of('能源仓。').white()])
  })
  event.addAdvanced('cosmiccore:drygmy_grove', (item, advanced, text) => {
    text.add(1, Text.of('无尽森林').white().bold())
    text.add(2, Text.of('------------------------------------------------------------').aqua())
    text.add(3, Text.of('创建一个绝对完美的小树林，其中足以住下一支德格米军队。'))
    text.add(4, Text.of('每个德格米护符都会成倍增加配方输出，最高无上限！'))
    text.add(5, Text.of('（原配方输出x输入的德格米护符）').gold())
    text.add(6, Text.of('但是并行仓中的科技会吓跑大自然的和谐，多方块将不会成型。').red().italic())
    text.add(7, Text.of('------------------------------------------------------------').aqua())
    text.add(8, Text.of('超频类型：有损超频'))
  })
  event.addAdvanced('cosmiccore:vomahine_celestial_laser_bore', (item, advanced, text) => {
    text.add(1, Text.of('多方块机器分类：巨构').aqua().bold())
    text.add(2, Text.of('恒星级钻井平台').white().bold())
    text.add(3, Text.of('选择性抽取下方的星球，然后抽取极其大量的资源。'))
    if (event.isShift()) {
      text.add(4, Text.of('------------------------------------------------------------').aqua())
      text.add(5, [Text.of('存储单元').white(), Text.of('决定了每次执行配方所能收集的资源量。').gray()])
      text.add(6, [Text.of('戴森球级太阳能板').white(), Text.of('会降低运行配方所需的总EU。').gray()])
      text.add(7, [Text.of('射线发生线圈').white(), Text.of('会提升运行配方所需的总EU，但是可以执行配方超频。').gray()])
      text.add(8, Text.of('------------------------------------------------------------').aqua())
      text.add(9, Text.of('从行星中会收集熔渣、流体和矿石。').darkGreen())
      text.add(10, Text.of('从气态行星中会收集气体，以及奇异固态物质。').gold())
      text.add(11, Text.of('从恒星和黑洞中会收集等离子体、奇异粒子和富灵能波态物。').yellow())
      text.add(12, Text.of('------------------------------------------------------------').aqua())
      text.add(13, Text.of('总消耗EU=（配方EUx激光发生线圈等级）/太阳能板等级').gold())
      text.add(14, Text.of('单个维度中如果一个玩家启动了多个恒星钻机，则会导致所有钻机全·部·关·机。').red().italic())
      text.add(15, Text.of('------------------------------------------------------------').aqua())
      text.add(16, Text.of('超频类型：奇异'))
    } else {
      text.add(4, [Text.of('按住').gold(), Text.of('Shift').yellow(), Text.of('可查看更多信息').gold()])
    }
  })
  event.addAdvanced('cosmiccore:stellar_iris', (item, advanced, text) => {
    text.add(1, Text.of('灵魂共振').aqua().bold())
    text.add(2, Text.of('一座能将灵魂连结到恒星星体，以及未知之处的永恒之上的一座巨构。'))
    if (event.isShift()) {
      text.add(3, Text.of('------------------------------------------------------------').aqua())
      text.add(4, [Text.of('星能压载：').white(), Text.of('当前的数据损坏率').red()])
      text.add(5, [Text.of('思维上载：').white(), Text.of('机器需要恒星星体才能成型，这台机器会通过灵魂破碎来防止这颗超新星爆发。').gray()])
      text.add(6, [Text.of('宇宙编织：').white(), Text.of('将致密的恒星物质分散进宇宙潜在的脉络中。').gray()])
      text.add(7, Text.of('------------------------------------------------------------').aqua())
      text.add(8, Text.of('被创造出的恒星会处于机器中心，其状态取决于使用的“恒星之种”。').darkGreen())
      text.add(9, Text.of('这颗恒星每tick都会消耗氢、氦、氮以及氧。').gold())
      text.add(10, Text.of('恒星和黑洞会对产出资源速率产生变化，还会解锁不同配方。').yellow())
      text.add(11, Text.of('------------------------------------------------------------').aqua())
      text.add(12, Text.of('接下来要做的：一堆看起来非常漂亮的多配方执行器或者模块blablabla').gold())
      text.add(13, Text.of('似乎有些知识只能亲身体会，查看GUI以了解更多。').white())
      text.add(14, Text.of('群星之环绑定在玩家的灵魂之内，如果发生意外停机，则将会立即杀死所有绑定该机器的团队或玩家。').red().italic())
      text.add(15, Text.of('每个团队或玩家只允许拥有一台群星之环。').red().italic())
      text.add(16, Text.of('------------------------------------------------------------').aqua())
      text.add(17, Text.of('超频类型：∞'))
    } else {
      text.add(3, [Text.of('按住').gold(), Text.of('Shift').yellow(), Text.of('可查看更多信息').gold()])
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
    text.add(1, Text.of('戴上我的眼睛，你会从其中窥见群星。').red().italic())
    text.add(2, Text.of('这是一台不存在的机器——你可以用它查看可用的血魔法坠星配方。').white().bold())
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
    text.add(1, Text.of('自适应性隔热').green())
  })
  event.addAdvanced('ae2:condenser', (item, advanced, text) => {
    text.add(1, Text.of('已被禁用：去用格雷科技的配方！').red())
  })
  event.addAdvanced('gtceu:power_substation', (item, advanced, text) => {
    text.add(1, Text.of('已被禁用：请把它无序合成为CosmicCore版的！').red())
    text.add(2, Text.of('否则你用不了无线电！').red())
    text.add(3, Text.of('我警告过你了！').red())
  })
  event.addAdvanced('ae2:condenser', (item, advanced, text) => {
    text.add(1, Text.of('已被禁用：去用格雷科技的配方！').red())
  })
  event.addAdvanced('bloodmagic:arc', (item, advanced, text) => {
    text.add(1, Text.of('已被禁用：去用格雷科技的配方！').red())
  })
  event.addAdvanced('malum:encyclopedia_arcana', (item, advanced, text) => {
    text.add(1, Text.of('注意：书中的配方可能有问题，请查看EMI！').red())
  })
  event.addAdvanced('malum:encyclopedia_esoterica', (item, advanced, text) => {
    text.add(1, Text.of('注意：书中的配方可能有问题，请查看EMI！').red())
  })
  event.addAdvanced('kubejs:prismatic_lens', (item, advanced, text) => {
    text.add(1, Text.of('创造出的激光足以切穿金属。').lightPurple())
  })
  event.addAdvanced('gtceu:primordial_oil', (item, advanced, text) => {
    text.add(1, Text.of('一股具有原始永恒之力的无限致密黏液。').lightPurple())
    text.add(2, Text.of('尝起来有点像桃子。').lightPurple())
  })
  event.addAdvanced('integrateddynamics:mechanical_squeezer', (item, advanced, text) => {
    text.add(1, Text.of('配方的能量消耗已经设定为0了！').green())
    text.add(2, Text.of('不用能量就能运行！').green())
  })
    event.addAdvanced('minecraft:nether_star', (item, advanced, text) => {
    text.add(1, Text.of('凋零不再会掉落下界之星。').red())
  })
})

ItemEvents.tooltip(event => {
  event.addAdvanced('gtceu:grand_assembly_line', (item, advanced, text) => {
    text.add(1, Text.of('多方块机器分类：超大机器').aqua().bold())
    text.add(2, Text.of('让亨利·福特的装配线都羞愧难当。').white().bold())
    text.add(3, Text.of('以闪瞎眼的速度组装各种部件。'))
    if (event.isShift()) {
      text.add(4, Text.of('------------------------------------------------------------').aqua())
      text.add(5, [Text.of('允许使用').white(), Text.of('激光靶仓。').aqua()])
      text.add(6, [Text.of('需要消耗').gray(), Text.of('算力').green(), Text.of('才能运行，算力需求CWU/t取决于基础配方数值，以及超频电压数。').gray()])
      text.add(7, [Text.of('允许使用').white(), Text.of('并行控制仓。').gold()])
      text.add(8, Text.of('------------------------------------------------------------').aqua())
      text.add(9, Text.of('算力公式占位符').gold())
      text.add(10, Text.of('所需的CWU/t显示在主机上了已经').white().italic())
      text.add(11, Text.of('------------------------------------------------------------').aqua())
      text.add(12, Text.of('超频类型：奇异'))
    } else {
      text.add(4, [Text.of('按住').gold(), Text.of('Shift').yellow(), Text.of('可查看更多信息').gold()])
    }
  })

  event.addAdvanced('gtceu:lunar_tapestry', (item, advanced, text) => {
    text.add(1, Text.of('多方块类型：高级月亮帆').aqua().bold())
    text.add(2, Text.of('可以收集群星的泪水').white().bold())
    text.add(3, Text.of('从宇宙风中收集特殊的材料'))
    if (event.isShift()) {
      text.add(4, Text.of('------------------------------------------------------------').aqua())
      text.add(5, [Text.of('无法').white(), Text.of('超频！').aqua()])
      text.add(6, [Text.of('需要消耗').gray(), Text.of('算力和EU').green(), Text.of('才能运行。').gray()])
      text.add(7, [Text.of('按照它所在的行星产生').white(), Text.of('特殊的恒星液体').gold(), Text.of('。').white()])
      text.add(8, Text.of('------------------------------------------------------------').aqua())
      text.add(9, Text.of('改变光学校准电路板可以更改当前的收集强度。').gold())
      text.add(10, Text.of('每次调整都会将当前的算力需求翻四倍。').white().italic())
      text.add(11, Text.of('------------------------------------------------------------').aqua())
      text.add(12, Text.of('超频类型：无'))
    } else {
      text.add(4, [Text.of('按住').gold(), Text.of('Shift').yellow(), Text.of('可查看更多信息').gold()])
    }
  })



  event.addAdvanced('cosmiccore:void_miner', (item, advanced, text) => {
    text.add(1, Text.of('多方块类型：基岩层钻机').aqua().bold())
    text.add(2, Text.of('超多矿物！').white().bold())
    text.add(3, Text.of('可以将基岩撕开，然后直接挖掘底下的矿石和矿藏点。'))
    if (event.isShift()) {
      text.add(4, Text.of('------------------------------------------------------------').aqua())
      text.add(5, [Text.of('所有的EMI配方都是').white(), Text.of('“有一无二”类型的产出').aqua()])
      text.add(6, [Text.of('这意味着每次配方运行时，你只会得到目标配方中的一个矿石。').gray()])
      text.add(7, [Text.of('需要').white(), Text.of('烈焰液和钻井液才能运行，').gold(), Text.of('需要放置在虚空边上才能运行。').white()])
      text.add(8, Text.of('------------------------------------------------------------').aqua())
      text.add(12, Text.of('超频类型：有损tick超频'))
    } else {
      text.add(4, [Text.of('按住').gold(), Text.of('Shift').yellow(), Text.of('可查看更多信息').gold()])
    }
  })


  // Multiblock Code or Design Credits; a Loose category to give thanks to the wonderful devs making machines possible
  // Do not edit unless you are Ghostipedia or have explicit approval to do so, thank you!
  
  event.addAdvanced('cosmiccore:drone_station', (item, advanced, text) => {
    text.add(1, Text.of('多方块类型：维护蜂群').aqua().bold())
    text.add(2, Text.of('这b动静到底是哪来的？').white().bold())
    text.add(3, Text.of('用无人机蜂群自动修复机器的各种维护问题！'))
    if (event.isShift()) {
      text.add(4, Text.of('-------------------------------------------').aqua())
      text.add(5, [Text.of('消耗无人机以修复机器维护问题。').white()])
      text.add(6, [Text.of('无人机等级越高作用范围越远，放入菌落可以为机器提供超净间环境。').gray()])
      text.add(7, Text.of('-------------------------------------------').aqua())
      text.add(8, Text.of('以下是该多方块机器的制作人员表'))
      text.add(9, Text.of('主要代码贡献者：').aqua())
      text.add(10, Text.of('JurreJelle & Kathryne').white())
      text.add(11, [Text.of('美工及UI：').gold(), Text.of('Ghostipedia').white()])
    } else {
      text.add(4, [Text.of('按住').gold(), Text.of('Shift').yellow(), Text.of('可查看更多信息').gold()])
    }
  })



})

ItemEvents.tooltip(event => {

  event.addAdvanced(/sophisticatedstorage:(.*)/, (item, advanced, text) => {
    text.add(1, Text.of('已经被禁用了！已经被禁用了！！！').red().italic())
    text.add(2, Text.of('0.9.0版后将会被移除，请尽快替换。').red().bold())
  })

})

ItemEvents.tooltip(event => {
  event.addAdvanced(/sophisticatedbackpacks:(.*)/, (item, advanced, text) => {
    text.add(1, Text.of('已经被禁用了！已经被禁用了！！！').red().italic())
    text.add(2, Text.of('0.9.0版后将会被移除，请尽快替换。').red().bold())
  })

})
