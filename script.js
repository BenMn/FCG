const STORAGE_KEY = "fc-gavot-lineup-v1";

const POSITIONS = [
  { id: "GB", label: "GB", group: "Gardien" },
  { id: "DC", label: "DC", group: "Défenseur" },
  { id: "DG", label: "DG", group: "Défenseur" },
  { id: "DD", label: "DD", group: "Défenseur" },
  { id: "MDC", label: "MDC", group: "Milieu" },
  { id: "MC", label: "MC", group: "Milieu" },
  { id: "MG", label: "MG", group: "Milieu" },
  { id: "MD", label: "MD", group: "Milieu" },
  { id: "MOC", label: "MOC", group: "Milieu" },
  { id: "AG", label: "AG", group: "Attaque" },
  { id: "AD", label: "AD", group: "Attaque" },
  { id: "BU", label: "BU", group: "Attaque" },
];

const TRAINING_CRITERIA = [
  { id: "technique", label: "Technique" },
  { id: "jeu", label: "Jeu" },
  { id: "physique", label: "Physique" },
];

const DEFAULT_RATING = 3;

const FORMATIONS = {
  "4-2-3-1": [
    ["GB", 50, 92],
    ["DG", 16, 76],
    ["DC", 38, 78],
    ["DC", 62, 78],
    ["DD", 84, 76],
    ["MDC", 36, 64],
    ["MDC", 64, 64],
    ["AG", 20, 41],
    ["MOC", 50, 40],
    ["AD", 80, 41],
    ["BU", 50, 23],
  ],
  "4-3-3": [
    ["GB", 50, 92],
    ["DG", 16, 76],
    ["DC", 38, 78],
    ["DC", 62, 78],
    ["DD", 84, 76],
    ["MC", 28, 56],
    ["MDC", 50, 66],
    ["MC", 72, 56],
    ["AG", 20, 30],
    ["BU", 50, 24],
    ["AD", 80, 30],
  ],
  "4-3-3 Offensif": [
    ["GB", 50, 92],
    ["DG", 16, 76],
    ["DC", 38, 78],
    ["DC", 62, 78],
    ["DD", 84, 76],
    ["MC", 30, 58],
    ["MC", 70, 58],
    ["MOC", 50, 45],
    ["AG", 20, 29],
    ["BU", 50, 23],
    ["AD", 80, 29],
  ],
  "4-4-2": [
    ["GB", 50, 92],
    ["DG", 16, 76],
    ["DC", 38, 78],
    ["DC", 62, 78],
    ["DD", 84, 76],
    ["MG", 10, 50],
    ["MC", 35, 55],
    ["MC", 65, 55],
    ["MD", 90, 50],
    ["BU", 34, 28],
    ["BU", 66, 28],
  ],
  "4-4-2 Losange": [
    ["GB", 50, 92],
    ["DG", 16, 76],
    ["DC", 38, 78],
    ["DC", 62, 78],
    ["DD", 84, 76],
    ["MDC", 50, 66],
    ["MC", 26, 55],
    ["MC", 74, 55],
    ["MOC", 50, 40],
    ["BU", 34, 26],
    ["BU", 66, 26],
  ],
  "4-3-2-1": [
    ["GB", 50, 92],
    ["DG", 16, 76],
    ["DC", 38, 78],
    ["DC", 62, 78],
    ["DD", 84, 76],
    ["MC", 28, 58],
    ["MDC", 50, 68],
    ["MC", 72, 58],
    ["MOC", 36, 40],
    ["MOC", 64, 40],
    ["BU", 50, 23],
  ],
  "4-2-4": [
    ["GB", 50, 92],
    ["DG", 16, 76],
    ["DC", 38, 78],
    ["DC", 62, 78],
    ["DD", 84, 76],
    ["MC", 36, 56],
    ["MC", 64, 56],
    ["AG", 12, 29],
    ["BU", 38, 25],
    ["BU", 62, 25],
    ["AD", 88, 29],
  ],
  "3-5-2": [
    ["GB", 50, 92],
    ["DC", 26, 77],
    ["DC", 50, 80],
    ["DC", 74, 77],
    ["MG", 10, 50],
    ["MC", 31, 55],
    ["MDC", 50, 66],
    ["MC", 69, 55],
    ["MD", 90, 50],
    ["BU", 34, 27],
    ["BU", 66, 27],
  ],
  "3-4-3": [
    ["GB", 50, 92],
    ["DC", 26, 77],
    ["DC", 50, 80],
    ["DC", 74, 77],
    ["MG", 10, 51],
    ["MC", 35, 56],
    ["MC", 65, 56],
    ["MD", 90, 51],
    ["AG", 20, 29],
    ["BU", 50, 23],
    ["AD", 80, 29],
  ],
  "3-1-4-2": [
    ["GB", 50, 92],
    ["DC", 26, 77],
    ["DC", 50, 80],
    ["DC", 74, 77],
    ["MDC", 50, 66],
    ["MG", 10, 50],
    ["MC", 31, 55],
    ["MC", 69, 55],
    ["MD", 90, 50],
    ["BU", 34, 27],
    ["BU", 66, 27],
  ],
  "5-3-2": [
    ["GB", 50, 92],
    ["DG", 10, 75],
    ["DC", 31, 79],
    ["DC", 50, 81],
    ["DC", 69, 79],
    ["DD", 90, 75],
    ["MC", 28, 55],
    ["MDC", 50, 66],
    ["MC", 72, 55],
    ["BU", 34, 28],
    ["BU", 66, 28],
  ],
  "5-4-1": [
    ["GB", 50, 92],
    ["DG", 10, 75],
    ["DC", 31, 79],
    ["DC", 50, 81],
    ["DC", 69, 79],
    ["DD", 90, 75],
    ["MG", 10, 50],
    ["MC", 35, 55],
    ["MC", 65, 55],
    ["MD", 90, 50],
    ["BU", 50, 24],
  ],
};

const TEAM_FORMATS = {
  "11": { label: "Foot à 11", totalPlayers: 11, defaultFormation: "4-4-2" },
  "7": { label: "Foot à 7", totalPlayers: 7, defaultFormation: "2-3-1" },
  "5": { label: "Foot à 5", totalPlayers: 5, defaultFormation: "1-2-1" },
};

const BASE_FORMATIONS = {
  "11": FORMATIONS,
  "7": {
    "2-3-1": [
      ["GB", 50, 92],
      ["DC", 36, 76],
      ["DC", 64, 76],
      ["MG", 16, 52],
      ["MC", 50, 57],
      ["MD", 84, 52],
      ["BU", 50, 27],
    ],
    "3-2-1": [
      ["GB", 50, 92],
      ["DG", 24, 76],
      ["DC", 50, 79],
      ["DD", 76, 76],
      ["MC", 34, 54],
      ["MC", 66, 54],
      ["BU", 50, 27],
    ],
    "2-2-2": [
      ["GB", 50, 92],
      ["DC", 36, 76],
      ["DC", 64, 76],
      ["MG", 28, 54],
      ["MD", 72, 54],
      ["BU", 36, 28],
      ["BU", 64, 28],
    ],
  },
  "5": {
    "1-2-1": [
      ["GB", 50, 92],
      ["DC", 50, 76],
      ["MG", 28, 52],
      ["MD", 72, 52],
      ["BU", 50, 27],
    ],
    "2-1-1": [
      ["GB", 50, 92],
      ["DG", 34, 76],
      ["DD", 66, 76],
      ["MC", 50, 54],
      ["BU", 50, 27],
    ],
    "1-1-2": [
      ["GB", 50, 92],
      ["DC", 50, 76],
      ["MC", 50, 54],
      ["BU", 34, 28],
      ["BU", 66, 28],
    ],
  },
};

