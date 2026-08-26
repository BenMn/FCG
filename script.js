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
const TRAINING_SESSION_TARGET_MINUTES = 90;
const DEFAULT_TRAINING_SEED_VERSION = 3;

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

const OPPOSITION_FORMATS = ["4", "5", "6", "7"];

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
    id: "conduite-libre-consignes",
    name: "Conduite libre + consignes",
    defaultDuration: 8,
    players: "Tous",
    objective: "technique",
    warmup: "yes",
    description: "Un ballon par joueur dans un carré de 20 à 25 m. Les joueurs conduisent librement, puis l'entraîneur annonce des consignes courtes : pied droit, pied gauche, intérieur/extérieur, semelle, changement de direction, accélération après conduite, arrêt du ballon. Terminer par une contrainte de prise d'information : l'entraîneur montre un nombre avec les doigts et les joueurs doivent l'annoncer sans arrêter leur conduite.",
    diagram: "+----------------+\n| o  o   o   o  |\n|    conduite   |\n| o    o   o    |\n|   coach: 3    |\n+----------------+",
    coachingPoints: [
      "Multiplier les petits contacts plutôt que pousser le ballon trop loin.",
      "Changer de rythme après chaque changement de direction.",
      "Lever la tête régulièrement, même quand la consigne technique est simple.",
    ],
  },
  {
    id: "passe-par-deux-mouvement",
    name: "Passe par deux en mouvement",
    defaultDuration: 8,
    players: "2",
    objective: "technique",
    warmup: "yes",
    description: "Par deux avec un ballon, dans une zone libre. Les joueurs se déplacent en permanence et se font des passes au sol. Après chaque passe, le joueur doit changer d'angle ou de ligne de course pour redevenir disponible. Ajouter progressivement : deux touches maximum, pied faible, contrôle orienté obligatoire, puis passe après prise d'information.",
    diagram: "A o  ---- passe ---->  o B\n  \\                 /\n   \\ déplacement   /\n    o <---------- o",
    coachingPoints: [
      "Passer puis bouger immédiatement.",
      "Recevoir corps ouvert pour jouer dans la course.",
      "Adapter la force de passe à la distance et au déplacement du partenaire.",
    ],
  },
  {
    id: "passe-et-suit-triangle",
    name: "Passe et suit en triangle",
    defaultDuration: 10,
    players: "3-6",
    objective: "technique",
    warmup: "yes",
    description: "Trois plots en triangle, 10 à 12 m entre chaque plot. A passe à B puis suit sa passe et prend la place de B. B contrôle orienté vers C, passe à C puis prend sa place. C rejoue vers A. Ajouter un deuxième ballon si le rythme est bon, ou limiter à deux touches pour travailler contrôle puis passe.",
    diagram: "          B o\n         / \\\n        /   \\\n       /     \\\n   A o ------- o C\n\nPasse puis suis ta passe.",
    coachingPoints: [
      "Regarder la prochaine cible avant de recevoir.",
      "Orienter le premier contrôle vers le plot suivant.",
      "Accélérer sur le déplacement après la passe.",
    ],
  },
  {
    id: "carre-passe-suit",
    name: "Carré passe et suit",
    defaultDuration: 10,
    players: "5-8",
    objective: "technique",
    warmup: "yes",
    description: "Quatre plots en carré de 10 à 12 m. Le ballon circule autour du carré : passe au joueur suivant, puis course pour suivre sa passe. Mettre deux joueurs au départ si le groupe est nombreux. Progression : contrôle orienté obligatoire, changement de sens au signal, puis un joueur fixe au centre pour jouer en appui-remise.",
    diagram: "A o -------- o B\n  |          |\n  |          |\nD o -------- o C\n\nPasse vers le plot suivant,\npuis déplacement.",
    coachingPoints: [
      "Prendre l'information avant la réception.",
      "Préparer le pied d'appui avant de jouer.",
      "Garder un tempo régulier, sans attendre le ballon arrêté.",
    ],
  },
  {
    id: "portes-passes",
    name: "Portes de passes",
    defaultDuration: 8,
    players: "2-3",
    objective: "technique",
    warmup: "yes",
    description: "Disperser beaucoup de petites portes avec deux coupelles. Par deux avec un ballon, A doit passer à B à travers une porte pour marquer un point. Les deux joueurs cherchent immédiatement une nouvelle porte après chaque passe. Interdire d'utiliser deux fois de suite la même porte. Variante : pied faible uniquement ou contrôle obligatoire avant passe.",
    diagram: "  | |                 | |\n\n        A o ---> o B\n\n| |                       | |\n\n            | |",
    coachingPoints: [
      "Lever la tête pour choisir la porte suivante.",
      "Soigner la précision de passe au sol.",
      "Se déplacer dès que le ballon quitte le pied.",
    ],
  },
  {
    id: "rondo-4v1-5v2",
    name: "Rondo 4v1 / 5v2",
    defaultDuration: 10,
    players: "5-7",
    objective: "jeu",
    warmup: "after-activation",
    description: "Carré de 10 à 14 m selon le niveau. Les joueurs extérieurs conservent le ballon face à un ou deux défenseurs. Commencer sans limite de touches, puis passer à 3 touches si le rythme est bon. Changer les défenseurs après récupération ou toutes les 45 à 60 s. Challenge possible : 8 passes consécutives = 1 point.",
    diagram: "+----------------+\n| o          o   |\n|      x  x      |\n| o          o   |\n|       o        |\n+----------------+\n\n4v1 ou 5v2 selon l'effectif.",
    coachingPoints: [
      "Scanner avant la réception.",
      "Créer un angle de passe après avoir joué.",
      "Contrôler loin du défenseur.",
      "Ne pas imposer deux touches trop tôt si le groupe est hétérogène.",
    ],
  },
  {
    id: "toro-changement-zone",
    name: "Toro avec changement de zone",
    defaultDuration: 12,
    players: "6-10",
    objective: "jeu",
    warmup: "no",
    description: "Créer deux carrés voisins. L'équipe en possession conserve dans une zone face aux défenseurs. Après un nombre de passes défini, elle doit trouver une passe vers la deuxième zone et tout le bloc se déplace. Les défenseurs cherchent à récupérer puis à ressortir vite vers l'autre zone.",
    diagram: "+----------+  +----------+\n| o  o  x  |  |          |\n|    o     |--|--> zone 2|\n| o     x  |  |          |\n+----------+  +----------+",
    coachingPoints: [
      "Voir avant de jouer vers l'avant.",
      "Changer de zone au bon moment, pas par obligation.",
      "Se replacer vite après la passe de sortie.",
    ],
  },
  {
    id: "conservation-4v4-jokers",
    name: "Conservation 4v4 + jokers",
    defaultDuration: 12,
    players: "8-12",
    objective: "jeu",
    warmup: "no",
    description: "Dans un rectangle adapté au nombre de joueurs, faire jouer 4v4 avec deux jokers qui jouent toujours avec l'équipe en possession. L'équipe avec le ballon est donc en supériorité. Objectif : conserver, se rendre disponible, créer des lignes de passe et changer de côté quand une zone est fermée.",
    diagram: "+----------------------+\n|        J jaune       |\n| bleu  rouge  bleu    |\n| rouge bleu  rouge    |\n|        J jaune       |\n+----------------------+",
    coachingPoints: [
      "Quand je n'ai pas le ballon, je dois offrir une solution.",
      "Écarter le jeu pour agrandir l'espace.",
      "Utiliser les jokers pour ressortir de la pression.",
    ],
  },
  {
    id: "jeu-3-zones",
    name: "Jeu des 3 zones",
    defaultDuration: 14,
    players: "9-15",
    objective: "jeu",
    warmup: "no",
    description: "Diviser le terrain en trois zones horizontales. L'équipe doit construire depuis la première zone, trouver un relais dans la zone centrale, puis progresser vers la zone offensive. Adapter les règles : obligation de passer par chaque zone, joker central, ou point bonus si la progression se fait au sol.",
    diagram: "+----------------------+\n| Zone offensive       |\n+----------------------+\n| Zone centrale        |\n+----------------------+\n| Zone de relance      |\n+----------------------+",
    coachingPoints: [
      "Respecter les distances entre les lignes.",
      "Se rendre visible entre deux adversaires.",
      "Avancer quand c'est possible, conserver quand c'est nécessaire.",
    ],
  },
  {
    id: "deux-vs-un-but",
    name: "2v1 vers le but",
    defaultDuration: 12,
    players: "6+",
    objective: "jeu",
    warmup: "no",
    description: "Deux attaquants partent vers le but contre un défenseur. Le porteur doit lire le comportement du défenseur : s'il attaque le porteur, passe au partenaire ; s'il protège la passe, conduite puis finition. Faire tourner les rôles rapidement pour garder de l'intensité.",
    diagram: "A o balle  -------->\n\n           x défenseur     [but]\n\nB o        -------->",
    coachingPoints: [
      "Fixer le défenseur avant de donner.",
      "S'écarter pour offrir une vraie ligne de passe.",
      "Finir l'action rapidement après le choix.",
    ],
  },
  {
    id: "trois-vs-deux-but",
    name: "3v2 vers le but",
    defaultDuration: 12,
    players: "8+",
    objective: "jeu",
    warmup: "no",
    description: "Trois attaquants attaquent deux défenseurs vers le but. Démarrer depuis une zone centrale ou après récupération simulée. L'objectif est de profiter du surnombre sans se précipiter : largeur, porteur fixé, soutien disponible, puis finition.",
    diagram: "A o ---->\n     B o balle ---->    x   x    [but]\nC o ---->",
    coachingPoints: [
      "Donner de la largeur pour ouvrir l'axe.",
      "Fixer un défenseur avant de libérer le ballon.",
      "Garder un joueur en soutien si la passe vers l'avant est fermée.",
    ],
  },
  {
    id: "un-vs-un-couloir",
    name: "1v1 couloir",
    defaultDuration: 10,
    players: "6+",
    objective: "technique",
    warmup: "after-activation",
    description: "Installer un couloir de 8 à 12 m de large avec une porte ou un mini-but au bout. L'attaquant démarre balle au pied et doit éliminer le défenseur pour franchir la ligne ou marquer. Faire tourner vite, avec des passages courts. Variante : défenseur passif au départ, puis actif.",
    diagram: "+----------------+\n| A o balle      |\n|        x       |\n|            | | |\n+----------------+",
    coachingPoints: [
      "Changer de rythme au moment du dribble.",
      "Protéger le ballon avec le corps.",
      "Pour le défenseur : freiner, orienter, ne pas se jeter.",
    ],
  },
  {
    id: "passe-remise-frappe",
    name: "Passe-remise-frappe",
    defaultDuration: 12,
    players: "6+",
    objective: "technique",
    warmup: "no",
    description: "A joue dans les pieds de B. B remet en une touche dans la course de A. A arrive lancé et frappe. Puis A devient B et B va à la file. Ajouter un défenseur semi-actif ou varier les angles de remise quand le geste est maîtrisé.",
    diagram: "        B o\n       <- remise\nA o balle ------> B\n  -------------> [but]\n       frappe",
    coachingPoints: [
      "Passe dans le bon pied de l'appui.",
      "Remise dosée dans la course, pas dans les pieds.",
      "Arriver équilibré pour frapper.",
    ],
  },
  {
    id: "centre-finition",
    name: "Centre + finition",
    defaultDuration: 12,
    players: "8+",
    objective: "technique",
    warmup: "no",
    description: "Deux files sur les côtés et une ou deux files d'attaquants dans l'axe. Le joueur de côté conduit puis centre. Les attaquants attaquent des zones différentes : premier poteau, point de penalty, deuxième poteau. Alterner côté droit et gauche.",
    diagram: "côté o ---- centre ----> [surface]\n                         A o  B o\n                         [but]",
    coachingPoints: [
      "Regarder avant de centrer.",
      "Attaquer la zone avec conviction, pas attendre le ballon.",
      "Varier centre fort au sol et centre aérien selon le niveau.",
    ],
  },
  {
    id: "finition-controle-oriente",
    name: "Finition après contrôle orienté",
    defaultDuration: 10,
    players: "6+",
    objective: "technique",
    warmup: "no",
    description: "Un passeur sert un joueur dos ou profil au but. Le receveur doit prendre son premier contrôle vers l'espace libre puis frapper en deux ou trois touches. Varier l'angle de passe, le pied de réception et la distance au but.",
    diagram: "P o ---- passe ----> A o\n                       contrôle -> frappe\n                              [but]",
    coachingPoints: [
      "Premier contrôle hors de la pression imaginaire.",
      "Orienter le corps avant la réception.",
      "Enchaîner vite sans sacrifier la qualité de frappe.",
    ],
  },
  {
    id: "match-reduit-regle",
    name: "Match réduit 4v4 / 5v5",
    defaultDuration: 12,
    players: "8-12",
    objective: "jeu",
    warmup: "no",
    description: "Match réduit avec une seule règle liée au thème du jour : but double après 5 passes, but double après un une-deux, but valable après passage par un côté, but double en première intention, ou récupération en moins de 5 secondes = 1 point. Garder une règle simple pour ne pas couper le jeu.",
    diagram: "+----------------------+\n| mini-but        mini |\n|  bleu   rouge        |\n| rouge   bleu         |\n| mini          mini-but|\n+----------------------+",
    coachingPoints: [
      "Choisir une seule contrainte claire.",
      "Laisser jouer et corriger sur les arrêts naturels.",
      "Relier la règle au thème travaillé juste avant.",
    ],
  },
  {
    id: "transition-hydratation-equipes",
    name: "Transition eau + équipes",
    defaultDuration: 3,
    players: "Tous",
    objective: "physique",
    warmup: "no",
    description: "Pause courte pour boire, souffler et composer les équipes avant l'opposition. Le cadre reste volontairement serré : 3 minutes maximum pour ne pas casser le rythme de la séance.",
    diagram: "",
    coachingPoints: [
      "Annoncer les équipes avant la pause si possible.",
      "Faire repartir tout le monde rapidement.",
      "Garder l'intensité globale de la séance.",
    ],
  },
  {
    id: "opposition-premiere-mi-temps",
    name: "Opposition - 1re mi-temps",
    defaultDuration: 30,
    players: "Tous",
    objective: "jeu",
    warmup: "no",
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
    players: "Tous",
    objective: "jeu",
    warmup: "no",
    description: "Match libre de 30 min. Observer si le travail technique ressort naturellement : regard avant réception, contrôle orienté vers la suite, mouvement après la passe. Limiter les interventions pour laisser le jeu vivre et ne faire que des rappels courts.",
    diagram: "",
    coachingPoints: [
      "Observer plus que corriger.",
      "Repérer les comportements travaillés pendant la séance.",
      "Faire des remarques courtes et concrètes.",
    ],
  },
];

