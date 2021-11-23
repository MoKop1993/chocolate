function buy() {
  let name = prompt("What is your name?");
  let age = prompt("How old are you?");
  let chocolate = prompt("What is your favorite chocolate?");
  let email = prompt("What is your email?");

  if (age >= 18) {
    alert(
      "Thank you, " +
        name +
        "! We'll be in touch by email, meanwhile have a lot of Chocolate! "
    );
  } else {
    alert("Sorry, " + name + "! We cannot be in touch. ");
  }
}

let button = document.querySelector("button");
button.addEventListener("click", buy);
