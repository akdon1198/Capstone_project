import "./Category.css"
import x from "../images/X.png"
import warningimg from "../images/warningpng.png"
import moviedataconst , {moviechoosenconst} from "../Constant.js"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Category(){
    const[globalindex, setglobalindex] = useState(-1)
    const[moviedata, setmoviedata] = useState(moviedataconst)
    const[moviechoosen, setmoviechoosen] = useState(moviechoosenconst)
    const[warning, setwarning] = useState(false)
    let navigate = useNavigate()
    function handleclick(index){
        setwarning(false)
        if(moviedata[index].border == "5px solid white"){
            moviedata[index].border = "5px solid #11B800"
            moviedata[index].catcardindex = globalindex + 1;
            moviechoosen[globalindex + 1] = {
                catindex : index
            }
            setmoviechoosen([...moviechoosen]);
            setmoviedata([...moviedata])
            setglobalindex(globalindex + 1)
        }else{
            moviedata[index].border = "5px solid white"
            for(let i = moviedata[index].catcardindex; i < 9; i++){
                if(moviechoosen[i + 1] == null){
                    moviechoosen[i] = null
                    break;
                }else{
                    moviechoosen[i] = moviechoosen[i + 1]
                    moviedata[moviechoosen[i].catindex].catcardindex = i
                }
            }
            setmoviechoosen([...moviechoosen])
            setmoviedata([...moviedata])
            setglobalindex(globalindex - 1)
        }
    }

    function handlecat(index){
        moviedata[moviechoosen[index].catindex].border = "5px solid white"
        for(let i = index; i < 9; i++){
            if(moviechoosen[i + 1] == null){
                moviechoosen[i] = null
                break;
            }else{
                moviechoosen[i] = moviechoosen[i + 1]
                moviedata[moviechoosen[i].catindex].catcardindex = i
            }
        }
        setmoviechoosen([...moviechoosen])
        setmoviedata([...moviedata])
        setglobalindex(globalindex - 1)
    }

    function handlewarning(){
        globalindex > 1 ? setwarning(false) : setwarning(true)
        let arr = []
        if(globalindex > 1){
            for(let i = 0; i < 9; i++){
                if(moviechoosen[i] == null) break;
                arr.push(moviedata[moviechoosen[i].catindex].name)
            }
            localStorage.setItem("movies", JSON.stringify(arr))
            navigate("/weathernews")
        }
    }

    return(
        <div className="category-container">
            <div className="category-left">
                <h2>Super app</h2>
                <h1>Choose your entertainment category</h1>
                {
                    moviechoosen.map((movie, index) => {
                        return(
                            <>
                            {
                                (globalindex > 1 && index < 2) || (globalindex < 2)?
                                movie && <button className="special-button">{moviedata[movie.catindex].name}<img src={x} alt="" onClick={() => handlecat(index)}/></button>
                                :
                                movie && <button>{moviedata[movie.catindex].name}<img src={x} alt="" onClick={() => handlecat(index)}/></button>
                            }
                            </>
                        )
                    })
                }
                <div className="warning" style={warning ? {display:"flex"}: {display:"none"}}>
                    <img src={warningimg} alt=""/>
                    <h2>Minimum 3 category required</h2>
                </div>
            </div>
            <div className="category-right">
                {
                    moviedata.map((movie, index) => {
                        return(
                            <div className="category-card" style={{backgroundColor:[movie.color], border:[movie.border]}} onClick={() => handleclick(index)}>
                                <h3>{movie.name}</h3>
                                <img src={movie.img} alt=""/>
                            </div>
                        )
                    })
                }
                <button onClick={handlewarning}>Next Page</button>
            </div>
        </div>
    )
}

export default Category