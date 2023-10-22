import "./WeatherNews.css"
import line from "../images/Line.png"
import cloud from "../images/cloud.png"
import wind from "../images/wind.png"
import droplet from "../images/droplet.png"
import temperature from "../images/temperature.png"
import boyimg from "../images/image 14.png"
import weatherimg from "../images/image 15.png"
function WeatherNews(){
    return(
        <div className="weathernews-container">
            <div className="weathernews-left">
                <div className="weathernews-lefttop">
                    <div>
                        <img src={boyimg} alt="" />
                    </div>
                        <div className="userdetail">
                            <h2>KK Vinay</h2>
                            <h2>Vinay090@gmail.com</h2>
                            <h1>vinay060</h1>
                        </div>
                        <div className="catdetail">
                            <button>Horror</button>
                            <button>Thriller</button>
                            <button>Action</button>
                            <button>Fiction</button>
                        </div>
                </div>
                <div className="weathernews-leftbottom">
                    <div className="top">
                        <h1>2-20-2023</h1>
                        <h1>07:35 PM</h1>
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
                                    <span>1010mbar</span>
                                    <br />
                                    <span>Pressure</span>
                                </div>
                            </div>
                        </div>
                        <img src={line}/>
                        <div>
                                <div>
                                    <img src={wind} className="vector"/>
                                    <div>
                                        <span>3.7km/h</span>
                                        <br />
                                        <span>Wind</span>
                                    </div>
                                </div>
                                <div>
                                    <img src={droplet} className="vector"/>
                                    <div>
                                        <span>83%</span>
                                        <br />
                                        <span>humidity</span>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="weathernews-right">
                <div className="top">
                    <img src={weatherimg} alt="" />
                    <div>
                        <h1>
                            Want to climb Mount Everest?
                        </h1>
                        <p>2-20-2023 | 07:35 PM</p>
                    </div>
                </div>
                <div className="bottom">
                    <p>
                    In the years since human beings first reached the summit of Mount Everest in 1953, climbing the world’s highest mountain has changed dramatically. Today, hundreds of mountaineers manage the feat each year thanks to improvements in knowledge, technology, and the significant infrastructure provided by commercially guided expeditions that provide a veritable highway up the mountain for those willing to accept both the......
                    </p>
                </div>
            </div>
        </div>
    )
}

export default WeatherNews