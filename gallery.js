
const imgArray = JSON.parse(localStorage.getItem("images"));
let row = document.getElementById('row')
let column = document.getElementById('col')
let thumbnail = document.getElementById('thumbnail')
let body = document.getElementById('body')
let count = 0


var modal = document.getElementById("myModal");


var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}

function CreateGallery() {
  for (let i = 0; i < imgArray.length; i++) {
    count++
    let image = document.createElement("img");
    image.id="myImg"
    image.onclick = function(){
      modal.style.display = "block";
      modalImg.src = this.src;
    }
    let column = document.createElement("div");
    column.className = "col-md-4"


    
    image.setAttribute("src",imgArray[i])
    image.setAttribute("width","300")
    image.setAttribute("height","200")

   
  
  
    column.appendChild(image)
    row.appendChild(column)

    if(count%3==0){
        row = document.createElement("div")
        row.className= "row"
        body.appendChild(row)
    }
    }
  }


CreateGallery();

