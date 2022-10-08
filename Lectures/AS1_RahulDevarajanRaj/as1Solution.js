//Q1
let p1Score = 0;
let p2Score = 0;
var targetScore = 3;

document.getElementById("playto").addEventListener("change",changeFinal)
document.getElementById("p1Button").addEventListener("click",changeP1Score)
document.getElementById("p2Button").addEventListener("click",changeP2Score)
document.getElementById("reset").addEventListener("click",beginNewGame)

function changeFinal()
{
 targetScore = document.getElementById("playto").value;
}


function disableButtons(val){
    document.getElementById("p1Button").disabled = val
    document.getElementById("p2Button").disabled = val
}

function changeP1Score(){
    p1Score++;
    document.getElementById("p1Display").innerText = p1Score;

    if(p1Score==targetScore)
    {
        document.getElementById("p1Display").style.color = "green"
        document.getElementById("p2Display").style.color = "red"
        disableButtons(true)
    }

}

function changeP2Score(){
    p2Score++;
    document.getElementById("p2Display").innerText = p2Score;

    if(p2Score==targetScore)
    {
        document.getElementById("p1Display").style.color = "red"
        document.getElementById("p2Display").style.color = "green"
        disableButtons(true)
    }
}

function beginNewGame(){
    p1Score = 0;
    p2Score = 0;
    document.getElementById("p1Display").innerText = p1Score;
    document.getElementById("p2Display").innerText = p2Score;
    document.getElementById("p1Display").style.color = "black"
    document.getElementById("p2Display").style.color = "black"
    disableButtons(false)
}

//Q2


document.getElementById("addbtn").addEventListener("click",addItem)
document.getElementById("removebtn").addEventListener("click",removeItem)
document.getElementById("minutes").addEventListener("blur",calcAndDisplay)

function addItem(){
    let item = document.getElementById("item").value;
    if(item=="")
    {
        alert("OOPS!!Please enter an item")
    }
    else
    
    {
        let select = document.getElementById("selectedItems");
        let options = select.options;
        let flag = true;
        for(let i=0;i<options.length;i++)
        {
            if(options[i].value==item)
            {
                alert("OOPS!!Item already present")
                flag = false;
                break;
            }
        }
        if(flag)
        {
            let option = document.createElement("option");
            option.value = item;
            option.innerText = item;
            select.add(option);
        }

    }

}


function removeItem(){
    let item = document.getElementById("selectedItems").options;
    if(item.length==0)
    {
        alert("OOPS!!There are no items to delete")
    }
    else
    {
        document.getElementById("selectedItems").remove(document.getElementById("selectedItems").selectedIndex)
    }
}

function calcAndDisplay(){
    let minutes = document.getElementById("minutes").value;

    let hours   = Math.floor(minutes/60);
    let remainingMinutes = minutes%60;

    let totalAmount = hours*40 + remainingMinutes;
    
    let selectedItems = document.getElementById("selectedItems").options;
    totalAmount = totalAmount*selectedItems.length;

    document.getElementById("amount").value = totalAmount;

}


//Q3
var quotes = []

readTextFile("InspirationalQuotes.txt");
displayQuotes();
setInterval(displayQuotes, 5000);

function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                quotes = allText.split("\n");
            }
        }
    }
    rawFile.send(null);
}
function displayQuotes(){
    document.getElementById("displayQuotes").innerText = ""
    let q1,q2,q3,q4;
    do{
        q1 = Math.floor(Math.random()*quotes.length);
        q2 = Math.floor(Math.random()*quotes.length);
        q3 = Math.floor(Math.random()*quotes.length);
        q4 = Math.floor(Math.random()*quotes.length);
    }while(q1==q2 || q1==q3 || q1==q4 || q2==q3 || q2==q4 || q3==q4)

    document.getElementById("displayQuotes").innerText = quotes[q1]+"\n"+quotes[q2]+"\n"+quotes[q3]+"\n"+quotes[q4];
    
}








//Q4
var imgCount = 0;

let imageArray = new Array();
for (let i = 0; i < 14; i++) {
    imageArray[i] = new Image();
    imageArray[i].src = "images/img" + i + ".png";
}


function animateImages() {
    let img = document.getElementById("animateImage");
    
    img.src = imageArray[imgCount].src;
    imgCount++;
    if (imgCount == 14) {
        imgCount = 0;
    }   

}

setInterval(animateImages, 150);

//Q5

//read the images inside the div with id slides and store them in an array
let slideCount=0
let slides = document.getElementById("slides").getElementsByTagName("img");
function slideShow(){
    document.getElementById("slide").src=slides[slideCount].src;
    document.getElementById("caption").innerText=slides[slideCount].alt;
    slideCount++;
    if(slideCount==slides.length)
    {
        slideCount=0;
    }
}
setInterval(slideShow,2000);



