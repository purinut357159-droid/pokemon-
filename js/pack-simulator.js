/**
 * PokéTCG Premium - 3D Booster Pack Simulator
 */

// 1. Pack Simulator State
window.packTickets = 5;
window.currentSelectedSet = "sv06";
window.openedCards = []; // Cache of currently drawn cards in this pack

// Callback function to save cards to binder
let onCardsCollectedCallback = null;

// 2. Initialize Module
window.initPackSimulator = function(onCardsCollected) {
  onCardsCollectedCallback = onCardsCollected;

  const btnRip = document.getElementById("btn-rip-pack");
  const btnCollect = document.getElementById("btn-collect-pack");
  const btnBuyPack = document.getElementById("btn-buy-pack");
  const packSetCards = document.querySelectorAll(".pack-set-card");
  const packModel = document.getElementById("pack-3d-model");

  // Pack Click to Rip
  if (btnRip) btnRip.addEventListener("click", window.ripPack);
  if (packModel) packModel.addEventListener("click", window.ripPack);

  if (btnCollect) btnCollect.addEventListener("click", window.collectOpenedCards);
  
  if (btnBuyPack) {
    btnBuyPack.addEventListener("click", () => {
      window.packTickets += 3;
      window.updateTicketsUI();
      alert("ได้รับซองการ์ดฟรีเพิ่มอีก 3 ซอง เรียบร้อยแล้ว!");
    });
  }

  // Set Selection
  packSetCards.forEach(card => {
    card.addEventListener("click", () => {
      packSetCards.forEach(c => c.classList.remove("active"));
      card.classList.add("active");
      window.currentSelectedSet = card.getAttribute("data-set");
      window.resetPackStage();
    });
  });

  window.updateTicketsUI();
};

window.updateTicketsUI = function() {
  const lblCount = document.getElementById("pack-tickets-count");
  if (lblCount) lblCount.textContent = window.packTickets;
};

// 3. Reset Simulation View
window.resetPackStage = function() {
  const sealedScreen = document.getElementById("sealed-pack-screen");
  const unveiledScreen = document.getElementById("unveiled-cards-screen");
  const packModel = document.getElementById("pack-3d-model");

  if (sealedScreen && unveiledScreen && packModel) {
    sealedScreen.classList.remove("hidden");
    unveiledScreen.classList.add("hidden");
    packModel.classList.remove("ripped");
  }
};

// 4. Rip Pack animation triggers
window.ripPack = function() {
  if (window.packTickets <= 0) {
    alert("คุณไม่มีซองสะสมเหลือแล้ว! กรุณากดปุ่ม 'รับฟรีอีก 3 ซอง' เพื่อสะสมต่อ");
    return;
  }

  const packModel = document.getElementById("pack-3d-model");
  if (packModel.classList.contains("ripped")) return; // prevent double clicks

  window.packTickets--;
  window.updateTicketsUI();

  // Play rip animation
  packModel.classList.add("ripped");

  // Create flash spark effect
  window.createScreenFlash();

  // After animation finishes, load generated cards
  setTimeout(() => {
    window.generatePackCards();
    window.displayRevealedCards();
  }, 800);
};

window.createScreenFlash = function() {
  const stage = document.getElementById("pack-opening-stage");
  const flash = document.createElement("div");
  flash.style.position = "absolute";
  flash.style.inset = "0";
  flash.style.background = "white";
  flash.style.opacity = "0.8";
  flash.style.zIndex = "5";
  flash.style.transition = "opacity 0.5s ease-out";
  stage.appendChild(flash);

  setTimeout(() => {
    flash.style.opacity = "0";
    setTimeout(() => flash.remove(), 500);
  }, 100);
};

