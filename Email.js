let check = document.querySelector(".check");
let text = document.querySelector(".text");
let email = document.querySelector(".email");

let regex = /^[^]+\@[a-zA-Z]+\.[a-zA-Z]{2,4}$/;

check.addEventListener("click", () => {
  if (email.value == "") {
    text.innerHTML = "Please Enter an Email";
    text.Style.color = "#000";
  } else if (email.value.match(regex)) {
    text.innerHTML = "congratulation! That's a valid Email";
    text.Style.color = "green";
  } else {
    text.innerHTML = "Invalid Email";
    text.Style.color = "red";
  }
});
