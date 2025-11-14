import { useEffect, useState } from "react";
import { LoadingComponent } from "../components/LoadingComponent";

// import { useNavigate } from "react-router";

export const HomePage = () => {
  // const navigate = useNavigate();
  // TODO: Integrar lógica para obtener superhéroes desde la API
  const [heroes, setHeroes] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [load, setLoad] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const resp = await fetch("http://localhost:3000/api/superheroes", {
          credentials: "include",
        });
        const data = await resp.json();
        setHeroes(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [load]);

  // TODO: Implementar useState para almacenar la lista de superhéroes
  // esto se implemento en la linea 8 del codigo por preferencias visuales
  // TODO: Implementar función para recargar superhéroes
  const handleReload = () => {
    setLoad((c) => c + 1);
  };
  if (loading) return <LoadingComponent />;
  if (!heroes) return <h1>Cargando heroes...</h1>;
  return (
    <div className="container mx-auto px-4 pb-8">
      <h1 className="text-4xl font-bold text-center mt-8 mb-4 text-gray-800">
        Galería de Superhéroes
      </h1>

      <div className="flex justify-center mb-8">
        <button
          type="button"
          onClick={handleReload}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded transition-colors"
        >
          Recargar
        </button>
      </div>
      {error ? (
        <div className="hidden bg-red-100 text-red-700 p-3 rounded mb-4">
          <p className="text-sm">Error al traer los personajes.</p>
        </div>
      ) : null}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {heroes.data.map((hero) => (
          <div
            key={hero.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            <img
              src={hero.image}
              alt={hero.superhero}
              className="h-64 object-cover w-full"
            />

            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">
                {hero.superhero}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
