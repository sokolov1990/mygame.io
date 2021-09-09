const zone1 = document.querySelector('.zone-1');
const zone2 = document.querySelector('.zone-2');
const zone3 = document.querySelector('.zone-3');
const zone4 = document.querySelector('.zone-4');
const zone5 = document.querySelector('.zone-5');
const zone6 = document.querySelector('.zone-6');
const zone7 = document.querySelector('.zone-7');
const zone8 = document.querySelector('.zone-8');
const zone9 = document.querySelector('.zone-9');
const zone10 = document.querySelector('.zone-10');
const zone11 = document.querySelector('.zone-11');
const zone12 = document.querySelector('.zone-12');
const face1 = document.querySelector('#face');
const face2 = document.querySelector('#face1');
const face3 = document.querySelector('#face2');
const face4 = document.querySelector('#face3');
const face5 = document.querySelector('#face4');
const face6 = document.querySelector('#face5');
const face7 = document.querySelector('#face6');
const face8 = document.querySelector('#face7');


zone1.ondragover = allowDrop;
zone2.ondragover = allowDrop;
zone3.ondragover = allowDrop;
zone4.ondragover = allowDrop;
zone5.ondragover = allowDrop;
zone6.ondragover = allowDrop;
zone7.ondragover = allowDrop;
zone8.ondragover = allowDrop;
zone9.ondragover = allowDrop;
zone10.ondragover = allowDrop;
zone11.ondragover = allowDrop;
zone12.ondragover = allowDrop;

function allowDrop(event) {
    event.preventDefault();
}

face1.ondragstart = drag;
face2.ondragstart = drag;
face3.ondragstart = drag;
face4.ondragstart = drag;
face5.ondragstart = drag;
face6.ondragstart = drag;
face7.ondragstart = drag;
face8.ondragstart = drag;


function drag(event) {
    event.dataTransfer.setData('id', event.target.id);

}


zone1.ondrop = drop;
zone2.ondrop = drop;
zone3.ondrop = drop;
zone4.ondrop = drop;
zone5.ondrop = drop;
zone6.ondrop = drop;
zone7.ondrop = drop;
zone8.ondrop = drop;
zone9.ondrop = drop;
zone10.ondrop = drop;
zone11.ondrop = drop;
zone12.ondrop = drop;

function drop(event) {
    let itemId = event.dataTransfer.getData('id');
    event.target.append(document.getElementById(itemId));

}



function proverka() {
    var result1 = document.getElementsByClassName("zone-1")[0].innerText;
    var result2 = document.getElementsByClassName("zone-3")[0].innerText;
    var result3 = document.getElementsByClassName("zone-5")[0].innerText;
    var result4 = document.getElementsByClassName("zone-7")[0].innerText;
    if (result1 == 'Привет!' && result3 == 'Какое домашнее задание на завтра?' &&
        result2 == 'Скажи, пожалуйста' && result4 == 'Спасибо!') {
        document.querySelector('.container').style.display = "none";
        document.querySelector('.otvet1').style.display = "block";

    } else {
        document.querySelector('.container').style.display = "none";
        document.querySelector('.otvet2').style.display = "block";

    }
}