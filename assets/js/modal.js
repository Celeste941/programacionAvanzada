// Función para mostrar el modal con la información del animal
export const mostrarModal = (animal) => {
    const modal = document.getElementById('exampleModal');
    const modalBody = modal.querySelector('.modal-body');
    modalBody.innerHTML = `
      <img src="${animal.Imagen}" alt="${animal.Nombre}" class="img-fluid img-modal">
      <p><strong>Nombre:</strong> ${animal.Nombre}</p>
      <p><strong>Edad:</strong> ${animal.Edad}</p>
      <p><strong>Comentarios:</strong> ${animal.Comentarios}</p>
    `;
    $('#exampleModal').modal('show');
  };
  