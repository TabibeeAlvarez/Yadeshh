document.getElementById('q1').style.display = 'block';
document.getElementById('q2').style.display = 'none';
document.getElementById('q3').style.display = 'none';
document.getElementById('q4').style.display = 'none'; 
document.getElementById('q5').style.display = 'none';
document.getElementById('cong').style.display = 'none';

 let puntos = 0;
 const totalPoints = 0;

function show(q1){

    if(q1 === 'a1'){
        puntos++;
        document.getElementById('q1').style.display = 'none';
        document.getElementById('q2').style.display = 'block';
    }
    else{
        document.getElementById('q1').style.display = 'none';
        document.getElementById('q2').style.display = 'block';
    }
    document.getElementById('puntos').innerHTML = puntos;
}

function show2(q2){
    if(q2 === 'a1'){
        puntos++;
        document.getElementById('q2').style.display = 'none';
        document.getElementById('q3').style.display = 'block';
    }
    else{
        document.getElementById('q2').style.display = 'none';
        document.getElementById('q3').style.display = 'block';
    }
    document.getElementById('puntos').innerHTML = puntos;
}

function show3(q3){
    if(q3 === 'a3'){
        puntos++;
        document.getElementById('q3').style.display = 'none';
        document.getElementById('q4').style.display = 'block';
    }
    else{
        document.getElementById('q3').style.display = 'none';
        document.getElementById('q4').style.display = 'block';
    }
    document.getElementById('puntos').innerHTML = puntos;
}

function show4(q4){
    if(q4 === 'a2'){
        puntos++;
        document.getElementById('q4').style.display = 'none';
        document.getElementById('q5').style.display = 'block';
    }
    else{
        document.getElementById('q4').style.display = 'none';
        document.getElementById('q5').style.display = 'block';
    }
    document.getElementById('puntos').innerHTML = puntos;
}

function show5(q5){
    if(q5 === 'a1'){
        puntos++;
        document.getElementById('q5').style.display = 'none';
    }
    else{
        document.getElementById('q4').style.display = 'none';
    }

    if(puntos === 5){
        document.getElementById('cong').style.display = 'block';
        document.getElementById('total').innerHTML = puntos;
    }

    else{
        alert('Sorry you fail your score is ' + puntos + ' sad');
        window.location.href = 'start.html'
    }
    
    document.getElementById('puntos').innerHTML = puntos;
}

function back(){
    window.location.href = 'index.html'
}

function home(){
    window.location.href = 'index.html'
}