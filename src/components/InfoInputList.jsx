import { useState } from "react";
import InfoInput from "./InfoInput";

function InfoInputList(){
    const inputLabels = ["Name:", "Email:", "Phone no:"]
    return(
        <>
            {
                inputLabels.map(
                    (inputLabel) => {
                        return <InfoInput key={inputLabel} inputLabel={inputLabel} inputType={"text"}/>
                    }
                )
            }
        </>
    );
}

export default InfoInputList;