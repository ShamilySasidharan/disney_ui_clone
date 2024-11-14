
import Header from "./Header"
import useNowPlayingMovies from "../hooks/useNowPlayongMovies"

const Browse = ()=>{
    
// CALLING THE CUSTOM HOOK HERE 
   useNowPlayingMovies()

    return (
        <div><Header/></div>
        
    )
}

export default Browse