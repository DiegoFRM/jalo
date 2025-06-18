import Cards from "@/components/Cards"
import {experiences} from "@/app/api/mockData"

const apiUrl = process.env.LOCAL_PATH;

async function getData (){
  const res = await fetch(apiUrl + '/api/experiences')
  //const data = await res.json();
  
  return experiences
}

async function HomePage() {
  const  experiencesCards = await getData ()

  return (
    <div className="pt-6 p-4">
    <h1 className="text-4xl md:text-6xl font-bold mb-4">Experiencias</h1>
    <p className="mb-4 text-zinc-800">Aquí puedes ver todas las experiencias activas. Participa para ganar increíbles recompensas.</p>
    <Cards experiencesCards={experiencesCards} />
    </div>
  );
}

export default HomePage;
