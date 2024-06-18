"use client";
import { useEffect, useState } from "react";

import dynamic from "next/dynamic";
import { BsPlayFill } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";

export default function Trailer() {
  const ReactPlayer = dynamic(() => import("react-player/lazy"), {
    ssr: false,
  });

  const [showPlayer, setShowPlayer] = useState(false);
  const [trailer, setTrailer] = useState("");
  const [movieId, setMovieId] = useState("");

  useEffect(() => {
    setMovieId("movieId");

    const trailerIndex = movieId?.videos?.results?.findIndex(
      (element) => element.type === "Trailer"
    );

    const trailerURL = `https://www.youtube.com/watch?v=${
      movieId?.videos?.results[trailerIndex || 0]?.key
    }`;
    setTrailer(trailerURL);
  }, [movieId]);

  return (
    <div>
      <div
        className="inline-block pt-6 cursor-pointer"
        onClick={() => setShowPlayer(true)}
      >
        <div className="flex gap-2 items-center bg-white text-black px-4 py-2 mb-6 hover:bg-[#b4b4b4]">
          <BsPlayFill size={24} />
          Watch Trailer
        </div>
      </div>

      <div
        className={`absolute top-3 inset-x-[7%] md:inset-x-[13%] rounded overflow-hidden transition duration-1000 ${
          showPlayer ? "opacity-100 z-50" : "opacity-0 -z-10"
        }`}
      >
        <div className="flex items-center justify-between bg-black text-[#f9f9f9] p-3.5">
          <span className="font-semibold">Playing Trailer</span>
          <div
            className="cursor-pointer w-8 h-8 flex justify-center items-center rounded-lg opacity-50 hover:opacity-75 hover:bg-[#0F0F0F]"
            onClick={() => setShowPlayer(false)}
          >
            <IoMdClose className="h-5" />
          </div>
        </div>
        <div className="relative pt-[56.25%]">
          <ReactPlayer
            url={trailer}
            width="100%"
            height="100%"
            style={{ position: "absolute", top: "0", left: "0" }}
            controls={true}
            playing={showPlayer}
          />
        </div>
      </div>
    </div>
  );
}
