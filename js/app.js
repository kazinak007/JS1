// 1. получить объект модального окна с классом .wrap
const wrap = document.querySelector(".wrap");
// 2. получить тег span, используемый для закрытия окна
const span = document.querySelector("span");
// 3. получить кнопку, используемую для показа модального окна
const button = document.querySelector("button");

// 4. назначить обработку клика на кнопку показа модального окна
// когда функция обработчик срабатывает она должна у модального
// окна удалять класс hidden
button.addEventListener('click', function () {
    wrap.classList.remove('scale-out-center');
    wrap.classList.remove('hidden');
    wrap.classList.add('scale-in-center');
});

// 5. назначить обработку клика на тег span, при клике
// в обработчике модальному окну должен быть добавлен
// класс hidden
span.addEventListener('click', function () {
    wrap.classList.remove('scale-in-center');
    wrap.classList.add('scale-out-center')
    setTimeout(() => {
        wrap.classList.add('hidden');
    }, 1000);
})