const DEFAULT_PLAYERS = [
  { id: makeId(), name: "Alex", positions: ["GB"], ratings: defaultRatings() },
  { id: makeId(), name: "Ben", positions: ["DC", "MDC"], ratings: defaultRatings() },
  { id: makeId(), name: "Chris", positions: ["DG", "MG"], ratings: defaultRatings() },
  { id: makeId(), name: "David", positions: ["DD", "MD"], ratings: defaultRatings() },
  { id: makeId(), name: "Eliott", positions: ["MC", "MOC"], ratings: defaultRatings() },
  { id: makeId(), name: "Flo", positions: ["BU", "AD"], ratings: defaultRatings() },
];

const DEFAULT_EXERCISE_LIBRARY = [
  {
    id: "echauffement-ballon",
    name: "Échauffement avec ballon",
    defaultDuration: 8,
    objective: "technique",
    description: "Zone de 25 x 25 m, idéalement avec 1 ballon par joueur. Pendant 4 min, conduite libre avec intérieur/extérieur, changements de direction, pied faible et consignes annoncées toutes les 20 à 30 s. Puis 4 min par deux avec passes courtes en mouvement : après chaque passe, le joueur doit se déplacer pour redevenir disponible.",
    diagram: "Zone 25 x 25 m\n\n+----------------+\n| o  o  o  o  o |\n|   conduite    |\n| o  o  o  o  o |\n+----------------+\n\nPuis par deux : A <-> B en mouvement",
    coachingPoints: [
      "Lever la tête avant de recevoir ou conduire.",
      "Garder le ballon proche du pied.",
      "Passer puis bouger immédiatement.",
    ],
  },
  {
    id: "passe-controle-oriente",
    name: "Passe / contrôle orienté par 2",
    defaultDuration: 12,
    objective: "technique",
    description: "Par groupes de deux, espacés de 8 à 10 m. Chaque joueur a une petite porte de deux plots devant lui. Le receveur prend l'information avant la passe, reçoit à côté de la porte, oriente son contrôle pour faire passer le ballon de l'autre côté, puis transmet. Après quelques minutes, passer en 2 touches maximum si la qualité reste bonne.",
    diagram: "A        | |  -------->  | |        B\n         porte           porte\n\nB contrôle d'un côté de la porte,\npuis rejoue de l'autre côté.",
    coachingPoints: [
      "Corps ouvert avant la réception.",
      "Premier contrôle qui prépare la passe suivante.",
      "Passe au sol appuyée, cheville ferme.",
      "Travailler les deux pieds.",
    ],
  },
  {
    id: "triangle-passe-suis",
    name: "Triangle : passe et suis ta passe",
    defaultDuration: 12,
    objective: "technique",
    description: "Groupes de 4 à 5 joueurs sur un triangle de 10 à 12 m entre les plots. A passe à B et prend sa place. B contrôle orienté vers C, passe à C puis prend sa place. C joue vers A, et ainsi de suite. Progression : 2 touches maximum, puis contrôle avec le pied opposé à l'origine de la passe pour ouvrir le corps.",
    diagram: "          B\n         / \\\n        /   \\\n       /     \\\n      A ----- C\n\nPasse : A -> B\nCourse : A prend la place de B",
    coachingPoints: [
      "Regarder avant de recevoir.",
      "Orienter le contrôle vers la prochaine solution.",
      "Accélérer après la passe pour occuper la place suivante.",
    ],
  },
  {
    id: "conservation-5v2-6v2",
    name: "Conservation 5v2 / 6v2",
    defaultDuration: 11,
    objective: "jeu",
    description: "Carré d'environ 12 x 12 m pour un 5v2, à agrandir si le niveau le demande. Les joueurs extérieurs conservent le ballon face à deux défenseurs. D'abord touches libres, puis 3 touches, puis éventuellement 2 touches pour les plus à l'aise. Changer les défenseurs après récupération ou toutes les 45 à 60 s. Challenge possible : 8 passes consécutives = 1 point.",
    diagram: "+----------------+\n| o          o   |\n|      x  x      |\n| o          o   |\n|       o        |\n+----------------+\n\n5 contre 2 dans le carré",
    coachingPoints: [
      "Scanner avant réception.",
      "Contrôler loin du défenseur.",
      "Créer un angle de passe après avoir joué.",
      "Ne pas rester spectateur de sa passe.",
    ],
  },
  {
    id: "opposition-premiere-mi-temps",
    name: "Opposition - 1re mi-temps",
    defaultDuration: 30,
    objective: "jeu",
    description: "Match de 30 min avec une règle bonus, sans bloquer le jeu : un but vaut 2 points si l'action comporte au moins 5 passes consécutives, sinon il vaut 1 point. L'objectif est d'encourager la disponibilité, le contrôle utile et la circulation sans imposer une contrainte artificielle à chaque situation.",
    diagram: "",
    coachingPoints: [
      "Encourager les joueurs à proposer après la passe.",
      "Valoriser les séquences construites.",
      "Intervenir seulement lors d'arrêts naturels.",
    ],
  },
  {
    id: "opposition-deuxieme-mi-temps",
    name: "Opposition - 2e mi-temps",
    defaultDuration: 30,
    objective: "jeu",
    description: "Match libre de 30 min. Observer si le travail technique ressort naturellement : regard avant réception, contrôle orienté vers la suite, mouvement après la passe. Limiter les interventions pour laisser le jeu vivre et ne faire que des rappels courts.",
    diagram: "",
    coachingPoints: [
      "Observer plus que corriger.",
      "Repérer les contrôles qui font gagner du temps.",
      "Faire des remarques courtes et concrètes.",
    ],
  },
];

const DEFAULT_SESSIONS = [
  {
    id: makeId(),
    name: "Séance 1 - Contrôle, passe et disponibilité",
    createdAt: new Date().toISOString(),
    exercises: [
      exerciseFromLibrary("echauffement-ballon"),
      exerciseFromLibrary("passe-controle-oriente"),
      exerciseFromLibrary("triangle-passe-suis"),
      exerciseFromLibrary("conservation-5v2-6v2"),
      exerciseFromLibrary("opposition-premiere-mi-temps"),
      exerciseFromLibrary("opposition-deuxieme-mi-temps"),
    ],
  },
];

const state = loadState();
let selectedPlayerId = null;
let draggedPlayerId = null;
let pointerDrag = null;
let suppressNextCardClick = false;
let isEditingSelectedPlayer = false;
let pendingSlotIndex = null;
let draftExercises = [];

