function variant1() {


    if (document.getElementById('vopros1').style.display == "block") {
        document.getElementById('vopros1').style.display = "none";
        document.getElementById('wrong1').style.display = "block";
    }
}

function variant2() {


    if (document.getElementById('vopros1').style.display == "block") {
        document.getElementById('vopros1').style.display = "none";
        document.getElementById('wrong2').style.display = "block";
    }
}

function variant3() {


    if (document.getElementById('vopros1').style.display == "block") {
        document.getElementById('vopros1').style.display = "none";
        document.getElementById('wrong3').style.display = "block";
    }
}

function restart1() {


    if (document.getElementById('wrong1').style.display == "block") {
        document.getElementById('wrong1').style.display = "none";
        document.getElementById('vopros1').style.display = "block";
    }
}

function restart2() {


    if (document.getElementById('wrong2').style.display == "block") {
        document.getElementById('wrong2').style.display = "none";
        document.getElementById('vopros1').style.display = "block";
    }
}

function restart3() {


    if (document.getElementById('wrong3').style.display == "block") {
        document.getElementById('wrong3').style.display = "none";
        document.getElementById('vopros1').style.display = "block";
    }
}

function restart4() {


    if (document.getElementById('wrong4').style.display == "block") {
        document.getElementById('wrong4').style.display = "none";
        document.getElementById('vopros2').style.display = "block";
    }
}

function inform() {


    if (document.getElementById('vopros1').style.display == "block") {
        document.getElementById('vopros1').style.display = "none";
        document.getElementById('right1').style.display = "block";
    }
}

function next() {


    if (document.getElementById('right1').style.display == "block") {
        document.getElementById('right1').style.display = "none";
        document.getElementById('vopros2').style.display = "block";


    }
}


function password() {
    var text1 = document.querySelector('.password').value.replace(/[^\d]/g, '')
    var text2 = document.querySelector('.password').value
    var text3 = document.querySelector('.password').value.replace(/(?![A-Z])./g, '')
    if ((text1.length >= 1) && (text2.length > 7) && (text3.length >= 1)) {
        document.getElementById('vopros2').style.display = "none";
        document.getElementById('right2').style.display = "block";


    } else {
        document.getElementById('vopros2').style.display = "none";
        document.getElementById('wrong4').style.display = "block";
        document.querySelector('.password').value = "";
    }
}