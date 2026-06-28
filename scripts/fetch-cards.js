const fs = require('fs');

async function fetchSet(setId) {
  let allCards = [];
  let page = 1;
  while (true) {
    const res = await fetch(`https://api.pokemontcg.io/v2/cards?q=set.id:${setId}&page=${page}&pageSize=250`);
    const json = await res.json();
    if (!json.data || json.data.length === 0) break;
    allCards.push(...json.data);
    if (page * 250 >= json.totalCount) break;
    page++;
  }
  return allCards;
}

async function main() {
  console.log("Fetching sv3pt5 (151)...");
  const set151 = await fetchSet("sv3pt5");
  console.log(`Found ${set151.length} cards in 151.`);
  
  console.log("Fetching paf (Paldean Fates)...");
  const paf = await fetchSet("sv4pt5");
  console.log(`Found ${paf.length} cards in Paldean Fates.`);

  const allApiCards = [...set151, ...paf];
  
  // Format them
  const formattedCards = allApiCards.map(apiCard => ({
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
    attacks: apiCard.attacks ? apiCard.attacks.map(a => ({ cost: a.cost, name: a.name, damage: a.damage, text: a.text })) : []
  }));

  let content = fs.readFileSync('js/cards-data.js', 'utf8');
  
  // We need to insert formattedCards into the LOCAL_CARDS array.
  // We can find the end of the array: `];\n\n// Active Card Cache`
  // And insert them there.
  
  // Create a JSON string, then trim the brackets
  let newCardsStr = formattedCards.map(c => JSON.stringify(c, null, 2)).join(',\n  ');
  
  // Since some existing cards might have the same ID (unlikely, but possible), we should filter them.
  // Actually, wait, let's just use string replace.
  
  // Find the exact marker where LOCAL_CARDS ends.
  const endMarker = /];\r?\n\r?\n\/\/ Active Card Cache to store loaded cards/;
  if (!content.match(endMarker)) {
     console.error("Could not find end marker for LOCAL_CARDS");
     process.exit(1);
  }
  
  // Insert with a comma
  const insertion = `,\n  // --- AUTO FETCHED SETS (151 & PAF) ---\n  ${newCardsStr}\n];\n\n// Active Card Cache to store loaded cards`;
  content = content.replace(endMarker, insertion);
  
  fs.writeFileSync('js/cards-data.js', content, 'utf8');
  console.log("Successfully appended new cards to js/cards-data.js");
}

main().catch(console.error);
