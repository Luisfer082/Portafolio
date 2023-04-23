import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Proyects() {
  return (
    <>
    <div class="grid grid-cols-3 u-gap-2 m-8">
    <div class="grid-c-3 py-4 bg-purple-200">
        <h3 className='font-semibold uppercase'>Proyectos</h3>
    </div>
    <div class="grid-c-2 py-4 bg-indigo-200 cursor">
        <h3>Ecommerce</h3>
        <a className='utb utb-OLR m-2 linea' href='https://github.com/Luisfer082/Proyecto5-cuadros'>Ir repositorio</a>        
    </div>
    <div class="py-4 bg-purple-200 cursor">
        <h4>Agenda</h4>
        <a className='utb utb-OLR m-2 linea' href='https://github.com/Luisfer082/Luisfer082.github.io/tree/master'>Ir repositorio</a>        
    </div>
    <div class="grid-c-1 py-4 bg-indigo-200 cursor">
        <h4>Tienda de bicicletas</h4>
        <a className='utb utb-OLR m-2 linea' href='https://github.com/Luisfer082/Ejercicios-y-proyectos-ucamp-'>Ir repositorio</a>        
    </div>
    <div class="grid-c-1 py-4 bg-purple-200 cursor">
        <h4>Restaurante</h4>
        <a className='utb utb-OLR m-2 linea' href='https://github.com/Luisfer082/Proyecto4-Res'>Ir repositorio</a>        
    </div>
    <div class="grid-c-1 py-4 bg-indigo-200 cursor">
        <h4>Buscador de pokemones</h4>
        <a className='utb utb-OLR m-2 linea' href='https://github.com/paulchino34/paulchino34.github.io/tree/main/third-project'>Ir repositorio</a>        
    </div>
</div>
    
    </>

  )
}

export default Proyects