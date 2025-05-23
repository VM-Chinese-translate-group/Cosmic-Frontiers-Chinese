StartupEvents.registry('item', event => {

    event.create('t1_rocket_plating')
    event.create('welded_rocket_plating')
    event.create('hsse_nose_cone')
    event.create('hsse_fin')
    event.create('hsse_engine')
    event.create('osmiridium_nose_cone')
    event.create('osmiridium_fin')
    event.create('osmiridium_engine')
    event.create('americium_nose_cone')
    event.create('americium_fin')
    event.create('americium_engine')
    event.create('shredded_magebloom')
    event.create('washed_magebloom')
    event.create('terraweave_cloth').displayName('Terraweave Cloth')
    event.create('carbon_ethersteel_lattice').displayName('Carbon Fiber Ethersteel Lattice')
    event.create('resplendent_sylvan_nanolattice').displayName('Resplendent Sylvan Nanolattice')
    event.create('spooled_terraweave').displayName('Spooled Terraweave')
    event.create('t2_rocket_plating')
    event.create('welded_rocket_plating_mk2').displayName('Welded Rocket Plating Mk.2')
    event.create('chromatically_doped_nether_star_boule').glow(true).displayName('Chromatically Doped Nether star Boule')
    //Nano Lithography 
    event.create('mana_deposited_wafer').displayName('Mana Deposited Wafer')
    event.create('nano_cpu_mask').displayName('Nano CPU Mask')
    event.create('prepared_nano_cpu_wafer').displayName('Prepared Nano CPU Wafer')
    //Quantum Lithography
    event.create('thundering_mana_deposited_wafer').displayName('Thundering Mana Deposited Wafer')
    event.create('quantum_cpu_mask').displayName('Quantum CPU Mask')
    event.create('prepared_quantum_cpu_wafer').displayName('Prepared Quantum CPU Wafer')
    event.create('seal_shards').displayName('Shards of the Underworld')
    event.create('cosmic_meatballs').displayName('Cosmic Meatballs')
    event.create('prismatic_lens').displayName('Prismatic Lens')

    event.create('reinforced_respirator', 'helmet').displayName('Reinforced Respirator').maxDamage(1024).modifyTier(tier => 'breather')


    //Planet and Orbit Icons
    event.create('undergarden_dim').displayName('Undergarden')
})
