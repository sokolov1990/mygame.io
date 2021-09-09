// Определяем глобальные переменные для холста и контекста 
var canvas;
var context;

// Отслеживаем текущую позицию значка
var x = 0;
var y = 0;

// Скорость перемещения значка
var dx = 0;
var dy = 0;

window.onload = function() {
    // Подготавливаем холст
    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");

    // Рисуем фон лабиринта
    drawMaze("/src/img/maze.png", 480, 270);

    // При нажатии клавиши вызываем функцию processKey()
    window.onkeydown = processKey;
};


// Таймер, включающий и отключающий новый лабиринт в любое время
var timer;

function drawMaze(mazeFile, startingX, startingY) {
    // Остановить таймер (если запущен)
    clearTimeout(timer);

    // Остановить перемещение значка
    dx = 0;
    dy = 0;

    // Загружаем изображение лабиринта
    var imgMaze = new Image();
    imgMaze.onload = function() {
        // Изменяем размер холста в соответствии 
        // с размером изображения лабиринта
        canvas.width = imgMaze.width;
        canvas.height = imgMaze.height;

        // Рисуем лабиринт
        context.drawImage(imgMaze, 0, 0);

        // Рисуем значок
        x = startingX;
        y = startingY;

        var imgFace = document.getElementById("face");
        context.drawImage(imgFace, x, y);
        context.stroke();

        // Рисуем следующий кадр через 10 миллисекунд
        timer = setTimeout("drawFrame()", 10);
    };
    imgMaze.src = mazeFile;
}


function processKey(e) {
    // Если значок находится в движении, останавливаем его
    dx = 0;
    dy = 0;

    // Если нажата стрелка вверх, начинаем двигаться вверх
    if (e.keyCode == 38) {
        dy = -1;
    }

    // Если нажата стрелка вниз, начинаем двигаться вниз
    if (e.keyCode == 40) {
        dy = 1;
    }

    // Если нажата стрелка влево, начинаем двигаться влево
    if (e.keyCode == 37) {
        dx = -1;
    }

    // Если нажата стрелка вправо, начинаем двигаться вправо
    if (e.keyCode == 39) {
        dx = 1;
    }
}

function up() {
    dx = 0;
    dy = 0;

    dy = -1;
}

function down() {
    dx = 0;
    dy = 0;

    dy = 1;
}

function left() {

    dx = 0;
    dy = 0;
    dx = -1;
}

function right() {
    dx = 0;
    dy = 0;

    dx = 1;
}





function checkForCollision() {
    // Перебираем все пикселы и инвертируем их цвет
    var imgData = context.getImageData(x - 1, y - 1, 20 + 2, 20 + 2);
    var pixels = imgData.data;

    // Получаем данные для одного пиксела
    for (var i = 0; n = pixels.length, i < n; i += 4) {
        var red = pixels[i];
        var green = pixels[i + 1];
        var blue = pixels[i + 2];
        var alpha = pixels[i + 3];

        // Смотрим на наличие черного цвета стены, что указывает на столкновение
        if (red == 0 && green == 0 && blue == 0) {
            return true;
        }
        // Смотрим на наличие серого цвета краев, что указывает на столкновение
        if (red == 169 && green == 169 && blue == 169) {
            return true;
        }
    }
    // Столкновения не было
    return false;
}


function drawFrame() {
    // Обновляем кадр только если значок движется
    if (dx != 0 || dy != 0) {
        // Закрашиваем перемещение значка желтым цветом
        context.beginPath();
        context.fillStyle = "yellow";
        context.rect(x, y, 21, 21);
        context.fill()


        // Обновляем координаты значка, создавая перемещение
        x += dx;
        y += dy;

        // Проверка столкновения со стенками лабиринта
        // (вызывается доп. функция)
        if (checkForCollision()) {
            x -= dx;
            y -= dy;
            dx = 0;
            dy = 0;
        }

        // Перерисовываем значок
        var imgFace = document.getElementById("face");
        context.drawImage(imgFace, x, y);

        // Проверяем дошел ли пользователь до финиша.
        // Если дошел, то выводим сообщение
        if (x > (canvas.width - 500)) {
            document.querySelector('.container').style.display = 'none';
            document.querySelector('canvas').style.display = 'none';
            document.querySelector('.result').style.display = 'block';
        }
    }

    // Рисуем следующий кадр через 10 миллисекунд
    timer = setTimeout("drawFrame()", 10);
}