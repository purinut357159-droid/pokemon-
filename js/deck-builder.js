/**
 * PokéTCG Premium - Interactive Deck Builder
 */

// 1. Deck State
window.currentDeck = {}; // Schema: { cardId: qty }

// 2. Initialize Event Listeners
window.initDeckBuilder = function(onCardClick) {
  const btnClear = document.getElementById("btn-clear-deck");
  const btnExport = document.getElementById("btn-export-deck");
  const btnImport = document.getElementById("btn-import-deck");
  const btnDraw = document.getElementById("btn-draw-hand");
  const inputSearch = document.getElementById("deck-search-input");

  if (btnClear) btnClear.addEventListener("click", window.clearDeck);
  if (btnExport) btnExport.addEventListener("click", window.exportDeck);
  if (btnImport) btnImport.addEventListener("click", window.importDeck);
  if (btnDraw) btnDraw.addEventListener("click", window.simulateStartingHand);
  
  if (inputSearch) {
    inputSearch.addEventListener("input", (e) => {
      window.renderSelectorGrid(e.target.value);
    });
  }

  // Draw initial selector list
  window.renderSelectorGrid("");
  window.updateDeckUI();
};

// 3. UI Redraw functions
window.renderSelectorGrid = function(searchQuery = "") {
  const grid = document.getElementById("deck-selector-grid");
  if (!grid) return;
  grid.innerHTML = "";

  const query = searchQuery.toLowerCase();
  const matched = window.LOCAL_CARDS.filter(card => {
    return card.name.toLowerCase().includes(query) || 
           card.supertype.toLowerCase().includes(query) ||
           card.setName.toLowerCase().includes(query);
  });

  matched.forEach(card => {
    const cardEl = document.createElement("div");
    cardEl.className = "selector-card";
    cardEl.style.backgroundImage = `url('${card.imageUrl}')`;
    cardEl.setAttribute("data-id", card.id);
    
    // Quantity indicator
    const qty = window.currentDeck[card.id] || 0;
    if (qty > 0) {
      const qtyBadge = document.createElement("div");
      qtyBadge.className = "card-qty-badge";
      qtyBadge.textContent = qty;
      cardEl.appendChild(qtyBadge);
    }

    cardEl.addEventListener("click", () => {
      window.addCard(card.id);
    });

    grid.appendChild(cardEl);
  });
};

window.renderCanvasLists = function() {
  const colPokemon = document.getElementById("deck-column-pokemon");
  const colTrainer = document.getElementById("deck-column-trainer");
  const colEnergy = document.getElementById("deck-column-energy");

  if (!colPokemon || !colTrainer || !colEnergy) return;

  colPokemon.innerHTML = "";
  colTrainer.innerHTML = "";
  colEnergy.innerHTML = "";

  let counts = { pokemon: 0, trainer: 0, energy: 0 };

  Object.entries(window.currentDeck).forEach(([cardId, qty]) => {
    if (qty <= 0) return;
    const card = window.getCardById(cardId);
    if (!card) return;

    const row = document.createElement("div");
    row.className = "deck-item-row";
    row.innerHTML = `
      <div class="deck-item-info">
        <span class="deck-item-qty">${qty}</span>
        <span class="deck-item-name">${card.name}</span>
      </div>
      <div class="deck-item-actions">
        <button class="btn-minus"><i data-lucide="minus"></i></button>
        <button class="btn-plus"><i data-lucide="plus"></i></button>
      </div>
    `;

    row.querySelector(".btn-minus").addEventListener("click", (e) => {
      e.stopPropagation();
      window.removeCard(cardId);
    });
    row.querySelector(".btn-plus").addEventListener("click", (e) => {
      e.stopPropagation();
      window.addCard(cardId);
    });
    
    // Clicking the row opens the 3D detail modal
    row.addEventListener("click", () => {
      window.appOpenCardModal(cardId);
    });

    if (card.supertype.toLowerCase() === "pokemon") {
      colPokemon.appendChild(row);
      counts.pokemon += qty;
    } else if (card.supertype.toLowerCase() === "trainer") {
      colTrainer.appendChild(row);
      counts.trainer += qty;
    } else if (card.supertype.toLowerCase() === "energy") {
      colEnergy.appendChild(row);
      counts.energy += qty;
    }
  });

  // Update category counts
  document.getElementById("count-deck-pokemon").textContent = counts.pokemon;
  document.getElementById("count-deck-trainer").textContent = counts.trainer;
  document.getElementById("count-deck-energy").textContent = counts.energy;

  // Re-initialize Lucide icons in generated elements
  if (window.lucide) window.lucide.createIcons();
};

