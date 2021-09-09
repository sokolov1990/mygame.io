function proverka() {
    let otvet1 = document.querySelector('#ot1');
    let otvet2 = document.querySelector('#ot2');
    let otvet3 = document.querySelector('#ot3');
    let otvet4 = document.querySelector('#ot4');
    let otvet5 = document.querySelector('#ot5');
    let otvet6 = document.querySelector('#ot6');

    if (otvet1.checked || otvet3.checked || otvet4.checked) {
        document.querySelector('.container2').style.display = "none";
        document.querySelector('.otvet2').style.display = "block";
    } else if (otvet2.checked && otvet5.checked && otvet6.checked) {
        document.querySelector('.container2').style.display = "none";
        document.querySelector('.otvet1').style.display = "block";
    }
}