import { useState } from "react";
import { Link } from "react-router-dom";



export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    setErrors({});
    setServerError("");

    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.trim()) newErrors.email = "Please enter your email.";
    else if (!emailRegex.test(email)) newErrors.email = "Enter a valid email address.";

    if (!password.trim()) newErrors.password = "Please enter your password.";

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    // You can add integration here later
    console.log("Validated. Ready to integrate.");
  };

  return (
    <main className="min-h-screen flex justify-center py-12 px-7 sm:px-6 lg:px-8 w-full bg-[oklch(0.98_0_0)] ">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        {/* Banner Image */}
        <div className="hidden md:block">
          <img
            src="/whatsapp4.jpg"
            alt="Banner"
            className="w-full h-[500px] rounded-lg object-cover"
          />
        </div>

        {/* Login Form */}
        <div className="bg-white p-10 rounded-lg">
          <div className="flex justify-center">
            {/* <a href="/" className="block pb-10">
              <img src={logo} alt="Logo" className="h-20" />
            </a> */}
          </div>

          <h5 className="text-1xl font-bold text-blue-700 mb-1">WELCOME BACK!</h5>
          <h1 className="text-3xl font-bold mb-2 pb-3">SIGN IN</h1>

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="pb-1">
              <input
                id="email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setErrors((prev) => ({ ...prev, email: "" }));
                }}
                className="mt-1 block w-full px-3 py-2 border border-gray-400 rounded focus:ring-indigo-500 focus:border-indigo-500"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>
            <div>
              <input
                id="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setErrors((prev) => ({ ...prev, password: "" }));
                }}
                className="mt-1 block w-full px-3 py-2 border border-gray-400 rounded focus:ring-indigo-500 focus:border-indigo-500"
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
            </div>

            <div className="flex items-center justify-between text-[14px] pb-3">
              <label className="flex items-center text-[14px]">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-indigo-600"
                />
                <span className="ml-2 text-black-500 text-[14px]">Remember me</span>
              </label>
              <a href="/forget" className="hover:underline text-black-500 text-1xl">
                Forgot Password?
              </a>
            </div>

            <button
              type="submit"
              className="flex items-center justify-center w-full bg-blue-700 text-white py-2 px-4 rounded-md hover:bg-indigo-700 gap-1"
            >
              Sign in
              <span className="pt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6 h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                  />
                </svg>
              </span>
            </button>

            {serverError && (
              <p className="text-red-600 text-sm mt-3">{serverError}</p>
            )}
          </form>

          <p className="mt-6 text-[16px] text-center text-black-500 text-1xl mb-0">
            Don't have an account?{" "}
            <Link to="/create" className="text-blue-700 hover:underline">
              Create Here
            </Link>
          </p>

          <div className="text-center text-gray-500 my-2">or</div>
          <div className="mb-2 mt-2">
            <a
              href="#"
              className="flex items-center justify-center gap-2 border rounded-lg px-4 py-2 w-full hover:bg-gray-100"
            >
              <img src="/google.svg" alt="Google" className="h-5" />
              Continue with Google
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
