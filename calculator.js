document.addEventListener('DOMContentLoaded', main)

function main () {
  
    // 1) Селектим дисплей (текстбокс) и присваиваем его переменной. Чтобы присвоить ему значение можно написать так: display.value = ...
    var display = document.getElementById('display');
    // 2) Селектим ВСЕ кнопки на экране с помощью document.getElementsByTagName (уточнить) и присваиваем их переменной
    // var buttons = ...
    
    // 3) С помощью цикла фор проходимся по всем кнопкам и присваиваем каждой (buttons[i]) слушатель события click
    // ...

    // 4) Внутри слушателя события добавляем значение кнопки в display.value

    // buttons[i].addEventListener('click', function(event){
    // })
}