const elements = {
  viewTabs: document.querySelectorAll("[data-view-tab]"),
  lineupView: document.querySelector("#lineupView"),
  trainingView: document.querySelector("#trainingView"),
  formatSelect: document.querySelector("#formatSelect"),
  formationSelect: document.querySelector("#formationSelect"),
  formationTitle: document.querySelector("#formationTitle"),
  formationSlots: document.querySelector("#formationSlots"),
  openPlayerModalButton: document.querySelector("#openPlayerModalButton"),
  closePlayerModalButton: document.querySelector("#closePlayerModalButton"),
  playerModal: document.querySelector("#playerModal"),
  slotPickerModal: document.querySelector("#slotPickerModal"),
  closeSlotPickerButton: document.querySelector("#closeSlotPickerButton"),
  slotPickerDetails: document.querySelector("#slotPickerDetails"),
  slotPickerPlayers: document.querySelector("#slotPickerPlayers"),
  positionOptions: document.querySelector("#positionOptions"),
  playerRatingOptions: document.querySelector("#playerRatingOptions"),
  playerForm: document.querySelector("#playerForm"),
  playerName: document.querySelector("#playerName"),
  availablePlayers: document.querySelector("#availablePlayers"),
  benchDropZone: document.querySelector("#benchDropZone"),
  playerCount: document.querySelector("#playerCount"),
  availableCount: document.querySelector("#availableCount"),
  lineupCount: document.querySelector("#lineupCount"),
  resetLineupButton: document.querySelector("#resetLineupButton"),
  selectionDetails: document.querySelector("#selectionDetails"),
  sessionForm: document.querySelector("#sessionForm"),
  sessionName: document.querySelector("#sessionName"),
  exerciseName: document.querySelector("#exerciseName"),
  exerciseDuration: document.querySelector("#exerciseDuration"),
  exerciseObjective: document.querySelector("#exerciseObjective"),
  exerciseDescription: document.querySelector("#exerciseDescription"),
  addExerciseButton: document.querySelector("#addExerciseButton"),
  draftExercises: document.querySelector("#draftExercises"),
  exerciseLibrary: document.querySelector("#exerciseLibrary"),
  exerciseLibraryCount: document.querySelector("#exerciseLibraryCount"),
  trainingSessions: document.querySelector("#trainingSessions"),
  sessionCount: document.querySelector("#sessionCount"),
};

init();

function init() {
  renderPositionOptions();
  renderPlayerRatingOptions();
  renderExerciseObjectiveOptions();
  renderFormationOptions();
  bindEvents();
  render();
}

