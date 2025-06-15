/* Основы HTML

HTML - это язык разметки для создания веб-страниц.
Базовая структура состоит из следующих элементов:

<!DOCTYPE html>                                         // объявление типа документа, указывает браузеру на использование последней версии HTML
<html>                                                  // корневой элеменет, внутри которого находится все остальное
<head>                                                  // содержит мета-информацию о документе, например, кодировку, заголовок страницы и стили
  <meta charset="UTF-8">                                // указывает кодировку документа
  <title>Заголовок документа</title>                    // задает заголовок документа, который отображается во вкладке
</head>
<body>                                                  // содержит все видимые элементы страницы, такие как тест, изображение ссылки.
  <!-- Содержимое страницы -->
</body>
</html>


Создадим простой HTML-документ с заголовком и абзацем текста:

<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Пример базовой структуры HTML</title>
</head>
<body>
  <h1>Заголовок страницы</h1>                                // заголовок первого уровня
  <p>Это пример абзаца текста в HTML-документе.</p>          // абзац текста
</body>
</html>


<h1>Заголовок</h1> - Это вид заголовка. ВСего их 6 штук.
<h1> - самый крупный
<h6> - самый мелкий

Крайней важно писать их в строгой последовательности и не пропускать заголовки, чтобы не сбить с толку.

Вложенность
Заголовки могут быть вложены в подразделы, чтобы отразить структуру содержимого страницы. Можно создать упорядоченный список всех заголовков на странице,
чтобы помочь человеку найти нужную информацию.



Пример:
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Пример базовой структуры HTML</title>
</head>
<body>
  <h1>Элементы заголовков</h1>
  <h2>Краткое содержание</h2>
  <p>Обычный текст...</p>
  
  <h2>Примеры</h2>
  <h3>Пример 1</h3>
  <p>Обычный текст...</p>

  <h3>Пример 2</h3>
  <p> Обычный текст...</p>

  <h2>Смотреть также...</h2>
  <p>Обычный текст...</p>
</body>
</html>

*/

/* Основы HTML 2

Тег - это основная единица разметки в HTML, заключённый в угловые скобки. Определяет структуру и содержаимое веб-страницы.  Часть синтаксиса HTML: <button> </button>.
Элемент - это вся структура с тегом и его содержимым (например, атрибутами) и вложенными тегами, текстами.

Пример: <button id="addTask">Добавить</button>
  Тег: <button> </button>
  Элемент: <button id="addTask">Добавить</button> (включает все содержимое)


То есть
Тег — это просто часть синтаксиса, который обозначает начало или конец элемента.
Элемент — это более широкое понятие, которое включает тег и всё, что находится внутри него (например, атрибуты и содержимое).

1) Это разметка страницы для разных устройств с разной шириной (например, для моб. уст-в)
      <meta name="viewport" content="width=device-width, initial-scale=1.0">

2) Котейнер, который помогает упорядочить код:
      <div> ... </div>

3) <input>. "Форменный элемент", который позволяет пользователю вводить данные.
    <input type="text" id="taskInput" placeholder="Введите задачу">

    а) <input> - сам элемент. Он не требует закрывания
    b) type="text" - это атрибут, указывающий тип элемента. Здесь - это текст (ещё может быть кнопка и т.д.)
    c) placeholder - это атрибут "подсказка", который серым цветом подсказывает пользователю, что нужно вводить.

    Браузер распознает это как один элемент <input> с разными атрибутами. Вместо запятых используется пробел.

4) <button>. Тег, который создает кнопку. 

    а) id="addTask">Добавить - это атрибут id, который создает уникальное имя.
    b) Добавить - текст, который отображается на кнопке

5) <ul> - это тег, который создает ненумированный список. Элементы внутри списка создаются  с тегом <li> (list item)
Пример:
<ul>
<li>Первый элемент<li>
<li>Второй элемент<li>
<li>Третий элемент<li>
</ul>

Нумерованный список создается при помощи тега <ol>:
<ol>
<li>Первый элемент<li>
<li>Второй элемент<li>
<li>Третий элемент<li>
</ol>
*/

