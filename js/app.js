//DEFINICION DE CONSTANTES
const precioEntrada = 700;  //precio unico para todas las entradas

//Tanto los arreglos que contiene la cartelera de películas y el carrito de entradas vendidas van a quedar guardados también en el localstorage.

//definición de los arreglos de objetos
const peliculasEnCartel = [];
const entradasVendidas = [];

///creación de los objetos para el arreglo de peliculas en cartel
const pelicula1 = new Pelicula('ELEMENTOS', 'Animación', 'Apta para todo público', 'Elemental, de Disney y Pixar, es un nuevo largometraje original ambientado en Elemental City, donde conviven habitantes de fuego, agua, tierra y aire. La protagonista de la historia es Ember, una joven fuerte, ingeniosa y con carácter, cuya amistad con un chico divertido, sensible y tranquilo, llamado Wade, cambia su perspectiva sobre el mundo en el que viven.');
const pelicula2 = new Pelicula('FLASH', 'Acción', 'Apta para mayores de 13 años', 'Los mundos chocan en "Flash" cuando Barry usa sus superpoderes para viajar en el tiempo y cambiar los eventos del pasado. Pero cuando su intento de salvar a su familia altera el futuro sin darse cuenta, Barry queda atrapado en una realidad en la que el general Zod ha regresado, amenazando con la aniquilación, y no hay superhéroes a los que recurrir.');
const pelicula3 = new Pelicula('TRANSFORMERS: EL DESPERTAR DE LAS BESTIAS', 'Acción', 'Apta para mayores de 13 años', 'Vuelven la acción y el espectáculo que han cautivado a los cinéfilos de todo el mundo, #Transformers: El despertar de las bestias llevará al público a una aventura alrededor del mundo en los 90 con los Autobots en introducirá a una nueva generación de Transformers, los Maximals, a la batalla existente en la tierra entre Autobots y Decepticons.');
const pelicula4 = new Pelicula('BOOGEYMAN: TU MIEDO ES REAL', 'Terror', 'Apta para mayores de 13 años', 'BOOGEYMAN: TU MIEDO ES REAL es un clásico del cine de terror al estilo de “Poltergeist”, que asusta y muestra un costado más humano en igual medidas.', '');
const pelicula5 = new Pelicula('SPIDER-MAN: A TRAVÉS DEL SPIDER-VERSO', 'Animación', 'Apta para mayores de 13 años', 'Miles Morales regresa para el siguiente capítulo de la saga Spider-Verse, ganadora de un Oscar®, una aventura épica que transportará al simpático Spider-Man de Brooklyn a tiempo completo a través del Multiverso para unir fuerzas con Gwen Stacy y un nuevo equipo de Spider-People para enfrentarse a un villano más poderoso que cualquier cosa que hayan encontrado.');
const pelicula6 = new Pelicula('RAPIDOS Y FURIOSOS X', 'Acción', 'Apta para mayores de 13 años con reservas', 'Comienza el final del camino. Rápidos y furiosos X, la décima película de la saga Rápidos y furiosos, es el capítulo final de una de las franquicias más populares y queridas del cine, ahora en su tercera década y continuando con el mismo elenco y personajes que cuando comenzó.');
const pelicula7 = new Pelicula('SUPER MARIO BROS: LA PELICULA', 'Animación', 'Apta para mayores de 13 años con reservas', 'Dirigida por by Aaron Horvath y Michael Jelenic (colaboradores en Los Jóvenes Titanes en acción, Jóvenes Titanes en acción: la película) de un guion de Matthew Fogel (La gran aventura LEGO 2, Minions: Nace un villano), la película es protagonizada por Chris Pratt como Mario, Anya Taylor-Joy como la Princesa Peach, Charlie Day como Luigi.');
const pelicula8 = new Pelicula('INDIANA JONES Y EL DIAL DEL DESTINO', 'Acción Aventuras', 'Apta para mayores de 13 años', 'El arqueólogo Indiana Jones deberá emprender otra aventura contra el tiempo para intentar recuperar un dial legendario que puede cambiar el curso de la historia. Acompañado por su ahijada, Jones pronto se encuentra enfrentándose a Jürgen Voller, un ex nazi que trabaja para la NASA.');
const pelicula9 = new Pelicula('MISION IMPOSIBLE: SENTENCIA MORTAL PARTE 1', 'Acción', 'Apta para mayores de 13 años', 'Ethan Hunt (Tom Cruise) y su equipo del FMI se embarcan en su misión más peligrosa hasta la fecha: Localizar, antes de que caiga en las manos equivocadas, una nueva y terrorífica arma que amenaza a toda la humanidad. En esta tesitura, y con unas fuerzas oscuras del pasado de Ethan acechando, comienza una carrera mortal alrededor del mundo en la que está en juego el control del futuro y el destino del planeta.');