function loadState() {
  const fallback = {
    players: DEFAULT_PLAYERS,
    teamSize: "11",
    formation: "4-4-2",
    lineups: {},
    exerciseLibrary: DEFAULT_EXERCISE_LIBRARY,
    sessions: DEFAULT_SESSIONS,
    activeView: "lineup",
    defaultTrainingSeeded: true,
  };

  try {
    const rawState = localStorage.getItem(STORAGE_KEY);
    if (!rawState) return fallback;
    const parsed = JSON.parse(rawState);

    const teamSize = TEAM_FORMATS[parsed.teamSize] ? parsed.teamSize : fallback.teamSize;
    const parsedFormation = parsed.formation === "4-4-2 losange" ? "4-4-2 Losange" : parsed.formation;
    const formation = getBaseFormations(teamSize)[parsedFormation]
      ? parsedFormation
      : TEAM_FORMATS[teamSize].defaultFormation;
    const exerciseLibrary = seedDefaultExerciseLibrary(sanitizeExerciseLibrary(parsed.exerciseLibrary));
    const sessions = Array.isArray(parsed.sessions) ? sanitizeSessions(parsed.sessions) : [];
    const seededSessions = parsed.defaultTrainingSeeded === true ? sessions : seedDefaultSessions(sessions);

    return {
      players: sanitizePlayers(parsed.players, fallback.players),
      teamSize,
      formation,
      lineups: sanitizeLineups(parsed.lineups),
      exerciseLibrary,
      sessions: seededSessions,
      activeView: parsed.activeView === "training" ? "training" : fallback.activeView,
      defaultTrainingSeeded: true,
    };
  } catch {
    return fallback;
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function bindEvents() {
  elements.viewTabs.forEach((tab) => {
    tab.addEventListener("click", () => switchView(tab.dataset.viewTab));
  });
  elements.playerForm.addEventListener("submit", addPlayer);
  elements.addExerciseButton.addEventListener("click", addDraftExercise);
  elements.sessionForm.addEventListener("submit", createTrainingSession);
  elements.draftExercises.addEventListener("click", (event) => {
    const deleteButton = event.target.closest("[data-delete-draft-exercise]");
    if (!deleteButton) return;
    draftExercises = draftExercises.filter((exercise) => exercise.id !== deleteButton.dataset.deleteDraftExercise);
    renderDraftExercises();
  });
  elements.exerciseLibrary.addEventListener("click", (event) => {
    const addButton = event.target.closest("[data-add-library-exercise]");
    if (!addButton) return;
    addLibraryExerciseToDraft(addButton.dataset.addLibraryExercise);
  });
  elements.trainingSessions.addEventListener("click", (event) => {
    const deleteButton = event.target.closest("[data-delete-session]");
    if (!deleteButton) return;
    state.sessions = state.sessions.filter((session) => session.id !== deleteButton.dataset.deleteSession);
    saveState();
    renderTraining();
  });
  elements.selectionDetails.addEventListener("submit", updateSelectedPlayer);
  elements.selectionDetails.addEventListener("click", (event) => {
    if (event.target.matches("[data-edit-selected]")) {
      isEditingSelectedPlayer = true;
      render();
    }
    if (event.target.matches("[data-cancel-edit]")) {
      isEditingSelectedPlayer = false;
      render();
    }
    if (event.target.matches("[data-delete-selected]")) {
      deleteSelectedPlayer();
    }
    if (event.target.matches("[data-bench-selected]")) {
      movePlayerToBench(selectedPlayerId);
    }
  });
  elements.openPlayerModalButton.addEventListener("click", openPlayerModal);
  elements.closePlayerModalButton.addEventListener("click", closePlayerModal);
  elements.closeSlotPickerButton.addEventListener("click", closeSlotPicker);
  elements.playerModal.addEventListener("click", (event) => {
    if (event.target.matches("[data-close-modal]")) {
      closePlayerModal();
    }
  });
  elements.slotPickerModal.addEventListener("click", (event) => {
    const playerButton = event.target.closest("[data-slot-player-id]");
    if (playerButton) {
      assignPlayerToSlot(playerButton.dataset.slotPlayerId, pendingSlotIndex);
      closeSlotPicker();
      return;
    }

    if (event.target.matches("[data-close-slot-picker]")) {
      closeSlotPicker();
    }
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && isPlayerModalOpen()) {
      closePlayerModal();
    }
    if (event.key === "Escape" && isSlotPickerOpen()) {
      closeSlotPicker();
    }
  });
  elements.formatSelect.addEventListener("change", (event) => {
    state.teamSize = event.target.value;
    state.formation = TEAM_FORMATS[state.teamSize].defaultFormation;
    selectedPlayerId = null;
    isEditingSelectedPlayer = false;
    closeSlotPicker();
    saveState();
    render();
  });
  elements.formationSelect.addEventListener("change", (event) => {
    state.formation = event.target.value;
    saveState();
    render();
  });

  elements.resetLineupButton.addEventListener("click", () => {
    state.lineups[currentLineupKey()] = {};
    selectedPlayerId = null;
    isEditingSelectedPlayer = false;
    saveState();
    render();
  });

  elements.benchDropZone.addEventListener("dragover", allowDrop);
  elements.benchDropZone.addEventListener("dragleave", () => {
    elements.benchDropZone.classList.remove("drag-over");
  });
  elements.benchDropZone.addEventListener("drop", (event) => {
    event.preventDefault();
    elements.benchDropZone.classList.remove("drag-over");
    movePlayerToBench(getDraggedPlayerId(event));
  });
}

function renderPositionOptions() {
  elements.positionOptions.innerHTML = "";

  POSITIONS.forEach((position) => {
    const label = document.createElement("label");
    label.className = "position-option";
    label.title = position.group;
    label.innerHTML = `
      <input type="checkbox" name="positions" value="${position.id}">
      <span>${position.label}</span>
    `;
    elements.positionOptions.append(label);
  });
}

function renderPlayerRatingOptions() {
  elements.playerRatingOptions.innerHTML = renderRatingInputs(defaultRatings(), "playerRating");
}

function renderExerciseObjectiveOptions() {
  elements.exerciseObjective.innerHTML = TRAINING_CRITERIA.map((criterion) => {
    return `<option value="${criterion.id}">${criterion.label}</option>`;
  }).join("");
}

function renderFormationOptions() {
  elements.formationSelect.innerHTML = "";

  Object.keys(getBaseFormations(state.teamSize)).forEach((formation) => {
    const option = document.createElement("option");
    option.value = formation;
    option.textContent = formation;
    elements.formationSelect.append(option);
  });
}

function openPlayerModal() {
  elements.playerModal.classList.add("is-open");
  elements.playerModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  elements.playerName.focus();
}

function closePlayerModal() {
  elements.playerModal.classList.remove("is-open");
  elements.playerModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  elements.playerForm.reset();
  elements.openPlayerModalButton.focus();
}

function isPlayerModalOpen() {
  return elements.playerModal.classList.contains("is-open");
}

function openSlotPicker(slotIndex) {
  pendingSlotIndex = slotIndex;
  renderSlotPicker();
  elements.slotPickerModal.classList.add("is-open");
  elements.slotPickerModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeSlotPicker() {
  elements.slotPickerModal.classList.remove("is-open");
  elements.slotPickerModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  pendingSlotIndex = null;
}

function isSlotPickerOpen() {
  return elements.slotPickerModal.classList.contains("is-open");
}

function renderSlotPicker() {
  const slots = getFormationSlots(state.formation);
  const role = slots[pendingSlotIndex]?.[0];
  const assignedIds = new Set(Object.values(currentLineup()));
  const availablePlayers = state.players
    .filter((player) => !assignedIds.has(player.id))
    .sort((first, second) => {
      const firstMatch = first.positions.includes(role);
      const secondMatch = second.positions.includes(role);
      if (firstMatch !== secondMatch) return firstMatch ? -1 : 1;
      return first.name.localeCompare(second.name, "fr");
    });

  elements.slotPickerDetails.innerHTML = `
    <div class="selection-box">
      <strong>Poste à pourvoir</strong><br>
      ${role}
    </div>
  `;
  elements.slotPickerPlayers.innerHTML = "";

  if (!availablePlayers.length) {
    const empty = document.createElement("p");
    empty.className = "empty-state";
    empty.textContent = "Aucun joueur disponible pour ce poste.";
    elements.slotPickerPlayers.append(empty);
    return;
  }

  availablePlayers.forEach((player) => {
    const isMatch = player.positions.includes(role);
    const button = document.createElement("button");
    button.type = "button";
    button.className = `slot-picker-player ${isMatch ? "is-match" : "is-mismatch"}`;
    button.dataset.slotPlayerId = player.id;
    button.innerHTML = `
      <span>
        <strong>${escapeHtml(player.name)}</strong>
        <span class="badges">${player.positions.map((position) => `<span class="badge">${position}</span>`).join("")}</span>
      </span>
      <em>${isMatch ? "Adapté" : "Dépannage"}</em>
    `;
    elements.slotPickerPlayers.append(button);
  });
}

function render() {
  updateActiveView();
  renderFormationOptions();
  elements.formatSelect.value = state.teamSize;
  elements.formationSelect.value = state.formation;
  elements.formationTitle.textContent = state.formation;
  elements.lineupCount.nextElementSibling.textContent = `/ ${TEAM_FORMATS[state.teamSize].totalPlayers}`;
  renderSlots();
  renderAvailablePlayers();
  renderSelection();
  renderTraining();
  updateCounts();
  saveState();
}

function switchView(view) {
  state.activeView = view === "training" ? "training" : "lineup";
  saveState();
  render();
}

function updateActiveView() {
  const isTraining = state.activeView === "training";
  document.body.classList.toggle("is-training-view", isTraining);
  elements.lineupView.classList.toggle("is-active", !isTraining);
  elements.trainingView.classList.toggle("is-active", isTraining);

  elements.viewTabs.forEach((tab) => {
    const isActive = tab.dataset.viewTab === state.activeView;
    tab.classList.toggle("is-active", isActive);
    tab.setAttribute("aria-selected", String(isActive));
  });
}

function renderSlots() {
  const slots = getFormationSlots(state.formation);
  const lineup = currentLineup();
  elements.formationSlots.innerHTML = "";

  slots.forEach(([role, x, y], index) => {
    const slot = document.createElement("div");
    const playerId = lineup[index];
    const selectedPlayer = findPlayer(selectedPlayerId);
    const isPickTarget = selectedPlayer && !playerId && selectedPlayer.positions.includes(role);
    slot.className = `slot ${playerId ? "" : "empty"} ${isPickTarget ? "pick-target" : ""}`;
    slot.style.left = `${x}%`;
    slot.style.top = `${y}%`;
    slot.dataset.slotIndex = index;
    slot.dataset.role = role;
    slot.tabIndex = 0;
    slot.setAttribute("role", "button");
    slot.setAttribute("aria-label", playerId ? `${role} occupé` : `${role} libre`);

    slot.addEventListener("dragover", allowDrop);
    slot.addEventListener("dragleave", () => slot.classList.remove("drag-over"));
    slot.addEventListener("drop", (event) => {
      event.preventDefault();
      slot.classList.remove("drag-over");
      assignPlayerToSlot(getDraggedPlayerId(event), index);
    });
    slot.addEventListener("click", () => handleSlotClick(index));
    slot.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        handleSlotClick(index);
      }
    });

    if (playerId) {
      const player = findPlayer(playerId);
      if (player) {
        slot.append(createPlayerCard(player, role, index));
      }
    } else {
      const label = document.createElement("span");
      label.className = "slot-label";
      label.textContent = role;
      slot.append(label);
    }

    elements.formationSlots.append(slot);
  });
}

function renderAvailablePlayers() {
  const assignedIds = new Set(Object.values(currentLineup()));
  const available = state.players
    .filter((player) => !assignedIds.has(player.id))
    .sort((a, b) => a.name.localeCompare(b.name, "fr"));

  elements.availablePlayers.innerHTML = "";

  if (!available.length) {
    const empty = document.createElement("p");
    empty.className = "empty-state";
    empty.textContent = "Tous les joueurs disponibles sont sur le terrain.";
    elements.availablePlayers.append(empty);
    return;
  }

  available.forEach((player) => {
    elements.availablePlayers.append(createPlayerCard(player));
  });
}

