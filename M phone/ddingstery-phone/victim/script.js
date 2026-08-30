// ==============================
// 여기만 수정하면 됩니다.
// 실제 퀴즈 정답으로 바꿔주세요.
// 예: const CORRECT_ANSWER = "민초";
// ==============================
const CORRECT_ANSWER = "COCOA";

const startScreen = document.getElementById("startScreen");
const quizScreen = document.getElementById("quizScreen");
const homeScreen = document.getElementById("homeScreen");
const galleryScreen = document.getElementById("galleryScreen");

const quizForm = document.getElementById("quizForm");
const answerInput = document.getElementById("answerInput");
const quizMessage = document.getElementById("quizMessage");

const galleryApp = document.getElementById("galleryApp");
const backButton = document.getElementById("backButton");

function showScreen(target) {
  [startScreen, quizScreen, homeScreen, galleryScreen].forEach((screen) => {
    screen.classList.remove("active");
  });
  target.classList.add("active");
}

startScreen.addEventListener("click", () => {
  showScreen(quizScreen);
  setTimeout(() => answerInput.focus(), 50);
});

quizForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // 앞뒤 공백 무시 + 영문 대소문자 무시
  const userAnswer = answerInput.value.trim().toLowerCase();
  const correctAnswer = CORRECT_ANSWER.trim().toLowerCase();

  if (userAnswer === correctAnswer) {
    quizMessage.textContent = "";
    answerInput.value = "";
    showScreen(homeScreen);
  } else {
    quizMessage.textContent = "정답이 아닙니다.";
    answerInput.select();
  }
});

galleryApp.addEventListener("click", () => {
  showScreen(galleryScreen);
});

backButton.addEventListener("click", () => {
  showScreen(homeScreen);
});
