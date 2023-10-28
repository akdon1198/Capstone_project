import "./WeatherNews.css"
import line from "../images/Line.png"
import cloud from "../images/cloud.png"
import wind from "../images/wind.png"
import droplet from "../images/droplet.png"
import temperature from "../images/temperature.png"
import boyimg from "../images/image 14.png"
import weatherimg from "../images/image 15.png"
import { useEffect, useState } from "react"
import timerbackground from "../images/Ellipse 3.png"
// import timercountdown from "../images/Ellipse 4.png"
import { CountdownCircleTimer } from "react-countdown-circle-timer"
import arrowup from "../images/arrowup.png"
import arrowdown from "../images/arrowdown.png"
import axios from "axios"
function WeatherNews(){
    let userdata = JSON.parse(localStorage.getItem("userdata"))
    let movies = JSON.parse(localStorage.getItem("movies"))
    const [text, settext] = useState(JSON.parse(localStorage.getItem("text")) || "")
    const [wn, setwn] = useState("")
    const[time, settime] = useState("")
    const[date, setdate] = useState("")
    const[seconds, setseconds] = useState(0)
    const[minutes, setminutes] = useState(0)
    const[hours, sethours] = useState(0)
    const[play, setplay] = useState(false)
    useEffect(()=>{
        let hour = new Date().getHours();
        let minute = new Date().getMinutes()
        let ampm = hour >= 12 ? "PM" : "AM";
        hour = hour % 12
        hour = hour ? hour : 12;
        minute = minute < 10 ? "0" + minute : minute
        let temptime = hour + ":" + minute + " " + ampm
        settime(temptime)
    })
    useEffect(()=>{
        let date = new Date().getDate()
        let month = new Date().getMonth() + 1
        let yyyy = new Date().getFullYear();
        let tempdate = (date < 10 ? "0" + date : date) + "-" + (month < 10 ? "0" + month : month) + "-" + yyyy
        setdate(tempdate)
    })
    useEffect(()=>{
        async function WeatherNews(){
            try{
                let data = await axios("https://newsapi.org/v2/everything?q=tesla&from=2023-09-24&sortBy=publishedAt&apiKey=aeea274ed8af4ec08540f8d67a27e965")
                setwn(data.data.articles[0])
            }catch(err){
                console.log(err);
            }
        }
        WeatherNews();
    },[])
    function handlechange(e){
        settext(e.target.value)
        localStorage.setItem("text", JSON.stringify(e.target.value))
    }
    function increasehour(){
        sethours(hours + 1)
    }
    function decreasehour(){
        if(hours == 0) return
        sethours(hours - 1)
    }

    function increasemin(){
        if(minutes == 59) setminutes(0)
        else setminutes(minutes + 1)
    }
    function decreasemin(){
        if(minutes == 0) return
        setminutes(minutes - 1)
    }

    function increasesec(){
        if(seconds == 59) setseconds(0)
        else setseconds(seconds + 1)
    }

    function decreasesec(){
        if(seconds == 0) return
        setseconds(seconds - 1)
    }

    function tohourminsec(remainingTime){
        let totaltime = Math.floor(remainingTime / 60)
        let seconds = remainingTime % 60
        let hours = Math.floor(totaltime / 60)
        let min = totaltime % 60
        return `${hours}:${min}:${seconds}`
    }

    function setorrest(){
        if(play == false){
            setplay(true)
        }else{
            setseconds(0)
            sethours(0)
            setminutes(0)
            setplay(false)
        }
    }
    return(
        <div className="weathernews-container">
            <div className="weathernews-left">
                <div className="weathernews-lefttop">
                    <div>
                        <img src={boyimg} alt="" />
                    </div>
                        <div className="userdetail">
                            <h2>{userdata.name}</h2>
                            <h2>{userdata.email}</h2>
                            <h1>{userdata.username}</h1>
                        </div>
                        <div className="catdetail">
                            {
                                movies.map(movie => {
                                    return(
                                        <button>{movie}</button>
                                    )
                                })
                            }
                        </div>
                </div>
                <div className="weathernews-leftbottom">
                    <div className="top">
                        <h1>{date}</h1>
                        <h1>{time}</h1>
                    </div>
                    <div className="bottom">
                        <div>
                            <img src={cloud} alt="" />
                            <h3>Heavy rain</h3>
                        </div>
                        <img src={line}/>
                        <div>
                            <h1>24°C</h1>
                            <div>
                                <img src={temperature} className="vector"/>
                                <div>
                                    <p>1010mbar</p>
                                    <p>Pressure</p>
                                </div>
                            </div>
                        </div>
                        <img src={line}/>
                        <div>
                                <div>
                                    <img src={wind} className="vector"/>
                                    <div>
                                        <p>3.7km/h</p>
                                        <p>Wind</p>
                                    </div>
                                </div>
                                <div>
                                    <img src={droplet} className="vector"/>
                                    <div>
                                        <p>83%</p>
                                        <p>humidity</p>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
                <div className="notes-container">
                    <h1>All notes</h1>
                    <textarea onChange={handlechange} value={text}>
                        {text}
                    </textarea>
                </div>
                <div className="timer-container">
                    <div className="timercountdown-cont">
                            <img src={timerbackground} alt="" />
                            <CountdownCircleTimer
                             isPlaying = {play}
                             duration={seconds + minutes * 60 + hours * 60 * 60}
                             colors={'#004777'}
                             size={110}
                            >
                                {({ remainingTime }) => tohourminsec(remainingTime)}
                            </CountdownCircleTimer>
                    </div>
                    <div className="settimer-cont">
                        <div className="top">
                            <h2>Hours</h2>
                            <h2>Minutes</h2>
                            <h2>Seconds</h2>
                        </div>
                        <div className="middle">
                            <div>
                                <img src={arrowup} alt="" onClick={increasehour} style={{cursor:"pointer"}}/>
                                <h2>{hours < 10 ? "0" + hours : hours}</h2>
                                <img src={arrowdown} alt="" onClick={decreasehour} style={{cursor:"pointer"}}/>
                            </div>
                            :
                            <div>
                                <img src={arrowup} alt="" onClick={increasemin} style={{cursor:"pointer"}}/>
                                <h2>{minutes < 10 ? "0" + minutes : minutes}</h2>
                                <img src={arrowdown} alt="" onClick={decreasemin} style={{cursor:"pointer"}}/>
                            </div>
                            :
                            <div>
                                <img src={arrowup} alt="" onClick={increasesec} style={{cursor:"pointer"}}/>
                                <h2>{seconds < 10 ? "0" + seconds : seconds}</h2>
                                <img src={arrowdown} alt="" onClick={decreasesec} style={{cursor:"pointer"}}/>
                            </div>
                        </div>
                        <div className="bottom">
                            <button onClick={setorrest}>{play ? "Stop" : "Start"}</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="weathernews-right">
                <div className="top">
                    <img src={wn.urlToImage} alt="" />
                    <div>
                        <h1>
                            {
                                wn.title
                            }
                        </h1>
                        <p>{date} | {time}</p>
                    </div>
                </div>
                <div className="bottom">
                    <p>
                        {
                            wn.description
                        }
                    </p>
                </div>
            </div>
        </div>
    )
}

export default WeatherNews