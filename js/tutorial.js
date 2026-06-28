/**
 * PokéTCG Premium - Interactive Tutorial & Combat Simulator
 */

// 1. Quiz Database Questions
window.QUIZ_QUESTIONS = [
  {
    question: "ก่อนเริ่มเทิร์นของคุณทุกครั้ง คุณจะต้องทำสิ่งใดเป็นอันดับแรกตามกฎอย่างเป็นทางการ?",
    options: [
      "ติดการ์ดพลังงาน (Energy) ให้โปเกมอน",
      "จั่วการ์ด 1 ใบจากกองการ์ด (Deck)",
      "ประกาศการโจมตี",
      "วางโปเกมอนสำรองลงเบนช์"
    ],
    correctIdx: 1,
    explanation: "ตามกฎอย่างเป็นทางการ คุณต้องจั่วการ์ด 1 ใบเสมอเมื่อเริ่มเทิร์น หากคุณไม่สามารถจั่วการ์ดได้เนื่องจากเด็คหมด คุณจะเป็นฝ่ายแพ้ทันที"
  },
  {
    question: "คุณสามารถติดการ์ด Basic Energy จากบนมือให้กับโปเกมอนในสนามได้สูงสุดกี่ใบใน 1 เทิร์น?",
    options: [
      "กี่ใบก็ได้ไม่จำกัด",
      "ติดได้สูงสุด 3 ใบ",
      "ติดได้สูงสุด 1 ใบ",
      "ติดไม่ได้เลยถ้าไม่มีการ์ดเทรนเนอร์ช่วย"
    ],
    correctIdx: 2,
    explanation: "ตามกติกาพื้นฐาน คุณสามารถติดการ์ดพลังงานจากบนมือได้เพียง 1 ใบต่อเทิร์นเท่านั้น (เว้นแต่จะมีเอฟเฟกต์จากความสามารถหรือการ์ดเทรนเนอร์ที่อนุญาตเพิ่มเติม)"
  },
  {
    question: "เมื่อโปเกมอนต่อสู้ของคุณติดสถานะ 'หลับ (Asleep)' จะต้องปรับทิศทางการ์ดอย่างไรในสนาม?",
    options: [
      "หมุนเอียงไปทางขวาในแนวนอน (90 องศา)",
      "กลับหัวการ์ด (180 องศา)",
      "คว่ำหน้าการ์ดลง",
      "หมุนไปทางซ้าย (270 องศา)"
    ],
    correctIdx: 0,
    explanation: "สถานะ 'หลับ (Asleep)' จะต้องหมุนการ์ดในแนวนอน 90 องศา และโปเกมอนตัวนั้นจะไม่สามารถโจมตีหรือหนี (Retreat) ได้"
  },
  {
    question: "ในเด็คการ์ด Pokémon TCG มาตรฐาน คุณสามารถใส่การ์ดที่มีชื่อเดียวกันซ้ำกันได้สูงสุดกี่ใบ?",
    options: [
      "2 ใบ",
      "4 ใบ (ยกเว้น Basic Energy)",
      "6 ใบ",
      "กี่ใบก็ได้ถ้าเป็นชนิดเดียวกัน"
    ],
    correctIdx: 1,
    explanation: "คุณสามารถใส่การ์ดชื่อเดียวกันได้ไม่เกิน 4 ใบในหนึ่งเด็ค ยกเว้นเพียงการ์ดพลังงานพื้นฐาน (Basic Energy) ที่สามารถใส่เท่าใดก็ได้"
  },
  {
    question: "เงื่อนไขการชนะเกมหลักใน Pokémon TCG คือข้อใด?",
    options: [
      "หยิบการ์ดรางวัล (Prize Cards) ครบทั้ง 6 ใบ",
      "ทำให้โปเกมอนคู่แข่งหมดสลบโดยไม่มีโปเกมอนบนเบนช์มาทดแทน",
      "คู่แข่งจั่วการ์ดไม่ได้เพราะการ์ดหมดกอง",
      "ถูกทุกข้อ"
    ],
    correctIdx: 3,
    explanation: "เงื่อนไขการชนะเกมประกอบด้วย 3 รูปแบบหลัก: หยิบการ์ดรางวัลหมด, คู่แข่งไม่มีโปเกมอนเล่นต่อในสนาม, หรือเด็คคู่แข่งหมดจนจั่วการ์ดไม่ได้ตอนเริ่มเทิร์น"
  }
];

