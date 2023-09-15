"use client"

import { useEffect, useState } from "react"
import { HeartIcon } from '@heroicons/react/24/solid'
import { HeartIcon as HeartIconOutline } from '@heroicons/react/24/outline'

export default function CardFilme({filme}){
    const [ favorito, setFavorito ] = useState(false) // hooks
    const image_url = "https://image.tmdb.org/t/p/w200/" + filme.poster_path

    useEffect(() => {
        let favoritos = JSON.parse( localStorage.getItem("favoritos") ) || []
        const favorito = favoritos.find(f => f.id === filme.id)
        setFavorito(favorito)
    }, [])

    function favoritar(){
        setFavorito(true)

        const options = {
            method: 'POST',
            headers: {
              accept: 'application/json',
              'content-type': 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZTkyMjY2NzQ4MWFiMjA3ZDY0MjQ1MGIwZWZiNDYxZSIsInN1YiI6IjVlYTA5ZTZiYmU0YjM2MDAxYzU5NWExNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Vhu0pPCiIwmtrpyOHdBlQid8HJJllaHthn1MERS_ANg'
            },
            body: JSON.stringify({media_type: 'movie', media_id: filme.id, watchlist: true})
          };
          
          fetch('https://api.themoviedb.org/3/account/9269654/watchlist', options)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));

        let favoritos = JSON.parse( localStorage.getItem("favoritos") ) || []
        favoritos.push(filme)
        localStorage.setItem("favoritos", JSON.stringify(favoritos))
    }
    
    function desfavoritar(){
        setFavorito(false) 

        const options = {
            method: 'POST',
            headers: {
              accept: 'application/json',
              'content-type': 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZTkyMjY2NzQ4MWFiMjA3ZDY0MjQ1MGIwZWZiNDYxZSIsInN1YiI6IjVlYTA5ZTZiYmU0YjM2MDAxYzU5NWExNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Vhu0pPCiIwmtrpyOHdBlQid8HJJllaHthn1MERS_ANg'
            },
            body: JSON.stringify({media_type: 'movie', media_id: filme.id, watchlist: false})
          };
          
          fetch('https://api.themoviedb.org/3/account/9269654/watchlist', options)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));

        let favoritos = JSON.parse( localStorage.getItem("favoritos") ) || []
        const favoritosAtualizado = favoritos.filter(f => f.id !== filme.id )
        localStorage.setItem("favoritos", JSON.stringify(favoritosAtualizado))
    }

    return (
        <div className="flex flex-col items-center justify-between gap-1 w-40 m-2 relative">
            { favorito ? 
                <HeartIcon 
                    className="h-6 w-6 text-red-600 absolute top-1 right-2 cursor-pointer"
                    onClick={desfavoritar}
                 />
                :
                <HeartIconOutline 
                    className="h-6 w-6 absolute top-1 right-2 cursor-pointer hover:text-red-600" 
                    onClick={favoritar}
                />
            }

            <img className="rounded h-56" src={image_url} alt="poster do filme" />
            <span className="font-bold text-lg w-full line-clamp-1 text-center">
                {filme.title}
            </span>
            <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-amber-500">
                    <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                </svg>
                <span className="text-slate-400">
                    {filme.vote_average.toFixed(1)}
                </span>
            </div>
            <a href="#" className="bg-pink-600 w-full rounded text-center py-1 hover:bg-pink-900">
                detalhes
            </a>
        </div>
    )
}