"use client";

import { FormEvent, useMemo, useState } from "react";

export default function RegisterForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const passwordStrength = useMemo(() => {
    if (!form.password.length)
      return {
        width: "0%",
        color: "",
      };

    if (form.password.length < 6)
      return {
        width: "33%",
        color: "bg-error",
      };

    if (form.password.length < 10)
      return {
        width: "66%",
        color: "bg-tertiary",
      };

    return {
      width: "100%",
      color: "bg-primary-container",
    };
  }, [form.password]);

  const passwordMismatch =
    form.confirmPassword &&
    form.confirmPassword !== form.password;

  const handleSubmit = async () => {
    e.preventDefault();

    if (passwordMismatch) return;

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSuccess(true);

      // TODO:
      // Register API
      // router.push("/login")
    }, 1500);
  };

  return (
    <div className="w-full max-w-[480px] m-auto mt-30 bg-white rounded-2xl shadow-[0_8px_30px_rgb(15,23,42,0.08)] overflow-hidden z-10 transition-all duration-300">
      <div className="p-stack-lg md:p-12">
        {/* Heading */}

        <div className="text-center mb-stack-lg">
          <h2 className="text-2xl font-extrabold tracking-tight text-blue-800 md:text-4xl lg:text-5xl pb-2">
            Create Account
          </h2>

          <p className="text-on-surface-variant font-body-md mb-5">
            Join the hub of precision-engineered gadgets.
          </p>
        </div>

        {/* Form */}

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5"
        >
          {/* Name */}

          <div className="group">
            <label
              htmlFor="name"
              className="block font-label-md text-label-md text-on-surface-variant mb-2 px-1"
            >
              Full Name
            </label>

            <div className="relative">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline-variant group-focus-within:text-primary transition-colors">
                person
              </span>

              <input
                id="name"
                type="text"
                required
                placeholder="John Doe"
                value={form.name}
                onChange={(e) =>
                  setForm({
                    ...form,
                    name: e.target.value,
                  })
                }
                className="bg-blue-300/20 w-full pl-12 pr-4 py-3.5 bg-surface-container-low border-2 border-transparent rounded-xl font-body-md text-on-surface placeholder:text-outline-variant focus:bg-white focus:border-primary transition-all duration-300"
              />
            </div>
          </div>

          {/* Email */}

          <div className="group">
            <label
              htmlFor="email"
              className="block font-label-md text-label-md text-on-surface-variant mb-2 px-1"
            >
              Email Address
            </label>

            <div className="relative">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline-variant group-focus-within:text-primary transition-colors">
                mail
              </span>

              <input
                id="email"
                type="email"
                required
                placeholder="name@company.com"
                value={form.email}
                onChange={(e) =>
                  setForm({
                    ...form,
                    email: e.target.value,
                  })
                }
                className="bg-blue-300/20 w-full pl-12 pr-4 py-3.5 bg-surface-container-low border-2 border-transparent rounded-xl font-body-md text-on-surface placeholder:text-outline-variant focus:bg-white focus:border-primary transition-all duration-300"
              />
            </div>
          </div>

          {/* Password */}

          <div className="group">
            <label
              htmlFor="password"
              className="block font-label-md text-label-md text-on-surface-variant mb-2 px-1"
            >
              Password
            </label>

            <div className="relative">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline-variant group-focus-within:text-primary transition-colors">
                lock
              </span>

              <input
                id="password"
                minLength={8}
                required
                placeholder="••••••••"
                type={showPassword ? "text" : "password"}
                value={form.password}
                onChange={(e) =>
                  setForm({
                    ...form,
                    password: e.target.value,
                  })
                }
                className="bg-blue-300/20 w-full pl-12 pr-12 py-3.5 bg-surface-container-low border-2 border-transparent rounded-xl font-body-md text-on-surface placeholder:text-outline-variant focus:bg-white focus:border-primary transition-all duration-300"
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
                className="absolute right-4 top-1/2 -translate-y-1/2 text-outline-variant hover:text-primary transition-colors"
              >
                <span className="material-symbols-outlined">
                  {showPassword
                    ? "visibility_off"
                    : "visibility"}
                </span>
              </button>
            </div>

            <div className="mt-2 flex gap-1 h-1 w-full rounded-full overflow-hidden bg-surface-container">
              <div
                className={`rounded-full transition-all duration-500 ${passwordStrength.color}`}
                style={{
                  width: passwordStrength.width,
                }}
              />
            </div>

            <p className="text-[11px] text-outline mt-1 px-1">
              Min. 8 characters with a mix of symbols.
            </p>
          </div>

          {/* Confirm Password */}

          <div className="group">
            <label
              htmlFor="confirm_password"
              className="block font-label-md text-label-md text-on-surface-variant mb-2 px-1"
            >
              Confirm Password
            </label>

            <div className="relative">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline-variant group-focus-within:text-primary transition-colors">
                shield
              </span>

              <input
                id="confirm_password"
                type={showPassword ? "text" : "password"}
                required
                placeholder="••••••••"
                value={form.confirmPassword}
                onChange={(e) =>
                  setForm({
                    ...form,
                    confirmPassword: e.target.value,
                  })
                }
                className={`bg-blue-300/20 w-full pl-12 pr-4 py-3.5 bg-surface-container-low border-2 rounded-xl font-body-md text-on-surface placeholder:text-outline-variant focus:bg-white focus:border-primary transition-all duration-300 ${passwordMismatch
                    ? "border-error"
                    : "border-transparent"
                  }`}
              />
            </div>
          </div>

          {/* Terms */}

          <div className="flex items-start gap-3 mt-2 px-1">
            <input
              id="terms"
              type="checkbox"
              required
              checked={form.terms}
              onChange={(e) =>
                setForm({
                  ...form,
                  terms: e.target.checked,
                })
              }
              className="mt-1 w-4 h-4 text-primary border-outline-variant rounded focus:ring-primary/20 transition-all cursor-pointer"
            />

            <label
              htmlFor="terms"
              className="text-label-sm font-label-sm text-on-surface-variant leading-tight"
            >
              I agree to the{" "}
              <a
                href="#"
                className="text-primary hover:underline"
              >
                Terms of Service
              </a>{" "}
              and{" "}
              <a
                href="#"
                className="text-primary hover:underline"
              >
                Privacy Policy
              </a>
              .
            </label>
          </div>

          {/* Submit */}

          <button
            type="submit"
            disabled={loading}
            className={`mt-4 w-full py-4 text-white font-bold font-label-md text-label-md rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group active:scale-95 ${success
                ? "bg-primary-container"
                : "bg-primary hover:bg-primary/90 hover:scale-[1.01] shadow-primary/20"
              }`}
          >
            {loading ? (
              <>
                <span className="material-symbols-outlined animate-spin">
                  progress_activity
                </span>
                Processing...
              </>
            ) : success ? (
              <>
                <span className="material-symbols-outlined">
                  check_circle
                </span>
                Success!
              </>
            ) : (
              <>
                Register Account
                <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
                  arrow_forward
                </span>
              </>
            )}
          </button>
        </form>

        {/* Footer */}

        <div className="mt-8 pt-8 border-t border-outline-variant text-center">
          <p className="font-body-md text-on-surface-variant">
            Already have an account?{" "}
            <a
              href="#"
              className="text-primary font-bold hover:underline underline-offset-4 decoration-primary transition-all"
            >
              Login here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}