function renderSelection() {
  const selected = findPlayer(selectedPlayerId);

  if (!selected) {
    elements.selectionDetails.innerHTML = `
      <p class="empty-state">Sélectionnez un joueur pour voir ses postes et son placement actuel.</p>
    `;
    return;
  }

  const slot = getPlayerSlot(selected.id);
  const role = slot ? getFormationSlots(state.formation)[Number(slot[0])][0] : "Banc";
  const match = slot && selected.positions.includes(role);
  const favoriteBadges = selected.positions.map((position) => `<span class="badge">${position}</span>`).join("");

  if (!isEditingSelectedPlayer) {
    elements.selectionDetails.innerHTML = `
      <div>
        <div class="selection-name">${escapeHtml(selected.name)}</div>
      </div>
      <div class="selection-box">
        <strong>Placement</strong><br>
        ${role}${slot ? (match ? " · poste favori" : " · dépannage") : ""}
      </div>
      <div class="selection-box">
        <strong>Postes favoris</strong>
        <div class="badges selection-badges">${favoriteBadges}</div>
      </div>
      <div class="selection-box">
        <div class="selection-box-heading">
          <strong>Notes</strong>
          <span class="average-rating">${averageRatingOutOf10(selected.ratings)}</span>
        </div>
        <div class="rating-summary">${renderRatingSummary(selected.ratings)}</div>
      </div>
      <div class="selection-actions">
        ${slot ? '<button class="secondary-button" type="button" data-bench-selected>Retirer du terrain</button>' : ""}
        <button class="primary-button" type="button" data-edit-selected>Modifier joueur</button>
        <button class="danger-button" type="button" data-delete-selected>Supprimer le joueur</button>
      </div>
    `;
    return;
  }

  elements.selectionDetails.innerHTML = `
    <div class="selection-box">
      <strong>Placement</strong><br>
      ${role}${slot ? (match ? " · poste favori" : " · dépannage") : ""}
    </div>

    <form id="editPlayerForm" class="edit-player-form">
      <div class="form-row">
        <label for="editPlayerName">Nom</label>
        <input id="editPlayerName" name="editPlayerName" type="text" value="${escapeHtml(selected.name)}" autocomplete="off" required>
      </div>
      <fieldset class="positions-fieldset">
        <legend>Postes</legend>
        <div class="position-options compact-position-options">
          ${renderEditPositionOptions(selected)}
        </div>
      </fieldset>
      <fieldset class="ratings-fieldset">
        <legend>Notes</legend>
        <div class="rating-options">
          ${renderRatingInputs(selected.ratings, "editRating")}
        </div>
      </fieldset>
      <div class="selection-actions">
        <button class="secondary-button" type="button" data-cancel-edit>Annuler</button>
        <button class="primary-button" type="submit">Enregistrer</button>
      </div>
    </form>
    ${slot ? '<button class="secondary-button" type="button" data-bench-selected>Retirer du terrain</button>' : ""}
    <button class="danger-button" type="button" data-delete-selected>Supprimer le joueur</button>
  `;
}

function renderEditPositionOptions(player) {
  return POSITIONS.map((position) => {
    const checked = player.positions.includes(position.id) ? "checked" : "";

    return `
      <label class="position-option" title="${position.group}">
        <input type="checkbox" name="editPositions" value="${position.id}" ${checked}>
        <span>${position.label}</span>
      </label>
    `;
  }).join("");
}

function renderRatingInputs(ratings, namePrefix) {
  const normalizedRatings = normalizeRatings(ratings);

  return TRAINING_CRITERIA.map((criterion) => {
    const options = [1, 2, 3, 4, 5].map((rating) => {
      const selected = normalizedRatings[criterion.id] === rating ? "selected" : "";
      return `<option value="${rating}" ${selected}>${starsForRating(rating)}</option>`;
    }).join("");

    return `
      <label class="rating-option">
        <span>${criterion.label}</span>
        <select name="${namePrefix}-${criterion.id}">
          ${options}
        </select>
      </label>
    `;
  }).join("");
}

function renderRatingSummary(ratings) {
  const normalizedRatings = normalizeRatings(ratings);

  return TRAINING_CRITERIA.map((criterion) => {
    return `
      <span class="rating-chip">
        <strong>${criterion.label}</strong>
        <span class="stars" aria-label="${normalizedRatings[criterion.id]} sur 5">${starsForRating(normalizedRatings[criterion.id])}</span>
      </span>
    `;
  }).join("");
}

function getRatingsFromForm(form, namePrefix) {
  return TRAINING_CRITERIA.reduce((ratings, criterion) => {
    const field = form.elements[`${namePrefix}-${criterion.id}`];
    const value = Number(field?.value);
    ratings[criterion.id] = clampRating(value);
    return ratings;
  }, {});
}

function updateSelectedPlayer(event) {
  event.preventDefault();

  const selected = findPlayer(selectedPlayerId);
  if (!selected) return;

  const form = event.target;
  const name = form.elements.editPlayerName.value.trim();
  const positions = [...form.querySelectorAll('input[name="editPositions"]:checked')].map((input) => input.value);
  const ratings = getRatingsFromForm(form, "editRating");

  if (!name || !positions.length) {
    return;
  }

  selected.name = name;
  selected.positions = positions;
  selected.ratings = ratings;
  isEditingSelectedPlayer = false;
  saveState();
  render();
}

function updateCounts() {
  const assigned = new Set(Object.values(currentLineup()));
  elements.playerCount.textContent = state.players.length;
  elements.availableCount.textContent = state.players.filter((player) => !assigned.has(player.id)).length;
  elements.lineupCount.textContent = assigned.size;
}

function addPlayer(event) {
  event.preventDefault();

  const name = elements.playerName.value.trim();
  const positions = [...elements.playerForm.querySelectorAll('input[name="positions"]:checked')].map((input) => input.value);
  const ratings = getRatingsFromForm(elements.playerForm, "playerRating");
  if (!name || !positions.length) return;

  state.players.push({
    id: makeId(),
    name,
    positions,
    ratings,
  });

  elements.playerForm.reset();
  closePlayerModal();
  saveState();
  render();
}

function addDraftExercise() {
  const name = elements.exerciseName.value.trim();
  const duration = Number(elements.exerciseDuration.value);
  const objective = elements.exerciseObjective.value;
  const description = elements.exerciseDescription.value.trim();

  if (!name || !description || !Number.isFinite(duration) || duration < 1 || !getCriterion(objective)) {
    return;
  }

  draftExercises.push({
    id: makeId(),
    name,
    duration: Math.round(duration),
    objective,
    description,
    diagram: "",
    coachingPoints: [],
  });

  elements.exerciseName.value = "";
  elements.exerciseDuration.value = "";
  elements.exerciseDescription.value = "";
  elements.exerciseObjective.value = TRAINING_CRITERIA[0].id;
  elements.exerciseName.focus();
  renderDraftExercises();
}

function addLibraryExerciseToDraft(exerciseId) {
  const exercise = state.exerciseLibrary.find((item) => item.id === exerciseId);
  if (!exercise) return;

  draftExercises.push(exerciseFromTemplate(exercise));
  renderDraftExercises();
}

function createTrainingSession(event) {
  event.preventDefault();

  const name = elements.sessionName.value.trim();
  if (!name || !draftExercises.length) {
    return;
  }

  state.sessions.unshift({
    id: makeId(),
    name,
    createdAt: new Date().toISOString(),
    exercises: draftExercises.map((exercise) => ({ ...exercise })),
  });

  draftExercises = [];
  elements.sessionForm.reset();
  elements.exerciseObjective.value = TRAINING_CRITERIA[0].id;
  saveState();
  renderTraining();
}