/* Подключаем JavaScript

1. Находим кнопку и вешаем на неё обработчик событий click.

  а) document.getElementById ("id") - это метод (функция) объекта document, который находит HTML-элемент по ID. 
    1) document - это специальный объект в JS, который представляет HTML-документ.
    2) .getElementById ("id") - это метод, который ищет элемент с указанным id.

      Пример:
      let myButton = document.getElementById ("myButton");
      console.log(myButton);
      
      Результат:
      <button id="myButton"> Нажми на меня </button>

  b) .addEventListenet ("событие", функция) - это метод, который добавляет обработчик события к элементу.

    Его часто называют "обработчик события", например, "добавь обработчик клика на кнопку".

    1) "click" - это событие, которое происходит, когда пользователь нажимает на элемент.
    2) function() {...} - это код, который выполнится, когда событие произойдёт.

    Пример:
    document.getElementById("myButton").addEventListener("click", function() {
      alert("Кнопка нажата!");
    });


    В .addEventListener слово "click" - это событие, которое слушает браузер.
    Помимо click могут быть ещё:
    1) mouseover - наведение мыши,
    2) keydown - нажатие клавиши,
    3) input - ввод в текстовое поле,
    4) submit - отправка формы,
    5) scroll - прокрутка страницы.
    6) ... и т. д.

  Таким образом, это document.GetElementById ("id") и .addEventListener - это методы (функции), которые принадлежат объекту document и HTML-элементам.




2. Получаем текст из поля ввода и очищаем пробелы:

  let taskInput = document.getElementById("taskInput");
  let taskText = taskInput.value.trim();

    1) document.getElementById ("taskInput") - находим поле ввода с id="taskInput";
    2) taskInput.value - получаем введенный пользователем текст,
    3) .trim() - убираем ненужные пробелы в начале и в конце.
    
  .value читает текст внутри, например, поля ввода.
  Пишется через точку, потому что это свойство объекта.

  Когда мы получаем элемент с помощью document.getElementById("id"), он становится объектом. У этого объекта есть свойства (харак-ки)
  Например, если мы получаем input, у него есть свойства:
    1) .value - текст внутри,
    2) .type - тип (text, number, password),
    3) .placeholder - подсказка
    4) .disabled - отключено (true/false),
    5) ... и т. д.
    
  Мы можем менять значение, то есть .value. Это особенно полезно, когда нам нужно очистить поле после добавления задачи:

    taskInput.value = ""; // Очищает поле после выполнения задачи

  ВАЖНО! .value всегда возвращает строку. Чтобы получить число, нужно явно преобразовать значение.
    Пример:
    let age = Number(ageInput.value);
    console.log(age); // Например, число 25
    console.log(typeof age); // number

  Если в варианте выше вместо числа написать строку, например, abc, то поле будет пустым.


  .trim() - то метод, который удаляет пробелы с конца и начала строки. Пробелы внутри строки он не трогает.
  Полезен:
  1) Когда пользователь вводит текст, а мы хотим избавиться от лишних пробелов
  2) Проверки на пустоту: с .trim() можно проверить, что введенный текст не пустой, даже если в нём только пробелы.
  
  Пример:
  let inputText = "     "; // Только пробелы
  let trimmedInputText = inputText.trim();

  if (trimmedInputText === "") {
    console.log("Поле пустое!"); // Проверка правильная
  }



3. Проверяем, не пустое ли поле:

  if (taskText === "") return;

  Если пользователь нажал "Добавить", но ничгео не ввёл, код просто завершит выполнение (return) и задача не добавится.



4. Создаём новый элемент списка <li>

  let taskItem = document.createElement("li");
  taskItem.textContent = taskText;

  1) document.createElement("li") - создаём новый HTML-элемент <li> (пункт списка)
    Это метод, который позволяет создавать новые элементы в DOM (Document Object Model), то есть на веб-странице.

    Вызывая document.createElement("tagName"), мы создаём новый элемент с заданным тегом ("tagName"), который ещё не существует в DOM.
    Этот элемент можно настроить (добавить классы, атрибуты, текст и т.д.), а потом добавить в DOM, чтобы он появился на странице.

    Пример:
    let newElement = document.createElement("p"); // Создаём новый абзац <p>
    newElement.textContent = "Это новый абзац!";
    document.body.appendChild(newElement); // Добавляем абзац в конец body.

  2) taskItem.textContent = taskText - добавляем в <li> текст из поля ввода.
  .textContent - это свойство элемента, которое позволяет установить или получить текстовое содержимое элемента.
  Когда мы используем .textContent - мы работаем с текстом, который находится внутри элемента.
  Это свойство не интерпретирует HTML. То есть, если добавить HTML-теги в .text.Content, они будут отражаться как текст, а не элемент HTML.
  
  Пример:
  let div = document.createElement("div");
  div.textContent = "Привет, мир!";
  document.body.appendChild(div);

  Этот код создаст новый элемент div, запишет в него текст "Привет, мир!" и добавит его на страницу.

  Таким образом, если добавить в текстовое поле символы " <> ", то .textContent будет воспринимать их как обычные символы, а не как теги.

  Это важно из-за безопасности. Если бы мы написали <h1> пум пум </h1> и использовали .innetHTML вместо .textContent, то браузер бы счёл это за настоящий тег и это привело бы
  к непредсказуемым последствиям.


5. Добавляем новый <li> в список задач.

  1) document.getElementById("taskList") - находим <ul> или <ol> с id taskList (это наш список дел)
  2) .appendChild(taskItem) - добавляем новый <li> внутрь списка.
  Этот метод позволяет вставлять (или добавлять) новый элемент в конец другого элемента в DOM.

  Когда мы его используем, мы говорим браузеру: "Дообавь этот элемент в конец списка дочерних элементов" для указанного родительского элемента.

  Как это работает?
    1) Метод добавляет узел в конец списка дочерних элементов.
    2. Он принимает 1 параметр - это узел, который будет добавлен в родительский элемент. Это может быть:
      а) Элемент,
      б) Текстовый узел,
      в) Другой тип узгла (например, комментарии)

  Пример:
  let newPara = document.createElement("p");
  newPara.textContent = "Это новый параграф!";

  let body = document.body; // Находим родительский элемент
  body.appendChild(newPara); // Добавляем новый параграф в конец <body>.


  Важно:
  1) Добавление в конце! Если в родительском элементе уже есть другие дочерние элементы, то этот новый будет последним.

  let div = document.createElement("div");
  let p1 = document.createElement("p"); //...Element("p") - это часть синтаксиса HTML. Здесь "p" - это просто строка (абзац).
  let p2 = document.createElement("p"); // createElement ожидает только теги (например, p, div, ul, ol и т. д.), тк он создает HTML элементы.

  p1.textContent = "Первый параграф";
  p2.textContent = "Второй параграф";

  div.appendChild(p1);
  div.appendChild(p2);
  
  document.body.appendChild(div); // Добавляем весь div в конец body
  
  */

