const form = document.querySelector('form');
const nlwSetup = new NLWSetup(form);
const btn = document.querySelector('header button');

btn.addEventListener('click', add);
form.addEventListener('change', save)

function add() {
    const today = prompt("Qual dia quer adicionar ?")
    const dayExists = nlwSetup.dayExists(today);

    if (dayExists) {
        alert('O dia ja existe ❌')
        return
    }

    alert("Dia cadastrado com sucesso ✅");
    nlwSetup.addDay(today);
}

function save() {
    localStorage.setItem('NLWteste@', JSON.stringify(nlwSetup.data))
}

const data = JSON.parse(localStorage.getItem('NLWteste@')) || {}

nlwSetup.setData(data)
nlwSetup.load()
