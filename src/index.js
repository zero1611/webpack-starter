import { saludar } from './js/componentes.js';
import './styles.css';


const nombre = 'Ivan';
const nombre2 = 'Manolo';
saludar(nombre);

const saludar2 = (nombre) => {


    console.log('Creadndo Etiqueta h1');
    const h1 = document.createElement('h1');
    h1.innerText = `Hola larva, ${nombre2}, como estas?`;
    document.body.append(h1);
}

saludar2(nombre2);