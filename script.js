const nameAnimation = document.querySelector('.name-animation');
const names = ['Sato', 'Satoshi', 'Steven', 'Steve'];
let currentIndex = 0;

function typeAndDelete() {
  const currentName = names[currentIndex];
  let i = 0;

  function type() {
    if (i < currentName.length) {
      nameAnimation.textContent += currentName.charAt(i);
      i++;
      setTimeout(type, 200);
    } else {
      setTimeout(deleteText, 2000);
    }
  }

  function deleteText() {
    if (nameAnimation.textContent.length > 0) {
      nameAnimation.textContent = nameAnimation.textContent.slice(0, -1);
      setTimeout(deleteText, 100);
    } else {
      currentIndex = (currentIndex + 1) % names.length;
      setTimeout(type, 1000);
    }
  }

  type();
}

typeAndDelete();
setInterval(typeAndDelete, 10000);

const sillyButton = document.querySelector('.silly-button');
let xButton;

sillyButton.addEventListener('click', () => {
  const message = document.createElement('div');
  message.classList.add('message');
  message.textContent = 'You caught me!';

  xButton = document.createElement('button');
  xButton.classList.add('x-button');
  xButton.textContent = 'X';
  xButton.addEventListener('click', () => {
    message.remove();
    xButton.remove();
  });

  document.body.appendChild(message);
  document.body.appendChild(xButton);
});

let currentX = 0;
let currentY = 0;
let directionX = 1;
let directionY = 1;

function moveSillyButton() {
  const button = document.querySelector('.silly-button');
  const buttonWidth = button.offsetWidth;
  const buttonHeight = button.offsetHeight;
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  currentX += directionX * 10;
  currentY += directionY * 10;

  if (currentX <= 0 || currentX >= windowWidth - buttonWidth - 2) {
    directionX *= -1;
  }

  if (currentY <= 0 || currentY >= windowHeight - buttonHeight) {
    directionY *= -1;
  }

  button.style.left = `${currentX}px`;
  button.style.top = `${currentY}px`;

  requestAnimationFrame(moveSillyButton);
}

moveSillyButton();

function redirectToDiscord() {
  if (confirm('Do you want to go to the Discord server?')) {
    window.location.href = 'https://discord.gg/6JsCA68HYC';
  }
}

function redirectToFacebook() {
  if (confirm('Do you want to go to my Facebook profile?')) {
    window.location.href = 'https://www.facebook.com/isdatsteve';
  }
}

function redirectToInstagram() {
  if (confirm('Do you want to go to my Instagram profile?')) {
    window.location.href = 'https://instagram.com/heartssforsatoshi';
  }
}