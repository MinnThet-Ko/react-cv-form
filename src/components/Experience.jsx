import { useState } from "react";
import InfoInput from "./InfoInput";

function Experience({inputFields}){
   
    return (
        <div>
            {
                inputFields.map((inputField) => {
                    return <InfoInput key={inputField.inputLabel} inputLabel={inputField.inputLabel} inputType={inputField.inputType}/>
                })
            }
        </div>
    );
}

export default Experience;