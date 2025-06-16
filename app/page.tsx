import Cards from "@/components/Cards"

async function getData (){
  const res = await fetch('http://localhost:3000/api/experiences')
  const data = await res.json();
  
  return data
}

async function HomePage() {
  const  experiencesCards = await getData ()

  return (
    <>
    <h1 className="text-6xl font-bold mb-4">Experiencias</h1>
    <p className="mb-4 text-zinc-800">Aquí puedes ver todas las experiencias activas. Participa para ganar increíbles recompensas.</p>
    <Cards experiencesCards={experiencesCards} />
    </>
  );
}

export default HomePage;
