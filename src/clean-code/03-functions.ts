(() => {
  // función para obtener información de una película por Id
  function getMovieById(id: string) {
    console.log({ id });
  }

  // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
  function getInformationActorsById(id: string) {
    console.log({ id });
  }

  // funcion para obtener el bio del actor por el id
  function getActorById(id: string) {
    console.log({ id });
  }

  // Crear una película
  interface MovieParams {
    title: string;
    description: string;
    rating: number;
    cast: string[];
  }
  function createMovie(dataMovie: MovieParams) {
    const { title, description, rating, cast } = dataMovie;
    console.log({ title, description, rating, cast });
  }

  // Crea un nuevo actor
  function createActor(fullName: string, birthdate: Date): boolean {
    // tarea asincrona para verificar nombre
    // ..
    // ..
    if (fullName === "fernando") return false;

    console.log("Crear actor", birthdate);
    return true;
  }
  // Continuar
  interface PropsPayAmount {
    isDead: boolean;
    isSeparated: boolean;
    isRetired: boolean;
  }
  const getPayAmount = ({
    isDead = false,
    isSeparated = true,
    isRetired = false,
  }: PropsPayAmount): number => {
    let result;

    if (isDead) {
      result = 1500;
    }
    if (isSeparated) {
      result = 2500;
    }

    return isRetired ? 3000 : 4000;
  };
})();
