import React from "react";
import MovieHero from "../components/MovieHero/MovieHero.component";
const  Movie = () => {
  return (
    <>
    <MovieHero />
    <div className="my-12 container px-4 lg:w-1/2 lg:ml-64">
      <div className="flex flex-col items-start gap-3">
        <h2 className="text-gray-800 font-bold text-2xl">About the movie</h2>
        <p>Shang-Chi and The Legend of The Ten Rings features Simu Liu as Shang-Chi, who must confront the past he thought he left behind when he is drawn into the web of the mysterious Ten Rings organization. The film is directed by Destin Daniel Cretton and produced by Kevin Feige and Jonathan Schwartz.</p>
      </div>
  <div className="my-8">
  <hr />
  </div>


    </div>
    </>
  );
};

export default Movie;
