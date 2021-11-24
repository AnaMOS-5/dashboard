const body = document.querySelector('body');
const table = document.querySelector
const btnAddUpdate = document.querySelector('#btnAddUpdate')

body.onload = () => {
}

btnAddUpdate.onclick = (e) => {
    alert("Guardado")
    e.preventDefault()
}

function createRow(u){
    const tdDelete = document.createElement('td')
    const iDelete = document.createElement('i')
    iDelete.className = 'fas fa-trash'
    iDelete.onclick = () => {
        alert("¿Desea eliminar?")
    }


    const tdUpdate = document.createElement('td')
    const iUpdate = document.createElement('i')
    iUpdate.className =  'fas fa-pen'
    iUpdate.onclick = () => {

}
}