// 5. Card Randomization Algorithm
window.generatePackCards = function() {
  window.openedCards = [];
  
  // Filter cards by set
  let setCards = window.LOCAL_CARDS.filter(c => c.set === window.currentSelectedSet);
  
  // If the set has too few cards, blend with other sets to create a pool
  if (setCards.length < 5) {
    setCards = [...window.LOCAL_CARDS];
  }

  const commons = setCards.filter(c => c.rarity === "Common" || c.supertype === "Energy");
  const uncommons = setCards.filter(c => c.rarity === "Uncommon" || c.supertype === "Trainer");
  const rares = setCards.filter(c => ["Rare", "Double Rare", "Special Illustration Rare", "Hyper Rare"].includes(c.rarity));

  // Simulating 5 Cards Pack
  window.openedCards.push(window.getRandomCard(commons.length > 0 ? commons : setCards));
  window.openedCards.push(window.getRandomCard(commons.length > 0 ? commons : setCards));
  window.openedCards.push(window.getRandomCard(uncommons.length > 0 ? uncommons : setCards));
  
  // Rare calculation Slot 4
  const roll = Math.random();
  if (roll < 0.08) {
    // Ultra Rare / SAR
    const sars = rares.filter(c => ["Special Illustration Rare", "Hyper Rare"].includes(c.rarity));
    window.openedCards.push(window.getRandomCard(sars.length > 0 ? sars : rares));
  } else if (roll < 0.28) {
    // Double Rare
    const doubleRares = rares.filter(c => c.rarity === "Double Rare");
    window.openedCards.push(window.getRandomCard(doubleRares.length > 0 ? doubleRares : rares));
  } else {
    // Standard Rare
    window.openedCards.push(window.getRandomCard(rares.length > 0 ? rares : setCards));
  }

  // Slot 5: General trainer/item/energy
  window.openedCards.push(window.getRandomCard(setCards));
};

window.getRandomCard = function(pool) {
  const index = Math.floor(Math.random() * pool.length);
  return pool[index];
};

// 6. Draw Revealed Face-Down Grid
window.displayRevealedCards = function() {
  const sealedScreen = document.getElementById("sealed-pack-screen");
  const unveiledScreen = document.getElementById("unveiled-cards-screen");
  const container = document.getElementById("pack-revealed-cards");

  if (!sealedScreen || !unveiledScreen || !container) return;

  container.innerHTML = "";
  sealedScreen.classList.add("hidden");
  unveiledScreen.classList.remove("hidden");

  window.openedCards.forEach((card, index) => {
    const cardWrapper = document.createElement("div");
    cardWrapper.className = "pack-reveal-card";
    cardWrapper.innerHTML = `
      <div class="pack-card-inner">
        <div class="card-face back"></div>
        <div class="card-face front" style="background-image: url('${card.imageUrl}')"></div>
      </div>
    `;

    cardWrapper.addEventListener("click", () => {
      if (cardWrapper.classList.contains("revealed")) {
        // If already flipped, clicking it opens the card details modal
        window.appOpenCardModal(card.id);
        return;
      }
      
      cardWrapper.classList.add("revealed");

      // Visual flare if Rare card is pulled
      if (window.isCardHolo(card)) {
        setTimeout(() => {
          window.triggerRarePullEffects(cardWrapper);
        }, 300);
      }
    });

    container.appendChild(cardWrapper);
  });
};

// 7. Rare Pull Visual Explosion Effects
window.triggerRarePullEffects = function(cardWrapper) {
  // Sparkle burst flare div
  const burst = document.createElement("div");
  burst.className = "sparkle-burst";
  cardWrapper.appendChild(burst);

  // Throw 20 gold particle divs into random directions
  for (let i = 0; i < 20; i++) {
    const p = document.createElement("div");
    p.style.position = "absolute";
    p.style.top = "50%";
    p.style.left = "50%";
    p.style.width = "6px";
    p.style.height = "6px";
    p.style.borderRadius = "50%";
    p.style.background = Math.random() > 0.5 ? "gold" : "cyan";
    p.style.zIndex = "12";
    p.style.pointerEvents = "none";
    
    const angle = Math.random() * Math.PI * 2;
    const distance = 40 + Math.random() * 80;
    const dx = Math.cos(angle) * distance;
    const dy = Math.sin(angle) * distance;
    
    p.style.transition = "all 0.8s cubic-bezier(0.25, 0.8, 0.25, 1)";
    cardWrapper.appendChild(p);

    setTimeout(() => {
      p.style.transform = `translate(${dx}px, ${dy}px) scale(0.1)`;
      p.style.opacity = "0";
      setTimeout(() => p.remove(), 800);
    }, 20);
  }

  // Remove burst element after animation
  setTimeout(() => {
    burst.remove();
  }, 1200);
};

// 8. Collect cards into Binder
window.collectOpenedCards = function() {
  if (window.openedCards.length === 0) return;

  if (onCardsCollectedCallback) {
    onCardsCollectedCallback(window.openedCards);
  }

  // Display success message and return to sealed pack stage
  alert(`เก็บการ์ดทั้ง 5 ใบเข้าสู่อัลบั้มดิจิทัลเรียบร้อยแล้ว!`);
  window.openedCards = [];
  window.resetPackStage();
};