// 2. State variables
window.currentQuizIdx = 0;
window.quizScore = 0;
window.attachedEnergyCount = 0;
window.enemyHP = 210;

// Callback to reward pack tickets
let onRewardTicketsCallback = null;

// 3. Initialize Module
window.initTutorial = function(onRewardTickets) {
  onRewardTicketsCallback = onRewardTickets;

  // Step Tabs Navigation
  const stepBtns = document.querySelectorAll(".t-step-btn");
  const stepViews = document.querySelectorAll(".tutorial-step-view");

  stepBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      stepBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const stepName = btn.getAttribute("data-step");
      stepViews.forEach(v => {
        v.classList.add("hidden");
        v.classList.remove("active");
      });
      
      const activeView = document.getElementById(`t-view-${stepName}`);
      if (activeView) {
        activeView.classList.remove("hidden");
        activeView.classList.add("active");
      }
    });
  });

  // Combat Simulator Setup
  window.setupCombatSimulator();

  // Status Conditions Setup
  window.setupStatusSimulator();

  // Quiz Setup
  window.setupQuizEngine();

  // Evolution Setup
  window.setupEvolutionSimulator();

  // Weakness Setup
  window.setupWeaknessSimulator();
};

// 4. Combat Simulator (Drag-and-Drop & Attack)
window.setupCombatSimulator = function() {
  const energyCard = document.getElementById("energy-card-source");
  const targetArea = document.getElementById("sim-player");
  const btnAttack = document.getElementById("btn-sim-attack");
  const btnReset = document.getElementById("btn-sim-reset");

  if (!energyCard || !targetArea) return;

  // Drag and drop event listeners
  energyCard.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("text/plain", "fire-energy");
  });

  targetArea.addEventListener("dragover", (e) => {
    e.preventDefault();
    targetArea.style.borderColor = "#ff4500";
    targetArea.style.background = "rgba(255, 69, 0, 0.1)";
  });

  targetArea.addEventListener("dragleave", () => {
    targetArea.style.borderColor = "var(--primary-red)";
    targetArea.style.background = "#1e1e1e";
  });

  targetArea.addEventListener("drop", (e) => {
    e.preventDefault();
    targetArea.style.borderColor = "var(--primary-red)";
    targetArea.style.background = "#1e1e1e";
    window.attachEnergy();
  });

  // Also support double-click to attach easily
  energyCard.addEventListener("dblclick", window.attachEnergy);

  if (btnAttack) btnAttack.addEventListener("click", window.performAttack);
  if (btnReset) btnReset.addEventListener("click", window.resetCombatSimulator);
};

window.attachEnergy = function() {
  if (window.enemyHP <= 0) return;
  if (window.attachedEnergyCount >= 3) {
    alert("โปเกมอนติดพลังงานเต็มพิกัดสำหรับการทดลองเล่นแล้ว!");
    return;
  }

  window.attachedEnergyCount++;
  
  // Render energy badge inside Charizard
  const container = document.getElementById("sim-attached-energies");
  if (container) {
    const badge = document.createElement("div");
    badge.className = "energy-icon";
    badge.textContent = "🔥";
    container.appendChild(badge);
  }

  // Enable attack button if >= 2 energy
  const btnAttack = document.getElementById("btn-sim-attack");
  if (window.attachedEnergyCount >= 2 && btnAttack) {
    btnAttack.removeAttribute("disabled");
    document.querySelector(".interaction-help").textContent = "🔥 พลังงานพร้อมแล้ว! กดสั่งโจมตี 'Burning Darkness' เพื่อกำจัดคู่ต่อสู้!";
  }
};