peliculasEnCartel.push(pelicula1);
peliculasEnCartel.push(pelicula2);
peliculasEnCartel.push(pelicula3);
peliculasEnCartel.push(pelicula4);
peliculasEnCartel.push(pelicula5);
peliculasEnCartel.push(pelicula6);
peliculasEnCartel.push(pelicula7);
peliculasEnCartel.push(pelicula8);
peliculasEnCartel.push(pelicula9);

localStorage.setItem('peliculasEnCartel', JSON.stringify(peliculasEnCartel));

//obtengo las referencias del DOM para cargar la info del carrito de entradas
const listaEntradasVendidas = document.getElementById('listaEntradasVendidas');
const totalEntradasCompradas = document.getElementById('totalEntradasCompradas');

cargarInformacionPeliculas();

seteoEventosEnBotonesComprar();

//DEFINICION DE FUNCIONES
function cargarInformacionPeliculas() {
    let tagPelicula;
    let indice;
    let j;

    for (let i = 0; i < peliculasEnCartel.length; i++) {
        j = i + 1;
        indice = 'pelicula' + j;
        tagPelicula = document.getElementById(indice);
        tagPelicula.innerHTML = `
                                <p class="nombre-pelicula titulo-importante4 hoverTituloImportante">${peliculasEnCartel[i].nombre}</p>
                                <p class="genero-pelicula">${peliculasEnCartel[i].genero}</p>
                                <p class="resumen-pelicula">${peliculasEnCartel[i].sinopsis}</p>
                                <form class="col-lg-10 mx-auto row">
                                    <div>
                                        <label for="cantidadEntradas">Ingrese cantidad de Entradas</label>
                                        <input type="text" id="cantidadEntradas${i}">
                                    </div>                                    
                                    <div>
                                        <button id="comprarEntradas${i}" class="btn btn-primary">Comprar Entradas</button>                                        
                                    </div>
                                </form>
                                `;

    }
}

function seteoEventosEnBotonesComprar() {
    
    let tag0 = document.getElementById('comprarEntradas0');
    let tagInput0 = document.getElementById('cantidadEntradas0');
    tag0.addEventListener('click', (e) => agregarCompraEntradas(e, 0, +tagInput0.value));

    let tag1 = document.getElementById('comprarEntradas1');
    let tagInput1 = document.getElementById('cantidadEntradas1');
    tag1.addEventListener('click', (e) => agregarCompraEntradas(e, 1, +tagInput1.value));

    let tag2 = document.getElementById('comprarEntradas2');
    let tagInput2 = document.getElementById('cantidadEntradas2');
    tag2.addEventListener('click', (e) => agregarCompraEntradas(e, 2, +tagInput2.value));

    let tag3 = document.getElementById('comprarEntradas3');
    let tagInput3 = document.getElementById('cantidadEntradas3');
    tag3.addEventListener('click', (e) => agregarCompraEntradas(e, 3, +tagInput3.value));

    let tag4 = document.getElementById('comprarEntradas4');
    let tagInput4 = document.getElementById('cantidadEntradas4');
    tag4.addEventListener('click', (e) => agregarCompraEntradas(e, 4, +tagInput4.value));

    let tag5 = document.getElementById('comprarEntradas5');
    let tagInput5 = document.getElementById('cantidadEntradas5');
    tag5.addEventListener('click', (e) => agregarCompraEntradas(e, 5, +tagInput5.value));

    let tag6 = document.getElementById('comprarEntradas6');
    let tagInput6 = document.getElementById('cantidadEntradas6');
    tag6.addEventListener('click', (e) => agregarCompraEntradas(e, 6, +tagInput6.value));

    let tag7 = document.getElementById('comprarEntradas7');
    let tagInput7 = document.getElementById('cantidadEntradas7');
    tag7.addEventListener('click', (e) => agregarCompraEntradas(e, 7, +tagInput7.value));

    let tag8 = document.getElementById('comprarEntradas8');
    let tagInput8 = document.getElementById('cantidadEntradas8');
    tag8.addEventListener('click', (e) => agregarCompraEntradas(e, 8, +tagInput8.value));
}

