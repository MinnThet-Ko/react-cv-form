import { useState } from "react";

function ExperienceCard({eduExpList, workExpList ,editButtonHandler}){

 

    return (
        <div>
            {
                eduExpList !== null && eduExpList !== undefined ?
                    eduExpList.map((eduExp) => {
                        return <div key={eduExp.school}>
                            <p>{eduExp.school}</p>
                            <input type="button" value={"Edit"} onClick={() => {editButtonHandler(eduExp.school)}}/>
                            <input type="button" value={"Remove"}/>
                        </div>
                    })
                :
                    workExpList.map((workExp) => {
                        return <div key={workExp.company}>
                            <p>{workExp.company}</p>
                            <input type="button" value={"Edit"} onClick={() => {editButtonHandler(workExp.company)}}/>
                            <input type="button" value={"Remove"}/>
                        </div>
                    })
            }
        </div>
    );
}

export default ExperienceCard;