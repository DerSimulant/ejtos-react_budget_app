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
        

            <div className='alert alert-success' style={{ marginLeft: '2rem'}}>
                  <div className="input-group-prepend">
                <label className='alert alert-success' htmlFor="inputGroupSelect01">Currency</label>
                </div>
                <select className='alert alert-success' id="inputGroupSelect01" onChange={(event) => setCurrency(event.target.value)}onKeyDown={handleKeyDown}>
                
                <option value="$" name="dollar"> Dollar</option>
                <option value="Pf" name="pound">Pound</option>
                <option value="€" name="euro">Euro</option>
                <option value="R" name="ruppee">Ruppee</option>
                  </select>
                </div>
               
    );
};
  

export default Currency;