function agregarCompraEntradas(e, idPelicula, cantidadEntradas) {
    let nuevaEntradaVendida;
    let entradaExistente;

    //variables para el manejo de datos tipo DATE
    let miFecha;
    let dia;
    let mes;
    let año;
    let hora;
    let minutos;
    let sFecha = "";
    let sHora = "";

    //DETERMINO LA HORA Y FECHA DEL MOMENTO DE EFECTUADA LA COMPRA
    miFecha = new Date();
    dia = miFecha.getDate();
    mes = miFecha.getMonth() + 1;
    año = miFecha.getFullYear();
    hora = miFecha.getHours();
    minutos = miFecha.getMinutes();
    sFecha = `${dia}-${mes}-${año}`;
    sHora = `${hora}:${minutos}`;

    e.preventDefault(); //evito el refresque

    let nombrePeliculaElegida = peliculasEnCartel[idPelicula].nombre;

    //VERIFICO SI EXISTEN ENTRADAS PARA LA PELICULA ELEGIDA
    //DE EXISTIR ACTUALIZA LA ENTRADA, CASO CONTRARIO CREA EL OBJETO Y LO INCORPORA AL ARREGLO
    existe = entradasVendidas.some(entrada => entrada.nombrePelicula == nombrePeliculaElegida);
    if (!existe) {
        nuevaEntradaVendida = new Entrada(nombrePeliculaElegida, sFecha, sHora, cantidadEntradas);
        entradasVendidas.push(nuevaEntradaVendida);
    }
    else {
        entradaExistente = entradasVendidas.find(entrada => entrada.nombrePelicula === nombrePeliculaElegida);
        entradaExistente.cantidad = entradaExistente.cantidad + cantidadEntradas;

        entradaExistente.ActualizarPrecio(entradaExistente.cantidad);
    }

    updateCarritoEntradas();
    localStorage.setItem('entradasVendidas', JSON.stringify(entradasVendidas));
}

function updateCarritoEntradas() {
    listaEntradasVendidas.innerHTML = '';
    listaEntradasVendidas.innerText = 0;
    entradasVendidas.forEach((entrada, pos) => {
        craerEntradaCarrito(entrada, pos);
    });
}

function craerEntradaCarrito(entrada, pos) {
    const fila = document.createElement('tr');

    let td = document.createElement('td');
    td.textContent = entrada.nombrePelicula;
    td.classList.add('text-primary');
    fila.appendChild(td);

    td = document.createElement('td');
    td.textContent = entrada.cantidad;
    td.classList.add('text-primary');
    fila.appendChild(td);

    td = document.createElement('td');
    td.textContent = entrada.precio;
    td.classList.add('text-primary');
    fila.appendChild(td);

    ///agrego una nueva celda con el boton eliminar
    td = document.createElement('td');
    const btnEliminar = document.createElement('button');
    btnEliminar.classList.add('btn', 'btn-danger');
    btnEliminar.textContent = 'Eliminar';

    ///cuando hace click se debe eliminar del CARRITO el elemento
    // actualizar el localstorage y actualizar la tabla
    btnEliminar.onclick = () => {
        entradasVendidas.splice(pos, 1);
        updateCarritoEntradas();
        localStorage.setItem('entradasVendidas', JSON.stringify(entradasVendidas));
    }

    td.appendChild(btnEliminar);
    fila.appendChild(td);
    listaEntradasVendidas.appendChild(fila);

    //ahora puedo calcular el total de entradas vendidas de todas las peliculas
    totalEntradasCompradas.textContent = entradasVendidas.reduce((acc,entrada) => acc + entrada.precio, 0);
}