window.performAttack = function() {
  if (window.attachedEnergyCount < 2 || window.enemyHP <= 0) return;

  window.enemyHP -= 120;
  if (window.enemyHP < 0) window.enemyHP = 0;

  // Visual Damage Popup
  const popup = document.getElementById("damage-popup");
  if (popup) {
    popup.textContent = "-120";
    popup.classList.remove("hidden");
    setTimeout(() => {
      popup.classList.add("hidden");
    }, 1000);
  }

  // Update Enemy HP Bar UI
  document.getElementById("sim-enemy-hp").textContent = window.enemyHP;
  const bar = document.getElementById("sim-enemy-hp-bar");
  const percent = (window.enemyHP / 210) * 100;
  
  if (bar) {
    bar.style.width = `${percent}%`;
    if (percent > 50) {
      bar.className = "hp-bar-inner green";
    } else if (percent > 20) {
      bar.className = "hp-bar-inner yellow";
    } else {
      bar.className = "hp-bar-inner red";
    }
  }

  // Check Knock Out
  if (window.enemyHP <= 0) {
    document.querySelector(".interaction-help").textContent = "🏆 โปเกมอนคู่แข่งหมดสภาพต่อสู้ (Knocked Out)! คุณเป็นฝ่ายชนะ!";
    document.getElementById("btn-sim-attack").setAttribute("disabled", "true");
    document.getElementById("btn-sim-reset").classList.remove("hidden");
    document.getElementById("sim-enemy").style.filter = "grayscale(90%)";
  }
};

window.resetCombatSimulator = function() {
  window.enemyHP = 210;
  window.attachedEnergyCount = 0;

  document.getElementById("sim-enemy-hp").textContent = "210";
  const bar = document.getElementById("sim-enemy-hp-bar");
  if (bar) {
    bar.style.width = "100%";
    bar.className = "hp-bar-inner green";
  }

  const energies = document.getElementById("sim-attached-energies");
  if (energies) energies.innerHTML = "";

  document.querySelector(".interaction-help").textContent = "👉 ลากพลังงาน (Fire Energy) มาแปะที่ลิซาร์ดอน หรือคลิกเพื่อเพิ่มพลังงาน";
  document.getElementById("btn-sim-attack").setAttribute("disabled", "true");
  document.getElementById("btn-sim-reset").classList.add("hidden");
  document.getElementById("sim-enemy").style.filter = "none";
};

// 5. Status Conditions Simulator
window.setupStatusSimulator = function() {
  const btns = document.querySelectorAll(".status-btn");
  const card = document.getElementById("status-card-demo");
  const marker = document.getElementById("status-marker-text");
  const expl = document.getElementById("status-explanation-text");

  if (!card) return;

  const STATUS_EXPLANATIONS = {
    poisoned: "🧪 **สถานะพิษ (Poisoned):** วางตัวนับความเสียหาย 1 เม็ด (10 แดมเมจ) ลงบนโปเกมอนนี้ระหว่างเทิร์นของแต่ละคน สถานะนี้ไม่ขัดขวางการสั่งโจมตีหรือการหนี และรักษาได้เมื่อวิวัฒนาการหรือหนีกลับเบนช์",
    burned: "🔥 **สถานะไหม้ (Burned):** วางตัวนับความเสียหาย 2 เม็ด (20 แดมเมจ) ทุกครั้งระหว่างเปลี่ยนเทิร์น จากนั้นโยนเหรียญ; หากออกก้อย จะติดสถานะนี้ต่อไป รักษาได้ด้วยวิวัฒนาการหรือหนีกลับเบนช์",
    asleep: "💤 **สถานะหลับ (Asleep):** การ์ดจะถูกหมุนเป็นแนวนอน (90 องศา) โปเกมอนจะไม่สามารถสั่งโจมตีหรือหนี (Retreat) ได้ ระหว่างเปลี่ยนเทิร์นให้โยนเหรียญ; หากออกหัว โปเกมอนจะตื่นและหายเป็นปกติ",
    paralyzed: "⚡ **สถานะชา (Paralyzed):** การ์ดจะถูกหมุนเป็นแนวนอน (90 องศา) ไม่สามารถสั่งโจมตีหรือหนีได้เป็นเวลา 1 เทิร์นเต็ม สถานะนี้จะหายไปโดยอัตโนมัติเมื่อสิ้นสุดเทิร์นถัดไปของเจ้าของ",
    confused: "🌀 **สถานะสับสน (Confused):** การ์ดจะถูกหมุนกลับหัว (180 องศา) ทุกครั้งที่ประกาศสั่งโจมตี ผู้เล่นต้องโยนเหรียญ; หากออกก้อย การโจมตีล้มเหลวและทำความเสียหาย 30 แดมเมจให้กับตัวเอง!"
  };

  btns.forEach(btn => {
    btn.addEventListener("click", () => {
      btns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const status = btn.getAttribute("data-status");
      
      // Reset card visual rotation classes
      card.className = "status-visual-card";
      card.classList.add(status);

      // Translate status string
      let statusName = "ปกติ";
      if (status === "poisoned") statusName = "พิษ";
      else if (status === "burned") statusName = "ไหม้";
      else if (status === "asleep") statusName = "หลับ";
      else if (status === "paralyzed") statusName = "ชา";
      else if (status === "confused") statusName = "สับสน";

      marker.textContent = statusName;
      
      // Simple markdown converter helper for description text
      let text = STATUS_EXPLANATIONS[status] || "";
      expl.innerHTML = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    });
  });
};