/* DOM:

DOM (Document Object Model) - это модель документа, которая представляет собой программный интерфейс для HTML и XML документов.
В контексте веб-разработки DOM позволяет скриптам (например, JavaScript) изменять структуру, стиль и содержание веб-страницы.

То есть DOM позволяет JS манипулировать веб-страницей: изменять содержимое, структуру и стиль в реальной времени.

  - Document - это сам HTML-документ,
  - Object - каждый элемент в документе (например, теги, текст, атрибуты) представляется как объект
  - Model - модель представляет документ как дерево, где каждый объект является узлом (node) 


Типы узлов (nodes) в DOM:
 1. Элементы (Element nodes) - теги HTML, например, <html>, <body>, <p> и другие.
 2. Текстовые узлы (Text nodes) - текст, который находится внутри тегов. Например, текст, "Заголовок страницы" внутри тега <h1>.
 3. Аттрибуты (Atrribute nodes) - атрибуты HTML-тегов, например, class, id, src и другие.

 Пример:
 <h1> class="main.heading">Привет, мир!</h1>
 1. <h1> - Элемент,
 2. class="main.heading" - Аттрибут,
 3. Привет, мир! - Текст.

*/

let tasks = JSON.parse(localStorage.getItem("tasks")) || []; // Загружаем сохранённые задачи

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks)); // Сохраняем задачи в localStorage
}

