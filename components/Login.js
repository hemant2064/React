import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { login } from "../utils/userSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      const response = await fetch(
        "https://foodrush-58f10.web.app/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      dispatch(
        login({
          user: data.user,
          token: data.token,
        })
      );

      navigate("/");
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-80px)] bg-gray-50 px-4 py-10">
      <div className="mx-auto flex max-w-6xl items-center justify-center">

        <div className="grid w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-xl md:grid-cols-2">

          {/* Left Side */}
          <div className="hidden bg-orange-500 p-10 text-white md:flex md:flex-col md:justify-center">
            <h1 className="mb-4 text-4xl font-bold">
              Welcome Back! 👋
            </h1>

            <p className="mb-8 text-lg leading-relaxed text-orange-50">
              Login to FoodRush and discover delicious food
              from your favorite restaurants.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🍕</span>
                <span>Delicious food at your doorstep</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-2xl">🚀</span>
                <span>Fast and easy delivery</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-2xl">❤️</span>
                <span>Your favorite food, anytime</span>
              </div>
            </div>
          </div>

          {/* Login Form */}
          <div className="p-6 sm:p-10 md:p-12">

            <div className="mb-8 text-center">
              <h2 className="text-3xl font-bold text-gray-800">
                Login
              </h2>

              <p className="mt-2 text-gray-500">
                Sign in to continue to FoodRush
              </p>
            </div>

            <form
              onSubmit={handleLogin}
              className="space-y-5"
            >

              {/* Email */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                />
              </div>

              {/* Password */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Password
                </label>

                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                />
              </div>

              {/* Error */}
              {error && (
                <div className="rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
                  {error}
                </div>
              )}

              {/* Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-orange-500 py-3.5 font-semibold text-white shadow-md transition hover:bg-orange-600 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Logging in..." : "Login"}
              </button>
            </form>

            {/* Signup */}
            <div className="mt-8 text-center text-sm text-gray-600">
              Don't have an account?

              <Link
                to="/signup"
                className="ml-1 font-semibold text-orange-500 hover:text-orange-600"
              >
                Create Account
              </Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;