import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const {  remaining, dispatch, currency } = useContext(AppContext);
    const [budget, setBudget] = useState('');

    const handleChange = (event) => {
        setBudget(event.target.value);
      };

      const handleKeyDown = (event) => {
        if (event.key === 'Enter'){
            dispatch({
                type: 'SET_BUDGET',
                payload: budget,
           });

        if (remaining <= 0) {
            alert("The budget is not allowed to be less than the spending ");
            
            return; }
        
        if (budget > 20000) {
            alert("You are not allowed to allocate more than 20.000,-");
            
            return; }
        
    }
    };
    
      //  return budget = event.target.value
      //  }
    //if(budget < remaining) {
       // alert("The value cannot exceed remaining funds  £"+remaining);
        //setBudget("");
        //return;
   // }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}{<input
                        type='number'
                        id='budget'
                        value={budget}
                        style={{ marginLeft: '2rem' , size: 2}}
                        onChange={handleChange}
                        onKeyDown={handleKeyDown}>
                        </input>}</span>
        </div>
    );
};

export default Budget;
