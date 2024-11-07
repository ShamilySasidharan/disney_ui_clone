// import { useNavigate } from "react-router-dom"
import { LOGIN_SCREEN_IMAGE, STAR_BACKGROUND } from "../utils/constants";
import Footer from "./Footer";
import Header from "./Header";
import { useRef, useState } from "react";
import { LoginValidation, SignupValidation } from "../utils/validate";

const Login = () => {
  //   const navigate = useNavigate();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const phone = useRef(null);

  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showSignUpForm, setSignUpForm] = useState(false);
  const [loginErr, setLoginErrMsg] = useState("");
  const [signupErr, setSignUpErrMsg] = useState("");

  // SHOW ORIGINAL LOGIN FORM WHEN USER CLICK THE LANDING LOGIN BTN
  const handleLogin = () => {
    setShowLoginForm(!showLoginForm);
  };

  // VALIDATION && DATA (EMAIL,PASSWORD ETC) USING useRef
  const handleBtnClick = () => {
    // console.log(email.current.value)
    // console.log(password.current.value)
    // console.log(name.current.value)
    // console.log(phone.current.value)
    // navigate("/browse");
    // const messageLogin = LoginValidation(email.current.value,password.current.value)
    // console.log(message)
    // setLoginErrMsg(messageLogin || "")
    // const messageSignup = SignupValidation(email.current.value,password.current.value,phone.current.value,name.current.value)
    // setSignUpErrMsg(messageSignup || "")
    if (showSignUpForm) {
      const messageSignup = SignupValidation(
        email.current.value,
        password.current.value,
        phone.current.value,
        name.current.value
      );
      setSignUpErrMsg(messageSignup || "");
    } else {
      const messageLogin = LoginValidation(
        email.current.value,
        password.current.value
      );
      setLoginErrMsg(messageLogin || "");
    }
  };

  // TOGGLE BETWEEN THE SIGNUP AND LOGIN FROM
  const toggleForm = () => {
    setSignUpForm(!showSignUpForm);
  };

  return (
    <div className="flex bg-yellow w-full h-screen relative">
      {/* HEADER */}
      <div className="w-12/12 mx-auto ">
        <Header />
      </div>
      {/* LOGIN LANDING PAGE CONTENT */}
      <div className="flex-1 flex-col justify-center items-center bg-gradient-to-b from-slate-900 via-slate-950 to-black ">
        <img src={STAR_BACKGROUND} alt="star" />
        <div className="flex flex-col text-white text-center p-4 pt-30 ">
          <img
            src={LOGIN_SCREEN_IMAGE}
            alt="login_screenImage"
            className="w-[350px] h-[150px] mx-auto"
          />
          <h1 className="py-3 font-bold text-3xl">Login to Disney+ Hotstar</h1>
          <p>
            Start watching from where you left off, personalise for kids and
            more
          </p>
          <button
            className="text-xl font-bold bg-gradient-to-r from-blue-500 to-blue-700  text-center rounded-md w-60 py-3 mx-auto my-4"
            onClick={handleLogin}
          >
            Login
          </button>
          {/* SHOW LOGIN FORM WHEN LOGIN BTN CLICKED */}
          {showLoginForm && (
            <div className=" bg-black h-screen justify-center items-center flex fixed inset-0 bg-opacity-75">
              <div className=" rounded-3xl shadow-md py-10 px-20 bg-neutral-900">
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className=" flex flex-col mx-4 px-6 "
                >
                  <h1
                    className="text-white text-center font-bold text-2xl p-2 "
                    onClick={toggleForm}
                  >
                    {showSignUpForm ? (
                      <p className="text-left px-2 flex flex-col">
                        Sign Up
                        <span className="text-sm cursor-pointer hover:font-extrabold decoration-white ">
                          Already a user ? Login now.
                        </span>
                      </p>
                    ) : (
                      <p className="text-left px-2 flex flex-col">
                        Login
                        <span className="text-sm cursor-pointer py-3  hover:font-extrabold decoration-white ">
                          Not a user ? Signup now.
                        </span>
                      </p>
                    )}
                  </h1>
                  {showSignUpForm && (
                    <div className="flex flex-col">
                      <input
                        ref={name}
                        type="text"
                        placeholder="Full Name"
                        className="px-12 py-5 m-4 rounded-md border border-white bg-neutral-900"
                      />

                      <input
                        ref={phone}
                        type="phone"
                        placeholder="Phone Number"
                        className="px-12 py-5 m-4 rounded-md border border-white bg-neutral-900"
                      />
                    </div>
                  )}

                  <input
                    type="email"
                    ref={email}
                    placeholder="Enter your email here..."
                    className="px-12 py-5 m-4 rounded-md border border-white bg-neutral-900"
                  />

                  <input
                    ref={password}
                    type="password"
                    placeholder="Password..."
                    className="px-12 py-5 m-4 rounded-md border border-white bg-neutral-900"
                  />
                  {/* ERROR MESSAGE */}

                  <p className="text-red-700 font-bold p-2 text-lg">
                    {showSignUpForm ? signupErr : loginErr}
                  </p>
                  <button
                    className="px-12 py-4 m-4 bg-gradient-to-r from-blue-500 to-blue-700  rounded-md text-white font-bold"
                    onClick={handleBtnClick}
                  >
                    {showSignUpForm ? "Sign Up " : "Login "}
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>

        {/* FOOTER */}
        <Footer className="" />
      </div>
    </div>
  );
};

export default Login;
