import React from 'react'
import './Registro.css'

function Contacto() {
  return (
    <div>
      <h4 className='font-semibold uppercase '>Puedes contactarme mediante:</h4>
      <div className='avatar avatar--xl bg-white cursor u-inline-flex m-3'>
      <img  src="https://raw.githubusercontent.com/Luisfer082/imagenes-Portafolio/main/correo.png" alt="avatar" />
      </div>
      <div className='avatar avatar--xl bg-white cursor u-inline-flex m-3'>
      <img  src="https://raw.githubusercontent.com/Luisfer082/imagenes-Portafolio/main/linkedin.png" alt="avatar" />
      </div>
      <div className='avatar avatar--xl bg-white cursor u-inline-flex m-3'>
      <img  src="https://raw.githubusercontent.com/Luisfer082/imagenes-Portafolio/main/logotipo-de-instagram.png" alt="avatar" />
      </div>
    </div>
  )
}

export default Contacto