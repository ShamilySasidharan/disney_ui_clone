import { DISNEY_LOGO, PROFILE_ICON } from "../utils/constants";
import { LuUserCircle } from "react-icons/lu";
import { GoHome } from "react-icons/go";
import { BiCategoryAlt } from "react-icons/bi";
import { FiTv } from "react-icons/fi";
import { MdOutlineSportsBaseball } from "react-icons/md";
import { MdOutlineMovie } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../utils/userSlice";

const Header = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
      dispatch(removeUser())
        navigate("/");
        // Sign-out successful.
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  return (
    <div className="bg-black h-screen flex w-full">
      <section className="bg-gradient-to-b from-slate-900 via-slate-950 to-black mx-auto p-4 ">
        {/* DISNEY LOGO */}
        <div className="p-2 m-2 w-20">
          <img src={DISNEY_LOGO} alt="logo" />
        </div>
        {/* ICONS */}
        <nav className="p-2 m-2 ">
          <ul className=" px-4 py-10 ">
            <li className="py-4">
              <img
                src={PROFILE_ICON}
                alt="profile_icon"
                width="20"
                height="20"
              />
            </li>
            <li className="py-4">
              <LuUserCircle size={20} className="text-white" />{" "}
            </li>
            <li className="py-4">
              <IoIosSearch size={20} className="text-white" />
            </li>
            <li className="py-4 ">
              <GoHome size={20} className="text-white" />
            </li>
            <li className="py-4 ">
              <MdOutlineMovie size={20} className="text-white" />
            </li>
            <li className="py-4 ">
              <FiTv size={20} className="text-white" />
            </li>
            <li className="py-4 ">
              <MdOutlineSportsBaseball size={20} className="text-white" />
            </li>
            <li className="py-4 ">
              <BiCategoryAlt size={20} className="text-white" />
            </li>
          </ul>
        </nav>

        {user && (
          <div>
            <button
              className="font-bold text-white py-2 px-4"
              onClick={handleSignOut}
            >
              Sign out
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

export default Header;