// 5.5 Evolution Simulator
window.setupEvolutionSimulator = function() {
  let turnCount = 0;
  let currentStage = 1;

  const btnNextTurn = document.getElementById("btn-next-turn-evo");
  const btnEvolve = document.getElementById("btn-evolve-sim");
  const statusText = document.getElementById("evo-status-text");

  const stage1 = document.getElementById("evo-stage-1");
  const stage2 = document.getElementById("evo-stage-2");
  const stage3 = document.getElementById("evo-stage-3");

  if (!btnNextTurn) return;

  btnNextTurn.addEventListener("click", () => {
    turnCount++;
    statusText.textContent = `เทิร์นปัจจุบัน: ผ่านไป ${turnCount} เทิร์นแล้ว`;
    if (currentStage < 3) {
      btnEvolve.removeAttribute("disabled");
    }
  });

  btnEvolve.addEventListener("click", () => {
    if (currentStage === 1) {
      stage2.classList.remove("disabled");
      currentStage = 2;
      statusText.textContent = "วิวัฒนาการเป็นร่าง 1 สำเร็จ! (รอเทิร์นถัดไปเพื่อวิวัฒนาการต่อ)";
    } else if (currentStage === 2) {
      stage3.classList.remove("disabled");
      currentStage = 3;
      statusText.textContent = "วิวัฒนาการเป็นร่าง 2 (ร่างสุดยอด) สำเร็จ!";
      btnNextTurn.setAttribute("disabled", "true");
    }
    btnEvolve.setAttribute("disabled", "true");
    turnCount = 0;
  });
};

// 5.6 Weakness Simulator
window.setupWeaknessSimulator = function() {
  const select = document.getElementById("sim-target-select");
  const infoBox = document.getElementById("target-defense-info");
  const btnCalc = document.getElementById("btn-calc-weakness");
  const resultBadge = document.getElementById("damage-result-badge");

  if (!select) return;

  select.addEventListener("change", () => {
    resultBadge.classList.add("hidden");
    const val = select.value;
    if (val === "normal") {
      infoBox.textContent = "จุดอ่อน: ไม่มี | ความต้านทาน: ไม่มี";
    } else if (val === "weakness") {
      infoBox.textContent = "จุดอ่อน: ไฟ (×2) | ความต้านทาน: ไม่มี";
    } else if (val === "resistance") {
      infoBox.textContent = "จุดอ่อน: ไฟฟ้า (×2) | ความต้านทาน: ไฟ (-30)";
    }
  });

  btnCalc.addEventListener("click", () => {
    const val = select.value;
    let damage = 100;
    
    if (val === "weakness") {
      damage = 100 * 2;
    } else if (val === "resistance") {
      damage = 100 - 30;
    }

    resultBadge.textContent = damage;
    resultBadge.classList.remove("hidden");
    
    // pop animation
    resultBadge.style.transform = "scale(1.2)";
    setTimeout(() => {
      resultBadge.style.transform = "scale(1)";
    }, 200);
  });
};

// 6. Quiz Modal Controller
window.setupQuizEngine = function() {
  const btnStart = document.getElementById("btn-start-quiz");
  const modal = document.getElementById("quiz-modal");
  const btnClose = document.getElementById("btn-close-quiz");
  const btnCloseArea = document.getElementById("quiz-close-area");
  const btnNext = document.getElementById("btn-next-quiz");

  if (!btnStart) return;

  btnStart.addEventListener("click", () => {
    window.currentQuizIdx = 0;
    window.quizScore = 0;
    modal.classList.remove("hidden");
    window.loadQuestion();
  });

  if (btnClose) btnClose.addEventListener("click", () => modal.classList.add("hidden"));
  if (btnCloseArea) btnCloseArea.addEventListener("click", () => modal.classList.add("hidden"));
  
  if (btnNext) {
    btnNext.addEventListener("click", () => {
      window.currentQuizIdx++;
      if (window.currentQuizIdx < window.QUIZ_QUESTIONS.length) {
        window.loadQuestion();
      } else {
        window.showQuizResults();
      }
    });
  }
};

