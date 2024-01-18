import Image from 'next/image'
import MapView from '@/components/MapView'

export default function Home() {
  return (
    <><div className='content'>
      <h1 >PRUEBA DE MAPA</h1>
    </div><main>
        <MapView />
        <div className='stats'>

        </div>
      </main></>
  )
}
