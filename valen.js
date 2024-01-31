// document.getElementById('yesButton').addEventListener("click", function(){
//     alert("SHEEESHHH SEE YOU TOMMOROW 2 OR 3 PM TOM!!!! MWUAHH");
// })

var b = document.getElementById('no')
b.addEventListener('click', change);

function change(){
    var i = Math.floor(Math.random()*300)+1;
    var j = Math.floor(Math.random()*500)+1;
    b.style.left = i+"px"
    b.style.top = j+"px"
}

function yess(){
    document.querySelector('.popup').style.display = 'block'
    document.querySelector('.popup-background').style.display = 'block'

}

function exit(){
    document.querySelector('.popup').style.display = 'none'
    document.querySelector('.popup-background').style.display = 'none'
    window.location.href = 'index.html'
} 