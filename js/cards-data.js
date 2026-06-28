/**
 * PokéTCG Premium - Local Cards Database & API Engine
 */

// 1. Local Database of High-Quality Cards representing Meta and Pack Simulator
window.LOCAL_CARDS = [
  // --- SV06: Twilight Masquerade ---
  {
    id: "sv6-130",
    name: "Dragapult ex",
    supertype: "Pokémon",
    subtypes: ["Stage 2", "ex"],
    types: ["Dragon"],
    hp: "320",
    rarity: "Double Rare",
    set: "sv6",
    setName: "Twilight Masquerade",
    imageUrl: "https://images.pokemontcg.io/sv6/130.png",
    marketPrice: 9.50,
    rules: ["Rules: When your Pokémon ex is Knocked Out, your opponent takes 2 Prize cards."],
    attacks: [
      { cost: ["Fire", "Psychic"], name: "Phantom Dive", damage: "200", text: "Put 6 damage counters on your opponent's Bench Pokémon in any way you like." }
    ]
  },
  {
    id: "sv6-25",
    name: "Teal Mask Ogerpon ex",
    supertype: "Pokémon",
    subtypes: ["Basic", "ex"],
    types: ["Grass"],
    hp: "210",
    rarity: "Double Rare",
    set: "sv6",
    setName: "Twilight Masquerade",
    imageUrl: "https://images.pokemontcg.io/sv6/25.png",
    marketPrice: 12.00,
    rules: ["Ability: Teal Dance - Once during your turn, you may attach a Basic Grass Energy card from your hand to this Pokémon. If you do, draw a card."],
    attacks: [
      { cost: ["Grass", "Grass", "Grass"], name: "Myriad Leaf Shower", damage: "30+", text: "This attack does 30 more damage for each Energy attached to both Active Pokémon." }
    ]
  },
  {
    id: "sv6-106",
    name: "Greninja ex",
    supertype: "Pokémon",
    subtypes: ["Stage 2", "ex"],
    types: ["Water"],
    hp: "310",
    rarity: "Double Rare",
    set: "sv6",
    setName: "Twilight Masquerade",
    imageUrl: "https://images.pokemontcg.io/sv6/106.png",
    marketPrice: 15.50,
    rules: ["Rules: When your Pokémon ex is Knocked Out, your opponent takes 2 Prize cards."],
    attacks: [
      { cost: ["Water"], name: "Shinobi Blade", damage: "170", text: "Search your deck for any 1 card and put it into your hand." },
      { cost: ["Water", "Colorless", "Colorless"], name: "Mirage Barrage", damage: "", text: "Discard 2 Energy from this Pokémon. This attack does 120 damage to 2 of your opponent's Pokémon." }
    ]
  },
  {
    id: "sv6-208",
    name: "Teal Mask Ogerpon ex (SAR)",
    supertype: "Pokémon",
    subtypes: ["Basic", "ex"],
    types: ["Grass"],
    hp: "210",
    rarity: "Special Illustration Rare",
    set: "sv6",
    setName: "Twilight Masquerade",
    imageUrl: "https://images.pokemontcg.io/sv6/208.png",
    marketPrice: 75.00,
    rules: ["Ability: Teal Dance - Draw card and attach Grass Energy."],
    attacks: [
      { cost: ["Grass", "Grass", "Grass"], name: "Myriad Leaf Shower", damage: "30+", text: "30 more damage for each Energy attached to both Active Pokémon." }
    ]
  },
  {
    id: "sv6-145",
    name: "Carmine",
    supertype: "Trainer",
    subtypes: ["Supporter"],
    types: [],
    hp: "",
    rarity: "Uncommon",
    set: "sv6",
    setName: "Twilight Masquerade",
    imageUrl: "https://images.pokemontcg.io/sv6/145.png",
    marketPrice: 1.20,
    rules: ["Discard your hand and draw 5 cards. If you go first, you can play this card on your first turn."],
    attacks: []
  },
  {
    id: "sv6-217",
    name: "Carmine (SAR)",
    supertype: "Trainer",
    subtypes: ["Supporter"],
    types: [],
    hp: "",
    rarity: "Special Illustration Rare",
    set: "sv6",
    setName: "Twilight Masquerade",
    imageUrl: "https://images.pokemontcg.io/sv6/217.png",
    marketPrice: 110.00,
    rules: ["Discard your hand and draw 5 cards. Special illustration art."],
    attacks: []
  },

  // --- SV05: Temporal Forces ---
  {
    id: "sv5-81",
    name: "Iron Crown ex",
    supertype: "Pokémon",
    subtypes: ["Basic", "Future", "ex"],
    types: ["Psychic"],
    hp: "220",
    rarity: "Double Rare",
    set: "sv5",
    setName: "Temporal Forces",
    imageUrl: "https://images.pokemontcg.io/sv5/81.png",
    marketPrice: 8.20,
    rules: ["Ability: Cobalt Command - Your Future Pokémon's attacks (except this one) do 20 more damage to your opponent's Active Pokémon."],
    attacks: [
      { cost: ["Psychic", "Colorless", "Colorless"], name: "Twin Laser", damage: "", text: "This attack does 20 damage to 2 of your opponent's Pokémon. This attack's damage isn't affected by Weakness." }
    ]
  },
  {
    id: "sv5-123",
    name: "Raging Bolt ex",
    supertype: "Pokémon",
    subtypes: ["Basic", "Ancient", "ex"],
    types: ["Dragon"],
    hp: "240",
    rarity: "Double Rare",
    set: "sv5",
    setName: "Temporal Forces",
    imageUrl: "https://images.pokemontcg.io/sv5/123.png",
    marketPrice: 14.00,
    rules: ["Rules: When your Pokémon ex is Knocked Out, your opponent takes 2 Prize cards."],
    attacks: [
      { cost: ["Lightning", "Fighting"], name: "Bellowing Thunder", damage: "70x", text: "You may discard any amount of Basic Energy from your Pokémon. This attack does 70 damage for each card discarded this way." }
    ]
  },
  {
    id: "sv5-208",
    name: "Raging Bolt ex (SAR)",
    supertype: "Pokémon",
    subtypes: ["Basic", "Ancient", "ex"],
    types: ["Dragon"],
    hp: "240",
    rarity: "Special Illustration Rare",
    set: "sv5",
    setName: "Temporal Forces",
    imageUrl: "https://images.pokemontcg.io/sv5/208.png",
    marketPrice: 95.00,
    rules: ["Special Illustration Rare Ancient Pokemon ex."],
    attacks: [
      { cost: ["Lightning", "Fighting"], name: "Bellowing Thunder", damage: "70x", text: "Does 70 damage for each discarded Basic Energy." }
    ]
  },
  {
    id: "sv5-144",
    name: "Buddy-Buddy Poffin",
    supertype: "Trainer",
    subtypes: ["Item"],
    types: [],
    hp: "",
    rarity: "Uncommon",
    set: "sv5",
    setName: "Temporal Forces",
    imageUrl: "https://images.pokemontcg.io/sv5/144.png",
    marketPrice: 2.50,
    rules: ["Search your deck for up to 2 Basic Pokémon with 70 HP or less and put them onto your Bench. Then, shuffle your deck."],
    attacks: []
  },

  // --- Base Set (1999 Classic Era) ---
  {
    id: "base1-4",
    name: "Charizard",
    supertype: "Pokémon",
    subtypes: ["Stage 2"],
    types: ["Fire"],
    hp: "120",
    rarity: "Rare",
    set: "base1",
    setName: "Base Set 1999",
    imageUrl: "https://images.pokemontcg.io/base1/4.png",
    marketPrice: 350.00,
    rules: ["Pokémon Power: Energy Burn - As often as you like during your turn, you may turn all Energy attached to Charizard into Fire Energy for the rest of the turn."],
    attacks: [
      { cost: ["Fire", "Fire", "Fire", "Fire"], name: "Fire Spin", damage: "100", text: "Discard 2 Energy attached to Charizard in order to use this attack." }
    ]
  },
  {
    id: "base1-15",
    name: "Venusaur",
    supertype: "Pokémon",
    subtypes: ["Stage 2"],
    types: ["Grass"],
    hp: "100",
    rarity: "Rare",
    set: "base1",
    setName: "Base Set 1999",
    imageUrl: "https://images.pokemontcg.io/base1/15.png",
    marketPrice: 85.00,
    rules: ["Pokémon Power: Energy Trans - As often as you like during your turn, you may move 1 Grass Energy card attached to 1 of your Pokémon to another."],
    attacks: [
      { cost: ["Grass", "Grass", "Grass", "Grass"], name: "Solarbeam", damage: "67", text: "" }
    ]
  },
  {
    id: "base1-2",
    name: "Blastoise",
    supertype: "Pokémon",
    subtypes: ["Stage 2"],
    types: ["Water"],
    hp: "100",
    rarity: "Rare",
    set: "base1",
    setName: "Base Set 1999",
    imageUrl: "https://images.pokemontcg.io/base1/2.png",
    marketPrice: 120.00,
    rules: ["Pokémon Power: Rain Dance - As often as you like during your turn, you may attach a Basic Water Energy card from your hand to 1 of your Water Pokémon."],
    attacks: [
      { cost: ["Water", "Water", "Water"], name: "Hydro Pump", damage: "40+", text: "Does 40 damage plus 10 more damage for each Water Energy attached to Blastoise but not used for this attack." }
    ]
  },

  // --- Meta Deck & General Core Cards ---
  {
    id: "sv3-125",
    name: "Charizard ex",
    supertype: "Pokémon",
    subtypes: ["Stage 2", "ex"],
    types: ["Darkness"], // Tera Dark type
    hp: "330",
    rarity: "Double Rare",
    set: "sv3",
    setName: "Obsidian Flames",
    imageUrl: "https://images.pokemontcg.io/sv3/125.png",
    marketPrice: 28.00,
    rules: ["Ability: Infernal Reign - When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may search your deck for up to 3 Basic Fire Energy cards and attach them to your Pokémon in any way you like. Then, shuffle your deck."],
    attacks: [
      { cost: ["Fire", "Fire"], name: "Burning Darkness", damage: "180+", text: "This attack does 30 more damage for each Prize card your opponent has taken." }
    ]
  },
  {
    id: "sv1-86",
    name: "Gardevoir ex",
    supertype: "Pokémon",
    subtypes: ["Stage 2", "ex"],
    types: ["Psychic"],
    hp: "310",
    rarity: "Double Rare",
    set: "sv1",
    setName: "Scarlet & Violet",
    imageUrl: "https://images.pokemontcg.io/sv1/86.png",
    marketPrice: 4.50,
    rules: ["Ability: Psychic Embrace - As often as you like during your turn, you may attach a Basic Psychic Energy card from your discard pile to 1 of your Psychic Pokémon. If you do, put 2 damage counters on that Pokémon."],
    attacks: [
      { cost: ["Psychic", "Psychic", "Colorless"], name: "Force Leap", damage: "190", text: "" }
    ]
  },
  {
    id: "sv1-166",
    name: "Arven",
    supertype: "Trainer",
    subtypes: ["Supporter"],
    types: [],
    hp: "",
    rarity: "Uncommon",
    set: "sv1",
    setName: "Scarlet & Violet",
    imageUrl: "https://images.pokemontcg.io/sv1/166.png",
    marketPrice: 2.10,
    rules: ["Search your deck for an Item card and a Pokémon Tool card, reveal them, and put them into your hand. Then, shuffle your deck."],
    attacks: []
  },
  {
    id: "sv1-172",
    name: "Iono",
    supertype: "Trainer",
    subtypes: ["Supporter"],
    types: [],
    hp: "",
    rarity: "Uncommon",
    set: "sv1",
    setName: "Scarlet & Violet",
    imageUrl: "https://images.pokemontcg.io/sv1/172.png",
    marketPrice: 3.50,
    rules: ["Each player shuffles their hand and puts it on the bottom of their deck. Then, each player draws a card for each of their remaining Prize cards."],
    attacks: []
  },
  {
    id: "sv4-163",
    name: "Earthen Vessel",
    supertype: "Trainer",
    subtypes: ["Item"],
    types: [],
    hp: "",
    rarity: "Uncommon",
    set: "sv4",
    setName: "Paradox Rift",
    imageUrl: "https://images.pokemontcg.io/sv4/163.png",
    marketPrice: 4.80,
    rules: ["You can play this card only if you discard another card from your hand. Search your deck for up to 2 Basic Energy cards, reveal them, and put them into your hand. Then, shuffle your deck."],
    attacks: []
  },
  {
    id: "sv1-180",
    name: "Nest Ball",
    supertype: "Trainer",
    subtypes: ["Item"],
    types: [],
    hp: "",
    rarity: "Uncommon",
    set: "sv1",
    setName: "Scarlet & Violet",
    imageUrl: "https://images.pokemontcg.io/sv1/180.png",
    marketPrice: 1.50,
    rules: ["Search your deck for a Basic Pokémon and put it onto your Bench. Then, shuffle your deck."],
    attacks: []
  },
  {
    id: "sv1-194",
    name: "Ultra Ball",
    supertype: "Trainer",
    subtypes: ["Item"],
    types: [],
    hp: "",
    rarity: "Uncommon",
    set: "sv1",
    setName: "Scarlet & Violet",
    imageUrl: "https://images.pokemontcg.io/sv1/194.png",
    marketPrice: 0.80,
    rules: ["You can play this card only if you discard 2 other cards from your hand. Search your deck for a Pokémon, reveal it, and put it into your hand. Then, shuffle your deck."],
    attacks: []
  },

  // --- Energies (Essential for Deck Building & Tutorial) ---
  {
    id: "sv1-229",
    name: "Grass Energy",
    supertype: "Energy",
    subtypes: ["Basic"],
    types: ["Grass"],
    hp: "",
    rarity: "Common",
    set: "sv1",
    setName: "Scarlet & Violet",
    imageUrl: "https://images.pokemontcg.io/sv1/229.png",
    marketPrice: 0.10,
    rules: ["Basic Grass Energy used to power Pokémon attacks."],
    attacks: []
  },
  {
    id: "sv1-230",
    name: "Fire Energy",
    supertype: "Energy",
    subtypes: ["Basic"],
    types: ["Fire"],
    hp: "",
    rarity: "Common",
    set: "sv1",
    setName: "Scarlet & Violet",
    imageUrl: "https://images.pokemontcg.io/sv1/230.png",
    marketPrice: 0.10,
    rules: ["Basic Fire Energy used to power Pokémon attacks."],
    attacks: []
  },
  {
    id: "sv1-231",
    name: "Water Energy",
    supertype: "Energy",
    subtypes: ["Basic"],
    types: ["Water"],
    hp: "",
    rarity: "Common",
    set: "sv1",
    setName: "Scarlet & Violet",
    imageUrl: "https://images.pokemontcg.io/sv1/231.png",
    marketPrice: 0.10,
    rules: ["Basic Water Energy used to power Pokémon attacks."],
    attacks: []
  },
  {
    id: "sv1-232",
    name: "Psychic Energy",
    supertype: "Energy",
    subtypes: ["Basic"],
    types: ["Psychic"],
    hp: "",
    rarity: "Common",
    set: "sv1",
    setName: "Scarlet & Violet",
    imageUrl: "https://images.pokemontcg.io/sv1/232.png",
    marketPrice: 0.10,
    rules: ["Basic Psychic Energy used to power Pokémon attacks."],
    attacks: []
  },
  {
    id: "sv1-233",
    name: "Lightning Energy",
    supertype: "Energy",
    subtypes: ["Basic"],
    types: ["Lightning"],
    hp: "",
    rarity: "Common",
    set: "sv1",
    setName: "Scarlet & Violet",
    imageUrl: "https://images.pokemontcg.io/sv1/233.png",
    marketPrice: 0.10,
    rules: ["Basic Lightning Energy used to power Pokémon attacks."],
    attacks: []
  },
  {
    id: "sv1-234",
    name: "Fighting Energy",
    supertype: "Energy",
    subtypes: ["Basic"],
    types: ["Fighting"],
    hp: "",
    rarity: "Common",
    set: "sv1",
    setName: "Scarlet & Violet",
    imageUrl: "https://images.pokemontcg.io/sv1/234.png",
    marketPrice: 0.10,
    rules: ["Basic Fighting Energy used to power Pokémon attacks."],
    attacks: []
  },
  {
    id: "swsh9-151",
    name: "Double Turbo Energy",
    supertype: "Energy",
    subtypes: ["Special"],
    types: ["Colorless"],
    hp: "",
    rarity: "Uncommon",
    set: "swsh9",
    setName: "Brilliant Stars",
    imageUrl: "https://images.pokemontcg.io/swsh9/151.png",
    marketPrice: 1.50,
    rules: ["As long as this card is attached to a Pokémon, it provides 2 Colorless Energy. The attacks of the Pokémon this card is attached to do 20 less damage to your opponent's Active Pokémon."],
    attacks: []
  },
  // --- Additional Classic & Meta Cards ---
  {
    id: "base1-58",
    name: "Pikachu",
    supertype: "Pokémon",
    subtypes: ["Basic"],
    types: ["Lightning"],
    hp: "40",
    rarity: "Common",
    set: "base1",
    setName: "Base Set 1999",
    imageUrl: "https://images.pokemontcg.io/base1/58.png",
    marketPrice: 5.00,
    rules: [],
    attacks: [
      { cost: ["Colorless"], name: "Gnaw", damage: "10", text: "" },
      { cost: ["Lightning", "Colorless"], name: "Thunder Jolt", damage: "30", text: "Flip a coin. If tails, Pikachu does 10 damage to itself." }
    ]
  },
  {
    id: "base1-10",
    name: "Mewtwo",
    supertype: "Pokémon",
    subtypes: ["Basic"],
    types: ["Psychic"],
    hp: "60",
    rarity: "Rare",
    set: "base1",
    setName: "Base Set 1999",
    imageUrl: "https://images.pokemontcg.io/base1/10.png",
    marketPrice: 45.00,
    rules: [],
    attacks: [
      { cost: ["Psychic", "Colorless"], name: "Psychic", damage: "10+", text: "Does 10 damage plus 10 more damage for each Energy card attached to the Defending Pokémon." },
      { cost: ["Psychic", "Psychic"], name: "Barrier", damage: "", text: "Discard 1 Psychic Energy card attached to Mewtwo in order to prevent all effects of attacks, including damage, done to Mewtwo during your opponent's next turn." }
    ]
  },
  {
    id: "swsh12-138",
    name: "Lugia VSTAR",
    supertype: "Pokémon",
    subtypes: ["VSTAR"],
    types: ["Colorless"],
    hp: "280",
    rarity: "Ultra Rare",
    set: "swsh12",
    setName: "Silver Tempest",
    imageUrl: "https://images.pokemontcg.io/swsh12/138.png",
    marketPrice: 15.00,
    rules: ["VSTAR Power - Ability: Summoning Star - During your turn, you may put up to 2 Colorless Pokémon that don't have a Rule Box from your discard pile onto your Bench."],
    attacks: [
      { cost: ["Colorless", "Colorless", "Colorless", "Colorless"], name: "Tempest Dive", damage: "220", text: "You may discard a Stadium in play." }
    ]
  },
  {
    id: "swsh7-111",
    name: "Rayquaza VMAX",
    supertype: "Pokémon",
    subtypes: ["VMAX"],
    types: ["Dragon"],
    hp: "320",
    rarity: "Ultra Rare",
    set: "swsh7",
    setName: "Evolving Skies",
    imageUrl: "https://images.pokemontcg.io/swsh7/111.png",
    marketPrice: 35.00,
    rules: ["Ability: Azure Pulse - Once during your turn, you may discard your hand and draw 3 cards."],
    attacks: [
      { cost: ["Fire", "Lightning"], name: "Max Burst", damage: "20+", text: "You may discard any amount of Basic Fire Energy or Basic Lightning Energy from this Pokémon. This attack does 80 more damage for each card you discarded in this way." }
    ]
  },
  {
    id: "swsh9-132",
    name: "Boss's Orders",
    supertype: "Trainer",
    subtypes: ["Supporter"],
    types: [],
    hp: "",
    rarity: "Rare Holo",
    set: "swsh9",
    setName: "Brilliant Stars",
    imageUrl: "https://images.pokemontcg.io/swsh9/132.png",
    marketPrice: 2.50,
    rules: ["Switch 1 of your opponent's Benched Pokémon with their Active Pokémon."],
    attacks: []
  },
  {
    id: "sv1-189",
    name: "Professor's Research",
    supertype: "Trainer",
    subtypes: ["Supporter"],
    types: [],
    hp: "",
    rarity: "Rare Holo",
    set: "sv1",
    setName: "Scarlet & Violet",
    imageUrl: "https://images.pokemontcg.io/sv1/189.png",
    marketPrice: 1.00,
    rules: ["Discard your hand and draw 7 cards."],
    attacks: []
  },
  {
    id: "base1-95",
    name: "Switch",
    supertype: "Trainer",
    subtypes: ["Item"],
    types: [],
    hp: "",
    rarity: "Common",
    set: "base1",
    setName: "Base Set 1999",
    imageUrl: "https://images.pokemontcg.io/base1/95.png",
    marketPrice: 1.00,
    rules: ["Switch your Active Pokémon with 1 of your Benched Pokémon."],
    attacks: []
  }
,
  // --- AUTO FETCHED SETS (151 & PAF) ---
  {
  "id": "sv3pt5-2",
  "name": "Ivysaur",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 1"
  ],
  "types": [
    "Grass"
  ],
  "hp": "100",
  "rarity": "Uncommon",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/2_hires.png",
  "marketPrice": 0.17,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Grass",
        "Colorless"
      ],
      "name": "Leech Seed",
      "damage": "30",
      "text": "Heal 20 damage from this Pokémon."
    },
    {
      "cost": [
        "Grass",
        "Grass",
        "Colorless"
      ],
      "name": "Vine Whip",
      "damage": "80",
      "text": ""
    }
  ]
},
  {
  "id": "sv3pt5-1",
  "name": "Bulbasaur",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Grass"
  ],
  "hp": "70",
  "rarity": "Common",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/1_hires.png",
  "marketPrice": 0.15,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Grass",
        "Colorless"
      ],
      "name": "Leech Seed",
      "damage": "20",
      "text": "Heal 20 damage from this Pokémon."
    }
  ]
},
  {
  "id": "sv3pt5-3",
  "name": "Venusaur ex",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 2",
    "ex"
  ],
  "types": [
    "Grass"
  ],
  "hp": "340",
  "rarity": "Double Rare",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/3_hires.png",
  "marketPrice": 1.33,
  "rules": [
    "Pokémon ex rule: When your Pokémon ex is Knocked Out, your opponent takes 2 Prize cards."
  ],
  "attacks": [
    {
      "cost": [
        "Grass",
        "Grass",
        "Colorless"
      ],
      "name": "Dangerous Toxwhip",
      "damage": "150",
      "text": "Your opponent's Active Pokémon is now Confused and Poisoned."
    }
  ]
},
  {
  "id": "sv3pt5-7",
  "name": "Squirtle",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Water"
  ],
  "hp": "60",
  "rarity": "Common",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/7_hires.png",
  "marketPrice": 0.21,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Water"
      ],
      "name": "Withdraw",
      "damage": "",
      "text": "Flip a coin. If heads, during your opponent's next turn, prevent all damage done to this Pokémon by attacks."
    },
    {
      "cost": [
        "Water",
        "Water"
      ],
      "name": "Skull Bash",
      "damage": "20",
      "text": ""
    }
  ]
},
  {
  "id": "sv3pt5-19",
  "name": "Rattata",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Colorless"
  ],
  "hp": "40",
  "rarity": "Common",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/19_hires.png",
  "marketPrice": 0.09,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Colorless",
        "Colorless"
      ],
      "name": "Gnaw the Wound",
      "damage": "20+",
      "text": "This attack does 10 more damage for each damage counter on your opponent's Active Pokémon."
    }
  ]
},
  {
  "id": "sv3pt5-8",
  "name": "Wartortle",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 1"
  ],
  "types": [
    "Water"
  ],
  "hp": "100",
  "rarity": "Uncommon",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/8_hires.png",
  "marketPrice": 0.21,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Water"
      ],
      "name": "Free Diving",
      "damage": "",
      "text": "Put up to 3 Basic Water Energy cards from your discard pile into your hand."
    },
    {
      "cost": [
        "Water",
        "Water"
      ],
      "name": "Spinning Attack",
      "damage": "50",
      "text": ""
    }
  ]
},
  {
  "id": "sv3pt5-23",
  "name": "Ekans",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Darkness"
  ],
  "hp": "70",
  "rarity": "Common",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/23_hires.png",
  "marketPrice": 0.09,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Darkness",
        "Darkness"
      ],
      "name": "Acid Spray",
      "damage": "30",
      "text": "Flip a coin. If heads, discard an Energy from your opponent's Active Pokémon."
    }
  ]
},
  {
  "id": "sv3pt5-9",
  "name": "Blastoise ex",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 2",
    "ex"
  ],
  "types": [
    "Water"
  ],
  "hp": "330",
  "rarity": "Double Rare",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/9_hires.png",
  "marketPrice": 1.88,
  "rules": [
    "Pokémon ex rule: When your Pokémon ex is Knocked Out, your opponent takes 2 Prize cards."
  ],
  "attacks": [
    {
      "cost": [
        "Water",
        "Water"
      ],
      "name": "Twin Cannons",
      "damage": "140×",
      "text": "Discard up to 2 Basic Water Energy cards from your hand. This attack does 140 damage for each card you discarded in this way."
    }
  ]
},
  {
  "id": "sv3pt5-24",
  "name": "Arbok ex",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 1",
    "ex"
  ],
  "types": [
    "Darkness"
  ],
  "hp": "270",
  "rarity": "Double Rare",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/24_hires.png",
  "marketPrice": 1.86,
  "rules": [
    "Pokémon ex rule: When your Pokémon ex is Knocked Out, your opponent takes 2 Prize cards."
  ],
  "attacks": [
    {
      "cost": [
        "Darkness",
        "Darkness"
      ],
      "name": "Bind Down",
      "damage": "70",
      "text": "During your opponent's next turn, the Defending Pokémon can't retreat."
    },
    {
      "cost": [
        "Darkness",
        "Darkness",
        "Darkness"
      ],
      "name": "Menacing Fangs",
      "damage": "150",
      "text": "Your opponent discards 2 cards from their hand."
    }
  ]
},
  {
  "id": "sv3pt5-12",
  "name": "Butterfree",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 2"
  ],
  "types": [
    "Grass"
  ],
  "hp": "130",
  "rarity": "Uncommon",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/12_hires.png",
  "marketPrice": 0.11,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Grass"
      ],
      "name": "Whirlwind",
      "damage": "60",
      "text": "Switch out your opponent's Active Pokémon to the Bench. (Your opponent chooses the new Active Pokémon.)"
    },
    {
      "cost": [
        "Colorless",
        "Colorless"
      ],
      "name": "Bye-Bye Flight",
      "damage": "",
      "text": "Choose 1 of your opponent's Benched Pokémon. Shuffle that Pokémon and all attached cards into their deck, and then shuffle this Pokémon and all attached cards into your deck. If your opponent has no Benched Pokémon, this attack does nothing."
    }
  ]
},
  {
  "id": "sv3pt5-25",
  "name": "Pikachu",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Lightning"
  ],
  "hp": "60",
  "rarity": "Common",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/25_hires.png",
  "marketPrice": 0.18,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Lightning"
      ],
      "name": "Charge",
      "damage": "",
      "text": "Search your deck for a Basic Lightning Energy card and attach it to this Pokémon. Then, shuffle your deck."
    },
    {
      "cost": [
        "Lightning",
        "Lightning",
        "Colorless"
      ],
      "name": "Pika Punch",
      "damage": "50",
      "text": ""
    }
  ]
},
  {
  "id": "sv3pt5-16",
  "name": "Pidgey",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Colorless"
  ],
  "hp": "50",
  "rarity": "Common",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/16_hires.png",
  "marketPrice": 0.09,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Colorless"
      ],
      "name": "Call for Family",
      "damage": "",
      "text": "Search your deck for up to 2 Basic Pokémon and put them onto your Bench. Then, shuffle your deck."
    },
    {
      "cost": [
        "Colorless",
        "Colorless"
      ],
      "name": "Tackle",
      "damage": "20",
      "text": ""
    }
  ]
},
  {
  "id": "sv3pt5-29",
  "name": "Nidoran ♀",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Darkness"
  ],
  "hp": "60",
  "rarity": "Common",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/29_hires.png",
  "marketPrice": 0.19,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Darkness",
        "Colorless"
      ],
      "name": "Poison Horn",
      "damage": "20",
      "text": "Your opponent's Active Pokémon is now Poisoned."
    }
  ]
},
  {
  "id": "sv3pt5-21",
  "name": "Spearow",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Colorless"
  ],
  "hp": "50",
  "rarity": "Common",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/21_hires.png",
  "marketPrice": 0.06,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Colorless"
      ],
      "name": "Speed Dive",
      "damage": "10",
      "text": ""
    }
  ]
},
  {
  "id": "sv3pt5-33",
  "name": "Nidorino",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 1"
  ],
  "types": [
    "Darkness"
  ],
  "hp": "90",
  "rarity": "Uncommon",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/33_hires.png",
  "marketPrice": 0.13,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Darkness"
      ],
      "name": "Sharp Fang",
      "damage": "30",
      "text": ""
    },
    {
      "cost": [
        "Darkness",
        "Darkness",
        "Colorless"
      ],
      "name": "Superpowered Horns",
      "damage": "100",
      "text": ""
    }
  ]
},
  {
  "id": "sv3pt5-30",
  "name": "Nidorina",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 1"
  ],
  "types": [
    "Darkness"
  ],
  "hp": "90",
  "rarity": "Uncommon",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/30_hires.png",
  "marketPrice": 0.13,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Darkness"
      ],
      "name": "Fetch Family",
      "damage": "",
      "text": "Search your deck for up to 3 Pokémon, reveal them, and put them into your hand. Then, shuffle your deck."
    },
    {
      "cost": [
        "Darkness",
        "Colorless"
      ],
      "name": "Sharp Fang",
      "damage": "50",
      "text": ""
    }
  ]
},
  {
  "id": "sv3pt5-34",
  "name": "Nidoking",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 2"
  ],
  "types": [
    "Darkness"
  ],
  "hp": "170",
  "rarity": "Rare",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/34_hires.png",
  "marketPrice": 0.3,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Darkness",
        "Darkness",
        "Colorless",
        "Colorless"
      ],
      "name": "Venomous Impact",
      "damage": "190",
      "text": "Your opponent's Active Pokémon is now Poisoned."
    }
  ]
},
  {
  "id": "sv3pt5-32",
  "name": "Nidoran ♂",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Darkness"
  ],
  "hp": "60",
  "rarity": "Common",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/32_hires.png",
  "marketPrice": 0.17,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Darkness"
      ],
      "name": "Horn Attack",
      "damage": "20",
      "text": ""
    }
  ]
},
  {
  "id": "sv3pt5-35",
  "name": "Clefairy",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Psychic"
  ],
  "hp": "60",
  "rarity": "Common",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/35_hires.png",
  "marketPrice": 0.13,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Psychic"
      ],
      "name": "Moon-Viewing Invitation",
      "damage": "",
      "text": "Search your deck for up to 3 Clefairy and put them onto your Bench. Then, shuffle your deck."
    },
    {
      "cost": [
        "Psychic",
        "Colorless"
      ],
      "name": "Smack",
      "damage": "20",
      "text": ""
    }
  ]
},
  {
  "id": "sv3pt5-36",
  "name": "Clefable",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 1"
  ],
  "types": [
    "Psychic"
  ],
  "hp": "100",
  "rarity": "Uncommon",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/36_hires.png",
  "marketPrice": 0.1,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Psychic"
      ],
      "name": "Follow Me",
      "damage": "",
      "text": "Switch in 1 of your opponent's Benched Pokémon to the Active Spot."
    },
    {
      "cost": [
        "Psychic",
        "Psychic",
        "Psychic"
      ],
      "name": "More Moon",
      "damage": "50",
      "text": "If your opponent's Pokémon is Knocked Out by damage from this attack, take 1 more Prize card."
    }
  ]
},
  {
  "id": "sv3pt5-44",
  "name": "Gloom",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 1"
  ],
  "types": [
    "Grass"
  ],
  "hp": "70",
  "rarity": "Uncommon",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/44_hires.png",
  "marketPrice": 0.13,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Colorless",
        "Colorless"
      ],
      "name": "Drool",
      "damage": "30",
      "text": ""
    }
  ]
},
  {
  "id": "sv3pt5-45",
  "name": "Vileplume",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 2"
  ],
  "types": [
    "Grass"
  ],
  "hp": "140",
  "rarity": "Rare",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/45_hires.png",
  "marketPrice": 0.26,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Grass",
        "Colorless",
        "Colorless"
      ],
      "name": "Solar Beam",
      "damage": "90",
      "text": ""
    }
  ]
},
  {
  "id": "sv3pt5-46",
  "name": "Paras",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Grass"
  ],
  "hp": "70",
  "rarity": "Common",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/46_hires.png",
  "marketPrice": 0.11,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Grass"
      ],
      "name": "Stampede",
      "damage": "10",
      "text": ""
    },
    {
      "cost": [
        "Grass",
        "Colorless"
      ],
      "name": "Spore Ball",
      "damage": "20",
      "text": "Your opponent's Active Pokémon is now Asleep."
    }
  ]
},
  {
  "id": "sv3pt5-51",
  "name": "Dugtrio",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 1"
  ],
  "types": [
    "Fighting"
  ],
  "hp": "90",
  "rarity": "Uncommon",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/51_hires.png",
  "marketPrice": 0.09,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Fighting"
      ],
      "name": "Headbutt Bounce",
      "damage": "40",
      "text": ""
    },
    {
      "cost": [
        "Fighting",
        "Fighting"
      ],
      "name": "Mud Bomb",
      "damage": "80",
      "text": ""
    }
  ]
},
  {
  "id": "sv3pt5-47",
  "name": "Parasect",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 1"
  ],
  "types": [
    "Grass"
  ],
  "hp": "120",
  "rarity": "Uncommon",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/47_hires.png",
  "marketPrice": 0.1,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Grass"
      ],
      "name": "Spread Filaments",
      "damage": "",
      "text": "Flip 2 coins. Search your deck for a number of Grass Pokémon up to the number of heads and put them onto your Bench. Then, shuffle your deck."
    },
    {
      "cost": [
        "Colorless",
        "Colorless"
      ],
      "name": "Claw Slash",
      "damage": "50",
      "text": ""
    }
  ]
},
  {
  "id": "sv3pt5-50",
  "name": "Diglett",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Fighting"
  ],
  "hp": "50",
  "rarity": "Common",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/50_hires.png",
  "marketPrice": 0.1,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Fighting"
      ],
      "name": "Headbutt Bounce",
      "damage": "10",
      "text": ""
    },
    {
      "cost": [
        "Fighting",
        "Fighting"
      ],
      "name": "Mud-Slap",
      "damage": "30",
      "text": ""
    }
  ]
},
  {
  "id": "sv3pt5-4",
  "name": "Charmander",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Fire"
  ],
  "hp": "70",
  "rarity": "Common",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/4_hires.png",
  "marketPrice": 0.09,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Fire"
      ],
      "name": "Blazing Destruction",
      "damage": "",
      "text": "Discard a Stadium in play."
    },
    {
      "cost": [
        "Fire",
        "Fire"
      ],
      "name": "Steady Firebreathing",
      "damage": "30",
      "text": ""
    }
  ]
},
  {
  "id": "sv3pt5-14",
  "name": "Kakuna",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 1"
  ],
  "types": [
    "Grass"
  ],
  "hp": "80",
  "rarity": "Common",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/14_hires.png",
  "marketPrice": 0.13,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Colorless",
        "Colorless"
      ],
      "name": "Zzzt",
      "damage": "20",
      "text": ""
    }
  ]
},
  {
  "id": "sv3pt5-5",
  "name": "Charmeleon",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 1"
  ],
  "types": [
    "Fire"
  ],
  "hp": "100",
  "rarity": "Uncommon",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/5_hires.png",
  "marketPrice": 0.12,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Fire"
      ],
      "name": "Combustion",
      "damage": "20",
      "text": ""
    },
    {
      "cost": [
        "Fire",
        "Fire",
        "Fire"
      ],
      "name": "Fire Blast",
      "damage": "90",
      "text": "Discard an Energy from this Pokémon."
    }
  ]
},
  {
  "id": "sv3pt5-6",
  "name": "Charizard ex",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 2",
    "ex"
  ],
  "types": [
    "Fire"
  ],
  "hp": "330",
  "rarity": "Double Rare",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/6_hires.png",
  "marketPrice": 9.58,
  "rules": [
    "Pokémon ex rule: When your Pokémon ex is Knocked Out, your opponent takes 2 Prize cards."
  ],
  "attacks": [
    {
      "cost": [
        "Fire"
      ],
      "name": "Brave Wing",
      "damage": "60+",
      "text": "If this Pokémon has any damage counters on it, this attack does 100 more damage."
    },
    {
      "cost": [
        "Fire",
        "Fire",
        "Fire",
        "Fire"
      ],
      "name": "Explosive Vortex",
      "damage": "330",
      "text": "Discard 3 Energy from this Pokémon."
    }
  ]
},
  {
  "id": "sv3pt5-10",
  "name": "Caterpie",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Grass"
  ],
  "hp": "50",
  "rarity": "Common",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/10_hires.png",
  "marketPrice": 0.14,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Grass"
      ],
      "name": "Leaf Munch",
      "damage": "10+",
      "text": "If your opponent's Active Pokémon is a Grass Pokémon, this attack does 30 more damage."
    }
  ]
},
  {
  "id": "sv3pt5-11",
  "name": "Metapod",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 1"
  ],
  "types": [
    "Grass"
  ],
  "hp": "90",
  "rarity": "Common",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/11_hires.png",
  "marketPrice": 0.15,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Grass"
      ],
      "name": "Tackle",
      "damage": "20",
      "text": ""
    },
    {
      "cost": [
        "Colorless",
        "Colorless"
      ],
      "name": "Defensive Posture",
      "damage": "",
      "text": "Flip a coin. If heads, during your opponent's next turn, prevent all damage done to this Pokémon by attacks."
    }
  ]
},
  {
  "id": "sv3pt5-13",
  "name": "Weedle",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Grass"
  ],
  "hp": "50",
  "rarity": "Common",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/13_hires.png",
  "marketPrice": 0.07,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Grass"
      ],
      "name": "Ram",
      "damage": "10",
      "text": ""
    },
    {
      "cost": [
        "Colorless",
        "Colorless"
      ],
      "name": "Bug Bite",
      "damage": "20",
      "text": ""
    }
  ]
},
  {
  "id": "sv3pt5-17",
  "name": "Pidgeotto",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 1"
  ],
  "types": [
    "Colorless"
  ],
  "hp": "80",
  "rarity": "Common",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/17_hires.png",
  "marketPrice": 0.17,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Colorless"
      ],
      "name": "Flap",
      "damage": "20",
      "text": ""
    }
  ]
},
  {
  "id": "sv3pt5-18",
  "name": "Pidgeot",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 2"
  ],
  "types": [
    "Colorless"
  ],
  "hp": "130",
  "rarity": "Uncommon",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/18_hires.png",
  "marketPrice": 0.13,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Colorless"
      ],
      "name": "Flap",
      "damage": "40",
      "text": ""
    },
    {
      "cost": [
        "Colorless",
        "Colorless",
        "Colorless"
      ],
      "name": "Fly",
      "damage": "150",
      "text": "Flip a coin. If tails, this attack does nothing. If heads, during your opponent's next turn, prevent all damage from and effects of attacks done to this Pokémon."
    }
  ]
},
  {
  "id": "sv3pt5-26",
  "name": "Raichu",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 1"
  ],
  "types": [
    "Lightning"
  ],
  "hp": "120",
  "rarity": "Rare",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/26_hires.png",
  "marketPrice": 0.4,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Lightning",
        "Lightning",
        "Colorless"
      ],
      "name": "Thunder",
      "damage": "180",
      "text": "This Pokémon also does 50 damage to itself."
    }
  ]
},
  {
  "id": "sv3pt5-27",
  "name": "Sandshrew",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Fighting"
  ],
  "hp": "60",
  "rarity": "Common",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/27_hires.png",
  "marketPrice": 0.12,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Colorless",
        "Colorless"
      ],
      "name": "Scratch",
      "damage": "30",
      "text": ""
    }
  ]
},
  {
  "id": "sv3pt5-28",
  "name": "Sandslash",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 1"
  ],
  "types": [
    "Fighting"
  ],
  "hp": "120",
  "rarity": "Uncommon",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/28_hires.png",
  "marketPrice": 0.09,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Fighting"
      ],
      "name": "Rumble",
      "damage": "30",
      "text": "During your opponent's next turn, the Defending Pokémon can't retreat."
    },
    {
      "cost": [
        "Fighting",
        "Colorless",
        "Colorless"
      ],
      "name": "Spike Rend",
      "damage": "80+",
      "text": "If your opponent's Active Pokémon already has any damage counters on it, this attack does 100 more damage."
    }
  ]
},
  {
  "id": "sv3pt5-31",
  "name": "Nidoqueen",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 2"
  ],
  "types": [
    "Darkness"
  ],
  "hp": "170",
  "rarity": "Uncommon",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/31_hires.png",
  "marketPrice": 0.13,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Darkness",
        "Colorless"
      ],
      "name": "Queen Press",
      "damage": "90",
      "text": "During your opponent's next turn, prevent all damage done to this Pokémon by attacks from Basic Pokémon."
    },
    {
      "cost": [
        "Darkness",
        "Darkness",
        "Colorless"
      ],
      "name": "Lunge Out",
      "damage": "160",
      "text": ""
    }
  ]
},
  {
  "id": "sv3pt5-39",
  "name": "Jigglypuff",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Colorless"
  ],
  "hp": "70",
  "rarity": "Common",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/39_hires.png",
  "marketPrice": 0.11,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Colorless"
      ],
      "name": "Lead",
      "damage": "",
      "text": "Search your deck for a Supporter card, reveal it, and put it into your hand. Then, shuffle your deck."
    },
    {
      "cost": [
        "Colorless",
        "Colorless"
      ],
      "name": "Stompy Stomp",
      "damage": "20×",
      "text": "Flip 2 coins. This attack does 20 damage for each heads."
    }
  ]
},
  {
  "id": "sv3pt5-40",
  "name": "Wigglytuff ex",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 1",
    "ex"
  ],
  "types": [
    "Colorless"
  ],
  "hp": "250",
  "rarity": "Double Rare",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/40_hires.png",
  "marketPrice": 1.17,
  "rules": [
    "Pokémon ex rule: When your Pokémon ex is Knocked Out, your opponent takes 2 Prize cards."
  ],
  "attacks": [
    {
      "cost": [
        "Colorless",
        "Colorless",
        "Colorless"
      ],
      "name": "Friend Tackle",
      "damage": "90+",
      "text": "If you played a Supporter card from your hand during this turn, this attack does 90 more damage."
    }
  ]
},
  {
  "id": "sv3pt5-41",
  "name": "Zubat",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Darkness"
  ],
  "hp": "40",
  "rarity": "Common",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/41_hires.png",
  "marketPrice": 0.1,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Colorless"
      ],
      "name": "Bite",
      "damage": "10",
      "text": ""
    }
  ]
},
  {
  "id": "sv3pt5-43",
  "name": "Oddish",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Grass"
  ],
  "hp": "60",
  "rarity": "Common",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/43_hires.png",
  "marketPrice": 0.1,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Colorless",
        "Colorless"
      ],
      "name": "Razor Leaf",
      "damage": "20",
      "text": ""
    }
  ]
},
  {
  "id": "sv3pt5-49",
  "name": "Venomoth",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 1"
  ],
  "types": [
    "Grass"
  ],
  "hp": "90",
  "rarity": "Uncommon",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/49_hires.png",
  "marketPrice": 0.13,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Grass"
      ],
      "name": "Perplexing Powder",
      "damage": "30",
      "text": "Your opponent's Active Pokémon is now Confused. During your opponent's next turn, they can't play any Item cards from their hand."
    },
    {
      "cost": [
        "Grass",
        "Colorless",
        "Colorless"
      ],
      "name": "Speed Wing",
      "damage": "90",
      "text": ""
    }
  ]
},
  {
  "id": "sv3pt5-15",
  "name": "Beedrill",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 2"
  ],
  "types": [
    "Grass"
  ],
  "hp": "130",
  "rarity": "Rare",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/15_hires.png",
  "marketPrice": 0.26,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Colorless",
        "Colorless"
      ],
      "name": "Nadir Needle",
      "damage": "30+",
      "text": "If you have no cards in your hand, this attack does 120 more damage, and your opponent's Active Pokémon is now Paralyzed and Poisoned."
    },
    {
      "cost": [
        "Grass",
        "Grass"
      ],
      "name": "Pierce",
      "damage": "110",
      "text": ""
    }
  ]
},
  {
  "id": "sv3pt5-20",
  "name": "Raticate",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 1"
  ],
  "types": [
    "Colorless"
  ],
  "hp": "70",
  "rarity": "Uncommon",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/20_hires.png",
  "marketPrice": 0.09,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Colorless",
        "Colorless"
      ],
      "name": "Second Bite",
      "damage": "30+",
      "text": "This attack does 30 more damage for each damage counter on your opponent's Active Pokémon."
    }
  ]
},
  {
  "id": "sv3pt5-22",
  "name": "Fearow",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 1"
  ],
  "types": [
    "Colorless"
  ],
  "hp": "90",
  "rarity": "Uncommon",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/22_hires.png",
  "marketPrice": 0.12,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Colorless"
      ],
      "name": "Beak Catch",
      "damage": "",
      "text": "Search your deck for up to 3 cards and put them into your hand. Then, shuffle your deck."
    },
    {
      "cost": [
        "Colorless"
      ],
      "name": "Speed Dive",
      "damage": "50",
      "text": ""
    }
  ]
},
  {
  "id": "sv3pt5-37",
  "name": "Vulpix",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Fire"
  ],
  "hp": "70",
  "rarity": "Common",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/37_hires.png",
  "marketPrice": 0.12,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Fire",
        "Colorless"
      ],
      "name": "Super Singe",
      "damage": "20",
      "text": "Flip a coin. If heads, your opponent's Active Pokémon is now Burned."
    }
  ]
},
  {
  "id": "sv3pt5-38",
  "name": "Ninetales ex",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 1",
    "ex"
  ],
  "types": [
    "Fire"
  ],
  "hp": "260",
  "rarity": "Double Rare",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/38_hires.png",
  "marketPrice": 2.54,
  "rules": [
    "Pokémon ex rule: When your Pokémon ex is Knocked Out, your opponent takes 2 Prize cards."
  ],
  "attacks": [
    {
      "cost": [
        "Fire"
      ],
      "name": "Heat Wave",
      "damage": "30",
      "text": "Your opponent's Active Pokémon is now Burned."
    },
    {
      "cost": [
        "Fire",
        "Colorless"
      ],
      "name": "Mirrored Flames",
      "damage": "80+",
      "text": "If you have the same number of cards in your hand as your opponent, this attack does 140 more damage."
    }
  ]
},
  {
  "id": "sv3pt5-42",
  "name": "Golbat",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 1"
  ],
  "types": [
    "Darkness"
  ],
  "hp": "80",
  "rarity": "Uncommon",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/42_hires.png",
  "marketPrice": 0.09,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Colorless"
      ],
      "name": "Skill Dive",
      "damage": "",
      "text": "This attack does 40 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"
    }
  ]
},
  {
  "id": "sv3pt5-48",
  "name": "Venonat",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Grass"
  ],
  "hp": "70",
  "rarity": "Common",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/48_hires.png",
  "marketPrice": 0.08,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Colorless"
      ],
      "name": "Gnaw",
      "damage": "10",
      "text": ""
    },
    {
      "cost": [
        "Grass",
        "Colorless",
        "Colorless"
      ],
      "name": "Beam",
      "damage": "40",
      "text": ""
    }
  ]
},
  {
  "id": "sv3pt5-52",
  "name": "Meowth",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Colorless"
  ],
  "hp": "70",
  "rarity": "Common",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/52_hires.png",
  "marketPrice": 0.16,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Colorless"
      ],
      "name": "Come Here Right Meow",
      "damage": "",
      "text": "Flip a coin. If heads, switch in 1 of your opponent's Benched Pokémon to the Active Spot."
    },
    {
      "cost": [
        "Colorless",
        "Colorless"
      ],
      "name": "Dig Claws",
      "damage": "20",
      "text": ""
    }
  ]
},
  {
  "id": "sv3pt5-53",
  "name": "Persian",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 1"
  ],
  "types": [
    "Colorless"
  ],
  "hp": "110",
  "rarity": "Uncommon",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/53_hires.png",
  "marketPrice": 0.14,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Colorless",
        "Colorless",
        "Colorless"
      ],
      "name": "Slash",
      "damage": "70",
      "text": ""
    }
  ]
},
  {
  "id": "sv3pt5-59",
  "name": "Arcanine",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 1"
  ],
  "types": [
    "Fire"
  ],
  "hp": "150",
  "rarity": "Uncommon",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/59_hires.png",
  "marketPrice": 0.15,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Fire"
      ],
      "name": "Torrid Torrent",
      "damage": "30",
      "text": "Attach up to 2 Basic Fire Energy cards from your discard pile to this Pokémon."
    },
    {
      "cost": [
        "Fire",
        "Fire",
        "Colorless",
        "Colorless"
      ],
      "name": "Dynamite Fang",
      "damage": "240",
      "text": "Discard 2 Fire Energy from this Pokémon."
    }
  ]
},
  {
  "id": "sv3pt5-54",
  "name": "Psyduck",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Water"
  ],
  "hp": "70",
  "rarity": "Common",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/54_hires.png",
  "marketPrice": 0.19,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Colorless"
      ],
      "name": "Overthink",
      "damage": "",
      "text": "During your opponent's next turn, whenever they flip a coin, treat it as tails."
    },
    {
      "cost": [
        "Water"
      ],
      "name": "Water Gun",
      "damage": "10",
      "text": ""
    }
  ]
},
  {
  "id": "sv3pt5-60",
  "name": "Poliwag",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Water"
  ],
  "hp": "60",
  "rarity": "Common",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/60_hires.png",
  "marketPrice": 0.08,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Water"
      ],
      "name": "Bubble",
      "damage": "10",
      "text": "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed."
    }
  ]
},
  {
  "id": "sv3pt5-61",
  "name": "Poliwhirl",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 1"
  ],
  "types": [
    "Water"
  ],
  "hp": "90",
  "rarity": "Common",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/61_hires.png",
  "marketPrice": 0.18,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Water"
      ],
      "name": "Wave Splash",
      "damage": "20",
      "text": ""
    },
    {
      "cost": [
        "Water",
        "Colorless"
      ],
      "name": "Frog Hop",
      "damage": "30+",
      "text": "Flip a coin. If heads, this attack does 60 more damage."
    }
  ]
},
  {
  "id": "sv3pt5-71",
  "name": "Victreebel",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 2"
  ],
  "types": [
    "Grass"
  ],
  "hp": "150",
  "rarity": "Uncommon",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/71_hires.png",
  "marketPrice": 0.09,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Grass"
      ],
      "name": "Spit Up",
      "damage": "50",
      "text": ""
    },
    {
      "cost": [
        "Grass",
        "Colorless"
      ],
      "name": "Slow-Acting Acid",
      "damage": "120",
      "text": "At the end of your opponent's next turn, put 12 damage counters on the Defending Pokémon."
    }
  ]
},
  {
  "id": "sv3pt5-78",
  "name": "Rapidash",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 1"
  ],
  "types": [
    "Fire"
  ],
  "hp": "100",
  "rarity": "Uncommon",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/78_hires.png",
  "marketPrice": 0.17,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Fire"
      ],
      "name": "Singe",
      "damage": "",
      "text": "Your opponent's Active Pokémon is now Burned."
    },
    {
      "cost": [
        "Fire",
        "Colorless",
        "Colorless"
      ],
      "name": "Mach Turn",
      "damage": "90",
      "text": "Switch this Pokémon with 1 of your Benched Pokémon."
    }
  ]
},
  {
  "id": "sv3pt5-82",
  "name": "Magneton",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 1"
  ],
  "types": [
    "Lightning"
  ],
  "hp": "90",
  "rarity": "Uncommon",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/82_hires.png",
  "marketPrice": 0.16,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Lightning"
      ],
      "name": "Junk Magnet",
      "damage": "",
      "text": "Put up to 2 Item cards from your discard pile into your hand."
    },
    {
      "cost": [
        "Lightning",
        "Colorless",
        "Colorless"
      ],
      "name": "Head Bolt",
      "damage": "60",
      "text": ""
    }
  ]
},
  {
  "id": "sv3pt5-85",
  "name": "Dodrio",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 1"
  ],
  "types": [
    "Colorless"
  ],
  "hp": "100",
  "rarity": "Rare",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/85_hires.png",
  "marketPrice": 0.27,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Colorless"
      ],
      "name": "Ballistic Beak",
      "damage": "10+",
      "text": "This attack does 30 more damage for each damage counter on this Pokémon."
    }
  ]
},
  {
  "id": "sv3pt5-92",
  "name": "Gastly",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Psychic"
  ],
  "hp": "50",
  "rarity": "Common",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/92_hires.png",
  "marketPrice": 0.24,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Psychic"
      ],
      "name": "Suffocating Gas",
      "damage": "20",
      "text": ""
    }
  ]
},
  {
  "id": "sv3pt5-94",
  "name": "Gengar",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 2"
  ],
  "types": [
    "Psychic"
  ],
  "hp": "130",
  "rarity": "Rare",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/94_hires.png",
  "marketPrice": 2.99,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Psychic"
      ],
      "name": "Poltergeist",
      "damage": "50×",
      "text": "Your opponent reveals their hand. This attack does 50 damage for each Trainer card you find there."
    },
    {
      "cost": [
        "Psychic",
        "Colorless"
      ],
      "name": "Hollow Dive",
      "damage": "110",
      "text": "Put 3 damage counters on your opponent's Benched Pokémon in any way you like."
    }
  ]
},
  {
  "id": "sv3pt5-95",
  "name": "Onix",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Fighting"
  ],
  "hp": "120",
  "rarity": "Uncommon",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/95_hires.png",
  "marketPrice": 0.11,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Colorless",
        "Colorless"
      ],
      "name": "Thumpalanche",
      "damage": "80×",
      "text": "Discard the top 5 cards of your deck. This attack does 80 damage for each Pokémon with a Retreat Cost of exactly 4 that you discarded in this way."
    },
    {
      "cost": [
        "Fighting",
        "Fighting",
        "Colorless",
        "Colorless"
      ],
      "name": "Heavy Impact",
      "damage": "100",
      "text": ""
    }
  ]
},
  {
  "id": "sv3pt5-58",
  "name": "Growlithe",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Fire"
  ],
  "hp": "80",
  "rarity": "Common",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/58_hires.png",
  "marketPrice": 0.11,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Fire"
      ],
      "name": "Vaporize",
      "damage": "10",
      "text": "Discard a Water Energy from your opponent's Active Pokémon."
    }
  ]
},
  {
  "id": "sv3pt5-64",
  "name": "Kadabra",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 1"
  ],
  "types": [
    "Psychic"
  ],
  "hp": "80",
  "rarity": "Uncommon",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/64_hires.png",
  "marketPrice": 0.13,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Psychic"
      ],
      "name": "Teleportation Attack",
      "damage": "30",
      "text": "Switch this Pokémon with 1 of your Benched Pokémon."
    }
  ]
},
  {
  "id": "sv3pt5-66",
  "name": "Machop",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Fighting"
  ],
  "hp": "70",
  "rarity": "Common",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/66_hires.png",
  "marketPrice": 0.16,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Fighting"
      ],
      "name": "Mountain Mashing",
      "damage": "",
      "text": "Discard the top card of your opponent's deck."
    },
    {
      "cost": [
        "Fighting",
        "Fighting"
      ],
      "name": "Punch",
      "damage": "30",
      "text": ""
    }
  ]
},
  {
  "id": "sv3pt5-69",
  "name": "Bellsprout",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Grass"
  ],
  "hp": "60",
  "rarity": "Common",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/69_hires.png",
  "marketPrice": 0.11,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Grass"
      ],
      "name": "Cut",
      "damage": "10",
      "text": ""
    },
    {
      "cost": [
        "Grass",
        "Colorless"
      ],
      "name": "Bind Down",
      "damage": "20",
      "text": "During your opponent's next turn, the Defending Pokémon can't retreat."
    }
  ]
},
  {
  "id": "sv3pt5-72",
  "name": "Tentacool",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Water"
  ],
  "hp": "60",
  "rarity": "Common",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/72_hires.png",
  "marketPrice": 0.09,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Water"
      ],
      "name": "Tingle",
      "damage": "10",
      "text": ""
    },
    {
      "cost": [
        "Colorless",
        "Colorless"
      ],
      "name": "Watering",
      "damage": "20",
      "text": ""
    }
  ]
},
  {
  "id": "sv3pt5-73",
  "name": "Tentacruel",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 1"
  ],
  "types": [
    "Water"
  ],
  "hp": "120",
  "rarity": "Uncommon",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/73_hires.png",
  "marketPrice": 0.12,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Colorless",
        "Colorless"
      ],
      "name": "Poisonous Whip",
      "damage": "30",
      "text": "Your opponent's Active Pokémon is now Poisoned."
    },
    {
      "cost": [
        "Water",
        "Colorless",
        "Colorless"
      ],
      "name": "Tentacular Panic",
      "damage": "90×",
      "text": "Flip a coin until you get tails. This attack does 90 damage for each heads. If the first flip is tails, your opponent's Active Pokémon is now Confused."
    }
  ]
},
  {
  "id": "sv3pt5-76",
  "name": "Golem ex",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 2",
    "ex"
  ],
  "types": [
    "Fighting"
  ],
  "hp": "330",
  "rarity": "Double Rare",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/76_hires.png",
  "marketPrice": 1.21,
  "rules": [
    "Pokémon ex rule: When your Pokémon ex is Knocked Out, your opponent takes 2 Prize cards."
  ],
  "attacks": [
    {
      "cost": [
        "Fighting"
      ],
      "name": "Dynamic Roll",
      "damage": "50",
      "text": "During your next turn, attacks used by this Pokémon do 120 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance)."
    },
    {
      "cost": [
        "Fighting",
        "Colorless",
        "Colorless"
      ],
      "name": "Rock Blaster",
      "damage": "180",
      "text": "This attack's damage isn't affected by Resistance."
    }
  ]
},
  {
  "id": "sv3pt5-77",
  "name": "Ponyta",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Fire"
  ],
  "hp": "70",
  "rarity": "Common",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/77_hires.png",
  "marketPrice": 0.07,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Fire"
      ],
      "name": "Collect",
      "damage": "",
      "text": "Draw a card."
    },
    {
      "cost": [
        "Fire",
        "Colorless",
        "Colorless"
      ],
      "name": "Flop",
      "damage": "30",
      "text": ""
    }
  ]
},
  {
  "id": "sv3pt5-79",
  "name": "Slowpoke",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Psychic"
  ],
  "hp": "80",
  "rarity": "Common",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/79_hires.png",
  "marketPrice": 0.19,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Psychic"
      ],
      "name": "Sea Bathing",
      "damage": "",
      "text": "Heal 30 damage from this Pokémon, and it recovers from all Special Conditions."
    },
    {
      "cost": [
        "Colorless",
        "Colorless"
      ],
      "name": "Headbutt",
      "damage": "20",
      "text": ""
    }
  ]
},
  {
  "id": "sv3pt5-83",
  "name": "Farfetch'd",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Colorless"
  ],
  "hp": "90",
  "rarity": "Common",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/83_hires.png",
  "marketPrice": 0.05,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Colorless"
      ],
      "name": "Package Deal",
      "damage": "",
      "text": "Draw 2 cards."
    },
    {
      "cost": [
        "Colorless"
      ],
      "name": "Leek Clobber",
      "damage": "30",
      "text": ""
    }
  ]
},
  {
  "id": "sv3pt5-84",
  "name": "Doduo",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Colorless"
  ],
  "hp": "70",
  "rarity": "Common",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/84_hires.png",
  "marketPrice": 0.07,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Colorless"
      ],
      "name": "Reckless Charge",
      "damage": "30",
      "text": "This Pokémon also does 10 damage to itself."
    }
  ]
},
  {
  "id": "sv3pt5-56",
  "name": "Mankey",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Fighting"
  ],
  "hp": "60",
  "rarity": "Common",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/56_hires.png",
  "marketPrice": 0.06,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Fighting"
      ],
      "name": "Thrash",
      "damage": "20+",
      "text": "Flip a coin. If tails, this Pokémon also does 20 damage to itself. If heads, this attack does 20 more damage."
    }
  ]
},
  {
  "id": "sv3pt5-63",
  "name": "Abra",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Psychic"
  ],
  "hp": "50",
  "rarity": "Common",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/63_hires.png",
  "marketPrice": 0.08,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Psychic"
      ],
      "name": "Psyshot",
      "damage": "20",
      "text": ""
    }
  ]
},
  {
  "id": "sv3pt5-67",
  "name": "Machoke",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 1"
  ],
  "types": [
    "Fighting"
  ],
  "hp": "100",
  "rarity": "Uncommon",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/67_hires.png",
  "marketPrice": 0.14,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Fighting",
        "Fighting"
      ],
      "name": "Mountain Ramming",
      "damage": "50",
      "text": "Discard the top card of your opponent's deck."
    }
  ]
},
  {
  "id": "sv3pt5-68",
  "name": "Machamp",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 2"
  ],
  "types": [
    "Fighting"
  ],
  "hp": "180",
  "rarity": "Rare",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/68_hires.png",
  "marketPrice": 0.29,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Fighting",
        "Fighting"
      ],
      "name": "Mountain Chopping",
      "damage": "100",
      "text": "Discard the top 2 cards of your opponent's deck."
    }
  ]
},
  {
  "id": "sv3pt5-70",
  "name": "Weepinbell",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 1"
  ],
  "types": [
    "Grass"
  ],
  "hp": "90",
  "rarity": "Common",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/70_hires.png",
  "marketPrice": 0.2,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Grass"
      ],
      "name": "Cut",
      "damage": "30",
      "text": ""
    },
    {
      "cost": [
        "Grass",
        "Colorless"
      ],
      "name": "Spray Fluid",
      "damage": "50",
      "text": ""
    }
  ]
},
  {
  "id": "sv3pt5-75",
  "name": "Graveler",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 1"
  ],
  "types": [
    "Fighting"
  ],
  "hp": "110",
  "rarity": "Uncommon",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/75_hires.png",
  "marketPrice": 0.11,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Fighting"
      ],
      "name": "Rock Cannon",
      "damage": "40×",
      "text": "Flip a coin until you get tails. This attack does 40 damage for each heads."
    },
    {
      "cost": [
        "Fighting",
        "Colorless",
        "Colorless"
      ],
      "name": "Heavy Impact",
      "damage": "60",
      "text": ""
    }
  ]
},
  {
  "id": "sv3pt5-81",
  "name": "Magnemite",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Lightning"
  ],
  "hp": "60",
  "rarity": "Common",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/81_hires.png",
  "marketPrice": 0.14,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Lightning"
      ],
      "name": "Tiny Charge",
      "damage": "10",
      "text": ""
    },
    {
      "cost": [
        "Lightning",
        "Colorless"
      ],
      "name": "Big Explosion",
      "damage": "60",
      "text": "This Pokémon also does 60 damage to itself."
    }
  ]
},
  {
  "id": "sv3pt5-86",
  "name": "Seel",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Water"
  ],
  "hp": "80",
  "rarity": "Common",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/86_hires.png",
  "marketPrice": 0.14,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Water"
      ],
      "name": "Chilly",
      "damage": "20",
      "text": ""
    }
  ]
},
  {
  "id": "sv3pt5-88",
  "name": "Grimer",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Darkness"
  ],
  "hp": "80",
  "rarity": "Common",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/88_hires.png",
  "marketPrice": 0.1,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Darkness"
      ],
      "name": "Gummy Press",
      "damage": "10",
      "text": "During your opponent's next turn, the Defending Pokémon's Retreat Cost is Colorless more."
    }
  ]
},
  {
  "id": "sv3pt5-93",
  "name": "Haunter",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 1"
  ],
  "types": [
    "Psychic"
  ],
  "hp": "80",
  "rarity": "Uncommon",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/93_hires.png",
  "marketPrice": 0.18,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Psychic",
        "Colorless"
      ],
      "name": "Mumble",
      "damage": "30",
      "text": ""
    }
  ]
},
  {
  "id": "sv3pt5-55",
  "name": "Golduck",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 1"
  ],
  "types": [
    "Water"
  ],
  "hp": "110",
  "rarity": "Uncommon",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/55_hires.png",
  "marketPrice": 0.11,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Colorless"
      ],
      "name": "Aquatic Rescue",
      "damage": "",
      "text": "Put up to 4 Pokémon from your discard pile into your hand."
    },
    {
      "cost": [
        "Water",
        "Water",
        "Colorless"
      ],
      "name": "Super Splash",
      "damage": "120",
      "text": ""
    }
  ]
},
  {
  "id": "sv3pt5-57",
  "name": "Primeape",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 1"
  ],
  "types": [
    "Fighting"
  ],
  "hp": "120",
  "rarity": "Uncommon",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/57_hires.png",
  "marketPrice": 0.11,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Fighting"
      ],
      "name": "Rant and Rave",
      "damage": "40",
      "text": "This Pokémon is now Confused."
    },
    {
      "cost": [
        "Fighting",
        "Colorless",
        "Colorless"
      ],
      "name": "Raging Smash",
      "damage": "150",
      "text": "If this Pokémon isn't Confused, this attack does nothing."
    }
  ]
},
  {
  "id": "sv3pt5-62",
  "name": "Poliwrath",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 2"
  ],
  "types": [
    "Water"
  ],
  "hp": "160",
  "rarity": "Uncommon",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/62_hires.png",
  "marketPrice": 0.12,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Water"
      ],
      "name": "Bubble Beam",
      "damage": "50",
      "text": "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed."
    },
    {
      "cost": [
        "Water",
        "Colorless",
        "Colorless"
      ],
      "name": "Heroic Punch",
      "damage": "100+",
      "text": "Flip a coin. If heads, this attack does 150 more damage."
    }
  ]
},
  {
  "id": "sv3pt5-65",
  "name": "Alakazam ex",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 2",
    "ex"
  ],
  "types": [
    "Psychic"
  ],
  "hp": "310",
  "rarity": "Double Rare",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/65_hires.png",
  "marketPrice": 2.22,
  "rules": [
    "Pokémon ex rule: When your Pokémon ex is Knocked Out, your opponent takes 2 Prize cards."
  ],
  "attacks": [
    {
      "cost": [
        "Colorless",
        "Colorless"
      ],
      "name": "Mind Jack",
      "damage": "90+",
      "text": "This attack does 30 more damage for each of your opponent's Benched Pokémon."
    },
    {
      "cost": [
        "Psychic",
        "Psychic"
      ],
      "name": "Dimensional Hand",
      "damage": "120",
      "text": "This attack can be used even if this Pokémon is on the Bench."
    }
  ]
},
  {
  "id": "sv3pt5-74",
  "name": "Geodude",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Fighting"
  ],
  "hp": "80",
  "rarity": "Common",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/74_hires.png",
  "marketPrice": 0.08,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Fighting"
      ],
      "name": "Stiffen",
      "damage": "",
      "text": "During your opponent's next turn, this Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance)."
    },
    {
      "cost": [
        "Fighting",
        "Colorless"
      ],
      "name": "Knuckle Punch",
      "damage": "20",
      "text": ""
    }
  ]
},
  {
  "id": "sv3pt5-80",
  "name": "Slowbro",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 1"
  ],
  "types": [
    "Psychic"
  ],
  "hp": "130",
  "rarity": "Uncommon",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/80_hires.png",
  "marketPrice": 0.11,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Psychic"
      ],
      "name": "Big Yawn",
      "damage": "",
      "text": "Both Active Pokémon are now Asleep."
    },
    {
      "cost": [
        "Psychic",
        "Colorless",
        "Colorless"
      ],
      "name": "Laid-Back Tackle",
      "damage": "160",
      "text": "If this Pokémon evolved during this turn, this attack does nothing."
    }
  ]
},
  {
  "id": "sv3pt5-87",
  "name": "Dewgong",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 1"
  ],
  "types": [
    "Water"
  ],
  "hp": "130",
  "rarity": "Uncommon",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/87_hires.png",
  "marketPrice": 0.12,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Water",
        "Colorless"
      ],
      "name": "Dual Splash",
      "damage": "",
      "text": "This attack does 50 damage to 2 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"
    },
    {
      "cost": [
        "Water",
        "Colorless",
        "Colorless"
      ],
      "name": "Aurora Beam",
      "damage": "100",
      "text": ""
    }
  ]
},
  {
  "id": "sv3pt5-89",
  "name": "Muk",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 1"
  ],
  "types": [
    "Darkness"
  ],
  "hp": "150",
  "rarity": "Uncommon",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/89_hires.png",
  "marketPrice": 0.1,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Darkness"
      ],
      "name": "Sticky Jail",
      "damage": "30",
      "text": "During your opponent's next turn, attacks used by the Defending Pokémon cost Colorless more, and its Retreat Cost is Colorless more."
    },
    {
      "cost": [
        "Darkness",
        "Darkness",
        "Darkness",
        "Colorless"
      ],
      "name": "Sludge Bomb",
      "damage": "180",
      "text": ""
    }
  ]
},
  {
  "id": "sv3pt5-90",
  "name": "Shellder",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Water"
  ],
  "hp": "70",
  "rarity": "Common",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/90_hires.png",
  "marketPrice": 0.1,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Water",
        "Water"
      ],
      "name": "Shell Press",
      "damage": "30",
      "text": "During your opponent's next turn, this Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance)."
    }
  ]
},
  {
  "id": "sv3pt5-91",
  "name": "Cloyster",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 1"
  ],
  "types": [
    "Water"
  ],
  "hp": "130",
  "rarity": "Uncommon",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/91_hires.png",
  "marketPrice": 0.08,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Water",
        "Water"
      ],
      "name": "Protect Charge",
      "damage": "80",
      "text": "During your opponent's next turn, this Pokémon takes 80 less damage from attacks (after applying Weakness and Resistance)."
    }
  ]
},
  {
  "id": "sv3pt5-97",
  "name": "Hypno",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 1"
  ],
  "types": [
    "Psychic"
  ],
  "hp": "110",
  "rarity": "Uncommon",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/97_hires.png",
  "marketPrice": 0.12,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Psychic",
        "Psychic",
        "Colorless"
      ],
      "name": "Super Psy Bolt",
      "damage": "110",
      "text": ""
    }
  ]
},
  {
  "id": "sv3pt5-104",
  "name": "Cubone",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Fighting"
  ],
  "hp": "70",
  "rarity": "Common",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/104_hires.png",
  "marketPrice": 0.11,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Fighting"
      ],
      "name": "Hit Twice",
      "damage": "10×",
      "text": "Flip 2 coins. This attack does 10 damage for each heads."
    }
  ]
},
  {
  "id": "sv3pt5-105",
  "name": "Marowak",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 1"
  ],
  "types": [
    "Fighting"
  ],
  "hp": "120",
  "rarity": "Rare",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/105_hires.png",
  "marketPrice": 0.25,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Fighting"
      ],
      "name": "Bone Throw",
      "damage": "30",
      "text": "This attack also does 30 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"
    },
    {
      "cost": [
        "Fighting",
        "Colorless"
      ],
      "name": "Boundless Power",
      "damage": "120",
      "text": "During your next turn, this Pokémon can't attack."
    }
  ]
},
  {
  "id": "sv3pt5-106",
  "name": "Hitmonlee",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Fighting"
  ],
  "hp": "120",
  "rarity": "Uncommon",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/106_hires.png",
  "marketPrice": 0.18,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Fighting"
      ],
      "name": "Twister Kick",
      "damage": "",
      "text": "This attack does 10 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) Switch this Pokémon with 1 of your Benched Pokémon."
    },
    {
      "cost": [
        "Fighting",
        "Fighting",
        "Fighting"
      ],
      "name": "Low Kick",
      "damage": "100",
      "text": ""
    }
  ]
},
  {
  "id": "sv3pt5-107",
  "name": "Hitmonchan",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Fighting"
  ],
  "hp": "120",
  "rarity": "Uncommon",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/107_hires.png",
  "marketPrice": 0.15,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Fighting",
        "Fighting"
      ],
      "name": "Excited Punch",
      "damage": "60",
      "text": "During your next turn, this Pokémon's Excited Punch attack does 60 more damage (before applying Weakness and Resistance)."
    }
  ]
},
  {
  "id": "sv3pt5-112",
  "name": "Rhydon",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 1"
  ],
  "types": [
    "Fighting"
  ],
  "hp": "120",
  "rarity": "Uncommon",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/112_hires.png",
  "marketPrice": 0.12,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Fighting",
        "Colorless"
      ],
      "name": "Wrack Down",
      "damage": "30",
      "text": ""
    },
    {
      "cost": [
        "Fighting",
        "Fighting",
        "Colorless"
      ],
      "name": "Charismatic Drill",
      "damage": "40+",
      "text": "If you played Giovanni's Charisma from your hand during this turn, this attack does 140 more damage."
    }
  ]
},
  {
  "id": "sv3pt5-115",
  "name": "Kangaskhan ex",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic",
    "ex"
  ],
  "types": [
    "Colorless"
  ],
  "hp": "230",
  "rarity": "Double Rare",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/115_hires.png",
  "marketPrice": 1.17,
  "rules": [
    "Pokémon ex rule: When your Pokémon ex is Knocked Out, your opponent takes 2 Prize cards."
  ],
  "attacks": [
    {
      "cost": [
        "Colorless"
      ],
      "name": "Triple Draw",
      "damage": "",
      "text": "Draw 3 cards."
    },
    {
      "cost": [
        "Colorless",
        "Colorless",
        "Colorless"
      ],
      "name": "Incessant Punching",
      "damage": "100×",
      "text": "Flip 4 coins. This attack does 100 damage for each heads."
    }
  ]
},
  {
  "id": "sv3pt5-117",
  "name": "Seadra",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 1"
  ],
  "types": [
    "Water"
  ],
  "hp": "80",
  "rarity": "Uncommon",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/117_hires.png",
  "marketPrice": 0.08,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Water",
        "Colorless",
        "Colorless"
      ],
      "name": "Blinding Ink",
      "damage": "50",
      "text": "During your opponent's next turn, if the Defending Pokémon tries to use an attack, your opponent flips 2 coins. If either of them is tails, that attack doesn't happen."
    }
  ]
},
  {
  "id": "sv3pt5-119",
  "name": "Seaking",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 1"
  ],
  "types": [
    "Water"
  ],
  "hp": "110",
  "rarity": "Uncommon",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/119_hires.png",
  "marketPrice": 0.11,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Water"
      ],
      "name": "Swim Freely",
      "damage": "10",
      "text": "Flip a coin. If heads, during your opponent's next turn, prevent all damage from and effects of attacks done to this Pokémon."
    },
    {
      "cost": [
        "Colorless",
        "Colorless",
        "Colorless"
      ],
      "name": "Aqua Horn",
      "damage": "60+",
      "text": "This attack does 30 more damage for each Water Energy attached to this Pokémon."
    }
  ]
},
  {
  "id": "sv3pt5-120",
  "name": "Staryu",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Water"
  ],
  "hp": "60",
  "rarity": "Common",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/120_hires.png",
  "marketPrice": 0.09,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Water",
        "Colorless"
      ],
      "name": "Swift",
      "damage": "30",
      "text": "This attack's damage isn't affected by Weakness or Resistance, or by any effects on your opponent's Active Pokémon."
    }
  ]
},
  {
  "id": "sv3pt5-126",
  "name": "Magmar",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Fire"
  ],
  "hp": "90",
  "rarity": "Common",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/126_hires.png",
  "marketPrice": 0.08,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Fire"
      ],
      "name": "Live Coal",
      "damage": "10",
      "text": ""
    },
    {
      "cost": [
        "Fire",
        "Fire",
        "Colorless"
      ],
      "name": "Flare Combo",
      "damage": "80+",
      "text": "If Electabuzz is on your Bench, this attack does 80 more damage."
    }
  ]
},
  {
  "id": "sv3pt5-128",
  "name": "Tauros",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Colorless"
  ],
  "hp": "120",
  "rarity": "Uncommon",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/128_hires.png",
  "marketPrice": 0.09,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Colorless"
      ],
      "name": "Gather the Crew",
      "damage": "",
      "text": "Search your deck for a Basic Pokémon and put it onto your Bench. Then, shuffle your deck."
    },
    {
      "cost": [
        "Colorless",
        "Colorless"
      ],
      "name": "Rage",
      "damage": "30+",
      "text": "This attack does 10 more damage for each damage counter on this Pokémon."
    }
  ]
},
  {
  "id": "sv3pt5-136",
  "name": "Flareon",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 1"
  ],
  "types": [
    "Fire"
  ],
  "hp": "130",
  "rarity": "Rare",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/136_hires.png",
  "marketPrice": 0.34,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Fire"
      ],
      "name": "Destructive Flame",
      "damage": "30",
      "text": "Flip a coin. If heads, discard an Energy from your opponent's Active Pokémon."
    },
    {
      "cost": [
        "Fire",
        "Colorless",
        "Colorless"
      ],
      "name": "Fighting Blaze",
      "damage": "90+",
      "text": "If your opponent's Active Pokémon is a Pokémon ex or Pokémon V, this attack does 90 more damage."
    }
  ]
},
  {
  "id": "sv3pt5-138",
  "name": "Omanyte",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 1"
  ],
  "types": [
    "Water"
  ],
  "hp": "100",
  "rarity": "Uncommon",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/138_hires.png",
  "marketPrice": 0.22,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Water",
        "Water"
      ],
      "name": "Tentacular Return",
      "damage": "50",
      "text": "Put an Energy attached to your opponent's Active Pokémon into their hand."
    }
  ]
},
  {
  "id": "sv3pt5-139",
  "name": "Omastar",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 2"
  ],
  "types": [
    "Water"
  ],
  "hp": "150",
  "rarity": "Rare",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/139_hires.png",
  "marketPrice": 0.26,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Water",
        "Water"
      ],
      "name": "Aqua Split",
      "damage": "90",
      "text": "This attack also does 30 damage to 2 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"
    }
  ]
},
  {
  "id": "sv3pt5-142",
  "name": "Aerodactyl",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 1"
  ],
  "types": [
    "Colorless"
  ],
  "hp": "130",
  "rarity": "Rare",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/142_hires.png",
  "marketPrice": 0.35,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Colorless"
      ],
      "name": "Glide",
      "damage": "30",
      "text": ""
    },
    {
      "cost": [
        "Colorless",
        "Colorless"
      ],
      "name": "Devolution Ray",
      "damage": "100",
      "text": "If your opponent's Active Pokémon is an evolved Pokémon, devolve it by putting the highest Stage Evolution card on it into your opponent's hand."
    }
  ]
},
  {
  "id": "sv3pt5-143",
  "name": "Snorlax",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Colorless"
  ],
  "hp": "150",
  "rarity": "Uncommon",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/143_hires.png",
  "marketPrice": 0.24,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Colorless",
        "Colorless",
        "Colorless"
      ],
      "name": "Thudding Press",
      "damage": "130",
      "text": "This Pokémon also does 30 damage to itself."
    }
  ]
},
  {
  "id": "sv3pt5-100",
  "name": "Voltorb",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Lightning"
  ],
  "hp": "60",
  "rarity": "Common",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/100_hires.png",
  "marketPrice": 0.08,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Lightning"
      ],
      "name": "Tumbling Attack",
      "damage": "10+",
      "text": "Flip a coin. If heads, this attack does 20 more damage."
    }
  ]
},
  {
  "id": "sv3pt5-109",
  "name": "Koffing",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Darkness"
  ],
  "hp": "60",
  "rarity": "Common",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/109_hires.png",
  "marketPrice": 0.18,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Colorless",
        "Colorless"
      ],
      "name": "Suspicious Gas",
      "damage": "20",
      "text": "Your opponent's Active Pokémon is now Confused."
    }
  ]
},
  {
  "id": "sv3pt5-111",
  "name": "Rhyhorn",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Fighting"
  ],
  "hp": "100",
  "rarity": "Common",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/111_hires.png",
  "marketPrice": 0.06,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Fighting",
        "Colorless"
      ],
      "name": "Push Down",
      "damage": "20",
      "text": "Switch out your opponent's Active Pokémon to the Bench. (Your opponent chooses the new Active Pokémon.)"
    },
    {
      "cost": [
        "Fighting",
        "Fighting",
        "Colorless"
      ],
      "name": "Boulder Crush",
      "damage": "70",
      "text": ""
    }
  ]
},
  {
  "id": "sv3pt5-116",
  "name": "Horsea",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Water"
  ],
  "hp": "60",
  "rarity": "Common",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/116_hires.png",
  "marketPrice": 0.08,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Water"
      ],
      "name": "Rain Splash",
      "damage": "10",
      "text": ""
    },
    {
      "cost": [
        "Water",
        "Colorless",
        "Colorless"
      ],
      "name": "Sharp Fin",
      "damage": "40",
      "text": ""
    }
  ]
},
  {
  "id": "sv3pt5-127",
  "name": "Pinsir",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Grass"
  ],
  "hp": "120",
  "rarity": "Uncommon",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/127_hires.png",
  "marketPrice": 0.09,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Grass",
        "Colorless"
      ],
      "name": "Vise Grip",
      "damage": "30",
      "text": ""
    },
    {
      "cost": [
        "Grass",
        "Grass",
        "Colorless"
      ],
      "name": "Reckless Throw",
      "damage": "90+",
      "text": "If you have more Prize cards remaining than your opponent, this attack does 90 more damage."
    }
  ]
},
  {
  "id": "sv3pt5-129",
  "name": "Magikarp",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Water"
  ],
  "hp": "30",
  "rarity": "Common",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/129_hires.png",
  "marketPrice": 0.25,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Water"
      ],
      "name": "Splashy Splash",
      "damage": "",
      "text": "Flip a coin until you get tails. For each heads, draw a card."
    }
  ]
},
  {
  "id": "sv3pt5-130",
  "name": "Gyarados",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 1"
  ],
  "types": [
    "Water"
  ],
  "hp": "190",
  "rarity": "Rare",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/130_hires.png",
  "marketPrice": 0.36,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Water",
        "Colorless",
        "Colorless",
        "Colorless"
      ],
      "name": "Hyper Beam",
      "damage": "200",
      "text": "Discard an Energy from your opponent's Active Pokémon."
    }
  ]
},
  {
  "id": "sv3pt5-140",
  "name": "Kabuto",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 1"
  ],
  "types": [
    "Fighting"
  ],
  "hp": "90",
  "rarity": "Uncommon",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/140_hires.png",
  "marketPrice": 0.12,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Fighting",
        "Colorless"
      ],
      "name": "Double Scratch",
      "damage": "70×",
      "text": "Flip 2 coins. This attack does 70 damage for each heads."
    }
  ]
},
  {
  "id": "sv3pt5-141",
  "name": "Kabutops",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 2"
  ],
  "types": [
    "Fighting"
  ],
  "hp": "160",
  "rarity": "Rare",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/141_hires.png",
  "marketPrice": 0.28,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Fighting",
        "Colorless",
        "Colorless"
      ],
      "name": "Draining Blade",
      "damage": "100",
      "text": "Heal 30 damage from this Pokémon."
    }
  ]
},
  {
  "id": "sv3pt5-144",
  "name": "Articuno",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Water"
  ],
  "hp": "120",
  "rarity": "Rare",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/144_hires.png",
  "marketPrice": 0.31,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Water",
        "Water",
        "Water"
      ],
      "name": "Blizzard",
      "damage": "110",
      "text": "This attack also does 10 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"
    }
  ]
},
  {
  "id": "sv3pt5-96",
  "name": "Drowzee",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Psychic"
  ],
  "hp": "80",
  "rarity": "Common",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/96_hires.png",
  "marketPrice": 0.09,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Psychic",
        "Colorless"
      ],
      "name": "Zen Headbutt",
      "damage": "30",
      "text": ""
    }
  ]
},
  {
  "id": "sv3pt5-99",
  "name": "Kingler",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 1"
  ],
  "types": [
    "Water"
  ],
  "hp": "140",
  "rarity": "Uncommon",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/99_hires.png",
  "marketPrice": 0.11,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Water",
        "Water",
        "Water"
      ],
      "name": "Hammer Arm",
      "damage": "90",
      "text": "Discard the top card of your opponent's deck."
    },
    {
      "cost": [
        "Water",
        "Water",
        "Water",
        "Water"
      ],
      "name": "Guillotine",
      "damage": "220",
      "text": ""
    }
  ]
},
  {
  "id": "sv3pt5-101",
  "name": "Electrode",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 1"
  ],
  "types": [
    "Lightning"
  ],
  "hp": "90",
  "rarity": "Rare",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/101_hires.png",
  "marketPrice": 0.1,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Lightning"
      ],
      "name": "Bang Boom Chain",
      "damage": "20+",
      "text": "Before doing damage, you may discard any number of Pokémon Tools from your Pokémon. This attack does 40 more damage for each card you discarded in this way."
    },
    {
      "cost": [
        "Lightning",
        "Colorless"
      ],
      "name": "Electro Ball",
      "damage": "70",
      "text": ""
    }
  ]
},
  {
  "id": "sv3pt5-103",
  "name": "Exeggutor",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 1"
  ],
  "types": [
    "Grass"
  ],
  "hp": "140",
  "rarity": "Uncommon",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/103_hires.png",
  "marketPrice": 0.15,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Colorless",
        "Colorless"
      ],
      "name": "Psychic",
      "damage": "30+",
      "text": "This attack does 30 more damage for each Energy attached to your opponent's Active Pokémon."
    },
    {
      "cost": [
        "Grass",
        "Grass",
        "Colorless"
      ],
      "name": "Hammer In",
      "damage": "130",
      "text": ""
    }
  ]
},
  {
  "id": "sv3pt5-113",
  "name": "Chansey",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Colorless"
  ],
  "hp": "110",
  "rarity": "Rare",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/113_hires.png",
  "marketPrice": 0.33,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Colorless",
        "Colorless",
        "Colorless"
      ],
      "name": "Gentle Slap",
      "damage": "70",
      "text": ""
    }
  ]
},
  {
  "id": "sv3pt5-114",
  "name": "Tangela",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Grass"
  ],
  "hp": "80",
  "rarity": "Common",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/114_hires.png",
  "marketPrice": 0.06,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Grass"
      ],
      "name": "Tactful Tangling",
      "damage": "10+",
      "text": "If you played Erika's Invitation from your hand during this turn, this attack does 60 more damage."
    }
  ]
},
  {
  "id": "sv3pt5-118",
  "name": "Goldeen",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Water"
  ],
  "hp": "70",
  "rarity": "Common",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/118_hires.png",
  "marketPrice": 0.1,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Water"
      ],
      "name": "Triple Strike",
      "damage": "10×",
      "text": "Flip 3 coins. This attack does 10 damage for each heads."
    },
    {
      "cost": [
        "Colorless",
        "Colorless"
      ],
      "name": "Sprinkle Water",
      "damage": "20",
      "text": ""
    }
  ]
},
  {
  "id": "sv3pt5-122",
  "name": "Mr. Mime",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Psychic"
  ],
  "hp": "90",
  "rarity": "Rare",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/122_hires.png",
  "marketPrice": 0.25,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Colorless"
      ],
      "name": "Psypower",
      "damage": "",
      "text": "Put 3 damage counters on your opponent's Pokémon in any way you like."
    }
  ]
},
  {
  "id": "sv3pt5-124",
  "name": "Jynx ex",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic",
    "ex"
  ],
  "types": [
    "Water"
  ],
  "hp": "200",
  "rarity": "Double Rare",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/124_hires.png",
  "marketPrice": 1.21,
  "rules": [
    "Pokémon ex rule: When your Pokémon ex is Knocked Out, your opponent takes 2 Prize cards."
  ],
  "attacks": [
    {
      "cost": [
        "Water",
        "Colorless",
        "Colorless"
      ],
      "name": "Heart-Stopping Kiss",
      "damage": "",
      "text": "If your opponent's Active Pokémon is Asleep, it is Knocked Out."
    },
    {
      "cost": [
        "Water",
        "Water",
        "Water"
      ],
      "name": "Icy Wind",
      "damage": "120",
      "text": "Your opponent's Active Pokémon is now Asleep."
    }
  ]
},
  {
  "id": "sv3pt5-125",
  "name": "Electabuzz",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Lightning"
  ],
  "hp": "90",
  "rarity": "Common",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/125_hires.png",
  "marketPrice": 0.08,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Lightning"
      ],
      "name": "Electro Combo",
      "damage": "10+",
      "text": "If Magmar is on your Bench, this attack does 40 more damage."
    },
    {
      "cost": [
        "Lightning",
        "Colorless"
      ],
      "name": "Light Punch",
      "damage": "30",
      "text": ""
    }
  ]
},
  {
  "id": "sv3pt5-135",
  "name": "Jolteon",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 1"
  ],
  "types": [
    "Lightning"
  ],
  "hp": "110",
  "rarity": "Rare",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/135_hires.png",
  "marketPrice": 0.33,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Lightning"
      ],
      "name": "Linear Attack",
      "damage": "",
      "text": "This attack does 30 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"
    },
    {
      "cost": [
        "Lightning",
        "Colorless",
        "Colorless"
      ],
      "name": "Fighting Lightning",
      "damage": "90+",
      "text": "If your opponent's Active Pokémon is a Pokémon ex or Pokémon V, this attack does 90 more damage."
    }
  ]
},
  {
  "id": "sv3pt5-137",
  "name": "Porygon",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Colorless"
  ],
  "hp": "60",
  "rarity": "Common",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/137_hires.png",
  "marketPrice": 0.08,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Colorless"
      ],
      "name": "Conversion 4",
      "damage": "",
      "text": "Choose Grass, Fire, Water, Lightning, Psychic, Fighting, Darkness, Metal, or Dragon type. Until the Defending Pokémon leaves the Active Spot, its Weakness is now that type. (The amount of Weakness doesn't change.)"
    }
  ]
},
  {
  "id": "sv3pt5-98",
  "name": "Krabby",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Water"
  ],
  "hp": "70",
  "rarity": "Common",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/98_hires.png",
  "marketPrice": 0.09,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Water"
      ],
      "name": "Salt Water",
      "damage": "",
      "text": "Flip a coin. If heads, search your deck for up to 2 Basic Water Energy cards and attach them to this Pokémon. Then, shuffle your deck."
    },
    {
      "cost": [
        "Water",
        "Water",
        "Water"
      ],
      "name": "Crabhammer",
      "damage": "50",
      "text": ""
    }
  ]
},
  {
  "id": "sv3pt5-102",
  "name": "Exeggcute",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Grass"
  ],
  "hp": "60",
  "rarity": "Common",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/102_hires.png",
  "marketPrice": 0.08,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Colorless",
        "Colorless"
      ],
      "name": "Ball Roll",
      "damage": "30×",
      "text": "Flip a coin until you get tails. This attack does 30 damage for each heads."
    }
  ]
},
  {
  "id": "sv3pt5-108",
  "name": "Lickitung",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Colorless"
  ],
  "hp": "100",
  "rarity": "Common",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/108_hires.png",
  "marketPrice": 0.12,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Colorless",
        "Colorless",
        "Colorless"
      ],
      "name": "Tongue-Tied",
      "damage": "70",
      "text": "During your opponent's next turn, the Defending Pokémon can't attack."
    }
  ]
},
  {
  "id": "sv3pt5-110",
  "name": "Weezing",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 1"
  ],
  "types": [
    "Darkness"
  ],
  "hp": "110",
  "rarity": "Rare",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/110_hires.png",
  "marketPrice": 0.19,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Colorless",
        "Colorless"
      ],
      "name": "Spinning Fumes",
      "damage": "50",
      "text": "This attack also does 10 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"
    }
  ]
},
  {
  "id": "sv3pt5-121",
  "name": "Starmie",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 1"
  ],
  "types": [
    "Water"
  ],
  "hp": "90",
  "rarity": "Rare",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/121_hires.png",
  "marketPrice": 0.28,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Water",
        "Colorless"
      ],
      "name": "Speed Attack",
      "damage": "50",
      "text": ""
    }
  ]
},
  {
  "id": "sv3pt5-123",
  "name": "Scyther",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Grass"
  ],
  "hp": "70",
  "rarity": "Uncommon",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/123_hires.png",
  "marketPrice": 0.11,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Grass"
      ],
      "name": "Helpful Slash",
      "damage": "20",
      "text": "Attach a Basic Grass Energy card from your discard pile to 1 of your Benched Pokémon."
    },
    {
      "cost": [
        "Grass",
        "Colorless",
        "Colorless"
      ],
      "name": "Slicing Blade",
      "damage": "70",
      "text": ""
    }
  ]
},
  {
  "id": "sv3pt5-131",
  "name": "Lapras",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Water"
  ],
  "hp": "110",
  "rarity": "Uncommon",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/131_hires.png",
  "marketPrice": 0.13,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Water"
      ],
      "name": "Hop on My Back",
      "damage": "",
      "text": "Search your deck for up to 2 Pokémon, reveal them, and put them into your hand. Then, shuffle your deck."
    },
    {
      "cost": [
        "Water",
        "Colorless",
        "Colorless"
      ],
      "name": "Aqua Edge",
      "damage": "90",
      "text": ""
    }
  ]
},
  {
  "id": "sv3pt5-132",
  "name": "Ditto",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Colorless"
  ],
  "hp": "60",
  "rarity": "Rare",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/132_hires.png",
  "marketPrice": 0.68,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Colorless"
      ],
      "name": "Splup",
      "damage": "10",
      "text": ""
    }
  ]
},
  {
  "id": "sv3pt5-133",
  "name": "Eevee",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Colorless"
  ],
  "hp": "70",
  "rarity": "Common",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/133_hires.png",
  "marketPrice": 0.16,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Colorless"
      ],
      "name": "Colorful Friends",
      "damage": "",
      "text": "Search your deck for up to 3 Pokémon of different types, reveal them, and put them into your hand. Then, shuffle your deck."
    },
    {
      "cost": [
        "Colorless"
      ],
      "name": "Skip",
      "damage": "10",
      "text": ""
    }
  ]
},
  {
  "id": "sv3pt5-134",
  "name": "Vaporeon",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 1"
  ],
  "types": [
    "Water"
  ],
  "hp": "130",
  "rarity": "Rare",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/134_hires.png",
  "marketPrice": 0.33,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Water"
      ],
      "name": "Spiral Drain",
      "damage": "30",
      "text": "Heal 30 damage from this Pokémon."
    },
    {
      "cost": [
        "Water",
        "Colorless",
        "Colorless"
      ],
      "name": "Fighting Whirlpool",
      "damage": "90+",
      "text": "If your opponent's Active Pokémon is a Pokémon ex or Pokémon V, this attack does 90 more damage."
    }
  ]
},
  {
  "id": "sv3pt5-148",
  "name": "Dragonair",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 1"
  ],
  "types": [
    "Dragon"
  ],
  "hp": "100",
  "rarity": "Uncommon",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/148_hires.png",
  "marketPrice": 0.14,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Water"
      ],
      "name": "Beat",
      "damage": "20",
      "text": ""
    },
    {
      "cost": [
        "Water",
        "Lightning"
      ],
      "name": "Aqua Slash",
      "damage": "90",
      "text": "During your next turn, this Pokémon can't attack."
    }
  ]
},
  {
  "id": "sv3pt5-149",
  "name": "Dragonite",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 2"
  ],
  "types": [
    "Dragon"
  ],
  "hp": "180",
  "rarity": "Rare",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/149_hires.png",
  "marketPrice": 0.96,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Water",
        "Lightning"
      ],
      "name": "Dragon Pulse",
      "damage": "180",
      "text": "Discard the top 2 cards of your deck."
    }
  ]
},
  {
  "id": "sv3pt5-156",
  "name": "Bill's Transfer",
  "supertype": "Trainer",
  "subtypes": [
    "Supporter"
  ],
  "types": [],
  "hp": "",
  "rarity": "Uncommon",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/156_hires.png",
  "marketPrice": 0.06,
  "rules": [
    "Look at the top 8 cards of your deck. You may reveal any number of Pokémon you find there and put them into your hand. Shuffle the other cards back into your deck.",
    "You may play only 1 Supporter card during your turn."
  ],
  "attacks": []
},
  {
  "id": "sv3pt5-157",
  "name": "Cycling Road",
  "supertype": "Trainer",
  "subtypes": [
    "Stadium"
  ],
  "types": [],
  "hp": "",
  "rarity": "Uncommon",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/157_hires.png",
  "marketPrice": 0.08,
  "rules": [
    "Once during each player's turn, that player may discard a Basic Energy card from their hand in order to draw a card.",
    "You may play only 1 Stadium card during your turn. Put it next to the Active Spot, and discard it if another Stadium comes into play. A Stadium with the same name can't be played."
  ],
  "attacks": []
},
  {
  "id": "sv3pt5-162",
  "name": "Grabber",
  "supertype": "Trainer",
  "subtypes": [
    "Item"
  ],
  "types": [],
  "hp": "",
  "rarity": "Uncommon",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/162_hires.png",
  "marketPrice": 0.21,
  "rules": [
    "Your opponent reveals their hand, and you put a Pokémon you find there on the bottom of their deck.",
    "You may play any number of Item cards during your turn."
  ],
  "attacks": []
},
  {
  "id": "sv3pt5-163",
  "name": "Leftovers",
  "supertype": "Trainer",
  "subtypes": [
    "Pokémon Tool"
  ],
  "types": [],
  "hp": "",
  "rarity": "Uncommon",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/163_hires.png",
  "marketPrice": 0.09,
  "rules": [
    "At the end of your turn, if the Pokémon this card is attached to is in the Active Spot, heal 20 damage from it.",
    "You may attach any number of Pokémon Tools to your Pokémon during your turn. You may attach only 1 Pokémon Tool to each Pokémon, and it stays attached."
  ],
  "attacks": []
},
  {
  "id": "sv3pt5-172",
  "name": "Caterpie",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Grass"
  ],
  "hp": "50",
  "rarity": "Illustration Rare",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/172_hires.png",
  "marketPrice": 20.53,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Grass"
      ],
      "name": "Leaf Munch",
      "damage": "10+",
      "text": "If your opponent's Active Pokémon is a Grass Pokémon, this attack does 30 more damage."
    }
  ]
},
  {
  "id": "sv3pt5-173",
  "name": "Pikachu",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Lightning"
  ],
  "hp": "60",
  "rarity": "Illustration Rare",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/173_hires.png",
  "marketPrice": 97.43,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Lightning"
      ],
      "name": "Charge",
      "damage": "",
      "text": "Search your deck for a Basic Lightning Energy card and attach it to this Pokémon. Then, shuffle your deck."
    },
    {
      "cost": [
        "Lightning",
        "Lightning",
        "Colorless"
      ],
      "name": "Pika Punch",
      "damage": "50",
      "text": ""
    }
  ]
},
  {
  "id": "sv3pt5-150",
  "name": "Mewtwo",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Psychic"
  ],
  "hp": "130",
  "rarity": "Rare",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/150_hires.png",
  "marketPrice": 2.2,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Colorless",
        "Colorless"
      ],
      "name": "Reflective Barrier",
      "damage": "20",
      "text": "During your opponent's next turn, if this Pokémon is damaged by an attack (even if it is Knocked Out), put damage counters on the Attacking Pokémon equal to the damage done to this Pokémon."
    },
    {
      "cost": [
        "Psychic",
        "Psychic",
        "Colorless"
      ],
      "name": "Psyslash",
      "damage": "130",
      "text": "Discard 2 Energy from this Pokémon."
    }
  ]
},
  {
  "id": "sv3pt5-152",
  "name": "Antique Dome Fossil",
  "supertype": "Trainer",
  "subtypes": [
    "Item"
  ],
  "types": [],
  "hp": "60",
  "rarity": "Common",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/152_hires.png",
  "marketPrice": 0.19,
  "rules": [
    "Play this card as if it were a 60-HP Basic Colorless Pokémon. This card can't be affected by any Special Conditions and can't retreat.  At any time during your turn, you may discard this card from play.",
    "You may play any number of Item cards during your turn."
  ],
  "attacks": []
},
  {
  "id": "sv3pt5-153",
  "name": "Antique Helix Fossil",
  "supertype": "Trainer",
  "subtypes": [
    "Item"
  ],
  "types": [],
  "hp": "60",
  "rarity": "Common",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/153_hires.png",
  "marketPrice": 0.09,
  "rules": [
    "Play this card as if it were a 60-HP Basic Colorless Pokémon. This card can't be affected by any Special Conditions and can't retreat.  At any time during your turn, you may discard this card from play.",
    "You may play any number of Item cards during your turn."
  ],
  "attacks": []
},
  {
  "id": "sv3pt5-159",
  "name": "Energy Sticker",
  "supertype": "Trainer",
  "subtypes": [
    "Item"
  ],
  "types": [],
  "hp": "",
  "rarity": "Uncommon",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/159_hires.png",
  "marketPrice": 0.23,
  "rules": [
    "Flip a coin. If heads, attach a Basic Energy card from your discard pile to 1 of your Benched Pokémon.",
    "You may play any number of Item cards during your turn."
  ],
  "attacks": []
},
  {
  "id": "sv3pt5-160",
  "name": "Erika's Invitation",
  "supertype": "Trainer",
  "subtypes": [
    "Supporter"
  ],
  "types": [],
  "hp": "",
  "rarity": "Uncommon",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/160_hires.png",
  "marketPrice": 0.09,
  "rules": [
    "Your opponent reveals their hand, and you put a Basic Pokémon you find there onto your opponent's Bench. If you put a Pokémon onto their Bench in this way, switch in that Pokémon to the Active Spot.",
    "You may play only 1 Supporter card during your turn."
  ],
  "attacks": []
},
  {
  "id": "sv3pt5-164",
  "name": "Protective Goggles",
  "supertype": "Trainer",
  "subtypes": [
    "Pokémon Tool"
  ],
  "types": [],
  "hp": "",
  "rarity": "Uncommon",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/164_hires.png",
  "marketPrice": 0.19,
  "rules": [
    "The Basic Pokémon this card is attached to has no Weakness.",
    "You may attach any number of Pokémon Tools to your Pokémon during your turn. You may attach only 1 Pokémon Tool to each Pokémon, and it stays attached."
  ],
  "attacks": []
},
  {
  "id": "sv3pt5-165",
  "name": "Rigid Band",
  "supertype": "Trainer",
  "subtypes": [
    "Pokémon Tool"
  ],
  "types": [],
  "hp": "",
  "rarity": "Uncommon",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/165_hires.png",
  "marketPrice": 0.1,
  "rules": [
    "The Stage 1 Pokémon this card is attached to takes 30 less damage from attacks from your opponent's Pokémon (after applying Weakness and Resistance).",
    "You may attach any number of Pokémon Tools to your Pokémon during your turn. You may attach only 1 Pokémon Tool to each Pokémon, and it stays attached."
  ],
  "attacks": []
},
  {
  "id": "sv3pt5-168",
  "name": "Charmander",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Fire"
  ],
  "hp": "70",
  "rarity": "Illustration Rare",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/168_hires.png",
  "marketPrice": 117.99,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Fire"
      ],
      "name": "Blazing Destruction",
      "damage": "",
      "text": "Discard a Stadium in play."
    },
    {
      "cost": [
        "Fire",
        "Fire"
      ],
      "name": "Steady Firebreathing",
      "damage": "30",
      "text": ""
    }
  ]
},
  {
  "id": "sv3pt5-154",
  "name": "Antique Old Amber",
  "supertype": "Trainer",
  "subtypes": [
    "Item"
  ],
  "types": [],
  "hp": "60",
  "rarity": "Common",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/154_hires.png",
  "marketPrice": 0.12,
  "rules": [
    "Play this card as if it were a 60-HP Basic Colorless Pokémon. This card can't be affected by any Special Conditions and can't retreat.  At any time during your turn, you may discard this card from play.",
    "You may play any number of Item cards during your turn."
  ],
  "attacks": []
},
  {
  "id": "sv3pt5-158",
  "name": "Daisy's Help",
  "supertype": "Trainer",
  "subtypes": [
    "Supporter"
  ],
  "types": [],
  "hp": "",
  "rarity": "Uncommon",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/158_hires.png",
  "marketPrice": 0.07,
  "rules": [
    "Draw 2 cards. Look at your face-down Prize cards.",
    "You may play only 1 Supporter card during your turn."
  ],
  "attacks": []
},
  {
  "id": "sv3pt5-166",
  "name": "Bulbasaur",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Grass"
  ],
  "hp": "70",
  "rarity": "Illustration Rare",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/166_hires.png",
  "marketPrice": 90.96,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Grass",
        "Colorless"
      ],
      "name": "Leech Seed",
      "damage": "20",
      "text": "Heal 20 damage from this Pokémon."
    }
  ]
},
  {
  "id": "sv3pt5-169",
  "name": "Charmeleon",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 1"
  ],
  "types": [
    "Fire"
  ],
  "hp": "100",
  "rarity": "Illustration Rare",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/169_hires.png",
  "marketPrice": 81.41,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Fire"
      ],
      "name": "Combustion",
      "damage": "20",
      "text": ""
    },
    {
      "cost": [
        "Fire",
        "Fire",
        "Fire"
      ],
      "name": "Fire Blast",
      "damage": "90",
      "text": "Discard an Energy from this Pokémon."
    }
  ]
},
  {
  "id": "sv3pt5-171",
  "name": "Wartortle",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 1"
  ],
  "types": [
    "Water"
  ],
  "hp": "100",
  "rarity": "Illustration Rare",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/171_hires.png",
  "marketPrice": 77.69,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Water"
      ],
      "name": "Free Diving",
      "damage": "",
      "text": "Put up to 3 Basic Water Energy cards from your discard pile into your hand."
    },
    {
      "cost": [
        "Water",
        "Water"
      ],
      "name": "Spinning Attack",
      "damage": "50",
      "text": ""
    }
  ]
},
  {
  "id": "sv3pt5-145",
  "name": "Zapdos ex",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic",
    "ex"
  ],
  "types": [
    "Lightning"
  ],
  "hp": "200",
  "rarity": "Double Rare",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/145_hires.png",
  "marketPrice": 1.67,
  "rules": [
    "Pokémon ex rule: When your Pokémon ex is Knocked Out, your opponent takes 2 Prize cards."
  ],
  "attacks": [
    {
      "cost": [
        "Lightning",
        "Lightning",
        "Lightning"
      ],
      "name": "Multishot Lightning",
      "damage": "120",
      "text": "This attack also does 90 damage to 1 of your opponent's Benched Pokémon that has any damage counters on it. (Don't apply Weakness and Resistance for Benched Pokémon.)"
    }
  ]
},
  {
  "id": "sv3pt5-146",
  "name": "Moltres",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Fire"
  ],
  "hp": "120",
  "rarity": "Rare",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/146_hires.png",
  "marketPrice": 0.38,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Fire",
        "Fire",
        "Fire"
      ],
      "name": "Blazing Flight",
      "damage": "",
      "text": "Discard 2 Fire Energy from this Pokémon. This attack does 120 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"
    }
  ]
},
  {
  "id": "sv3pt5-147",
  "name": "Dratini",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Dragon"
  ],
  "hp": "60",
  "rarity": "Common",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/147_hires.png",
  "marketPrice": 0.1,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Water"
      ],
      "name": "Beat",
      "damage": "10",
      "text": ""
    },
    {
      "cost": [
        "Water",
        "Lightning"
      ],
      "name": "Draconic Whip",
      "damage": "40",
      "text": ""
    }
  ]
},
  {
  "id": "sv3pt5-151",
  "name": "Mew ex",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic",
    "ex"
  ],
  "types": [
    "Psychic"
  ],
  "hp": "180",
  "rarity": "Double Rare",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/151_hires.png",
  "marketPrice": 9.67,
  "rules": [
    "Pokémon ex rule: When your Pokémon ex is Knocked Out, your opponent takes 2 Prize cards."
  ],
  "attacks": [
    {
      "cost": [
        "Colorless",
        "Colorless",
        "Colorless"
      ],
      "name": "Genome Hacking",
      "damage": "",
      "text": "Choose 1 of your opponent's Active Pokémon's attacks and use it as this attack."
    }
  ]
},
  {
  "id": "sv3pt5-155",
  "name": "Big Air Balloon",
  "supertype": "Trainer",
  "subtypes": [
    "Pokémon Tool"
  ],
  "types": [],
  "hp": "",
  "rarity": "Uncommon",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/155_hires.png",
  "marketPrice": 0.14,
  "rules": [
    "The Stage 2 Pokémon this card is attached to has no Retreat Cost.",
    "You may attach any number of Pokémon Tools to your Pokémon during your turn. You may attach only 1 Pokémon Tool to each Pokémon, and it stays attached."
  ],
  "attacks": []
},
  {
  "id": "sv3pt5-161",
  "name": "Giovanni's Charisma",
  "supertype": "Trainer",
  "subtypes": [
    "Supporter"
  ],
  "types": [],
  "hp": "",
  "rarity": "Uncommon",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/161_hires.png",
  "marketPrice": 0.12,
  "rules": [
    "Put an Energy attached to your opponent's Active Pokémon into their hand. If you do, attach an Energy card from your hand to your Active Pokémon.",
    "You may play only 1 Supporter card during your turn."
  ],
  "attacks": []
},
  {
  "id": "sv3pt5-167",
  "name": "Ivysaur",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 1"
  ],
  "types": [
    "Grass"
  ],
  "hp": "100",
  "rarity": "Illustration Rare",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/167_hires.png",
  "marketPrice": 56.26,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Grass",
        "Colorless"
      ],
      "name": "Leech Seed",
      "damage": "30",
      "text": "Heal 20 damage from this Pokémon."
    },
    {
      "cost": [
        "Grass",
        "Grass",
        "Colorless"
      ],
      "name": "Vine Whip",
      "damage": "80",
      "text": ""
    }
  ]
},
  {
  "id": "sv3pt5-170",
  "name": "Squirtle",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Water"
  ],
  "hp": "60",
  "rarity": "Illustration Rare",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/170_hires.png",
  "marketPrice": 109.98,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Water"
      ],
      "name": "Withdraw",
      "damage": "",
      "text": "Flip a coin. If heads, during your opponent's next turn, prevent all damage done to this Pokémon by attacks."
    },
    {
      "cost": [
        "Water",
        "Water"
      ],
      "name": "Skull Bash",
      "damage": "20",
      "text": ""
    }
  ]
},
  {
  "id": "sv3pt5-177",
  "name": "Machoke",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 1"
  ],
  "types": [
    "Fighting"
  ],
  "hp": "100",
  "rarity": "Illustration Rare",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/177_hires.png",
  "marketPrice": 27.45,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Fighting",
        "Fighting"
      ],
      "name": "Mountain Ramming",
      "damage": "50",
      "text": "Discard the top card of your opponent's deck."
    }
  ]
},
  {
  "id": "sv3pt5-189",
  "name": "Golem ex",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 2",
    "ex"
  ],
  "types": [
    "Fighting"
  ],
  "hp": "330",
  "rarity": "Ultra Rare",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/189_hires.png",
  "marketPrice": 7.04,
  "rules": [
    "Pokémon ex rule: When your Pokémon ex is Knocked Out, your opponent takes 2 Prize cards."
  ],
  "attacks": [
    {
      "cost": [
        "Fighting"
      ],
      "name": "Dynamic Roll",
      "damage": "50",
      "text": "During your next turn, attacks used by this Pokémon do 120 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance)."
    },
    {
      "cost": [
        "Fighting",
        "Colorless",
        "Colorless"
      ],
      "name": "Rock Blaster",
      "damage": "180",
      "text": "This attack's damage isn't affected by Resistance."
    }
  ]
},
  {
  "id": "sv3pt5-179",
  "name": "Mr. Mime",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Psychic"
  ],
  "hp": "90",
  "rarity": "Illustration Rare",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/179_hires.png",
  "marketPrice": 17.7,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Colorless"
      ],
      "name": "Psypower",
      "damage": "",
      "text": "Put 3 damage counters on your opponent's Pokémon in any way you like."
    }
  ]
},
  {
  "id": "sv3pt5-180",
  "name": "Omanyte",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 1"
  ],
  "types": [
    "Water"
  ],
  "hp": "100",
  "rarity": "Illustration Rare",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/180_hires.png",
  "marketPrice": 17.71,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Water",
        "Water"
      ],
      "name": "Tentacular Return",
      "damage": "50",
      "text": "Put an Energy attached to your opponent's Active Pokémon into their hand."
    }
  ]
},
  {
  "id": "sv3pt5-185",
  "name": "Arbok ex",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 1",
    "ex"
  ],
  "types": [
    "Darkness"
  ],
  "hp": "270",
  "rarity": "Ultra Rare",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/185_hires.png",
  "marketPrice": 10.04,
  "rules": [
    "Pokémon ex rule: When your Pokémon ex is Knocked Out, your opponent takes 2 Prize cards."
  ],
  "attacks": [
    {
      "cost": [
        "Darkness",
        "Darkness"
      ],
      "name": "Bind Down",
      "damage": "70",
      "text": "During your opponent's next turn, the Defending Pokémon can't retreat."
    },
    {
      "cost": [
        "Darkness",
        "Darkness",
        "Darkness"
      ],
      "name": "Menacing Fangs",
      "damage": "150",
      "text": "Your opponent discards 2 cards from their hand."
    }
  ]
},
  {
  "id": "sv3pt5-187",
  "name": "Wigglytuff ex",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 1",
    "ex"
  ],
  "types": [
    "Colorless"
  ],
  "hp": "250",
  "rarity": "Ultra Rare",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/187_hires.png",
  "marketPrice": 9.34,
  "rules": [
    "Pokémon ex rule: When your Pokémon ex is Knocked Out, your opponent takes 2 Prize cards."
  ],
  "attacks": [
    {
      "cost": [
        "Colorless",
        "Colorless",
        "Colorless"
      ],
      "name": "Friend Tackle",
      "damage": "90+",
      "text": "If you played a Supporter card from your hand during this turn, this attack does 90 more damage."
    }
  ]
},
  {
  "id": "sv3pt5-188",
  "name": "Alakazam ex",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 2",
    "ex"
  ],
  "types": [
    "Psychic"
  ],
  "hp": "310",
  "rarity": "Ultra Rare",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/188_hires.png",
  "marketPrice": 14.44,
  "rules": [
    "Pokémon ex rule: When your Pokémon ex is Knocked Out, your opponent takes 2 Prize cards."
  ],
  "attacks": [
    {
      "cost": [
        "Colorless",
        "Colorless"
      ],
      "name": "Mind Jack",
      "damage": "90+",
      "text": "This attack does 30 more damage for each of your opponent's Benched Pokémon."
    },
    {
      "cost": [
        "Psychic",
        "Psychic"
      ],
      "name": "Dimensional Hand",
      "damage": "120",
      "text": "This attack can be used even if this Pokémon is on the Bench."
    }
  ]
},
  {
  "id": "sv3pt5-192",
  "name": "Zapdos ex",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic",
    "ex"
  ],
  "types": [
    "Lightning"
  ],
  "hp": "200",
  "rarity": "Ultra Rare",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/192_hires.png",
  "marketPrice": 14.02,
  "rules": [
    "Pokémon ex rule: When your Pokémon ex is Knocked Out, your opponent takes 2 Prize cards."
  ],
  "attacks": [
    {
      "cost": [
        "Lightning",
        "Lightning",
        "Lightning"
      ],
      "name": "Multishot Lightning",
      "damage": "120",
      "text": "This attack also does 90 damage to 1 of your opponent's Benched Pokémon that has any damage counters on it. (Don't apply Weakness and Resistance for Benched Pokémon.)"
    }
  ]
},
  {
  "id": "sv3pt5-193",
  "name": "Mew ex",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic",
    "ex"
  ],
  "types": [
    "Psychic"
  ],
  "hp": "180",
  "rarity": "Ultra Rare",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/193_hires.png",
  "marketPrice": 42.7,
  "rules": [
    "Pokémon ex rule: When your Pokémon ex is Knocked Out, your opponent takes 2 Prize cards."
  ],
  "attacks": [
    {
      "cost": [
        "Colorless",
        "Colorless",
        "Colorless"
      ],
      "name": "Genome Hacking",
      "damage": "",
      "text": "Choose 1 of your opponent's Active Pokémon's attacks and use it as this attack."
    }
  ]
},
  {
  "id": "sv3pt5-174",
  "name": "Nidoking",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 2"
  ],
  "types": [
    "Darkness"
  ],
  "hp": "170",
  "rarity": "Illustration Rare",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/174_hires.png",
  "marketPrice": 23.93,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Darkness",
        "Darkness",
        "Colorless",
        "Colorless"
      ],
      "name": "Venomous Impact",
      "damage": "190",
      "text": "Your opponent's Active Pokémon is now Poisoned."
    }
  ]
},
  {
  "id": "sv3pt5-181",
  "name": "Dragonair",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 1"
  ],
  "types": [
    "Dragon"
  ],
  "hp": "100",
  "rarity": "Illustration Rare",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/181_hires.png",
  "marketPrice": 53.72,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Water"
      ],
      "name": "Beat",
      "damage": "20",
      "text": ""
    },
    {
      "cost": [
        "Water",
        "Lightning"
      ],
      "name": "Aqua Slash",
      "damage": "90",
      "text": "During your next turn, this Pokémon can't attack."
    }
  ]
},
  {
  "id": "sv3pt5-182",
  "name": "Venusaur ex",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 2",
    "ex"
  ],
  "types": [
    "Grass"
  ],
  "hp": "340",
  "rarity": "Ultra Rare",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/182_hires.png",
  "marketPrice": 16.75,
  "rules": [
    "Pokémon ex rule: When your Pokémon ex is Knocked Out, your opponent takes 2 Prize cards."
  ],
  "attacks": [
    {
      "cost": [
        "Grass",
        "Grass",
        "Colorless"
      ],
      "name": "Dangerous Toxwhip",
      "damage": "150",
      "text": "Your opponent's Active Pokémon is now Confused and Poisoned."
    }
  ]
},
  {
  "id": "sv3pt5-186",
  "name": "Ninetales ex",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 1",
    "ex"
  ],
  "types": [
    "Fire"
  ],
  "hp": "260",
  "rarity": "Ultra Rare",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/186_hires.png",
  "marketPrice": 16.73,
  "rules": [
    "Pokémon ex rule: When your Pokémon ex is Knocked Out, your opponent takes 2 Prize cards."
  ],
  "attacks": [
    {
      "cost": [
        "Fire"
      ],
      "name": "Heat Wave",
      "damage": "30",
      "text": "Your opponent's Active Pokémon is now Burned."
    },
    {
      "cost": [
        "Fire",
        "Colorless"
      ],
      "name": "Mirrored Flames",
      "damage": "80+",
      "text": "If you have the same number of cards in your hand as your opponent, this attack does 140 more damage."
    }
  ]
},
  {
  "id": "sv3pt5-191",
  "name": "Jynx ex",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic",
    "ex"
  ],
  "types": [
    "Water"
  ],
  "hp": "200",
  "rarity": "Ultra Rare",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/191_hires.png",
  "marketPrice": 8.59,
  "rules": [
    "Pokémon ex rule: When your Pokémon ex is Knocked Out, your opponent takes 2 Prize cards."
  ],
  "attacks": [
    {
      "cost": [
        "Water",
        "Colorless",
        "Colorless"
      ],
      "name": "Heart-Stopping Kiss",
      "damage": "",
      "text": "If your opponent's Active Pokémon is Asleep, it is Knocked Out."
    },
    {
      "cost": [
        "Water",
        "Water",
        "Water"
      ],
      "name": "Icy Wind",
      "damage": "120",
      "text": "Your opponent's Active Pokémon is now Asleep."
    }
  ]
},
  {
  "id": "sv3pt5-175",
  "name": "Psyduck",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Water"
  ],
  "hp": "70",
  "rarity": "Illustration Rare",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/175_hires.png",
  "marketPrice": 79.82,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Colorless"
      ],
      "name": "Overthink",
      "damage": "",
      "text": "During your opponent's next turn, whenever they flip a coin, treat it as tails."
    },
    {
      "cost": [
        "Water"
      ],
      "name": "Water Gun",
      "damage": "10",
      "text": ""
    }
  ]
},
  {
  "id": "sv3pt5-176",
  "name": "Poliwhirl",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 1"
  ],
  "types": [
    "Water"
  ],
  "hp": "90",
  "rarity": "Illustration Rare",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/176_hires.png",
  "marketPrice": 58.73,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Water"
      ],
      "name": "Wave Splash",
      "damage": "20",
      "text": ""
    },
    {
      "cost": [
        "Water",
        "Colorless"
      ],
      "name": "Frog Hop",
      "damage": "30+",
      "text": "Flip a coin. If heads, this attack does 60 more damage."
    }
  ]
},
  {
  "id": "sv3pt5-178",
  "name": "Tangela",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Grass"
  ],
  "hp": "80",
  "rarity": "Illustration Rare",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/178_hires.png",
  "marketPrice": 19.68,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Grass"
      ],
      "name": "Tactful Tangling",
      "damage": "10+",
      "text": "If you played Erika's Invitation from your hand during this turn, this attack does 60 more damage."
    }
  ]
},
  {
  "id": "sv3pt5-183",
  "name": "Charizard ex",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 2",
    "ex"
  ],
  "types": [
    "Fire"
  ],
  "hp": "330",
  "rarity": "Ultra Rare",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/183_hires.png",
  "marketPrice": 49.26,
  "rules": [
    "Pokémon ex rule: When your Pokémon ex is Knocked Out, your opponent takes 2 Prize cards."
  ],
  "attacks": [
    {
      "cost": [
        "Fire"
      ],
      "name": "Brave Wing",
      "damage": "60+",
      "text": "If this Pokémon has any damage counters on it, this attack does 100 more damage."
    },
    {
      "cost": [
        "Fire",
        "Fire",
        "Fire",
        "Fire"
      ],
      "name": "Explosive Vortex",
      "damage": "330",
      "text": "Discard 3 Energy from this Pokémon."
    }
  ]
},
  {
  "id": "sv3pt5-184",
  "name": "Blastoise ex",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 2",
    "ex"
  ],
  "types": [
    "Water"
  ],
  "hp": "330",
  "rarity": "Ultra Rare",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/184_hires.png",
  "marketPrice": 27.68,
  "rules": [
    "Pokémon ex rule: When your Pokémon ex is Knocked Out, your opponent takes 2 Prize cards."
  ],
  "attacks": [
    {
      "cost": [
        "Water",
        "Water"
      ],
      "name": "Twin Cannons",
      "damage": "140×",
      "text": "Discard up to 2 Basic Water Energy cards from your hand. This attack does 140 damage for each card you discarded in this way."
    }
  ]
},
  {
  "id": "sv3pt5-190",
  "name": "Kangaskhan ex",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic",
    "ex"
  ],
  "types": [
    "Colorless"
  ],
  "hp": "230",
  "rarity": "Ultra Rare",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/190_hires.png",
  "marketPrice": 6.56,
  "rules": [
    "Pokémon ex rule: When your Pokémon ex is Knocked Out, your opponent takes 2 Prize cards."
  ],
  "attacks": [
    {
      "cost": [
        "Colorless"
      ],
      "name": "Triple Draw",
      "damage": "",
      "text": "Draw 3 cards."
    },
    {
      "cost": [
        "Colorless",
        "Colorless",
        "Colorless"
      ],
      "name": "Incessant Punching",
      "damage": "100×",
      "text": "Flip 4 coins. This attack does 100 damage for each heads."
    }
  ]
},
  {
  "id": "sv3pt5-195",
  "name": "Daisy's Help",
  "supertype": "Trainer",
  "subtypes": [
    "Supporter"
  ],
  "types": [],
  "hp": "",
  "rarity": "Ultra Rare",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/195_hires.png",
  "marketPrice": 2.91,
  "rules": [
    "Draw 2 cards. Look at your face-down Prize cards.",
    "You may play only 1 Supporter card during your turn."
  ],
  "attacks": []
},
  {
  "id": "sv3pt5-196",
  "name": "Erika's Invitation",
  "supertype": "Trainer",
  "subtypes": [
    "Supporter"
  ],
  "types": [],
  "hp": "",
  "rarity": "Ultra Rare",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/196_hires.png",
  "marketPrice": 8.81,
  "rules": [
    "Your opponent reveals their hand, and you put a Basic Pokémon you find there onto your opponent's Bench. If you put a Pokémon onto their Bench in this way, switch in that Pokémon to the Active Spot.",
    "You may play only 1 Supporter card during your turn."
  ],
  "attacks": []
},
  {
  "id": "sv3pt5-197",
  "name": "Giovanni's Charisma",
  "supertype": "Trainer",
  "subtypes": [
    "Supporter"
  ],
  "types": [],
  "hp": "",
  "rarity": "Ultra Rare",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/197_hires.png",
  "marketPrice": 5.56,
  "rules": [
    "Put an Energy attached to your opponent's Active Pokémon into their hand. If you do, attach an Energy card from your hand to your Active Pokémon.",
    "You may play only 1 Supporter card during your turn."
  ],
  "attacks": []
},
  {
  "id": "sv3pt5-194",
  "name": "Bill's Transfer",
  "supertype": "Trainer",
  "subtypes": [
    "Supporter"
  ],
  "types": [],
  "hp": "",
  "rarity": "Ultra Rare",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/194_hires.png",
  "marketPrice": 3.56,
  "rules": [
    "Look at the top 8 cards of your deck. You may reveal any number of Pokémon you find there and put them into your hand. Shuffle the other cards back into your deck.",
    "You may play only 1 Supporter card during your turn."
  ],
  "attacks": []
},
  {
  "id": "sv3pt5-198",
  "name": "Venusaur ex",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 2",
    "ex"
  ],
  "types": [
    "Grass"
  ],
  "hp": "340",
  "rarity": "Special Illustration Rare",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/198_hires.png",
  "marketPrice": 124.64,
  "rules": [
    "Pokémon ex rule: When your Pokémon ex is Knocked Out, your opponent takes 2 Prize cards."
  ],
  "attacks": [
    {
      "cost": [
        "Grass",
        "Grass",
        "Colorless"
      ],
      "name": "Dangerous Toxwhip",
      "damage": "150",
      "text": "Your opponent's Active Pokémon is now Confused and Poisoned."
    }
  ]
},
  {
  "id": "sv3pt5-199",
  "name": "Charizard ex",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 2",
    "ex"
  ],
  "types": [
    "Fire"
  ],
  "hp": "330",
  "rarity": "Special Illustration Rare",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/199_hires.png",
  "marketPrice": 434.67,
  "rules": [
    "Pokémon ex rule: When your Pokémon ex is Knocked Out, your opponent takes 2 Prize cards."
  ],
  "attacks": [
    {
      "cost": [
        "Fire"
      ],
      "name": "Brave Wing",
      "damage": "60+",
      "text": "If this Pokémon has any damage counters on it, this attack does 100 more damage."
    },
    {
      "cost": [
        "Fire",
        "Fire",
        "Fire",
        "Fire"
      ],
      "name": "Explosive Vortex",
      "damage": "330",
      "text": "Discard 3 Energy from this Pokémon."
    }
  ]
},
  {
  "id": "sv3pt5-200",
  "name": "Blastoise ex",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 2",
    "ex"
  ],
  "types": [
    "Water"
  ],
  "hp": "330",
  "rarity": "Special Illustration Rare",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/200_hires.png",
  "marketPrice": 162.09,
  "rules": [
    "Pokémon ex rule: When your Pokémon ex is Knocked Out, your opponent takes 2 Prize cards."
  ],
  "attacks": [
    {
      "cost": [
        "Water",
        "Water"
      ],
      "name": "Twin Cannons",
      "damage": "140×",
      "text": "Discard up to 2 Basic Water Energy cards from your hand. This attack does 140 damage for each card you discarded in this way."
    }
  ]
},
  {
  "id": "sv3pt5-201",
  "name": "Alakazam ex",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 2",
    "ex"
  ],
  "types": [
    "Psychic"
  ],
  "hp": "310",
  "rarity": "Special Illustration Rare",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/201_hires.png",
  "marketPrice": 80.12,
  "rules": [
    "Pokémon ex rule: When your Pokémon ex is Knocked Out, your opponent takes 2 Prize cards."
  ],
  "attacks": [
    {
      "cost": [
        "Colorless",
        "Colorless"
      ],
      "name": "Mind Jack",
      "damage": "90+",
      "text": "This attack does 30 more damage for each of your opponent's Benched Pokémon."
    },
    {
      "cost": [
        "Psychic",
        "Psychic"
      ],
      "name": "Dimensional Hand",
      "damage": "120",
      "text": "This attack can be used even if this Pokémon is on the Bench."
    }
  ]
},
  {
  "id": "sv3pt5-206",
  "name": "Switch",
  "supertype": "Trainer",
  "subtypes": [
    "Item"
  ],
  "types": [],
  "hp": "",
  "rarity": "Hyper Rare",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/206_hires.png",
  "marketPrice": 2.06,
  "rules": [
    "Switch your Active Pokémon with 1 of your Benched Pokémon.",
    "You may play any number of Item cards during your turn."
  ],
  "attacks": []
},
  {
  "id": "sv3pt5-202",
  "name": "Zapdos ex",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic",
    "ex"
  ],
  "types": [
    "Lightning"
  ],
  "hp": "200",
  "rarity": "Special Illustration Rare",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/202_hires.png",
  "marketPrice": 111.88,
  "rules": [
    "Pokémon ex rule: When your Pokémon ex is Knocked Out, your opponent takes 2 Prize cards."
  ],
  "attacks": [
    {
      "cost": [
        "Lightning",
        "Lightning",
        "Lightning"
      ],
      "name": "Multishot Lightning",
      "damage": "120",
      "text": "This attack also does 90 damage to 1 of your opponent's Benched Pokémon that has any damage counters on it. (Don't apply Weakness and Resistance for Benched Pokémon.)"
    }
  ]
},
  {
  "id": "sv3pt5-203",
  "name": "Erika's Invitation",
  "supertype": "Trainer",
  "subtypes": [
    "Supporter"
  ],
  "types": [],
  "hp": "",
  "rarity": "Special Illustration Rare",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/203_hires.png",
  "marketPrice": 21.43,
  "rules": [
    "Your opponent reveals their hand, and you put a Basic Pokémon you find there onto your opponent's Bench. If you put a Pokémon onto their Bench in this way, switch in that Pokémon to the Active Spot.",
    "You may play only 1 Supporter card during your turn."
  ],
  "attacks": []
},
  {
  "id": "sv3pt5-204",
  "name": "Giovanni's Charisma",
  "supertype": "Trainer",
  "subtypes": [
    "Supporter"
  ],
  "types": [],
  "hp": "",
  "rarity": "Special Illustration Rare",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/204_hires.png",
  "marketPrice": 18.25,
  "rules": [
    "Put an Energy attached to your opponent's Active Pokémon into their hand. If you do, attach an Energy card from your hand to your Active Pokémon.",
    "You may play only 1 Supporter card during your turn."
  ],
  "attacks": []
},
  {
  "id": "sv3pt5-205",
  "name": "Mew ex",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic",
    "ex"
  ],
  "types": [
    "Psychic"
  ],
  "hp": "180",
  "rarity": "Hyper Rare",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/205_hires.png",
  "marketPrice": 33.85,
  "rules": [
    "Pokémon ex rule: When your Pokémon ex is Knocked Out, your opponent takes 2 Prize cards."
  ],
  "attacks": [
    {
      "cost": [
        "Colorless",
        "Colorless",
        "Colorless"
      ],
      "name": "Genome Hacking",
      "damage": "",
      "text": "Choose 1 of your opponent's Active Pokémon's attacks and use it as this attack."
    }
  ]
},
  {
  "id": "sv3pt5-207",
  "name": "Basic Psychic Energy",
  "supertype": "Energy",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Psychic"
  ],
  "hp": "",
  "rarity": "Hyper Rare",
  "set": "sv3pt5",
  "setName": "151",
  "imageUrl": "https://images.pokemontcg.io/sv3pt5/207_hires.png",
  "marketPrice": 6,
  "rules": [],
  "attacks": []
},
  {
  "id": "sv4pt5-1",
  "name": "Pineco",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Grass"
  ],
  "hp": "70",
  "rarity": "Common",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/1_hires.png",
  "marketPrice": 0.05,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Grass",
        "Grass"
      ],
      "name": "Rollout",
      "damage": "30",
      "text": ""
    }
  ]
},
  {
  "id": "sv4pt5-2",
  "name": "Forretress ex",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 1",
    "Tera",
    "ex"
  ],
  "types": [
    "Grass"
  ],
  "hp": "270",
  "rarity": "Double Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/2_hires.png",
  "marketPrice": 0.62,
  "rules": [
    "Tera: As long as this Pokémon is on your Bench, prevent all damage done to this Pokémon by attacks (both yours and your opponent's).",
    "Pokémon ex rule: When your Pokémon ex is Knocked Out, your opponent takes 2 Prize cards."
  ],
  "attacks": [
    {
      "cost": [
        "Grass",
        "Grass"
      ],
      "name": "Guard Press",
      "damage": "120",
      "text": "During your opponent's next turn, this Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance)."
    }
  ]
},
  {
  "id": "sv4pt5-9",
  "name": "Magmar",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Fire"
  ],
  "hp": "80",
  "rarity": "Common",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/9_hires.png",
  "marketPrice": 0.03,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Fire"
      ],
      "name": "Collect",
      "damage": "",
      "text": "Draw a card."
    },
    {
      "cost": [
        "Fire",
        "Colorless"
      ],
      "name": "Steady Firebreathing",
      "damage": "40",
      "text": ""
    }
  ]
},
  {
  "id": "sv4pt5-3",
  "name": "Maractus",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Grass"
  ],
  "hp": "110",
  "rarity": "Common",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/3_hires.png",
  "marketPrice": 0.03,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Colorless"
      ],
      "name": "Double Draw",
      "damage": "",
      "text": "Draw 2 cards."
    },
    {
      "cost": [
        "Colorless",
        "Colorless",
        "Colorless"
      ],
      "name": "Pin Missile",
      "damage": "30×",
      "text": "Flip 4 coins. This attack does 30 damage for each heads."
    }
  ]
},
  {
  "id": "sv4pt5-10",
  "name": "Magmortar",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 1"
  ],
  "types": [
    "Fire"
  ],
  "hp": "140",
  "rarity": "Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/10_hires.png",
  "marketPrice": 0.09,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Fire"
      ],
      "name": "Flare",
      "damage": "40",
      "text": ""
    },
    {
      "cost": [
        "Fire",
        "Fire",
        "Colorless"
      ],
      "name": "Volcanic Heat",
      "damage": "170",
      "text": "During your next turn, this Pokémon can't attack."
    }
  ]
},
  {
  "id": "sv4pt5-13",
  "name": "Heat Rotom",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Fire"
  ],
  "hp": "90",
  "rarity": "Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/13_hires.png",
  "marketPrice": 0.07,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Fire",
        "Fire"
      ],
      "name": "Heat Tackle",
      "damage": "100",
      "text": "This Pokémon also does 40 damage to itself."
    }
  ]
},
  {
  "id": "sv4pt5-16",
  "name": "Lapras",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Water"
  ],
  "hp": "110",
  "rarity": "Common",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/16_hires.png",
  "marketPrice": 0.03,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Colorless"
      ],
      "name": "Into the Deep",
      "damage": "",
      "text": "Put up to 3 Basic Energy cards from your discard pile into your hand."
    },
    {
      "cost": [
        "Water",
        "Colorless"
      ],
      "name": "Freeze-Dry",
      "damage": "50",
      "text": "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed."
    }
  ]
},
  {
  "id": "sv4pt5-18",
  "name": "Pikachu",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Lightning"
  ],
  "hp": "70",
  "rarity": "Common",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/18_hires.png",
  "marketPrice": 0.15,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Colorless"
      ],
      "name": "Growl",
      "damage": "",
      "text": "During your opponent's next turn, the Defending Pokémon's attacks do 20 less damage (before applying Weakness and Resistance)."
    },
    {
      "cost": [
        "Lightning",
        "Colorless"
      ],
      "name": "Pika Bolt",
      "damage": "30",
      "text": ""
    }
  ]
},
  {
  "id": "sv4pt5-12",
  "name": "Camerupt",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 1"
  ],
  "types": [
    "Fire"
  ],
  "hp": "130",
  "rarity": "Uncommon",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/12_hires.png",
  "marketPrice": 0.06,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Fire"
      ],
      "name": "Super Singe",
      "damage": "",
      "text": "Your opponent's Active Pokémon is now Burned."
    },
    {
      "cost": [
        "Fire",
        "Fire",
        "Colorless"
      ],
      "name": "Cinder Cannon",
      "damage": "120+",
      "text": "You may discard a Fighting Energy from this Pokémon. If you do, this attack does 120 more damage."
    }
  ]
},
  {
  "id": "sv4pt5-14",
  "name": "Charcadet",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Fire"
  ],
  "hp": "70",
  "rarity": "Common",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/14_hires.png",
  "marketPrice": 0.06,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Fire",
        "Fire",
        "Colorless"
      ],
      "name": "Heat Blast",
      "damage": "60",
      "text": ""
    }
  ]
},
  {
  "id": "sv4pt5-22",
  "name": "Kilowattrel",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 1"
  ],
  "types": [
    "Lightning"
  ],
  "hp": "120",
  "rarity": "Uncommon",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/22_hires.png",
  "marketPrice": 0.06,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Colorless"
      ],
      "name": "United Thunder",
      "damage": "",
      "text": "This attack does 10 damage for each Pokémon in your discard pile that has the United Wings attack to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"
    },
    {
      "cost": [
        "Lightning",
        "Colorless",
        "Colorless"
      ],
      "name": "Speed Wing",
      "damage": "90",
      "text": ""
    }
  ]
},
  {
  "id": "sv4pt5-23",
  "name": "Exeggcute",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Psychic"
  ],
  "hp": "60",
  "rarity": "Common",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/23_hires.png",
  "marketPrice": 0.04,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Psychic"
      ],
      "name": "Hypnosis",
      "damage": "",
      "text": "Your opponent's Active Pokémon is now Asleep."
    },
    {
      "cost": [
        "Psychic",
        "Colorless"
      ],
      "name": "Rolling Tackle",
      "damage": "30",
      "text": ""
    }
  ]
},
  {
  "id": "sv4pt5-25",
  "name": "Natu",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Psychic"
  ],
  "hp": "50",
  "rarity": "Common",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/25_hires.png",
  "marketPrice": 0.06,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Psychic"
      ],
      "name": "Triple Strike",
      "damage": "10×",
      "text": "Flip 3 coins. This attack does 10 damage for each heads."
    }
  ]
},
  {
  "id": "sv4pt5-4",
  "name": "Toedscool",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Grass"
  ],
  "hp": "50",
  "rarity": "Common",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/4_hires.png",
  "marketPrice": 0.06,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Grass"
      ],
      "name": "Furious Kicks",
      "damage": "10×",
      "text": "Flip 3 coins. This attack does 10 damage for each heads."
    }
  ]
},
  {
  "id": "sv4pt5-5",
  "name": "Toedscruel ex",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 1",
    "ex"
  ],
  "types": [
    "Grass"
  ],
  "hp": "270",
  "rarity": "Double Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/5_hires.png",
  "marketPrice": 0.61,
  "rules": [
    "Pokémon ex rule: When your Pokémon ex is Knocked Out, your opponent takes 2 Prize cards."
  ],
  "attacks": [
    {
      "cost": [
        "Grass",
        "Grass"
      ],
      "name": "Colony Rush",
      "damage": "80+",
      "text": "This attack does 40 more damage for each of your Benched Pokémon that has any Grass Energy attached."
    }
  ]
},
  {
  "id": "sv4pt5-6",
  "name": "Espathra ex",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 1",
    "Tera",
    "ex"
  ],
  "types": [
    "Grass"
  ],
  "hp": "260",
  "rarity": "Double Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/6_hires.png",
  "marketPrice": 0.55,
  "rules": [
    "Tera: As long as this Pokémon is on your Bench, prevent all damage done to this Pokémon by attacks (both yours and your opponent's).",
    "Pokémon ex rule: When your Pokémon ex is Knocked Out, your opponent takes 2 Prize cards."
  ],
  "attacks": [
    {
      "cost": [
        "Psychic"
      ],
      "name": "Psy Ball",
      "damage": "30+",
      "text": "This attack does 30 more damage for each Energy attached to both Active Pokémon."
    }
  ]
},
  {
  "id": "sv4pt5-7",
  "name": "Charmander",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Fire"
  ],
  "hp": "70",
  "rarity": "Common",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/7_hires.png",
  "marketPrice": 0.13,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Fire"
      ],
      "name": "Blazing Destruction",
      "damage": "",
      "text": "Discard a Stadium in play."
    },
    {
      "cost": [
        "Fire",
        "Fire"
      ],
      "name": "Steady Firebreathing",
      "damage": "30",
      "text": ""
    }
  ]
},
  {
  "id": "sv4pt5-17",
  "name": "Frigibax",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Water"
  ],
  "hp": "70",
  "rarity": "Common",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/17_hires.png",
  "marketPrice": 0.08,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Water"
      ],
      "name": "Collect",
      "damage": "",
      "text": "Draw a card."
    },
    {
      "cost": [
        "Water",
        "Colorless"
      ],
      "name": "Beat",
      "damage": "20",
      "text": ""
    }
  ]
},
  {
  "id": "sv4pt5-19",
  "name": "Raichu",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 1"
  ],
  "types": [
    "Lightning"
  ],
  "hp": "120",
  "rarity": "Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/19_hires.png",
  "marketPrice": 0.14,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Lightning",
        "Lightning",
        "Colorless"
      ],
      "name": "Thunder",
      "damage": "180",
      "text": "This Pokémon also does 50 damage to itself."
    }
  ]
},
  {
  "id": "sv4pt5-20",
  "name": "Chinchou",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Lightning"
  ],
  "hp": "60",
  "rarity": "Common",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/20_hires.png",
  "marketPrice": 0.05,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Colorless"
      ],
      "name": "Shine On",
      "damage": "",
      "text": "Look at the top card of your deck. You may put that card on the bottom of your deck."
    },
    {
      "cost": [
        "Lightning",
        "Colorless"
      ],
      "name": "Tiny Charge",
      "damage": "20",
      "text": ""
    }
  ]
},
  {
  "id": "sv4pt5-8",
  "name": "Charmeleon",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 1"
  ],
  "types": [
    "Fire"
  ],
  "hp": "90",
  "rarity": "Uncommon",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/8_hires.png",
  "marketPrice": 0.1,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Fire",
        "Fire"
      ],
      "name": "Combustion",
      "damage": "50",
      "text": ""
    }
  ]
},
  {
  "id": "sv4pt5-11",
  "name": "Numel",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Fire"
  ],
  "hp": "80",
  "rarity": "Common",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/11_hires.png",
  "marketPrice": 0.06,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Fire"
      ],
      "name": "Singe",
      "damage": "",
      "text": "Your opponent's Active Pokémon is now Burned."
    },
    {
      "cost": [
        "Fire",
        "Fire",
        "Colorless"
      ],
      "name": "Heat Blast",
      "damage": "60",
      "text": ""
    }
  ]
},
  {
  "id": "sv4pt5-15",
  "name": "Armarouge",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 1"
  ],
  "types": [
    "Fire"
  ],
  "hp": "130",
  "rarity": "Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/15_hires.png",
  "marketPrice": 0.22,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Fire",
        "Fire",
        "Colorless"
      ],
      "name": "Flame Cannon",
      "damage": "90",
      "text": "Your opponent's Active Pokémon is now Burned."
    }
  ]
},
  {
  "id": "sv4pt5-21",
  "name": "Lanturn",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 1"
  ],
  "types": [
    "Lightning"
  ],
  "hp": "120",
  "rarity": "Uncommon",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/21_hires.png",
  "marketPrice": 0.09,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Colorless",
        "Colorless"
      ],
      "name": "Lightning Ball",
      "damage": "50",
      "text": ""
    },
    {
      "cost": [
        "Lightning",
        "Lightning",
        "Colorless"
      ],
      "name": "Aqua Spark",
      "damage": "80+",
      "text": "If this Pokémon has any Water Energy attached, this attack does 120 more damage."
    }
  ]
},
  {
  "id": "sv4pt5-24",
  "name": "Exeggutor",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 1"
  ],
  "types": [
    "Psychic"
  ],
  "hp": "130",
  "rarity": "Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/24_hires.png",
  "marketPrice": 0.12,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Psychic",
        "Colorless"
      ],
      "name": "Hypnoblast",
      "damage": "30",
      "text": "Your opponent's Active Pokémon is now Asleep."
    },
    {
      "cost": [
        "Psychic",
        "Psychic",
        "Colorless"
      ],
      "name": "Psychic Loop",
      "damage": "160",
      "text": "Put 2 Energy attached to this Pokémon into your hand."
    }
  ]
},
  {
  "id": "sv4pt5-26",
  "name": "Xatu",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 1"
  ],
  "types": [
    "Psychic"
  ],
  "hp": "100",
  "rarity": "Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/26_hires.png",
  "marketPrice": 0.13,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Psychic",
        "Colorless",
        "Colorless"
      ],
      "name": "Super Psy Bolt",
      "damage": "80",
      "text": ""
    }
  ]
},
  {
  "id": "sv4pt5-29",
  "name": "Gardevoir ex",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 2",
    "ex"
  ],
  "types": [
    "Psychic"
  ],
  "hp": "310",
  "rarity": "Double Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/29_hires.png",
  "marketPrice": 0.6,
  "rules": [
    "Pokémon ex rule: When your Pokémon ex is Knocked Out, your opponent takes 2 Prize cards."
  ],
  "attacks": [
    {
      "cost": [
        "Psychic",
        "Psychic",
        "Colorless"
      ],
      "name": "Miracle Force",
      "damage": "190",
      "text": "This Pokémon recovers from all Special Conditions."
    }
  ]
},
  {
  "id": "sv4pt5-30",
  "name": "Chimecho",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Psychic"
  ],
  "hp": "70",
  "rarity": "Common",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/30_hires.png",
  "marketPrice": 0.04,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Colorless",
        "Colorless"
      ],
      "name": "Sleep Inducer",
      "damage": "",
      "text": "Switch in 1 of your opponent's Benched Pokémon to the Active Spot. The new Active Pokémon is now Asleep."
    },
    {
      "cost": [
        "Psychic",
        "Colorless",
        "Colorless"
      ],
      "name": "Psyshot",
      "damage": "70",
      "text": ""
    }
  ]
},
  {
  "id": "sv4pt5-43",
  "name": "Houndstone",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 1"
  ],
  "types": [
    "Psychic"
  ],
  "hp": "140",
  "rarity": "Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/43_hires.png",
  "marketPrice": 0.08,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Psychic",
        "Psychic"
      ],
      "name": "Last Respects",
      "damage": "80+",
      "text": "This attack does 10 more damage for each Psychic Pokémon in your discard pile."
    }
  ]
},
  {
  "id": "sv4pt5-47",
  "name": "Annihilape",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 2"
  ],
  "types": [
    "Fighting"
  ],
  "hp": "140",
  "rarity": "Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/47_hires.png",
  "marketPrice": 0.2,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Fighting"
      ],
      "name": "Rage Fist",
      "damage": "70×",
      "text": "This attack does 70 damage for each Prize card your opponent has taken."
    },
    {
      "cost": [
        "Fighting",
        "Fighting"
      ],
      "name": "Dynamite Punch",
      "damage": "170",
      "text": "This Pokémon also does 50 damage to itself."
    }
  ]
},
  {
  "id": "sv4pt5-60",
  "name": "Scraggy",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Darkness"
  ],
  "hp": "70",
  "rarity": "Common",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/60_hires.png",
  "marketPrice": 0.06,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Colorless"
      ],
      "name": "Low Kick",
      "damage": "10",
      "text": ""
    },
    {
      "cost": [
        "Darkness",
        "Darkness",
        "Colorless"
      ],
      "name": "Headstrike",
      "damage": "50",
      "text": ""
    }
  ]
},
  {
  "id": "sv4pt5-32",
  "name": "Woobat",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Psychic"
  ],
  "hp": "60",
  "rarity": "Common",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/32_hires.png",
  "marketPrice": 0.05,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Psychic"
      ],
      "name": "Reckless Charge",
      "damage": "30",
      "text": "This Pokémon also does 10 damage to itself."
    }
  ]
},
  {
  "id": "sv4pt5-71",
  "name": "Lechonk",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Colorless"
  ],
  "hp": "70",
  "rarity": "Common",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/71_hires.png",
  "marketPrice": 0.03,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Colorless",
        "Colorless",
        "Colorless"
      ],
      "name": "Whimsy Tackle",
      "damage": "70",
      "text": "Flip a coin. If tails, this attack does nothing."
    }
  ]
},
  {
  "id": "sv4pt5-79",
  "name": "Electric Generator",
  "supertype": "Trainer",
  "subtypes": [
    "Item"
  ],
  "types": [],
  "hp": "",
  "rarity": "Uncommon",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/79_hires.png",
  "marketPrice": 0.18,
  "rules": [
    "Look at the top 5 cards of your deck and attach up to 2 Basic Lightning Energy cards you find there to your Benched Lightning Pokémon in any way you like. Shuffle the other cards back into your deck.",
    "You may play any number of Item cards during your turn."
  ],
  "attacks": []
},
  {
  "id": "sv4pt5-33",
  "name": "Swoobat",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 1"
  ],
  "types": [
    "Psychic"
  ],
  "hp": "90",
  "rarity": "Uncommon",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/33_hires.png",
  "marketPrice": 0.07,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Psychic"
      ],
      "name": "Attraction Wave",
      "damage": "30",
      "text": "Your opponent's Active Pokémon is now Confused. Put 6 damage counters instead of 3 on that Pokémon for this Special Condition."
    }
  ]
},
  {
  "id": "sv4pt5-84",
  "name": "Nest Ball",
  "supertype": "Trainer",
  "subtypes": [
    "Item"
  ],
  "types": [],
  "hp": "",
  "rarity": "Uncommon",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/84_hires.png",
  "marketPrice": 0.23,
  "rules": [
    "Search your deck for a Basic Pokémon and put it onto your Bench. Then, shuffle your deck.",
    "You may play any number of Item cards during your turn."
  ],
  "attacks": []
},
  {
  "id": "sv4pt5-36",
  "name": "Dedenne",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Psychic"
  ],
  "hp": "70",
  "rarity": "Common",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/36_hires.png",
  "marketPrice": 0.07,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Psychic"
      ],
      "name": "Minor Errand-Running",
      "damage": "",
      "text": "Search your deck for up to 2 Basic Energy cards, reveal them, and put them into your hand. Then, shuffle your deck."
    },
    {
      "cost": [
        "Psychic",
        "Colorless"
      ],
      "name": "Spin Turn",
      "damage": "50",
      "text": "Switch this Pokémon with 1 of your Benched Pokémon."
    }
  ]
},
  {
  "id": "sv4pt5-85",
  "name": "Paldean Student",
  "supertype": "Trainer",
  "subtypes": [
    "Supporter"
  ],
  "types": [],
  "hp": "",
  "rarity": "Common",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/85_hires.png",
  "marketPrice": 0.06,
  "rules": [
    "Search your deck for a Pokémon that doesn't have a Rule Box, reveal it, and put it into your hand. For each Paldean Student card (not including this card) in your discard pile, you may search for an additional Pokémon in this way. Then, shuffle your deck. (Pokémon ex, Pokémon V, etc. have Rule Boxes.)",
    "You may play only 1 Supporter card during your turn."
  ],
  "attacks": []
},
  {
  "id": "sv4pt5-38",
  "name": "Fidough",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Psychic"
  ],
  "hp": "50",
  "rarity": "Common",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/38_hires.png",
  "marketPrice": 0.08,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Colorless",
        "Colorless"
      ],
      "name": "Rear Kick",
      "damage": "20",
      "text": ""
    }
  ]
},
  {
  "id": "sv4pt5-86",
  "name": "Paldean Student",
  "supertype": "Trainer",
  "subtypes": [
    "Supporter"
  ],
  "types": [],
  "hp": "",
  "rarity": "Common",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/86_hires.png",
  "marketPrice": 0.08,
  "rules": [
    "Search your deck for a Pokémon that doesn't have a Rule Box, reveal it, and put it into your hand. For each Paldean Student card (not including this card) in your discard pile, you may search for an additional Pokémon in this way. Then, shuffle your deck. (Pokémon ex, Pokémon V, etc. have Rule Boxes.)",
    "You may play only 1 Supporter card during your turn."
  ],
  "attacks": []
},
  {
  "id": "sv4pt5-39",
  "name": "Dachsbun",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 1"
  ],
  "types": [
    "Psychic"
  ],
  "hp": "90",
  "rarity": "Uncommon",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/39_hires.png",
  "marketPrice": 0.09,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Psychic",
        "Colorless",
        "Colorless"
      ],
      "name": "Headbutt Bounce",
      "damage": "100",
      "text": ""
    }
  ]
},
  {
  "id": "sv4pt5-90",
  "name": "Technical Machine: Crisis Punch",
  "supertype": "Trainer",
  "subtypes": [
    "Pokémon Tool"
  ],
  "types": [],
  "hp": "",
  "rarity": "Uncommon",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/90_hires.png",
  "marketPrice": 0.09,
  "rules": [
    "The Pokémon this card is attached to can use the attack on this card. (You still need the necessary Energy to use this attack.) If this card is attached to 1 of your Pokémon, discard it at the end of your turn.",
    "You may attach any number of Pokémon Tools to your Pokémon during your turn. You may attach only 1 Pokémon Tool to each Pokémon, and it stays attached."
  ],
  "attacks": [
    {
      "cost": [
        "Colorless",
        "Colorless",
        "Colorless"
      ],
      "name": "Crisis Punch",
      "damage": "280",
      "text": "You can use this attack only when your opponent has exactly 1 Prize card remaining."
    }
  ]
},
  {
  "id": "sv4pt5-41",
  "name": "Flittle",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Psychic"
  ],
  "hp": "30",
  "rarity": "Common",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/41_hires.png",
  "marketPrice": 0.04,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Psychic",
        "Colorless"
      ],
      "name": "Psy Bolt",
      "damage": "20",
      "text": "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed."
    }
  ]
},
  {
  "id": "sv4pt5-91",
  "name": "Ultra Ball",
  "supertype": "Trainer",
  "subtypes": [
    "Item"
  ],
  "types": [],
  "hp": "",
  "rarity": "Uncommon",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/91_hires.png",
  "marketPrice": 0.21,
  "rules": [
    "You can use this card only if you discard 2 other cards from your hand.",
    "Search your deck for a Pokémon, reveal it, and put it into your hand. Then, shuffle your deck.",
    "You may play any number of Item cards during your turn."
  ],
  "attacks": []
},
  {
  "id": "sv4pt5-44",
  "name": "Gimmighoul",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Psychic"
  ],
  "hp": "50",
  "rarity": "Common",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/44_hires.png",
  "marketPrice": 0.08,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Colorless"
      ],
      "name": "Chest-ouflage",
      "damage": "",
      "text": "Flip a coin. If heads, during your opponent's next turn, prevent all damage from and effects of attacks done to this Pokémon."
    },
    {
      "cost": [
        "Colorless"
      ],
      "name": "Ram",
      "damage": "10",
      "text": ""
    }
  ]
},
  {
  "id": "sv4pt5-95",
  "name": "Scyther",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Grass"
  ],
  "hp": "80",
  "rarity": "Shiny Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/95_hires.png",
  "marketPrice": 10.76,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Colorless"
      ],
      "name": "Agility",
      "damage": "10",
      "text": "Flip a coin. If heads, during your opponent's next turn, prevent all damage from and effects of attacks done to this Pokémon."
    },
    {
      "cost": [
        "Colorless",
        "Colorless"
      ],
      "name": "Cut",
      "damage": "20",
      "text": ""
    }
  ]
},
  {
  "id": "sv4pt5-50",
  "name": "Barboach",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Fighting"
  ],
  "hp": "70",
  "rarity": "Common",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/50_hires.png",
  "marketPrice": 0.08,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Fighting"
      ],
      "name": "Hide",
      "damage": "",
      "text": "Flip a coin. If heads, during your opponent's next turn, prevent all damage from and effects of attacks done to this Pokémon."
    },
    {
      "cost": [
        "Fighting",
        "Colorless"
      ],
      "name": "Mud-Slap",
      "damage": "20",
      "text": ""
    }
  ]
},
  {
  "id": "sv4pt5-99",
  "name": "Pineco",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Grass"
  ],
  "hp": "70",
  "rarity": "Shiny Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/99_hires.png",
  "marketPrice": 2.51,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Grass",
        "Grass"
      ],
      "name": "Rollout",
      "damage": "30",
      "text": ""
    }
  ]
},
  {
  "id": "sv4pt5-51",
  "name": "Clobbopus",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Fighting"
  ],
  "hp": "70",
  "rarity": "Common",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/51_hires.png",
  "marketPrice": 0.06,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Fighting"
      ],
      "name": "Feint",
      "damage": "20",
      "text": "This attack's damage isn't affected by Resistance."
    }
  ]
},
  {
  "id": "sv4pt5-100",
  "name": "Snover",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Grass"
  ],
  "hp": "90",
  "rarity": "Shiny Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/100_hires.png",
  "marketPrice": 2.63,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Grass",
        "Colorless"
      ],
      "name": "Corkscrew Punch",
      "damage": "30",
      "text": ""
    }
  ]
},
  {
  "id": "sv4pt5-52",
  "name": "Grapploct",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 1"
  ],
  "types": [
    "Fighting"
  ],
  "hp": "120",
  "rarity": "Uncommon",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/52_hires.png",
  "marketPrice": 0.06,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Fighting"
      ],
      "name": "Slow-Acting Syncope",
      "damage": "30",
      "text": "At the end of your opponent's next turn, the Defending Pokémon will be Knocked Out."
    },
    {
      "cost": [
        "Fighting",
        "Fighting",
        "Colorless"
      ],
      "name": "Mach Cross",
      "damage": "120",
      "text": ""
    }
  ]
},
  {
  "id": "sv4pt5-101",
  "name": "Abomasnow",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 1"
  ],
  "types": [
    "Grass"
  ],
  "hp": "150",
  "rarity": "Shiny Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/101_hires.png",
  "marketPrice": 3.18,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Grass",
        "Grass",
        "Colorless"
      ],
      "name": "Magnum Punch",
      "damage": "110",
      "text": ""
    }
  ]
},
  {
  "id": "sv4pt5-58",
  "name": "Paldean Wooper",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Darkness"
  ],
  "hp": "60",
  "rarity": "Common",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/58_hires.png",
  "marketPrice": 0.08,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Colorless"
      ],
      "name": "Find a Home",
      "damage": "",
      "text": "Search your deck for a Stadium card, reveal it, and put it into your hand. Then, shuffle your deck."
    },
    {
      "cost": [
        "Darkness"
      ],
      "name": "Ram",
      "damage": "10",
      "text": ""
    }
  ]
},
  {
  "id": "sv4pt5-64",
  "name": "Varoom",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Metal"
  ],
  "hp": "60",
  "rarity": "Common",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/64_hires.png",
  "marketPrice": 0.05,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Colorless"
      ],
      "name": "Rev",
      "damage": "",
      "text": "Put up to 2 Basic Energy cards from your discard pile into your hand."
    },
    {
      "cost": [
        "Metal",
        "Colorless"
      ],
      "name": "Headbutt",
      "damage": "20",
      "text": ""
    }
  ]
},
  {
  "id": "sv4pt5-70",
  "name": "Cyclizar",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Dragon"
  ],
  "hp": "120",
  "rarity": "Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/70_hires.png",
  "marketPrice": 0.08,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Grass",
        "Darkness",
        "Colorless"
      ],
      "name": "Acceleration Drive",
      "damage": "100",
      "text": "Flip a coin. If heads, during your opponent's next turn, prevent all damage from and effects of attacks done to this Pokémon."
    }
  ]
},
  {
  "id": "sv4pt5-72",
  "name": "Oinkologne",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 1"
  ],
  "types": [
    "Colorless"
  ],
  "hp": "130",
  "rarity": "Uncommon",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/72_hires.png",
  "marketPrice": 0.07,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Colorless",
        "Colorless"
      ],
      "name": "Finest Selection",
      "damage": "",
      "text": "Flip 3 coins. Put a number of cards up to the number of heads from your discard pile into your hand."
    },
    {
      "cost": [
        "Colorless",
        "Colorless",
        "Colorless"
      ],
      "name": "Perfume Press",
      "damage": "70",
      "text": "Your opponent's Active Pokémon is now Confused."
    }
  ]
},
  {
  "id": "sv4pt5-73",
  "name": "Tandemaus",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Colorless"
  ],
  "hp": "30",
  "rarity": "Common",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/73_hires.png",
  "marketPrice": 0.17,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Colorless"
      ],
      "name": "Collect",
      "damage": "",
      "text": "Draw 2 cards."
    },
    {
      "cost": [
        "Colorless",
        "Colorless",
        "Colorless"
      ],
      "name": "Gentle Slap",
      "damage": "30",
      "text": ""
    }
  ]
},
  {
  "id": "sv4pt5-78",
  "name": "Clive",
  "supertype": "Trainer",
  "subtypes": [
    "Supporter"
  ],
  "types": [],
  "hp": "",
  "rarity": "Uncommon",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/78_hires.png",
  "marketPrice": 0.05,
  "rules": [
    "Your opponent reveals their hand, and you draw 2 cards for each Supporter card you find there.",
    "You may play only 1 Supporter card during your turn."
  ],
  "attacks": []
},
  {
  "id": "sv4pt5-82",
  "name": "Nemona",
  "supertype": "Trainer",
  "subtypes": [
    "Supporter"
  ],
  "types": [],
  "hp": "",
  "rarity": "Common",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/82_hires.png",
  "marketPrice": 0.08,
  "rules": [
    "Draw 3 cards.",
    "You may play only 1 Supporter card during your turn."
  ],
  "attacks": []
},
  {
  "id": "sv4pt5-87",
  "name": "Professor's Research",
  "supertype": "Trainer",
  "subtypes": [
    "Supporter"
  ],
  "types": [],
  "hp": "",
  "rarity": "Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/87_hires.png",
  "marketPrice": 0.09,
  "rules": [
    "Discard your hand and draw 7 cards.",
    "You may play only 1 Supporter card during your turn."
  ],
  "attacks": []
},
  {
  "id": "sv4pt5-88",
  "name": "Professor's Research",
  "supertype": "Trainer",
  "subtypes": [
    "Supporter"
  ],
  "types": [],
  "hp": "",
  "rarity": "Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/88_hires.png",
  "marketPrice": 0.2,
  "rules": [
    "Discard your hand and draw 7 cards.",
    "You may play only 1 Supporter card during your turn."
  ],
  "attacks": []
},
  {
  "id": "sv4pt5-89",
  "name": "Rare Candy",
  "supertype": "Trainer",
  "subtypes": [
    "Item"
  ],
  "types": [],
  "hp": "",
  "rarity": "Common",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/89_hires.png",
  "marketPrice": 0.18,
  "rules": [
    "Choose 1 of your Basic Pokémon in play. If you have a Stage 2 card in your hand that evolves from that Pokémon, put that card onto the Basic Pokémon to evolve it, skipping the Stage 1. You can't use this card during your first turn or on a Basic Pokémon that was put into play this turn.",
    "You may play any number of Item cards during your turn."
  ],
  "attacks": []
},
  {
  "id": "sv4pt5-93",
  "name": "Gloom",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 1"
  ],
  "types": [
    "Grass"
  ],
  "hp": "70",
  "rarity": "Shiny Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/93_hires.png",
  "marketPrice": 5.24,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Colorless",
        "Colorless"
      ],
      "name": "Drool",
      "damage": "30",
      "text": ""
    }
  ]
},
  {
  "id": "sv4pt5-102",
  "name": "Smoliv",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Grass"
  ],
  "hp": "60",
  "rarity": "Shiny Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/102_hires.png",
  "marketPrice": 4.06,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Grass"
      ],
      "name": "Nutrients",
      "damage": "",
      "text": "Heal 30 damage from 1 of your Pokémon."
    },
    {
      "cost": [
        "Grass",
        "Colorless"
      ],
      "name": "Spray Fluid",
      "damage": "20",
      "text": ""
    }
  ]
},
  {
  "id": "sv4pt5-27",
  "name": "Ralts",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Psychic"
  ],
  "hp": "70",
  "rarity": "Common",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/27_hires.png",
  "marketPrice": 0.09,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Psychic",
        "Colorless"
      ],
      "name": "Psyshot",
      "damage": "30",
      "text": ""
    }
  ]
},
  {
  "id": "sv4pt5-31",
  "name": "Mime Jr.",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Psychic"
  ],
  "hp": "30",
  "rarity": "Common",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/31_hires.png",
  "marketPrice": 0.19,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Free"
      ],
      "name": "Mimed Games",
      "damage": "",
      "text": "Your opponent chooses an attack from 1 of their Pokémon in play. Use the chosen attack as this attack."
    }
  ]
},
  {
  "id": "sv4pt5-34",
  "name": "Cottonee",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Psychic"
  ],
  "hp": "60",
  "rarity": "Common",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/34_hires.png",
  "marketPrice": 0.04,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Psychic"
      ],
      "name": "Fickle Attack",
      "damage": "30",
      "text": "Flip a coin. If tails, this attack does nothing."
    }
  ]
},
  {
  "id": "sv4pt5-40",
  "name": "Ceruledge",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 1"
  ],
  "types": [
    "Psychic"
  ],
  "hp": "140",
  "rarity": "Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/40_hires.png",
  "marketPrice": 0.09,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Colorless",
        "Colorless"
      ],
      "name": "Life Sucker",
      "damage": "50",
      "text": "Heal 30 damage from this Pokémon."
    },
    {
      "cost": [
        "Psychic",
        "Colorless",
        "Colorless"
      ],
      "name": "Fighting Sword",
      "damage": "100+",
      "text": "If your opponent's Active Pokémon is a Pokémon ex or Pokémon V, this attack does 100 more damage."
    }
  ]
},
  {
  "id": "sv4pt5-46",
  "name": "Primeape",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 1"
  ],
  "types": [
    "Fighting"
  ],
  "hp": "90",
  "rarity": "Uncommon",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/46_hires.png",
  "marketPrice": 0.06,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Fighting"
      ],
      "name": "Raging Punch",
      "damage": "70",
      "text": "This Pokémon also does 20 damage to itself."
    }
  ]
},
  {
  "id": "sv4pt5-49",
  "name": "Donphan",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 1"
  ],
  "types": [
    "Fighting"
  ],
  "hp": "150",
  "rarity": "Uncommon",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/49_hires.png",
  "marketPrice": 0.08,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Colorless",
        "Colorless"
      ],
      "name": "Cragalanche",
      "damage": "30",
      "text": "Discard the top 2 cards of your opponent's deck."
    },
    {
      "cost": [
        "Fighting",
        "Fighting",
        "Colorless"
      ],
      "name": "Powerful Spin",
      "damage": "160",
      "text": "During your next turn, this Pokémon can't attack."
    }
  ]
},
  {
  "id": "sv4pt5-53",
  "name": "Great Tusk ex",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic",
    "ex",
    "Ancient"
  ],
  "types": [
    "Fighting"
  ],
  "hp": "250",
  "rarity": "Double Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/53_hires.png",
  "marketPrice": 0.53,
  "rules": [
    "Pokémon ex rule: When your Pokémon ex is Knocked Out, your opponent takes 2 Prize cards."
  ],
  "attacks": [
    {
      "cost": [
        "Fighting",
        "Colorless",
        "Colorless",
        "Colorless"
      ],
      "name": "Great Bash",
      "damage": "260",
      "text": "This attack's damage isn't affected by any effects on your opponent's Active Pokémon."
    }
  ]
},
  {
  "id": "sv4pt5-61",
  "name": "Scrafty",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 1"
  ],
  "types": [
    "Darkness"
  ],
  "hp": "120",
  "rarity": "Uncommon",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/61_hires.png",
  "marketPrice": 0.05,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Colorless"
      ],
      "name": "Lambaste",
      "damage": "30",
      "text": "If the Defending Pokémon is a Basic Pokémon, it can't attack during your opponent's next turn."
    },
    {
      "cost": [
        "Darkness",
        "Darkness",
        "Colorless"
      ],
      "name": "Headbang",
      "damage": "130",
      "text": ""
    }
  ]
},
  {
  "id": "sv4pt5-65",
  "name": "Revavroom",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 1"
  ],
  "types": [
    "Metal"
  ],
  "hp": "140",
  "rarity": "Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/65_hires.png",
  "marketPrice": 0.06,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Metal",
        "Colorless",
        "Colorless",
        "Colorless"
      ],
      "name": "Knock Away",
      "damage": "90+",
      "text": "Flip a coin. If heads, this attack does 90 more damage."
    }
  ]
},
  {
  "id": "sv4pt5-68",
  "name": "Noibat",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Dragon"
  ],
  "hp": "70",
  "rarity": "Common",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/68_hires.png",
  "marketPrice": 0.04,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Psychic",
        "Darkness"
      ],
      "name": "Gust",
      "damage": "40",
      "text": ""
    }
  ]
},
  {
  "id": "sv4pt5-69",
  "name": "Noivern ex",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 1",
    "ex"
  ],
  "types": [
    "Dragon"
  ],
  "hp": "260",
  "rarity": "Double Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/69_hires.png",
  "marketPrice": 0.64,
  "rules": [
    "Pokémon ex rule: When your Pokémon ex is Knocked Out, your opponent takes 2 Prize cards."
  ],
  "attacks": [
    {
      "cost": [
        "Colorless",
        "Colorless"
      ],
      "name": "Covert Flight",
      "damage": "70",
      "text": "During your opponent's next turn, prevent all damage done to this Pokémon by attacks from Basic Pokémon."
    },
    {
      "cost": [
        "Psychic",
        "Darkness"
      ],
      "name": "Dominating Echo",
      "damage": "140",
      "text": "During your opponent's next turn, they can't play any Special Energy or Stadium cards from their hand."
    }
  ]
},
  {
  "id": "sv4pt5-76",
  "name": "Artazon",
  "supertype": "Trainer",
  "subtypes": [
    "Stadium"
  ],
  "types": [],
  "hp": "",
  "rarity": "Uncommon",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/76_hires.png",
  "marketPrice": 0.16,
  "rules": [
    "Once during each player's turn, that player may search their deck for a Basic Pokémon that doesn't have a Rule Box and put it onto their Bench. Then, that player shuffles their deck. (Pokémon ex, Pokémon V, etc. have Rule Boxes.)",
    "You may play only 1 Stadium card during your turn. Put it next to the Active Spot, and discard it if another Stadium comes into play. A Stadium with the same name can't be played."
  ],
  "attacks": []
},
  {
  "id": "sv4pt5-77",
  "name": "Atticus",
  "supertype": "Trainer",
  "subtypes": [
    "Supporter"
  ],
  "types": [],
  "hp": "",
  "rarity": "Uncommon",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/77_hires.png",
  "marketPrice": 0.1,
  "rules": [
    "You can use this card only if your opponent's Active Pokémon is Poisoned.",
    "Shuffle your hand into your deck. Then, draw 7 cards.",
    "You may play only 1 Supporter card during your turn."
  ],
  "attacks": []
},
  {
  "id": "sv4pt5-92",
  "name": "Oddish",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Grass"
  ],
  "hp": "60",
  "rarity": "Shiny Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/92_hires.png",
  "marketPrice": 14.79,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Colorless",
        "Colorless"
      ],
      "name": "Razor Leaf",
      "damage": "20",
      "text": ""
    }
  ]
},
  {
  "id": "sv4pt5-96",
  "name": "Hoppip",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Grass"
  ],
  "hp": "50",
  "rarity": "Shiny Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/96_hires.png",
  "marketPrice": 3.41,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Grass"
      ],
      "name": "Splashing Dodge",
      "damage": "10",
      "text": "Flip a coin. If heads, during your opponent's next turn, prevent all damage from and effects of attacks done to this Pokémon."
    }
  ]
},
  {
  "id": "sv4pt5-97",
  "name": "Skiploom",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 1"
  ],
  "types": [
    "Grass"
  ],
  "hp": "70",
  "rarity": "Shiny Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/97_hires.png",
  "marketPrice": 2.87,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Grass"
      ],
      "name": "Flowery Zephyr",
      "damage": "30",
      "text": "This attack also does 30 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"
    }
  ]
},
  {
  "id": "sv4pt5-98",
  "name": "Jumpluff",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 2"
  ],
  "types": [
    "Grass"
  ],
  "hp": "90",
  "rarity": "Shiny Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/98_hires.png",
  "marketPrice": 4.33,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Grass"
      ],
      "name": "Fluffy Breeze",
      "damage": "60",
      "text": "This attack also does 30 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"
    }
  ]
},
  {
  "id": "sv4pt5-103",
  "name": "Dolliv",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 1"
  ],
  "types": [
    "Grass"
  ],
  "hp": "90",
  "rarity": "Shiny Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/103_hires.png",
  "marketPrice": 2.83,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Colorless"
      ],
      "name": "Slap",
      "damage": "20",
      "text": ""
    },
    {
      "cost": [
        "Grass",
        "Colorless"
      ],
      "name": "Apply Oil",
      "damage": "40",
      "text": "During your opponent's next turn, if the Defending Pokémon tries to attack, your opponent flips a coin. If tails, that attack doesn't happen."
    }
  ]
},
  {
  "id": "sv4pt5-104",
  "name": "Arboliva",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 2"
  ],
  "types": [
    "Grass"
  ],
  "hp": "150",
  "rarity": "Shiny Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/104_hires.png",
  "marketPrice": 2.72,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Grass",
        "Grass",
        "Colorless"
      ],
      "name": "Solar Beam",
      "damage": "150",
      "text": ""
    }
  ]
},
  {
  "id": "sv4pt5-28",
  "name": "Kirlia",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 1"
  ],
  "types": [
    "Psychic"
  ],
  "hp": "90",
  "rarity": "Uncommon",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/28_hires.png",
  "marketPrice": 0.07,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Psychic",
        "Colorless"
      ],
      "name": "Magical Shot",
      "damage": "30",
      "text": ""
    },
    {
      "cost": [
        "Psychic",
        "Psychic",
        "Colorless"
      ],
      "name": "Psychic",
      "damage": "60+",
      "text": "This attack does 20 more damage for each Energy attached to your opponent's Active Pokémon."
    }
  ]
},
  {
  "id": "sv4pt5-35",
  "name": "Whimsicott",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 1"
  ],
  "types": [
    "Psychic"
  ],
  "hp": "90",
  "rarity": "Uncommon",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/35_hires.png",
  "marketPrice": 0.06,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Psychic"
      ],
      "name": "Fairy Wind",
      "damage": "50",
      "text": ""
    }
  ]
},
  {
  "id": "sv4pt5-37",
  "name": "Mimikyu",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Psychic"
  ],
  "hp": "70",
  "rarity": "Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/37_hires.png",
  "marketPrice": 0.3,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Psychic",
        "Colorless"
      ],
      "name": "Ghost Eye",
      "damage": "",
      "text": "Put 7 damage counters on your opponent's Active Pokémon."
    }
  ]
},
  {
  "id": "sv4pt5-42",
  "name": "Greavard",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Psychic"
  ],
  "hp": "70",
  "rarity": "Common",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/42_hires.png",
  "marketPrice": 0.09,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Psychic"
      ],
      "name": "Graveyard Gamboling",
      "damage": "10×",
      "text": "This attack does 10 damage for each Psychic Pokémon in your discard pile."
    }
  ]
},
  {
  "id": "sv4pt5-45",
  "name": "Mankey",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Fighting"
  ],
  "hp": "60",
  "rarity": "Common",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/45_hires.png",
  "marketPrice": 0.07,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Fighting"
      ],
      "name": "Monkey Beatdown",
      "damage": "30",
      "text": "This Pokémon also does 10 damage to itself."
    }
  ]
},
  {
  "id": "sv4pt5-48",
  "name": "Phanpy",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Fighting"
  ],
  "hp": "80",
  "rarity": "Common",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/48_hires.png",
  "marketPrice": 0.05,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Colorless",
        "Colorless"
      ],
      "name": "Strength",
      "damage": "30",
      "text": ""
    },
    {
      "cost": [
        "Fighting",
        "Fighting",
        "Colorless"
      ],
      "name": "Rolling Tackle",
      "damage": "60",
      "text": ""
    }
  ]
},
  {
  "id": "sv4pt5-54",
  "name": "Charizard ex",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 2",
    "Tera",
    "ex"
  ],
  "types": [
    "Darkness"
  ],
  "hp": "330",
  "rarity": "Double Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/54_hires.png",
  "marketPrice": 5.41,
  "rules": [
    "Tera: As long as this Pokémon is on your Bench, prevent all damage done to this Pokémon by attacks (both yours and your opponent's).",
    "Pokémon ex rule: When your Pokémon ex is Knocked Out, your opponent takes 2 Prize cards."
  ],
  "attacks": [
    {
      "cost": [
        "Fire",
        "Fire"
      ],
      "name": "Burning Darkness",
      "damage": "180+",
      "text": "This attack does 30 more damage for each Prize card your opponent has taken."
    }
  ]
},
  {
  "id": "sv4pt5-55",
  "name": "Gastly",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Darkness"
  ],
  "hp": "50",
  "rarity": "Common",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/55_hires.png",
  "marketPrice": 0.05,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Colorless"
      ],
      "name": "Allure",
      "damage": "",
      "text": "Draw a card."
    },
    {
      "cost": [
        "Darkness",
        "Colorless"
      ],
      "name": "Will-O-Wisp",
      "damage": "20",
      "text": ""
    }
  ]
},
  {
  "id": "sv4pt5-56",
  "name": "Haunter",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 1"
  ],
  "types": [
    "Darkness"
  ],
  "hp": "80",
  "rarity": "Common",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/56_hires.png",
  "marketPrice": 0.1,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Darkness",
        "Colorless"
      ],
      "name": "Dark Slumber",
      "damage": "40",
      "text": "Your opponent's Active Pokémon is now Asleep."
    }
  ]
},
  {
  "id": "sv4pt5-57",
  "name": "Gengar",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 2"
  ],
  "types": [
    "Darkness"
  ],
  "hp": "130",
  "rarity": "Uncommon",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/57_hires.png",
  "marketPrice": 0.28,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Darkness",
        "Colorless"
      ],
      "name": "Nightmare",
      "damage": "100",
      "text": "Your opponent's Active Pokémon is now Asleep."
    }
  ]
},
  {
  "id": "sv4pt5-59",
  "name": "Paldean Clodsire ex",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 1",
    "ex"
  ],
  "types": [
    "Darkness"
  ],
  "hp": "280",
  "rarity": "Double Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/59_hires.png",
  "marketPrice": 0.67,
  "rules": [
    "Pokémon ex rule: When your Pokémon ex is Knocked Out, your opponent takes 2 Prize cards."
  ],
  "attacks": [
    {
      "cost": [
        "Darkness",
        "Colorless",
        "Colorless"
      ],
      "name": "Needle Bone",
      "damage": "200",
      "text": "Flip a coin. If tails, during your next turn, this Pokémon can't attack."
    }
  ]
},
  {
  "id": "sv4pt5-62",
  "name": "Maschiff",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Darkness"
  ],
  "hp": "60",
  "rarity": "Common",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/62_hires.png",
  "marketPrice": 0.04,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Darkness"
      ],
      "name": "Ambush",
      "damage": "10+",
      "text": "Flip a coin. If heads, this attack does 20 more damage."
    }
  ]
},
  {
  "id": "sv4pt5-63",
  "name": "Mabosstiff",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 1"
  ],
  "types": [
    "Darkness"
  ],
  "hp": "130",
  "rarity": "Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/63_hires.png",
  "marketPrice": 0.19,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Darkness",
        "Darkness",
        "Colorless"
      ],
      "name": "Wild Tackle",
      "damage": "160",
      "text": "This Pokémon also does 30 damage to itself."
    }
  ]
},
  {
  "id": "sv4pt5-66",
  "name": "Iron Treads ex",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic",
    "ex",
    "Future"
  ],
  "types": [
    "Metal"
  ],
  "hp": "220",
  "rarity": "Double Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/66_hires.png",
  "marketPrice": 0.54,
  "rules": [
    "Pokémon ex rule: When your Pokémon ex is Knocked Out, your opponent takes 2 Prize cards."
  ],
  "attacks": [
    {
      "cost": [
        "Metal",
        "Metal",
        "Colorless"
      ],
      "name": "Iron-Clad Roll",
      "damage": "150",
      "text": "After doing damage, you may discard all Future Booster Energy Capsules from this Pokémon. If you do, during your opponent's next turn, this Pokémon takes 150 less damage from attacks (after applying Weakness and Resistance)."
    }
  ]
},
  {
  "id": "sv4pt5-67",
  "name": "Gholdengo",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 1"
  ],
  "types": [
    "Metal"
  ],
  "hp": "130",
  "rarity": "Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/67_hires.png",
  "marketPrice": 0.06,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Colorless"
      ],
      "name": "Lavish Hospitality",
      "damage": "",
      "text": "You may attach any number of Basic Metal Energy cards from your hand to your Pokémon in any way you like."
    },
    {
      "cost": [
        "Metal",
        "Colorless",
        "Colorless"
      ],
      "name": "Scintillating Surfing",
      "damage": "80×",
      "text": "Flip a coin for each Metal Energy attached to this Pokémon. This attack does 80 damage for each heads."
    }
  ]
},
  {
  "id": "sv4pt5-74",
  "name": "Maushold",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 1"
  ],
  "types": [
    "Colorless"
  ],
  "hp": "70",
  "rarity": "Uncommon",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/74_hires.png",
  "marketPrice": 0.15,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Colorless"
      ],
      "name": "Slap",
      "damage": "40",
      "text": ""
    },
    {
      "cost": [
        "Colorless",
        "Colorless"
      ],
      "name": "Family Attack",
      "damage": "70×",
      "text": "This attack does 70 damage for each of your Maushold in play."
    }
  ]
},
  {
  "id": "sv4pt5-75",
  "name": "Squawkabilly ex",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic",
    "ex"
  ],
  "types": [
    "Colorless"
  ],
  "hp": "160",
  "rarity": "Double Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/75_hires.png",
  "marketPrice": 0.59,
  "rules": [
    "Pokémon ex rule: When your Pokémon ex is Knocked Out, your opponent takes 2 Prize cards."
  ],
  "attacks": [
    {
      "cost": [
        "Colorless"
      ],
      "name": "Motivate",
      "damage": "20",
      "text": "Attach up to 2 Basic Energy cards from your discard pile to 1 of your Benched Pokémon."
    }
  ]
},
  {
  "id": "sv4pt5-80",
  "name": "Iono",
  "supertype": "Trainer",
  "subtypes": [
    "Supporter"
  ],
  "types": [],
  "hp": "",
  "rarity": "Uncommon",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/80_hires.png",
  "marketPrice": 0.24,
  "rules": [
    "Each player shuffles their hand and puts it on the bottom of their deck. If either player put any cards on the bottom of their deck in this way, each player draws a card for each of their remaining Prize cards.",
    "You may play only 1 Supporter card during your turn."
  ],
  "attacks": []
},
  {
  "id": "sv4pt5-81",
  "name": "Moonlit Hill",
  "supertype": "Trainer",
  "subtypes": [
    "Stadium"
  ],
  "types": [],
  "hp": "",
  "rarity": "Uncommon",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/81_hires.png",
  "marketPrice": 0.07,
  "rules": [
    "Once during each player's turn, that player may discard a Basic Psychic Energy card from their hand in order to heal 30 damage from each of their Pokémon.",
    "You may play only 1 Stadium card during your turn. Put it next to the Active Spot, and discard it if another Stadium comes into play. A Stadium with the same name can't be played."
  ],
  "attacks": []
},
  {
  "id": "sv4pt5-83",
  "name": "Nemona's Backpack",
  "supertype": "Trainer",
  "subtypes": [
    "Item"
  ],
  "types": [],
  "hp": "",
  "rarity": "Uncommon",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/83_hires.png",
  "marketPrice": 0.07,
  "rules": [
    "Put up to 2 Nemona cards from your discard pile into your hand.",
    "You may play any number of Item cards during your turn."
  ],
  "attacks": []
},
  {
  "id": "sv4pt5-94",
  "name": "Vileplume",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 2"
  ],
  "types": [
    "Grass"
  ],
  "hp": "140",
  "rarity": "Shiny Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/94_hires.png",
  "marketPrice": 7.78,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Grass",
        "Colorless",
        "Colorless"
      ],
      "name": "Solar Beam",
      "damage": "90",
      "text": ""
    }
  ]
},
  {
  "id": "sv4pt5-109",
  "name": "Charmander",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Fire"
  ],
  "hp": "70",
  "rarity": "Shiny Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/109_hires.png",
  "marketPrice": 63.49,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Fire"
      ],
      "name": "Blazing Destruction",
      "damage": "",
      "text": "Discard a Stadium in play."
    },
    {
      "cost": [
        "Fire",
        "Fire"
      ],
      "name": "Steady Firebreathing",
      "damage": "30",
      "text": ""
    }
  ]
},
  {
  "id": "sv4pt5-112",
  "name": "Entei",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Fire"
  ],
  "hp": "130",
  "rarity": "Shiny Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/112_hires.png",
  "marketPrice": 18.58,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Colorless",
        "Colorless",
        "Colorless"
      ],
      "name": "Blaze Ball",
      "damage": "60+",
      "text": "This attack does 20 more damage for each Fire Energy attached to this Pokémon."
    }
  ]
},
  {
  "id": "sv4pt5-113",
  "name": "Oricorio",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Fire"
  ],
  "hp": "90",
  "rarity": "Shiny Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/113_hires.png",
  "marketPrice": 3.14,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Fire",
        "Colorless"
      ],
      "name": "Flap",
      "damage": "30",
      "text": ""
    }
  ]
},
  {
  "id": "sv4pt5-108",
  "name": "Rellor",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Grass"
  ],
  "hp": "50",
  "rarity": "Shiny Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/108_hires.png",
  "marketPrice": 2.21,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Colorless",
        "Colorless"
      ],
      "name": "Ball Roll",
      "damage": "30×",
      "text": "Flip a coin until you get tails. This attack does 30 damage for each heads."
    }
  ]
},
  {
  "id": "sv4pt5-114",
  "name": "Charcadet",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Fire"
  ],
  "hp": "70",
  "rarity": "Shiny Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/114_hires.png",
  "marketPrice": 6.37,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Fire",
        "Fire",
        "Colorless"
      ],
      "name": "Heat Blast",
      "damage": "60",
      "text": ""
    }
  ]
},
  {
  "id": "sv4pt5-115",
  "name": "Armarouge",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 1"
  ],
  "types": [
    "Fire"
  ],
  "hp": "130",
  "rarity": "Shiny Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/115_hires.png",
  "marketPrice": 5.89,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Fire",
        "Fire",
        "Colorless"
      ],
      "name": "Flame Cannon",
      "damage": "90",
      "text": "Your opponent's Active Pokémon is now Burned."
    }
  ]
},
  {
  "id": "sv4pt5-116",
  "name": "Slowpoke",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Water"
  ],
  "hp": "70",
  "rarity": "Shiny Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/116_hires.png",
  "marketPrice": 23.26,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Colorless"
      ],
      "name": "Rest",
      "damage": "",
      "text": "This Pokémon is now Asleep. Heal 30 damage from it."
    },
    {
      "cost": [
        "Water",
        "Colorless"
      ],
      "name": "Headbutt",
      "damage": "20",
      "text": ""
    }
  ]
},
  {
  "id": "sv4pt5-117",
  "name": "Slowbro",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 1"
  ],
  "types": [
    "Water"
  ],
  "hp": "100",
  "rarity": "Shiny Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/117_hires.png",
  "marketPrice": 18.77,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Water",
        "Colorless"
      ],
      "name": "Bubble Drain",
      "damage": "60",
      "text": "Heal 30 damage from this Pokémon."
    }
  ]
},
  {
  "id": "sv4pt5-105",
  "name": "Toedscool",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Grass"
  ],
  "hp": "50",
  "rarity": "Shiny Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/105_hires.png",
  "marketPrice": 2.66,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Grass"
      ],
      "name": "Furious Kicks",
      "damage": "10×",
      "text": "Flip 3 coins. This attack does 10 damage for each heads."
    }
  ]
},
  {
  "id": "sv4pt5-110",
  "name": "Charmeleon",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 1"
  ],
  "types": [
    "Fire"
  ],
  "hp": "90",
  "rarity": "Shiny Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/110_hires.png",
  "marketPrice": 21.88,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Fire",
        "Fire"
      ],
      "name": "Combustion",
      "damage": "50",
      "text": ""
    }
  ]
},
  {
  "id": "sv4pt5-111",
  "name": "Paldean Tauros",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Fire"
  ],
  "hp": "130",
  "rarity": "Shiny Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/111_hires.png",
  "marketPrice": 3.56,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Colorless",
        "Colorless"
      ],
      "name": "Raging Horns",
      "damage": "20+",
      "text": "This attack does 10 more damage for each damage counter on this Pokémon."
    },
    {
      "cost": [
        "Fire",
        "Fire",
        "Colorless"
      ],
      "name": "Blaze Dash",
      "damage": "120",
      "text": "Discard an Energy from this Pokémon."
    }
  ]
},
  {
  "id": "sv4pt5-118",
  "name": "Staryu",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Water"
  ],
  "hp": "60",
  "rarity": "Shiny Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/118_hires.png",
  "marketPrice": 6.64,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Water",
        "Colorless"
      ],
      "name": "Swift",
      "damage": "30",
      "text": "This attack's damage isn't affected by Weakness or Resistance, or by any effects on your opponent's Active Pokémon."
    }
  ]
},
  {
  "id": "sv4pt5-106",
  "name": "Capsakid",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Grass"
  ],
  "hp": "70",
  "rarity": "Shiny Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/106_hires.png",
  "marketPrice": 2.59,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Colorless"
      ],
      "name": "Increasing Spice",
      "damage": "",
      "text": "Search your deck for a Basic Fire Energy card and attach it to this Pokémon. Then, shuffle your deck."
    },
    {
      "cost": [
        "Grass",
        "Colorless",
        "Colorless"
      ],
      "name": "Playful Kick",
      "damage": "50",
      "text": ""
    }
  ]
},
  {
  "id": "sv4pt5-107",
  "name": "Scovillain",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 1"
  ],
  "types": [
    "Grass"
  ],
  "hp": "110",
  "rarity": "Shiny Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/107_hires.png",
  "marketPrice": 2.23,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Grass",
        "Colorless",
        "Colorless"
      ],
      "name": "Spicy Headbutt",
      "damage": "110",
      "text": "This attack's damage isn't affected by Resistance."
    }
  ]
},
  {
  "id": "sv4pt5-119",
  "name": "Starmie",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 1"
  ],
  "types": [
    "Water"
  ],
  "hp": "90",
  "rarity": "Shiny Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/119_hires.png",
  "marketPrice": 10.07,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Water",
        "Colorless"
      ],
      "name": "Speed Attack",
      "damage": "50",
      "text": ""
    }
  ]
},
  {
  "id": "sv4pt5-122",
  "name": "Wugtrio",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 1"
  ],
  "types": [
    "Water"
  ],
  "hp": "90",
  "rarity": "Shiny Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/122_hires.png",
  "marketPrice": 2.82,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Water"
      ],
      "name": "Headbutt",
      "damage": "30",
      "text": ""
    },
    {
      "cost": [
        "Colorless",
        "Colorless",
        "Colorless"
      ],
      "name": "Undersea Tunnel",
      "damage": "",
      "text": "Flip 3 coins. For each heads, discard the top 3 cards of your opponent's deck."
    }
  ]
},
  {
  "id": "sv4pt5-124",
  "name": "Palafin",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 1"
  ],
  "types": [
    "Water"
  ],
  "hp": "150",
  "rarity": "Shiny Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/124_hires.png",
  "marketPrice": 2.89,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Water"
      ],
      "name": "Jet Punch",
      "damage": "30",
      "text": "This attack also does 30 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"
    },
    {
      "cost": [
        "Water",
        "Water"
      ],
      "name": "Justice Kick",
      "damage": "210",
      "text": "If this Pokémon didn't move from the Bench to the Active Spot this turn, this attack does nothing."
    }
  ]
},
  {
  "id": "sv4pt5-128",
  "name": "Frigibax",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Water"
  ],
  "hp": "70",
  "rarity": "Shiny Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/128_hires.png",
  "marketPrice": 1,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Water"
      ],
      "name": "Collect",
      "damage": "",
      "text": "Draw a card."
    },
    {
      "cost": [
        "Water",
        "Colorless"
      ],
      "name": "Beat",
      "damage": "20",
      "text": ""
    }
  ]
},
  {
  "id": "sv4pt5-134",
  "name": "Electrode",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 1"
  ],
  "types": [
    "Lightning"
  ],
  "hp": "90",
  "rarity": "Shiny Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/134_hires.png",
  "marketPrice": 4.18,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Lightning"
      ],
      "name": "Bang Boom Chain",
      "damage": "20+",
      "text": "Before doing damage, you may discard any number of Pokémon Tools from your Pokémon. This attack does 40 more damage for each card you discarded in this way."
    },
    {
      "cost": [
        "Lightning",
        "Colorless"
      ],
      "name": "Electro Ball",
      "damage": "70",
      "text": ""
    }
  ]
},
  {
  "id": "sv4pt5-136",
  "name": "Luxio",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 1"
  ],
  "types": [
    "Lightning"
  ],
  "hp": "90",
  "rarity": "Shiny Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/136_hires.png",
  "marketPrice": 8.48,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Lightning"
      ],
      "name": "Zap Kick",
      "damage": "30",
      "text": ""
    },
    {
      "cost": [
        "Lightning",
        "Colorless",
        "Colorless"
      ],
      "name": "Head Bolt",
      "damage": "60",
      "text": ""
    }
  ]
},
  {
  "id": "sv4pt5-139",
  "name": "Thundurus",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Lightning"
  ],
  "hp": "110",
  "rarity": "Shiny Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/139_hires.png",
  "marketPrice": 2.65,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Lightning",
        "Lightning"
      ],
      "name": "Gigantic Bolt",
      "damage": "140",
      "text": "This Pokémon also does 90 damage to itself."
    }
  ]
},
  {
  "id": "sv4pt5-127",
  "name": "Tatsugiri",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Water"
  ],
  "hp": "70",
  "rarity": "Shiny Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/127_hires.png",
  "marketPrice": 7.26,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Water"
      ],
      "name": "Mise en Place",
      "damage": "",
      "text": "Search your deck for up to 2 Basic Water Energy cards and attach them to 1 of your Basic Pokémon. Then, shuffle your deck."
    },
    {
      "cost": [
        "Water"
      ],
      "name": "Curl Up",
      "damage": "30",
      "text": "Put this Pokémon and all attached cards into your hand."
    }
  ]
},
  {
  "id": "sv4pt5-129",
  "name": "Arctibax",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 1"
  ],
  "types": [
    "Water"
  ],
  "hp": "90",
  "rarity": "Shiny Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/129_hires.png",
  "marketPrice": 3.72,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Water",
        "Colorless"
      ],
      "name": "Sharp Fin",
      "damage": "40",
      "text": ""
    },
    {
      "cost": [
        "Water",
        "Water",
        "Colorless"
      ],
      "name": "Frost Smash",
      "damage": "80",
      "text": ""
    }
  ]
},
  {
  "id": "sv4pt5-130",
  "name": "Baxcalibur",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 2"
  ],
  "types": [
    "Water"
  ],
  "hp": "160",
  "rarity": "Shiny Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/130_hires.png",
  "marketPrice": 4.75,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Water",
        "Water",
        "Colorless"
      ],
      "name": "Buster Tail",
      "damage": "130",
      "text": ""
    }
  ]
},
  {
  "id": "sv4pt5-133",
  "name": "Voltorb",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Lightning"
  ],
  "hp": "60",
  "rarity": "Shiny Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/133_hires.png",
  "marketPrice": 5.24,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Lightning"
      ],
      "name": "Tumbling Attack",
      "damage": "10+",
      "text": "Flip a coin. If heads, this attack does 20 more damage."
    }
  ]
},
  {
  "id": "sv4pt5-120",
  "name": "Paldean Tauros",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Water"
  ],
  "hp": "130",
  "rarity": "Shiny Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/120_hires.png",
  "marketPrice": 3.6,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Colorless",
        "Colorless"
      ],
      "name": "Raging Horns",
      "damage": "20+",
      "text": "This attack does 10 more damage for each damage counter on this Pokémon."
    },
    {
      "cost": [
        "Water",
        "Colorless",
        "Colorless"
      ],
      "name": "Aqua Dive",
      "damage": "",
      "text": "This attack does 60 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"
    }
  ]
},
  {
  "id": "sv4pt5-125",
  "name": "Veluza",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Water"
  ],
  "hp": "130",
  "rarity": "Shiny Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/125_hires.png",
  "marketPrice": 2.65,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Water"
      ],
      "name": "Ram",
      "damage": "20",
      "text": ""
    },
    {
      "cost": [
        "Water",
        "Colorless",
        "Colorless",
        "Colorless"
      ],
      "name": "Slim Screw",
      "damage": "120",
      "text": "If you have no cards in your hand, this attack can be used for Water."
    }
  ]
},
  {
  "id": "sv4pt5-126",
  "name": "Dondozo",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Water"
  ],
  "hp": "160",
  "rarity": "Shiny Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/126_hires.png",
  "marketPrice": 3.11,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Colorless",
        "Colorless"
      ],
      "name": "Release Rage",
      "damage": "50×",
      "text": "This attack does 50 damage for each Tatsugiri in your discard pile."
    },
    {
      "cost": [
        "Water",
        "Water",
        "Colorless",
        "Colorless"
      ],
      "name": "Heavy Splash",
      "damage": "120",
      "text": ""
    }
  ]
},
  {
  "id": "sv4pt5-131",
  "name": "Pikachu",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Lightning"
  ],
  "hp": "70",
  "rarity": "Shiny Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/131_hires.png",
  "marketPrice": 89.68,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Colorless"
      ],
      "name": "Growl",
      "damage": "",
      "text": "During your opponent's next turn, the Defending Pokémon's attacks do 20 less damage (before applying Weakness and Resistance)."
    },
    {
      "cost": [
        "Lightning",
        "Colorless"
      ],
      "name": "Pika Bolt",
      "damage": "30",
      "text": ""
    }
  ]
},
  {
  "id": "sv4pt5-138",
  "name": "Pachirisu",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Lightning"
  ],
  "hp": "70",
  "rarity": "Shiny Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/138_hires.png",
  "marketPrice": 11.71,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Lightning",
        "Colorless"
      ],
      "name": "Everyone Discharge",
      "damage": "10+",
      "text": "This attack does 20 more damage for each of your Benched Lightning Pokémon. This attack's damage isn't affected by Weakness."
    }
  ]
},
  {
  "id": "sv4pt5-121",
  "name": "Wiglett",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Water"
  ],
  "hp": "50",
  "rarity": "Shiny Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/121_hires.png",
  "marketPrice": 3.21,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Water"
      ],
      "name": "Twisting Strike",
      "damage": "10",
      "text": "Flip a coin. If heads, during your opponent's next turn, prevent all damage from and effects of attacks done to this Pokémon."
    }
  ]
},
  {
  "id": "sv4pt5-123",
  "name": "Finizen",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Water"
  ],
  "hp": "50",
  "rarity": "Shiny Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/123_hires.png",
  "marketPrice": 5.16,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Water"
      ],
      "name": "Valiant Evolution",
      "damage": "",
      "text": "Switch this Pokémon with 1 of your Benched Pokémon. If you do, search your deck for a card that evolves from this Pokémon and put it onto this Pokémon to evolve it. Then, shuffle your deck."
    },
    {
      "cost": [
        "Water"
      ],
      "name": "Razor Fin",
      "damage": "10",
      "text": ""
    }
  ]
},
  {
  "id": "sv4pt5-132",
  "name": "Raichu",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 1"
  ],
  "types": [
    "Lightning"
  ],
  "hp": "120",
  "rarity": "Shiny Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/132_hires.png",
  "marketPrice": 26.86,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Lightning",
        "Lightning",
        "Colorless"
      ],
      "name": "Thunder",
      "damage": "180",
      "text": "This Pokémon also does 50 damage to itself."
    }
  ]
},
  {
  "id": "sv4pt5-135",
  "name": "Shinx",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Lightning"
  ],
  "hp": "70",
  "rarity": "Shiny Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/135_hires.png",
  "marketPrice": 24.78,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Lightning"
      ],
      "name": "Wild Kick",
      "damage": "30",
      "text": "Flip a coin. If tails, this attack does nothing."
    }
  ]
},
  {
  "id": "sv4pt5-137",
  "name": "Luxray",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 2"
  ],
  "types": [
    "Lightning"
  ],
  "hp": "150",
  "rarity": "Shiny Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/137_hires.png",
  "marketPrice": 10.89,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Lightning",
        "Colorless",
        "Colorless"
      ],
      "name": "Wild Charge",
      "damage": "180",
      "text": "This Pokémon also does 20 damage to itself."
    }
  ]
},
  {
  "id": "sv4pt5-142",
  "name": "Pawmi",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Lightning"
  ],
  "hp": "60",
  "rarity": "Shiny Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/142_hires.png",
  "marketPrice": 5.01,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Colorless"
      ],
      "name": "Light Punch",
      "damage": "10",
      "text": ""
    },
    {
      "cost": [
        "Lightning",
        "Colorless"
      ],
      "name": "Zap Kick",
      "damage": "20",
      "text": ""
    }
  ]
},
  {
  "id": "sv4pt5-144",
  "name": "Pawmot",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 2"
  ],
  "types": [
    "Lightning"
  ],
  "hp": "130",
  "rarity": "Shiny Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/144_hires.png",
  "marketPrice": 3.77,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Lightning",
        "Lightning",
        "Colorless"
      ],
      "name": "Electro Paws",
      "damage": "230",
      "text": "Discard all Energy from this Pokémon."
    }
  ]
},
  {
  "id": "sv4pt5-145",
  "name": "Wattrel",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Lightning"
  ],
  "hp": "60",
  "rarity": "Shiny Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/145_hires.png",
  "marketPrice": 3.03,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Colorless"
      ],
      "name": "Peck",
      "damage": "10",
      "text": ""
    },
    {
      "cost": [
        "Colorless",
        "Colorless"
      ],
      "name": "United Wings",
      "damage": "20×",
      "text": "This attack does 20 damage for each Pokémon in your discard pile that has the United Wings attack."
    }
  ]
},
  {
  "id": "sv4pt5-141",
  "name": "Toxtricity",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 1"
  ],
  "types": [
    "Lightning"
  ],
  "hp": "140",
  "rarity": "Shiny Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/141_hires.png",
  "marketPrice": 3.32,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Lightning"
      ],
      "name": "Leer",
      "damage": "",
      "text": "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed."
    },
    {
      "cost": [
        "Lightning",
        "Colorless"
      ],
      "name": "Loud Mix",
      "damage": "50+",
      "text": "This attack does 30 more damage for each different type of Pokémon on your Bench."
    }
  ]
},
  {
  "id": "sv4pt5-146",
  "name": "Kilowattrel",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 1"
  ],
  "types": [
    "Lightning"
  ],
  "hp": "120",
  "rarity": "Shiny Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/146_hires.png",
  "marketPrice": 2.58,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Colorless"
      ],
      "name": "United Thunder",
      "damage": "",
      "text": "This attack does 10 damage for each Pokémon in your discard pile that has the United Wings attack to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"
    },
    {
      "cost": [
        "Lightning",
        "Colorless",
        "Colorless"
      ],
      "name": "Speed Wing",
      "damage": "90",
      "text": ""
    }
  ]
},
  {
  "id": "sv4pt5-140",
  "name": "Toxel",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Lightning"
  ],
  "hp": "70",
  "rarity": "Shiny Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/140_hires.png",
  "marketPrice": 3.92,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Lightning"
      ],
      "name": "Slight Intrusion",
      "damage": "30",
      "text": "This Pokémon also does 10 damage to itself."
    }
  ]
},
  {
  "id": "sv4pt5-143",
  "name": "Pawmo",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 1"
  ],
  "types": [
    "Lightning"
  ],
  "hp": "90",
  "rarity": "Shiny Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/143_hires.png",
  "marketPrice": 4.3,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Lightning"
      ],
      "name": "Thunder Shock",
      "damage": "30",
      "text": "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed."
    },
    {
      "cost": [
        "Lightning",
        "Lightning",
        "Colorless"
      ],
      "name": "Head Bolt",
      "damage": "70",
      "text": ""
    }
  ]
},
  {
  "id": "sv4pt5-147",
  "name": "Wigglytuff",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 1"
  ],
  "types": [
    "Psychic"
  ],
  "hp": "110",
  "rarity": "Shiny Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/147_hires.png",
  "marketPrice": 7.36,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Psychic",
        "Colorless",
        "Colorless"
      ],
      "name": "Magical Shot",
      "damage": "100",
      "text": ""
    }
  ]
},
  {
  "id": "sv4pt5-148",
  "name": "Abra",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Psychic"
  ],
  "hp": "50",
  "rarity": "Shiny Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/148_hires.png",
  "marketPrice": 19.25,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Psychic"
      ],
      "name": "Psyshot",
      "damage": "20",
      "text": ""
    }
  ]
},
  {
  "id": "sv4pt5-151",
  "name": "Natu",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Psychic"
  ],
  "hp": "50",
  "rarity": "Shiny Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/151_hires.png",
  "marketPrice": 2.99,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Psychic"
      ],
      "name": "Triple Strike",
      "damage": "10×",
      "text": "Flip 3 coins. This attack does 10 damage for each heads."
    }
  ]
},
  {
  "id": "sv4pt5-152",
  "name": "Xatu",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 1"
  ],
  "types": [
    "Psychic"
  ],
  "hp": "100",
  "rarity": "Shiny Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/152_hires.png",
  "marketPrice": 2.68,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Psychic",
        "Colorless",
        "Colorless"
      ],
      "name": "Super Psy Bolt",
      "damage": "80",
      "text": ""
    }
  ]
},
  {
  "id": "sv4pt5-153",
  "name": "Ralts",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Psychic"
  ],
  "hp": "70",
  "rarity": "Shiny Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/153_hires.png",
  "marketPrice": 11.38,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Psychic",
        "Colorless"
      ],
      "name": "Psyshot",
      "damage": "30",
      "text": ""
    }
  ]
},
  {
  "id": "sv4pt5-154",
  "name": "Kirlia",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 1"
  ],
  "types": [
    "Psychic"
  ],
  "hp": "90",
  "rarity": "Shiny Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/154_hires.png",
  "marketPrice": 7.78,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Psychic",
        "Colorless"
      ],
      "name": "Magical Shot",
      "damage": "30",
      "text": ""
    },
    {
      "cost": [
        "Psychic",
        "Psychic",
        "Colorless"
      ],
      "name": "Psychic",
      "damage": "60+",
      "text": "This attack does 20 more damage for each Energy attached to your opponent's Active Pokémon."
    }
  ]
},
  {
  "id": "sv4pt5-155",
  "name": "Drifloon",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Psychic"
  ],
  "hp": "70",
  "rarity": "Shiny Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/155_hires.png",
  "marketPrice": 5.42,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Colorless",
        "Colorless"
      ],
      "name": "Gust",
      "damage": "10",
      "text": ""
    },
    {
      "cost": [
        "Psychic",
        "Psychic"
      ],
      "name": "Balloon Blast",
      "damage": "30×",
      "text": "This attack does 30 damage for each damage counter on this Pokémon."
    }
  ]
},
  {
  "id": "sv4pt5-156",
  "name": "Drifblim",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 1"
  ],
  "types": [
    "Psychic"
  ],
  "hp": "110",
  "rarity": "Shiny Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/156_hires.png",
  "marketPrice": 3.79,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Colorless",
        "Colorless"
      ],
      "name": "Gust",
      "damage": "30",
      "text": ""
    },
    {
      "cost": [
        "Psychic",
        "Psychic",
        "Psychic"
      ],
      "name": "Curse Spreading",
      "damage": "",
      "text": "Put 8 damage counters on your opponent's Pokémon in any way you like."
    }
  ]
},
  {
  "id": "sv4pt5-158",
  "name": "Spiritomb",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Psychic"
  ],
  "hp": "60",
  "rarity": "Shiny Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/158_hires.png",
  "marketPrice": 5.44,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Colorless"
      ],
      "name": "Fade Out",
      "damage": "10",
      "text": "Put this Pokémon and all attached cards into your hand."
    }
  ]
},
  {
  "id": "sv4pt5-165",
  "name": "Tinkatink",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Psychic"
  ],
  "hp": "60",
  "rarity": "Shiny Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/165_hires.png",
  "marketPrice": 8.63,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Colorless"
      ],
      "name": "Scrap Pickup",
      "damage": "",
      "text": "Put an Item card from your discard pile into your hand."
    },
    {
      "cost": [
        "Psychic",
        "Colorless",
        "Colorless"
      ],
      "name": "Fairy Wind",
      "damage": "30",
      "text": ""
    }
  ]
},
  {
  "id": "sv4pt5-171",
  "name": "Annihilape",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 2"
  ],
  "types": [
    "Fighting"
  ],
  "hp": "140",
  "rarity": "Shiny Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/171_hires.png",
  "marketPrice": 3.74,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Fighting"
      ],
      "name": "Rage Fist",
      "damage": "70×",
      "text": "This attack does 70 damage for each Prize card your opponent has taken."
    },
    {
      "cost": [
        "Fighting",
        "Fighting"
      ],
      "name": "Dynamite Punch",
      "damage": "170",
      "text": "This Pokémon also does 50 damage to itself."
    }
  ]
},
  {
  "id": "sv4pt5-176",
  "name": "Nacli",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Fighting"
  ],
  "hp": "70",
  "rarity": "Shiny Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/176_hires.png",
  "marketPrice": 2.38,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Fighting"
      ],
      "name": "Salt Coating",
      "damage": "",
      "text": "Heal 20 damage from 1 of your Pokémon."
    },
    {
      "cost": [
        "Fighting",
        "Fighting"
      ],
      "name": "Tackle",
      "damage": "30",
      "text": ""
    }
  ]
},
  {
  "id": "sv4pt5-178",
  "name": "Garganacl",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 2"
  ],
  "types": [
    "Fighting"
  ],
  "hp": "180",
  "rarity": "Shiny Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/178_hires.png",
  "marketPrice": 2.38,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Fighting",
        "Fighting"
      ],
      "name": "Knocking Hammer",
      "damage": "130",
      "text": "Discard the top card of your opponent's deck."
    }
  ]
},
  {
  "id": "sv4pt5-180",
  "name": "Paldean Wooper",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Darkness"
  ],
  "hp": "60",
  "rarity": "Shiny Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/180_hires.png",
  "marketPrice": 11.22,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Colorless"
      ],
      "name": "Find a Home",
      "damage": "",
      "text": "Search your deck for a Stadium card, reveal it, and put it into your hand. Then, shuffle your deck."
    },
    {
      "cost": [
        "Darkness"
      ],
      "name": "Ram",
      "damage": "10",
      "text": ""
    }
  ]
},
  {
  "id": "sv4pt5-185",
  "name": "Pawniard",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Darkness"
  ],
  "hp": "70",
  "rarity": "Shiny Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/185_hires.png",
  "marketPrice": 2.68,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Colorless"
      ],
      "name": "Scratch",
      "damage": "10",
      "text": ""
    },
    {
      "cost": [
        "Darkness",
        "Colorless"
      ],
      "name": "Pierce",
      "damage": "20",
      "text": ""
    }
  ]
},
  {
  "id": "sv4pt5-186",
  "name": "Bisharp",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 1"
  ],
  "types": [
    "Darkness"
  ],
  "hp": "120",
  "rarity": "Shiny Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/186_hires.png",
  "marketPrice": 2.65,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Darkness"
      ],
      "name": "Dark Cutter",
      "damage": "40",
      "text": ""
    },
    {
      "cost": [
        "Darkness",
        "Colorless"
      ],
      "name": "Double-Edged Slash",
      "damage": "120",
      "text": "This Pokémon also does 30 damage to itself."
    }
  ]
},
  {
  "id": "sv4pt5-188",
  "name": "Mabosstiff",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 1"
  ],
  "types": [
    "Darkness"
  ],
  "hp": "130",
  "rarity": "Shiny Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/188_hires.png",
  "marketPrice": 2.04,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Darkness",
        "Darkness",
        "Colorless"
      ],
      "name": "Wild Tackle",
      "damage": "160",
      "text": "This Pokémon also does 30 damage to itself."
    }
  ]
},
  {
  "id": "sv4pt5-189",
  "name": "Shroodle",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Darkness"
  ],
  "hp": "50",
  "rarity": "Shiny Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/189_hires.png",
  "marketPrice": 2.28,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Colorless"
      ],
      "name": "Berry Search",
      "damage": "",
      "text": "Put a Basic Energy card from your discard pile into your hand."
    },
    {
      "cost": [
        "Darkness"
      ],
      "name": "Scratch",
      "damage": "10",
      "text": ""
    }
  ]
},
  {
  "id": "sv4pt5-190",
  "name": "Grafaiai",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 1"
  ],
  "types": [
    "Darkness"
  ],
  "hp": "90",
  "rarity": "Shiny Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/190_hires.png",
  "marketPrice": 2.49,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Darkness"
      ],
      "name": "Spit Poison",
      "damage": "",
      "text": "Your opponent's Active Pokémon is now Poisoned."
    },
    {
      "cost": [
        "Darkness"
      ],
      "name": "Colorful Graffiti",
      "damage": "40×",
      "text": "You may discard as many Basic Energy cards as you like from your hand. This attack does 40 damage for each type of Basic Energy you discarded in this way."
    }
  ]
},
  {
  "id": "sv4pt5-164",
  "name": "Flittle",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Psychic"
  ],
  "hp": "30",
  "rarity": "Shiny Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/164_hires.png",
  "marketPrice": 2.45,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Psychic",
        "Colorless"
      ],
      "name": "Psy Bolt",
      "damage": "20",
      "text": "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed."
    }
  ]
},
  {
  "id": "sv4pt5-167",
  "name": "Tinkaton",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 2"
  ],
  "types": [
    "Psychic"
  ],
  "hp": "140",
  "rarity": "Shiny Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/167_hires.png",
  "marketPrice": 9.66,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Psychic",
        "Colorless"
      ],
      "name": "Special Hammer",
      "damage": "90+",
      "text": "If this Pokémon has any Special Energy attached, this attack does 90 more damage."
    }
  ]
},
  {
  "id": "sv4pt5-183",
  "name": "Weavile",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 1"
  ],
  "types": [
    "Darkness"
  ],
  "hp": "110",
  "rarity": "Shiny Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/183_hires.png",
  "marketPrice": 3.12,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Darkness",
        "Colorless"
      ],
      "name": "Slashing Claw",
      "damage": "70",
      "text": ""
    }
  ]
},
  {
  "id": "sv4pt5-191",
  "name": "Scizor",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 1"
  ],
  "types": [
    "Metal"
  ],
  "hp": "140",
  "rarity": "Shiny Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/191_hires.png",
  "marketPrice": 10.08,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Metal"
      ],
      "name": "Punishing Scissors",
      "damage": "10+",
      "text": "This attack does 50 more damage for each of your opponent's Pokémon in play that has an Ability."
    },
    {
      "cost": [
        "Metal",
        "Metal"
      ],
      "name": "Cut",
      "damage": "70",
      "text": ""
    }
  ]
},
  {
  "id": "sv4pt5-157",
  "name": "Mime Jr.",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Psychic"
  ],
  "hp": "30",
  "rarity": "Shiny Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/157_hires.png",
  "marketPrice": 5.83,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Free"
      ],
      "name": "Mimed Games",
      "damage": "",
      "text": "Your opponent chooses an attack from 1 of their Pokémon in play. Use the chosen attack as this attack."
    }
  ]
},
  {
  "id": "sv4pt5-160",
  "name": "Mimikyu",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Psychic"
  ],
  "hp": "70",
  "rarity": "Shiny Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/160_hires.png",
  "marketPrice": 56.09,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Psychic",
        "Colorless"
      ],
      "name": "Ghost Eye",
      "damage": "",
      "text": "Put 7 damage counters on your opponent's Active Pokémon."
    }
  ]
},
  {
  "id": "sv4pt5-161",
  "name": "Dachsbun",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 1"
  ],
  "types": [
    "Psychic"
  ],
  "hp": "90",
  "rarity": "Shiny Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/161_hires.png",
  "marketPrice": 11.36,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Psychic",
        "Colorless",
        "Colorless"
      ],
      "name": "Headbutt Bounce",
      "damage": "100",
      "text": ""
    }
  ]
},
  {
  "id": "sv4pt5-162",
  "name": "Ceruledge",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 1"
  ],
  "types": [
    "Psychic"
  ],
  "hp": "140",
  "rarity": "Shiny Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/162_hires.png",
  "marketPrice": 12.22,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Colorless",
        "Colorless"
      ],
      "name": "Life Sucker",
      "damage": "50",
      "text": "Heal 30 damage from this Pokémon."
    },
    {
      "cost": [
        "Psychic",
        "Colorless",
        "Colorless"
      ],
      "name": "Fighting Sword",
      "damage": "100+",
      "text": "If your opponent's Active Pokémon is a Pokémon ex or Pokémon V, this attack does 100 more damage."
    }
  ]
},
  {
  "id": "sv4pt5-168",
  "name": "Houndstone",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 1"
  ],
  "types": [
    "Psychic"
  ],
  "hp": "140",
  "rarity": "Shiny Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/168_hires.png",
  "marketPrice": 2.47,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Psychic",
        "Psychic"
      ],
      "name": "Last Respects",
      "damage": "80+",
      "text": "This attack does 10 more damage for each Psychic Pokémon in your discard pile."
    }
  ]
},
  {
  "id": "sv4pt5-170",
  "name": "Primeape",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 1"
  ],
  "types": [
    "Fighting"
  ],
  "hp": "90",
  "rarity": "Shiny Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/170_hires.png",
  "marketPrice": 4,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Fighting"
      ],
      "name": "Raging Punch",
      "damage": "70",
      "text": "This Pokémon also does 20 damage to itself."
    }
  ]
},
  {
  "id": "sv4pt5-175",
  "name": "Hawlucha",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Fighting"
  ],
  "hp": "70",
  "rarity": "Shiny Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/175_hires.png",
  "marketPrice": 7.38,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Fighting",
        "Colorless",
        "Colorless"
      ],
      "name": "Wing Attack",
      "damage": "70",
      "text": ""
    }
  ]
},
  {
  "id": "sv4pt5-177",
  "name": "Naclstack",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 1"
  ],
  "types": [
    "Fighting"
  ],
  "hp": "100",
  "rarity": "Shiny Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/177_hires.png",
  "marketPrice": 2.38,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Fighting",
        "Fighting"
      ],
      "name": "Salt Cannon",
      "damage": "60×",
      "text": "Flip 3 coins. This attack does 60 damage for each heads."
    }
  ]
},
  {
  "id": "sv4pt5-181",
  "name": "Murkrow",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Darkness"
  ],
  "hp": "60",
  "rarity": "Shiny Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/181_hires.png",
  "marketPrice": 3.4,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Colorless"
      ],
      "name": "Spin Turn",
      "damage": "10",
      "text": "Switch this Pokémon with 1 of your Benched Pokémon."
    },
    {
      "cost": [
        "Darkness"
      ],
      "name": "United Wings",
      "damage": "20×",
      "text": "This attack does 20 damage for each Pokémon in your discard pile that has the United Wings attack."
    }
  ]
},
  {
  "id": "sv4pt5-182",
  "name": "Sneasel",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Darkness"
  ],
  "hp": "70",
  "rarity": "Shiny Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/182_hires.png",
  "marketPrice": 3.58,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Darkness"
      ],
      "name": "Dig Claws",
      "damage": "20",
      "text": ""
    }
  ]
},
  {
  "id": "sv4pt5-184",
  "name": "Sableye",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Darkness"
  ],
  "hp": "70",
  "rarity": "Shiny Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/184_hires.png",
  "marketPrice": 8.3,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Colorless"
      ],
      "name": "Night Eyes",
      "damage": "",
      "text": "Your opponent's Active Pokémon is now Asleep."
    },
    {
      "cost": [
        "Darkness"
      ],
      "name": "Unseen Claw",
      "damage": "20+",
      "text": "If your opponent's Active Pokémon is affected by a Special Condition, this attack does 70 more damage."
    }
  ]
},
  {
  "id": "sv4pt5-149",
  "name": "Kadabra",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 1"
  ],
  "types": [
    "Psychic"
  ],
  "hp": "80",
  "rarity": "Shiny Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/149_hires.png",
  "marketPrice": 7.19,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Psychic"
      ],
      "name": "Teleportation Attack",
      "damage": "30",
      "text": "Switch this Pokémon with 1 of your Benched Pokémon."
    }
  ]
},
  {
  "id": "sv4pt5-150",
  "name": "Cleffa",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Psychic"
  ],
  "hp": "30",
  "rarity": "Shiny Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/150_hires.png",
  "marketPrice": 5.63,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Free"
      ],
      "name": "Grasping Draw",
      "damage": "",
      "text": "Draw cards until you have 7 cards in your hand."
    }
  ]
},
  {
  "id": "sv4pt5-159",
  "name": "Klefki",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Psychic"
  ],
  "hp": "70",
  "rarity": "Shiny Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/159_hires.png",
  "marketPrice": 4.3,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Colorless"
      ],
      "name": "Joust",
      "damage": "10",
      "text": "Before doing damage, discard all Pokémon Tools from your opponent's Active Pokémon."
    }
  ]
},
  {
  "id": "sv4pt5-163",
  "name": "Rabsca",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 1"
  ],
  "types": [
    "Psychic"
  ],
  "hp": "70",
  "rarity": "Shiny Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/163_hires.png",
  "marketPrice": 2.1,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Colorless"
      ],
      "name": "Revival Blessing",
      "damage": "",
      "text": "Put a Pokémon from your discard pile onto your Bench."
    },
    {
      "cost": [
        "Psychic",
        "Psychic"
      ],
      "name": "Psybeam",
      "damage": "50",
      "text": "Your opponent's Active Pokémon is now Confused."
    }
  ]
},
  {
  "id": "sv4pt5-166",
  "name": "Tinkatuff",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 1"
  ],
  "types": [
    "Psychic"
  ],
  "hp": "90",
  "rarity": "Shiny Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/166_hires.png",
  "marketPrice": 6.46,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Colorless",
        "Colorless"
      ],
      "name": "Play Rough",
      "damage": "30+",
      "text": "Flip a coin. If heads, this attack does 30 more damage."
    },
    {
      "cost": [
        "Psychic",
        "Colorless",
        "Colorless"
      ],
      "name": "Pulverizing Press",
      "damage": "60",
      "text": "This attack's damage isn't affected by any effects on your opponent's Active Pokémon."
    }
  ]
},
  {
  "id": "sv4pt5-169",
  "name": "Mankey",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Fighting"
  ],
  "hp": "60",
  "rarity": "Shiny Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/169_hires.png",
  "marketPrice": 5.04,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Fighting"
      ],
      "name": "Monkey Beatdown",
      "damage": "30",
      "text": "This Pokémon also does 10 damage to itself."
    }
  ]
},
  {
  "id": "sv4pt5-172",
  "name": "Paldean Tauros",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Fighting"
  ],
  "hp": "130",
  "rarity": "Shiny Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/172_hires.png",
  "marketPrice": 3.15,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Colorless",
        "Colorless"
      ],
      "name": "Raging Horns",
      "damage": "20+",
      "text": "This attack does 10 more damage for each damage counter on this Pokémon."
    },
    {
      "cost": [
        "Fighting",
        "Fighting",
        "Colorless"
      ],
      "name": "Combat Tackle",
      "damage": "130",
      "text": "This Pokémon also does 30 damage to itself."
    }
  ]
},
  {
  "id": "sv4pt5-173",
  "name": "Riolu",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Fighting"
  ],
  "hp": "70",
  "rarity": "Shiny Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/173_hires.png",
  "marketPrice": 15.77,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Fighting"
      ],
      "name": "Punch",
      "damage": "10",
      "text": ""
    },
    {
      "cost": [
        "Fighting",
        "Colorless"
      ],
      "name": "Reckless Charge",
      "damage": "50",
      "text": "This Pokémon also does 20 damage to itself."
    }
  ]
},
  {
  "id": "sv4pt5-174",
  "name": "Lucario",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 1"
  ],
  "types": [
    "Fighting"
  ],
  "hp": "130",
  "rarity": "Shiny Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/174_hires.png",
  "marketPrice": 35.48,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Fighting"
      ],
      "name": "Avenging Knuckle",
      "damage": "30+",
      "text": "If any of your Fighting Pokémon were Knocked Out by damage from an attack during your opponent's last turn, this attack does 120 more damage."
    },
    {
      "cost": [
        "Fighting",
        "Colorless",
        "Colorless"
      ],
      "name": "Accelerating Stab",
      "damage": "120",
      "text": "During your next turn, this Pokémon can't use Accelerating Stab."
    }
  ]
},
  {
  "id": "sv4pt5-179",
  "name": "Glimmet",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Fighting"
  ],
  "hp": "40",
  "rarity": "Shiny Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/179_hires.png",
  "marketPrice": 2.17,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Fighting"
      ],
      "name": "Ascension",
      "damage": "",
      "text": "Search your deck for a card that evolves from this Pokémon and put it onto this Pokémon to evolve it. Then, shuffle your deck."
    }
  ]
},
  {
  "id": "sv4pt5-187",
  "name": "Kingambit",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 2"
  ],
  "types": [
    "Darkness"
  ],
  "hp": "170",
  "rarity": "Shiny Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/187_hires.png",
  "marketPrice": 3.04,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Darkness",
        "Colorless",
        "Colorless"
      ],
      "name": "Hack At",
      "damage": "160",
      "text": ""
    }
  ]
},
  {
  "id": "sv4pt5-192",
  "name": "Varoom",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Metal"
  ],
  "hp": "60",
  "rarity": "Shiny Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/192_hires.png",
  "marketPrice": 1.8,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Colorless"
      ],
      "name": "Rev",
      "damage": "",
      "text": "Put up to 2 Basic Energy cards from your discard pile into your hand."
    },
    {
      "cost": [
        "Metal",
        "Colorless"
      ],
      "name": "Headbutt",
      "damage": "20",
      "text": ""
    }
  ]
},
  {
  "id": "sv4pt5-193",
  "name": "Revavroom",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 1"
  ],
  "types": [
    "Metal"
  ],
  "hp": "140",
  "rarity": "Shiny Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/193_hires.png",
  "marketPrice": 2.27,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Metal",
        "Colorless",
        "Colorless",
        "Colorless"
      ],
      "name": "Knock Away",
      "damage": "90+",
      "text": "Flip a coin. If heads, this attack does 90 more damage."
    }
  ]
},
  {
  "id": "sv4pt5-196",
  "name": "Pidgey",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Colorless"
  ],
  "hp": "50",
  "rarity": "Shiny Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/196_hires.png",
  "marketPrice": 7.74,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Colorless"
      ],
      "name": "Call for Family",
      "damage": "",
      "text": "Search your deck for up to 2 Basic Pokémon and put them onto your Bench. Then, shuffle your deck."
    },
    {
      "cost": [
        "Colorless",
        "Colorless"
      ],
      "name": "Tackle",
      "damage": "20",
      "text": ""
    }
  ]
},
  {
  "id": "sv4pt5-198",
  "name": "Jigglypuff",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Colorless"
  ],
  "hp": "70",
  "rarity": "Shiny Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/198_hires.png",
  "marketPrice": 29.58,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Colorless"
      ],
      "name": "Lead",
      "damage": "",
      "text": "Search your deck for a Supporter card, reveal it, and put it into your hand. Then, shuffle your deck."
    },
    {
      "cost": [
        "Colorless",
        "Colorless"
      ],
      "name": "Stompy Stomp",
      "damage": "20×",
      "text": "Flip 2 coins. This attack does 20 damage for each heads."
    }
  ]
},
  {
  "id": "sv4pt5-199",
  "name": "Doduo",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Colorless"
  ],
  "hp": "70",
  "rarity": "Shiny Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/199_hires.png",
  "marketPrice": 4.67,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Colorless"
      ],
      "name": "Reckless Charge",
      "damage": "30",
      "text": "This Pokémon also does 10 damage to itself."
    }
  ]
},
  {
  "id": "sv4pt5-194",
  "name": "Noibat",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Dragon"
  ],
  "hp": "70",
  "rarity": "Shiny Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/194_hires.png",
  "marketPrice": 5.15,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Psychic",
        "Darkness"
      ],
      "name": "Gust",
      "damage": "40",
      "text": ""
    }
  ]
},
  {
  "id": "sv4pt5-195",
  "name": "Cyclizar",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Dragon"
  ],
  "hp": "120",
  "rarity": "Shiny Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/195_hires.png",
  "marketPrice": 2.24,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Grass",
        "Darkness",
        "Colorless"
      ],
      "name": "Acceleration Drive",
      "damage": "100",
      "text": "Flip a coin. If heads, during your opponent's next turn, prevent all damage from and effects of attacks done to this Pokémon."
    }
  ]
},
  {
  "id": "sv4pt5-197",
  "name": "Pidgeotto",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 1"
  ],
  "types": [
    "Colorless"
  ],
  "hp": "80",
  "rarity": "Shiny Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/197_hires.png",
  "marketPrice": 5.8,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Colorless"
      ],
      "name": "Flap",
      "damage": "20",
      "text": ""
    }
  ]
},
  {
  "id": "sv4pt5-200",
  "name": "Dodrio",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 1"
  ],
  "types": [
    "Colorless"
  ],
  "hp": "100",
  "rarity": "Shiny Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/200_hires.png",
  "marketPrice": 4.1,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Colorless"
      ],
      "name": "Ballistic Beak",
      "damage": "10+",
      "text": "This attack does 30 more damage for each damage counter on this Pokémon."
    }
  ]
},
  {
  "id": "sv4pt5-201",
  "name": "Ditto",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Colorless"
  ],
  "hp": "60",
  "rarity": "Shiny Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/201_hires.png",
  "marketPrice": 52.41,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Colorless"
      ],
      "name": "Splup",
      "damage": "10",
      "text": ""
    }
  ]
},
  {
  "id": "sv4pt5-202",
  "name": "Snorlax",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Colorless"
  ],
  "hp": "150",
  "rarity": "Shiny Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/202_hires.png",
  "marketPrice": 71.03,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Colorless",
        "Colorless",
        "Colorless"
      ],
      "name": "Thudding Press",
      "damage": "130",
      "text": "This Pokémon also does 30 damage to itself."
    }
  ]
},
  {
  "id": "sv4pt5-203",
  "name": "Wingull",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Colorless"
  ],
  "hp": "70",
  "rarity": "Shiny Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/203_hires.png",
  "marketPrice": 3.11,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Colorless",
        "Colorless"
      ],
      "name": "Gust",
      "damage": "30",
      "text": ""
    }
  ]
},
  {
  "id": "sv4pt5-204",
  "name": "Pelipper",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 1"
  ],
  "types": [
    "Colorless"
  ],
  "hp": "120",
  "rarity": "Shiny Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/204_hires.png",
  "marketPrice": 2.86,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Colorless",
        "Colorless",
        "Colorless"
      ],
      "name": "Wing Attack",
      "damage": "90",
      "text": ""
    }
  ]
},
  {
  "id": "sv4pt5-210",
  "name": "Maushold",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 1"
  ],
  "types": [
    "Colorless"
  ],
  "hp": "70",
  "rarity": "Shiny Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/210_hires.png",
  "marketPrice": 36.88,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Colorless"
      ],
      "name": "Slap",
      "damage": "40",
      "text": ""
    },
    {
      "cost": [
        "Colorless",
        "Colorless"
      ],
      "name": "Family Attack",
      "damage": "70×",
      "text": "This attack does 70 damage for each of your Maushold in play."
    }
  ]
},
  {
  "id": "sv4pt5-208",
  "name": "Oinkologne",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 1"
  ],
  "types": [
    "Colorless"
  ],
  "hp": "130",
  "rarity": "Shiny Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/208_hires.png",
  "marketPrice": 4.77,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Colorless",
        "Colorless"
      ],
      "name": "Finest Selection",
      "damage": "",
      "text": "Flip 3 coins. Put a number of cards up to the number of heads from your discard pile into your hand."
    },
    {
      "cost": [
        "Colorless",
        "Colorless",
        "Colorless"
      ],
      "name": "Perfume Press",
      "damage": "70",
      "text": "Your opponent's Active Pokémon is now Confused."
    }
  ]
},
  {
  "id": "sv4pt5-209",
  "name": "Tandemaus",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Colorless"
  ],
  "hp": "30",
  "rarity": "Shiny Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/209_hires.png",
  "marketPrice": 31.83,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Colorless"
      ],
      "name": "Collect",
      "damage": "",
      "text": "Draw 2 cards."
    },
    {
      "cost": [
        "Colorless",
        "Colorless",
        "Colorless"
      ],
      "name": "Gentle Slap",
      "damage": "30",
      "text": ""
    }
  ]
},
  {
  "id": "sv4pt5-213",
  "name": "Toedscruel ex",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 1",
    "ex"
  ],
  "types": [
    "Grass"
  ],
  "hp": "270",
  "rarity": "Shiny Ultra Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/213_hires.png",
  "marketPrice": 1.4,
  "rules": [
    "Pokémon ex rule: When your Pokémon ex is Knocked Out, your opponent takes 2 Prize cards."
  ],
  "attacks": [
    {
      "cost": [
        "Grass",
        "Grass"
      ],
      "name": "Colony Rush",
      "damage": "80+",
      "text": "This attack does 40 more damage for each of your Benched Pokémon that has any Grass Energy attached."
    }
  ]
},
  {
  "id": "sv4pt5-225",
  "name": "Palafin",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 1"
  ],
  "types": [
    "Water"
  ],
  "hp": "150",
  "rarity": "Illustration Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/225_hires.png",
  "marketPrice": 2.37,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Water"
      ],
      "name": "Jet Punch",
      "damage": "30",
      "text": "This attack also does 30 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"
    },
    {
      "cost": [
        "Water",
        "Water"
      ],
      "name": "Justice Kick",
      "damage": "210",
      "text": "If this Pokémon didn't move from the Bench to the Active Spot this turn, this attack does nothing."
    }
  ]
},
  {
  "id": "sv4pt5-232",
  "name": "Mew ex",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic",
    "ex"
  ],
  "types": [
    "Psychic"
  ],
  "hp": "180",
  "rarity": "Special Illustration Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/232_hires.png",
  "marketPrice": 1035.66,
  "rules": [
    "Pokémon ex rule: When your Pokémon ex is Knocked Out, your opponent takes 2 Prize cards."
  ],
  "attacks": [
    {
      "cost": [
        "Colorless",
        "Colorless",
        "Colorless"
      ],
      "name": "Genome Hacking",
      "damage": "",
      "text": "Choose 1 of your opponent's Active Pokémon's attacks and use it as this attack."
    }
  ]
},
  {
  "id": "sv4pt5-238",
  "name": "Nemona",
  "supertype": "Trainer",
  "subtypes": [
    "Supporter"
  ],
  "types": [],
  "hp": "",
  "rarity": "Special Illustration Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/238_hires.png",
  "marketPrice": 8.01,
  "rules": [
    "Draw 3 cards.",
    "You may play only 1 Supporter card during your turn."
  ],
  "attacks": []
},
  {
  "id": "sv4pt5-212",
  "name": "Forretress ex",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 1",
    "Tera",
    "ex"
  ],
  "types": [
    "Grass"
  ],
  "hp": "270",
  "rarity": "Shiny Ultra Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/212_hires.png",
  "marketPrice": 1.14,
  "rules": [
    "Tera: As long as this Pokémon is on your Bench, prevent all damage done to this Pokémon by attacks (both yours and your opponent's).",
    "Pokémon ex rule: When your Pokémon ex is Knocked Out, your opponent takes 2 Prize cards."
  ],
  "attacks": [
    {
      "cost": [
        "Grass",
        "Grass"
      ],
      "name": "Guard Press",
      "damage": "120",
      "text": "During your opponent's next turn, this Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance)."
    }
  ]
},
  {
  "id": "sv4pt5-214",
  "name": "Espathra ex",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 1",
    "Tera",
    "ex"
  ],
  "types": [
    "Grass"
  ],
  "hp": "260",
  "rarity": "Shiny Ultra Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/214_hires.png",
  "marketPrice": 1.21,
  "rules": [
    "Tera: As long as this Pokémon is on your Bench, prevent all damage done to this Pokémon by attacks (both yours and your opponent's).",
    "Pokémon ex rule: When your Pokémon ex is Knocked Out, your opponent takes 2 Prize cards."
  ],
  "attacks": [
    {
      "cost": [
        "Psychic"
      ],
      "name": "Psy Ball",
      "damage": "30+",
      "text": "This attack does 30 more damage for each Energy attached to both Active Pokémon."
    }
  ]
},
  {
  "id": "sv4pt5-226",
  "name": "Pawmi",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Lightning"
  ],
  "hp": "60",
  "rarity": "Illustration Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/226_hires.png",
  "marketPrice": 3.16,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Colorless"
      ],
      "name": "Light Punch",
      "damage": "10",
      "text": ""
    },
    {
      "cost": [
        "Lightning",
        "Colorless"
      ],
      "name": "Zap Kick",
      "damage": "20",
      "text": ""
    }
  ]
},
  {
  "id": "sv4pt5-227",
  "name": "Clive",
  "supertype": "Trainer",
  "subtypes": [
    "Supporter"
  ],
  "types": [],
  "hp": "",
  "rarity": "Ultra Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/227_hires.png",
  "marketPrice": 0.63,
  "rules": [
    "Your opponent reveals their hand, and you draw 2 cards for each Supporter card you find there.",
    "You may play only 1 Supporter card during your turn."
  ],
  "attacks": []
},
  {
  "id": "sv4pt5-228",
  "name": "Judge",
  "supertype": "Trainer",
  "subtypes": [
    "Supporter"
  ],
  "types": [],
  "hp": "",
  "rarity": "Ultra Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/228_hires.png",
  "marketPrice": 1.18,
  "rules": [
    "Each player shuffles their hand into their deck and draws 4 cards.",
    "You may play only 1 Supporter card during your turn."
  ],
  "attacks": []
},
  {
  "id": "sv4pt5-230",
  "name": "Paldean Student",
  "supertype": "Trainer",
  "subtypes": [
    "Supporter"
  ],
  "types": [],
  "hp": "",
  "rarity": "Ultra Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/230_hires.png",
  "marketPrice": 0.79,
  "rules": [
    "Search your deck for a Pokémon that doesn't have a Rule Box, reveal it, and put it into your hand. For each Paldean Student card (not including this card) in your discard pile, you may search for an additional Pokémon in this way. Then, shuffle your deck. (Pokémon ex, Pokémon V, etc. have Rule Boxes.)",
    "You may play only 1 Supporter card during your turn."
  ],
  "attacks": []
},
  {
  "id": "sv4pt5-231",
  "name": "Paldean Student",
  "supertype": "Trainer",
  "subtypes": [
    "Supporter"
  ],
  "types": [],
  "hp": "",
  "rarity": "Ultra Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/231_hires.png",
  "marketPrice": 0.69,
  "rules": [
    "Search your deck for a Pokémon that doesn't have a Rule Box, reveal it, and put it into your hand. For each Paldean Student card (not including this card) in your discard pile, you may search for an additional Pokémon in this way. Then, shuffle your deck. (Pokémon ex, Pokémon V, etc. have Rule Boxes.)",
    "You may play only 1 Supporter card during your turn."
  ],
  "attacks": []
},
  {
  "id": "sv4pt5-235",
  "name": "Arven",
  "supertype": "Trainer",
  "subtypes": [
    "Supporter"
  ],
  "types": [],
  "hp": "",
  "rarity": "Special Illustration Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/235_hires.png",
  "marketPrice": 9.6,
  "rules": [
    "Search your deck for an Item card and a Pokémon Tool card, reveal them, and put them into your hand. Then, shuffle your deck.",
    "You may play only 1 Supporter card during your turn."
  ],
  "attacks": []
},
  {
  "id": "sv4pt5-243",
  "name": "Miraidon ex",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic",
    "ex"
  ],
  "types": [
    "Lightning"
  ],
  "hp": "220",
  "rarity": "Hyper Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/243_hires.png",
  "marketPrice": 16.44,
  "rules": [
    "Pokémon ex rule: When your Pokémon ex is Knocked Out, your opponent takes 2 Prize cards."
  ],
  "attacks": [
    {
      "cost": [
        "Lightning",
        "Lightning",
        "Colorless"
      ],
      "name": "Photon Blaster",
      "damage": "220",
      "text": "During your next turn, this Pokémon can't attack."
    }
  ]
},
  {
  "id": "sv4pt5-211",
  "name": "Flamigo",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Colorless"
  ],
  "hp": "110",
  "rarity": "Shiny Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/211_hires.png",
  "marketPrice": 3.55,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Colorless",
        "Colorless"
      ],
      "name": "United Wings",
      "damage": "20×",
      "text": "This attack does 20 damage for each Pokémon in your discard pile that has the United Wings attack."
    }
  ]
},
  {
  "id": "sv4pt5-215",
  "name": "Alakazam ex",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 2",
    "ex"
  ],
  "types": [
    "Psychic"
  ],
  "hp": "310",
  "rarity": "Shiny Ultra Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/215_hires.png",
  "marketPrice": 7.32,
  "rules": [
    "Pokémon ex rule: When your Pokémon ex is Knocked Out, your opponent takes 2 Prize cards."
  ],
  "attacks": [
    {
      "cost": [
        "Colorless",
        "Colorless"
      ],
      "name": "Mind Jack",
      "damage": "90+",
      "text": "This attack does 30 more damage for each of your opponent's Benched Pokémon."
    },
    {
      "cost": [
        "Psychic",
        "Psychic"
      ],
      "name": "Dimensional Hand",
      "damage": "120",
      "text": "This attack can be used even if this Pokémon is on the Bench."
    }
  ]
},
  {
  "id": "sv4pt5-216",
  "name": "Mew ex",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic",
    "ex"
  ],
  "types": [
    "Psychic"
  ],
  "hp": "180",
  "rarity": "Shiny Ultra Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/216_hires.png",
  "marketPrice": 39.35,
  "rules": [
    "Pokémon ex rule: When your Pokémon ex is Knocked Out, your opponent takes 2 Prize cards."
  ],
  "attacks": [
    {
      "cost": [
        "Colorless",
        "Colorless",
        "Colorless"
      ],
      "name": "Genome Hacking",
      "damage": "",
      "text": "Choose 1 of your opponent's Active Pokémon's attacks and use it as this attack."
    }
  ]
},
  {
  "id": "sv4pt5-217",
  "name": "Gardevoir ex",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 2",
    "ex"
  ],
  "types": [
    "Psychic"
  ],
  "hp": "310",
  "rarity": "Shiny Ultra Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/217_hires.png",
  "marketPrice": 10.12,
  "rules": [
    "Pokémon ex rule: When your Pokémon ex is Knocked Out, your opponent takes 2 Prize cards."
  ],
  "attacks": [
    {
      "cost": [
        "Psychic",
        "Psychic",
        "Colorless"
      ],
      "name": "Miracle Force",
      "damage": "190",
      "text": "This Pokémon recovers from all Special Conditions."
    }
  ]
},
  {
  "id": "sv4pt5-218",
  "name": "Glimmora ex",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 1",
    "ex"
  ],
  "types": [
    "Fighting"
  ],
  "hp": "270",
  "rarity": "Shiny Ultra Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/218_hires.png",
  "marketPrice": 1.01,
  "rules": [
    "Pokémon ex rule: When your Pokémon ex is Knocked Out, your opponent takes 2 Prize cards."
  ],
  "attacks": [
    {
      "cost": [
        "Fighting",
        "Fighting"
      ],
      "name": "Poisonous Gem",
      "damage": "140",
      "text": "Your opponent's Active Pokémon is now Poisoned."
    }
  ]
},
  {
  "id": "sv4pt5-219",
  "name": "Paldean Clodsire ex",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 1",
    "ex"
  ],
  "types": [
    "Darkness"
  ],
  "hp": "280",
  "rarity": "Shiny Ultra Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/219_hires.png",
  "marketPrice": 2.42,
  "rules": [
    "Pokémon ex rule: When your Pokémon ex is Knocked Out, your opponent takes 2 Prize cards."
  ],
  "attacks": [
    {
      "cost": [
        "Darkness",
        "Colorless",
        "Colorless"
      ],
      "name": "Needle Bone",
      "damage": "200",
      "text": "Flip a coin. If tails, during your next turn, this Pokémon can't attack."
    }
  ]
},
  {
  "id": "sv4pt5-220",
  "name": "Noivern ex",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 1",
    "ex"
  ],
  "types": [
    "Dragon"
  ],
  "hp": "260",
  "rarity": "Shiny Ultra Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/220_hires.png",
  "marketPrice": 2,
  "rules": [
    "Pokémon ex rule: When your Pokémon ex is Knocked Out, your opponent takes 2 Prize cards."
  ],
  "attacks": [
    {
      "cost": [
        "Colorless",
        "Colorless"
      ],
      "name": "Covert Flight",
      "damage": "70",
      "text": "During your opponent's next turn, prevent all damage done to this Pokémon by attacks from Basic Pokémon."
    },
    {
      "cost": [
        "Psychic",
        "Darkness"
      ],
      "name": "Dominating Echo",
      "damage": "140",
      "text": "During your opponent's next turn, they can't play any Special Energy or Stadium cards from their hand."
    }
  ]
},
  {
  "id": "sv4pt5-224",
  "name": "Wugtrio",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 1"
  ],
  "types": [
    "Water"
  ],
  "hp": "90",
  "rarity": "Illustration Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/224_hires.png",
  "marketPrice": 2.77,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Water"
      ],
      "name": "Headbutt",
      "damage": "30",
      "text": ""
    },
    {
      "cost": [
        "Colorless",
        "Colorless",
        "Colorless"
      ],
      "name": "Undersea Tunnel",
      "damage": "",
      "text": "Flip 3 coins. For each heads, discard the top 3 cards of your opponent's deck."
    }
  ]
},
  {
  "id": "sv4pt5-233",
  "name": "Gardevoir ex",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 2",
    "ex"
  ],
  "types": [
    "Psychic"
  ],
  "hp": "310",
  "rarity": "Special Illustration Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/233_hires.png",
  "marketPrice": 205.61,
  "rules": [
    "Pokémon ex rule: When your Pokémon ex is Knocked Out, your opponent takes 2 Prize cards."
  ],
  "attacks": [
    {
      "cost": [
        "Psychic",
        "Psychic",
        "Colorless"
      ],
      "name": "Miracle Force",
      "damage": "190",
      "text": "This Pokémon recovers from all Special Conditions."
    }
  ]
},
  {
  "id": "sv4pt5-236",
  "name": "Clive",
  "supertype": "Trainer",
  "subtypes": [
    "Supporter"
  ],
  "types": [],
  "hp": "",
  "rarity": "Special Illustration Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/236_hires.png",
  "marketPrice": 30.56,
  "rules": [
    "Your opponent reveals their hand, and you draw 2 cards for each Supporter card you find there.",
    "You may play only 1 Supporter card during your turn."
  ],
  "attacks": []
},
  {
  "id": "sv4pt5-242",
  "name": "Chien-Pao ex",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic",
    "ex"
  ],
  "types": [
    "Water"
  ],
  "hp": "220",
  "rarity": "Hyper Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/242_hires.png",
  "marketPrice": 11.28,
  "rules": [
    "Pokémon ex rule: When your Pokémon ex is Knocked Out, your opponent takes 2 Prize cards."
  ],
  "attacks": [
    {
      "cost": [
        "Water",
        "Water"
      ],
      "name": "Hail Blade",
      "damage": "60×",
      "text": "You may discard any amount of Water Energy from your Pokémon. This attack does 60 damage for each card you discarded in this way."
    }
  ]
},
  {
  "id": "sv4pt5-244",
  "name": "Ting-Lu ex",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic",
    "ex"
  ],
  "types": [
    "Fighting"
  ],
  "hp": "240",
  "rarity": "Hyper Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/244_hires.png",
  "marketPrice": 5.95,
  "rules": [
    "Pokémon ex rule: When your Pokémon ex is Knocked Out, your opponent takes 2 Prize cards."
  ],
  "attacks": [
    {
      "cost": [
        "Fighting",
        "Fighting",
        "Fighting"
      ],
      "name": "Land Scoop",
      "damage": "150",
      "text": "Put 2 damage counters on 1 of your opponent's Benched Pokémon."
    }
  ]
},
  {
  "id": "sv4pt5-205",
  "name": "Skwovet",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Colorless"
  ],
  "hp": "60",
  "rarity": "Shiny Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/205_hires.png",
  "marketPrice": 3.03,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Colorless",
        "Colorless"
      ],
      "name": "Bite",
      "damage": "20",
      "text": ""
    }
  ]
},
  {
  "id": "sv4pt5-206",
  "name": "Greedent",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 1"
  ],
  "types": [
    "Colorless"
  ],
  "hp": "120",
  "rarity": "Shiny Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/206_hires.png",
  "marketPrice": 2.42,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Colorless",
        "Colorless"
      ],
      "name": "Bite",
      "damage": "50",
      "text": ""
    },
    {
      "cost": [
        "Colorless",
        "Colorless",
        "Colorless"
      ],
      "name": "Enhanced Fang",
      "damage": "80+",
      "text": "If this Pokémon has a Pokémon Tool attached, this attack does 80 more damage."
    }
  ]
},
  {
  "id": "sv4pt5-207",
  "name": "Lechonk",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic"
  ],
  "types": [
    "Colorless"
  ],
  "hp": "70",
  "rarity": "Shiny Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/207_hires.png",
  "marketPrice": 13.57,
  "rules": [],
  "attacks": [
    {
      "cost": [
        "Colorless",
        "Colorless",
        "Colorless"
      ],
      "name": "Whimsy Tackle",
      "damage": "70",
      "text": "Flip a coin. If tails, this attack does nothing."
    }
  ]
},
  {
  "id": "sv4pt5-221",
  "name": "Pidgeot ex",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 2",
    "ex"
  ],
  "types": [
    "Colorless"
  ],
  "hp": "280",
  "rarity": "Shiny Ultra Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/221_hires.png",
  "marketPrice": 2.65,
  "rules": [
    "Pokémon ex rule: When your Pokémon ex is Knocked Out, your opponent takes 2 Prize cards."
  ],
  "attacks": [
    {
      "cost": [
        "Colorless",
        "Colorless"
      ],
      "name": "Blustery Wind",
      "damage": "120",
      "text": "You may discard a Stadium in play."
    }
  ]
},
  {
  "id": "sv4pt5-222",
  "name": "Wigglytuff ex",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 1",
    "ex"
  ],
  "types": [
    "Colorless"
  ],
  "hp": "250",
  "rarity": "Shiny Ultra Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/222_hires.png",
  "marketPrice": 2.37,
  "rules": [
    "Pokémon ex rule: When your Pokémon ex is Knocked Out, your opponent takes 2 Prize cards."
  ],
  "attacks": [
    {
      "cost": [
        "Colorless",
        "Colorless",
        "Colorless"
      ],
      "name": "Friend Tackle",
      "damage": "90+",
      "text": "If you played a Supporter card from your hand during this turn, this attack does 90 more damage."
    }
  ]
},
  {
  "id": "sv4pt5-223",
  "name": "Squawkabilly ex",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic",
    "ex"
  ],
  "types": [
    "Colorless"
  ],
  "hp": "160",
  "rarity": "Shiny Ultra Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/223_hires.png",
  "marketPrice": 1.18,
  "rules": [
    "Pokémon ex rule: When your Pokémon ex is Knocked Out, your opponent takes 2 Prize cards."
  ],
  "attacks": [
    {
      "cost": [
        "Colorless"
      ],
      "name": "Motivate",
      "damage": "20",
      "text": "Attach up to 2 Basic Energy cards from your discard pile to 1 of your Benched Pokémon."
    }
  ]
},
  {
  "id": "sv4pt5-229",
  "name": "Nemona",
  "supertype": "Trainer",
  "subtypes": [
    "Supporter"
  ],
  "types": [],
  "hp": "",
  "rarity": "Ultra Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/229_hires.png",
  "marketPrice": 1.03,
  "rules": [
    "Draw 3 cards.",
    "You may play only 1 Supporter card during your turn."
  ],
  "attacks": []
},
  {
  "id": "sv4pt5-234",
  "name": "Charizard ex",
  "supertype": "Pokémon",
  "subtypes": [
    "Stage 2",
    "Tera",
    "ex"
  ],
  "types": [
    "Darkness"
  ],
  "hp": "330",
  "rarity": "Special Illustration Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/234_hires.png",
  "marketPrice": 335.77,
  "rules": [
    "Tera: As long as this Pokémon is on your Bench, prevent all damage done to this Pokémon by attacks (both yours and your opponent's).",
    "Pokémon ex rule: When your Pokémon ex is Knocked Out, your opponent takes 2 Prize cards."
  ],
  "attacks": [
    {
      "cost": [
        "Fire",
        "Fire"
      ],
      "name": "Burning Darkness",
      "damage": "180+",
      "text": "This attack does 30 more damage for each Prize card your opponent has taken."
    }
  ]
},
  {
  "id": "sv4pt5-237",
  "name": "Iono",
  "supertype": "Trainer",
  "subtypes": [
    "Supporter"
  ],
  "types": [],
  "hp": "",
  "rarity": "Special Illustration Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/237_hires.png",
  "marketPrice": 31.37,
  "rules": [
    "Each player shuffles their hand and puts it on the bottom of their deck. If either player put any cards on the bottom of their deck in this way, each player draws a card for each of their remaining Prize cards.",
    "You may play only 1 Supporter card during your turn."
  ],
  "attacks": []
},
  {
  "id": "sv4pt5-239",
  "name": "Penny",
  "supertype": "Trainer",
  "subtypes": [
    "Supporter"
  ],
  "types": [],
  "hp": "",
  "rarity": "Special Illustration Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/239_hires.png",
  "marketPrice": 18.13,
  "rules": [
    "Put 1 of your Basic Pokémon and all attached cards into your hand.",
    "You may play only 1 Supporter card during your turn."
  ],
  "attacks": []
},
  {
  "id": "sv4pt5-240",
  "name": "Wo-Chien ex",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic",
    "ex"
  ],
  "types": [
    "Grass"
  ],
  "hp": "230",
  "rarity": "Hyper Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/240_hires.png",
  "marketPrice": 7.52,
  "rules": [
    "Pokémon ex rule: When your Pokémon ex is Knocked Out, your opponent takes 2 Prize cards."
  ],
  "attacks": [
    {
      "cost": [
        "Grass",
        "Grass",
        "Colorless"
      ],
      "name": "Covetous Ivy",
      "damage": "",
      "text": "This attack does 60 damage to 1 of your opponent's Benched Pokémon for each Prize card your opponent has taken. (Don't apply Weakness and Resistance for Benched Pokémon.)"
    },
    {
      "cost": [
        "Grass",
        "Grass",
        "Grass",
        "Colorless"
      ],
      "name": "Forest Blast",
      "damage": "220",
      "text": ""
    }
  ]
},
  {
  "id": "sv4pt5-241",
  "name": "Chi-Yu ex",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic",
    "ex"
  ],
  "types": [
    "Fire"
  ],
  "hp": "190",
  "rarity": "Hyper Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/241_hires.png",
  "marketPrice": 12.08,
  "rules": [
    "Pokémon ex rule: When your Pokémon ex is Knocked Out, your opponent takes 2 Prize cards."
  ],
  "attacks": [
    {
      "cost": [
        "Fire"
      ],
      "name": "Jealously Singe",
      "damage": "",
      "text": "Discard the top 2 cards of your opponent's deck."
    },
    {
      "cost": [
        "Fire",
        "Fire"
      ],
      "name": "Flame Surge",
      "damage": "100",
      "text": "Choose up to 3 of your Benched Pokémon. For each of those Pokémon, search your deck for a Basic Fire Energy card and attach it to that Pokémon. Then, shuffle your deck."
    }
  ]
},
  {
  "id": "sv4pt5-245",
  "name": "Koraidon ex",
  "supertype": "Pokémon",
  "subtypes": [
    "Basic",
    "ex"
  ],
  "types": [
    "Fighting"
  ],
  "hp": "230",
  "rarity": "Hyper Rare",
  "set": "sv4pt5",
  "setName": "Paldean Fates",
  "imageUrl": "https://images.pokemontcg.io/sv4pt5/245_hires.png",
  "marketPrice": 12.96,
  "rules": [
    "Pokémon ex rule: When your Pokémon ex is Knocked Out, your opponent takes 2 Prize cards."
  ],
  "attacks": [
    {
      "cost": [
        "Fighting",
        "Fighting",
        "Colorless"
      ],
      "name": "Wild Impact",
      "damage": "220",
      "text": "During your next turn, this Pokémon can't attack."
    }
  ]
}
];

