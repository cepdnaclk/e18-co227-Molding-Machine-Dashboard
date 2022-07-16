import React, {useState} from 'react'
import Boxes from '@material-ui/core/Box';
import {Link} from 'react-router-dom';

function MachineAddModel(){
  return (
    <div className='overlay'>
    <Boxes className='pop-up-box'>
        Machine Added <br/>
        <div className='machine-add-popup-btn'>
        <Link to='/'><button>Add again</button></Link>
        <Link to='/Home'><button>go back</button></Link>
        </div>
        
    </Boxes>
    </div>
  )
}

export default MachineAddModel