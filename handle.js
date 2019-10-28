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
        "title": "Чётное вхождение",
        "text": "Дан массив. Только одно число в этом массиве встречается чётное кол-во раз. Найдите и выведите это число.",
        "example": "",
        "js_answer": "a = [1,2,3,4,5,6,2,7,8,9]; obj = {}; a.forEach((elem) => { obj[elem] == undefined ? obj[elem] = 1 : obj[elem] += 1; }); for(elem in obj) { if(obj[elem] % 2 == 0) {console.log(elem)};"
      },
      {
        "id": 17,
        "title": "Массив квадратов",
        "text": "Сравните два массива. Элементы массива b должны быть квадратами элементов массива a. Элементы в массивах могут быть расположены в любом порядке.",
        "example": "a = [121, 144, 19, 161, 19, 144, 19, 11] <br>b = [121, 14641, 20736, 361, 25921, 361, 20736, 361] <br><br></code>Напишите функцию comp(a, b), которая вернёт true, если: <br><br><code>a = [121, 144, 19, 161, 19, 144, 19, 11] <br>b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19] <br><br></code>или вернётся false, если элементы одного массива не являются квадратами другого: <br><br><code>a = [121, 144, 19, 161, 19, 144, 19, 11] <br>b = [132, 14641, 20736, 361, 25921, 361, 20736, 361] <br><br></code> (так как 132 не является квадратом ни одного элемента из массива a) <br>",
        "js_answer": "a = [121, 144, 19, 161, 19, 144, 19, 11]; b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]; comp = (a, b) => { a = a.sort((x, y) => (x - y)); b = b.sort((x, y) => (x - y)); for (i = 0; i < a.length; i++) { if (Math.pow(a[i], 2) != b[i]) { return false } } return true; } console.log(comp(a,b));"
      },
      {
        "id": 18,
        "title": "DJ Поликарп",
        "text": "Поликарп работает DJ в ночном клубе и часто использует dubstep в своих выступлениях. Недавно он решил взять несколько известных песен и сделать из них ремиксы. Чтобы сделать ремикс песни, Поликарп вставляет несколько слов (может быть ноль) «WUB» перед первым словом в песне, поcле последнего слова (может быть ноль), и между словами (как минимум одно между каждой парой слов). Затем Поликарп склеивает все слова, включая «WUB», в одну строку и играет песню в клубе. Например, песня со словами «I AM X» может стать ремиксом: <br><br> 'WUBWUB<b>I</b>WUB<b>AM</b>WUBWUB<b>X</b>' <br><br> и не может быть: <br><br> 'WUBWUB<b>IAM</b>WUB<b>X</b>' (нет WUB между I и AM) <br><br> Недавно Джонни слушал новые треки Поликарпа, но так как он не слишком любит современную музыку, ему стало интересно, как звучали оригинальные треки. Помогите Джонни восстановить оригинальные песни.",
        "example": "song_decoder('WUB<u>WE</u>WUB<u>ARE</u>WUBWUB<u>THE</u>WUB<u>CHAMPIONS</u>WUB<u>MY</u>WUBWUBWUB<u>FRIEND</u>WUB') == 'WE ARE THE CHAMPIONS MY FRIEND'<br>",
        "js_answer": "song_decoder = a => { a = a.split('WUB').filter(elem => {return elem != ''}).join(' '); console.log(a);} song_decoder('WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBWUBWUBFRIENDWUB');"
      },
      {
        "id": 19,
        "title": "Самое короткое слово",
        "text": "Вычислите длину самого короткого слова в строке.",
        "example": "",
        "js_answer": "a = 'WE ARE THE CHAMPIONS MY FRIEND'; a = a.split(' ').sort((x, y) => x.length - y. length)[0].length; console.log(a);"
      },
      {
        "id": 20,
        "title": "Двоичное сложение",
        "text": "Напишите функцию, которая складывает два двоичных числа и возвращает результат в двоичном виде.",
        "example": "",
        "js_answer": "a = 0b10101, b = 0b1010; console.log((a + b).toString(2));"
      },
      {
        "id": 21,
        "title": "Нечётная пирамида",
        "text": "Дан треугольник нечётных чисел: <br><br>1 <br>3 5 <br>7 9 11 <br>13 15 17 19 <br>21 23 25 27 29 <br>... <br><br> Напишите функцию, которая считает сумму элементов в строке по номеру строки:",
        "example": "row_sum_odd_numbers(1) == 1 <br> row_sum_odd_numbers(2) == 8 <br>",
        "js_answer": "row_sum_odd_numbers = a => {first = 0, result = 0; for (i = 0; i < a; i++) {first += i;} first = first * 2 + 1; for (i = first ; i <= first + 2 * (a - 1); i += 2) {result += i;} console.log(result); } row_sum_odd_numbers(4);"
      },
      {
        "id": 22,
        "title": "Следующий квадрат",
        "text": "Напишите функцию findNextSquare, которая в качестве аргумента принимает квадрат какого-то числа и возвращает квадрат следующего числа. Если аргумент не является квадратом, вернуть -1.",
        "example": "findNextSquare(121) == 144 <br> findNextSquare(625) == 676 <br> findNextSquare(114) == -1 // так как 114 не является квадратом какого-либо числа<br>",
        "js_answer": "findNextSquare = a => {return(Math.pow(Math.sqrt(a) + 1, 2))} console.log(findNextSquare(121));"
      },
      {
        "id": 23,
        "title": "Очередь в супермаркете",
        "text": "В супермаркете большая очередь на кассах. Вам нужно написать функцию, которая рассчитает время, необходимое покупателями для оплаты покупок. <br><br>В функцию поступает две переменные: <ul> <li>customers — массив положительных целых чисел, представляющий очередь. Каждый элемент массива означает сколько времени необходимо покупателю для оплаты товара; <li>N — число касс </ul> Функция должна вернуть, сколько времени потребуется всем покупателям для оплаты товара. <br><br> Существует всего одна очередь и несколько касс. Покупатели идут в порядке очереди. Как только одна из касс освобождается, туда идёт следующий покупатель из очереди. <br><br>",
        "example": "queue_time([5,3,4], 1) == 12 <br>// так как у нас одна касса, 5 + 4 + 3 = 12 <br><br> queue_time([10,2,3,3], 2) == 10 <br> // так как у нас две кассы и пока первый покупатель будет стоять в первой кассе, второй, третий и четвёртый уже оплатят товар (2 + 3 + 3) <br><br> queue_time([2,3,10], 2) == 12 <br> // первый покупатель идёт в первую кассу, второй – во вторую. Первая касса освобождается быстрее второй и туда идёт третий покупатель. Поэтому на первой кассе время обслуживания = 2 + 10 = 12, а на второй = 3 <br>",
        "js_answer": "queue_time = (a, n) => { cashboxes = new Array(n).fill(0); for (elem in a) {cashboxes[cashboxes.indexOf(Math.min(...cashboxes))] += a[elem]}; return (Math.max(...cashboxes)); } console.log(queue_time([10,2,3,3], 2));"
      },
      {
        "id": 24,
        "title": "Изограммы",
        "text": "Изограмма — слово, в котором нет повторяющихся букв. Напишите функцию, которая проверит, является слово изограммой или нет.",
        "example": "is_isogram('Dermatoglyphics') == true <br>is_isogram('aba') == false <br>is_isogram('moOse') == false <br>",
        "js_answer": "is_isogram = a => {a = a.toLowerCase();console.log(a);obj = {};for (elem in a) {if (obj[a[elem]] == undefined) {obj[a[elem]] = 1;} else {return false;}}return true;}console.log(is_isogram('Dermatoglyphics'));"
      },
      {
        "id": 25,
        "title": "Ошибки печати",
        "text": "На заводе принтер печатает наклейки для ящиков. Для каждого типа коробок принтер должен использовать цвет, которой для простоты обозначается буквами от a до m. Цвета, используемые принтером записываются в контрольную строку. Например, корректная контрольная строка будет выглядеть как aaabbbbhaijjjm, что значит, что принтер три раза использовал букву a, четыре раза букву b и так далее. Когда возникают проблемы, контрольная строка получается некорректной, например: aaa<b>x</b>bbbb<b>yy</b>h<b>w</b>a<b>w</b>i<b>w</b>jjj<b>ww</b>m <br><br>Вам нужно написать функцию printer_error, которая по входной строке выдаст частоту ошибок принтера, которая вычисляется как отношение количества ошибок к длине контрольной строки. Не сокращайте данную строку! <br><br>Контрольная строка может состоять только из букв от a до z.",
        "example": "error_printer('aaabbbbhaijjjm') == 0/14 <br>error_printer('aaaxbbbbyyhwawiwjjjwwm') == 8/22 <br>",
        "js_answer": "error_printer = a => {errors = 0;for (elem in a) {a[elem] > 'm' ? errors += 1 : 0};console.log(errors);}error_printer('aaaxbbbbyyhwawiwjjjwwm');"
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
