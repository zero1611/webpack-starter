import '../CSS/componentes.css';
export
const saludar = (nombre) => {


    console.log('Creadndo Etiqueta h1');
    const h1 = document.createElement('h1');
    h1.innerText = `Hola larva, ${nombre}, como estas?`;
    document.body.append(h1);
}