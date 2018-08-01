let canvas = document.getElementById('canvas');
let height = document.getElementById('inputHeight');
let width = document.getElementById('inputWidth');
let sizePicker = document.getElementById('sizePicker');
let color = document.getElementById('colorPicker');

sizePicker.onsubmit = function(event){
    event.preventDefault();
    create();
};

function create() {
    for (let i=0; i<height.value; i++){
        let row = canvas.insertRow(i);
        for (let j=0; j<width.value; j++){
            let cell = row.insertCell(j);
            cell.addEventListener('click', setColor);
        }
    }
}

function setColor () {
    this.setAttribute('style', `background-color: ${color.value}`);
}
