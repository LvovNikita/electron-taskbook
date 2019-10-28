$ = require('./node_modules/jquery/dist/jquery.js');

$(() => {
  handlebars = require('handlebars');
  // MODEL
  var tasks = {
    "tasks": [
      {
        "id": 1,
        "title": "Сумма чисел",
        "text": "Даны два числа a и b, которые могут быть как положительными, так и отрицательными. Найдите и верните сумму всех чисел между ними, включая a и b. Если числа равны, верните a или b. Обратите внимание, что a и b могут быть переданы в функцию не в порядке возрастания.",
        "example": "get_sum(1, 0) == 1   // 1 + 0 = 1 <br> get_sum(1, 2) == 3   // 1 + 2 = 3 <br> get_sum(0, 1) == 1   // 0 + 1 = 1 <br> get_sum(1, 1) == 1   // Так как a = b <br> get_sum(-1, 0) == –1 // –1 + 0 = -1 <br> get_sum(-1, 2) == 2  // –1 + 0 + 1 + 2 = 2 <br>",
        "js_answer": "var a = 10, b = 1;\nif (a > b) {[a, b] = [b, a]};\nfor (sum = 0; a <= b; a++)\n{sum += a}; console.log(sum);</pre>",
      },
      {
        "id": 2,
        "title": "Валидный pin-код",
        "text": "ATM (банковский автомат) позволяет ввести 4- или 6-символьный PIN код, который может содержать только 4 цифры. Напишите функцию, которая возвращает True, если PIN-код валидный и False, если нет.",
        "example": "validate_pin('1234') == True <br> validate_pin('12345') == False <br> validate_pin('a234') == False <br>",
        "js_answer": "\/\/ npm install readline-sync const readline = require('readline-sync'); pin = readline.question('pin: '); validate_pin = pin => { if ([4, 6].includes(pin.length) && pin.replace(/[^0-9]/g, '').length == 4) {return true}; return false; } console.log(validate_pin(pin));</pre>"
      },
      {
        "id": 3,
        "title": "Составить наибольшее",
        "text": "Создайте функцию, которая принимает любое положительное число в качестве аргумента и возвращает наибольшее число, которое можно составить из этих же цифр.",
        "example": "вод: 21445 Вывод: 54421 <br> Ввод: 145263 Вывод: 654321 <br> Ввод: 1254859723 Вывод: 9875543221 <br>",
        "js_answer": "a = 21445; a = Array.from(a + '').sort().reverse().join(''); console.log(a);"
      },
      {
        "id": 4,
        "title": "Сумма двух наименьших",
        "text": "Создайте функцию, которая возвращает сумму двух наименьших чисел из массива, минимальной длины 4 числа.",
        "example": "Ввод: [19, 5, 42, 2, 77] Вывод: 7. <br> Ввод: [10, 343445353, 3453445, 3453545353453] Вывод: 3453455 <br>",
        "js_answer": "a = [19, 5, 42, 2, 77]; console.log(Math.max(...a) + Math.min(...a));"
      },
      {
        "id": 5,
        "title": "Тролли атакуют!",
        "text": "Тролли атаковали форум! Чтобы нейтрализовать опасность, удалите все гласные буквы из комментариев троллей (напишите функцию, которая принимает строку и возвращает её без гласных букв).",
        "example": "Ввод: \"This website is for losers LOL!\" Вывод: \"Ths wbst s fr lsrs LL!\"",
        "js_answer": "a = \"This website is for losers LOL!\"; console.log(a.replace(/[a,e,i,o,u,y]/ig, \"\"));"
      },
      {
        "id": 6,
        "title": "Музей невероятно глупых вещей",
        "text": "Музей невероятно глупых вещей хочет избавиться от некоторых экспонатов. Мириам оценила все экспонаты и будет избавляться от тех, у которых самый низкий рейтинг. Если в массиве находится несколько элементов с низким рейтингом, нужно удалить тот, который находится ближе к началу массива. Сортировать массив нельзя. Порядок оставшихся элементов не изменяется.",
        "example": "remove_smallest([1,2,3,4,5]) = [2,3,4,5] <br> remove_smallest([5,3,2,1,4]) = [5,3,2,4] <br> remove_smallest([2,2,1,2,1]) = [2,2,2,1] <br>",
        "js_answer": ">a = [5,1,3,2,1,4]; remove_smallest = a => { a.splice(a.indexOf(Math.min(...a)), 1); return a; } console.log(remove_smallest(a));"
      },
      {
        "id": 7,
        "title": "Заснули в автобусе",
        "text": "По городу едет автобус и забирает и высаживает людей на остановках. У вас есть массив с массивами внутри, каждый из которых содержит два числа: первое — число пассажиров, зашедших в автобус на остановке, второе — число пассажиров, которые высадились на остановке. Ваша задача — вернуть число людей, которые заснули в автобусе и остались в нём после последней остановки (последнего массива) :D",
        "example": "[[10,0], [3,5], [5,7], [6, 10]] == 2",
        "js_answer": "a = [[10,0], [3,5], [5,7], [6, 10]]; res = 0; for (elem in a) {res = res + a[elem][0] - a[elem][1]}; console.log(res);"
      },
      {
        "id": 8,
        "title": "Сортировка слов по номерам",
        "text": "Ваша задача — отсортировать слова в предложении. Каждое слово в предложении содержит в себе цифру. Эта цифра указывает позицию слова в результирующей строке. Слова могут быть пронумерованы цифрами от 1 до 9. Таким образом, слово, в котором встречается 1 будет первым.",
        "example": "Ввод: \"is2 Thi1s T4est 3a\" Вывод: \"Thi1s is2 3a T4est\"<br>",
        "js_answer": "a = \"is2 Thi1s T4est 3a\"; regExp = /[^0-9]/g; console.log(a.split(\" \").sort((x, y) => { return x.replace(regExp, '') - y.replace(regExp, '') }).join(' '));"
      },
      {
        "id": 9,
        "title": "Квадратный корень",
        "text": "Напишите функцию, которая проверит, можно ли извлечь из числа квадратный корень. Использовать встроенные функции (sqrt) нельзя! Верните true или false.",
        "example": "is_square (-1) == false <br> is_square (0) == true <br> is_square (3) == false <br> is_square (4) == true <br> is_square (25) == true <br> is_square (26) == false <br>",
        "js_answer": ""
      },
      {
        "id": 10,
        "title": "10. Наименьшее число",
        "text": "Найдите наименьшее целое число в массиве, не используя стандартные методы и функции.",
        "example": "  [34, 15, 88, 2] == 2 <br> [34, -345, -1, 100] == -345 <br>",
        "js_answer": "a = [34, 15, 88, 2, 34, -345, -1, 100]; min = Infinity; for (elem in a) {a[elem] < min ? min = a[elem] : 0}; console.log(min);"
      },
      {
        "id": 11,
        "title": "Самые длинные строки",
        "text": "У вас есть массив строк и число k. Ваша задача склеить k самых длинных слов в одну строку и вывести результат.",
        "example": "longest_consec(['zone', 'abigail', 'theta', 'form', 'libe', 'zas', 'theta'], 2) == 'abigailtheta' <br>",
        "js_answer": "a = ['zone', 'abigail', 'theta', 'form', 'libe', 'zas', 'theta'] longest_consec = (a, n) => {a = a.sort((x, y) => (y.length - x.length)).splice(0,n).join(''); return a; } console.log(longest_consec(a, 3));"
      },
      {
        "id": 12,
        "title": "Иголка в стоге сена",
        "text": "Напишите функцию findNeedle(), которая принимает массив, наполненный «мусорными» строками, но помимо них содержит строку «needle». Ваша функция должна вернуть сообщение «иголка найдена в позиции» + позиция слова «needle» в массиве.",
        "example": "find_needle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk']) == 5 <br>",
        "js_answer": "a = ['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk']; console.log('Иголка найдена в позиции', a.indexOf('needle') + 1);"
      },
      {
        "id": 13,
        "title": "A-Aa-Aaa",
        "text": "Написать функцию accum, которая работает как в примере ниже.",
        "example": "accum('abcd') == 'A-Bb-Ccc-Dddd' <br> accum('RqaEzty') == 'R-Qq-Aaa-Eeee-Zzzzzz-Tttttt-Yyyyyyy' <br> accum('cwAt') == 'C-Ww-Aaa-Tttt' <br>",
        "js_answer": "a = 'RqaEzty' accum = a => { res = ''; for (i = 0; i < a.length; i++) {current_char = a[i].repeat(i + 1).toLowerCase(); res += current_char.charAt(0).toUpperCase() + current_char.slice(1)  + '-'; } res = res.slice(0, -1); return res; } console.log(accum(a));"
      },
      {
        "id": 14,
        "title": "Двоичное в десятичное",
        "text": "Дан массива нулей и единиц, составляющих двоичное число. Конвертировать их в десятичную систему счисления.",
        "example": "[0, 0, 0, 1] == 1 <br>[0, 0, 1, 0] == 2 <br>[0, 1, 0, 1] == 5 <br>[0, 1, 1, 0] == 6 <br>[1, 0, 0, 1] == 9 <br>[1, 0, 1, 1] == 11 <br>[1, 1, 1, 1] == 15 <br>",
        "js_answer": "a = [1, 0, 1, 0] bin = a.reduce((res, current, index) => { return res + Math.pow(current * 2, current != 0 ? a.length - index - 1 : 1) }, 0) console.log(bin);"
      },
      {
        "id": 15,
        "title": "Разделить поровну",
        "text": "У вас есть массив целых чисел. Ваша задача — найти индекс N, где сумма элементов слева от N равна сумме элементов справа от N. Если такого индекса нет, вернуть -1.",
        "example": "{1,2,3,4,3,2,1} == 3 // 1 + 2 + 3 = 3 + 2 + 1 <br> {1,100,50,-51,1,1} == 1 // 1 = 50 + (-51) + 1 + 1 <br>",
        "js_answer": "a = [1,2,3,4,3,2,1]; reducer = (sum, current) => (sum + current); find_center = (a) => { for (i = 1; i < Math.ceil(a.length / 2); i++) { if (a.slice(0, i).reduce(reducer) == a.slice(i+1).reduce(reducer)) {return i}} return -1; } console.log(find_center(a));"
      },
      {
        "id": 16,
        "title": "",
        "text": "",
        "example": "",
        "js_answer": ""
      },
      {
        "id": 17,
        "title": "",
        "text": "",
        "example": "",
        "js_answer": ""
      },
      {
        "id": 18,
        "title": "",
        "text": "",
        "example": "",
        "js_answer": ""
      },
      {
        "id": 19,
        "title": "",
        "text": "",
        "example": "",
        "js_answer": ""
      },
      {
        "id": 20,
        "title": "",
        "text": "",
        "example": "",
        "js_answer": ""
      },
      {
        "id": 21,
        "title": "",
        "text": "",
        "example": "",
        "js_answer": ""
      },
      {
        "id": 22,
        "title": "",
        "text": "",
        "example": "",
        "js_answer": ""
      },
      {
        "id": 23,
        "title": "",
        "text": "",
        "example": "",
        "js_answer": ""
      },
      {
        "id": 24,
        "title": "",
        "text": "",
        "example": "",
        "js_answer": ""
      },
      {
        "id": 25,
        "title": "",
        "text": "",
        "example": "",
        "js_answer": ""
      },
      {
        "id": 26,
        "title": "",
        "text": "",
        "example": "",
        "js_answer": ""
      },
      {
        "id": 27,
        "title": "",
        "text": "",
        "example": "",
        "js_answer": ""
      },
      {
        "id": 28,
        "title": "",
        "text": "",
        "example": "",
        "js_answer": ""
      },
      {
        "id": 29,
        "title": "",
        "text": "",
        "example": "",
        "js_answer": ""
      },
      {
        "id": 30,
        "title": "",
        "text": "",
        "example": "",
        "js_answer": ""
      },
      {
        "id": 31,
        "title": "",
        "text": "",
        "example": "",
        "js_answer": ""
      },
      {
        "id": 32,
        "title": "",
        "text": "",
        "example": "",
        "js_answer": ""
      },
      {
        "id": 33,
        "title": "",
        "text": "",
        "example": "",
        "js_answer": ""
      },
      {
        "id": 34,
        "title": "",
        "text": "",
        "example": "",
        "js_answer": ""
      },
      {
        "id": 35,
        "title": "",
        "text": "",
        "example": "",
        "js_answer": ""
      },
      {
        "id": 36,
        "title": "",
        "text": "",
        "example": "",
        "js_answer": ""
      },
      {
        "id": 37,
        "title": "",
        "text": "",
        "example": "",
        "js_answer": ""
      },
      {
        "id": 38,
        "title": "",
        "text": "",
        "example": "",
        "js_answer": ""
      },
      {
        "id": 39,
        "title": "",
        "text": "",
        "example": "",
        "js_answer": ""
      },
      {
        "id": 40,
        "title": "",
        "text": "",
        "example": "",
        "js_answer": ""
      },
      {
        "id": 41,
        "title": "",
        "text": "",
        "example": "",
        "js_answer": ""
      },
      {
        "id": 42,
        "title": "",
        "text": "",
        "example": "",
        "js_answer": ""
      },
      {
        "id": 43,
        "title": "",
        "text": "",
        "example": "",
        "js_answer": ""
      },
      {
        "id": 44,
        "title": "",
        "text": "",
        "example": "",
        "js_answer": ""
      },
      {
        "id": 45,
        "title": "",
        "text": "",
        "example": "",
        "js_answer": ""
      }
    ]
  }

  // TEMPLATE RENDERING
  var task_template = $('#task_template').html();
  var compiled_task_template = handlebars.compile(task_template);
  $(".tasks_container").html(compiled_task_template(tasks.tasks[0]));
})
