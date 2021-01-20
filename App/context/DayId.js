import React, {createContext, useState} from 'react';

export const DayIdContext = createContext();


export const DayIdProvider = (props) => {
    const [dayID, updateDayID] = useState('Day One');

    return (
        <DayIdContext.Provider value={[dayID, updateDayID]}>
            {props.children}
        </DayIdContext.Provider>
    )
}
