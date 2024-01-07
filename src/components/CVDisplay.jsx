function CVDisplay(props) {

    const renderEduExp = () => {
        return props.eduExpList.length > 0 &&

            props.eduExpList.map((eduExp) => {
                return <div key={eduExp.school}>
                    <p>School: {eduExp.school}</p>
                    <p>Course: {eduExp.course}</p>
                    <p>Start date: {eduExp.startDate}</p>
                    <p>End date: {eduExp.endDate}</p>
                </div>
            })
    }

    const renderWorkExp = () => {
        return props.workExpList.length > 0 &&

            props.workExpList.map((workExp) => {
                return <div key={workExp.company}>
                    <p>School: {workExp.company}</p>
                    <p>Title: {workExp.title}</p>
                    <p>Responsiblities: {workExp.responsibilities}</p>
                    <p>Start date: {workExp.worktartDate}</p>
                    <p>End date: {workExp.workEndDate}</p>
                </div>
            })
    }
    return (
        <>
            {
                props.generalInfoClicked ?
                    <div>
                        <p>Name: {props.name}</p>
                        <p>Email: {props.email}</p>
                        <p>Phone: {props.phone}</p>
                    </div>
                    :
                    <div></div>
            }
            {
                renderEduExp()


            }
            {
                renderWorkExp()
            }




        </>
    );

}

export default CVDisplay;