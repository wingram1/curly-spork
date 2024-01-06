const main = document.querySelector("#main");
const player = document.querySelector("#player");
const goal = document.querySelector("#goal");

const p = {
  x: 0,
  y: 0,
};

const speed = 4;

function handleMove(e) {
  console.log(e.key);

  switch (e.key) {
    case "w":
      p.y += speed;
      document.querySelector("#player").style.top = `${p.y}px`;
      break;
    case "a":
      p.x -= speed;
      document.querySelector("#player").style.left = `${p.x}px`;
      break;
    case "s":
      p.y += speed;
      document.querySelector("#player").style.top = `${p.y}px`;
      break;
    case "d":
      p.x += speed;
      document.querySelector("#player").style.left = `${p.x}px`;
      break;
    default:
      console.log("use wasd dumbass");
  }

  if (p.x == 448 && p.y == 448) {
    main.textContent = "COMPLETE\n\nGOOD JOB\n:)";
  }
}

document.addEventListener("keypress", handleMove);
