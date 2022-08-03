import React from 'react'
import Boxes from '@material-ui/core/Box';
import {Link} from 'react-router-dom';
import { BsFillCheckCircleFill } from "react-icons/bs";

function MachineAddModel({closeModel}){
 
  return (
    <div className='overlay'>
    <Boxes className='register-pop-up-box'>
        <br />
        <BsFillCheckCircleFill size={20}/> Signup successful! <br/>
        <div className='register-popup-btn'>
        <Link to='/'><button>Ok</button></Link>
        </div>
        
    </Boxes>
    </div>
  )
}

export default MachineAddModel