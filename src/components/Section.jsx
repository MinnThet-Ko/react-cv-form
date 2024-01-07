import { useState } from "react";
import InfoInputList from "./InfoInputList";
import InfoForm from "./InfoFrom";
import ExperienceList from "./ExperienceList";
import ExperienceForm from "./ExperienceForm";
import "../styles/SectionStyles.css"

function Section({sectionType, sectionDescription, sectionInputObjects, submitButtonHandler, selectedEduExp, sectionInputFields }){

    

    const workInputFields = [
        {
            inputLabel: "Company:",
            inputType: "text"
        },
        {
            inputLabel: "Title:",
            inputType: "text"
        },
        {
            inputLabel: "Responsibilities:",
            inputType: "text"
        },
        {
            inputLabel: "Start date:",
            inputType: "date"
        },
        {
            inputLabel: "End date:",
            inputType: "date"
        }
    ];

    return (
        <section>
            <h3>{sectionDescription}</h3>
            {
                sectionType === "generalInfo"?
                    <InfoForm inputObjects={sectionInputObjects} submitButtonHandler={submitButtonHandler}/>
                :      
                    <ExperienceForm inputFields={sectionInputFields} submitButtonHandler={submitButtonHandler}/>
            }
            
        </section>
    );
}

export default Section;