function renderTask(taskText) {
  let taskItem = document.createElement("li");
  taskItem.style.animation = "fadeIn 0.3s ease-out";

  let taskTextElement = document.createElement("span");
  taskTextElement.textContent = taskText;

  taskItem.style.display = "flex";
  taskItem.style.alignItems = "center";
  taskItem.style.justifyContent = "space-between";

  let buttonContainer = document.createElement("div");
  buttonContainer.style.display = "flex";
  buttonContainer.style.gap = "10px";

  let doneButton = document.createElement("button");
  doneButton.textContent = "✅";
  doneButton.style.marginLeft = "10px";

  doneButton.addEventListener("click", function () {
    taskTextElement.style.textDecoration =
      taskTextElement.style.textDecoration === "line-through"
        ? "none"
        : "line-through";
  });

  let deleteButton = document.createElement("button");
  deleteButton.textContent = "❌";
  deleteButton.style.marginLeft = "10px";

  deleteButton.addEventListener("click", function () {
    taskItem.remove();
    tasks = tasks.filter((task) => task !== taskText); // Удаляем задачу из массива
    saveTasks(); // Обновляем localStorage
  });

  buttonContainer.appendChild(doneButton);
  buttonContainer.appendChild(deleteButton);

  taskItem.appendChild(taskTextElement);
  taskItem.appendChild(buttonContainer);

  document.getElementById("taskList").appendChild(taskItem);
}

document.getElementById("addTask").addEventListener("click", function () {
  let taskInput = document.getElementById("taskInput");
  let taskText = taskInput.value.trim();

  if (taskText === "") return;

  tasks.push(taskText); // Добавляем задачу в массив
  saveTasks(); // Сохраняем обновленный список задач
  renderTask(taskText); // Рисуем задачу в списке
  taskInput.value = "";
});

document
  .getElementById("taskInput")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      // Проверяем, что нажали Enter
      document.getElementById("addTask").click(); // Вызываем клик по кнопке
    }
  });

tasks.forEach(renderTask); // Восстанавливаем задачи при загрузке страницы

let tasksElya = JSON.parse(localStorage.getItem("tasksElya")) || [];

function saveTasksElya() {
  localStorage.setItem("tasksElya", JSON.stringify(tasksElya));
}

function renderTaskElya(taskText) {
  let taskItem = document.createElement("li");
  taskItem.style.animation = "fadeIn 0.3s ease-out";

  let taskTextElement = document.createElement("span");
  taskTextElement.textContent = taskText;

  taskItem.style.display = "flex";
  taskItem.style.alignItems = "center";
  taskItem.style.justifyContent = "space-between";

  let buttonContainer = document.createElement("div");
  buttonContainer.style.display = "flex";
  buttonContainer.style.gap = "10px";

  let doneButton = document.createElement("button");
  doneButton.textContent = "✅";

  doneButton.addEventListener("click", function () {
    taskTextElement.style.textDecoration =
      taskTextElement.style.textDecoration === "line-through"
        ? "none"
        : "line-through";
  });

  let deleteButton = document.createElement("button");
  deleteButton.textContent = "❌";

  deleteButton.addEventListener("click", function () {
    taskItem.remove();
    tasksElya = tasksElya.filter((task) => task !== taskText);
    saveTasksElya();
  });

  buttonContainer.appendChild(doneButton);
  buttonContainer.appendChild(deleteButton);

  taskItem.appendChild(taskTextElement);
  taskItem.appendChild(buttonContainer);

  document.getElementById("taskListElya").appendChild(taskItem);
}

document.getElementById("addTaskElya").addEventListener("click", function () {
  let taskInputElya = document.getElementById("taskInputElya");
  let taskText = taskInputElya.value.trim();

  if (taskText === "") return;

  tasksElya.push(taskText);
  saveTasksElya();
  renderTaskElya(taskText);
  taskInputElya.value = "";
});