window.updateDeckUI = function() {
  window.renderCanvasLists();
  
  // Calculate total cards
  const totalCards = Object.values(window.currentDeck).reduce((sum, qty) => sum + qty, 0);
  document.getElementById("deck-total-count").textContent = totalCards;
  
  // Progress bar width
  const progressPercent = Math.min((totalCards / 60) * 100, 100);
  document.getElementById("deck-progress-bar").style.width = `${progressPercent}%`;

  // Validation badge rules
  const validationBadge = document.getElementById("deck-validation-badge");
  const isValid = window.validateDeckRules(totalCards);

  if (isValid) {
    validationBadge.textContent = "✓ ผ่านกฎการจัดเด็ค";
    validationBadge.className = "badge valid";
  } else {
    if (totalCards !== 60) {
      validationBadge.textContent = `ยังไม่ครบ 60 ใบ (${totalCards}/60)`;
    } else {
      validationBadge.textContent = "ผิดเงื่อนไขซ้ำเกิน 4 ใบ";
    }
    validationBadge.className = "badge invalid";
  }

  // Draw Breakdown Charts
  window.updateCharts(totalCards);
};

// 4. Core Deck Business Rules
window.addCard = function(cardId) {
  const card = window.getCardById(cardId);
  if (!card) return;

  const totalCards = Object.values(window.currentDeck).reduce((sum, qty) => sum + qty, 0);
  if (totalCards >= 60) {
    alert("ไม่สามารถเพิ่มได้เนื่องจากเด็คครบ 60 ใบแล้ว");
    return;
  }

  const currentQty = window.currentDeck[cardId] || 0;
  const isBasicEnergy = card.supertype.toLowerCase() === "energy" && card.subtypes.includes("Basic");

  if (currentQty >= 4 && !isBasicEnergy) {
    alert(`ไม่สามารถใส่การ์ดชื่อเดียวกันเกิน 4 ใบได้ (ยกเว้น Basic Energy)`);
    return;
  }

  window.currentDeck[cardId] = currentQty + 1;
  
  // Update UI and search sidebar badge
  window.updateDeckUI();
  
  const searchInput = document.getElementById("deck-search-input");
  window.renderSelectorGrid(searchInput ? searchInput.value : "");
};

window.removeCard = function(cardId) {
  if (window.currentDeck[cardId]) {
    window.currentDeck[cardId]--;
    if (window.currentDeck[cardId] <= 0) {
      delete window.currentDeck[cardId];
    }
  }
  window.updateDeckUI();
  
  const searchInput = document.getElementById("deck-search-input");
  window.renderSelectorGrid(searchInput ? searchInput.value : "");
};

window.clearDeck = function() {
  if (confirm("คุณแน่ใจหรือไม่ว่าต้องการล้างเด็คทั้งหมด?")) {
    window.currentDeck = {};
    window.updateDeckUI();
    window.renderSelectorGrid("");
    const container = document.getElementById("starting-hand-container");
    if (container) container.innerHTML = `<p class="placeholder-text">จัดเด็คให้ได้อย่างน้อย 7 ใบแล้วกดจั่วจำลองที่นี่</p>`;
  }
};

// Helper: check deck rules
window.validateDeckRules = function(totalCount) {
  if (totalCount !== 60) return false;
  
  // Check duplicates
  for (const [cardId, qty] of Object.entries(window.currentDeck)) {
    const card = window.getCardById(cardId);
    if (!card) continue;
    const isBasicEnergy = card.supertype.toLowerCase() === "energy" && card.subtypes.includes("Basic");
    if (qty > 4 && !isBasicEnergy) return false;
  }
  return true;
};

// Update charts
window.updateCharts = function(totalCount) {
  let pokemonQty = 0;
  let trainerQty = 0;
  let energyQty = 0;

  Object.entries(window.currentDeck).forEach(([cardId, qty]) => {
    const card = window.getCardById(cardId);
    if (!card) return;
    if (card.supertype.toLowerCase() === "pokemon") pokemonQty += qty;
    else if (card.supertype.toLowerCase() === "trainer") trainerQty += qty;
    else if (card.supertype.toLowerCase() === "energy") energyQty += qty;
  });

  const divider = totalCount || 1;
  const pPercent = Math.round((pokemonQty / divider) * 100);
  const tPercent = Math.round((trainerQty / divider) * 100);
  const ePercent = Math.round((energyQty / divider) * 100);

  document.getElementById("chart-bar-pokemon").style.width = `${pPercent}%`;
  document.getElementById("chart-lbl-pokemon").textContent = `${pPercent}%`;

  document.getElementById("chart-bar-trainer").style.width = `${tPercent}%`;
  document.getElementById("chart-lbl-trainer").textContent = `${tPercent}%`;

  document.getElementById("chart-bar-energy").style.width = `${ePercent}%`;
  document.getElementById("chart-lbl-energy").textContent = `${ePercent}%`;
};

