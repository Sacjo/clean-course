(() => {
  function getMovieById(id: number) {
    console.log({ id });
  }

  function getMovieCastById(id: number) {
    console.log({ id });
  }

  function getaActorBioById(id: number) {
    console.log({ id });
  }

  // Crear una película
  interface Movie {
    title: string;
    description: string;
    rating: number;
    cast: string[];
  }

  function createMovie({ title, description, rating, cast }: Movie) {
    console.log({ title, description, rating, cast });
  }

  function checkFullName(fullName: string) {
    console.log({ fullName });
    return true;
  }

  function createActor(fullName: string, birthdate: Date): boolean {
    if (checkFullName(fullName)) return false;

    console.log("Crear actor", birthdate);
    return true;
  }
})();
