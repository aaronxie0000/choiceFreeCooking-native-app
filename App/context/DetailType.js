import React, {createContext, useState} from 'react';

export const DetailTypeContext = createContext();

//which detail is requested
export const DetailTypeProvider = (props) => {
    const [detailType, setDetailType] = useState('None');

    return (
        <DetailTypeContext.Provider value={[detailType, setDetailType]}>
            {props.children}
        </DetailTypeContext.Provider>
    )
}