document
  .getElementById("taskInputElya")
  .addEventListener("keydown", function () {
    if (event.key === "Enter") {
      document.getElementById("addTaskElya").click();
    }
  });

tasksElya.forEach(renderTaskElya);

let themeToggle = document.createElement("button");
themeToggle.textContent = "🌙 Тёмная тема"; // Начальный текст кнопки
themeToggle.classList.add("theme-toggle"); // Добавляем класс для стилизации
document.body.append(themeToggle); // Добавляет кнопку на стрицу и вставляет ее в конец body

if (localStorage.getItem("darkMode") === "enabled") {
  document.body.classList.add("dark-theme");
  themeToggle.textContent = "🌞 Светлая тема"; // Изменяем текст кнопки на "Светлая тема"
}

themeToggle.addEventListener("click", function () {
  document.body.classList.toggle("dark-theme");

  if (document.body.classList.contains("dark-theme")) {
    localStorage.setItem("darkMode", "enabled");
    themeToggle.textContent = "🌞 Светлая тема"; // Изменяем на "Светлая тема"
  } else {
    localStorage.setItem("darkMode", "disabled");
    themeToggle.textContent = "🌙 Тёмная тема"; // Изменяем на "Тёмная тема"
  }
});

document.querySelectorAll("ul").forEach((taskList) => {
  taskList.addEventListener("dragover", (event) => {
    event.preventDefault();
  });

  taskList.addEventListener("drop", (event) => {
    event.preventDefault();
    let draggedTask = document.querySelector(".dragging");
    taskList.appendChild(draggedTask);
    saveTasks(); // Сохраняем порядок задач
  });
});

// ДОПИСАТЬ

/* Кнопка удаления

Создаём новый элемент deleteButton в HTML и помещаем в него контекст "🗑️". Можно и просто написать "удалить" вместо смайлика.

Вот это -> deleteButton.style.marginLeft = "10px";
позволяет нам создать красивый отступ, чтобы кнопка не прилипла к тексту. Можно сделать напрямую в JS, а можно в CSS.

Альтернатива через CSS выглядит вот так:

  button {
    margin-left: 10px;
  }

Таким образом, .style - это свойство, которое позволяет изменять стили элемента напрямую в JS вместо CSS.

Когда стоит использовать .style, а когда CSS:

  1. .style в JS:
    1) Если нужно динамический менять стиль (например, при клике, наведении),
    2) Если стиль зависит от условий (например, при вводе ошибки),
    3) Если стиль уникален для одного элемента,


  2. CSS:
  1) Если стиль не изменяется динамически,
  2) Еслил стиль нужно применить ко многим элементам сразу,
  3) Если код становится перегружен стилями (лучше их перенести в CSS)

*/

/* Стиль кнопочек 
Чтобы кнопки выглядели красивее и не слипались друг с другом можно сделать следующее:

1. Установить flex для контейнера задачи (taskItem), чтобы элементы располагались по горизонтали
2. Использовать justify-content: space-between, чтобы кнопки и текст находились на противоположных концах.
3. Добавить немного отступа между текстом и кнопками

*/

