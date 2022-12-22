import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = (props) => {
    const { dispatch } = useContext(AppContext);

    const [currency, setCurrency] = useState('');

     
    const handleKeyDown = (event) => {
        if (event.key === 'Enter'){
            dispatch({
                type: 'CHG_CURRENCY',
                payload: currency,
        });
    };};

    return (
        

            <div  style={{ marginLeft: '2rem'}}>
                  
               
   
                <select className='alert alert-success' id="inputGroupSelect01" onChange={(event) => setCurrency(event.target.value)}onKeyDown={handleKeyDown}>
                <option defaultValue>Select Currency</option>
                <option value="$" name="dollar"> Dollar</option>
                <option value="Pf" name="pound">Pound</option>
                <option value="€" name="euro">Euro</option>
                <option value="R" name="ruppee">Ruppee</option>
                  </select>
                </div>
               
    );
};
  

export default Currency;
