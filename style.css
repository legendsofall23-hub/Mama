
const memories = [
  { file: "memory-01.jpg.jpeg", caption: "Memory 01" },
  { file: "memory-02.jpg.jpeg", caption: "Memory 02" },
  { file: "memory-03.jpg.jpeg", caption: "Memory 03" },
  { file: "memory-04.jpg.jpeg", caption: "Memory 04" },
  { file: "memory-05.jpg.jpeg", caption: "Memory 05" },
  { file: "memory-06.jpg.jpeg", caption: "Memory 06" },
  { file: "memory-07.jpg.jpeg", caption: "Memory 07" },
  { file: "memory-08.jpg.jpeg", caption: "Memory 08" },
  { file: "memory-09.jpg.jpeg", caption: "Memory 09" },
  { file: "memory-10.jpg.jpeg", caption: "Memory 10" },
  { file: "memory-11.jpg.jpeg", caption: "Memory 11" },
  { file: "memory-12.jpg.jpeg", caption: "Memory 12" }
];

// Separate photos for the five music chapters.
const chapters = [
  {
    name: "Raksha 💖",
    photo: "raksha.jpg",
    song: "raksha.mp3",
    note: "The main character of this little story."
  },
  {
    name: "Uncle Reaction 😆",
    photo: "uncle-reaction.jpg",
    song: "uncle-reaction.mp3",
    note: "A chapter full of reactions and laughs."
  },
  {
    name: "Jeni 💕",
    photo: "jeni.jpg",
    song: "jeni.mp3",
    note: "One more lovely part of the memories."
  },
  {
    name: "Sameer 🌈",
    photo: "sameer.jpg",
    song: "sameer.mp3",
    note: "The chaos deserves its own chapter."
  },
  {
    name: "RΛJS",
    photo: "rajs.jpg",
    song: "rajs.mp3",
    note: "A little chapter with its own soundtrack."
  }
];

const openWhenMessages = [
  [
    "You're feeling sad 🥺",
    "Take a breath, Mama. You don't have to pretend to be okay all the time. You matter, your feelings matter, and you deserve kindness. I'm always wishing the best for you. 🤍"
  ],
  [
    "You miss me 🫶",
    "Then remember one thing: distance or a busy day doesn't erase a real friendship. Think of one of our silly moments and smile. I'll be cheering for you from wherever I am. 💖"
  ],
  [
    "We have a silly fight 😂",
    "First, calm down. Then remember we're two people who can misunderstand each other and still choose respect, honesty, and friendship. Let's talk it out instead of letting one moment define everything. 🤝"
  ],
  [
    "You need support 🤍",
    "You don't have to figure everything out in one day. Take it one step at a time, and reach out to someone you trust when things feel heavy. I hope you always have people around you who listen and support you."
  ],
  [
    "You need a smile 🌷",
    "Official reminder: you are allowed to laugh at the most random things, send silly messages, and be your wonderfully chaotic self. Here's a tiny smile from this page. 😆"
  ],
  [
    "You need a reminder ✨",
    "You are important. You are appreciated. And you have made some genuinely lovely memories in my life. Never forget that, Mama. 💖"
  ]
];

const quizQuestions = [
  {
    q: "What do I call you?",
    a: ["Mama", "Sister", "Boss", "Friend"],
    correct: "Mama"
  },
  {
    q: "What do you mean to me?",
    a: ["Nothing", "Everything", "A classmate", "A stranger"],
    correct: "Everything"
  },
  {
    q: "Who is my special to me ?",
    a: ["Jeni", "Raksha", "Sameer", "Someone else"],
    correct: "Raksha"
  },
  {
    q: "What makes our friendship special?",
    a: ["Trust", "Support", "All of these", "Memories"],
    correct: "All of these"
  },
  {
    q: "What will I always do?",
    a: [
      "Ignore you",
      "Always support you and be with you",
      "Forget you",
      "Avoid you"
    ],
    correct: "Always support you and be with you"
  },
  {
    q: "What's your special nickname?",
    a: ["Mama 💖🫶", "Kullachi 😆", "Gay 🌈🏳️‍🌈", "Lesbian 👻"],
    correct: "Mama 💖🫶"
  },
  {
    q: "Who's your favourite troublemaker?",
    a: ["Ahamed", "Sameer", "Uncle", "Jeni"],
    correct: "Ahamed"
  },
  {
    q: "What's one thing we should never stop doing?",
    a: ["Irritate Each other", "Speak", "Stay silent", "Ignore"],
    correct: "Speak"
  },
  {
    q: "What matters most in our friendship?",
    a: ["Fame", "Trust", "Money", "Popularity"],
    correct: "Trust"
  },
  {
    q: "Our friendship is...?",
    a: ["Temporary", "Both — silly & special", "Just ordinary", "Nothing"],
    correct: "Both — silly & special"
  }
];

// Background animation: ✨ stars and floating hearts.
const ambient = document.getElementById("ambient");

