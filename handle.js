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
        "js_answer": "\/\/ npm install readline-sync\nconst readline = require('readline-sync');\npin = readline.question('pin: ');\nvalidate_pin = pin => {\n\tif ([4, 6].includes(pin.length) && pin.replace(/[^0-9]/g, '').length == 4) {return true};\n\treturn false;\n}\nconsole.log(validate_pin(pin));</pre>"
      },
      {
        "id": 3,
        "title": "Составить наибольшее",
        "text": "Создайте функцию, которая принимает любое положительное число в качестве аргумента и возвращает наибольшее число, которое можно составить из этих же цифр.",
        "example": "Ввод: 21445 Вывод: 54421 <br> Ввод: 145263 Вывод: 654321 <br> Ввод: 1254859723 Вывод: 9875543221 <br>",
        "js_answer": "a = 21445;\na = Array.from(a + '').sort().reverse().join('');\nconsole.log(a);"
      },
      {
        "id": 4,
        "title": "Сумма двух наименьших",
        "text": "Создайте функцию, которая возвращает сумму двух наименьших чисел из массива, минимальной длины 4 числа.",
        "example": "Ввод: [19, 5, 42, 2, 77] Вывод: 7. <br> Ввод: [10, 343445353, 3453445, 3453545353453] Вывод: 3453455 <br>",
        "js_answer": ""
      },
      {
        "id": 5,
        "title": "Тролли атакуют!",
        "text": "Тролли атаковали форум! Чтобы нейтрализовать опасность, удалите все гласные буквы из комментариев троллей (напишите функцию, которая принимает строку и возвращает её без гласных букв).",
        "example": "Ввод: 'This website is for losers LOL!' Вывод: 'Ths wbst s fr lsrs LL!'",
        "js_answer": "a = 'This website is for losers LOL!';\nconsole.log(a.replace(/[a,e,i,o,u,y]/ig, ''));"
      },
      {
        "id": 6,
        "title": "Музей невероятно глупых вещей",
        "text": "Музей невероятно глупых вещей хочет избавиться от некоторых экспонатов. Мириам оценила все экспонаты и будет избавляться от тех, у которых самый низкий рейтинг. Если в массиве находится несколько элементов с низким рейтингом, нужно удалить тот, который находится ближе к началу массива. Сортировать массив нельзя. Порядок оставшихся элементов не изменяется.",
        "example": "remove_smallest([1,2,3,4,5]) = [2,3,4,5] <br> remove_smallest([5,3,2,1,4]) = [5,3,2,4] <br> remove_smallest([2,2,1,2,1]) = [2,2,2,1] <br>",
        "js_answer": "a = [5,1,3,2,1,4];\nremove_smallest = a => {\n\ta.splice(a.indexOf(Math.min(...a)), 1);\n\treturn a;\n}\nconsole.log(remove_smallest(a));"
      },
      {
        "id": 7,
        "title": "Заснули в автобусе",
        "text": "По городу едет автобус и забирает и высаживает людей на остановках. У вас есть массив с массивами внутри, каждый из которых содержит два числа: первое — число пассажиров, зашедших в автобус на остановке, второе — число пассажиров, которые высадились на остановке. Ваша задача — вернуть число людей, которые заснули в автобусе и остались в нём после последней остановки (последнего массива) :D",
        "example": "[[10,0], [3,5], [5,7], [6, 10]] == 2<br>",
        "js_answer": "a = [[10,0], [3,5], [5,7], [6, 10]];\nres = 0;\nfor (elem in a) {res = res + a[elem][0] - a[elem][1]};\nconsole.log(res);"
      },
      {
        "id": 8,
        "title": "Сортировка слов по номерам",
        "text": "Ваша задача — отсортировать слова в предложении. Каждое слово в предложении содержит в себе цифру. Эта цифра указывает позицию слова в результирующей строке. Слова могут быть пронумерованы цифрами от 1 до 9. Таким образом, слово, в котором встречается 1 будет первым.",
        "example": "Ввод: \"is2 Thi1s T4est 3a\" Вывод: \"Thi1s is2 3a T4est\"<br>",
        "js_answer": "a = \"is2 Thi1s T4est 3a\";\nregExp = /[^0-9]/g;\nconsole.log(a.split(\" \").sort((x, y) => {\n\treturn x.replace(regExp, '') - y.replace(regExp, '')\n}).join(' '));"
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
        "title": "Наименьшее число",
        "text": "Найдите наименьшее целое число в массиве, не используя стандартные методы и функции.",
        "example": "[34, 15, 88, 2] == 2 <br> [34, -345, -1, 100] == -345 <br>",
        "js_answer": "a = [34, 15, 88, 2, 34, -345, -1, 100];\nmin = Infinity;\nfor (elem in a) {a[elem] < min ? min = a[elem] : 0};\nconsole.log(min);"
      },
      {
        "id": 11,
        "title": "Самые длинные строки",
        "text": "У вас есть массив строк и число k. Ваша задача склеить k самых длинных слов в одну строку и вывести результат.",
        "example": "longest_consec(['zone', 'abigail', 'theta', 'form', 'libe', 'zas', 'theta'], 2) == 'abigailtheta' <br>",
        "js_answer": "a = ['zone', 'abigail', 'theta', 'form', 'libe', 'zas', 'theta']\nlongest_consec = (a, n) => {\n\ta = a.sort((x, y) => (y.length - x.length)).splice(0,n).join('');\n\treturn a;\n}\nconsole.log(longest_consec(a, 3));"
      },
      {
        "id": 12,
        "title": "Иголка в стоге сена",
        "text": "Напишите функцию findNeedle(), которая принимает массив, наполненный «мусорными» строками, но помимо них содержит строку «needle». Ваша функция должна вернуть сообщение «иголка найдена в позиции» + позиция слова «needle» в массиве.",
        "example": "find_needle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk']) == 5 <br>",
        "js_answer": "a = ['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'];\nconsole.log('Иголка найдена в позиции', a.indexOf('needle') + 1);"
      },
      {
        "id": 13,
        "title": "A-Aa-Aaa",
        "text": "Написать функцию accum, которая работает как в примере ниже.",
        "example": "accum('abcd') == 'A-Bb-Ccc-Dddd' <br> accum('RqaEzty') == 'R-Qq-Aaa-Eeee-Zzzzzz-Tttttt-Yyyyyyy' <br> accum('cwAt') == 'C-Ww-Aaa-Tttt' <br>",
        "js_answer": "a = 'RqaEzty'\naccum = a => {\n\tres = '';\n\tfor (i = 0; i < a.length; i++) {\n\t\tcurrent_char = a[i].repeat(i + 1).toLowerCase();\n\t\tres += current_char.charAt(0).toUpperCase() + current_char.slice(1)  + '-';\n\t}\n\tres = res.slice(0, -1);\n\treturn res;\n}\nconsole.log(accum(a));"
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
        "js_answer": "a = [1,2,3,4,3,2,1];\nreducer = (sum, current) => (sum + current);\nfind_center = (a) => {\nfor (i = 1; i < Math.ceil(a.length / 2); i++) {\n\t\tif (a.slice(0, i).reduce(reducer) == a.slice(i+1).reduce(reducer)) {return i}\n\t}\n\treturn -1;\n}\nconsole.log(find_center(a));"
      },
      {
        "id": 16,
        "title": "Чётное вхождение",
        "text": "Дан массив. Только одно число в этом массиве встречается чётное кол-во раз. Найдите и выведите это число.",
        "example": "",
        "js_answer": "a = [1,2,3,4,5,6,2,7,8,9];\nobj = {};\na.forEach((elem) => {\n\tobj[elem] == undefined ? obj[elem] = 1 : obj[elem] += 1;\n});\nfor(elem in obj) {\n\tif(obj[elem] % 2 == 0) {console.log(elem)};\n};"
      },
      {
        "id": 17,
        "title": "Массив квадратов",
        "text": "Сравните два массива. Элементы массива b должны быть квадратами элементов массива a. Элементы в массивах могут быть расположены в любом порядке.",
        "example": "a = [121, 144, 19, 161, 19, 144, 19, 11] <br>b = [121, 14641, 20736, 361, 25921, 361, 20736, 361] <br><br></code>Напишите функцию comp(a, b), которая вернёт true, если: <br><br><code>a = [121, 144, 19, 161, 19, 144, 19, 11] <br>b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19] <br><br></code>или вернётся false, если элементы одного массива не являются квадратами другого: <br><br><code>a = [121, 144, 19, 161, 19, 144, 19, 11] <br>b = [132, 14641, 20736, 361, 25921, 361, 20736, 361] <br><br></code> (так как 132 не является квадратом ни одного элемента из массива a) <br>",
        "js_answer": "a = [121, 144, 19, 161, 19, 144, 19, 11];\nb = [121, 14641, 20736, 361, 25921, 361, 20736, 361];\ncomp = (a, b) => {\n\ta = a.sort((x, y) => (x - y));\n\tb = b.sort((x, y) => (x - y));\n\tfor (i = 0; i < a.length; i++){\n\t\tif (Math.pow(a[i], 2) != b[i]) {\n\t\t\treturn false\n\t\t}\n\t}\n\treturn true;\n}\nconsole.log(comp(a,b));"
      },
      {
        "id": 18,
        "title": "DJ Поликарп",
        "text": "Поликарп работает DJ в ночном клубе и часто использует dubstep в своих выступлениях. Недавно он решил взять несколько известных песен и сделать из них ремиксы. Чтобы сделать ремикс песни, Поликарп вставляет несколько слов (может быть ноль) «WUB» перед первым словом в песне, поcле последнего слова (может быть ноль), и между словами (как минимум одно между каждой парой слов). Затем Поликарп склеивает все слова, включая «WUB», в одну строку и играет песню в клубе. Например, песня со словами «I AM X» может стать ремиксом: <br><br> 'WUBWUB<b>I</b>WUB<b>AM</b>WUBWUB<b>X</b>' <br><br> и не может быть: <br><br> 'WUBWUB<b>IAM</b>WUB<b>X</b>' (нет WUB между I и AM) <br><br> Недавно Джонни слушал новые треки Поликарпа, но так как он не слишком любит современную музыку, ему стало интересно, как звучали оригинальные треки. Помогите Джонни восстановить оригинальные песни.",
        "example": "song_decoder('WUB<u>WE</u>WUB<u>ARE</u>WUBWUB<u>THE</u>WUB<u>CHAMPIONS</u>WUB<u>MY</u>WUBWUBWUB<u>FRIEND</u>WUB') == 'WE ARE THE CHAMPIONS MY FRIEND'<br>",
        "js_answer": "song_decoder = a => {\na = a.split('WUB').filter(elem => {return elem != ''}).join(' ');\nconsole.log(a);} song_decoder('WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBWUBWUBFRIENDWUB');"
      },
      {
        "id": 19,
        "title": "Самое короткое слово",
        "text": "Вычислите длину самого короткого слова в строке.",
        "example": "",
        "js_answer": "a = 'WE ARE THE CHAMPIONS MY FRIEND';\na = a.split(' ').sort((x, y) => x.length - y. length)[0].length;\nconsole.log(a);"
      },
      {
        "id": 20,
        "title": "Двоичное сложение",
        "text": "Напишите функцию, которая складывает два двоичных числа и возвращает результат в двоичном виде.",
        "example": "",
        "js_answer": "a = 0b10101, b = 0b1010;\nconsole.log((a + b).toString(2));"
      },
      {
        "id": 21,
        "title": "Нечётная пирамида",
        "text": "Дан треугольник нечётных чисел: <br><br>1 <br>3 5 <br>7 9 11 <br>13 15 17 19 <br>21 23 25 27 29 <br>... <br><br> Напишите функцию, которая считает сумму элементов в строке по номеру строки:",
        "example": "row_sum_odd_numbers(1) == 1 <br> row_sum_odd_numbers(2) == 8 <br>",
        "js_answer": "row_sum_odd_numbers = a => {\n\tfirst = 0, result = 0;\n\tfor (i = 0; i < a; i++) {first += i;}\n\tfirst = first * 2 + 1;\n\tfor (i = first ; i <= first + 2 * (a - 1); i += 2) {result += i;}\n\tconsole.log(result);\n}\nrow_sum_odd_numbers(4);"
      },
      {
        "id": 22,
        "title": "Следующий квадрат",
        "text": "Напишите функцию findNextSquare, которая в качестве аргумента принимает квадрат какого-то числа и возвращает квадрат следующего числа. Если аргумент не является квадратом, вернуть -1.",
        "example": "findNextSquare(121) == 144 <br> findNextSquare(625) == 676 <br> findNextSquare(114) == -1 // так как 114 не является квадратом какого-либо числа<br>",
        "js_answer": "findNextSquare = a => {return(Math.pow(Math.sqrt(a) + 1, 2))}\nconsole.log(findNextSquare(121));"
      },
      {
        "id": 23,
        "title": "Очередь в супермаркете",
        "text": "В супермаркете большая очередь на кассах. Вам нужно написать функцию, которая рассчитает время, необходимое покупателями для оплаты покупок. <br><br>В функцию поступает две переменные: <ul> <li>customers — массив положительных целых чисел, представляющий очередь. Каждый элемент массива означает сколько времени необходимо покупателю для оплаты товара; <li>N — число касс </ul> Функция должна вернуть, сколько времени потребуется всем покупателям для оплаты товара. <br><br> Существует всего одна очередь и несколько касс. Покупатели идут в порядке очереди. Как только одна из касс освобождается, туда идёт следующий покупатель из очереди. <br><br>",
        "example": "queue_time([5,3,4], 1) == 12 <br>// так как у нас одна касса, 5 + 4 + 3 = 12 <br><br> queue_time([10,2,3,3], 2) == 10 <br> // так как у нас две кассы и пока первый покупатель будет стоять в первой кассе, второй, третий и четвёртый уже оплатят товар (2 + 3 + 3) <br><br> queue_time([2,3,10], 2) == 12 <br> // первый покупатель идёт в первую кассу, второй – во вторую. Первая касса освобождается быстрее второй и туда идёт третий покупатель. Поэтому на первой кассе время обслуживания = 2 + 10 = 12, а на второй = 3 <br>",
        "js_answer": "queue_time = (a, n) => {\n\tcashboxes = new Array(n).fill(0);\n\tfor (elem in a) {cashboxes[cashboxes.indexOf(Math.min(...cashboxes))] += a[elem]};\n\treturn (Math.max(...cashboxes));\n}\nconsole.log(queue_time([10,2,3,3], 2));"
      },
      {
        "id": 24,
        "title": "Изограммы",
        "text": "Изограмма — слово, в котором нет повторяющихся букв. Напишите функцию, которая проверит, является слово изограммой или нет.",
        "example": "is_isogram('Dermatoglyphics') == true <br>is_isogram('aba') == false <br>is_isogram('moOse') == false <br>",
        "js_answer": "is_isogram = a => {\n\ta = a.toLowerCase();\n\tconsole.log(a);\n\tobj = {};\n\tfor (elem in a) {\n\t\tif (obj[a[elem]] == undefined) {\n\t\t\tobj[a[elem]] = 1;\n\t\t} else {\n\t\t\treturn false;\n\t\t}\n\t}\n\treturn true;\n}\nconsole.log(is_isogram('Dermatoglyphics'));"
      },
      {
        "id": 25,
        "title": "Ошибки печати",
        "text": "На заводе принтер печатает наклейки для ящиков. Для каждого типа коробок принтер должен использовать цвет, которой для простоты обозначается буквами от a до m. Цвета, используемые принтером записываются в контрольную строку. Например, корректная контрольная строка будет выглядеть как aaabbbbhaijjjm, что значит, что принтер три раза использовал букву a, четыре раза букву b и так далее. Когда возникают проблемы, контрольная строка получается некорректной, например: aaa<b>x</b>bbbb<b>yy</b>h<b>w</b>a<b>w</b>i<b>w</b>jjj<b>ww</b>m <br><br>Вам нужно написать функцию printer_error, которая по входной строке выдаст частоту ошибок принтера, которая вычисляется как отношение количества ошибок к длине контрольной строки. Не сокращайте данную строку! <br><br>Контрольная строка может состоять только из букв от a до z.",
        "example": "error_printer('aaabbbbhaijjjm') == 0/14 <br>error_printer('aaaxbbbbyyhwawiwjjjwwm') == 8/22 <br>",
        "js_answer": "error_printer = a => {\n\terrors = 0;\n\tfor (elem in a) {a[elem] > 'm' ? errors += 1 : 0};\n\tconsole.log(errors);\n}\nerror_printer('aaaxbbbbyyhwawiwjjjwwm');"
      },
      {
        "id": 26,
        "title": "Является ли треугольником?",
        "text": "Напишите функцию, которая принимает три целых числа a, b, c. Функция должна вернуть true, если может быть построен треугольник со сторонами a, b, c и false в противном случае.",
        "example": "",
        "js_answer": "is_triangle = (a, b, c) => {\n\tsides = [a, b, c].sort((x, y) => {return x - y});\n\tif (sides[0] + sides[1] > sides[2]) {return true};\n\treturn false;\n}\nconsole.log(is_triangle(11, 6, 6));"
      },
      {
        "id": 27,
        "title": "Подпрыгивающие мячи",
        "text": "Ребёнок играет с мячиком на n-ом этаже высотного здания. Высота этого этажа h известна. Он бросает мячик из окна. Мяч подпрыгивает, например, на две-трети высоты h (bounce = 0.66). Его мама смотрит в окно на высоте 1.5 метра от земли. Как много раз она увидит пролетающий мимо её окна мяч (считая, когда он пролетает и вниз и вверх)? <br><br>Три условия должны соблюдаться для чистоты эксперимента:<ul><li>h должна быть больше 0</li><li>bounce больше 0, но меньше 1</li><li>уровень окна мамы меньше, чем h</li></ul>Если все три условия соблюдаются, верните результат в виде целого числа, если нет — верните –1.",
        "example": "h = 3, bounce = 0.66, window = 1.5, результат = 3 <br>h = 3, bounce = 1, window = 1.5, результат = -1 <br>",
        "js_answer": "bounce = (h, bounce, wndw) => {\n\tif (h > 0 && 1 > bounce > 0 && wndw < h) {\n\t\tres = 0;\n\t\tfor (; h >= wndw; h *= bounce) {res += 1};\n\t\treturn res*2 - 1;\n\t}\n\treturn -1;\n}\nconsole.log(bounce(3, 0.66, 1.5));"
      },
      {
        "id": 28,
        "title": "Комплементарность ДНК",
        "text": "В дезоксирибонуклеиновой кислоте (ДНК) символы A и T, а так же C и G комплементарны друг другу. У вас есть функция с одной спиралью ДНК, вам нужно получить комплементарную сторону.",
        "example": "DNA_strand ('ATTGC') = 'TAACG' <br> DNA_strand ('GTAT') = 'CATA' <br>",
        "js_answer": "DNA_strand = DNA => {res = '';for(elem in DNA) {switch (DNA[elem]){case 'A': res += 'T'; break;case 'C': res += 'G'; break;case 'G': res += 'C'; break;case 'T': res += 'A'; break;default: 0;}}return res;}console.log(DNA_strand('ATTGC'));</pre>"
      },
      {
        "id": 29,
        "title": "Без наибольшего и наименьшего",
        "text": "Найти сумму без наибольшего и наименьшего элементов массива.",
        "example": "[6, 2, 1, 8, 10] == 16<br>[1, 1, 11, 2, 3] == 6<br>",
        "js_answer": "a = [6, 2, 1, 8, 10];a = a.filter(elem => {return elem != Math.max(...a) && elem != Math.min(...a) });console.log(a);"
      },
      {
        "id": 30,
        "title": "Развёрнутая форма числа",
        "text": "Запишите число в развёрнутой форме.",
        "example": "expanded_form(12) == '10 + 2'<br>expanded_form(42) == '40 + 2'<br>expanded_form(70304) == '70000 + 300 + 4'<br>",
        "js_answer": "expanded_form = num => {res = '';for (i = 0; Math.floor(num/10) != num; i++) {if (num % 10) {res = num % 10 * Math.pow(10, i) + ' + ' + res}num = Math.floor(num/10);}console.log(res.slice(0,-3))}expanded_form(70304)"
      },
      {
        "id": 31,
        "title": "Повторяющиеся символы",
        "text": "Напишите функцию, которая вернёт количество символов (без чувствительности к регистру), повторяющихся более одного раза в строке. Строка может содержать как буквы, так и цифры.",
        "example": "'abcde' == 0 // повторяющиеся символы отсутствуют<br>'aabbcde' == 2 // 'a' и 'b'<br>'aabBcde' == 2 // 'a' и 'b' (заглавная b учитывается) <br>'indivisibility' == 1 // 'i' встречается шесть раз <br>'Indivisibilities' == 2 	// 'i' встречается семь раз, а 's' — дважды <br>'aA11' == 2 // 'a' и '1' <br>'ABBA' == 2 // 'A' и 'B' по два раза<br>",
        "js_answer": "count_duplicates = (a) => {a = Array.from(a.toLowerCase());obj = {};a.forEach((elem) => {obj[elem] == undefined ? obj[elem] = 1 : obj[elem] += 1;});ctr = 0;for (key in obj) {obj[key] > 1 ? ctr++ : 0}return ctr;}console.log(count_duplicates('Indivisibilities'));"
      },
      {
        "id": 32,
        "title": "Пробелы",
        "text": "Удалите все лишние пробелы из строки (между словами, в начале и в конце строки).",
        "example": "",
        "js_answer": "trim = a => {re'turn a.replace(/\s+/g, ' ').trim()}console.log(trim('   hello  world '));"
      },
      {
        "id": 33,
        "title": "Порядок элементов",
        "text": "Напишите функцию, которая принимает в качестве аргумента последовательность символов и возвращает массив всех элементов, встречающихся во входной строке в исходном порядке.",
        "example": "unique_in_order('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']<br>unique_in_order('ABBCcAD') == ['A', 'B', 'C', 'c', 'A', 'D']<br>unique_in_order([1,2,2,3,3]) == [1,2,3]<br>",
        "js_answer": "unique_in_order = a => {res = [];for (letter in a) {a[letter] != a[letter - 1] ? res.push(a[letter]) : 0}return res;};console.log(unique_in_order('AAAABBBCCDAABBB'));"
      },
      {
        "id": 34,
        "title": "Выборочная сортировка",
        "text": "Ваша задача — отсортировать нечётные числа в массиве, при этом не перемещая чётные числа. Ноль будем считать чётным.",
        "example": "sort_array([<b>5</b>, <b>3</b>, 2, 8, <b>1</b>, 4]) == [1, 3, 2, 8, 5, 4]<br>",
        "js_answer": "sort_array = a => {odd = a.filter(num => num % 2 != 0).sort();i = 0;for (elem in a) {if (a[elem] % 2 != 0) {a[elem] = odd[i]; i++};}return a;}console.log(sort_array([5, 3, 2, 8, 1, 4]));"
      },
      {
        "id": 35,
        "title": "Сумма первых n элементов",
        "text": "  Вычислите сумму первых n элементов последовательности: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 + ... <br><br>Необходимо округлить ответ до 2 знаков после запятой",
        "example": "SeriesSum(1) == 1 == 1.00 <br>SeriesSum(2) == 1 + 1/4 == 1.25 <br>SeriesSum(5) == 1 + 1/4 + 1/7 + 1/10 + 1/13 == 1.57<br>",
        "js_answer": "seriesSum = a => {res = 1;for (i = 1; i < a; i++) {res += 1/(i*3 + 1)};return res.toFixed(2);};console.log(seriesSum(5));"
      },
      {
        "id": 36,
        "title": "Цифры квадратов",
        "text": "Дано два целых числа n >= 0 и 0 <= d <= 9. Возведите в квадрат все числа k (0 <= k <= n). Посчитайте количество цифр d, используемых в записи всех k<sup>2</sup>. Создайте функцию nb_dig(), которая принимает n и d в качестве аргументов и возвращает ответ. Не забывайте, что 121, например, имеет две единицы в записи числа.",
        "example": "nb_dig(10, 1) == 4 <br>// Так как для чисел 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100 мы используем цифру 1 в записи 1, 16, 81, 100<br><br>nb_dig(25, 1) == 11 <br>// 1, 4, 9, 10, 11, 12, 13, 14, 19, 21 при возведении в квадрат дают 1, 16, 81, 100, 121, 144, 169, 196, 361, 441<br>",
        "js_answer": "nb_dig = (n, d) => {squares = '';for (i = 0; i <= n; i++) {squares += i*i};return squares.split(d).length - 1;};console.log(nb_dig(25, 1));"
      },
      {
        "id": 37,
        "title": "Склейка строк",
        "text": "Напишите аналог функции .join. Назовём её smash. На вход функции поступает массив слов, результатом работы функции должно быть склеенное (с пробелами между словами!) предложение.",
        "example": "smash(['hello', 'world', 'this', 'is', 'great']) == 'hello world this is great'",
        "js_answer": "smash = a => {res = '';for (elem in a) {res = res + a[elem] + ' '};return res.slice(0, -1);};console.log(smash(['hello', 'world', 'this', 'is', 'great']));"
      },
      {
        "id": 38,
        "title": "Разность массивов",
        "text": "Необходимо написать функцию, которая вычитает элементы одного массива из другого.",
        "example": "array_diff([1,2],[1]) == [2]<br>array_diff([1,2,2,2,3],[2]) == [1,3]<br>",
        "js_answer": ""
      },
      {
        "id": 39,
        "title": "Сдача в кинотеатре",
        "text": "Вышел новый фильм про Мстителей. Люди стоят в очереди в кинотеатре. У каждого из них есть купюры по 100, 50 и 25 долларов для того, чтобы расплатиться за билет. Билет на фильм стоит 25 долларов. <br><br>Вася работает клерком. Он хочет попытаться продать билеты всем людям в очереди. Но может ли он это сделать, если у него в кассе нет денег?",
        "example": "tickets([25, 25, 50]) == true <br>tickets([25, 100]) == false // Васе не хватит денег, чтобы выдать сдачу со 100 долларов <br>tickets([25, 25, 50, 50, 100]) == false // Васе снова не хватит денег, чтобы выдать 75 долларов сдачи<br>",
        "js_answer": ""
      },
      {
        "id": 40,
        "title": "Кошачий возраст? Собачий возраст!",
        "text": "У меня есть кот и собака. Я завёл их в одно и то же время. Это было humanYears (человеческих лет) назад. <br><br>Верните их текущий возраст как массив [humanYears, catYears, dogYears]. Если возраст кота и собаки рассчитывается по следующему правилу: <br><br>Кошачьи года: <br><ul><li>+15 кошачьих лет за первый год</li><li>+9 кошачьих лет за второй год</li><li>+4 кошачьих года за каждый следующий год</li></ul>Собачьи года: <br><ul><li>+15 собачьих лет за первый год</li><li>+9 собачьих лет за второй год</li><li>+5 собачьих лет за каждый следующий год</li></ul>",
        "example": "",
        "js_answer": "count_years = humanYearsAgo => {catYears = 0;dogYears = 0;switch (humanYearsAgo) {case 1:catYears = 15;dogYears = 15;break;case 2:catYears = 24;dogYears = 24;break;default:catYears = 24 + (humanYearsAgo-2) * 4;dogYears = 24 + (humanYearsAgo-2) * 5;};return [humanYearsAgo, catYears, dogYears];};console.log(count_years(3))"
      },
      {
        "id": 41,
        "title": "Реверс слов",
        "text": "Переставьте слова в предложении местами.",
        "example": "reverse('Hello World') == 'World Hello'<br>reverse('Hi There.') == 'There. Hi'<br>",
        "js_answer": "reverse = a => {a = a.split(' ').reverse().join(' ');;return(a);}console.log(reverse('Hello World'));"
      },
      {
        "id": 42,
        "title": "Эврика!",
        "text": "Возьмите число и просуммируйте его цифры, возведённые в степени и… Эврика! <br><br>Число 89 — первое двузначное число, для которого работает следующее правило: <br>89 = 8^1 + 9^2 <br><br>Следующим таким числом является число 135: <br>135 = 1^1 + 3^2 + 5^3 <br><br>Нужно написать функцию, которая будет искать числа, удовлетворяющие данному правилу в диапазоне от a до b (включительно). <br><br>",
        "example": "sum_dig_pow(80, 135) == 89, 135",
        "js_answer": "sum_dig_pow = (a, b) => {for(; a <= b; a++) {num_of_digits = ('' + a).length;cur_a_arr = Array.from(a + '');res = 0;for(i = 1; i <= num_of_digits; i++) {res += Math.pow(+cur_a_arr[i - 1], i);};if (res == a) {console.log(res)};}}sum_dig_pow(80, 140);"
      },
      {
        "id": 43,
        "title": "Реверс букв",
        "text": "Напишите функцию, которая принимает строку в качестве аргумента и возвращает её в развёрнутом виде.",
        "example": "'This is an example!' == 'sihT si na !elpmaxe' <br>'double  spaces' == 'elbuod  secaps' <br>",
        "js_answer": "reverse = a => {a = Array.from(a.split(' ').reverse().join(' ')).reverse().join('');return(a);};console.log(reverse('This is an example!'));"
      },
      {
        "id": 44,
        "title": "Генератор последовательностей",
        "text": "Ваша задача создать функцию, которая возвращает сумму последовательности целых чисел. Последовательность определяется тремся положительными числами: начало последовательности, конец, шаг.",
        "example": "sequenceSum(2,2,2) === 2 <br>sequenceSum(2,6,2) === 12 // 2 + 4 + 6 <br>sequenceSum(1,5,1) === 15 // 1 + 2 + 3 + 4 + 5 <br>sequenceSum(1,5,3) === 5 // 1 + 4 <br>",
        "js_answer": "sequenceSum = (a, b, c) => {for(res = 0; a <= b; a += c) {res = res + a};console.log(res);}sequenceSum(1,5,1);"
      },
      {
        "id": 45,
        "title": "Чарли и фотографии",
        "text": "Алиса и Боб были на выходных. Каждый из них сделал множество фотографий мест, в которых они были и теперь хотят показать Чарли всю коллекцию. Чарли не очень любит смотреть фотографии, тем более, что большинство фотографий похожи. Ему бы не хотелось смотреть на фотографию Эйфелевой башни 40 раз. Он сказал, что готов посмотреть фотографии только в том случае, если в коллекции Алисы и Боба одно и то же место на фотографиях не будет встречаться чаще, чем n раз. Можете ли вы им помочь удалить из коллекции те числа, которые встретились уже более n раз?",
        "example": "delete_nth([1,1,1,1],2) == [1,1]<br>delete_nth([20,37,20,21],1) == [20,37,21]<br>",
        "js_answer": "delete_nth = (a, n) => {obj = {};for(i = 0; i < a.length; i++) {!obj[a[i]] ? obj[a[i]] = 1 : obj[a[i]] += 1;obj[a[i]] > n ? a[i] = 'R' : 0;};a = a.filter(x => x != 'R' );return a;};console.log(delete_nth([1,1,1,1],2));console.log(delete_nth([20,37,20,21],1));"
      }
    ]
  }

  // TEMPLATE RENDERING
  var task_template = $('#task_template').html();
  var compiled_task_template = handlebars.compile(task_template);
  $(".tasks_container").html(compiled_task_template(tasks));
})
