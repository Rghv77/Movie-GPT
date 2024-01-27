import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { auth } from "../utils/Firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";
import { MdLogout } from "react-icons/md";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const favList = useSelector((store) => store.fav.item);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        if(window.location.pathname==="/") navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    // Unsiubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
    // Toggle GPT Search
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className=" fixed top-0 z-50 bg-slate-400  shadow-md w-screen px-8 py-2 bg-gradient-to-r from-black  flex flex-col md:flex-row justify-between">
      <Link to="/"><img className="w-44" src={LOGO} alt="logo" /></Link>
      {user && (
        <div className="flex p-2 justify-between">
          {showGptSearch && (
            <select
              className="p-2 m-2 bg-gray-900 text-white"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="md:py-2 md:px-4 mr-4 md:mx-4  md:my-2 md:bg-purple-800   text-white md:rounded-lg font-mono"
            onClick={handleGptSearchClick}
          >
           🔎{showGptSearch ? " Homepage" : " GPT Search"}
          </button>
          <Link to="/favourite_movies">
          <button
            className="md:py-2 md:px-4 mr-4 md:mx-4 md:my-2  md:bg-orange-500 md:hover:bg-white text-white  md:rounded-lg font-mono"
          >
            🛒 My Movies ({favList.length})
          </button>
          </Link>
          <img
            className="hidden md:block w-16 h-12"
            alt="usericon"
            src={user?.photoURL}
          />
          <button onClick={handleSignOut} className="font-bold text-white flex flex-col items-center justify-center ml-2 font-mono ">
          <MdLogout /> sign out
          </button>
        </div>
      )}
    </div>
  );
};
export default Header;
