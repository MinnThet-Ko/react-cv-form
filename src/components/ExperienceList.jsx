import { useState } from "react";
import Experience from "./Experience";

function ExperienceList({inputFields}){

    const [schoolCount, setSchoolCount] = useState([1]);

    const handleAddNew = () => {
        setSchoolCount([...schoolCount, schoolCount.length+1])
    }

    return (
        <>
           {
            schoolCount.map(
                (index) => <Experience key={index} inputFields={inputFields}/>
            )
           }

            <input type="button" value={"Add New"} onClick={handleAddNew}/>
        </>
    )

}

export default ExperienceList;