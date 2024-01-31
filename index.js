function starts(){
    window.location.href = 'start.html'
}

document.getElementById('button-option').style.display = 'none';

function option(){
    document.getElementById('button-option').style.display = 'block';
    document.getElementById('body1').style.display = 'none';
}

function backs(){
    document.getElementById('button-option').style.display = 'none';
    document.getElementById('body1').style.display = 'block';
}