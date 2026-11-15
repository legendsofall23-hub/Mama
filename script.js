
:root {
  --ivory: #F4EBDD;
  --beige: #E4D2B8;
  --caramel: #A77B59;
  --coffee: #684638;
  --rose: #9A5360;
  --gold: #D4A66A;
  --espresso: #38251F;
  --white: #FFFDF8;
  --muted: #806B5B;
  --line: rgba(104,70,56,.18);
  --shadow: 0 18px 55px rgba(56,37,31,.10);
}

* { box-sizing: border-box; }

html {
  scroll-behavior: smooth;
  scroll-padding-top: 90px;
}

body {
  margin: 0;
  color: var(--espresso);
  background: var(--ivory);
  font-family: 'DM Sans', sans-serif;
  overflow-x: hidden;
}

button, input { font: inherit; }
button { cursor: pointer; }
a { color: inherit; text-decoration: none; }

.ambient {
  position: fixed;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
  z-index: 0;
}

.particle {
  position: absolute;
  user-select: none;
  opacity: .48;
  will-change: transform;
}

.particle.sparkle {
  color: var(--gold);
  animation: sparkleDrift linear infinite;
}

.particle.heart {
  color: var(--rose);
  animation: heartFloat ease-in-out infinite;
}

@keyframes sparkleDrift {
  0% {
    transform: translate3d(0,-8vh,0) rotate(0deg);
    opacity: 0;
  }
  12% { opacity: .48; }
  88% { opacity: .4; }
  100% {
    transform: translate3d(var(--drift),108vh,0) rotate(220deg);
    opacity: 0;
  }
}

@keyframes heartFloat {
  0% {
    transform: translate3d(0,110vh,0) rotate(-12deg);
    opacity: 0;
  }
  15% { opacity: .34; }
  50% {
    transform: translate3d(var(--drift),50vh,0) rotate(12deg);
  }
  85% { opacity: .32; }
  100% {
    transform: translate3d(0,-12vh,0) rotate(-10deg);
    opacity: 0;
  }
}

body.motion-paused .particle {
  animation-play-state: paused !important;
}