/* Сохранение данных при перезагрузке страницы

1. Загружаем сохраненные задачи при загрузке страницы:

  localStorage - встроенный объект браузера для хранения данных прямо внутри него

  1) localStorage.setItem("key", "value");
  
    setItem позволяет СОХРАНЯТЬ данные localStorage.

    1) key - это строка, которая будет служить уникальным идентификатором для сохраняемых данных (например, имя переменной),
    2) value - это данные, которые вы хотите сохранить. Значение должно быть строкой. Если нужно сохранить объекты или массивы, их нужно преобразовать в строку
    с помощью JSON.stringify().

      Пример:
      let user = { name: "John", age: 30 };
      localStorage.setItem("user", JSON.stringify(user)); // Сохраняем объект как строку

    В нашем случае tasks - это просто название ключа, под которым мы сохраняем задачи.

    let tasks = JSON.parse(localStorage.getItem("tasks")) || []; // Загружаем сохранённые задачи

  2) localStorage.getIitem("key");

    getItem позволяет ПОЛУЧАТЬ данные, сохраненные в localStorage. У него один аргумент: key.

      Пример:
      let user = localStorage.getItem('user');
      console.log(user); // Выведет '{"name":"John","age":30}'

    Поскольку мы сохраняли объект в строковом формате, метод getItem вернёт строку.
    Если бы мы хотели работать с объектом, нам нужно было бы снова преобразовать объект с помощью JSON.parse().

    Если в localStorage нет значения по указанному ключу, то метод getItem вернёт null.

  3) JSON.stringify(...) сохраняем
    Преобразует 'value' в строку. 'Value' может быть массив и чем угодно, но поскольку в localStorage можно сохранять только строки,
    мы используем JSON.stringify для "строкофикации".

    Используется с: localStorage.setItem(".key", "value")

  4) JSON.parse(...) загружаем
  Преобразует 'value' из строки в обратное состояние (например, в массив, объект и тд.д.).

  Используется с: localStorage.getItem("key")


  В нашем коде мы используем localStorage.getItem прежде чем setItem по 2 причинам:
  1) Получение данных из localStorage:
    Метод localStorage.getItem("key") пытается получить данные, сохраненные под ключом "tasks".
    Если данные были сохраненые ранее, то он вернет строку с этими данными. Если их не было, вернёт null.
  
  2) Обработка отсутствющих данных
    Поскольку localStorage.getItem("key") может вернуть null, мы используем логическое ИЛИ ( || ) для того, чтобы
    в случае null присвоить переменной пустой массив.

  ВАЖНО!
  Мы используем массив с заадчами, потому что это упрощает нам жизнь, ведь список задач можно представить как список (массив), а
  ещё некоторые методы работают только с массивами, а не строками.
  
  Среди них:
    а) .push() - добавляет элемент в конец массива,
    b) .pop() - удаляет элемент с конца массива,
    c) .shift() - удаляет элемент с начала массива,
    d) .map(), .filter(), .reduce() - позволяет выполнить операции над каждым элементом массива.

    
*/

/* Тёмная тема 


  1)

  let themeToggle = document.createElement("button"); // Создаём кнопку
  themeToggle.textContent = "🌙 Тёмная тема"; // Добавляем текст кнопке
  document.body.prepend(themeToggle); // Вставляем кнопку в начало body


  document.body.prepend(themeToggle)

  document - это весь HTML документ.
  document.body - это свойства объекта document, который представляет элемент body внутри HTML
  prepend - это метод JS, который добавляет элементв самое начало другого элемента

  Именно поэтому Темная тема стоит в самом верху. Если вызвать
  этот метод нескольок раз, то он не заменит действующий элемент,
  а создаст новый сверху.

  Альтернативный метод - append(), который добавляет в конец.


  2)

  themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-theme");
  });

  classList - это свойство представляет коллекцию всех классов элемента в виде объекта

*/

/* CSS

Чтобы обратиться к чему-то в CSS нам нужно создать отдельный класс. Например,
  themeToggle.classList.add("theme-toggle"); // Добавляем класс для стилизации


*/

/* Перетаскивание задач
Чтобы перетащить задачу нам нужно:
  1. Сделать каждый элемент (li) перетаскиваемым (draggable = "true");
  2. Добавтиь обработчик событий dragstart, dragover, drop;
  3. Позволим менять порядок списка

    1.
      document.querySelectorAll("ul").forEach((taskList) => {
        taskList.addEventListener("dragover", (event) => {
          event.preventDefault();
      });

    1) document - это весь HTML-документ.
    2) .querySelectorAll("ul") - ищем все <ul> (мой и Эли). Это позвращает массивоподобную NodeList из двух <ul> элементов:
      [ul#taskList, ul#taskListElya]
    3) .forEach(taskList) - перебирает каждый <ul> и выполняет функцию. taskList - это просто имя переменной, куда присваиваются все элементы внутри <ul>.

*/
