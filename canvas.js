const canvas = document.getElementById("videoCanvas");
let context = canvas.getContext("2d");
const btn = document.getElementById("takesc");
let imgArray;

let array = JSON.parse(localStorage.getItem("images"));

btn.addEventListener("click", () => {
  checkArray();
  //Checking the array for not delete the pictures inside of the localstorage
  drawImage();

  let dataURL = canvas.toDataURL("png");
  imgArray.push(dataURL);
  try {
    localStorage.setItem("images", JSON.stringify(imgArray));
  } catch (error) {
    console.log("Saving to storage failed " + error);
  }

  alert("Screenshot Taken");
});

function checkArray() {
  if (array.length > 0) {
    imgArray = array;
  } else {
    imgArray = [];
  }
}
function drawImage() {
  context.beginPath();
  context.moveTo(170, 80);
  context.closePath();
  context.stroke();
}