.topbar {
  height: 74px;
  padding: 0 clamp(18px,6vw,90px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 10;
  background: rgba(244,235,221,.88);
  backdrop-filter: blur(14px);
  border-bottom: 1px solid var(--line);
}

.brand {
  font-family: 'Cormorant Garamond',serif;
  font-size: 32px;
  font-weight: 700;
  color: var(--rose);
}

.brand span {
  color: var(--gold);
  font-size: 17px;
  vertical-align: top;
}

.topbar nav {
  display: flex;
  gap: clamp(12px,3vw,34px);
  color: var(--coffee);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: .08em;
  text-transform: uppercase;
}

.topbar nav a:hover { color: var(--rose); }

.sound-toggle {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1px solid var(--line);
  background: var(--white);
  color: var(--rose);
}

main, .footer { position: relative; z-index: 1; }

.hero {
  min-height: calc(100vh - 74px);
  display: grid;
  place-items: center;
  padding: 70px 20px 90px;
  position: relative;
}

.hero-card {
  width: min(700px,100%);
  text-align: center;
  padding: clamp(35px,7vw,76px) clamp(22px,6vw,70px);
  background: rgba(255,253,248,.86);
  border: 1px solid rgba(167,123,89,.28);
  box-shadow: var(--shadow);
  border-radius: 5px;
  position: relative;
}

.hero-card:before, .hero-card:after {
  content: '✧';
  position: absolute;
  color: var(--gold);
  font-size: 28px;
}

.hero-card:before { top: 18px; left: 22px; }
.hero-card:after { bottom: 18px; right: 22px; }

.eyebrow {
  font-size: 10px;
  letter-spacing: .24em;
  font-weight: 700;
  color: var(--rose);
}

.book-icon {
  width: 74px;
  height: 84px;
  margin: 25px auto 15px;
  border-radius: 5px 12px 12px 5px;
  background: linear-gradient(110deg,var(--coffee),var(--rose));
  box-shadow: inset 7px 0 rgba(255,255,255,.14),7px 7px 0 var(--beige);
  display: grid;
  place-items: center;
  color: #fff4e6;
  font-size: 30px;
  transform: rotate(-4deg);
}

.script {
  font-family: 'Dancing Script',cursive;
  color: var(--rose);
  font-size: 25px;
}

.hero h1 {
  font: 700 clamp(45px,8vw,76px)/.98 'Cormorant Garamond',serif;
  margin: 8px 0 15px;
  color: var(--espresso);
}

.hero h1 span { font-size: .55em; white-space: nowrap; }

.hero-copy {
  max-width: 440px;
  margin: 0 auto 27px;
  color: var(--muted);
  line-height: 1.8;
  font-size: 14px;
}

.primary-btn {
  border: 0;
  border-radius: 3px;
  padding: 13px 22px;
  color: var(--white);
  background: var(--rose);
  font-weight: 700;
  font-size: 12px;
  letter-spacing: .05em;
  box-shadow: 0 7px 18px rgba(154,83,96,.18);
  transition: .2s;
}

.primary-btn:hover {
  transform: translateY(-2px);
  background: var(--coffee);
}

.primary-btn:disabled {
  opacity: .4;
  cursor: not-allowed;
  transform: none;
}

.small-note {
  font-size: 10px;
  color: var(--muted);
  margin: 22px 0 0;
  letter-spacing: .08em;
}

.hero-side-note {
  position: absolute;
  right: 6%;
  bottom: 11%;
  font: 600 13px 'Cormorant Garamond',serif;
  color: var(--caramel);
  text-align: center;
  transform: rotate(5deg);
}

.hero-side-note span {
  font-size: 10px;
  letter-spacing: .2em;
}

.section {
  padding: 95px 20px;
  max-width: 1120px;
  margin: auto;
}

.section-heading {
  text-align: center;
  margin: 0 auto 42px;
}

.section-heading h2,
.countdown-card h2,
.secret-card h2 {
  font: 600 clamp(37px,6vw,54px)/1.05 'Cormorant Garamond',serif;
  margin: 10px 0;
  color: var(--espresso);
}

.section-heading h2 em {
  color: var(--rose);
  font-weight: 600;
}

.section-intro {
  color: var(--muted);
  font-size: 13px;
  line-height: 1.7;
}

.letter-paper {
  max-width: 760px;
  margin: auto;
  padding: clamp(28px,6vw,58px);
  background: var(--white);
  border: 1px solid var(--line);
  box-shadow: var(--shadow);
  position: relative;
}

.letter-paper:before {
  content: '';
  position: absolute;
  inset: 12px;
  border: 1px solid rgba(167,123,89,.18);
  pointer-events: none;
}

.paper-top {
  text-align: center;
  font-size: 10px;
  letter-spacing: .2em;
  color: var(--caramel);
  margin-bottom: 30px;
}

.letter-paper p {
  position: relative;
  color: var(--coffee);
  font-size: 14px;
  line-height: 2;
  margin: 0 0 17px;
}

.letter-sign {
  text-align: right;
  color: var(--rose);
  font: 600 24px 'Dancing Script',cursive;
  margin-top: 28px;
}

.countdown-section { padding-top: 20px; }

.countdown-card {
  text-align: center;
  padding: 45px 20px;
  background: var(--beige);
  border: 1px solid rgba(104,70,56,.13);
}

.countdown-card h2 { font-size: clamp(32px,5vw,44px); }

.countdown {
  display: flex;
  justify-content: center;
  gap: clamp(10px,3vw,28px);
  margin: 28px 0 18px;
}

.countdown div {
  width: clamp(65px,14vw,100px);
  padding: 15px 5px;
  background: var(--white);
  border: 1px solid var(--line);
}

.countdown strong {
  display: block;
  font: 700 clamp(27px,5vw,40px) 'Cormorant Garamond',serif;
  color: var(--rose);
}

.countdown span {
  display: block;
  margin-top: 4px;
  color: var(--muted);
  font-size: 9px;
  text-transform: uppercase;
  letter-spacing: .12em;
}

.countdown-caption {
  color: var(--coffee);
  font-size: 11px;
}

.memory-grid {
  display: grid;
  grid-template-columns: repeat(4,1fr);
  gap: 17px;
}

.memory-card {
  border: 0;
  background: var(--white);
  padding: 9px 9px 13px;
  box-shadow: 0 8px 25px rgba(56,37,31,.08);
  transform: rotate(var(--tilt));
  transition: transform .2s,box-shadow .2s;
  text-align: left;
}

.memory-card:hover {
  transform: rotate(0) translateY(-5px);
  box-shadow: var(--shadow);
}

.memory-card img {
  width: 100%;
  aspect-ratio: 1/1.12;
  object-fit: cover;
  display: block;
  background: var(--beige);
}

.memory-placeholder {
  aspect-ratio: 1/1.12;
  display: grid;
  place-items: center;
  text-align: center;
  padding: 12px;
  color: var(--caramel);
  background: linear-gradient(145deg,#eee0cd,#f9f4eb);
  font: 600 15px 'Cormorant Garamond',serif;
}

.memory-placeholder span {
  display: block;
  font-size: 24px;
  color: var(--rose);
}

.memory-caption {
  padding: 10px 3px 0;
  color: var(--coffee);
  font: 600 17px 'Cormorant Garamond',serif;
}

.envelope-list {
  max-width: 780px;
  margin: auto;
  display: grid;
  gap: 12px;
}

.envelope {
  border: 1px solid var(--line);
  background: rgba(255,253,248,.85);
}

.envelope button {
  width: 100%;
  padding: 18px 20px;
  border: 0;
  background: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--coffee);
  text-align: left;
  font-weight: 700;
}

.envelope button span:last-child {
  color: var(--rose);
  font-size: 20px;
}

.envelope-content {
  padding: 0 20px 20px;
  color: var(--muted);
  font-size: 13px;
  line-height: 1.8;
}

.chapter-grid {
  display: grid;
  grid-template-columns: repeat(2,1fr);
  gap: 20px;
}

.chapter-card {
  background: var(--white);
  border: 1px solid var(--line);
  padding: 18px;
  box-shadow: 0 10px 30px rgba(56,37,31,.06);
}

.chapter-card:last-child {
  grid-column: 1/-1;
  max-width: calc(50% - 10px);
  width: 100%;
  justify-self: center;
}

.chapter-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 14px;
}

