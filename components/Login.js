

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { login } from "../utils/userSlice";
import { AUTH_LOGIN_API } from "../utils/constants";
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
    const response = await fetch(AUTH_LOGIN_API,
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

    console.log("Login response:", data);

    if (!response.ok) {
      throw new Error(
        data.message || "Login failed"
      );
    }

    dispatch(
      login({
        user: data.user,
        token: data.token,
      })
    );

    navigate("/", { replace: true });

  } catch (error) {
    console.log("Login failed:", error.message);

    setError(
      error.message ||
        "Unable to login. Please try again."
    );

  } finally {
    setLoading(false);
  }
};
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="mx-auto flex max-w-6xl items-center justify-center">
        <div className="grid w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-xl md:grid-cols-2">
          {/* ================= LEFT SIDE ================= */}

          <div className="hidden bg-orange-500 p-10 text-white md:flex md:flex-col md:justify-center">
            <h1 className="mb-4 text-4xl font-bold">Welcome Back! 👋</h1>

            <p className="mb-8 text-lg leading-relaxed text-orange-50">
              Login to FoodRush and discover delicious food from your favorite
              restaurants.
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

          {/* ================= LOGIN FORM ================= */}

          <div className="p-6 sm:p-10 md:p-12">
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-bold text-gray-800">Login</h2>

              <p className="mt-2 text-gray-500">
                Sign in to continue to FoodRush
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-5">
              {/* ================= EMAIL ================= */}

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoComplete="email"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                />
              </div>

              {/* ================= PASSWORD ================= */}

              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Password
                </label>

                <input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  autoComplete="current-password"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                />
              </div>

              {/* ================= ERROR ================= */}

              {error && (
                <div className="rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
                  {error}
                </div>
              )}

              {/* ================= LOGIN BUTTON ================= */}

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-orange-500 py-3.5 font-semibold text-white shadow-md transition hover:bg-orange-600 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Logging in..." : "Login"}
              </button>
            </form>

            {/* ================= SIGNUP ================= */}

            <div className="mt-8 text-center text-sm text-gray-600">
              <span>Don't have an account?</span>

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
