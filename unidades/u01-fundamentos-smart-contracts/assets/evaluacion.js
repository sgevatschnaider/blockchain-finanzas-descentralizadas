(() => {
  "use strict";
  const $ = selector => document.querySelector(selector);
  const quizEl = $("#quiz");
  const summaryEl = $("#summary");
  const modeEl = $("#mode");
  const countEl = $("#count");
  const categoryEl = $("#category");
  const difficultyEl = $("#difficulty");
  let current = [];
  let activeMode = "practice";
  let activeCategory = "all";
  let finished = false;
  const answers = new Map();

  function shuffle(items) {
    const out = items.slice();
    for (let i = out.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [out[i], out[j]] = [out[j], out[i]];
    }
    return out;
  }

  function populateCategories() {
    const cats = [...new Set((window.U01_QUESTIONS || []).map(q => q.category))].sort((a,b) => a.localeCompare(b,"es"));
    categoryEl.innerHTML = '<option value="all">Todas</option>' + cats.map(c => `<option value="${c}">${c}</option>`).join("");
  }

  function filteredBank() {
    return (window.U01_QUESTIONS || []).filter(q =>
      (categoryEl.value === "all" || q.category === categoryEl.value) &&
      (difficultyEl.value === "all" || q.difficulty === difficultyEl.value)
    );
  }

  function renderQuestion(q, index) {
    const answered = answers.has(index);
    const selected = answers.get(index);
    return `<article class="question-card" data-question="${index}">
      <span class="tag">${q.category} · ${q.difficulty}</span>
      <h3>${index + 1}. ${q.question}</h3>
      <div class="option-list">${q.options.map((opt, i) => {
        let cls = "";
        if (answered && activeMode === "practice") {
          if (i === q.answer) cls = "correct";
          else if (i === selected) cls = "incorrect";
        }
        return `<button type="button" data-option="${i}" class="${cls}" ${answered && activeMode === "practice" ? "disabled" : ""}>${opt}</button>`;
      }).join("")}</div>
      ${answered && activeMode === "practice" ? `<div class="explanation"><strong>${selected === q.answer ? "Correcto." : "Respuesta correcta: " + q.options[q.answer] + "."}</strong> ${q.explanation}</div>` : ""}
    </article>`;
  }

  quizEl.addEventListener("click", event => {
    const button = event.target.closest("[data-option]");
    if (!button || finished || !quizEl.contains(button)) return;
    const card = button.closest("[data-question]");
    const idx = Number(card.dataset.question);
    if (activeMode === "practice" && answers.has(idx)) return;
    answers.set(idx, Number(button.dataset.option));
    if (activeMode === "practice") {
      const fresh = document.createElement("div");
      fresh.innerHTML = renderQuestion(current[idx], idx);
      card.replaceWith(fresh.firstElementChild);
    } else {
      card.querySelectorAll("[data-option]").forEach(b => b.setAttribute("aria-pressed", String(b === button)));
    }
    updateLiveSummary();
  });

  function updateLiveSummary() {
    const total = current.length;
    const done = answers.size;
    if (!total) { summaryEl.innerHTML = ""; return; }
    summaryEl.innerHTML = `<div class="summary-grid"><div class="summary-card"><strong>${done}/${total}</strong><span>respondidas</span></div><div class="summary-card"><strong>${window.U01_QUESTION_COUNT || 0}</strong><span>banco total</span></div><div class="summary-card"><strong>${activeMode === "practice" ? "Práctica" : "Examen"}</strong><span>modo</span></div><div class="summary-card"><strong>${activeCategory === "all" ? "Todas" : activeCategory}</strong><span>categoría</span></div></div>`;
  }

  function start() {
    activeMode = modeEl.value;
    activeCategory = categoryEl.value;
    finished = false;
    answers.clear();
    const bank = filteredBank();
    const requested = Number(countEl.value);
    current = shuffle(bank).slice(0, Math.min(requested, bank.length));
    if (!current.length) {
      summaryEl.innerHTML = '<div class="callout">No hay preguntas para esa combinación de filtros.</div>';
      quizEl.innerHTML = "";
      return;
    }
    quizEl.innerHTML = current.map(renderQuestion).join("");
    updateLiveSummary();
    window.scrollTo({ top: quizEl.offsetTop - 90, behavior: "smooth" });
  }

  function finish() {
    if (!current.length) return;
    finished = true;
    let correct = 0;
    const byCat = new Map();
    current.forEach((q, i) => {
      const selected = answers.get(i);
      const ok = selected === q.answer;
      if (ok) correct++;
      const row = byCat.get(q.category) || { total: 0, correct: 0 };
      row.total++;
      if (ok) row.correct++;
      byCat.set(q.category, row);
    });
    quizEl.innerHTML = current.map((q, i) => {
      const selected = answers.get(i);
      return `<article class="question-card"><span class="tag">${q.category} · ${q.difficulty}</span><h3>${i + 1}. ${q.question}</h3><div class="option-list">${q.options.map((opt,j)=>`<button type="button" disabled class="${j===q.answer?"correct":(j===selected&&j!==q.answer?"incorrect":"")}">${opt}</button>`).join("")}</div><div class="explanation"><strong>${selected === q.answer ? "Correcto." : selected === undefined ? "Sin responder. Respuesta correcta: " + q.options[q.answer] + "." : "Respuesta correcta: " + q.options[q.answer] + "."}</strong> ${q.explanation}</div></article>`;
    }).join("");
    const percent = Math.round(correct / current.length * 100);
    const cats = [...byCat.entries()].sort((a,b)=>a[0].localeCompare(b[0],"es"));
    summaryEl.innerHTML = `<div class="callout"><strong>Resultado: ${correct}/${current.length} · ${percent}%</strong><br>La lectura por categoría permite identificar qué mecanismo conviene repasar.</div><div class="summary-grid" style="margin-top:.8rem">${cats.map(([cat,v])=>`<div class="summary-card"><strong>${v.correct}/${v.total}</strong><span>${cat}</span></div>`).join("")}</div>`;
    window.scrollTo({ top: summaryEl.offsetTop - 90, behavior: "smooth" });
  }

  function reset() {
    current = [];
    finished = false;
    answers.clear();
    quizEl.innerHTML = "";
    summaryEl.innerHTML = "";
  }

  document.addEventListener("DOMContentLoaded", () => {
    populateCategories();
    $("#start").addEventListener("click", start);
    $("#finish").addEventListener("click", finish);
    $("#reset").addEventListener("click", reset);
    start();
  });
})();