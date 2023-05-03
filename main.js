let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,];
let reset = document.querySelector('.reset');
let screen = document.querySelector('.screen');

reset.addEventListener('click', () => shufle(arr));

function shufle(arr){
    let newArr = arr.map(item => [Math.random(), item]);
    newArr.sort();
    showItem(newArr);
}

function showItem(newArr){
    screen.innerHTML = `
    <div class="table">
        <div class="table__data">${newArr[0][1]}</div>
        <div class="table__data">${newArr[1][1]}</div>
        <div class="table__data">${newArr[2][1]}</div>
        <div class="table__data">${newArr[3][1]}</div>
        <div class="table__data">${newArr[4][1]}</div>
    </div>
    <div class="table">
        <div class="table__data">${newArr[5][1]}</div>
        <div class="table__data">${newArr[6][1]}</div>
        <div class="table__data">${newArr[7][1]}</div>
        <div class="table__data">${newArr[8][1]}</div>
        <div class="table__data">${newArr[9][1]}</div>
    </div>
    <div class="table">
        <div class="table__data">${newArr[10][1]}</div>
        <div class="table__data">${newArr[11][1]}</div>
        <div class="table__data">${newArr[12][1]}</div>
        <div class="table__data">${newArr[13][1]}</div>
        <div class="table__data">${newArr[14][1]}</div>
    </div>
    <div class="table">
        <div class="table__data">${newArr[15][1]}</div>
        <div class="table__data">${newArr[16][1]}</div>
        <div class="table__data">${newArr[17][1]}</div>
        <div class="table__data">${newArr[18][1]}</div>
        <div class="table__data">${newArr[19][1]}</div>
    </div>
    <div class="table">
        <div class="table__data">${newArr[20][1]}</div>
        <div class="table__data">${newArr[21][1]}</div>
        <div class="table__data">${newArr[22][1]}</div>
        <div class="table__data">${newArr[23][1]}</div>
        <div class="table__data">${newArr[24][1]}</div>
    </div>
    `
}



