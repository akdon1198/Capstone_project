import "./Register.css"
import { useState } from "react"
import bannerimg from "../images/banner.jpg"
function Register(){
    const[nameerr, setnameerr] = useState("")
    const[usernameerr, setusernameerr] = useState("")
    const[emailerr, setemailerr] = useState("")
    const[mobileerr, setmobileerr] = useState("")
    const[checkboxerr, setcheckboxerr] = useState("")
    const[field, setfield] = useState({
        name : "",
        username : "",
        email : "",
        mobile : "",
        active : false
    })
    function handlesubmit(){
        let flag = true
        if(field.name == ""){setnameerr("Field is required"); flag = false}
        else setnameerr("")
        if(field.username == ""){setusernameerr("Field is required"); flag = false}
        else setusernameerr("")

        if(field.mobile == ""){setmobileerr("Field is required"); flag = false}
        else setmobileerr("")

        if(field.email == ""){setemailerr("Field is required"); flag = false}
        else setemailerr("")
        
        if(field.active == false){setcheckboxerr("Check this box if you want to proceed"); flag = false}
        else setcheckboxerr("")
        
        if(field.mobile){
            if(field.mobile.length != 10){setmobileerr("please enter 10 digit number"); flag = false}
            else setmobileerr("")
        }

        if(field.email){
            let atSymbol = field.email.indexOf("@"); 
            let dotSymbol = field.email.lastIndexOf("."); 
            let spaceSymbol = field.email.indexOf(" "); 
            if ((atSymbol != -1) && 
                (atSymbol != 0) && 
                (dotSymbol != -1) && 
                (dotSymbol != 0) && 
                (dotSymbol > atSymbol + 1) && 
                (field.email.length > dotSymbol + 1) && 
                (spaceSymbol == -1)) {
                setemailerr("")
            } else { 
                flag = false
                setemailerr("Please Enter Right email") 
            }   
        }
        if(flag){
            localStorage.setItem("userdata", JSON.stringify(field))
        }
    }
    return(
        <>
        <div className="full-container">
            <div className="left-container">
                <img src={bannerimg} alt=""/>
                <h1>Discover new things on Superapp</h1>
            </div>
            <div className="right-container">
                <div className="form">
                    <h1>Super app</h1>
                    <h3>Create your new account</h3>
                    <div className="input">
                        <input type="text" placeholder="Name" style={nameerr != "" ? {border:"1px solid red"} : {}}
                        onChange={(e)=>setfield({...field, name : e.target.value})}/>
                        <p>{nameerr}</p>
                    </div>
                    <div className="input">
                        <input type="text" placeholder="UserName"  style={usernameerr != "" ? {border:"1px solid red"} : {}}
                        onChange={(e)=>setfield({...field, username : e.target.value})}/>                        
                        <p>{usernameerr}</p>
                    </div>
                    <div className="input">
                        <input type="email" placeholder="Email" style={emailerr != "" ? {border:"1px solid red"} : {}}
                        onChange={(e)=>setfield({...field, email : e.target.value})}/>
                        <p>{emailerr}</p>
                    </div>
                    <div className="input">
                        <input type="number" placeholder="Mobile"  style={mobileerr != "" ? {border:"1px solid red"} : {}}
                        onChange={(e)=>setfield({...field, mobile : e.target.value})}/>
                        <p>{mobileerr}</p>
                    </div>
                    <div className="input" style={{textAlign:"left"}}>
                        <input type="checkbox" style={{width:"auto", height:"auto", marginRight:"10px"}}
                        onChange={(e)=>setfield({...field, active:e.target.checked})}
                        />
                        <label style={{fontSize:"16px", color:"#7C7C7C"}}>Share my registration data with Superapp</label>
                        <p>{checkboxerr}</p>
                    </div>
                    <button onClick={handlesubmit}>SIGN UP</button>
                    <p>By clicking on Sign up. you agree to Superapp<span>Terms and Conditions of Use</span></p>
                    <p>To learn more about how Superapp collects, uses, shares and protects your personal data please head Superapp<span>Privacy Policy</span></p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Register