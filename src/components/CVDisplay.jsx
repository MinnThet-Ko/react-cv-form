function CVDisplay(props){

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
            
        </>
    );
    
}

export default CVDisplay;