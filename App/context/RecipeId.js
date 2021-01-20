import React, {createContext, useState} from 'react';

export const RecipeIdContext = createContext();


export const RecipeIdProvider = (props) => {
    const [recipeID, updateRecipeID] = useState(1);

    return (
        <RecipeIdContext.Provider value={[recipeID, updateRecipeID]}>
            {props.children}
        </RecipeIdContext.Provider>
    )
}
