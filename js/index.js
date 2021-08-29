function input(e) {
    var text2 = document.getElementById("text2");
    text2.value = text2.value + e.value;
    translate2();
}

function del() {
    var text2 = document.getElementById("text2");
    text2.value = text2.value.substr(0, text2.value.length - 1);
    translate2();
}
function space() {
    var text2 = document.getElementById("text2");
    text2.value = text2.value+ " ";
    translate2();
}
function cle() {
    var text2 = document.getElementById("text2");
    text2.value = "";
    translate2();
}
function enter() {
    var text2 = document.getElementById("text2");
    text2.value = text2.value + "\n";
    translate2();
}
function load() {
    var array = new Array();

    while (array.length < 10) {
        var temp = Math.round(Math.random() * 9);
        if (!contain(array, temp)) {
            array.push(temp);
        }
    }
    for (i = 0; i < 10; i++) {
        var btn = document.getElementById("btn" + i);
        btn.value = array[i];
    }
}

function translate1(){
  document.getElementById('result').innerHTML =  document.getElementById('text').value;
}

function translate2(){
  document.getElementById('result2').innerHTML =  document.getElementById('text2').value;
}