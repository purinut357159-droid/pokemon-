/**
 * PokéTCG Premium - Local Cards Database & API Engine
 */

// 1. Local Database of High-Quality Cards representing Meta and Pack Simulator
window.LOCAL_CARDS = [
  // --- SV06: Twilight Masquerade ---
  {
    id: "sv06-130",
    name: "Dragapult ex",
    supertype: "Pokémon",
    subtypes: ["Stage 2", "ex"],
    types: ["Dragon"],
    hp: "320",
    rarity: "Double Rare",
    set: "sv06",
    setName: "Twilight Masquerade",
    imageUrl: "https://images.pokemontcg.io/sv06/130.png",
    marketPrice: 9.50,
    rules: ["Rules: When your Pokémon ex is Knocked Out, your opponent takes 2 Prize cards."],
    attacks: [
      { cost: ["Fire", "Psychic"], name: "Phantom Dive", damage: "200", text: "Put 6 damage counters on your opponent's Bench Pokémon in any way you like." }
    ]
  },
  {
    id: "sv06-25",
    name: "Teal Mask Ogerpon ex",
    supertype: "Pokémon",
    subtypes: ["Basic", "ex"],
    types: ["Grass"],
    hp: "210",
    rarity: "Double Rare",
    set: "sv06",
    setName: "Twilight Masquerade",
    imageUrl: "https://images.pokemontcg.io/sv06/25.png",
    marketPrice: 12.00,
    rules: ["Ability: Teal Dance - Once during your turn, you may attach a Basic Grass Energy card from your hand to this Pokémon. If you do, draw a card."],
    attacks: [
      { cost: ["Grass", "Grass", "Grass"], name: "Myriad Leaf Shower", damage: "30+", text: "This attack does 30 more damage for each Energy attached to both Active Pokémon." }
    ]
  },
  {
    id: "sv06-106",
    name: "Greninja ex",
    supertype: "Pokémon",
    subtypes: ["Stage 2", "ex"],
    types: ["Water"],
    hp: "310",
    rarity: "Double Rare",
    set: "sv06",
    setName: "Twilight Masquerade",
    imageUrl: "https://images.pokemontcg.io/sv06/106.png",
    marketPrice: 15.50,
    rules: ["Rules: When your Pokémon ex is Knocked Out, your opponent takes 2 Prize cards."],
    attacks: [
      { cost: ["Water"], name: "Shinobi Blade", damage: "170", text: "Search your deck for any 1 card and put it into your hand." },
      { cost: ["Water", "Colorless", "Colorless"], name: "Mirage Barrage", damage: "", text: "Discard 2 Energy from this Pokémon. This attack does 120 damage to 2 of your opponent's Pokémon." }
    ]
  },
  {
    id: "sv06-208",
    name: "Teal Mask Ogerpon ex (SAR)",
    supertype: "Pokémon",
    subtypes: ["Basic", "ex"],
    types: ["Grass"],
    hp: "210",
    rarity: "Special Illustration Rare",
    set: "sv06",
    setName: "Twilight Masquerade",
    imageUrl: "https://images.pokemontcg.io/sv06/208.png",
    marketPrice: 75.00,
    rules: ["Ability: Teal Dance - Draw card and attach Grass Energy."],
    attacks: [
      { cost: ["Grass", "Grass", "Grass"], name: "Myriad Leaf Shower", damage: "30+", text: "30 more damage for each Energy attached to both Active Pokémon." }
    ]
  },
  {
    id: "sv06-145",
    name: "Carmine",
    supertype: "Trainer",
    subtypes: ["Supporter"],
    types: [],
    hp: "",
    rarity: "Uncommon",
    set: "sv06",
    setName: "Twilight Masquerade",
    imageUrl: "https://images.pokemontcg.io/sv06/145.png",
    marketPrice: 1.20,
    rules: ["Discard your hand and draw 5 cards. If you go first, you can play this card on your first turn."],
    attacks: []
  },
  {
    id: "sv06-217",
    name: "Carmine (SAR)",
    supertype: "Trainer",
    subtypes: ["Supporter"],
    types: [],
    hp: "",
    rarity: "Special Illustration Rare",
    set: "sv06",
    setName: "Twilight Masquerade",
    imageUrl: "https://images.pokemontcg.io/sv06/217.png",
    marketPrice: 110.00,
    rules: ["Discard your hand and draw 5 cards. Special illustration art."],
    attacks: []
  },

  // --- SV05: Temporal Forces ---
  {
    id: "sv05-81",
    name: "Iron Crown ex",
    supertype: "Pokémon",
    subtypes: ["Basic", "Future", "ex"],
    types: ["Psychic"],
    hp: "220",
    rarity: "Double Rare",
    set: "sv05",
    setName: "Temporal Forces",
    imageUrl: "https://images.pokemontcg.io/sv05/81.png",
    marketPrice: 8.20,
    rules: ["Ability: Cobalt Command - Your Future Pokémon's attacks (except this one) do 20 more damage to your opponent's Active Pokémon."],
    attacks: [
      { cost: ["Psychic", "Colorless", "Colorless"], name: "Twin Laser", damage: "", text: "This attack does 20 damage to 2 of your opponent's Pokémon. This attack's damage isn't affected by Weakness." }
    ]
  },
  {
    id: "sv05-123",
    name: "Raging Bolt ex",
    supertype: "Pokémon",
    subtypes: ["Basic", "Ancient", "ex"],
    types: ["Dragon"],
    hp: "240",
    rarity: "Double Rare",
    set: "sv05",
    setName: "Temporal Forces",
    imageUrl: "https://images.pokemontcg.io/sv05/123.png",
    marketPrice: 14.00,
    rules: ["Rules: When your Pokémon ex is Knocked Out, your opponent takes 2 Prize cards."],
    attacks: [
      { cost: ["Lightning", "Fighting"], name: "Bellowing Thunder", damage: "70x", text: "You may discard any amount of Basic Energy from your Pokémon. This attack does 70 damage for each card discarded this way." }
    ]
  },
  {
    id: "sv05-208",
    name: "Raging Bolt ex (SAR)",
    supertype: "Pokémon",
    subtypes: ["Basic", "Ancient", "ex"],
    types: ["Dragon"],
    hp: "240",
    rarity: "Special Illustration Rare",
    set: "sv05",
    setName: "Temporal Forces",
    imageUrl: "https://images.pokemontcg.io/sv05/208.png",
    marketPrice: 95.00,
    rules: ["Special Illustration Rare Ancient Pokemon ex."],
    attacks: [
      { cost: ["Lightning", "Fighting"], name: "Bellowing Thunder", damage: "70x", text: "Does 70 damage for each discarded Basic Energy." }
    ]
  },
  {
    id: "sv05-144",
    name: "Buddy-Buddy Poffin",
    supertype: "Trainer",
    subtypes: ["Item"],
    types: [],
    hp: "",
    rarity: "Uncommon",
    set: "sv05",
    setName: "Temporal Forces",
    imageUrl: "https://images.pokemontcg.io/sv05/144.png",
    marketPrice: 2.50,
    rules: ["Search your deck for up to 2 Basic Pokémon with 70 HP or less and put them onto your Bench. Then, shuffle your deck."],
    attacks: []
  },

  // --- Base Set (1999 Classic Era) ---
  {
    id: "base-4",
    name: "Charizard",
    supertype: "Pokémon",
    subtypes: ["Stage 2"],
    types: ["Fire"],
    hp: "120",
    rarity: "Rare",
    set: "base",
    setName: "Base Set 1999",
    imageUrl: "https://images.pokemontcg.io/base1/4.png",
    marketPrice: 350.00,
    rules: ["Pokémon Power: Energy Burn - As often as you like during your turn, you may turn all Energy attached to Charizard into Fire Energy for the rest of the turn."],
    attacks: [
      { cost: ["Fire", "Fire", "Fire", "Fire"], name: "Fire Spin", damage: "100", text: "Discard 2 Energy attached to Charizard in order to use this attack." }
    ]
  },
  {
    id: "base-15",
    name: "Venusaur",
    supertype: "Pokémon",
    subtypes: ["Stage 2"],
    types: ["Grass"],
    hp: "100",
    rarity: "Rare",
    set: "base",
    setName: "Base Set 1999",
    imageUrl: "https://images.pokemontcg.io/base1/15.png",
    marketPrice: 85.00,
    rules: ["Pokémon Power: Energy Trans - As often as you like during your turn, you may move 1 Grass Energy card attached to 1 of your Pokémon to another."],
    attacks: [
      { cost: ["Grass", "Grass", "Grass", "Grass"], name: "Solarbeam", damage: "67", text: "" }
    ]
  },
  {
    id: "base-2",
    name: "Blastoise",
    supertype: "Pokémon",
    subtypes: ["Stage 2"],
    types: ["Water"],
    hp: "100",
    rarity: "Rare",
    set: "base",
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
    id: "sv03-125",
    name: "Charizard ex",
    supertype: "Pokémon",
    subtypes: ["Stage 2", "ex"],
    types: ["Darkness"], // Tera Dark type
    hp: "330",
    rarity: "Double Rare",
    set: "sv03",
    setName: "Obsidian Flames",
    imageUrl: "https://images.pokemontcg.io/sv03/125.png",
    marketPrice: 28.00,
    rules: ["Ability: Infernal Reign - When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may search your deck for up to 3 Basic Fire Energy cards and attach them to your Pokémon in any way you like. Then, shuffle your deck."],
    attacks: [
      { cost: ["Fire", "Fire"], name: "Burning Darkness", damage: "180+", text: "This attack does 30 more damage for each Prize card your opponent has taken." }
    ]
  },
  {
    id: "sv01-86",
    name: "Gardevoir ex",
    supertype: "Pokémon",
    subtypes: ["Stage 2", "ex"],
    types: ["Psychic"],
    hp: "310",
    rarity: "Double Rare",
    set: "sv01",
    setName: "Scarlet & Violet",
    imageUrl: "https://images.pokemontcg.io/sv01/86.png",
    marketPrice: 4.50,
    rules: ["Ability: Psychic Embrace - As often as you like during your turn, you may attach a Basic Psychic Energy card from your discard pile to 1 of your Psychic Pokémon. If you do, put 2 damage counters on that Pokémon."],
    attacks: [
      { cost: ["Psychic", "Psychic", "Colorless"], name: "Force Leap", damage: "190", text: "" }
    ]
  },
  {
    id: "sv01-166",
    name: "Arven",
    supertype: "Trainer",
    subtypes: ["Supporter"],
    types: [],
    hp: "",
    rarity: "Uncommon",
    set: "sv01",
    setName: "Scarlet & Violet",
    imageUrl: "https://images.pokemontcg.io/sv01/166.png",
    marketPrice: 2.10,
    rules: ["Search your deck for an Item card and a Pokémon Tool card, reveal them, and put them into your hand. Then, shuffle your deck."],
    attacks: []
  },
  {
    id: "sv01-172",
    name: "Iono",
    supertype: "Trainer",
    subtypes: ["Supporter"],
    types: [],
    hp: "",
    rarity: "Uncommon",
    set: "sv01",
    setName: "Scarlet & Violet",
    imageUrl: "https://images.pokemontcg.io/sv01/172.png",
    marketPrice: 3.50,
    rules: ["Each player shuffles their hand and puts it on the bottom of their deck. Then, each player draws a card for each of their remaining Prize cards."],
    attacks: []
  },
  {
    id: "sv04-163",
    name: "Earthen Vessel",
    supertype: "Trainer",
    subtypes: ["Item"],
    types: [],
    hp: "",
    rarity: "Uncommon",
    set: "sv04",
    setName: "Paradox Rift",
    imageUrl: "https://images.pokemontcg.io/sv04/163.png",
    marketPrice: 4.80,
    rules: ["You can play this card only if you discard another card from your hand. Search your deck for up to 2 Basic Energy cards, reveal them, and put them into your hand. Then, shuffle your deck."],
    attacks: []
  },
  {
    id: "sv01-180",
    name: "Nest Ball",
    supertype: "Trainer",
    subtypes: ["Item"],
    types: [],
    hp: "",
    rarity: "Uncommon",
    set: "sv01",
    setName: "Scarlet & Violet",
    imageUrl: "https://images.pokemontcg.io/sv01/180.png",
    marketPrice: 1.50,
    rules: ["Search your deck for a Basic Pokémon and put it onto your Bench. Then, shuffle your deck."],
    attacks: []
  },
  {
    id: "sv01-194",
    name: "Ultra Ball",
    supertype: "Trainer",
    subtypes: ["Item"],
    types: [],
    hp: "",
    rarity: "Uncommon",
    set: "sv01",
    setName: "Scarlet & Violet",
    imageUrl: "https://images.pokemontcg.io/sv01/194.png",
    marketPrice: 0.80,
    rules: ["You can play this card only if you discard 2 other cards from your hand. Search your deck for a Pokémon, reveal it, and put it into your hand. Then, shuffle your deck."],
    attacks: []
  },

  // --- Energies (Essential for Deck Building & Tutorial) ---
  {
    id: "sv01-229",
    name: "Grass Energy",
    supertype: "Energy",
    subtypes: ["Basic"],
    types: ["Grass"],
    hp: "",
    rarity: "Common",
    set: "sv01",
    setName: "Scarlet & Violet",
    imageUrl: "https://images.pokemontcg.io/sv01/229.png",
    marketPrice: 0.10,
    rules: ["Basic Grass Energy used to power Pokémon attacks."],
    attacks: []
  },
  {
    id: "sv01-230",
    name: "Fire Energy",
    supertype: "Energy",
    subtypes: ["Basic"],
    types: ["Fire"],
    hp: "",
    rarity: "Common",
    set: "sv01",
    setName: "Scarlet & Violet",
    imageUrl: "https://images.pokemontcg.io/sv01/230.png",
    marketPrice: 0.10,
    rules: ["Basic Fire Energy used to power Pokémon attacks."],
    attacks: []
  },
  {
    id: "sv01-231",
    name: "Water Energy",
    supertype: "Energy",
    subtypes: ["Basic"],
    types: ["Water"],
    hp: "",
    rarity: "Common",
    set: "sv01",
    setName: "Scarlet & Violet",
    imageUrl: "https://images.pokemontcg.io/sv01/231.png",
    marketPrice: 0.10,
    rules: ["Basic Water Energy used to power Pokémon attacks."],
    attacks: []
  },
  {
    id: "sv01-232",
    name: "Psychic Energy",
    supertype: "Energy",
    subtypes: ["Basic"],
    types: ["Psychic"],
    hp: "",
    rarity: "Common",
    set: "sv01",
    setName: "Scarlet & Violet",
    imageUrl: "https://images.pokemontcg.io/sv01/232.png",
    marketPrice: 0.10,
    rules: ["Basic Psychic Energy used to power Pokémon attacks."],
    attacks: []
  },
  {
    id: "sv01-233",
    name: "Lightning Energy",
    supertype: "Energy",
    subtypes: ["Basic"],
    types: ["Lightning"],
    hp: "",
    rarity: "Common",
    set: "sv01",
    setName: "Scarlet & Violet",
    imageUrl: "https://images.pokemontcg.io/sv01/233.png",
    marketPrice: 0.10,
    rules: ["Basic Lightning Energy used to power Pokémon attacks."],
    attacks: []
  },
  {
    id: "sv01-234",
    name: "Fighting Energy",
    supertype: "Energy",
    subtypes: ["Basic"],
    types: ["Fighting"],
    hp: "",
    rarity: "Common",
    set: "sv01",
    setName: "Scarlet & Violet",
    imageUrl: "https://images.pokemontcg.io/sv01/234.png",
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
