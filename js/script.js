
function  showInput() {
    document.getElementById("inputAcercaDe").style.display="block";
}

function updAcercaDe() {
    document.getElementById("acercaDe").innerHTML=document.getElementById("inputAcercaDe").value;
}

const exampleModal = document.getElementById('exampleModal')
exampleModal.addEventListener('show.bs.modal', event => {
  // Button that triggered the modal
  const button = event.relatedTarget
  // Extract info from data-bs-* attributes
  const recipient = button.getAttribute('data-bs-whatever')
  // If necessary, you could initiate an AJAX request here
  // and then do the updating in a callback.
  //
  // Update the modal's content.
  const modalBodyInput = exampleModal.querySelector('.modal-body input')

  modalBodyInput.value = recipient
})

/**
 * Elimina un item de la página
 * No guarda la información en la db, es solo front-end
 */
function  eliminarItem(idItem) {
    console.log(idItem)
    console.log(document.getElementById(idItem))
    document.getElementById(idItem).className="d-none"
    //todo: ocular el modal myModal para cerrarlo
    const myModal = new bootstrap.Modal(document.getElementById('exampleModal'))


}