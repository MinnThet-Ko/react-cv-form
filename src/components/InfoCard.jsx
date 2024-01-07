function InfoCard({sectionDescription, name, email, phone, editButtonHandler}){
    return (
        <>
            <h3>{sectionDescription}</h3>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <input type="button" value="Edit" onClick={editButtonHandler}/>
        </>
    )
}

export default InfoCard;