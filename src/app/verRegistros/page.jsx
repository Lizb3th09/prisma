import TarjetaArtista from '@/components/TarjetaArtista';
import { obtenerArtistas } from '@/libs/conexiones';
const VerRegistroPage = async () => {
  const artistas = await obtenerArtistas();
  console.log(artistas);

  return (
    <div>
      <div className=' bg-zinc-900 p-11'>
        {artistas.map((artista) => (
          <TarjetaArtista artista={artista} key={artista.id} />

          
        ))}
      </div>
    </div>
  );
};

export default VerRegistroPage;