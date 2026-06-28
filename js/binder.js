/**
 * PokéTCG Premium - Digital Collection Binder
 */

// 1. Binder State
window.collectedCards = {}; // Schema: { cardId: qty }
window.wishlist = []; // Schema: [cardId]
window.activeTab = "collection"; // "collection" or "wishlist"
window.currentPage = 1;

// Global callback to update sidebar collected count
let onCollectedChangeCallback = null;

// 2. Initialize
window.initBinder = function(onCollectedChange) {
  onCollectedChangeCallback = onCollectedChange;

  const btnPrev = document.getElementById("btn-binder-prev");
  const btnNext = document.getElementById("btn-binder-next");
  const tabs = document.querySelectorAll(".binder-tab");

  if (btnPrev) btnPrev.addEventListener("click", () => window.changePage(-1));
  if (btnNext) btnNext.addEventListener("click", () => window.changePage(1));
  if (btnPrev) btnPrev.style.display = "none";
  if (btnNext) btnNext.style.display = "none";

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      window.activeTab = tab.getAttribute("data-tab");
      window.renderBinderGrid();
    });
  });

  // Mock initial collection (optional: give user 2 random cards to start so the binder isn't empty)
  window.collectedCards["sv06-130"] = 1; // Dragapult ex
  window.collectedCards["sv05-144"] = 2; // Buddy-Buddy Poffin
  
  window.renderBinderGrid();
  window.updateStats();
};

// 3. Collection Updates API
window.addCardsToCollection = function(cardsList) {
  cardsList.forEach(card => {
    window.collectedCards[card.id] = (window.collectedCards[card.id] || 0) + 1;
  });
  window.updateStats();
  window.renderBinderGrid();
};

window.toggleWishlist = function(cardId) {
  const index = window.wishlist.indexOf(cardId);
  if (index === -1) {
    window.wishlist.push(cardId);
    alert("เพิ่มการ์ดเข้าในรายการที่อยากได้ (Wishlist) แล้ว!");
  } else {
    window.wishlist.splice(index, 1);
    alert("นำการ์ดออกจากรายการที่อยากได้เรียบร้อย");
  }
  window.renderBinderGrid();
};

window.isCardInWishlist = function(cardId) {
  return window.wishlist.includes(cardId);
};

// 4. Calculations
window.updateStats = function() {
  // Completion
  const totalUnique = window.LOCAL_CARDS.length;
  const collectedUnique = window.LOCAL_CARDS.filter(c => window.collectedCards[c.id] > 0).length;
  const completionPercent = Math.round((collectedUnique / totalUnique) * 100);
  
  const completionEl = document.getElementById("binder-completion");
  if (completionEl) completionEl.textContent = `${completionPercent}%`;

  // Valuation
  let totalVal = 0;
  Object.entries(window.collectedCards).forEach(([id, qty]) => {
    const card = window.LOCAL_CARDS.find(c => c.id === id);
    if (card) {
      totalVal += card.marketPrice * qty;
    }
  });

  const valueEl = document.getElementById("binder-value");
  if (valueEl) valueEl.textContent = `$${totalVal.toFixed(2)}`;

  // Side count
  const sideCount = Object.values(window.collectedCards).reduce((sum, q) => sum + q, 0);
  const lblCount = document.getElementById("lbl-collected-count");
  if (lblCount) lblCount.textContent = sideCount;

  if (onCollectedChangeCallback) {
    onCollectedChangeCallback(sideCount);
  }
};

// 5. Render Binder Grid
window.renderBinderGrid = function() {
  const grid = document.getElementById("binder-pocket-grid");
  const pageLabel = document.getElementById("binder-page-number");
  if (!grid) return;

  grid.innerHTML = "";

  // Get source cards based on tab
  let sourceCards = [];
  if (window.activeTab === "collection") {
    // Show all local database cards (so user sees their collection progress)
    sourceCards = [...window.LOCAL_CARDS];
  } else {
    // Wishlist: show only cards in wishlist array
    sourceCards = window.LOCAL_CARDS.filter(c => window.wishlist.includes(c.id));
  }

  if (pageLabel) {
    pageLabel.style.display = "none";
  }

  // Render all cards
  for (let i = 0; i < sourceCards.length; i++) {
    const pocket = document.createElement("div");
    pocket.className = "pocket-cell";

    const card = sourceCards[i];
    if (card) {
      pocket.classList.remove("empty");

      const cardContainer = document.createElement("div");
      cardContainer.className = "card-container";
      
      const qty = window.collectedCards[card.id] || 0;
      const isOwned = qty > 0;
      
      // Card representation
      const card3D = document.createElement("div");
      card3D.className = "pokemon-card-3d";
      card3D.style.backgroundImage = `url('${card.imageUrl}')`;
      
      // Holographic effect
      if (window.isCardHolo(card) && isOwned) {
        card3D.classList.add("holo");
      }

      // If not owned in collection, make it grayed silhouette
      if (window.activeTab === "collection" && !isOwned) {
        card3D.style.filter = "grayscale(100%) brightness(35%)";
        card3D.style.opacity = "0.45";
        card3D.title = `ยังไม่ได้สะสม: ${card.name}`;
      } else {
        card3D.title = card.name;
        // Apply tilt effect only to owned or wishlist cards
        window.applyCard3DEffect(card3D, card);
      }

      cardContainer.appendChild(card3D);

      // Quantities label
      if (isOwned && window.activeTab === "collection") {
        const badge = document.createElement("div");
        badge.className = "card-qty-badge";
        badge.textContent = `x${qty}`;
        cardContainer.appendChild(badge);
      }

      // Double-click or click action
      card3D.addEventListener("click", () => {
        window.appOpenCardModal(card.id);
      });

      pocket.appendChild(cardContainer);
    }

    grid.appendChild(pocket);
  }
};

// 6. Page Navigation Transitions removed
