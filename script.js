
(() => {
  "use strict";

  const $ = id => document.getElementById(id);

  // BACKGROUND SPARKLES AND HEARTS

  const decor = $("decor");

  for (let i = 0; i < 88; i++) {
    const particle = document.createElement("span");
    const heart = i % 5 === 0;

    particle.className = "particle " + (heart ? "heart" : "sparkle");
    particle.textContent = heart ? "💖" : "✨";

    particle.style.left = Math.random() * 98 + "%";

    particle.style.fontSize = (
      heart ? 10 + Math.random() * 10 : 13 + Math.random() * 15
    ) + "px";

    particle.style.setProperty(
      "--duration",
      (heart ? 24 + Math.random() * 24 : 12 + Math.random() * 19) + "s"
    );

    particle.style.setProperty(
      "--delay",
      -Math.random() * 40 + "s"
    );

    particle.style.setProperty(
      "--drift",
      (Math.random() * 70 - 35) + "px"
    );

    particle.style.setProperty(
      "--twist",
      (Math.random() * 110 - 55) + "deg"
    );

    decor.appendChild(particle);
  }


  // NAVIGATION

  $("menuButton").addEventListener("click", () => {
    const links = $("navLinks");

    links.hidden = !links.hidden;

    $("menuButton").setAttribute(
      "aria-expanded",
      String(!links.hidden)
    );
  });

  $("navLinks").querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      $("navLinks").hidden = true;
      $("menuButton").setAttribute("aria-expanded", "false");
    });
  });

  $("openDiary").addEventListener("click", () => {
    $("letter").scrollIntoView({ behavior: "smooth" });
  });


  // 12 SCRAPBOOK PHOTOS

  for (let i = 1; i <= 12; i++) {
    const slot = document.createElement("div");
    slot.className = "photo-slot";

    const image = document.createElement("img");

    image.src =
      "assets/photos/memory-" +
      String(i).padStart(2, "0") +
      ".jpg";

    image.alt = "Memory " + i;
    image.loading = "lazy";

    image.onerror = () => {
      image.remove();
      slot.textContent =
        "♡ MEMORY " + String(i).padStart(2, "0") + " — add photo";
    };

    slot.appendChild(image);
    $("gallery").appendChild(slot);
  }


  // SIX OPEN WHEN LETTERS

  const openWhen = [
    [
      "You're feeling sad 🥺",
      "Even on the days that feel heavy, remember that you matter so much. You don't have to pretend everything is okay with me. I'm always ready to listen. 💖"
    ],
    [
      "You miss me 🫶",
      "Think about all our silly moments, random talks and laughter. Distance or a busy day cannot make our friendship less special. 💕"
    ],
    [
      "We have a silly fight 😂",
      "We may disagree sometimes, but one silly fight can never erase what our friendship means. Let's talk, understand each other and move forward. 🤍"
    ],
    [
      "You need support 🤍",
      "You don't have to handle every difficult moment alone. I'll always try my best to support you, just like you supported me. 🫂"
    ],
    [
      "You need a smile 🌷",
      "Remember that your Mama is always ready for another silly conversation, random joke or little moment of laughter. 😆"
    ],
    [
      "You need a reminder ✨",
      "You're important to me, you're appreciated, and I'm genuinely grateful to have you in my life. Whatever happens, we've got each other. ♾️"
    ]
  ];

  openWhen.forEach(([title, message]) => {
    const card = document.createElement("article");
    card.className = "letter-card";

    const button = document.createElement("button");
    button.type = "button";
    button.className = "letter-toggle";
    button.textContent = title + " ＋";

    const content = document.createElement("p");
    content.className = "letter-content";
    content.textContent = message;
    content.hidden = true;

    button.addEventListener("click", () => {
      content.hidden = !content.hidden;

      button.textContent =
        title + (content.hidden ? " ＋" : "  −");
    });

    card.append(button, content);
    $("letters").appendChild(card);
  });


  // FIVE MUSIC CHAPTERS

  const chapters = [
    ["Raksha 💖", "raksha.jpg", "raksha.mp3"],
    ["Uncle Reaction 😆", "uncle-reaction.jpg", "uncle-reaction.mp3"],
    ["Jeni 💕", "jeni.jpg", "jeni.mp3"],
    ["Sameer 🌈", "sameer.jpg", "sameer.mp3"],
    ["RΛJS", "rajs.jpg", "rajs.mp3"]
  ];

  const players = [];

  const formatTime = seconds => {
    if (!Number.isFinite(seconds)) return "00:00";

    return (
      String(Math.floor(seconds / 60)).padStart(2, "0") +
      ":" +
      String(Math.floor(seconds % 60)).padStart(2, "0")
    );
  };

  chapters.forEach(([name, photoFile, songFile], index) => {

    const card = document.createElement("article");
    card.className = "player";

    const label = document.createElement("div");
    label.className = "eyebrow";
    label.textContent = "CHAPTER " + (index + 1);

    const heading = document.createElement("h3");
    heading.textContent = name;

    const photo = document.createElement("div");
    photo.className = "photo-slot chapter-photo";

    const image = document.createElement("img");
    image.src = "assets/photos/" + photoFile;
    image.alt = name + " chapter photo";
    image.loading = "lazy";

    image.onerror = () => {
      image.remove();
      photo.textContent = "♡ ADD " + name.toUpperCase() + " PHOTO";
    };

    photo.appendChild(image);

    const audio = document.createElement("audio");
    audio.preload = "none";
    audio.src = "assets/songs/" + songFile;

    const progress = document.createElement("input");
    progress.type = "range";
    progress.className = "progress";
    progress.min = "0";
    progress.max = "100";
    progress.value = "0";

    const times = document.createElement("div");
    times.className = "time-row";

    const currentTime = document.createElement("span");
    currentTime.textContent = "00:00";

    const duration = document.createElement("span");
    duration.textContent = "00:00";

    times.append(currentTime, duration);

    const controls = document.createElement("div");
    controls.className = "player-controls";

    const play = document.createElement("button");
    play.type = "button";
    play.textContent = "▶ Play";

    const replay = document.createElement("button");
    replay.type = "button";
    replay.className = "secondary";
    replay.textContent = "↺ Replay";

    const note = document.createElement("p");
    note.className = "small-note";
    note.textContent = "Optional song: assets/songs/" + songFile;

    players.push({ audio, play });

    play.addEventListener("click", () => {

      if (audio.paused) {

        // Pause all other chapters.
        players.forEach(other => {
          if (other.audio !== audio) {
            other.audio.pause();
            other.play.textContent = "▶ Play";
          }
        });

        audio.play().then(() => {
          play.textContent = "Ⅱ Pause";
          note.textContent = "Now playing ♡";
        }).catch(() => {
          note.textContent =
            "Song not found. Add " + songFile + " to assets/songs/.";
        });

      } else {

        audio.pause();
        play.textContent = "▶ Play";

      }
    });

    replay.addEventListener("click", () => {
      audio.currentTime = 0;

      audio.play().then(() => {
        play.textContent = "Ⅱ Pause";
        note.textContent = "Playing again ♡";
      }).catch(() => {
        note.textContent =
          "Add " + songFile + " to assets/songs/ to play it.";
      });
    });

    audio.addEventListener("timeupdate", () => {
      currentTime.textContent = formatTime(audio.currentTime);

      if (audio.duration) {
        progress.value =
          audio.currentTime / audio.duration * 100;
      }
    });

    audio.addEventListener("loadedmetadata", () => {
      duration.textContent = formatTime(audio.duration);
    });

    audio.addEventListener("ended", () => {
      play.textContent = "▶ Play";
      note.textContent = "Finished ♡ Tap replay to listen again.";
    });

    audio.addEventListener("error", () => {
      note.textContent =
        "Song file is optional. Add " + songFile + " when ready.";
    });

    progress.addEventListener("input", () => {
      if (audio.duration) {
        audio.currentTime =
          Number(progress.value) / 100 * audio.duration;
      }
    });

    controls.append(play, replay);

    card.append(
      label,
      heading,
      photo,
      audio,
      progress,
      times,
      controls,
      note
    );

    $("players").appendChild(card);
  });


  // EXACT FRIENDSHIP QUIZ

  const questions = [

    [
      "What do I call you?",
      ["Mama", "Sister", "Boss", "Friend"],
      0
    ],

    [
      "What do you mean to me?",
      ["Nothing", "Everything", "A classmate", "A stranger"],
      1
    ],

    [
      "Who is my special to me ?",
      ["Jeni", "Raksha", "Sameer", "Someone else"],
      1
    ],

    [
      "What makes our friendship special?",
      ["Trust", "Support", "All of these", "Memories"],
      2
    ],

    [
      "What will I always do?",
      ["Ignore you", "Always support you and be with you", "Forget you", "Avoid you"],
      1
    ],

    [
      "What's your special nickname?",
      ["Mama 💖🫶", "Kullachi 😆", "Gay 🌈🏳️‍🌈", "Lesbian 👻"],
      0
    ],

    [
      "Who's your favourite troublemaker?",
      ["Ahamed", "Sameer", "Uncle", "Jeni"],
      0
    ],

    [
      "What's one thing we should never stop doing?",
      ["Irritate Each other", "Speak", "Stay silent", "Ignore"],
      1
    ],

    [
      "What matters most in our friendship?",
      ["Fame", "Trust", "Money", "Popularity"],
      1
    ],

    [
      "Our friendship is...?",
      ["Temporary", "Both — silly & special", "Just ordinary", "Nothing"],
      1
    ]

  ];

  let questionIndex = 0;
  let score = 0;
  let answered = false;

  function renderQuestion() {

    const [question, options] = questions[questionIndex];

    $("questionCount").textContent =
      `QUESTION ${questionIndex + 1} / ${questions.length}`;

    $("scoreCount").textContent = "SCORE: " + score;

    $("quizProgress").style.width =
      ((questionIndex + 1) / questions.length * 100) + "%";

    $("questionText").textContent = question;

    $("answers").replaceChildren();

    $("feedback").textContent = "";

    $("nextQuestion").hidden = true;
    $("restartQuiz").hidden = true;

    answered = false;

    options.forEach((option, optionIndex) => {

      const button = document.createElement("button");

      button.type = "button";
      button.className = "answer";
      button.textContent = option;

      button.addEventListener("click", () => {

        if (answered) return;

        answered = true;

        const correctIndex = questions[questionIndex][2];

        const isCorrect = optionIndex === correctIndex;

        if (isCorrect) score++;

        [...$("answers").children].forEach((answerButton, i) => {

          answerButton.disabled = true;

          if (i === correctIndex) {
            answerButton.classList.add("correct");
          } else if (i === optionIndex) {
            answerButton.classList.add("incorrect");
          }

        });

        $("scoreCount").textContent = "SCORE: " + score;

        $("feedback").textContent = isCorrect
          ? "Correct! You know your Mama! 💖"
          : "Ahaa! Correct answer: " + options[correctIndex] + " 💕";

        $("nextQuestion").textContent =
          questionIndex === questions.length - 1
            ? "See result ✨"
            : "Next →";

        $("nextQuestion").hidden = false;

      });

      $("answers").appendChild(button);

    });
  }

  $("nextQuestion").addEventListener("click", () => {

    if (questionIndex < questions.length - 1) {

      questionIndex++;
      renderQuestion();

    } else {

      $("questionCount").textContent = "QUIZ COMPLETE";

      $("questionText").textContent = "That's our friendship! 💖";

      $("answers").replaceChildren();

      $("feedback").textContent =
        `Your final score: ${score} / ${questions.length}`;

      $("nextQuestion").hidden = true;
      $("restartQuiz").hidden = false;

    }

  });

  $("restartQuiz").addEventListener("click", () => {

    questionIndex = 0;
    score = 0;

    renderQuestion();

  });

  renderQuestion();


  // PHOTO BOOTH

  let photoUrl = null;

  $("photoInput").addEventListener("change", event => {

    const file = event.target.files && event.target.files[0];

    if (!file) return;

    if (photoUrl) {
      URL.revokeObjectURL(photoUrl);
    }

    photoUrl = URL.createObjectURL(file);

    const image = document.createElement("img");

    image.src = photoUrl;
    image.alt = "Selected photo preview";

    $("photoPreview").replaceChildren(image);

  });


  // SECRET SECTION

  $("secretForm").addEventListener("submit", event => {

    event.preventDefault();

    if (
      $("secretInput").value.trim().toLowerCase() === "mama"
    ) {

      $("secretMessage").hidden = false;
      $("secretFeedback").textContent = "Unlocked! ✨";

    } else {

      $("secretFeedback").textContent = "Ahaa u are Wrong !!!";
      $("secretMessage").hidden = true;

    }

  });


  // FINAL MESSAGE

  $("finalButton").addEventListener("click", () => {

    $("finalMessage").hidden = !$("finalMessage").hidden;

  });

})();
