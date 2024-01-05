import { useState } from "react";

function InfoInput({inputLabel, inputType}){

    const [inputValue, setInputValue] = useState('')

    const handleOnBlur = () => {console.log(inputValue)}

    return(
        <div>
            <label>{inputLabel}</label>
            {
                inputType === "text"?
                     <input type="text" value={inputValue} onChange={(e) => {setInputValue(e.target.value)}} onBlur={handleOnBlur}/>
                :
                    <input type="date" value={inputValue} onChange={(e) => {setInputValue(e.target.value)}} onBlur={handleOnBlur}/>
            }
            
        </div>
    )

}

export default InfoInput;