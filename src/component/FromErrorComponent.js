import React,{useState,useEffect} from 'react'

const FromErrorComponent = (error) => {
const[errorMessage,setErrorMessage]=useState("")
console.log("error component")
function setError(){
if(error==="auth/email-already-in-use"){
    setErrorMessage("Email Already register. So please sign...")  
}
else{
    setErrorMessage(error)
}
}

useEffect(()=>{
    setError()
},[])
  return (
    <div>
        <h3>{errorMessage}</h3>
    </div>
  )
}

export default FromErrorComponent