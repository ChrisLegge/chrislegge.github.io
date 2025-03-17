const canvas = document.getElementById("backgroundCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight * 0.98;

const middleX = canvas.width / 2;
const middleY = canvas.height / 2;
const timestep = 10;

function showSidebar(){
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'flex'
}

function hideSidebar(){
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'none'
}

function mainLoop(){
  ctx.clearRect(0,0,canvas.width, canvas.height);
  ctx.fillStyle = "rgba(212, 235, 248, 0.3)";
  ctx.beginPath();
  ctx.arc(middleX,middleY,800, 0, 2 * Math.PI);
  ctx.fill();
  for(var i = 0; i < numOfCycles; i++) {
      ctx.beginPath();
      ctx.arc(middleX + (backgroundCyclePos[i][1] * 1.25), middleY + (backgroundCyclePos[i][0] * 1.25), 400 * (1 - (i / numOfCycles)), 0, 2 * Math.PI);
      ctx.fill();
  }
}
