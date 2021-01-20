import React, {createContext, useState} from 'react';

export const RecipeInfoContext = createContext();

//all the information of the selected recipeID
export const InfoProvider = (props) => {
    const [recipeInfo, updateRecipeInfo] = useState({});

    return (
        <RecipeInfoContext.Provider value={[recipeInfo, updateRecipeInfo]}>
            {props.children}
        </RecipeInfoContext.Provider>
    )
}

