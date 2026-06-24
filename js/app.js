import { queryCards, getCardById, setLiveApiMode, isLiveApiActive, applyCard3DEffect } from "./cards-data.js";
import { initDeckBuilder, addCard } from "./deck-builder.js";
import { initPackSimulator } from "./pack-simulator.js";
import { initBinder, addCardsToCollection, toggleWishlist, isCardInWishlist } from "./binder.js";
import { initTutorial } from "./tutorial.js";

document.addEventListener("DOMContentLoaded", () => {
  // Initialize Lucide Icons
  if (window.lucide) window.lucide.createIcons();

  // 1. Navigation Panel Switches
  const menuItems = document.querySelectorAll(".menu-item");
  const viewPanels = document.querySelectorAll(".view-panel");

  menuItems.forEach(item => {
    item.addEventListener("click", () => {
      menuItems.forEach(i => i.classList.remove("active"));
      item.classList.add("active");

      const viewId = item.getAttribute("data-view");
      viewPanels.forEach(panel => {
        panel.classList.remove("active");
        if (panel.id === `${viewId}-view`) {
          panel.classList.add("active");
        }
      });
    });
  });

  // 2. Card Details Modal Interactions
  const cardModal = document.getElementById("card-detail-modal");
  const btnCloseModal = document.getElementById("btn-close-modal");
  const modalCloseArea = document.getElementById("modal-close-area");

  function openCardModal(cardId) {
    const card = getCardById(cardId);
    if (!card) return;

    // Set Rarity
    const rarityEl = document.getElementById("modal-card-rarity");
    rarityEl.textContent = card.rarity;
    
    // Set Name & Supertype
    document.getElementById("modal-card-name").textContent = card.name;
    document.getElementById("modal-card-supertype").textContent = `${card.supertype} - ${card.subtypes.join(" ")}`;
    
    // HP and Element type
    const hpEl = document.getElementById("modal-card-hp");
    hpEl.textContent = card.hp ? `HP ${card.hp}` : "";
    
    const typeLabelEl = document.getElementById("modal-card-type-label");
    typeLabelEl.textContent = card.types.length > 0 ? `${card.types.join(", ")}` : "";

    // Price
    document.getElementById("modal-card-price").textContent = `$${card.marketPrice.toFixed(2)}`;

    // Set rules & attacks descriptions
    const textContentEl = document.getElementById("modal-card-text");
    textContentEl.innerHTML = "";
    
    if (card.rules && card.rules.length > 0) {
      card.rules.forEach(rule => {
        const p = document.createElement("p");
        p.style.fontWeight = "600";
        p.style.marginBottom = "8px";
        p.textContent = rule;
        textContentEl.appendChild(p);
      });
    }

    if (card.attacks && card.attacks.length > 0) {
      card.attacks.forEach(att => {
        const div = document.createElement("div");
        div.style.marginBottom = "10px";
        div.innerHTML = `
          <div style="display: flex; justify-content: space-between; font-weight: 700; font-size: 0.95rem;">
            <span>${att.cost.map(() => "🔮").join(" ")} ${att.name}</span>
            <span>${att.damage || ""}</span>
          </div>
          <p style="font-size: 0.8rem; color: var(--text-muted); margin-top: 2px;">${att.text}</p>
        `;
        textContentEl.appendChild(div);
      });
    }

    // Set 3D image block
    const target3D = document.getElementById("modal-card-3d-target");
    target3D.innerHTML = "";
    
    const card3D = document.createElement("div");
    card3D.className = "pokemon-card-3d";
    card3D.style.backgroundImage = `url('${card.imageUrl}')`;
    
    target3D.appendChild(card3D);
    applyCard3DEffect(card3D, card);

    // Bind action buttons
    const btnAddDeck = document.getElementById("modal-btn-add-deck");
    const btnWishlist = document.getElementById("modal-btn-wishlist");

    // Remove old event listeners
    const newBtnAddDeck = btnAddDeck.cloneNode(true);
    const newBtnWishlist = btnWishlist.cloneNode(true);
    
    btnAddDeck.parentNode.replaceChild(newBtnAddDeck, btnAddDeck);
    btnWishlist.parentNode.replaceChild(newBtnWishlist, btnWishlist);

    newBtnAddDeck.addEventListener("click", () => {
      addCard(cardId);
    });

    // Check wishlist state
    if (isCardInWishlist(cardId)) {
      newBtnWishlist.innerHTML = `<i data-lucide="heart-off"></i> ลบจาก Wishlist`;
      newBtnWishlist.className = "btn btn-danger";
    } else {
      newBtnWishlist.innerHTML = `<i data-lucide="heart"></i> ใส่ Wishlist`;
      newBtnWishlist.className = "btn btn-secondary";
    }
    
    if (window.lucide) window.lucide.createIcons();

    newBtnWishlist.addEventListener("click", () => {
      toggleWishlist(cardId);
      // Close modal on action
      cardModal.classList.add("hidden");
    });

    cardModal.classList.remove("hidden");
  }

  // Bind close buttons
  if (btnCloseModal) btnCloseModal.addEventListener("click", () => cardModal.classList.add("hidden"));
  if (modalCloseArea) modalCloseArea.addEventListener("click", () => cardModal.classList.add("hidden"));

  // Share globally so deck-builder and binder rows can open it
  window.appOpenCardModal = openCardModal;

  // 3. Search Engine Module
  const searchInput = document.getElementById("search-input");
  const filterType = document.getElementById("filter-type");
  const filterElement = document.getElementById("filter-element");
  const filterRarity = document.getElementById("filter-rarity");
  const btnSyncApi = document.getElementById("btn-sync-api");

  async function performSearch() {
    const results = await queryCards({
      name: searchInput.value,
      type: filterType.value,
      element: filterElement.value,
      rarity: filterRarity.value
    });

    renderSearchGrid(results);
  }

  function renderSearchGrid(cards) {
    const grid = document.getElementById("search-cards-grid");
    const countEl = document.getElementById("results-total-count");
    if (!grid) return;

    grid.innerHTML = "";
    countEl.textContent = cards.length;

    cards.forEach(card => {
      const cardContainer = document.createElement("div");
      cardContainer.className = "card-container";
      
      const card3D = document.createElement("div");
      card3D.className = "pokemon-card-3d";
      card3D.style.backgroundImage = `url('${card.imageUrl}')`;
      
      cardContainer.appendChild(card3D);
      applyCard3DEffect(card3D, card);

      const summary = document.createElement("div");
      summary.className = "card-info-summary";
      summary.innerHTML = `
        <span class="card-name">${card.name}</span>
        <div class="card-meta">
          <span>${card.setName}</span>
          <span class="card-price">$${card.marketPrice.toFixed(2)}</span>
        </div>
      `;

      cardContainer.appendChild(summary);

      // Click to view modal
      card3D.addEventListener("click", () => {
        openCardModal(card.id);
      });

      grid.appendChild(cardContainer);
    });
  }

  // Trigger search on inputs
  if (searchInput) searchInput.addEventListener("input", performSearch);
  if (filterType) filterType.addEventListener("change", performSearch);
  if (filterElement) filterElement.addEventListener("change", performSearch);
  if (filterRarity) filterRarity.addEventListener("change", performSearch);

  // Sync API Button
  if (btnSyncApi) {
    btnSyncApi.addEventListener("click", () => {
      const active = !isLiveApiActive();
      setLiveApiMode(active);

      if (active) {
        btnSyncApi.className = "btn btn-primary";
        btnSyncApi.querySelector("span").textContent = "เชื่อมต่อ API เรียบร้อย (ค้นหาเพิ่มเติมได้)";
        alert("เปิดโหมดเชื่อมข้อมูลเรียลไทม์จาก pokemontcg.io แล้ว! พิมพ์ค้นหาการ์ดตั้งแต่ 3 ตัวอักษรขึ้นไปเพื่อดึงการ์ดสดผ่าน API");
      } else {
        btnSyncApi.className = "btn btn-secondary";
        btnSyncApi.querySelector("span").textContent = "โหลดไลฟ์ API (pokemontcg.io)";
      }
      performSearch();
    });
  }

  // 4. Initialize Sub Modules
  initDeckBuilder(openCardModal);
  
  initPackSimulator((newCards) => {
    // Save to binder
    addCardsToCollection(newCards);
  });
  
  initBinder((collectedTotal) => {
    // Update global badge
    const badge = document.getElementById("global-collected-count");
    if (badge) badge.textContent = collectedTotal;
  });
  
  initTutorial((rewardTicketsCount) => {
    // Reward tickets callback on completing quiz
    const lblCount = document.getElementById("pack-tickets-count");
    if (lblCount) {
      const oldVal = parseInt(lblCount.textContent) || 0;
      lblCount.textContent = oldVal + rewardTicketsCount;
    }
  });

  // Run initial search display
  performSearch();
});
