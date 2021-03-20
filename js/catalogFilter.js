function figur(){
    var figurs = document.getElementById('figur');
    
    if (figurs.checked){
        document.getElementById('figur1').style.display = 'block';
        document.getElementById('figur2').style.display = 'block';
        document.getElementById('figur3').style.display = 'block';
    }else{
        document.getElementById('figur1').style.display = 'none';
        document.getElementById('figur2').style.display = 'none';
        document.getElementById('figur3').style.display = 'none';
    }
}
function toy(){
    var toys = document.getElementById('toy');
    if (toys.checked){
        document.getElementById('toy1').style.display = 'block';
        document.getElementById('toy2').style.display = 'block';
        document.getElementById('toy3').style.display = 'block';
    }else{
        document.getElementById('toy1').style.display = 'none';
        document.getElementById('toy2').style.display = 'none';
        document.getElementById('toy3').style.display = 'none';

    }
}
function cosplay(){
    var cosplays = document.getElementById('cosplay');
    if (cosplays.checked){
        document.getElementById('cosplay1').style.display = 'block';
        document.getElementById('cosplay2').style.display = 'block';
        document.getElementById('cosplay3').style.display = 'block';
    }else{
        document.getElementById('cosplay1').style.display = 'none';
        document.getElementById('cosplay2').style.display = 'none';
        document.getElementById('cosplay3').style.display = 'none';

    }
}
function purse(){
    var purses = document.getElementById('purse');
    if (purses.checked){
        document.getElementById('purse1').style.display = 'block';
        document.getElementById('purse2').style.display = 'block';
        document.getElementById('purse3').style.display = 'block';
        document.getElementById('purse4').style.display = 'block';
        document.getElementById('purse5').style.display = 'block';
        document.getElementById('footer').style.display = 'none';
        document.getElementById('footer2').style.display = 'flex';
    }else{
        document.getElementById('purse1').style.display = 'none';
        document.getElementById('purse2').style.display = 'none';
        document.getElementById('purse3').style.display = 'none';
        document.getElementById('purse4').style.display = 'none';
        document.getElementById('purse5').style.display = 'none';
        document.getElementById('footer').style.display = 'block';
        document.getElementById('footer2').style.display = 'none';
    }
}

function none(){
    var figurs = document.getElementById('figur');
    var toys = document.getElementById('toy');
    var cosplays = document.getElementById('cosplay');
    var purses = document.getElementById('purse');

    if(cosplays.unchecked || purses.checked){
        document.getElementById('footer').style.display = 'none';
        document.getElementById('footer2').style.display = 'flex';
    }
    else{
        document.getElementById('footer').style.display = 'block';
        document.getElementById('footer2').style.display = 'none';
    }
}
