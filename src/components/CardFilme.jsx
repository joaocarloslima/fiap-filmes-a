
export default function CardFilme({filme}){
    return (
        <div className="flex flex-col items-center gap-1 w-40 m-2">
            <img className="rounded" src={filme.poster} alt="poster do filme" />
            <span className="font-bold text-lg w-full line-clamp-1 text-center">
                {filme.titulo}
            </span>
            <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-amber-500">
                    <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                </svg>
                <span className="text-slate-400">
                    {filme.nota}
                </span>
            </div>
            <a href="#" className="bg-pink-600 w-full rounded text-center py-1 hover:bg-pink-900">
                detalhes
            </a>
        </div>
    )
}