window.loadQuestion = function() {
  const q = window.QUIZ_QUESTIONS[window.currentQuizIdx];
  const qText = document.getElementById("quiz-question-text");
  const optionsContainer = document.getElementById("quiz-options-container");
  const progressText = document.getElementById("quiz-current-idx");
  const btnNext = document.getElementById("btn-next-quiz");
  const resultMsg = document.getElementById("quiz-result-msg");

  if (!qText || !optionsContainer || !progressText) return;

  progressText.textContent = window.currentQuizIdx + 1;
  qText.textContent = q.question;
  optionsContainer.innerHTML = "";
  
  btnNext.setAttribute("disabled", "true");
  btnNext.textContent = window.currentQuizIdx === window.QUIZ_QUESTIONS.length - 1 ? "ดูผลคะแนน" : "ข้อถัดไป";
  
  resultMsg.classList.add("hidden");
  resultMsg.className = "quiz-result-msg";

  q.options.forEach((opt, idx) => {
    const btn = document.createElement("button");
    btn.className = "quiz-opt-btn";
    btn.textContent = opt;

    btn.addEventListener("click", () => {
      // Disable all options once one is selected
      const allBtns = optionsContainer.querySelectorAll(".quiz-opt-btn");
      allBtns.forEach(b => b.setAttribute("disabled", "true"));

      const correct = idx === q.correctIdx;
      
      if (correct) {
        btn.classList.add("correct");
        window.quizScore++;
        resultMsg.textContent = `✓ ถูกต้อง! ${q.explanation}`;
        resultMsg.classList.remove("hidden");
        resultMsg.classList.add("correct");
      } else {
        btn.classList.add("incorrect");
        
        // highlight correct one
        allBtns[q.correctIdx].classList.add("correct");
        
        resultMsg.textContent = `✗ ผิดเสียแล้ว! ${q.explanation}`;
        resultMsg.classList.remove("hidden");
        resultMsg.classList.add("incorrect");
      }

      btnNext.removeAttribute("disabled");
    });

    optionsContainer.appendChild(btn);
  });
};

window.showQuizResults = function() {
  const qText = document.getElementById("quiz-question-text");
  const optionsContainer = document.getElementById("quiz-options-container");
  const btnNext = document.getElementById("btn-next-quiz");
  const progressText = document.getElementById("quiz-current-idx");
  const resultMsg = document.getElementById("quiz-result-msg");

  progressText.textContent = "สำเร็จ";
  qText.textContent = `ยินดีด้วย! คุณทำแบบทดสอบเสร็จเรียบร้อยแล้ว`;
  
  optionsContainer.innerHTML = `
    <div style="text-align: center; padding: 20px 0;">
      <h3 style="font-size: 2.5rem; color: var(--primary-red); margin-bottom: 10px;">${window.quizScore} / 5</h3>
      <p style="font-weight: 600; color: var(--text-primary);">คุณตอบคำถามถูกต้องทั้งหมด ${window.quizScore} ข้อ</p>
    </div>
  `;

  resultMsg.classList.add("hidden");

  // Reward tickets if they got high score
  if (window.quizScore >= 3) {
    if (onRewardTicketsCallback) {
      onRewardTicketsCallback(3);
    }
    optionsContainer.innerHTML += `
      <div class="quiz-result-msg correct" style="text-align: center; margin-top: 15px;">
        🎁 ยอดเยี่ยมมาก! คุณสอบผ่านเกณฑ์ (3/5) ได้รับซองการ์ดเปิดฟรี 3 ซอง เรียบร้อยแล้ว!
      </div>
    `;
  } else {
    optionsContainer.innerHTML += `
      <div class="quiz-result-msg incorrect" style="text-align: center; margin-top: 15px;">
        สอบยังไม่ผ่านเกณฑ์ 3 ข้อ ลองศึกษาบทเรียนใหม่อีกครั้งเพื่อรับรางวัลนะครับ
      </div>
    `;
  }

  btnNext.removeAttribute("disabled");
  btnNext.textContent = "ปิดหน้าต่าง";
  
  // change click behavior to close
  btnNext.onclick = () => {
    document.getElementById("quiz-modal").classList.add("hidden");
    // restore original event listener
    btnNext.onclick = null;
    window.setupQuizEngine();
  };
};
