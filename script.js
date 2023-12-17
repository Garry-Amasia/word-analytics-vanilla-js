const textareaEl = document.querySelector(".textarea");
const charactersNumberEl = document.querySelector(".stat__number--characters");
const twitterNumberEl = document.querySelector(".stat__number--twitter");
const facebookNumberEl = document.querySelector(".stat__number--facebook");
const wordsNumberEl = document.querySelector(".stat__number--words");

textareaEl.addEventListener("input", (e) => {
  //-----------check whether user want to hack?----------------------
  if (textareaEl.value.includes("<script>")) {
    alert("cant hack me dude!!");
    textareaEl.value = textareaEl.value.replace("<script>", "");
  }

  //-----------determine new number----------------------
  const numberOfCharacter = textareaEl.value.length;
  //   const numberOfCharacter1 = e.target.value.length;
  //   console.log(numberOfCharacter1);
  //   console.log(numberOfCharacter);

  //-----------set new numbers for characters----------------------
  charactersNumberEl.textContent = numberOfCharacter;

  //-----------set new numbers for twitter----------------------
  const noOfCharLeftTwitter = 280 - numberOfCharacter;
  if (noOfCharLeftTwitter < 0) {
    twitterNumberEl.classList.add("stat__number--limit");
  } else {
    twitterNumberEl.classList.remove("stat__number--limit");
  }
  twitterNumberEl.textContent = noOfCharLeftTwitter;

  //-----------set new numbers for facebook----------------------
  const noOfCharLeftFacebook = 2200 - numberOfCharacter;
  if (noOfCharLeftFacebook < 0) {
    facebookNumberEl.classList.add("stat__number--limit");
  } else {
    facebookNumberEl.classList.remove("stat__number--limit");
  }
  facebookNumberEl.textContent = noOfCharLeftFacebook;

  //-----------calculate number of words----------------------
  let noOfWords = textareaEl.value.split(" ").length;
  if (textareaEl.value.length === 0) noOfWords = 0;
  //-----------set number of words----------------------
  wordsNumberEl.textContent = noOfWords;
});
