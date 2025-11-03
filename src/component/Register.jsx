import { useState } from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [statusMessage, setStatusMessage] = useState("");
  const [statusType, setStatusType] = useState(""); // 'success' or 'error'

  const handleSignup = (e) => {
    e.preventDefault();
    const newErrors = {};
    setStatusMessage("");
    setStatusType("");

    if (!fullname.trim()) newErrors.fullname = "Please enter your Full Name.";
    if (!email.trim()) {
      newErrors.email = "Please enter your Email.";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) newErrors.email = "Please enter a valid Email address.";
    }
    if (!password) {
      newErrors.password = "Please enter your Password.";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }
    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Password and Confirm Password do not match.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setStatusType("success");
      setStatusMessage("Signup successful (demo only).");
      setFullName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    }
  };

  return (
    <main className="min-h-screen flex justify-center py-12 px-7 sm:px-6 lg:px-8 w-full bg-[oklch(0.98_0_0)] ">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        <div className="hidden md:block">
          <img
            src="/whatsapp4.jpg"
            alt="Banner"
            className="w-full h-[500px] rounded-lg object-cover"
          />
        </div>

        <div className="bg-white p-10 rounded-lg">
          {/* <div className="flex justify-center">
            <a href="/" className="block pb-10">
              <img src={logo} alt="Logo" className="h-20" />
            </a>
          </div> */}

          <h5 className="text-1xl font-bold text-blue-700 mb-1">WELCOME BACK!</h5>
          <h1 className="text-3xl font-bold mb-2 pb-3">CREATE ACCOUNT</h1>

          {statusMessage && (
            <div
              className={`mb-4 px-4 py-2 rounded text-center font-medium ${
                statusType === "success"
                  ? "bg-green-100 text-green-700 border border-green-400"
                  : "bg-red-100 text-red-700 border border-red-400"
              }`}
            >
              {statusMessage}
            </div>
          )}

          <form onSubmit={handleSignup} className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Full Name"
                value={fullname}
                onChange={(e) => {
                  setFullName(e.target.value);
                  setErrors((prev) => ({ ...prev, fullname: "" }));
                }}
                className="mt-1 block w-full px-3 py-2 border border-gray-400 rounded"
              />
              {errors.fullname && (
                <p className="text-red-500 text-sm mt-1">{errors.fullname}</p>
              )}
            </div>

            <div>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setErrors((prev) => ({ ...prev, email: "" }));
                }}
                className="mt-1 block w-full px-3 py-2 border border-gray-400 rounded"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setErrors((prev) => ({ ...prev, password: "" }));
                }}
                className="mt-1 block w-full px-3 py-2 border border-gray-400 rounded"
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
            </div>

            <div>
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                  setErrors((prev) => ({ ...prev, confirmPassword: "" }));
                }}
                className="mt-1 block w-full px-3 py-2 border border-gray-400 rounded"
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
              )}
            </div>

            <div className="flex items-center justify-between text-[14px] pb-3">
              <label className="flex items-center text-[14px]">
                <input type="checkbox" className="form-checkbox h-4 w-4 text-indigo-600" />
                <span className="ml-2 text-black-500 text-[14px]">Remember me</span>
              </label>
              <a href="/registration" className="hover:underline text-black-500 text-1xl">
                Forgot Password?
              </a>
            </div>

            <button
              type="submit"
              className="flex items-center justify-center w-full bg-blue-700 text-white py-2 px-4 rounded-md hover:bg-indigo-700 gap-1"
            >
              Sign up
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
          </form>

          <p className="mt-6 text-[16px] text-center text-black-500 text-1xl mb-0">
            Already have an account?{" "}
            <Link to="/signin" className="text-blue-700 hover:underline">
              Login Here
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
