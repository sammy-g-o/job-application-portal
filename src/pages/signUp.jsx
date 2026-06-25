import { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { postJson } from "../helper";
import { useNavigate } from "react-router-dom";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateSignUp({ email, password }) {
  const errors = {};

  if (!email.trim()) {
    errors.email = "Email is required.";
  } else if (!EMAIL_REGEX.test(email)) {
    errors.email = "Enter a valid email address.";
  }

  if (!password) {
    errors.password = "Password is required.";
  } else if (password.length < 8) {
    errors.password = "Password must be at least 8 characters.";
  } else if (!/[A-Z]/.test(password)) {
    errors.password = "Password must include an uppercase letter.";
  } else if (!/[a-z]/.test(password)) {
    errors.password = "Password must include a lowercase letter.";
  } else if (!/[0-9]/.test(password)) {
    errors.password = "Password must include a number.";
  } else if (!/[^A-Za-z0-9]/.test(password)) {
    errors.password = "Password must include a special character.";
  }

  return errors;
}

function SignUp() {
  const [signUpDetails, setSignUpDetails] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSignUpDetailsInput = function (e, elName) {
    setSignUpDetails((prev) => ({ ...prev, [elName]: e.target.value }));
    if (errors[elName]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[elName];
        return next;
      });
    }
  };

  const handleSubmit = async function (e) {
    e.preventDefault();
    const nextErrors = validateSignUp(signUpDetails);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      // proceed to next step
      try {
        const user = await postJson("/api/auth/register", {
          fullName: signUpDetails.fullName,
          email: signUpDetails.email.trim(),
          password: signUpDetails.password,
          role: "APPLICANT",
        });
        console.log("Registered:", user);
        navigate("/sign-in");
      } catch (error) {
        console.error(error);
      }
    }
  };
  return (
    <main className="w-full pt-23">
      <section className="flex flex-col gap-8">
        <div className="flex flex-col gap-10 p-8 b bg-white rounded-3xl">
          <div className="flex flex-col gap-2">
            <div className="flex gap-3 justify-center">
              <div className="rounded-full bg-primary h-1 w-21"></div>
              <div className="rounded-full bg-[#E7E8E9] h-1 w-21"></div>
              <div className="rounded-full bg-[#E7E8E9] h-1 w-21"></div>
            </div>
            <h1 className="text-primary-dark font-bold font-headline text-2xl">
              Begin your ascent
            </h1>
            <span className="text-text-regular text-[16px] font-medium">
              Step 1: Account Essentials
            </span>
          </div>
          <form
            noValidate
            onSubmit={handleSubmit}
            className="flex flex-col gap-6"
          >
            <div className="flex flex-col gap-2 ">
              <label
                htmlFor="fullName"
                className="font-semibold text-xs text-[#404944B2] uppercase"
              >
                FULL NAME
              </label>
              <input
                type="text"
                className="px-4 py-4 5 rounded-lg bg-surface-elevated text-[16px] text-[#94A3B8]"
                id="fullName"
                name="full name"
                value={signUpDetails.fullName}
                onChange={(e) => handleSignUpDetailsInput(e, "fullName")}
              />
            </div>
            <div className="flex flex-col gap-2 ">
              <label
                htmlFor="email"
                className="font-semibold text-xs text-[#404944B2] uppercase"
              >
                Executive Email
              </label>
              <input
                type="email"
                className="px-4 py-4 5 rounded-lg bg-surface-elevated text-[16px] text-[#94A3B8]"
                id="email"
                name="email"
                autoComplete="email"
                value={signUpDetails.email}
                onChange={(e) => handleSignUpDetailsInput(e, "email")}
                aria-invalid={errors.email ? "true" : "false"}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {errors.email && (
                <span id="email-error" className="text-sm text-tertiary">
                  {errors.email}
                </span>
              )}
            </div>
            <div className="flex flex-col gap-2 ">
              <label
                htmlFor="password"
                className="font-semibold text-xs text-[#404944B2] uppercase"
              >
                Password
              </label>
              <input
                type="password"
                className="px-4 py-4 5 rounded-lg bg-surface-elevated text-[16px] text-[#94A3B8]"
                id="password"
                name="password"
                autoComplete="new-password"
                value={signUpDetails.password}
                onChange={(e) => handleSignUpDetailsInput(e, "password")}
                aria-invalid={errors.password ? "true" : "false"}
                aria-describedby={
                  errors.password ? "password-error" : undefined
                }
              />
              {errors.password && (
                <span id="password-error" className="text-sm text-tertiary">
                  {errors.password}
                </span>
              )}
            </div>
            <button
              type="submit"
              className="bg-primary p-5 rounded-xl font-headline font-bold text-white flex gap-4 justify-center items-center"
            >
              Continue to Profile
              <FaArrowRightLong fill="white" />
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

export default SignUp;