.chapter-title h3 {
  margin: 0;
  font: 700 25px 'Cormorant Garamond',serif;
  color: var(--coffee);
}

.chapter-title span { color: var(--gold); }

.chapter-photo {
  width: 100%;
  aspect-ratio: 16/9;
  background: linear-gradient(135deg,var(--beige),#f7f0e5);
  display: grid;
  place-items: center;
  overflow: hidden;
  color: var(--rose);
  text-align: center;
  font: 600 16px 'Cormorant Garamond',serif;
}

.chapter-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.chapter-photo small {
  display: block;
  font: 10px 'DM Sans',sans-serif;
  color: var(--muted);
  margin-top: 6px;
}

.audio-controls {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 14px;
}

.audio-controls audio {
  width: 100%;
  height: 34px;
  accent-color: var(--rose);
}

.asset-note {
  text-align: center;
  color: var(--muted);
  font-size: 11px;
  margin-top: 22px;
}

.quiz-card {
  max-width: 700px;
  margin: auto;
  background: var(--white);
  border: 1px solid var(--line);
  padding: clamp(22px,5vw,40px);
  box-shadow: var(--shadow);
}

.quiz-topline {
  display: flex;
  justify-content: space-between;
  color: var(--rose);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: .12em;
}

.progress-track {
  height: 4px;
  background: var(--beige);
  margin: 14px 0 28px;
}

#progressFill {
  height: 100%;
  width: 10%;
  background: var(--rose);
  transition: width .25s;
}

.quiz-card h3 {
  font: 700 clamp(24px,4vw,31px) 'Cormorant Garamond',serif;
  color: var(--espresso);
  margin: 0 0 20px;
}

.answers {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}

.answer-btn {
  border: 1px solid var(--line);
  background: #fbf7f0;
  padding: 13px 14px;
  text-align: left;
  color: var(--coffee);
  font-size: 12px;
  border-radius: 2px;
}

.answer-btn:hover:not(:disabled) {
  border-color: var(--rose);
  background: #f7ece8;
}

.answer-btn.correct {
  background: #e7efe3;
  border-color: #80956f;
  color: #40533a;
}

.answer-btn.wrong { opacity: .5; }
.answer-btn:disabled { cursor: default; }

.quiz-feedback {
  min-height: 22px;
  color: var(--rose);
  font-size: 12px;
  font-weight: 700;
}

.quiz-actions {
  display: flex;
  align-items: center;
  gap: 18px;
}

.text-btn {
  border: 0;
  background: transparent;
  color: var(--coffee);
  text-decoration: underline;
  text-underline-offset: 4px;
  font-size: 11px;
  padding: 10px 0;
}

