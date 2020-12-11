import React, { useState } from 'react'
import Axios from 'axios'
import './style.css'



function Login() {
  const [usernameReg,setUsernameReg]=useState('')
  const [usermailReg,setUsermailReg]=useState('')
  const [passwordReg,setPasswordReg]=useState('')

  const [username,setUsername]=useState('')
  const [usermail,setUsermail]=useState('')
  const [password,setPassword]=useState('')

  const [loginStatus, setLoginStatus] = useState("")

  const register=()=>{
    if(usernameReg===''||usermailReg===''||passwordReg===''){
      alert('Incomplete details')
    }else{
    Axios.post('http://localhost:4000/register',{
      u_name:usernameReg,
      u_mail:usermailReg,
      u_password:passwordReg,
    }).then((response)=>{
      console.log(response);

    })
    alert("You are successfully registered!")
  }
  }

  // const login=(e)=>{
  //   Axios.post('http://localhost:4000/login',{
  //     u_name:username,
  //     u_mail:usermail,
  //     u_password:password,
  //   }).then((response)=>{
      
  //     if(response.data.message){
  //       setLoginStatus(response.data.message);
  //       }else{
  //         setLoginStatus('Welcome '+response.data[0].u_name)
  //         console.log(response.data[0].u_name);
  //           window.location.assign(
  //             // `http://localhost:3000/MySubbed?name=${user_name}&user_id=${user_id}`
  //             `http://localhost:3000/home`
  //           );
          
  //       }
  //   })
  //   e.preventDefault()
  // }
  //
  const login = () => {
    Axios
      .post('http://localhost:4000/login', {
        u_name:username,
        u_mail:usermail,
        u_password:password,
      })
      .then((res) => {
        if (res.data === 'ERROR') {
        } else {
          const user_pass = res.data[0].u_password;
          const user_name = res.data[0].u_name;
          const user_id = res.data[0].u_id;
          if (user_pass === password) {
            console.log(user_name);
            window.location.assign(
              `http://localhost:3000/home?name=${user_name}&user_id=${user_id}`
            );
          } else {
            alert('Incorrect Credentials');
          }
        }
      })
      .catch((err) => {
        setUsermail('');
        setUsermail('');
        setPassword('');
        alert('We are facing problem ! Make sure you are signed up before');
      });
  };

  // const [headingText,setHeadingText] =useState("")
  const [isRMousedOver,setIsRMouseOver]=useState(false)
  const [isMousedOver,setIsMouseOver]=useState(false)
  const [name,setName]=useState("")

  // function handlesubmitClick(event){
  //   setHeadingText(name)
  //   event.preventDefault()
  // }
  function handleRMouseOver(){
    setIsRMouseOver(true)
  }
  function handleRMouseOut(){
    setIsRMouseOver(false)
  }
  function handleMouseOver(){
    setIsMouseOver(true)
  }
  function handleMouseOut(){
    setIsMouseOver(false)
  }
  // function handleChange(event){
  //   setName(event.target.value)
  // }


  return (
    <div className="container">
      <h1>Welcome to YouTube DataBase</h1>
      <form className="form">
        {/* <h1>Hello {headingText}</h1> */}
        <input type="text" placeholder="First Name"  onChange={(e)=>{setUsernameReg(e.target.value)}}/>
        <input type="text" placeholder="Last Name" />
        <input type="email" placeholder="Email" onChange={(e)=>{setUsermailReg(e.target.value)}}/>
        
        <input type="password" placeholder="Password" onChange={(e)=>{setPasswordReg(e.target.value)}}/>
        <button style={{backgroundColor:isRMousedOver?"black":"white"}} onClick={register}
        onMouseOver={handleRMouseOver}
        onMouseOut={handleRMouseOut}
        >Register</button>
      </form>


      <form className="form" onSubmit={login}>
        {/* <h1>Welcome Back {headingText}</h1> */}
        {/* <input type="text"  placeholder="Username"  onChange={(e)=>{setUsername(e.target.value)}}/> */}
        <input type="text"  placeholder="Email"  onChange={(e)=>{setUsermail(e.target.value)}}/>
       
        
        <input type="password" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}}/>
        <button style={{backgroundColor:isMousedOver?"black":"white"}} onClick={login}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        >Login</button>
      </form>
      <h1>{loginStatus}</h1>
    </div>
  );
}

export default Login;