// Active Card Cache to store loaded cards (local + API)
window.cardsCache = [...window.LOCAL_CARDS];
window.isLiveApiEnabled = false;

// Enable/Disable live pokemontcg.io API query
window.setLiveApiMode = function(enabled) {
  window.isLiveApiEnabled = enabled;
};

window.isLiveApiActive = function() {
  return window.isLiveApiEnabled;
};

// 2. Main Card Search & Query Function (Merges Local & Live API Results)
window.queryCards = async function({ name = "", type = "", element = "", rarity = "" }) {
  // Grabbing from cached/local first
  let filtered = window.cardsCache.filter(card => {
    // Name query
    if (name && !card.name.toLowerCase().includes(name.toLowerCase())) return false;
    
    // Type query (pokemon, trainer, energy)
    if (type && card.supertype.toLowerCase() !== type.toLowerCase()) return false;
    
    // Element/Energy type query
    if (element) {
      if (card.supertype === "Pokémon" && (!card.types || !card.types.includes(element))) return false;
      if (card.supertype === "Energy" && (!card.types || !card.types.includes(element))) return false;
      if (card.supertype === "Trainer") return false; // Trainers don't have types
    }
    
    // Rarity query
    if (rarity && card.rarity !== rarity) return false;
    
    return true;
  });

  // If live API mode is turned on and search has a name query, fetch from pokemontcg.io
  if (window.isLiveApiEnabled && name.length >= 3) {
    try {
      let queryStr = `name:"*${name}*"`;
      if (type) queryStr += ` supertype:${type}`;
      if (element) queryStr += ` types:${element}`;
      if (rarity) queryStr += ` rarity:"${rarity}"`;

      const response = await fetch(`https://api.pokemontcg.io/v2/cards?q=${encodeURIComponent(queryStr)}&pageSize=12`);
      if (response.ok) {
        const json = await response.json();
        if (json.data && json.data.length > 0) {
          // Format API cards to match local card schema
          const apiCards = json.data.map(apiCard => ({
            id: apiCard.id,
            name: apiCard.name,
            supertype: apiCard.supertype,
            subtypes: apiCard.subtypes || [],
            types: apiCard.types || [],
            hp: apiCard.hp || "",
            rarity: apiCard.rarity || "Common",
            set: apiCard.set.id,
            setName: apiCard.set.name,
            imageUrl: apiCard.images.large || apiCard.images.small,
            marketPrice: apiCard.tcgplayer?.prices?.holofoil?.market || apiCard.tcgplayer?.prices?.normal?.market || 1.00,
            rules: apiCard.rules || [],
            attacks: apiCard.attacks || []
          }));

          // Merge cards into cache ensuring no duplicates
          apiCards.forEach(newCard => {
            if (!window.cardsCache.some(c => c.id === newCard.id)) {
              window.cardsCache.push(newCard);
              filtered.push(newCard);
            }
          });
        }
      }
    } catch (e) {
      console.warn("Failed to fetch live cards from pokemontcg.io, fallback to cache.", e);
    }
  }

  return filtered;
};

