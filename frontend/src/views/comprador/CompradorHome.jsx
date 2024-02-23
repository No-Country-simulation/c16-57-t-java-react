import ButtonGeneric from '@components/ButtonGeneric'
import { SearchBar } from '@components/SearchBar'
import naranjas from '../../assets/frutas/naranjas.png'
import zucchini from '../../assets/verduras/zucchini.png'
import nueces from '../../assets/frutos_secos/nueces.png'
import cilantro from '../../assets/aromaticas/cilantro.png'
import productores from '../../assets/productores.png'
const CompradorHome = ({user= "usuario"}) => {
  return ( 


<div className="flex flex-col gap-4 items-center justify-center w-full h-full">
    <section className='text-accent'>
      <h1 className="text-3xl font-bold">¡Bienvenido {user}!</h1>
      <p className="text-xl">¿Qué te gustaría comprar hoy?</p>
    </section>
   <SearchBar className="items-start"/>
   <section className='grid grid-cols-2 gap-4'>
    <ButtonGeneric text="Frutas" size="large"  img={naranjas}/>   
    <ButtonGeneric text="Verduras" size="large"  img={zucchini}/>   
    <ButtonGeneric text="Aromaticas" size="large"  img={cilantro}/>   
    <ButtonGeneric text="Frutos Secos"size="large"  img={nueces}/>   
   </section>
    <ButtonGeneric text="Productores" size="landscape"  img={productores}/>   
 </div>
  )
}

export default CompradorHome