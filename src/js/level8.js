function search() {
    if (document.querySelector('input').value == 'пирог с ягодами' ||
        document.querySelector('input').value == 'рецепт пирога с ягодами') {
        document.querySelector('.container').style.display = 'none';
        document.querySelector('.container1').style.display = 'block';
    } else {
        document.querySelector('.container').style.display = 'none';
        document.querySelector('.container2').style.display = 'block';
    }
}