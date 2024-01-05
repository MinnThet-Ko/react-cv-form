function InfoCard({sectionDescription, name, email, phone, buttonHandler}){
    return (
        <>
            <h3>{sectionDescription}</h3>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <input type="button" value="Edit" onClick={buttonHandler}/>
        </>
    )
}

export default InfoCard;