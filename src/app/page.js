import CardFilme from "@/components/CardFilme";
import Titulo from "@/components/Titulo";

export default function Home() {
  //mock
  const filmes = [
    {
      id: 1,
      titulo: "Star Wars",
      nota: 9.5,
      poster: "https://www.themoviedb.org/t/p/w94_and_h141_bestv2/nNTvClgnd3FfQ45IVQkk4HLHuBN.jpg"
    },
    {
      id: 2,
      titulo: "Barbie",
      nota: 9.0,
      poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/yRRuLt7sMBEQkHsd1S3KaaofZn7.jpg"
    }
  ] 


  return (
    <>
      <nav className="bg-slate-900 p-4">
        <h1 className="text-3xl font-bold">Fiap Filmes</h1>
      </nav>

      <Titulo>em alta</Titulo>

      <section className="flex flex-wrap gap-2">
        {filmes.map( filme => <CardFilme filme={filme} /> )}
      </section>

      <Titulo>lançamentos</Titulo>

    </>
  )
}
