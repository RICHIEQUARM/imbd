import Image from "next/image";
import { BsFillHandThumbsUpFill } from "react-icons/bs";

export default async function Moviepage({ params }) {
  const movieId = params.id;

  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`
  );
  const movie = await res.json();

  return (
    <div className="w-full">
      <div className="flex p-5 md:pt-8 flex-col md:flex-row content-center max-w-6xl mx-auto md:space-x-6">
        <Image
          alt="the real movie page"
          src={`https://image.tmdb.org/t/p/original/${
            movie.backdrop_path || movie.poster_path
          }`}
          width={500}
          height={300}
          className="rounded-lg"
          style={{ maxWidth: "100%", height: "100%" }}
        ></Image>
        <div className="p-4">
          <h2 className="pb-5 text-lg font-bold ">
            {movie.title || movie.name}
          </h2>
          <p className="text-lg mb-3">{movie.overview}</p>
          <p className="flex mb-3">
            <span className="font-semibold mr-1">Date Released:</span>

            {movie.release_date || movie.first_air_date}
          </p>
          <div className=" flex content-center ">
            <p className="mb-3 flex">
              <span className="font-semibold mr-1">Ratings:</span>
              {movie.vote_count}
              <BsFillHandThumbsUpFill className="h-5 mr-1 ml-3 cursor-pointer" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
