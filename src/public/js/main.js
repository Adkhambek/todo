let form = document.querySelector('.form')
let input = document.querySelector('.input')
let list = document.querySelector('.list')
let tasksNumber = document.querySelector('.tasks-number')
let clearAll = document.querySelector('.clear-all')
let count = document.querySelector('.count')
let arr = [];

form.addEventListener('submit', e => {
    e.preventDefault()
    let liElement = document.createElement('li')
    liElement.classList.add('task');
    liElement.innerHTML = `<p>${input.value}</p>
    <div class="action">
        <button class="done"><span class="fas fa-check"></span></button>
        <button class="remove"><i class="fas fa-trash-alt"></i></button>
    </div>`
    arr.push(input.value)
    count.textContent = arr.length;
    list.prepend(liElement);

    let done = document.querySelector('.done')
    let remove = document.querySelector('.remove')

    done.addEventListener('click', () => {
        let selectingElment = done.parentElement.parentElement;
        selectingElment.children[0].classList.add('line-through')
        done.remove();
        
    })

    remove.addEventListener('click', () => {
        let selectingRemovableElement = remove.parentElement.parentElement;
        selectingRemovableElement.remove()
        arr.forEach((value, index) =>{
            if(value == selectingRemovableElement.children[0].textContent){
                arr.splice(index, 1)
                
            }
        })
        count.textContent = arr.length

    })
    e.target.reset()
}) 

clearAll.addEventListener('click', ()=>{
 let allLiElement = list.querySelectorAll(".task");
 allLiElement.forEach(value => {
    value.remove();
    arr = [];
    count.textContent = arr.length
 })

})


// arr.forEach((value, index) => {
//     if (selectingElement.textContent.trim() == value) {
//         arr.splice(index, 1);
//     }
// })

// for (let i = 0; i < arr.length; i++) {
    
//     liElement.innerHTML = `<p>${arr[i]}</p>
//      <div class="action">
//     <button class="done"><span class="fas fa-check"></span></button>
//     <button class="remove"><i class="fas fa-trash-alt"></i></button>
//      </div>`
    
// }
// console.log(liElement);
// // list.prepend(liElement);