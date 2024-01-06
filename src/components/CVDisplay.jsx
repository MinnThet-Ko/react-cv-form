function CVDisplay(props){

     const renderEduExp = () =>
     {
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
    return(
        <>
        {
            props.generalInfoClicked?
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

        
            
        
            
        </>
    );
    
}

export default CVDisplay;