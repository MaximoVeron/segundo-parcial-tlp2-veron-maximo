import { useState } from "react";
import { useEffect } from "react";

export const Navbar = () => {
  // TODO: Obtener datos del usuario desde /api/profile
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const getProfile = async () => {
      const resp = await fetch("http://localhost:3000/api/profile", {
        credentials: "include",
      });
      const profile = await resp.json();
      console.log("👉🏻 ~ ProfileCard.jsx:9 ~ fetchProfile ~ profile:", profile);
      setProfile(profile);
    };
    fetchProfile();
  }, []);

  // TODO: Implementar función handleLogout con POST a /api/logout usando credentials: 'include'
  // TODO: Después del logout exitoso, redireccionar a /login
  // TODO: Manejar errores apropiadamente

  const userName = "Usuario"; // TODO: Reemplazar con el nombre real del usuario obtenido de /api/profile

  return (
    <nav className="bg-gray-900 text-white h-16 left-0 right-0 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        <div className="text-2xl font-bold">Superhéroes App</div>

        <div className="hidden md:flex items-center space-x-6">
          <span className="text-gray-300">
            Bienvenido,{" "}
            <span className="font-semibold text-white">{userName}</span>
          </span>

          <button
            onClick={() => {
              // TODO: Implementar handleLogout aquí
            }}
            className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded transition-colors font-medium"
          >
            Cerrar Sesión
          </button>
        </div>
      </div>
    </nav>
  );
};