function renderTraining() {
  renderExerciseLibrary();
  renderDraftExercises();
  renderTrainingSessions();
}

function renderExerciseLibrary() {
  elements.exerciseLibraryCount.textContent = state.exerciseLibrary.length;
  elements.exerciseLibrary.innerHTML = "";

  state.exerciseLibrary.forEach((exercise) => {
    elements.exerciseLibrary.append(createLibraryExerciseCard(exercise));
  });
}

function renderDraftExercises() {
  elements.draftExercises.innerHTML = "";

  if (!draftExercises.length) {
    const empty = document.createElement("p");
    empty.className = "empty-state";
    empty.textContent = "Ajoutez des exercices pour construire la séance.";
    elements.draftExercises.append(empty);
    return;
  }

  draftExercises.forEach((exercise) => {
    elements.draftExercises.append(createExerciseRow(exercise, "draft"));
  });
}

function renderTrainingSessions() {
  elements.sessionCount.textContent = state.sessions.length;
  elements.trainingSessions.innerHTML = "";

  if (!state.sessions.length) {
    const empty = document.createElement("p");
    empty.className = "empty-state";
    empty.textContent = "Aucune séance créée pour le moment.";
    elements.trainingSessions.append(empty);
    return;
  }

  state.sessions.forEach((session) => {
    const totalDuration = session.exercises.reduce((total, exercise) => total + exercise.duration, 0);
    const article = document.createElement("article");
    article.className = "training-session-card";
    article.innerHTML = `
      <div class="training-session-heading">
        <div>
          <h3>${escapeHtml(session.name)}</h3>
          <p>${session.exercises.length} exercice${session.exercises.length > 1 ? "s" : ""} · ${totalDuration} min</p>
        </div>
        <button class="icon-button session-delete-button" type="button" title="Supprimer la séance" aria-label="Supprimer la séance" data-delete-session="${session.id}">×</button>
      </div>
      <div class="exercise-list">
        ${session.exercises.map((exercise) => exerciseRowHtml(exercise)).join("")}
      </div>
    `;
    elements.trainingSessions.append(article);
  });
}

function createLibraryExerciseCard(exercise) {
  const template = document.createElement("template");
  template.innerHTML = `
    <article class="library-exercise-card">
      <div class="library-exercise-heading">
        <div>
          <h3>${escapeHtml(exercise.name)}</h3>
          <p>${exercise.defaultDuration || exercise.duration} min</p>
        </div>
        <span class="objective-pill ${exercise.objective}">${getCriterionLabel(exercise.objective)}</span>
      </div>
      ${exerciseDetailHtml(exercise)}
      <button class="secondary-button" type="button" data-add-library-exercise="${exercise.id}">Ajouter à la séance</button>
    </article>
  `.trim();
  return template.content.firstElementChild;
}

function createExerciseRow(exercise, mode) {
  const template = document.createElement("template");
  template.innerHTML = exerciseRowHtml(exercise, mode === "draft").trim();
  return template.content.firstElementChild;
}

function exerciseRowHtml(exercise, canDelete = false) {
  return `
    <article class="exercise-row">
      <div class="exercise-row-heading">
        <div>
          <strong>${escapeHtml(exercise.name)}</strong>
          <span>${exercise.duration} min</span>
        </div>
        <span class="objective-pill ${exercise.objective}">${getCriterionLabel(exercise.objective)}</span>
        ${canDelete ? `<button class="icon-button exercise-delete-button" type="button" title="Retirer l'exercice" aria-label="Retirer l'exercice" data-delete-draft-exercise="${exercise.id}">×</button>` : ""}
      </div>
      ${exerciseDetailHtml(exercise)}
    </article>
  `;
}

function exerciseDetailHtml(exercise) {
  const coachingPoints = Array.isArray(exercise.coachingPoints) ? exercise.coachingPoints : [];

  return `
    <div class="exercise-detail">
      <p>${escapeHtml(exercise.description || "Description à compléter.")}</p>
      ${exercise.diagram ? `<pre class="exercise-diagram">${escapeHtml(exercise.diagram)}</pre>` : ""}
      ${coachingPoints.length ? `
        <ul class="coaching-points">
          ${coachingPoints.map((point) => `<li>${escapeHtml(point)}</li>`).join("")}
        </ul>
      ` : ""}
    </div>
  `;
}

function createPlayerCard(player, role = null, slotIndex = null) {
  const card = document.createElement("article");
  const isSelected = selectedPlayerId === player.id;
  const isMatch = role && player.positions.includes(role);

  if (role) {
    card.className = `pitch-player-card ${isSelected ? "selected" : ""} ${isMatch ? "is-match" : "is-mismatch"}`;
    card.draggable = true;
    card.dataset.playerId = player.id;
    card.title = isMatch ? "Poste adapté" : "Poste de dépannage";
    card.addEventListener("dragstart", (event) => {
      draggedPlayerId = player.id;
      event.dataTransfer.setData("text/plain", player.id);
      event.dataTransfer.effectAllowed = "move";
    });
    card.addEventListener("dragend", () => {
      draggedPlayerId = null;
      document.querySelectorAll(".drag-over").forEach((item) => item.classList.remove("drag-over"));
    });
    enablePointerDrag(card, player.id);
    card.addEventListener("click", (event) => {
      event.stopPropagation();
      if (suppressNextCardClick) {
        suppressNextCardClick = false;
        return;
      }
      if (selectedPlayerId && selectedPlayerId !== player.id && slotIndex !== null) {
        assignPlayerToSlot(selectedPlayerId, slotIndex);
        return;
      }
      const nextSelectedPlayerId = selectedPlayerId === player.id ? null : player.id;
      if (nextSelectedPlayerId !== selectedPlayerId) {
        isEditingSelectedPlayer = false;
      }
      selectedPlayerId = nextSelectedPlayerId;
      render();
    });
    card.innerHTML = `
      <div class="pitch-player-name">${escapeHtml(player.name)}</div>
      <div class="pitch-player-role">${role}</div>
    `;
    return card;
  }

  card.className = `player-card ${isSelected ? "selected" : ""} ${isMatch ? "is-match" : ""}`;
  card.draggable = true;
  card.dataset.playerId = player.id;
  card.addEventListener("dragstart", (event) => {
    draggedPlayerId = player.id;
    event.dataTransfer.setData("text/plain", player.id);
    event.dataTransfer.effectAllowed = "move";
  });
    card.addEventListener("dragend", () => {
      draggedPlayerId = null;
      document.querySelectorAll(".drag-over").forEach((item) => item.classList.remove("drag-over"));
    });
  enablePointerDrag(card, player.id);
  card.addEventListener("click", (event) => {
    event.stopPropagation();
    if (suppressNextCardClick) {
      suppressNextCardClick = false;
      return;
    }
    const nextSelectedPlayerId = selectedPlayerId === player.id ? null : player.id;
    if (nextSelectedPlayerId !== selectedPlayerId) {
      isEditingSelectedPlayer = false;
    }
    selectedPlayerId = nextSelectedPlayerId;
    render();
  });

  const text = document.createElement("div");
  text.innerHTML = `
    <div class="player-name">${escapeHtml(player.name)}</div>
    <div class="badges">${player.positions.map((position) => `<span class="badge">${position}</span>`).join("")}</div>
  `;
  card.append(text);

  return card;
}