// 5. Starting Hand Simulator
window.simulateStartingHand = function() {
  const totalCards = Object.values(window.currentDeck).reduce((sum, qty) => sum + qty, 0);
  const container = document.getElementById("starting-hand-container");
  if (!container) return;

  if (totalCards < 7) {
    alert("ต้องจัดเด็คให้มีขั้นต่ำ 7 ใบจึงจะจำลองการจั่วการ์ดเริ่มแรกได้");
    return;
  }

  // Flatten deck to single items
  let flatDeck = [];
  Object.entries(window.currentDeck).forEach(([cardId, qty]) => {
    const card = window.getCardById(cardId);
    if (!card) return;
    for (let i = 0; i < qty; i++) {
      flatDeck.push(card);
    }
  });

  // Fisher-Yates Shuffle
  for (let i = flatDeck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [flatDeck[i], flatDeck[j]] = [flatDeck[j], flatDeck[i]];
  }

  // Get 7 cards
  const startingHand = flatDeck.slice(0, 7);
  container.innerHTML = "";

  startingHand.forEach(card => {
    const cardImg = document.createElement("div");
    cardImg.className = "mini-hand-card";
    cardImg.style.backgroundImage = `url('${card.imageUrl}')`;
    cardImg.title = card.name;
    
    cardImg.addEventListener("click", () => {
      window.appOpenCardModal(card.id);
    });

    container.appendChild(cardImg);
  });
};

// 6. Export / Import Functions
window.exportDeck = function() {
  const totalCards = Object.values(window.currentDeck).reduce((sum, qty) => sum + qty, 0);
  if (totalCards === 0) {
    alert("เด็คว่างเปล่า ไม่สามารถส่งออกได้");
    return;
  }

  let textLines = [];
  Object.entries(window.currentDeck).forEach(([cardId, qty]) => {
    const card = window.getCardById(cardId);
    if (card) {
      // standard format: Qty Name (Set) CardNumber
      textLines.push(`${qty} ${card.name} [${card.set.toUpperCase()}] ${card.id.split('-')[1] || card.id}`);
    }
  });

  const exportText = textLines.join("\n");
  
  // Use simple copy-to-clipboard or alert
  navigator.clipboard.writeText(exportText).then(() => {
    alert("คัดลอกโค้ดเด็คไปยังคลิปบอร์ดแล้ว! คุณสามารถนำโค้ดนี้ไปเปิดใช้งานใน Pokémon TCG Live หรือแชร์ต่อได้ทันที\n\nตัวอย่าง:\n" + exportText);
  }).catch(() => {
    alert("ไม่สามารถส่งออกอัตโนมัติได้ นี่คือโค้ดเด็คของคุณ:\n\n" + exportText);
  });
};

window.importDeck = function() {
  const code = prompt("วางรหัสเด็ค (Deck Code) มาตรฐานที่นี่ เพื่อนำเข้า:");
  if (!code) return;

  try {
    const lines = code.split("\n");
    let newDeck = {};
    let parsedCount = 0;

    lines.forEach(line => {
      const trimmed = line.trim();
      if (!trimmed) return;

      // Simple regex: Match starting digits for quantity, then the rest
      const match = trimmed.match(/^(\d+)\s+(.+)$/);
      if (match) {
        const qty = parseInt(match[1]);
        const cardDetails = match[2];
        
        // Find matching local card by name in details
        const found = window.LOCAL_CARDS.find(card => {
          return cardDetails.toLowerCase().includes(card.name.toLowerCase());
        });

        if (found) {
          newDeck[found.id] = (newDeck[found.id] || 0) + qty;
          parsedCount += qty;
        }
      }
    });

    if (parsedCount === 0) {
      alert("ไม่พบข้อมูลการ์ดที่สอดคล้องกับฐานข้อมูล กรุณาตรวจสอบรหัสเด็คอีกครั้ง");
    } else {
      window.currentDeck = newDeck;
      window.updateDeckUI();
      window.renderSelectorGrid("");
      alert(`นำเข้าเด็คการ์ดเรียบร้อย! ค้นพบและนำเข้าทั้งหมด ${parsedCount} ใบ`);
    }
  } catch (err) {
    alert("ขออภัย รูปแบบรหัสเด็คไม่ถูกต้อง");
  }
};
