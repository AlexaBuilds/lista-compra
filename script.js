/* ==========================================================================
   TITULO: LISTA DE LA COMPRA CON ARRAYS Y DOM
   ========================================================================== */

// PASO 1: SELECCIONAR ELEMENTOS DEL HTML

const inputProducto = document.getElementById('inputProducto');

const btnAgregarProducto = document.getElementById('btnAgregarProducto');

const listaCompra = document.getElementById('listaCompra');

const contadorProductos = document.getElementById('contadorProductos');


// PASO 2: ARRAY PRINCIPAL

let carrito = [];


// PASO 3: CONTADOR

let cantidadProductos = 0;


// PASO 4: EVENTO CLICK

btnAgregarProducto.addEventListener('click', function () {

    const producto = inputProducto.value.trim();

    // VALIDACIÓN

    if (producto === '') {

        alert('Por favor, introduzca un producto.');

        return;
    }

    // AÑADIR AL ARRAY

    carrito.push(producto);

    // CREAR ELEMENTO VISUAL

    const liNuevo = document.createElement('li');

    liNuevo.className = 'producto-item';

    liNuevo.textContent = producto;

    // INSERTAR EN LA LISTA

    listaCompra.appendChild(liNuevo);

    // ACTUALIZAR CONTADOR

    cantidadProductos++;

    contadorProductos.textContent = cantidadProductos;

    // LIMPIAR INPUT

    inputProducto.value = '';

});