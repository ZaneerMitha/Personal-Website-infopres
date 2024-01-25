function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
  }

const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon.png") {
    myImage.setAttribute("src", "images/ZMLogo.png");
  } else {
    myImage.setAttribute("src", "images/ZMLogoWhite.png");
  }
};

document.querySelector("html").addEventListener("click", () => {
    alert("Ouch! Stop poking me!");
  });

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Zaneer is cool, ${myName}`;
    }
  }

  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Zaneer is cool, ${storedName}`;
  }

  myButton.onclick = () => {
    setUserName();
  };