import './Home.css'
import React from 'react'
import { ConnectButton, Icon} from 'web3uikit'
import Logo from '../images/Netflix.svg'
export default function Home() {
  return (
    <>
    <div className="navBar">

    <img src={Logo}/> 

      <div className="connectionContainer">                
          
        <Icon fill="white" size={24} svg="bell" />      
        <ConnectButton />
      </div>
       
    </div>

  
    
    </>
  )
}
