import { useDispatch } from "react-redux"
import { addNowPlayingMovies } from "../utils/movieSlice"
import { useEffect } from "react"
import { API_OPTIONS } from "../utils/constants"

const useNowPlayingMovies = ()=>{
    const dispatch = useDispatch()

    // FETCHING THE MOVIES FROM TMDB AND UPDATE STORE TAKE CARE HERE 
    const getNowPlayingMovies = async()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/changes?page=1', API_OPTIONS)
        const movieResult =  await data.json()
        console.log("the movie fetched :",movieResult.results)
        // DISPATCH AN ACTION TO STORE IN THE STORE THEN CHECK THE REDUX FOR TO CONFIRM IT
        dispatch(addNowPlayingMovies(movieResult.results))
    }

    useEffect(()=>{
        getNowPlayingMovies()
    },[])
}

export default useNowPlayingMovies