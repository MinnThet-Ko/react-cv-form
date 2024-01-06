import { useState } from "react";
import InfoFormInput from "./InfoFormInput";

function ExperienceForm({inputFields, buttonHandler}){

    return (
        <>
            {
                inputFields.map((inputField) => {
                     return <InfoFormInput key={inputField.inputLabel} inputLabel={inputField.inputLabel} inputType={inputField.inputType} inputValue={inputField.inputValue} inputHandler={inputField.inputHandler}/>
                    }
                )
            }
            
            <input type="button" value={"Add"} onClick={buttonHandler}/>

        </>
    )

}

export default ExperienceForm;