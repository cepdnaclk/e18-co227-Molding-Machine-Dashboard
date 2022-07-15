import React, {useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';
import DataBox from '../components/DataBox';
import GraphBox from '../components/GraphBox';
import MachineDetailBox from '../components/MachineDetailBox';
import MoldDetailBox from '../components/MoldDetailBox';
import axios from '../auth/axios';

const ADD_MACHINE_URL = '/api/machines/';

function MachineData(props) {

    // Read sent machineID from homepage
    const data = useLocation().state;
    const machineId = data.id;

    // Get mold ID from API
    const [machine, setMachine] = useState([])
    useEffect(() => {
        fetch('http://localhost:3001/api/machines/'+ machineId)
        .then(results => {
            return results.json()
        })
        .then(jsonData => {
            setMachine(jsonData) 
        });

    }, [machineId]);

    // Assign mold ID
    let moldId;
    machine.map(m => moldId = m.moldID);
  
    

    const handleRemove = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.delete(ADD_MACHINE_URL + machineId);
            
            // When the request is success
            if(response?.data?.status === 201) {
                console.log(response?.data?.message);

                // Reset all the fields

                // Add popup message
            }

        } catch (error) {
            if(error?.response?.data?.status === 400){
                // Almost all the errors goes here
                console.log(error?.response?.data?.message);
            }
            else {
                console.log(error?.response?.data?.message);
            }

            // Add popup for above cases
        }

    }



    return (
        <div className="machine-data-container">
            <table className='machine-data-page-table'>
                <tbody>
                    <tr>
                        <td><DataBox ID = {machineId} /></td>
                        <td><GraphBox ID = {machineId}/></td>
                    </tr>
                    <tr>
                        <td colSpan={2}><MachineDetailBox ID = {machineId} /></td>
                    </tr>
                    <tr>
                        <td colSpan={2}><MoldDetailBox ID = {moldId} /></td>
                    </tr>
                </tbody>
            </table>

            <button className='add-btn-div' onClick={handleRemove}>remove</button> 
        </div>
    )
}

export default MachineData;