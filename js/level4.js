document.addEventListener('DOMContentLoaded', (event) => {

    function handleDragStart(e) {
        this.style.opacity = '0.4';

        dragSrcEl = this;

        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/html', this.innerHTML);
    }

    function handleDragEnd(e) {
        this.style.opacity = '1';

        items.forEach(function(item) {
            item.classList.remove('over');
        });
    }

    function handleDragOver(e) {
        if (e.preventDefault) {
            e.preventDefault();
        }

        return false;
    }

    function handleDragEnter(e) {
        this.classList.add('over');
    }

    function handleDragLeave(e) {
        this.classList.remove('over');
    }

    function handleDrop(e) {
        e.stopPropagation();

        if (dragSrcEl !== this) {
            dragSrcEl.innerHTML = this.innerHTML;
            this.innerHTML = e.dataTransfer.getData('text/html');
        }

        return false;
    }

    let items = document.querySelectorAll('.container .box');
    items.forEach(function(item) {
        item.addEventListener('dragstart', handleDragStart);
        item.addEventListener('dragover', handleDragOver);
        item.addEventListener('dragenter', handleDragEnter);
        item.addEventListener('dragleave', handleDragLeave);
        item.addEventListener('dragend', handleDragEnd);
        item.addEventListener('drop', handleDrop);
    });
});


function proverka() {
    var result1 = document.querySelector('#box1').innerText;
    var result2 = document.querySelector('#box2').innerText;
    var result3 = document.querySelector('#box3').innerText;
    var result4 = document.querySelector('#box4').innerText;
    if (result1 == 'Привет!' && result3 == 'Какое домашнее задание на завтра?' &&
        result2 == 'Скажи, пожалуйста' && result4 == 'Спасибо!') {
        document.querySelector('.container').style.display = "none";
        document.querySelector('.otvet1').style.display = "block";

    }
      else if (result1 == 'Привет!' && result3 == 'Скажи, пожалуйста' &&
        result2 == 'Какое домашнее задание на завтра?' && result4 == 'Спасибо!') {
        document.querySelector('.container').style.display = "none";
        document.querySelector('.otvet1').style.display = "block";
      }
    else {
        document.querySelector('.container').style.display = "none";
        document.querySelector('.otvet2').style.display = "block";

    }
}
