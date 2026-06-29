"use client";

import { useState, FormEvent } from "react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    e.preventDefault();

    let valid = true;

    if (!email.includes("@")) {
      setEmailError(true);
      valid = false;
    } else {
      setEmailError(false);
    }

    if (password.length < 8) {
      setPasswordError(true);
      valid = false;
    } else {
      setPasswordError(false);
    }

    if (!valid) return;

    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      alert("Login Successful (Simulated)");
      setLoading(false);
    }, 1500);
  };

  return (
    <main className="flex-grow flex items-center justify-center px-margin-mobile md:px-margin-desktop py-stack-lg relative z-10">
      <div className="w-full max-w-[480px] glass-card rounded-2xl p-stack-lg shadow-2xl flex flex-col gap-stack-lg">
        {/* Brand */}
        <div className="text-center">
          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary tracking-tighter mb-2">
            GadgetHub
          </h1>

          <p className="font-body-md text-on-surface-variant">
            Sign in to access your tech universe.
          </p>
        </div>

        {/* Form */}

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-stack-md"
        >
          {/* Email */}

          <div className="flex flex-col gap-1">
            <label
              htmlFor="email"
              className="font-label-md text-label-md text-on-surface-variant px-1"
            >
              Email Address
            </label>

            <div className="relative group input-focus-effect rounded-xl transition-all duration-300">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors">
                mail
              </span>

              <input
                id="email"
                type="email"
                required
                placeholder="name@company.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setEmailError(false);
                }}
                className="w-full pl-12 pr-4 py-4 bg-surface-container-low border-none rounded-xl font-body-md focus:ring-2 focus:ring-primary focus:bg-white transition-all outline-none"
              />
            </div>

            {emailError && (
              <span className="text-error font-label-sm text-label-sm px-1 mt-1">
                Please enter a valid email address.
              </span>
            )}
          </div>

          {/* Password */}

          <div className="flex flex-col gap-1">
            <label
              htmlFor="password"
              className="font-label-md text-label-md text-on-surface-variant px-1"
            >
              Password
            </label>

            <div className="relative group input-focus-effect rounded-xl transition-all duration-300">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors">
                lock
              </span>

              <input
                id="password"
                required
                placeholder="••••••••"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setPasswordError(false);
                }}
                className="w-full pl-12 pr-12 py-4 bg-surface-container-low border-none rounded-xl font-body-md focus:ring-2 focus:ring-primary focus:bg-white transition-all outline-none"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-outline hover:text-on-surface transition-colors cursor-pointer active:scale-95"
              >
                <span className="material-symbols-outlined">
                  {showPassword ? "visibility_off" : "visibility"}
                </span>
              </button>
            </div>

            <div className="flex justify-between items-center px-1 mt-1">
              {passwordError ? (
                <span className="text-error font-label-sm text-label-sm">
                  Password must be at least 8 characters.
                </span>
              ) : (
                <span />
              )}

              <a
                href="#"
                className="text-primary font-label-sm text-label-sm hover:underline ml-auto"
              >
                Forgot Password?
              </a>
            </div>
          </div>

          {/* Actions */}

          <div className="flex flex-col gap-4 mt-2">
            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-primary text-on-primary font-label-md text-label-md rounded-xl shadow-lg hover:shadow-primary/20 hover:bg-primary/90 transition-all duration-300 active:scale-95 flex items-center justify-center gap-2 disabled:opacity-80 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <span className="material-symbols-outlined animate-spin">
                    sync
                  </span>
                  Logging in...
                </>
              ) : (
                <>
                  Login
                  <span className="material-symbols-outlined">
                    arrow_forward
                  </span>
                </>
              )}
            </button>

            <div className="relative flex items-center py-2">
              <div className="flex-grow border-t border-outline-variant" />

              <span className="flex-shrink mx-4 text-outline font-label-sm text-label-sm">
                OR
              </span>

              <div className="flex-grow border-t border-outline-variant" />
            </div>

            <button
              type="button"
              className="w-full py-4 bg-white border border-outline-variant text-on-surface font-label-md text-label-md rounded-xl hover:bg-surface-container-low transition-all duration-300 active:scale-95 flex items-center justify-center gap-3 shadow-sm"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84C6.71 6.31 9.14 5.38 12 5.38z"
                />
              </svg>

              Sign in with Google
            </button>
          </div>
        </form>

        {/* Footer */}

        <div className="text-center mt-2">
          <p className="font-body-md text-on-surface-variant">
            Do not have an account?{" "}
            <a
              href="#"
              className="text-primary font-bold hover:underline"
            >
              Register
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}