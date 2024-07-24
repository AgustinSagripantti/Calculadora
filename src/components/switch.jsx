import { useEffect, useState } from 'react';
import './switch.css'

const Switch = () =>{

    const [theme, setTheme] = useState('claro');
    const handleChange = (e) => setTheme(e.target.checked ? 'oscuro' : 'claro')

    useEffect(() =>{
        document.body.setAttribute('data-theme', theme);
    }, [theme])

    //useEffect: toma una función como primer argumento y una lista de dependencias como segundo argumento.
    //La función pasada a useEffect se ejecutará cada vez que el componente se renderiza y cuando cambia cualquiera de las dependencias listadas (en este caso, solo theme).

    return(
        <section className='switch'>
            <label className='toggle'>
                <input type="checkbox" className='checkSwitch' onChange={handleChange} hidden/>
                <span className='slider'></span>
            </label>
        </section>
    )
} 

export default Switch;