for (let i = 0; i < 104; i++) {
  const particle = document.createElement("span");
  const isSparkle = i % 4 !== 0;

  particle.className = `particle ${isSparkle ? "sparkle" : "heart"}`;
  particle.textContent = isSparkle ? "✨" : "💖";
  particle.style.left = `${Math.random() * 100}%`;
  particle.style.fontSize = `${9 + Math.random() * 13}px`;
  particle.style.animationDuration = `${18 + Math.random() * 32}s`;
  particle.style.animationDelay = `${-Math.random() * 45}s`;
  particle.style.setProperty(
    "--drift",
    `${-70 + Math.random() * 140}px`
  );

  ambient.appendChild(particle);
}

// Pause and resume background animation.
document.getElementById("motionToggle").addEventListener("click", (event) => {
  const paused = document.body.classList.toggle("motion-paused");

  event.currentTarget.setAttribute("aria-pressed", String(paused));
  event.currentTarget.textContent = paused ? "Ⅱ" : "✦";
});

// Open diary button.
document.getElementById("openDiary").addEventListener("click", () => {
  document.getElementById("letter").scrollIntoView({
    behavior: "smooth"
  });
});

// Build 12 scrapbook photos.
const memoryGrid = document.getElementById("memoryGrid");

memories.forEach((memory, index) => {
  const button = document.createElement("button");
  button.className = "memory-card";
  button.type = "button";

  button.style.setProperty(
    "--tilt",
    `${(index % 2 ? 1 : -1) * (1 + Math.random() * 2)}deg`
  );

  const image = document.createElement("img");
  image.src = `assets/photos/${memory.file}`;
  image.alt = memory.caption;
  image.loading = "lazy";

  image.onerror = () => {
    image.remove();

    const placeholder = document.createElement("div");
    placeholder.className = "memory-placeholder";
    placeholder.innerHTML = `
      <div>
        <span>♡</span>
        Add ${memory.file}
        <small>assets/photos/</small>
      </div>
    `;

    button.insertBefore(placeholder, button.firstChild);
  };

  const caption = document.createElement("div");
  caption.className = "memory-caption";
  caption.textContent = memory.caption;

  button.append(image, caption);

  button.addEventListener("click", () => {
    if (!image.isConnected || !image.complete || image.naturalWidth === 0) {
      return;
    }

    document.getElementById("lightboxImage").src = image.src;
    document.getElementById("lightboxCaption").textContent = memory.caption;
    document.getElementById("lightbox").hidden = false;
  });

  memoryGrid.appendChild(button);
});

// Photo lightbox.
const lightbox = document.getElementById("lightbox");

document.getElementById("lightboxClose").addEventListener("click", () => {
  lightbox.hidden = true;
});

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    lightbox.hidden = true;
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    lightbox.hidden = true;
  }
});

// Open When letters.
const envelopeList = document.getElementById("envelopeList");

openWhenMessages.forEach(([title, message]) => {
  const item = document.createElement("article");
  item.className = "envelope";

  const button = document.createElement("button");
  button.type = "button";
  button.setAttribute("aria-expanded", "false");
  button.innerHTML = `<span>${title}</span><span>＋</span>`;

  const content = document.createElement("div");
  content.className = "envelope-content";
  content.hidden = true;
  content.textContent = message;

  button.addEventListener("click", () => {
    const opening = content.hidden;

    content.hidden = !opening;
    button.setAttribute("aria-expanded", String(opening));
    button.lastElementChild.textContent = opening ? "−" : "＋";
  });

  item.append(button, content);
  envelopeList.appendChild(item);
});

// Five music chapters: each has its own photo and independent MP3.
const chapterGrid = document.getElementById("chapterGrid");

chapters.forEach((chapter, index) => {
  const card = document.createElement("article");
  card.className = "chapter-card";

  const title = document.createElement("div");
  title.className = "chapter-title";
  title.innerHTML = `
    <h3>${chapter.name}</h3>
    <span>✧ 0${index + 1}</span>
  `;

  const photo = document.createElement("div");
  photo.className = "chapter-photo";

  const img = document.createElement("img");
  img.src = `assets/photos/${chapter.photo}`;
  img.alt = `${chapter.name} chapter photo`;
  img.loading = "lazy";

  img.onerror = () => {
    img.remove();
    photo.innerHTML = `
      <div>
        ♡
        <small>Add ${chapter.photo} here</small>
      </div>
    `;
  };

  photo.appendChild(img);

  const note = document.createElement("p");
  note.className = "asset-note";
  note.textContent = chapter.note;

  const controls = document.createElement("div");
  controls.className = "audio-controls";

  const audio = document.createElement("audio");
  audio.controls = true;
  audio.preload = "none";
  audio.src = `assets/songs/${chapter.song}`;

  controls.appendChild(audio);
  card.append(title, photo, note, controls);
  chapterGrid.appendChild(card);
});

