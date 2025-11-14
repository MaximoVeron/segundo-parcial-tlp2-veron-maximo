import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useForm } from "../hooks/useForm";

export const LoginPage = () => {
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  // TODO: Integrar lógica de autenticación aquí
  const login = async () => {
    setLoading(true);
    try {
      const resp = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
        credentials: "include",
      });
      const data = await resp.json();
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  // TODO: Implementar useForm para el manejo del formulario
  const { formState, handleChange, handleReset } = useForm({
    username: "",
    password: "",
  });
  const { username, password } = formState;
  // TODO: Implementar función handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-8">
      <div className="max-w-md w-full bg-white rounded-lg shadow-xl p-8">
        {/* Título */}
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Iniciar Sesión
        </h2>

        {/* TODO: Mostrar este div cuando haya error */}
        {error ? (
          <div className="hidden bg-red-100 text-red-700 p-3 rounded mb-4">
            <p className="text-sm">
              Credenciales incorrectas. Intenta nuevamente.
            </p>
          </div>
        ) : null}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-700 font-medium mb-2"
            >
              Usuario
            </label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Ingresa tu usuario"
              className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              onChange={handleChange}
              value={username}
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium mb-2"
            >
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Ingresa tu contraseña"
              className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              onChange={handleChange}
              value={password}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded transition-colors"
          >
            Ingresar
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-4">
          ¿No tienes cuenta?
          <Link
            to="/register"
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            Regístrate aquí
          </Link>
        </p>
      </div>
    </div>
  );
};
