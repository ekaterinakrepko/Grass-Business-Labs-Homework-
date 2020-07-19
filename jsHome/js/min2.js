window.onload = function(){
    show ();
    console.log("Сторінка завантажена");
}

let button = document.querySelector(".toDo-box__add");
button.addEventListener( "click" , () => {

    
   // console.log('Спасибо!');
    // let text = document.querySelector(".toDo-box__task");
    // let time = Date();
    

    let object = {};
    let taskObj = {
        text: document.querySelector(".toDo-box__task").value,
        time: Date(),
        priority:1
    };

    if (localStorage.getItem('1') === null){
        // console.log("нету");        
        object[Date.now()] = taskObj;
    } else {
        // console.log("есть");
        object = JSON.parse( localStorage.getItem("1"));
        object[Date.now()]= taskObj;        
    }

    let a = JSON.stringify(object);
    localStorage.setItem('1', a);
});


//1. При натисненні на button виконується анонімна функція
//2. Створення об'єкту "taskObj". 
// Він має ключ text та значення поля з селектором .toDo-box__task
//Ключ time зі значеннням Date() - стандартна функція JS яка Возвращает текущую дату и время
//Ключ priority зі значенням 1- пріоритетність
//3. Переформатуваня об'єкту taskObj в формат JSON
//4. Збереження в localStorage об'єкту в форматі JSON (ключ, значення)


function show (){
   let showTask = localStorage.getItem('1');
    console.log(showTask);
}