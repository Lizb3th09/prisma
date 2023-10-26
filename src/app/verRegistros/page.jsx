import TarjetaArtista from '@/components/TarjetaArtista';
import { obtenerArtistas } from '@/libs/conexiones';
const VerRegistroPage = async () => {
  const artistas = await obtenerArtistas();
  console.log(artistas);

  return (
    <div>
      <div className=' bg-green-300 p-5'>
        {artistas.map((artista) => (
          <TarjetaArtista artista={artista} key={artista.id} />

          
        ))}
      </div>
    </div>
  );
};

export default VerRegistroPage;