//variables globales
let btn_carrito = document.querySelectorAll(".boton-carrito");
let listaCarrito = document.querySelector(".listado-carrito tbody");
let tablaCarrito = document.querySelector(".listado-carrito");
let alerta = document.querySelector(".alerta");
let bolsa = document.querySelector(".con-bolsa");
let conPro = 0;
let tabla = document.querySelector(".table");
let pedidos = [];
let inputPedido = document.querySelector(".listado-carrito tbody");



// btn_carrito.forEach(function(boton) {
//     boton.addEventListener("click", function() {

//         sumarUno();
//         console.log(boton);
//     });

// });

btn_carrito.forEach(function(boton) {
    boton.addEventListener("click", function(event) {
        const productItem = this.closest('.product-item');

        const nombreProducto = productItem.querySelector('.titulo-pro').textContent;
        const precioRegular = productItem.querySelector('.precio-regular-pro').textContent;
        const imagenSrc = productItem.querySelector('img').getAttribute('src');

        agregarProductoATabla(nombreProducto, precioRegular, imagenSrc);
    });
});
function agregarProductoATabla(nombre, precio, imagen) {
    // Obtener la tabla y el cuerpo de la tabla
    let tabla = document.querySelector('.listado-carrito');
    let tbody = tabla.querySelector('tbody');

    // Crear una nueva fila para el producto
    let nuevaFila = document.createElement('tr');

    // Contador de filas para el número
    let numeroFilas = tbody.getElementsByTagName('tr').length + 1;

    // Agregar el contenido a la fila
    nuevaFila.innerHTML = `
        <th scope="row">${numeroFilas}</th>
        <td><img src="${imagen}"  alt="Imagen del producto" class="w-50"></td>
        <td>${nombre}</td>
        <td>${precio}</td>
        <td><a href="#" class="borrar-producto text-danger">X</a></td>
    `;

    // Agregar la nueva fila al cuerpo de la tabla
    tbody.appendChild(nuevaFila);
    sumarUno();
}

// Agregar evento click a todos los botones 'X' fuera de la función
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('borrar-producto')) {
        eliminarProductoDeTabla(event.target.closest('tr'));
    }
});

function eliminarProductoDeTabla(fila) {
    fila.remove();

}




function eliminarProductoDeTabla(fila) {
    console.log("fila a remover:" + fila);
    fila.remove();
    restarUno();

}



// function checkCartEmpty() {
//     const tabla = document.querySelector('.listado-carrito');
//     const tbody = tabla.querySelector('tbody');

//     if (conPro == 0) {
//         const mensaje = document.createElement('tr');
//         mensaje.innerHTML = `<td colspan="5" class="text-center">No tienes productos en el carrito</td>`;
//         tbody.appendChild(mensaje);
//     }
// }


/*
btn_carrito.forEach(function(boton) {
    boton.addEventListener("click", function() {
        // Obtener el elemento 'con-imagen-pro' asociado al botón actual
        const producto = this.closest('.con-imagen-pro');

        // Obtener los elementos hijos dentro del elemento 'con-imagen-pro' con sus respectivas clases
        const nombreProducto = producto.querySelector('.titulo-pro').textContent;
        const precioRegular = producto.querySelector('.precio-regular-pro').textContent;
        const imagenSrc = producto.querySelector('img').getAttribute('src');

        // Crear un objeto con la información capturada
        const infoProducto = {
            nombre: nombreProducto,
            precio: precioRegular,
            imagen: imagenSrc
        };

        // Aquí puedes hacer lo que quieras con la información del producto asociado al botón clickeado
        console.log(infoProducto);
        // O puedes guardarlos en un array o realizar cualquier operación que desees
    });
});*/


// bolsa.addEventListener("click", function() {


//     console.log("bolsa click "+ conPro );
//     //console.log(tabla.classList.contains("display:none"));
//     mostrarProductos();
//     //llenarTabla();

// });

// function llenarTabla(){
//     console.log("metodo llenar " + inputPedido);
// };

// function mostrarProductos(){

//     tabla.style.display = "block";
// };



bolsa.addEventListener("click",function(){
    tabla.style.display = "block";


});

function restarUno(){

    conPro = conPro-1;
    alerta.classList.remove("d-none");
    console.log("Se hizo clic en el botón del carrito: " + conPro);
    //console.log("producto: " + e.classList );
    alerta.textContent = conPro;
};


function sumarUno(){
    conPro = conPro + 1 ;

    alerta.classList.remove("d-none");
    console.log("Se hizo clic en el botón del carrito: " + conPro);
    //console.log("producto: " + e.classList );
    alerta.textContent = conPro;

};

