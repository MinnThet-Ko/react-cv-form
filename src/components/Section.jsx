import { useState } from "react";
import InfoInputList from "./InfoInputList";
import InfoForm from "./InfoFrom";
import ExperienceList from "./ExperienceList";
import ExperienceForm from "./ExperienceForm";
import "../styles/SectionStyles.css"

function Section({sectionType, sectionDescription, sectionInputObjects, buttonHandler }){

    //States for education experience form
    const [school, setSchool] = useState("")
    const [course, setCourse] = useState("")
    const [startDate, setStartDate] = useState(Object)
    const [endDate, setEndDate] = useState(Object)

    const handleSchoolChange = (e) => {
        setSchool(e.target.value)
    }

    const handleCourseChange = (e) => {
        setCourse(e.target.value)
    }

    const handleStartDateChange = (e) => {
        setStartDate(e.target.value)
    }

    const handleEndDateChange = (e) => {
        setEndDate(e.target.value)
    }

    const handleEduSubmit = () => {
        buttonHandler(school, course, startDate, endDate)
    }

    

    //add the values and handlers to the props
    const educationInputFields = [
        {
            inputLabel: "School:",
            inputType: "text",
            inputValue: school,
            inputHandler: handleSchoolChange
        },
        {
            inputLabel: "Course:",
            inputType: "text",
            inputValue: course,
            inputHandler: handleCourseChange
        },
        {
            inputLabel: "Start date:",
            inputType: "date",
            inputValue: startDate,
            inputHandler: handleStartDateChange
        },
        {
            inputLabel: "End date:",
            inputType: "date",
            inputValue: endDate,
            inputHandler: handleEndDateChange
        }
    ];
    /************************************************************************************************************** */

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
                        //<ExperienceList inputFields={educationInputFields}/>
                        <ExperienceForm inputFields={educationInputFields} buttonHandler={handleEduSubmit}/>
                    :
                        <ExperienceList inputFields={workInputFields}/>
            }
            
        </section>
    );
}

export default Section;