import './Home.css'
import React from 'react'
import { Tab, ConnectButton, Icon, TabList} from 'web3uikit'
import Logo from '../images/Netflix.svg'
import {movies} from '../utility/loader'


export default function Home() {
  return (
    <>
    <div className="navBar">
    <div className='leftSideContainer'>
    <img src={Logo}/> 
    <div className='tabContainer'>                    
                    <TabList defaultActiveKey={1} tabStyle='bar'>          
                    <Tab tabKey={1} tabName={"Favorites"} ></Tab>
                    <Tab tabKey={2} tabName={"Movies"} ></Tab>
                    <Tab tabKey={3} tabName={"Documentaries"} > </Tab>          
                    <Tab tabKey={4} tabName={"MyList"} > </Tab>

                    </TabList>                            
                  </div>                 
          </div>    
          <div className="connectionContainer">                          
          <Icon fill="white" size={24} svg="bell" />                     
          <ConnectButton />
        </div>     

    </div>
    <div className='scene'>
                        <img className='sceneImg' src={movies[0].Scene}></img>

                      </div> 

    </>
  )
}
