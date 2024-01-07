import InfoFormInput from "./InfoFormInput";

function InfoForm({inputObjects, submitButtonHandler}){
    return(
        <>
            {
                inputObjects.map(
                    (inputLabelAndHandler) => {
                        return <InfoFormInput key={inputLabelAndHandler.inputLabel} inputLabel={inputLabelAndHandler.inputLabel} 
                        inputType={"text"} inputValue={inputLabelAndHandler.inputValue} inputHandler={inputLabelAndHandler.handler}/>
                    }
                )
            }

            <input type="button" value={"Submit"} onClick={submitButtonHandler}/>
        </>
    );
}

export default InfoForm;