.secret-section {
  max-width: none;
  background: var(--espresso);
  padding: 90px 20px;
}

.secret-card {
  max-width: 700px;
  margin: auto;
  text-align: center;
  color: var(--ivory);
}

.secret-card .eyebrow { color: var(--gold); }

.secret-card h2 { color: var(--white); }

.secret-card h2 span {
  color: var(--gold);
  font-size: .6em;
}

.secret-card > p:not(.eyebrow) {
  color: #d9c5b2;
  font-size: 13px;
}

.secret-form {
  display: flex;
  gap: 9px;
  max-width: 420px;
  margin: 25px auto 0;
}

.secret-form input {
  min-width: 0;
  flex: 1;
  padding: 13px;
  border: 1px solid rgba(255,255,255,.2);
  background: rgba(255,255,255,.08);
  color: white;
  outline: none;
}

.secret-form input::placeholder { color: #c7b3a4; }

.secret-feedback {
  min-height: 20px;
  color: #e9b4b7;
  font-size: 12px;
}

.secret-message {
  max-width: 480px;
  margin: 22px auto 0;
  padding: 20px;
  background: rgba(255,255,255,.08);
  border: 1px solid rgba(212,166,106,.3);
  color: #f8e9d8;
  line-height: 1.8;
}

.secret-message .script { color: #f0c5c8; }

.booth-card {
  max-width: 460px;
  margin: auto;
  text-align: center;
  padding: 25px;
  background: var(--white);
  border: 1px solid var(--line);
  box-shadow: var(--shadow);
}

#boothInput { display: none; }

.upload-label {
  display: inline-block;
  padding: 12px 18px;
  background: var(--rose);
  color: white;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
}

.booth-frame {
  margin: 20px auto 8px;
  width: min(100%,300px);
  aspect-ratio: 4/5;
  padding: 12px;
  background: #f4e8d8;
  border: 1px solid var(--beige);
  display: grid;
  place-items: center;
  color: var(--rose);
  font: 30px 'Cormorant Garamond',serif;
}

.booth-frame img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.booth-frame small {
  display: block;
  font: 11px 'DM Sans',sans-serif;
  color: var(--muted);
}

.footer {
  padding: 60px 20px 45px;
  text-align: center;
  background: #eadbc8;
  color: var(--coffee);
}

.footer-star {
  color: var(--gold);
  font-size: 28px;
}

.footer .script { margin: 10px 0; }

.footer h2 {
  font: 600 30px 'Cormorant Garamond',serif;
  margin: 8px 0;
}

.footer-small {
  color: var(--muted);
  font-size: 10px;
  letter-spacing: .1em;
}

.lightbox {
  position: fixed;
  inset: 0;
  z-index: 30;
  background: rgba(35,23,20,.92);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 55px 20px 25px;
}

.lightbox[hidden] { display: none; }

.lightbox img {
  max-width: min(90vw,700px);
  max-height: 75vh;
  object-fit: contain;
  border: 9px solid var(--white);
}

.lightbox p {
  color: var(--ivory);
  font-family: 'Cormorant Garamond',serif;
  font-size: 22px;
}

.lightbox-close {
  position: absolute;
  top: 15px;
  right: 22px;
  border: 0;
  background: none;
  color: white;
  font-size: 38px;
}

@media(max-width:760px) {
  .topbar {
    height: 64px;
    padding: 0 16px;
  }

  .topbar nav {
    gap: 12px;
    font-size: 9px;
    letter-spacing: .02em;
  }

  .sound-toggle {
    width: 31px;
    height: 31px;
  }

  .hero {
    min-height: calc(90vh - 64px);
  }

  .hero-side-note {
    right: 5%;
    bottom: 3%;
    font-size: 11px;
  }

  .section { padding: 70px 17px; }

  .memory-grid {
    grid-template-columns: repeat(2,1fr);
    gap: 13px;
  }

  .chapter-grid { grid-template-columns: 1fr; }

  .chapter-card:last-child {
    grid-column: auto;
    max-width: none;
  }
}

@media(max-width:420px) {
  .topbar nav {
    gap: 8px;
    font-size: 8px;
  }

  .brand { font-size: 27px; }

  .hero-card { padding: 45px 20px; }

  .answers { grid-template-columns: 1fr; }

  .secret-form { flex-direction: column; }

  .countdown { gap: 6px; }

  .countdown div { padding: 12px 3px; }
}
