import Titulo from "@/components/Titulo";

export default function Home() {
  return (
    <>
      <nav className="bg-slate-900 p-4">
        <h1 className="text-3xl font-bold">Fiap Filmes</h1>
      </nav>

      <Titulo texto="em alta" />
      <Titulo texto="lançamentos" />

    </>
  )
}
