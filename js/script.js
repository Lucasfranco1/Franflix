const fila = document.querySelector('.container-carousel');
// Selector All para todas las películas
const movies= document.querySelectorAll('.movies');

const arrowLeft= document.getElementById('arrow-left');
const arrowRight= document.getElementById('arrow-right');

//? Event Listener para arrow right
//Con esta function flecha quiero hacer el scroll para la derecha
arrowRight.addEventListener('click', ()=>{
    // Va a ser igual a la suma de la fila+ el final del ancho
    fila.scrollLeft+= fila.offsetWidth;
    //activo, del indicador, lo ponemos en una variable
    const indicadorActivo= document.querySelector('.indicadores .activo');
    
    //¿El indicadorActivo tiene un elemento a la derecha?
    if(indicadorActivo.nextSibling){
        //Le ponemos el activo
        indicadorActivo.nextElementSibling.classList.add('activo');
        //Al anterior se lo sacamos
        indicadorActivo.classList.remove('activo');

    }
});

// Lo mismo para la izquierda
arrowLeft.addEventListener('click', ()=>{
    fila.scrollLeft-= fila.offsetWidth;

    //activo, del indicador, lo ponemos en una variable
    const indicadorActivo= document.querySelector('.indicadores .activo');
    
    //¿El indicadorActivo tiene un elemento a la derecha?
    if(indicadorActivo.previousSibling){
        //Le ponemos el activo
        indicadorActivo.previousSibling.classList.add('activo');
        //Al anterior se lo sacamos
        indicadorActivo.classList.remove('activo');

    }
});

// ? Paginación

//Math.ceil me va a redondear el resultado hacia arriba
const numberMovies=Math.ceil(movies.length / 5);
for(let i=0; i < numberMovies; i++){
    const indicador= document.createElement('button');
    //Por cada pagina vamos a crear un boton lo vamos a poner dentro de indicadores

    if(i===0){
        indicador.classList.add('activo'); 
    }
    document.querySelector('.indicadores').appendChild(indicador);
    indicador.addEventListener('click', (e)=>{
        //cada vez que haga click en el indicador pasará el scroll multiplicado ancho de la fila por i;
        fila.scrollLeft= i * fila.offsetWidth;
        //vamos a acceder al indicador activo y le vamos a restar el activo
        document.querySelector('.indicadores .activo').classList.remove('activo');
        //AL indicador que fue clickeado
        e.target.classList.add('activo');
    });
}

// ? Hover

//Por cada pelicula que tengamos, agregamos un event listener, después de un tiempo se ponga el hover, y la anterior le sacamos el hover a la que no tiene el cursor    
movies.forEach((movie)=>{
    movie.addEventListener('mouseenter', (e)=>{
        const element= e.currentTarget;
        setTimeout(()=>{
            movies.forEach(movie=> movie.classList.remove('hover'));
            element.classList.add('hover');
        }, 300);
    });
});
fila.addEventListener('mouseeenter',()=>{
    movies.forEach(movie=> movie.classList.remove('hover'));
});