import { useState } from "react";

function ExperienceInput({inputLabel, inputType, inputValue, inputHandler}){

    console.log(inputLabel)
    return(
        <div>
            <label>{inputLabel}</label>
            {
                inputType === "text"?
                     <input type="text" value={inputValue} onChange={inputHandler}/>
                :
                    inputType === "date"?
                        <input type="date" value={inputValue} onChange={inputHandler}/>
                    :
                        <textarea value={inputValue} onChange={inputHandler}></textarea>
            }
            
        </div>
    )

}

export default ExperienceInput;