function allowDrop(event) {
  event.preventDefault();
  event.currentTarget.classList.add("drag-over");
}

function getDraggedPlayerId(event) {
  return event.dataTransfer.getData("text/plain") || draggedPlayerId;
}

function enablePointerDrag(card, playerId) {
  card.addEventListener("pointerdown", (event) => {
    if (event.pointerType === "mouse" || event.button !== 0) return;

    pointerDrag = {
      playerId,
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      active: false,
      dropElement: null,
      ghost: null,
    };

    if (card.setPointerCapture) {
      try {
        card.setPointerCapture(event.pointerId);
      } catch {
        // Some browsers can reject capture if the pointer state has already changed.
      }
    }
  });

  card.addEventListener("pointermove", (event) => {
    if (!pointerDrag || pointerDrag.pointerId !== event.pointerId) return;

    const deltaX = event.clientX - pointerDrag.startX;
    const deltaY = event.clientY - pointerDrag.startY;
    const distance = Math.hypot(deltaX, deltaY);

    if (!pointerDrag.active && distance > 8) {
      pointerDrag.active = true;
      draggedPlayerId = playerId;
      suppressNextCardClick = true;
      pointerDrag.ghost = createDragGhost(card);
      document.body.classList.add("is-touch-dragging");
      document.body.append(pointerDrag.ghost);
    }

    if (!pointerDrag.active) return;

    event.preventDefault();
    moveDragGhost(event.clientX, event.clientY);
    updatePointerDropTarget(event.clientX, event.clientY);
  });

  card.addEventListener("pointerup", (event) => {
    if (!pointerDrag || pointerDrag.pointerId !== event.pointerId) return;

    const wasActive = pointerDrag.active;
    const playerToMove = pointerDrag.playerId;
    const target = wasActive ? pointerDropTargetFromPoint(event.clientX, event.clientY) : null;

    cleanupPointerDrag();

    if (!wasActive) return;
    event.preventDefault();

    if (target?.type === "slot") {
      assignPlayerToSlot(playerToMove, target.slotIndex);
    }

    if (target?.type === "bench") {
      movePlayerToBench(playerToMove);
    }
  });

  card.addEventListener("pointercancel", cleanupPointerDrag);
}

function createDragGhost(card) {
  const ghost = card.cloneNode(true);
  const rect = card.getBoundingClientRect();
  ghost.classList.add("drag-ghost");
  ghost.style.width = `${rect.width}px`;
  return ghost;
}

function moveDragGhost(clientX, clientY) {
  if (!pointerDrag?.ghost) return;
  pointerDrag.ghost.style.left = `${clientX}px`;
  pointerDrag.ghost.style.top = `${clientY}px`;
}

function updatePointerDropTarget(clientX, clientY) {
  if (!pointerDrag) return;

  const target = pointerDropTargetFromPoint(clientX, clientY);
  const dropElement = target?.element || null;

  if (pointerDrag.dropElement && pointerDrag.dropElement !== dropElement) {
    pointerDrag.dropElement.classList.remove("drag-over");
  }

  if (dropElement) {
    dropElement.classList.add("drag-over");
  }

  pointerDrag.dropElement = dropElement;
}

function pointerDropTargetFromPoint(clientX, clientY) {
  const element = document.elementFromPoint(clientX, clientY);
  const slot = element?.closest(".slot");

  if (slot) {
    return {
      type: "slot",
      element: slot,
      slotIndex: Number(slot.dataset.slotIndex),
    };
  }

  const bench = element?.closest("#benchDropZone");
  if (bench) {
    return {
      type: "bench",
      element: bench,
    };
  }

  return null;
}

function cleanupPointerDrag() {
  document.querySelectorAll(".drag-over").forEach((item) => item.classList.remove("drag-over"));
  pointerDrag?.ghost?.remove();
  document.body.classList.remove("is-touch-dragging");
  pointerDrag = null;
  draggedPlayerId = null;
}

function assignPlayerToSlot(playerId, slotIndex) {
  if (!findPlayer(playerId)) return;

  const lineup = currentLineup();
  const targetSlotKey = String(slotIndex);
  const currentPlayerSlot = getPlayerSlot(playerId);
  const currentSlotKey = currentPlayerSlot ? currentPlayerSlot[0] : null;
  const targetPlayerId = lineup[targetSlotKey];

  if (targetPlayerId === playerId) {
    selectedPlayerId = playerId;
    isEditingSelectedPlayer = false;
    saveState();
    render();
    return;
  }

  if (currentSlotKey !== null) {
    delete lineup[currentSlotKey];
  }

  Object.keys(lineup).forEach((key) => {
    if (lineup[key] === playerId) delete lineup[key];
  });

  if (targetPlayerId && currentSlotKey !== null && findPlayer(targetPlayerId)) {
    lineup[currentSlotKey] = targetPlayerId;
  }

  lineup[targetSlotKey] = playerId;
  selectedPlayerId = playerId;
  isEditingSelectedPlayer = false;
  saveState();
  render();
}

function movePlayerToBench(playerId) {
  const lineup = currentLineup();
  Object.keys(lineup).forEach((key) => {
    if (lineup[key] === playerId) delete lineup[key];
  });
  selectedPlayerId = playerId;
  isEditingSelectedPlayer = false;
  saveState();
  render();
}

function handleSlotClick(slotIndex) {
  const lineup = currentLineup();
  const selectedPlayer = findPlayer(selectedPlayerId);
  const targetPlayerId = lineup[slotIndex];

  if (selectedPlayer && selectedPlayer.id !== targetPlayerId) {
    assignPlayerToSlot(selectedPlayer.id, slotIndex);
    return;
  }

  if (!targetPlayerId) {
    openSlotPicker(slotIndex);
    return;
  }

  if (selectedPlayerId !== targetPlayerId) {
    isEditingSelectedPlayer = false;
  }
  selectedPlayerId = targetPlayerId;
  render();
}

function deletePlayer(playerId) {
  state.players = state.players.filter((player) => player.id !== playerId);

  Object.values(state.lineups).forEach((lineup) => {
    Object.keys(lineup).forEach((key) => {
      if (lineup[key] === playerId) delete lineup[key];
    });
  });

  if (selectedPlayerId === playerId) {
    selectedPlayerId = null;
    isEditingSelectedPlayer = false;
  }
  saveState();
  render();
}

function deleteSelectedPlayer() {
  if (!selectedPlayerId) return;
  deletePlayer(selectedPlayerId);
}

function currentLineup() {
  const lineupKey = currentLineupKey();
  if (!state.lineups[lineupKey]) {
    state.lineups[lineupKey] = {};
  }
  return state.lineups[lineupKey];
}

function currentLineupKey() {
  return `${state.teamSize}:${state.formation}`;
}

function getFormationSlots(formation) {
  const formations = getBaseFormations(state.teamSize);
  return formations[formation] || formations[TEAM_FORMATS[state.teamSize].defaultFormation];
}

function getBaseFormations(teamSize) {
  return BASE_FORMATIONS[teamSize] || BASE_FORMATIONS["11"];
}

