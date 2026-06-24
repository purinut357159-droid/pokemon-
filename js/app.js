/**
 * PokéTCG Premium - Main App Orchestration
 * Uses window globals (no ES modules) for file:// protocol compatibility
 */

document.addEventListener("DOMContentLoaded", () => {
  // Initialize Lucide Icons
  if (window.lucide) window.lucide.createIcons();

  // =========================================================================
  // 1. Sidebar Navigation
  // =========================================================================
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

      // Re-create lucide icons after view switch (icons might be in newly shown panels)
      if (window.lucide) window.lucide.createIcons();
    });
  });

  // =========================================================================
  // 2. Card Detail Modal
  // =========================================================================
  const cardModal = document.getElementById("card-detail-modal");
  const btnCloseModal = document.getElementById("btn-close-modal");
  const modalCloseArea = document.getElementById("modal-close-area");

  function openCardModal(cardId) {
    const card = window.getCardById ? window.getCardById(cardId) : null;
    if (!card) return;

    // Rarity badge
    const rarityEl = document.getElementById("modal-card-rarity");
    if (rarityEl) rarityEl.textContent = card.rarity || "";

    // Name & supertype
    const nameEl = document.getElementById("modal-card-name");
    if (nameEl) nameEl.textContent = card.name;

    const supertypeEl = document.getElementById("modal-card-supertype");
    if (supertypeEl) {
      const subtypes = Array.isArray(card.subtypes) ? card.subtypes.join(" ") : "";
      supertypeEl.textContent = `${card.supertype} - ${subtypes}`;
    }

    // HP & Type
    const hpEl = document.getElementById("modal-card-hp");
    if (hpEl) hpEl.textContent = card.hp ? `HP ${card.hp}` : "";

    const typeLabelEl = document.getElementById("modal-card-type-label");
    if (typeLabelEl) {
      const types = Array.isArray(card.types) ? card.types : [];
      typeLabelEl.textContent = types.length > 0 ? types.join(", ") : "";
    }

    // Price
    const priceEl = document.getElementById("modal-card-price");
    if (priceEl) priceEl.textContent = `$${(card.marketPrice || 0).toFixed(2)}`;

    // Attacks & Rules text
    const textContentEl = document.getElementById("modal-card-text");
    if (textContentEl) {
      textContentEl.innerHTML = "";

      if (card.rules && card.rules.length > 0) {
        card.rules.forEach(rule => {
          const p = document.createElement("p");
          p.style.cssText = "font-weight:600; margin-bottom:8px; font-size:0.85rem;";
          p.textContent = rule;
          textContentEl.appendChild(p);
        });
      }

      if (card.attacks && card.attacks.length > 0) {
        card.attacks.forEach(att => {
          const div = document.createElement("div");
          div.style.marginBottom = "10px";
          const costIcons = Array.isArray(att.cost) ? att.cost.map(() => "🔮").join(" ") : "";
          div.innerHTML = `
            <div style="display:flex;justify-content:space-between;font-weight:700;font-size:0.95rem;">
              <span>${costIcons} ${att.name || ""}</span>
              <span>${att.damage || ""}</span>
            </div>
            <p style="font-size:0.8rem;color:var(--text-muted);margin-top:2px;">${att.text || ""}</p>
          `;
          textContentEl.appendChild(div);
        });
      }
    }

    // 3D card image
    const target3D = document.getElementById("modal-card-3d-target");
    if (target3D) {
      target3D.innerHTML = "";
      const card3D = document.createElement("div");
      card3D.className = "pokemon-card-3d";
      card3D.style.backgroundImage = `url('${card.imageUrl}')`;
      target3D.appendChild(card3D);
      if (window.applyCard3DEffect) window.applyCard3DEffect(card3D, card);
    }

    // Action buttons — clone to remove old listeners
    const btnAddDeck = document.getElementById("modal-btn-add-deck");
    const btnWishlist = document.getElementById("modal-btn-wishlist");

    if (btnAddDeck) {
      const newBtn = btnAddDeck.cloneNode(true);
      btnAddDeck.parentNode.replaceChild(newBtn, btnAddDeck);
      newBtn.addEventListener("click", () => {
        if (window.addCard) window.addCard(cardId);
      });
    }

    if (btnWishlist) {
      const newBtn = btnWishlist.cloneNode(true);
      btnWishlist.parentNode.replaceChild(newBtn, btnWishlist);

      const inWishlist = window.isCardInWishlist ? window.isCardInWishlist(cardId) : false;
      if (inWishlist) {
        newBtn.innerHTML = `<i data-lucide="heart-off"></i> ลบจาก Wishlist`;
        newBtn.className = "btn btn-danger";
      } else {
        newBtn.innerHTML = `<i data-lucide="heart"></i> ใส่ Wishlist`;
        newBtn.className = "btn btn-secondary";
      }

      newBtn.addEventListener("click", () => {
        if (window.toggleWishlist) window.toggleWishlist(cardId);
        if (cardModal) cardModal.classList.add("hidden");
      });
    }

    if (window.lucide) window.lucide.createIcons();
    if (cardModal) cardModal.classList.remove("hidden");
  }

  if (btnCloseModal) btnCloseModal.addEventListener("click", () => cardModal && cardModal.classList.add("hidden"));
  if (modalCloseArea) modalCloseArea.addEventListener("click", () => cardModal && cardModal.classList.add("hidden"));

  // Share globally so sub-modules can open the modal
  window.appOpenCardModal = openCardModal;

  // =========================================================================
  // 3. Search Engine
  // =========================================================================
  const searchInput    = document.getElementById("search-input");
  const filterType     = document.getElementById("filter-type");
  const filterElement  = document.getElementById("filter-element");
  const filterRarity   = document.getElementById("filter-rarity");
  const btnSyncApi     = document.getElementById("btn-sync-api");

  async function performSearch() {
    if (!window.queryCards) return;
    const results = await window.queryCards({
      name:    searchInput  ? searchInput.value  : "",
      type:    filterType   ? filterType.value   : "",
      element: filterElement? filterElement.value: "",
      rarity:  filterRarity ? filterRarity.value : ""
    });
    renderSearchGrid(results);
  }

  function renderSearchGrid(cards) {
    const grid     = document.getElementById("search-cards-grid");
    const countEl  = document.getElementById("results-total-count");
    if (!grid) return;

    grid.innerHTML = "";
    if (countEl) countEl.textContent = cards.length;

    cards.forEach(card => {
      const cardContainer = document.createElement("div");
      cardContainer.className = "card-container";

      const card3D = document.createElement("div");
      card3D.className = "pokemon-card-3d";
      card3D.style.backgroundImage = `url('${card.imageUrl}')`;

      cardContainer.appendChild(card3D);
      if (window.applyCard3DEffect) window.applyCard3DEffect(card3D, card);

      const summary = document.createElement("div");
      summary.className = "card-info-summary";
      summary.innerHTML = `
        <span class="card-name">${card.name}</span>
        <div class="card-meta">
          <span>${card.setName || ""}</span>
          <span class="card-price">$${(card.marketPrice || 0).toFixed(2)}</span>
        </div>
      `;
      cardContainer.appendChild(summary);

      card3D.addEventListener("click", () => openCardModal(card.id));
      grid.appendChild(cardContainer);
    });
  }

  if (searchInput)   searchInput.addEventListener("input",  performSearch);
  if (filterType)    filterType.addEventListener("change",  performSearch);
  if (filterElement) filterElement.addEventListener("change", performSearch);
  if (filterRarity)  filterRarity.addEventListener("change", performSearch);

  if (btnSyncApi) {
    btnSyncApi.addEventListener("click", () => {
      if (!window.isLiveApiActive || !window.setLiveApiMode) return;
      const active = !window.isLiveApiActive();
      window.setLiveApiMode(active);

      const span = btnSyncApi.querySelector("span");
      if (active) {
        btnSyncApi.className = "btn btn-primary";
        if (span) span.textContent = "เชื่อมต่อ API เรียบร้อย (ค้นหาเพิ่มเติมได้)";
        alert("เปิดโหมดเชื่อมข้อมูลเรียลไทม์จาก pokemontcg.io แล้ว!\nพิมพ์ค้นหาการ์ดตั้งแต่ 3 ตัวอักษรขึ้นไปเพื่อดึงการ์ดสดผ่าน API");
      } else {
        btnSyncApi.className = "btn btn-secondary";
        if (span) span.textContent = "โหลดไลฟ์ API (pokemontcg.io)";
      }
      performSearch();
    });
  }

  // =========================================================================
  // 4. Bootstrap Sub-Modules
  // =========================================================================
  if (window.initDeckBuilder) {
    window.initDeckBuilder(openCardModal);
  }

  if (window.initPackSimulator) {
    window.initPackSimulator((newCards) => {
      if (window.addCardsToCollection) window.addCardsToCollection(newCards);
    });
  }

  if (window.initBinder) {
    window.initBinder((collectedTotal) => {
      const badge = document.getElementById("global-collected-count");
      if (badge) badge.textContent = collectedTotal;
    });
  }

  if (window.initTutorial) {
    window.initTutorial((rewardTicketsCount) => {
      const lblCount = document.getElementById("pack-tickets-count");
      if (lblCount) {
        const old = parseInt(lblCount.textContent) || 0;
        lblCount.textContent = old + rewardTicketsCount;
      }
    });
  }

  // Initial search render
  performSearch();
});
