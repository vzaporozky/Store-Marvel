var slider = document.getElementById("myRange");
var output = document.getElementById("value");


output.innerHTML = slider.value;

slider.oninput= function(){
    output.innerHTML = this.value;
}

if (document.getElementById("myRange").value <= 0){
    document.querySelector('figur1').style.visibility = 'hidden';
}