function sanitizePlayers(players, fallbackPlayers) {
  if (!Array.isArray(players)) {
    return fallbackPlayers;
  }

  const validPositions = new Set(POSITIONS.map((position) => position.id));

  return players
    .filter((player) => player && typeof player === "object" && typeof player.name === "string")
    .map((player) => {
      const positions = Array.isArray(player.positions)
        ? player.positions.filter((position) => validPositions.has(position))
        : [];

      return {
        id: typeof player.id === "string" ? player.id : makeId(),
        name: player.name.trim() || "Joueur",
        positions: positions.length ? positions : ["MC"],
        ratings: normalizeRatings(player.ratings),
      };
    });
}

function defaultRatings() {
  return TRAINING_CRITERIA.reduce((ratings, criterion) => {
    ratings[criterion.id] = DEFAULT_RATING;
    return ratings;
  }, {});
}

function normalizeRatings(ratings) {
  return TRAINING_CRITERIA.reduce((normalizedRatings, criterion) => {
    normalizedRatings[criterion.id] = clampRating(Number(ratings?.[criterion.id]));
    return normalizedRatings;
  }, {});
}

function clampRating(rating) {
  if (!Number.isFinite(rating)) {
    return DEFAULT_RATING;
  }

  return Math.min(5, Math.max(1, Math.round(rating)));
}

function starsForRating(rating) {
  const normalizedRating = clampRating(rating);
  return `${"★".repeat(normalizedRating)}${"☆".repeat(5 - normalizedRating)}`;
}

function averageRatingOutOf10(ratings) {
  const normalizedRatings = normalizeRatings(ratings);
  const total = TRAINING_CRITERIA.reduce((sum, criterion) => sum + normalizedRatings[criterion.id], 0);
  const averageOutOf10 = (total / TRAINING_CRITERIA.length) * 2;
  const formattedAverage = Number.isInteger(averageOutOf10) ? String(averageOutOf10) : averageOutOf10.toFixed(1);
  return formattedAverage.replace(".", ",");
}

function sanitizeLineups(lineups) {
  if (!lineups || typeof lineups !== "object") {
    return {};
  }

  return Object.entries(lineups).reduce((validLineups, [key, lineup]) => {
    if (!lineup || typeof lineup !== "object" || Array.isArray(lineup)) {
      return validLineups;
    }

    const normalizedKey = key.replace("4-4-2 losange", "4-4-2 Losange");
    const lineupKey = normalizedKey.includes(":") ? normalizedKey : `11:${normalizedKey}`;
    validLineups[lineupKey] = lineup;
    return validLineups;
  }, {});
}

function sanitizeSessions(sessions) {
  if (!Array.isArray(sessions)) {
    return [];
  }

  return sessions
    .filter((session) => session && typeof session === "object" && typeof session.name === "string")
    .map((session) => {
      return {
        id: typeof session.id === "string" ? session.id : makeId(),
        name: session.name.trim() || "Séance",
        createdAt: typeof session.createdAt === "string" ? session.createdAt : new Date().toISOString(),
        exercises: sanitizeExercises(session.exercises),
      };
    })
    .filter((session) => session.exercises.length);
}

function seedDefaultSessions(sessions) {
  const existingSessionNames = new Set(sessions.map((session) => session.name));
  const missingDefaultSessions = DEFAULT_SESSIONS.filter((session) => !existingSessionNames.has(session.name));
  return [...missingDefaultSessions, ...sessions];
}

function sanitizeExerciseLibrary(exercises) {
  if (!Array.isArray(exercises)) {
    return [];
  }

  return exercises
    .filter((exercise) => exercise && typeof exercise === "object" && typeof exercise.name === "string")
    .map((exercise) => sanitizeExercise(exercise))
    .filter((exercise) => exercise.description);
}

function seedDefaultExerciseLibrary(exercises) {
  const existingIds = new Set(exercises.map((exercise) => exercise.id));
  const existingNames = new Set(exercises.map((exercise) => exercise.name));
  const missingDefaultExercises = DEFAULT_EXERCISE_LIBRARY.filter((exercise) => {
    return !existingIds.has(exercise.id) && !existingNames.has(exercise.name);
  });

  return [...missingDefaultExercises, ...exercises];
}

function sanitizeExercises(exercises) {
  if (!Array.isArray(exercises)) {
    return [];
  }

  return exercises
    .filter((exercise) => exercise && typeof exercise === "object" && typeof exercise.name === "string")
    .map((exercise) => sanitizeExercise(exercise));
}

function sanitizeExercise(exercise) {
  const libraryExercise = findDefaultLibraryExercise(exercise.libraryId || exercise.id, exercise.name);
  const duration = Number(exercise.duration ?? exercise.defaultDuration ?? libraryExercise?.defaultDuration);

  return {
    id: typeof exercise.id === "string" ? exercise.id : makeId(),
    libraryId: typeof exercise.libraryId === "string" ? exercise.libraryId : libraryExercise?.id || "",
    name: (exercise.name || libraryExercise?.name || "Exercice").trim(),
    duration: Math.min(180, Math.max(1, Math.round(duration || 1))),
    defaultDuration: Math.min(180, Math.max(1, Math.round(Number(exercise.defaultDuration ?? duration ?? 1)))),
    objective: getCriterion(exercise.objective)?.id || libraryExercise?.objective || TRAINING_CRITERIA[0].id,
    description: (typeof exercise.description === "string" && exercise.description.trim())
      ? exercise.description.trim()
      : libraryExercise?.description || "",
    diagram: typeof exercise.diagram === "string" ? exercise.diagram.trim() : libraryExercise?.diagram || "",
    coachingPoints: normalizeCoachingPoints(exercise.coachingPoints, libraryExercise?.coachingPoints),
  };
}

function normalizeCoachingPoints(points, fallbackPoints = []) {
  const source = Array.isArray(points) && points.length ? points : fallbackPoints;
  return source
    .filter((point) => typeof point === "string" && point.trim())
    .map((point) => point.trim());
}

function exerciseFromLibrary(exerciseId) {
  const exercise = DEFAULT_EXERCISE_LIBRARY.find((item) => item.id === exerciseId);
  return exerciseFromTemplate(exercise);
}

function exerciseFromTemplate(exercise) {
  return {
    id: makeId(),
    libraryId: exercise.id,
    name: exercise.name,
    duration: exercise.defaultDuration || exercise.duration,
    objective: exercise.objective,
    description: exercise.description,
    diagram: exercise.diagram || "",
    coachingPoints: [...(exercise.coachingPoints || [])],
  };
}

function findDefaultLibraryExercise(exerciseId, exerciseName) {
  return DEFAULT_EXERCISE_LIBRARY.find((exercise) => {
    return exercise.id === exerciseId || exercise.name === exerciseName;
  });
}

function getCriterion(criterionId) {
  return TRAINING_CRITERIA.find((criterion) => criterion.id === criterionId);
}

function getCriterionLabel(criterionId) {
  return getCriterion(criterionId)?.label || TRAINING_CRITERIA[0].label;
}

function findPlayer(playerId) {
  return state.players.find((player) => player.id === playerId);
}

function getPlayerSlot(playerId) {
  return Object.entries(currentLineup()).find(([, assignedId]) => assignedId === playerId);
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (character) => {
    const replacements = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;",
    };
    return replacements[character];
  });
}

function makeId() {
  if (globalThis.crypto && typeof globalThis.crypto.randomUUID === "function") {
    return globalThis.crypto.randomUUID();
  }

  return `player-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}