// Countdown to December 21, 2027.
function updateCountdown() {
  const target = new Date("2027-12-21T00:00:00+05:30").getTime();
  const remaining = Math.max(0, target - Date.now());

  const day = 86400000;
  const hour = 3600000;
  const minute = 60000;

  document.getElementById("days").textContent =
    Math.floor(remaining / day);

  document.getElementById("hours").textContent =
    Math.floor((remaining % day) / hour);

  document.getElementById("minutes").textContent =
    Math.floor((remaining % hour) / minute);

  document.getElementById("seconds").textContent =
    Math.floor((remaining % minute) / 1000);
}

updateCountdown();
setInterval(updateCountdown, 1000);

// Friendship quiz.
let currentQuestion = 0;
let correctCount = 0;
let answered = false;

const questionText = document.getElementById("questionText");
const answersEl = document.getElementById("answers");
const nextButton = document.getElementById("nextQuestion");
const feedback = document.getElementById("quizFeedback");

function renderQuestion() {
  answered = false;

  const item = quizQuestions[currentQuestion];

  document.getElementById("quizProgress").textContent =
    `QUESTION ${currentQuestion + 1} / ${quizQuestions.length}`;

  document.getElementById("quizScore").textContent =
    `${correctCount} correct`;

  document.getElementById("progressFill").style.width =
    `${((currentQuestion + 1) / quizQuestions.length) * 100}%`;

  questionText.textContent = item.q;
  answersEl.innerHTML = "";
  feedback.textContent = "";
  nextButton.disabled = true;

  nextButton.textContent =
    currentQuestion === quizQuestions.length - 1
      ? "See results →"
      : "Next question →";

  item.a.forEach((answer) => {
    const button = document.createElement("button");

    button.className = "answer-btn";
    button.type = "button";
    button.textContent = answer;

    button.addEventListener("click", () => {
      chooseAnswer(answer, button);
    });

    answersEl.appendChild(button);
  });
}

function chooseAnswer(answer, selectedButton) {
  if (answered) return;

  answered = true;

  const correct = quizQuestions[currentQuestion].correct;

  if (answer === correct) {
    correctCount++;
    feedback.textContent = "Correct! You know our little world. 💖";
  } else {
    feedback.textContent = `Not quite! The answer is: ${correct}`;
  }

  [...answersEl.children].forEach((button) => {
    button.disabled = true;

    if (button.textContent === correct) {
      button.classList.add("correct");
    } else if (button === selectedButton) {
      button.classList.add("wrong");
    }
  });

  document.getElementById("quizScore").textContent =
    `${correctCount} correct`;

  nextButton.disabled = false;
}

nextButton.addEventListener("click", () => {
  if (!answered) return;

  if (currentQuestion < quizQuestions.length - 1) {
    currentQuestion++;
    renderQuestion();
  } else {
    questionText.textContent =
      `You got ${correctCount} out of ${quizQuestions.length}!`;

    answersEl.innerHTML = "";

    feedback.textContent =
      correctCount === 10
        ? "Perfect score, Mama! ✨"
        : "The best part is the memories, not the score. 💖";

    nextButton.disabled = true;
    nextButton.textContent = "Quiz completed";

    document.getElementById("quizProgress").textContent =
      "QUIZ COMPLETE";

    document.getElementById("progressFill").style.width = "100%";
  }
});

document.getElementById("restartQuiz").addEventListener("click", () => {
  currentQuestion = 0;
  correctCount = 0;
  renderQuestion();
});

renderQuestion();

// Playful secret reveal. This is not secure authentication.
document.getElementById("secretForm").addEventListener("submit", (event) => {
  event.preventDefault();

  const value = document
    .getElementById("secretInput")
    .value.trim()
    .toLowerCase();

  const feedback = document.getElementById("secretFeedback");

  if (value === "mama") {
    document.getElementById("secretMessage").hidden = false;
    feedback.textContent = "Unlocked! ✨";
  } else {
    feedback.textContent = "Ahaa u are Wrong !!! 😜";
    document.getElementById("secretMessage").hidden = true;
  }
});

// Local photo booth preview.
let boothObjectUrl = null;

const boothInput = document.getElementById("boothInput");

boothInput.addEventListener("change", () => {
  const file = boothInput.files && boothInput.files[0];

  if (!file) return;

  if (boothObjectUrl) {
    URL.revokeObjectURL(boothObjectUrl);
  }

  boothObjectUrl = URL.createObjectURL(file);

  const boothFrame = document.getElementById("boothFrame");
  boothFrame.innerHTML = "";

  const img = document.createElement("img");
  img.src = boothObjectUrl;
  img.alt = "Your selected photo preview";

  boothFrame.appendChild(img);
});

document.getElementById("clearBooth").addEventListener("click", () => {
  if (boothObjectUrl) {
    URL.revokeObjectURL(boothObjectUrl);
  }

  boothObjectUrl = null;
  boothInput.value = "";

  document.getElementById("boothFrame").innerHTML =
    "<span>♡<br><small>Your photo will appear here</small></span>";
});
