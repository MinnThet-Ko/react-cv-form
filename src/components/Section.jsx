import { useState } from "react";
import InfoInputList from "./InfoInputList";
import InfoForm from "./InfoFrom";
import ExperienceList from "./ExperienceList";
import "../styles/SectionStyles.css"

function Section({sectionType, sectionDescription, sectionInputObjects, buttonHandler }){
    const educationInputFields = [
        {
            inputLabel: "School:",
            inputType: "text"
        },
        {
            inputLabel: "Course:",
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
                    <InfoForm inputObjects={sectionInputObjects} buttonHandler={buttonHandler}/>
                :
                    sectionType === "education"?
                        <ExperienceList inputFields={educationInputFields}/>
                    :
                        <ExperienceList inputFields={workInputFields}/>
            }
            
        </section>
    );
}

export default Section;