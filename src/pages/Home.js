import React from 'react'
import tarjetas from '../models/tajetas.json'
import CardsTec from '../components/cards/CardsTec'

function Home() {
  return (
    <>
    <div class="hero fullscreen bg-yellow-200">
    <div class="hero-body">
        <div class="mx-auto">
            <h1 class="title uppercase headline-3">Hola</h1>
            <h2 class="subtitle text-gray-600">Soy Luis, Desarrolador full stack</h2>
            <h4 class="subtitle text-gray-500"></h4></div>
    </div>
</div>
<div>
  <h4 className='headline-4 mt-4 font-semibold'>Tecnologia que se utilizar</h4>
</div>
<div className='conteiner-Card'>
{tarjetas.map(tarjetas =>(
  <CardsTec 
  key={tarjetas.id}
  imagen={tarjetas.imagen}
  tecnologia={tarjetas.tecnologia}
  
  />
  
  ))}
  </div>




    </>
  )
}

export default Home