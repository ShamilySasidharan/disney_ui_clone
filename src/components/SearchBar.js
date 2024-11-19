import { useDispatch, useSelector } from "react-redux"
import { SUPPORTED_LANGUAGE } from "../utils/constants"
import langConst from "../utils/languageConst"
import { changeLanguage } from "../utils/languageConfig"

const SearchBar = ()=>{
   const dispatch = useDispatch()

   //SUBSCRIBE TO THE STORE
   const languageOption = useSelector((store)=>store.langConfig?.lang)
   
   const handleLanguageChange = (e)=>{
    // ACTION DISPATCH WHEN OPTION CHANGE AND STORE TO THE REDUX 
    dispatch(changeLanguage(e.target.value))

   }
  


    return (
        <div className="pt-[2%]">
        <form className="p-6 flex items-center">
            <input
                className="px-10 py-4 my-4 mx-8 font-semibold w-3/4 rounded-lg text-black"
                placeholder={langConst[languageOption]?.searchPlaceholder}
                type="text"
            />
            <button
                className="p-4 m-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white w-[100px] rounded-lg font-bold"
            >
                {/* IT IS IMPORTANT TO GIVE LIKE langConst[languageOption] OTHERWISE ERROR  */}
                {langConst[languageOption]?.searchBtn}
            </button>
            <select className="bg-slate-900 text-white font-semibold cursor-pointer rounded-md p-4 m-4" onClick={handleLanguageChange}>
                {
                    SUPPORTED_LANGUAGE.map((lang)=> <option key={lang.id}value={lang.id}>{lang.name}</option>)
                  
                }
              
            </select>
        </form>
    </div>
    
    )
}

export default SearchBar