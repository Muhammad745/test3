const con = document.querySelector('.container');
const form = document.querySelector('form');
const input = document.querySelector('input');
const button = document.querySelector('button');
const text = document.querySelector('.text');
const hide = document.querySelector('.hide');
const show = document.querySelector('.show');
const list = document.querySelector('.list');  // Ensure you have an element with the class 'list'

show.classList.add('hidden');

hide.addEventListener('click', (e) => {
    e.preventDefault();
    input.setAttribute('type', 'text');
    show.classList.remove('hidden');
    hide.classList.add('hidden');
});

show.addEventListener('click', (e) => {
    e.preventDefault();
    input.setAttribute('type', 'password');
    show.classList.add('hidden');
    hide.classList.remove('hidden');
});

const todos = [];

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const newValue = input.value;
    if (newValue) {  // Only add the todo if the input isn't empty
        todos.push(newValue);
        console.log(todos);

        // Clear the list and display updated todos
        list.innerHTML = '';  // Fix typo: innerHTNL -> innerHTML
        todos.forEach((c, i) => {
            list.innerHTML += `
            <p>${i + 1}: ${c}</p>
            `;
        });

        input.value = '';  // Optional: Clear input field after submitting
    }
});

const person = {
    name:"firdavs",
    age:22,
     hobby:{
        sport:"wrestling",
        game : "cs",
     }
}

  localStorage.setItem("uncle,", JSON.stringify(person))


//   localStorage.setItem("uncle,", JSON.stringify(person))