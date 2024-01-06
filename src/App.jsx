import { useState } from 'react'
import Section from './components/Section'
import InfoCard from './components/InfoCard'
import CVDisplay from './components/CVDisplay'

function App() {

    //States for general information
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [generalInfoClicked, isGeneralInfoClicked] = useState(false)

    const handleNameChange = (e) => {
        setName(e.target.value)
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handlePhoneChange = (e) => {
        setPhone(e.target.value)
    }

    const handleGeneralInfoClicked = () => {
      isGeneralInfoClicked(!generalInfoClicked)
    }

    const generalInfoInputs = [

      {
          inputLabel: "Name:",
          inputValue: name,
          handler: handleNameChange
      },
      {
          inputLabel: "Email:",
          inputValue: email,
          handler: handleEmailChange
      },
      {
          inputLabel: "Phone no:",
          inputValue: phone,
          handler: handlePhoneChange
      }
    ] 


    //States for education experience
    const [eduExpList, setEduExpList] = useState([])

    const updateEduList = (updatedSchool, updatedCourse, updatedStartDate, updatedEndDate) => {

      console.log(updatedSchool)
      console.log(updatedCourse)
      console.log(updatedStartDate)
      console.log(updatedEndDate)
      setEduExpList(
        [...eduExpList, 
          {
            school: updatedSchool,
            course: updatedCourse,
            startDate: updatedStartDate,
            endDate: updatedEndDate
          }
        ]
      )

      console.log(eduExpList.length)
    }

    const handleEduNew = () => {
      setEduExpList(
        [...eduExpList, 
          {
            school: "",
            course: "",
            startDate: null,
            endDate:null
          }
        ]
      )
    }

  return (
    <>
      {!generalInfoClicked? <Section sectionType={"generalInfo"} sectionDescription={"General Info"} sectionInputObjects={generalInfoInputs} buttonHandler={handleGeneralInfoClicked}/>: <InfoCard name={name} email={email} phone={phone} buttonHandler={handleGeneralInfoClicked}/>}
      <Section sectionType={"education"} sectionDescription={"Education Experience"} buttonHandler={updateEduList}/>
      <Section sectionType={"practical"} sectionDescription={"Practical Experience"}/>
      <CVDisplay name={name} email={email} phone={phone} generalInfoClicked={generalInfoClicked} eduExpList={eduExpList}/>
    </>
  )
}

export default App
