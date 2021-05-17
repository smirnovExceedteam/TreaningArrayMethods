"use strict"


let mainArray = [1,2,3,4,5,6,7,8,9,10]
document.write("исходный массив- " + mainArray +  "</br>"+  "</br>")

let temp_array = mainArray.slice()                    // копирование массива с помощью slice()
   
temp_array.splice(temp_array.length/2,5)            // удаление последних 5 элементов массива с помощью splice()

temp_array = mainArray.slice()
alert(temp_array.map(a => a*2))                     // используем map для умножения всех элементов на 2

for(let item of mainArray) document.write(item)     // перебираем массив с помощью for

temp_array = mainArray.slice()
temp_array.forEach(a => alert(a*3))                 // выводим все элементы массива, умноженые на 3 с помощью forEach()

temp_array = mainArray.slice()
alert(temp_array.filter(a => a%2 == 0))             // выводим все четные элементы с помощью filter()

temp_array = mainArray.slice()
alert(temp_array.reduce((a,b) => a+b))              // находим сумму элементов массива с помощью reduce()

temp_array = [8,5,2,1,5,7,1,38,9,3,1,2]             // сортируем массив с помощью sort()
alert(temp_array.sort((a,b) => a-b))                    

temp_array = mainArray.slice()
alert(temp_array.some(a => a%2 == 0))               //проверяем есть ли в массиве четные элементы с помощью some()

temp_array = mainArray.slice()
alert(temp_array.every(a => a%2 == 0))              // проверяем все ли элементы массива четные