window.getCardById = function(id) {
  return window.cardsCache.find(c => c.id === id);
};

// 3. Helper to determine if a card is rare enough to warrant holographic shine effect
window.isCardHolo = function(card) {
  if (!card) return false;
  const rareTypes = ["Double Rare", "Ultra Rare", "Special Illustration Rare", "Hyper Rare", "Rare", "Secret Rare"];
  return rareTypes.includes(card.rarity) || card.subtypes?.includes("ex") || card.subtypes?.includes("VSTAR");
};

// 4. Apply 3D tilt and reflection effect to card elements
window.applyCard3DEffect = function(cardEl, cardData) {
  if (!cardEl) return;
  
  // Tag holographic class if card is rare
  if (window.isCardHolo(cardData)) {
    cardEl.classList.add("holo");
  }

  cardEl.addEventListener("mousemove", (e) => {
    const rect = cardEl.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Percentage coords
    const px = (x / rect.width) * 100;
    const py = (y / rect.height) * 100;
    
    // Rotation calculations (tilt max 18 degrees)
    const rx = ((py - 50) / 50) * -15; 
    const ry = ((px - 50) / 50) * 15;
    
    cardEl.style.setProperty("--rx", `${rx}deg`);
    cardEl.style.setProperty("--ry", `${ry}deg`);
    cardEl.style.setProperty("--mx", `${px}%`);
    cardEl.style.setProperty("--my", `${py}%`);
  });

  cardEl.addEventListener("mouseleave", () => {
    // Reset positioning
    cardEl.style.setProperty("--rx", `0deg`);
    cardEl.style.setProperty("--ry", `0deg`);
    cardEl.style.setProperty("--mx", `50%`);
    cardEl.style.setProperty("--my", `50%`);
  });
};