const DEFAULT_SESSIONS = [
  {
    id: makeId(),
    name: "Contrôle / passe",
    createdAt: new Date().toISOString(),
    exercises: [
      exerciseFromLibrary("portes-passes", 8),
      exerciseFromLibrary("passe-et-suit-triangle", 10),
      exerciseFromLibrary("rondo-4v1-5v2", 12),
      exerciseFromLibrary("conservation-4v4-jokers", 12),
      exerciseFromLibrary("transition-hydratation-equipes", 3),
      exerciseFromLibrary("opposition-premiere-mi-temps", 22),
      exerciseFromLibrary("opposition-deuxieme-mi-temps", 23),
    ],
  },
  {
    id: makeId(),
    name: "Duels / finition",
    createdAt: new Date().toISOString(),
    exercises: [
      exerciseFromLibrary("conduite-libre-consignes", 8),
      exerciseFromLibrary("un-vs-un-couloir", 10),
      exerciseFromLibrary("deux-vs-un-but", 12),
      exerciseFromLibrary("passe-remise-frappe", 12),
      exerciseFromLibrary("transition-hydratation-equipes", 3),
      exerciseFromLibrary("opposition-premiere-mi-temps", 22),
      exerciseFromLibrary("opposition-deuxieme-mi-temps", 23),
    ],
  },
  {
    id: makeId(),
    name: "Jeu collectif / placement",
    createdAt: new Date().toISOString(),
    exercises: [
      exerciseFromLibrary("passe-par-deux-mouvement", 8),
      exerciseFromLibrary("rondo-4v1-5v2", 10),
      exerciseFromLibrary("conservation-4v4-jokers", 12),
      exerciseFromLibrary("match-reduit-regle", 12),
      exerciseFromLibrary("transition-hydratation-equipes", 3),
      exerciseFromLibrary("opposition-premiere-mi-temps", 22),
      exerciseFromLibrary("opposition-deuxieme-mi-temps", 23),
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
let editingExerciseId = null;
let editingSessionId = null;

const elements = {
  viewTabs: document.querySelectorAll("[data-view-tab]"),
  lineupView: document.querySelector("#lineupView"),
  trainingView: document.querySelector("#trainingView"),
  oppositionView: document.querySelector("#oppositionView"),
  formatSelect: document.querySelector("#formatSelect"),
  formationSelect: document.querySelector("#formationSelect"),
  formationTitle: document.querySelector("#formationTitle"),
  formationSlots: document.querySelector("#formationSlots"),
  openPlayerModalButton: document.querySelector("#openPlayerModalButton"),
  openExerciseModalButton: document.querySelector("#openExerciseModalButton"),
  closePlayerModalButton: document.querySelector("#closePlayerModalButton"),
  playerModal: document.querySelector("#playerModal"),
  exerciseModal: document.querySelector("#exerciseModal"),
  exerciseModalTitle: document.querySelector("#exerciseModalTitle"),
  closeExerciseModalButton: document.querySelector("#closeExerciseModalButton"),
  exerciseDetailModal: document.querySelector("#exerciseDetailModal"),
  closeExerciseDetailButton: document.querySelector("#closeExerciseDetailButton"),
  exerciseDetailTitle: document.querySelector("#exerciseDetailTitle"),
  exerciseDetailContent: document.querySelector("#exerciseDetailContent"),
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
  draftSessionSummary: document.querySelector("#draftSessionSummary"),
  saveSessionButton: document.querySelector("#saveSessionButton"),
  cancelSessionEditButton: document.querySelector("#cancelSessionEditButton"),
  exerciseForm: document.querySelector("#exerciseForm"),
  exerciseName: document.querySelector("#exerciseName"),
  exerciseDuration: document.querySelector("#exerciseDuration"),
  exerciseObjective: document.querySelector("#exerciseObjective"),
  exerciseWarmup: document.querySelector("#exerciseWarmup"),
  exercisePlayers: document.querySelector("#exercisePlayers"),
  exerciseDescription: document.querySelector("#exerciseDescription"),
  exerciseDiagram: document.querySelector("#exerciseDiagram"),
  exerciseCoachingPoints: document.querySelector("#exerciseCoachingPoints"),
  saveExerciseButton: document.querySelector("#saveExerciseButton"),
  draftExercises: document.querySelector("#draftExercises"),
  exerciseLibrary: document.querySelector("#exerciseLibrary"),
  exerciseLibraryCount: document.querySelector("#exerciseLibraryCount"),
  trainingSessions: document.querySelector("#trainingSessions"),
  sessionCount: document.querySelector("#sessionCount"),
  oppositionFormatSelect: document.querySelector("#oppositionFormatSelect"),
  oppositionPresentPlayers: document.querySelector("#oppositionPresentPlayers"),
  oppositionPresentCount: document.querySelector("#oppositionPresentCount"),
  oppositionAvailablePlayers: document.querySelector("#oppositionAvailablePlayers"),
  oppositionAvailableCount: document.querySelector("#oppositionAvailableCount"),
  oppositionTeamA: document.querySelector("#oppositionTeamA"),
  oppositionTeamB: document.querySelector("#oppositionTeamB"),
  oppositionTeamAPlayers: document.querySelector("#oppositionTeamAPlayers"),
  oppositionTeamBPlayers: document.querySelector("#oppositionTeamBPlayers"),
  oppositionTeamACount: document.querySelector("#oppositionTeamACount"),
  oppositionTeamBCount: document.querySelector("#oppositionTeamBCount"),
  oppositionTeamARating: document.querySelector("#oppositionTeamARating"),
  oppositionTeamBRating: document.querySelector("#oppositionTeamBRating"),
  oppositionTargets: document.querySelectorAll("[data-opposition-target]"),
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
    opposition: defaultOppositionState(),
    exerciseLibrary: DEFAULT_EXERCISE_LIBRARY,
    deletedDefaultExerciseIds: [],
    sessions: DEFAULT_SESSIONS,
    activeView: "lineup",
    defaultTrainingSeeded: true,
    defaultTrainingSeedVersion: DEFAULT_TRAINING_SEED_VERSION,
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
    const trainingSeedVersion = Number(parsed.defaultTrainingSeedVersion || (parsed.defaultTrainingSeeded ? 1 : 0));
    const deletedDefaultExerciseIds = sanitizeDeletedDefaultExerciseIds(parsed.deletedDefaultExerciseIds);
    const exerciseLibrary = seedDefaultExerciseLibrary(
      sanitizeExerciseLibrary(parsed.exerciseLibrary),
      deletedDefaultExerciseIds
    );
    const sessions = Array.isArray(parsed.sessions) ? sanitizeSessions(parsed.sessions) : [];
    const seededSessions = trainingSeedVersion >= DEFAULT_TRAINING_SEED_VERSION ? sessions : seedDefaultSessions(sessions);

    const players = sanitizePlayers(parsed.players, fallback.players);

    return {
      players,
      teamSize,
      formation,
      lineups: sanitizeLineups(parsed.lineups),
      opposition: sanitizeOpposition(parsed.opposition, players),
      exerciseLibrary,
      deletedDefaultExerciseIds,
      sessions: seededSessions,
      activeView: ["training", "opposition"].includes(parsed.activeView) ? parsed.activeView : fallback.activeView,
      defaultTrainingSeeded: true,
      defaultTrainingSeedVersion: DEFAULT_TRAINING_SEED_VERSION,
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
  elements.exerciseForm.addEventListener("submit", addExerciseToLibrary);
  elements.sessionForm.addEventListener("submit", createTrainingSession);
  elements.cancelSessionEditButton.addEventListener("click", resetSessionDraft);
  elements.draftExercises.addEventListener("click", (event) => {
    const deleteButton = event.target.closest("[data-delete-draft-exercise]");
    if (!deleteButton) return;
    draftExercises = draftExercises.filter((exercise) => exercise.id !== deleteButton.dataset.deleteDraftExercise);
    renderDraftExercises();
  });
  elements.draftExercises.addEventListener("input", (event) => {
    const durationInput = event.target.closest("[data-draft-duration]");
    if (!durationInput) return;
    updateDraftExerciseDuration(durationInput.dataset.draftDuration, durationInput.value);
  });
  elements.exerciseLibrary.addEventListener("click", (event) => {
    const addButton = event.target.closest("[data-add-library-exercise]");
    if (addButton) {
      addLibraryExerciseToDraft(addButton.dataset.addLibraryExercise);
      return;
    }

    const editButton = event.target.closest("[data-edit-library-exercise]");
    if (editButton) {
      openExerciseModal(editButton.dataset.editLibraryExercise);
      return;
    }

    const deleteButton = event.target.closest("[data-delete-library-exercise]");
    if (deleteButton) {
      deleteLibraryExercise(deleteButton.dataset.deleteLibraryExercise);
      return;
    }

    const detailButton = event.target.closest("[data-show-library-exercise]");
    if (detailButton) {
      openExerciseDetail(detailButton.dataset.showLibraryExercise);
    }
  });
  elements.trainingSessions.addEventListener("click", (event) => {
    const editButton = event.target.closest("[data-edit-session]");
    if (editButton) {
      editTrainingSession(editButton.dataset.editSession);
      return;
    }

    const deleteButton = event.target.closest("[data-delete-session]");
    if (!deleteButton) return;
    state.sessions = state.sessions.filter((session) => session.id !== deleteButton.dataset.deleteSession);
    if (editingSessionId === deleteButton.dataset.deleteSession) {
      resetSessionDraft();
    }
    saveState();
    renderTraining();
  });
  elements.oppositionFormatSelect.addEventListener("change", () => {
    state.opposition.format = OPPOSITION_FORMATS.includes(elements.oppositionFormatSelect.value)
      ? elements.oppositionFormatSelect.value
      : OPPOSITION_FORMATS[0];
    trimOppositionTeams();
    saveState();
    renderOpposition();
  });
  elements.oppositionPresentPlayers.addEventListener("change", (event) => {
    const checkbox = event.target.closest("[data-opposition-present]");
    if (!checkbox) return;
    setOppositionPresence(checkbox.dataset.oppositionPresent, checkbox.checked);
  });
  elements.oppositionAvailablePlayers.addEventListener("click", (event) => {
    const teamButton = event.target.closest("[data-add-opposition-team]");
    if (!teamButton) return;
    assignOppositionPlayer(teamButton.dataset.playerId, teamButton.dataset.addOppositionTeam);
  });
  elements.oppositionTeamAPlayers.addEventListener("click", handleOppositionTeamClick);
  elements.oppositionTeamBPlayers.addEventListener("click", handleOppositionTeamClick);
  [elements.oppositionTeamA, elements.oppositionTeamB].forEach((team) => {
    team.addEventListener("dragover", allowDrop);
    team.addEventListener("dragleave", () => team.classList.remove("drag-over"));
    team.addEventListener("drop", (event) => {
      event.preventDefault();
      team.classList.remove("drag-over");
      assignOppositionPlayer(getDraggedPlayerId(event), team.dataset.oppositionTeam);
    });
  });
  elements.oppositionAvailablePlayers.addEventListener("dragover", allowDrop);
  elements.oppositionAvailablePlayers.addEventListener("dragleave", () => {
    elements.oppositionAvailablePlayers.classList.remove("drag-over");
  });
  elements.oppositionAvailablePlayers.addEventListener("drop", (event) => {
    event.preventDefault();
    elements.oppositionAvailablePlayers.classList.remove("drag-over");
    removeOppositionPlayerFromTeams(getDraggedPlayerId(event));
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
  elements.openExerciseModalButton.addEventListener("click", () => openExerciseModal());
  elements.closePlayerModalButton.addEventListener("click", closePlayerModal);
  elements.closeExerciseModalButton.addEventListener("click", closeExerciseModal);
  elements.closeExerciseDetailButton.addEventListener("click", closeExerciseDetail);
  elements.closeSlotPickerButton.addEventListener("click", closeSlotPicker);
  elements.playerModal.addEventListener("click", (event) => {
    if (event.target.matches("[data-close-modal]")) {
      closePlayerModal();
    }
  });
  elements.exerciseModal.addEventListener("click", (event) => {
    if (event.target.matches("[data-close-exercise-modal]")) {
      closeExerciseModal();
    }
  });
  elements.exerciseDetailModal.addEventListener("click", (event) => {
    if (event.target.matches("[data-close-exercise-detail]")) {
      closeExerciseDetail();
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
    if (event.key === "Escape" && isExerciseModalOpen()) {
      closeExerciseModal();
    }
    if (event.key === "Escape" && isExerciseDetailOpen()) {
      closeExerciseDetail();
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

function openExerciseModal(exerciseId = null) {
  editingExerciseId = exerciseId;
  const exercise = editingExerciseId ? state.exerciseLibrary.find((item) => item.id === editingExerciseId) : null;

  elements.exerciseModalTitle.textContent = exercise ? "Modifier l'exercice" : "Nouvel exercice";
  elements.saveExerciseButton.textContent = exercise ? "Enregistrer" : "Ajouter";
  elements.exerciseForm.reset();

  if (exercise) {
    elements.exerciseName.value = exercise.name;
    elements.exerciseDuration.value = exercise.defaultDuration || exercise.duration;
    elements.exerciseObjective.value = exercise.objective;
    elements.exerciseWarmup.value = sanitizeWarmup(exercise.warmup);
    elements.exercisePlayers.value = exercise.players || "";
    elements.exerciseDescription.value = exercise.description;
    elements.exerciseDiagram.value = exercise.diagram || "";
    elements.exerciseCoachingPoints.value = (exercise.coachingPoints || []).join("\n");
  } else {
    elements.exerciseObjective.value = TRAINING_CRITERIA[0].id;
    elements.exerciseWarmup.value = "no";
    elements.exercisePlayers.value = "";
  }

  elements.exerciseModal.classList.add("is-open");
  elements.exerciseModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  elements.exerciseName.focus();
}

function closeExerciseModal() {
  elements.exerciseModal.classList.remove("is-open");
  elements.exerciseModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  elements.exerciseForm.reset();
  editingExerciseId = null;
  elements.exerciseModalTitle.textContent = "Nouvel exercice";
  elements.saveExerciseButton.textContent = "Ajouter";
  elements.exerciseObjective.value = TRAINING_CRITERIA[0].id;
  elements.exerciseWarmup.value = "no";
  elements.exercisePlayers.value = "";
  elements.openExerciseModalButton.focus();
}

function isExerciseModalOpen() {
  return elements.exerciseModal.classList.contains("is-open");
}

function openExerciseDetail(exerciseId) {
  const exercise = state.exerciseLibrary.find((item) => item.id === exerciseId);
  if (!exercise) return;

  elements.exerciseDetailTitle.textContent = exercise.name;
  elements.exerciseDetailContent.innerHTML = `
    <div class="exercise-detail-modal-meta">
      <span class="objective-pill ${exercise.objective}">${getCriterionLabel(exercise.objective)}</span>
      <strong>${exercise.defaultDuration || exercise.duration} min</strong>
      ${warmupBadgeHtml(exercise, true)}
    </div>
    ${exerciseDetailHtml(exercise)}
  `;
  elements.exerciseDetailModal.classList.add("is-open");
  elements.exerciseDetailModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  elements.closeExerciseDetailButton.focus();
}

function closeExerciseDetail() {
  elements.exerciseDetailModal.classList.remove("is-open");
  elements.exerciseDetailModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  elements.exerciseDetailContent.innerHTML = "";
}

function isExerciseDetailOpen() {
  return elements.exerciseDetailModal.classList.contains("is-open");
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
  renderOpposition();
  updateCounts();
  saveState();
}

function switchView(view) {
  state.activeView = ["training", "opposition"].includes(view) ? view : "lineup";
  saveState();
  render();
}

function updateActiveView() {
  const isTraining = state.activeView === "training";
  const isOpposition = state.activeView === "opposition";
  document.body.classList.toggle("is-training-view", isTraining);
  document.body.classList.toggle("is-opposition-view", isOpposition);
  elements.lineupView.classList.toggle("is-active", !isTraining && !isOpposition);
  elements.trainingView.classList.toggle("is-active", isTraining);
  elements.oppositionView.classList.toggle("is-active", isOpposition);

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

function renderOpposition() {
  const format = oppositionTeamSize();
  elements.oppositionFormatSelect.value = state.opposition.format;
  elements.oppositionTargets.forEach((target) => {
    target.textContent = format;
  });
  trimOppositionTeams();
  renderOppositionPresence();
  renderOppositionTeams();
  renderOppositionAvailablePlayers();
}

function renderOppositionPresence() {
  const presentIds = new Set(state.opposition.presentPlayerIds);
  const players = [...state.players].sort((a, b) => a.name.localeCompare(b.name, "fr"));
  elements.oppositionPresentCount.textContent = presentIds.size;
  elements.oppositionPresentPlayers.innerHTML = "";

  if (!players.length) {
    const empty = document.createElement("p");
    empty.className = "empty-state";
    empty.textContent = "Ajoutez d'abord des joueurs dans l'effectif.";
    elements.oppositionPresentPlayers.append(empty);
    return;
  }

  players.forEach((player) => {
    const label = document.createElement("label");
    label.className = "opposition-presence-card";
    label.innerHTML = `
      <input type="checkbox" ${presentIds.has(player.id) ? "checked" : ""} data-opposition-present="${player.id}">
      <span>
        <strong>${escapeHtml(player.name)}</strong>
        <span>${player.positions.join(" · ")}</span>
      </span>
      <em>${averageRatingOutOf10(player.ratings)}</em>
    `;
    elements.oppositionPresentPlayers.append(label);
  });
}

function renderOppositionTeams() {
  const teamA = oppositionTeamPlayers("A");
  const teamB = oppositionTeamPlayers("B");

  elements.oppositionTeamACount.textContent = teamA.length;
  elements.oppositionTeamBCount.textContent = teamB.length;
  elements.oppositionTeamARating.textContent = teamRatingTotal(teamA);
  elements.oppositionTeamBRating.textContent = teamRatingTotal(teamB);
  elements.oppositionTeamAPlayers.innerHTML = "";
  elements.oppositionTeamBPlayers.innerHTML = "";

  renderOppositionTeamList(elements.oppositionTeamAPlayers, teamA, "A");
  renderOppositionTeamList(elements.oppositionTeamBPlayers, teamB, "B");
}

function renderOppositionTeamList(container, players, teamName) {
  if (!players.length) {
    const empty = document.createElement("p");
    empty.className = "empty-state compact-empty-state";
    empty.textContent = "Glissez ou ajoutez un joueur.";
    container.append(empty);
    return;
  }

  players.forEach((player) => {
    container.append(createOppositionPlayerCard(player, teamName));
  });
}

function renderOppositionAvailablePlayers() {
  const assignedIds = new Set([...state.opposition.teams.A, ...state.opposition.teams.B]);
  const players = state.players
    .filter((player) => state.opposition.presentPlayerIds.includes(player.id) && !assignedIds.has(player.id))
    .sort((a, b) => a.name.localeCompare(b.name, "fr"));

  elements.oppositionAvailableCount.textContent = players.length;
  elements.oppositionAvailablePlayers.innerHTML = "";

  if (!state.opposition.presentPlayerIds.length) {
    const empty = document.createElement("p");
    empty.className = "empty-state";
    empty.textContent = "Cochez d'abord les joueurs présents.";
    elements.oppositionAvailablePlayers.append(empty);
    return;
  }

  if (!players.length) {
    const empty = document.createElement("p");
    empty.className = "empty-state";
    empty.textContent = "Tous les joueurs présents sont répartis.";
    elements.oppositionAvailablePlayers.append(empty);
    return;
  }

  players.forEach((player) => {
    elements.oppositionAvailablePlayers.append(createOppositionPlayerCard(player));
  });
}

function createOppositionPlayerCard(player, teamName = null) {
  const card = document.createElement("article");
  const targetTeam = teamName === "A" ? "B" : "A";
  card.className = "player-card opposition-player-card";
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
  card.innerHTML = `
    <div>
      <div class="player-name">${escapeHtml(player.name)}</div>
      ${teamName ? "" : `<div class="badges">${player.positions.map((position) => `<span class="badge">${position}</span>`).join("")}</div>`}
    </div>
    <span class="player-card-rating">${averageRatingOutOf10(player.ratings)}</span>
    <div class="opposition-card-actions">
      ${teamName
        ? `<button class="secondary-button" type="button" data-move-opposition-team="${targetTeam}" data-player-id="${player.id}">Équipe ${targetTeam}</button>
           <button class="secondary-button" type="button" data-remove-opposition-player="${player.id}">Retirer</button>`
        : `<button class="secondary-button" type="button" data-add-opposition-team="A" data-player-id="${player.id}">A</button>
           <button class="secondary-button" type="button" data-add-opposition-team="B" data-player-id="${player.id}">B</button>`}
    </div>
  `;
  return card;
}

function handleOppositionTeamClick(event) {
  const removeButton = event.target.closest("[data-remove-opposition-player]");
  if (removeButton) {
    removeOppositionPlayerFromTeams(removeButton.dataset.removeOppositionPlayer);
    return;
  }

  const moveButton = event.target.closest("[data-move-opposition-team]");
  if (moveButton) {
    assignOppositionPlayer(moveButton.dataset.playerId, moveButton.dataset.moveOppositionTeam);
  }
}

function setOppositionPresence(playerId, isPresent) {
  if (!findPlayer(playerId)) return;

  if (isPresent) {
    state.opposition.presentPlayerIds = [...new Set([...state.opposition.presentPlayerIds, playerId])];
  } else {
    state.opposition.presentPlayerIds = state.opposition.presentPlayerIds.filter((id) => id !== playerId);
    removeOppositionPlayerFromTeams(playerId, false);
  }

  saveState();
  renderOpposition();
}

function assignOppositionPlayer(playerId, teamName) {
  if (!findPlayer(playerId) || !["A", "B"].includes(teamName)) return;
  if (!state.opposition.presentPlayerIds.includes(playerId)) {
    state.opposition.presentPlayerIds.push(playerId);
  }

  const team = state.opposition.teams[teamName];
  const otherTeamName = teamName === "A" ? "B" : "A";
  const alreadyInTarget = team.includes(playerId);
  if (alreadyInTarget) return;
  if (team.length >= oppositionTeamSize()) return;

  state.opposition.teams.A = state.opposition.teams.A.filter((id) => id !== playerId);
  state.opposition.teams.B = state.opposition.teams.B.filter((id) => id !== playerId);
  state.opposition.teams[otherTeamName] = state.opposition.teams[otherTeamName].filter((id) => id !== playerId);
  state.opposition.teams[teamName].push(playerId);
  saveState();
  renderOpposition();
}

function removeOppositionPlayerFromTeams(playerId, shouldRender = true) {
  state.opposition.teams.A = state.opposition.teams.A.filter((id) => id !== playerId);
  state.opposition.teams.B = state.opposition.teams.B.filter((id) => id !== playerId);
  if (shouldRender) {
    saveState();
    renderOpposition();
  }
}

function trimOppositionTeams() {
  const playerIds = new Set(state.players.map((player) => player.id));
  const presentIds = new Set(state.opposition.presentPlayerIds.filter((id) => playerIds.has(id)));
  const maxPlayers = oppositionTeamSize();
  state.opposition.presentPlayerIds = [...presentIds];
  state.opposition.teams.A = state.opposition.teams.A.filter((id) => presentIds.has(id)).slice(0, maxPlayers);
  const teamAIds = new Set(state.opposition.teams.A);
  state.opposition.teams.B = state.opposition.teams.B
    .filter((id) => presentIds.has(id) && !teamAIds.has(id))
    .slice(0, maxPlayers);
}

function oppositionTeamPlayers(teamName) {
  return state.opposition.teams[teamName]
    .map((playerId) => findPlayer(playerId))
    .filter(Boolean);
}

function oppositionTeamSize() {
  return Number(state.opposition.format) || 4;
}

function teamRatingTotal(players) {
  const total = players.reduce((sum, player) => sum + playerRatingValueOutOf10(player.ratings), 0);
  return formatRating(total);
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

function addExerciseToLibrary(event) {
  event.preventDefault();

  const name = elements.exerciseName.value.trim();
  const duration = Number(elements.exerciseDuration.value);
  const objective = elements.exerciseObjective.value;
  const warmup = sanitizeWarmup(elements.exerciseWarmup.value);
  const players = elements.exercisePlayers.value.trim();
  const description = elements.exerciseDescription.value.trim();
  const diagram = elements.exerciseDiagram.value.trim();
  const coachingPoints = elements.exerciseCoachingPoints.value
    .split(/\r?\n/)
    .map((point) => point.trim())
    .filter(Boolean);

  if (!name || !description || !Number.isFinite(duration) || duration < 1 || !getCriterion(objective)) {
    return;
  }

  const savedExercise = {
    id: editingExerciseId || makeId(),
    name,
    defaultDuration: Math.round(duration),
    duration: Math.round(duration),
    players,
    objective,
    warmup,
    description,
    diagram,
    coachingPoints,
  };

  if (editingExerciseId) {
    state.exerciseLibrary = state.exerciseLibrary.map((exercise) => {
      return exercise.id === editingExerciseId ? savedExercise : exercise;
    });
  } else {
    state.exerciseLibrary.unshift(savedExercise);
  }

  closeExerciseModal();
  saveState();
  renderTraining();
}

function deleteLibraryExercise(exerciseId) {
  state.exerciseLibrary = state.exerciseLibrary.filter((exercise) => exercise.id !== exerciseId);

  if (DEFAULT_EXERCISE_LIBRARY.some((exercise) => exercise.id === exerciseId)) {
    state.deletedDefaultExerciseIds = [...new Set([...(state.deletedDefaultExerciseIds || []), exerciseId])];
  }

  saveState();
  renderTraining();
}

function addLibraryExerciseToDraft(exerciseId) {
  const exercise = state.exerciseLibrary.find((item) => item.id === exerciseId);
  if (!exercise) return;

  draftExercises.push(exerciseFromTemplate(exercise));
  renderDraftExercises();
}

function updateDraftExerciseDuration(exerciseId, rawDuration) {
  const duration = Number(rawDuration);
  const exercise = draftExercises.find((item) => item.id === exerciseId);
  if (!exercise || !Number.isFinite(duration)) return;

  exercise.duration = Math.min(180, Math.max(1, Math.round(duration)));
  updateDraftSessionSummary();
}

function createTrainingSession(event) {
  event.preventDefault();

  const name = elements.sessionName.value.trim();
  if (!name || !draftExercises.length || draftDuration() !== TRAINING_SESSION_TARGET_MINUTES) {
    return;
  }

  const savedSession = {
    id: editingSessionId || makeId(),
    name,
    createdAt: editingSessionId
      ? state.sessions.find((session) => session.id === editingSessionId)?.createdAt || new Date().toISOString()
      : new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    exercises: draftExercises.map((exercise) => ({ ...exercise })),
  };

  if (editingSessionId) {
    state.sessions = state.sessions.map((session) => {
      return session.id === editingSessionId ? savedSession : session;
    });
  } else {
    state.sessions.unshift(savedSession);
  }

  resetSessionDraft();
  saveState();
  renderTraining();
}

function editTrainingSession(sessionId) {
  const session = state.sessions.find((item) => item.id === sessionId);
  if (!session) return;

  editingSessionId = session.id;
  elements.sessionName.value = session.name;
  draftExercises = session.exercises.map((exercise) => ({ ...exercise, id: makeId() }));
  state.activeView = "training";
  saveState();
  render();
  elements.sessionName.focus();
}

function resetSessionDraft() {
  editingSessionId = null;
  draftExercises = [];
  elements.sessionForm.reset();
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

  TRAINING_CRITERIA.forEach((criterion) => {
    const exercises = state.exerciseLibrary.filter((exercise) => exercise.objective === criterion.id);

    const group = document.createElement("section");
    group.className = "exercise-library-group";
    group.innerHTML = `
      <div class="exercise-library-group-heading">
        <h3>${criterion.label}</h3>
        <span>${exercises.length}</span>
      </div>
    `;

    const list = document.createElement("div");
    list.className = "exercise-library-group-list";
    if (exercises.length) {
      exercises.forEach((exercise) => {
        list.append(createLibraryExerciseCard(exercise));
      });
    } else {
      const empty = document.createElement("p");
      empty.className = "empty-state compact-empty-state";
      empty.textContent = "Aucun exercice.";
      list.append(empty);
    }

    group.append(list);
    elements.exerciseLibrary.append(group);
  });
}

function renderDraftExercises() {
  elements.draftExercises.innerHTML = "";
  updateDraftSessionSummary();

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

function updateDraftSessionSummary() {
  const totalDuration = draftDuration();
  const missingDuration = TRAINING_SESSION_TARGET_MINUTES - totalDuration;
  const isExactDuration = missingDuration === 0;

  elements.draftSessionSummary.innerHTML = `
    <div>
      <strong>${formatDuration(totalDuration)}</strong>
      <span>sur ${formatDuration(TRAINING_SESSION_TARGET_MINUTES)}</span>
    </div>
    <em class="${isExactDuration ? "is-valid" : "is-warning"}">
      ${isExactDuration ? "Durée OK" : missingDuration > 0 ? `Encore ${missingDuration} min` : `${Math.abs(missingDuration)} min en trop`}
    </em>
  `;
  elements.saveSessionButton.textContent = editingSessionId ? "Enregistrer la séance" : "Créer la séance";
  elements.saveSessionButton.disabled = !draftExercises.length || !isExactDuration;
  elements.cancelSessionEditButton.classList.toggle("is-visible", Boolean(editingSessionId));
}

function draftDuration() {
  return draftExercises.reduce((total, exercise) => total + exercise.duration, 0);
}

function formatDuration(duration) {
  const hours = Math.floor(duration / 60);
  const minutes = duration % 60;

  if (!hours) {
    return `${minutes} min`;
  }

  return minutes ? `${hours}h${String(minutes).padStart(2, "0")}` : `${hours}h`;
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
    const durationIsValid = totalDuration === TRAINING_SESSION_TARGET_MINUTES;
    const article = document.createElement("article");
    article.className = "training-session-card";
    article.innerHTML = `
      <div class="training-session-heading">
        <div>
          <h3>${escapeHtml(session.name)}</h3>
          <p>${session.exercises.length} exercice${session.exercises.length > 1 ? "s" : ""} · ${formatDuration(totalDuration)} <span class="duration-status ${durationIsValid ? "is-valid" : "is-warning"}">${durationIsValid ? formatDuration(TRAINING_SESSION_TARGET_MINUTES) : "À ajuster"}</span></p>
        </div>
        <div class="session-card-actions">
          <button class="icon-button session-edit-button" type="button" title="Modifier la séance" aria-label="Modifier la séance" data-edit-session="${session.id}">
            <span aria-hidden="true">✎</span>
          </button>
          <button class="icon-button session-delete-button" type="button" title="Supprimer la séance" aria-label="Supprimer la séance" data-delete-session="${session.id}">×</button>
        </div>
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
          <p>${exercise.defaultDuration || exercise.duration} min${exercise.players ? ` · ${escapeHtml(exercise.players)}` : ""}</p>
        </div>
        <button class="icon-button exercise-view-button" type="button" title="Voir le détail" aria-label="Voir le détail de ${escapeHtml(exercise.name)}" data-show-library-exercise="${exercise.id}">
          <span class="eye-icon" aria-hidden="true"></span>
        </button>
      </div>
      ${warmupBadgeHtml(exercise)}
      <div class="library-exercise-actions">
        <button class="secondary-button" type="button" data-add-library-exercise="${exercise.id}">Ajouter</button>
        <button class="icon-button exercise-edit-button" type="button" title="Modifier l'exercice" aria-label="Modifier l'exercice ${escapeHtml(exercise.name)}" data-edit-library-exercise="${exercise.id}">
          <span aria-hidden="true">✎</span>
        </button>
        <button class="icon-button exercise-delete-button" type="button" title="Supprimer l'exercice" aria-label="Supprimer l'exercice ${escapeHtml(exercise.name)}" data-delete-library-exercise="${exercise.id}">×</button>
      </div>
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
  const durationContent = canDelete
    ? `
      <label class="duration-editor">
        <span>Durée</span>
        <input type="number" min="1" max="180" step="1" value="${exercise.duration}" aria-label="Durée de ${escapeHtml(exercise.name)}" data-draft-duration="${exercise.id}">
        <small>Conseillé ${exercise.defaultDuration || exercise.duration} min</small>
      </label>
    `
    : `<span>${exercise.duration} min${exercise.players ? ` · ${escapeHtml(exercise.players)}` : ""}</span>`;

  return `
    <article class="exercise-row">
      <div class="exercise-row-heading">
        <div>
          <strong>${escapeHtml(exercise.name)}</strong>
          ${durationContent}
        </div>
        <span class="objective-pill ${exercise.objective}">${getCriterionLabel(exercise.objective)}</span>
        ${canDelete ? `<button class="icon-button exercise-delete-button" type="button" title="Retirer l'exercice" aria-label="Retirer l'exercice" data-delete-draft-exercise="${exercise.id}">×</button>` : ""}
      </div>
    </article>
  `;
}

function warmupBadgeHtml(exercise, showText = false) {
  const warmup = sanitizeWarmup(exercise.warmup);
  if (warmup === "no") {
    return "";
  }

  const label = getWarmupLabel(warmup);
  return `
    <span class="warmup-badge ${warmup === "after-activation" ? "is-conditional" : ""}" title="${label}" aria-label="${label}">
      <span class="warmup-icon" aria-hidden="true"></span>
      ${showText ? `<span>${label}</span>` : ""}
    </span>
  `;
}

function exerciseDetailHtml(exercise) {
  const coachingPoints = Array.isArray(exercise.coachingPoints) ? exercise.coachingPoints : [];

  return `
    <div class="exercise-detail">
      ${exercise.players ? `<p><strong>Joueurs :</strong> ${escapeHtml(exercise.players)}</p>` : ""}
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
  const rating = averageRatingOutOf10(player.ratings);

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
      <div class="pitch-player-rating">${rating}</div>
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

  const ratingBadge = document.createElement("span");
  ratingBadge.className = "player-card-rating";
  ratingBadge.textContent = rating;
  ratingBadge.title = "Note moyenne";
  card.append(ratingBadge);

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
    if (event.target.closest("button, input, select, textarea")) return;

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

    if (target?.type === "opposition-team") {
      assignOppositionPlayer(playerToMove, target.teamName);
    }

    if (target?.type === "opposition-bench") {
      removeOppositionPlayerFromTeams(playerToMove);
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

  const oppositionTeam = element?.closest("[data-opposition-team]");
  if (oppositionTeam) {
    return {
      type: "opposition-team",
      element: oppositionTeam,
      teamName: oppositionTeam.dataset.oppositionTeam,
    };
  }

  const oppositionBench = element?.closest("#oppositionAvailablePlayers");
  if (oppositionBench) {
    return {
      type: "opposition-bench",
      element: oppositionBench,
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
  state.opposition.presentPlayerIds = state.opposition.presentPlayerIds.filter((id) => id !== playerId);
  state.opposition.teams.A = state.opposition.teams.A.filter((id) => id !== playerId);
  state.opposition.teams.B = state.opposition.teams.B.filter((id) => id !== playerId);

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
  return formatRating(playerRatingValueOutOf10(ratings));
}

function playerRatingValueOutOf10(ratings) {
  const normalizedRatings = normalizeRatings(ratings);
  const total = TRAINING_CRITERIA.reduce((sum, criterion) => sum + normalizedRatings[criterion.id], 0);
  return (total / TRAINING_CRITERIA.length) * 2;
}

function formatRating(rating) {
  const roundedRating = Math.round(rating * 10) / 10;
  const formattedRating = Number.isInteger(roundedRating) ? String(roundedRating) : roundedRating.toFixed(1);
  return formattedRating.replace(".", ",");
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

function defaultOppositionState() {
  return {
    format: "4",
    presentPlayerIds: [],
    teams: {
      A: [],
      B: [],
    },
  };
}

function sanitizeOpposition(opposition, players) {
  const fallback = defaultOppositionState();
  if (!opposition || typeof opposition !== "object") {
    return fallback;
  }

  const playerIds = new Set(players.map((player) => player.id));
  const format = OPPOSITION_FORMATS.includes(String(opposition.format)) ? String(opposition.format) : fallback.format;
  const presentPlayerIds = Array.isArray(opposition.presentPlayerIds)
    ? [...new Set(opposition.presentPlayerIds.filter((playerId) => playerIds.has(playerId)))]
    : [];
  const presentIds = new Set(presentPlayerIds);
  const maxPlayers = Number(format);
  const teamA = sanitizeOppositionTeam(opposition.teams?.A, presentIds, new Set(), maxPlayers);
  const teamAIds = new Set(teamA);
  const teamB = sanitizeOppositionTeam(opposition.teams?.B, presentIds, teamAIds, maxPlayers);

  return {
    format,
    presentPlayerIds,
    teams: {
      A: teamA,
      B: teamB,
    },
  };
}

function sanitizeOppositionTeam(team, presentIds, excludedIds, maxPlayers) {
  if (!Array.isArray(team)) {
    return [];
  }

  return [...new Set(team)]
    .filter((playerId) => presentIds.has(playerId) && !excludedIds.has(playerId))
    .slice(0, maxPlayers);
}

function sanitizeSessions(sessions) {
  if (!Array.isArray(sessions)) {
    return [];
  }

  return sessions
    .filter((session) => session && typeof session === "object" && typeof session.name === "string")
    .map((session) => {
      return normalizeSession({
        id: typeof session.id === "string" ? session.id : makeId(),
        name: session.name.trim() || "Séance",
        createdAt: typeof session.createdAt === "string" ? session.createdAt : new Date().toISOString(),
        updatedAt: typeof session.updatedAt === "string" ? session.updatedAt : "",
        exercises: sanitizeExercises(session.exercises),
      });
    })
    .filter((session) => session.exercises.length);
}

function normalizeSession(session) {
  if (session.name !== "Séance 1 - Contrôle, passe et disponibilité") {
    return normalizeSessionTargetDuration(session);
  }

  const hasTransition = session.exercises.some((exercise) => {
    return exercise.libraryId === "transition-hydratation-equipes" || exercise.name === "Transition eau + équipes";
  });

  if (hasTransition) {
    return normalizeSessionTargetDuration(session);
  }

  const transition = exerciseFromLibrary("transition-hydratation-equipes");
  const firstOppositionIndex = session.exercises.findIndex((exercise) => exercise.name.startsWith("Opposition"));
  const insertIndex = firstOppositionIndex === -1 ? session.exercises.length : firstOppositionIndex;
  session.exercises.splice(insertIndex, 0, transition);
  return normalizeSessionTargetDuration(session);
}

function normalizeSessionTargetDuration(session) {
  const totalDuration = session.exercises.reduce((total, exercise) => total + exercise.duration, 0);
  if (totalDuration !== 105 || TRAINING_SESSION_TARGET_MINUTES !== 90) {
    return session;
  }

  const firstOpposition = session.exercises.find((exercise) => {
    return exercise.libraryId === "opposition-premiere-mi-temps" || exercise.name === "Opposition - 1re mi-temps";
  });
  const secondOpposition = session.exercises.find((exercise) => {
    return exercise.libraryId === "opposition-deuxieme-mi-temps" || exercise.name === "Opposition - 2e mi-temps";
  });

  if (!firstOpposition || !secondOpposition) {
    return session;
  }

  firstOpposition.duration = 22;
  secondOpposition.duration = 23;
  return session;
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

function seedDefaultExerciseLibrary(exercises, deletedDefaultExerciseIds = []) {
  const existingIds = new Set(exercises.map((exercise) => exercise.id));
  const existingNames = new Set(exercises.map((exercise) => exercise.name));
  const deletedIds = new Set(deletedDefaultExerciseIds);
  const missingDefaultExercises = DEFAULT_EXERCISE_LIBRARY.filter((exercise) => {
    return !deletedIds.has(exercise.id) && !existingIds.has(exercise.id) && !existingNames.has(exercise.name);
  });

  return [...missingDefaultExercises, ...exercises];
}

function sanitizeDeletedDefaultExerciseIds(exerciseIds) {
  if (!Array.isArray(exerciseIds)) {
    return [];
  }

  const defaultExerciseIds = new Set(DEFAULT_EXERCISE_LIBRARY.map((exercise) => exercise.id));
  return [...new Set(exerciseIds.filter((exerciseId) => defaultExerciseIds.has(exerciseId)))];
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
    players: typeof exercise.players === "string" ? exercise.players.trim() : libraryExercise?.players || "",
    objective: getCriterion(exercise.objective)?.id || libraryExercise?.objective || TRAINING_CRITERIA[0].id,
    warmup: sanitizeWarmup(exercise.warmup ?? libraryExercise?.warmup),
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

function exerciseFromLibrary(exerciseId, durationOverride = null) {
  const exercise = DEFAULT_EXERCISE_LIBRARY.find((item) => item.id === exerciseId);
  return exerciseFromTemplate(exercise, durationOverride);
}

function exerciseFromTemplate(exercise, durationOverride = null) {
  const duration = Number(durationOverride);
  return {
    id: makeId(),
    libraryId: exercise.id,
    name: exercise.name,
    duration: Number.isFinite(duration) && duration > 0 ? Math.round(duration) : exercise.defaultDuration || exercise.duration,
    players: exercise.players || "",
    objective: exercise.objective,
    warmup: sanitizeWarmup(exercise.warmup),
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

function sanitizeWarmup(warmup) {
  return ["yes", "after-activation"].includes(warmup) ? warmup : "no";
}

function getWarmupLabel(warmup) {
  return warmup === "after-activation" ? "Échauffement après activation" : "Échauffement";
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
