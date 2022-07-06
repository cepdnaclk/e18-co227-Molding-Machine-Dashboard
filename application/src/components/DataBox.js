import React, {useEffect, useState} from 'react';
import Boxes from '@material-ui/core/Box';
import moment from 'moment';

function DataBox(props) {

    // Assign machine ID
    const machineId = props.ID

    // Get machine data from the API
    const [machine, setMachine] = useState([])
    useEffect(() => {
        if(machineId !== undefined) {
            fetch('http://localhost:3001/api/machines/'+ machineId)
            .then(results => {
                return results.json()
            })
            .then(jsonData => {
                setMachine(jsonData) 
            });
        }
    }, [machineId]);

    // Assign data from database
    let prodCount, prodRate, failCount, startDate, endDate;
    machine.map(m => {
        prodCount = m.moldShots
        prodRate = m.prodRate
        failCount = m.failedShots
        startDate = moment(m.prod_start_date).utc().format('YYYY-MM-DD')
        endDate = moment(m.prod_end_date).utc().format('YYYY-MM-DD')
    });

    return (
        <Boxes className='machine-databox1'>
            <table className='machine-data-table'>
                <tbody>
                    <tr>
                        <td>Product Count:</td>
                        <td><Boxes className='machine-box1-numbers'>{prodCount}</Boxes></td>

                        <td>Start Date:</td>
                        <td><Boxes className='machine-box1-date'>{startDate}</Boxes></td>
                    </tr>
                    <tr>
                        <td>Failed Count:</td>
                        <td><Boxes className='machine-box1-numbers'>{failCount}</Boxes></td>
                        <td>End Date:</td>
                        <td><Boxes className='machine-box1-date'>{endDate}</Boxes></td>
                    </tr>
                    <tr>
                        <td>Product Rate:</td>
                        <td><Boxes className='machine-box1-numbers'>{prodRate}</Boxes></td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                    </tr>
                </tbody>
            </table>
        </Boxes>
    );
}

export default DataBox;