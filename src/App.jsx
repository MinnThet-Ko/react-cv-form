import { useState } from 'react'
import Section from './components/Section'
import InfoCard from './components/InfoCard'
import ExperienceCard from './components/ExperienceCard'
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
  const [school, setSchool] = useState("")
  const [course, setCourse] = useState("")
  const [startDate, setStartDate] = useState(Object)
  const [endDate, setEndDate] = useState(Object)
  const [eduExpList, setEduExpList] = useState([])
  const [eduExpInsert, isEduExpInsert] = useState(true)
  const [selectedExperience, setSelectedExperience] = useState(null)

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

  const updateEduList = () => {
    setEduExpList(
      [...eduExpList,
      {
        school: school,
        course: course,
        startDate: startDate,
        endDate: endDate
      }
      ]
    )
    changeEduExpInsertMode()
    setSelectedExperience(null)
  }

  const handleEduNew = () => {
    setSchool("")
    setCourse("")
    setStartDate(Object)
    setEndDate(Object)
    isEduExpInsert(true)
  }

  const changeEduExpInsertMode = () => {
    isEduExpInsert(!eduExpInsert)
  }


  const changeSelectedEduExp = (paraSchool) => {
    let filteredEduExp = eduExpList.filter((eduExp) => { return eduExp.school === paraSchool })
    var index = eduExpList.indexOf(filteredEduExp[0]);
    if (index > -1) {
      eduExpList.splice(index, 1);
    }

    console.log(filteredEduExp[0])
    setSelectedExperience(filteredEduExp[0])
    setSchool(filteredEduExp[0].school)
    setCourse(filteredEduExp[0].course)
    setStartDate(filteredEduExp[0].startDate)
    setEndDate(filteredEduExp[0].endDate)
    isEduExpInsert(!eduExpInsert)
  }

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

  //States for work experience
  const [company, setCompany] = useState("")
  const [title, setTitle] = useState("")
  const [responsibilities, setResponsibilities] = useState("")
  const [workStartDate, setWorkStartDate] = useState(Object)
  const [workEndDate, setWorkEndDate] = useState(Object)
  const [workExpList, setWorkExpList] = useState([])
  const [workExpInsert, isWorkExpInsert] = useState(true)
  const [selectedWorkExperience, setSelectedWorkExperience] = useState(null)

  const handleCompanyChange = (e) => {
    setCompany(e.target.value)
  }

  const handleTitleChange = (e) => {
    setTitle(e.target.value)
  }

  const handleResponsiblitiesChange = (e) => {
    setResponsibilities(e.target.value)
  }

  const handleWorkStartDateChange = (e) => {
    setWorkStartDate(e.target.value)
  }

  const handleWorkEndDateChange = (e) => {
    setWorkEndDate(e.target.value)
  }

  const updateWorkList = () => {
    setWorkExpList(
      [...workExpList,
      {
        company: company,
        title: title,
        responsibilities: responsibilities,
        workStartDate: workStartDate,
        workEndDate: workEndDate
      }
      ]
    )
    changeWorkExpInsertMode()
    setSelectedWorkExperience(null)
  }

  const handleWorkNew = () => {
    setCompany("")
    setTitle("")
    setResponsibilities("")
    setWorkStartDate(Object)
    setWorkEndDate(Object)
    isWorkExpInsert(true)
  }

  const changeWorkExpInsertMode = () => {
    isWorkExpInsert(!workExpInsert)
  }


  const changeSelectedWorkExp = (paraCompany) => {
    let filteredWorkExp = workExpList.filter((workExp) => { return workExp.company === paraCompany })
    var index = workExpList.indexOf(filteredWorkExp[0]);
    if (index > -1) {
      workExpList.splice(index, 1);
    }

    console.log(filteredWorkExp[0])
    setSelectedWorkExperience(filteredWorkExp[0])
    setCompany(filteredWorkExp[0].company)
    setTitle(filteredWorkExp[0].title)
    setResponsibilities(filteredWorkExp[0].responsibilities)
    setWorkStartDate(filteredWorkExp[0].workStartDate)
    setWorkEndDate(filteredWorkExp[0].workEndDate)
    isWorkExpInsert(!workExpInsert)
  }

  const workInputFields = [
    {
      inputLabel: "Company:",
      inputType: "text",
      inputValue: company,
      inputHandler: handleCompanyChange
    },
    {
      inputLabel: "Title:",
      inputType: "text",
      inputValue: title,
      inputHandler: handleTitleChange
    },
    {
      inputLabel: "Responsiblity:",
      inputType: "textarea",
      inputValue: responsibilities,
      inputHandler: handleResponsiblitiesChange
    },
    {
      inputLabel: "Work Start date:",
      inputType: "date",
      inputValue: workStartDate,
      inputHandler: handleWorkStartDateChange
    },
    {
      inputLabel: "Work End date:",
      inputType: "date",
      inputValue: workEndDate,
      inputHandler: handleWorkEndDateChange
    }
  ];
  /************************************************************************************************************** */

  return (
    <>
      {!generalInfoClicked ? <Section sectionType={"generalInfo"} sectionDescription={"General Info"} sectionInputObjects={generalInfoInputs} submitButtonHandler={handleGeneralInfoClicked} /> : <InfoCard name={name} email={email} phone={phone} editButtonHandler={handleGeneralInfoClicked} />}
      {eduExpInsert ? <Section sectionType={"education"} sectionDescription={"Education Experience"} submitButtonHandler={updateEduList} selectedEduExp={selectedExperience} sectionInputFields={educationInputFields} /> : <ExperienceCard eduExpList={eduExpList} editButtonHandler={changeSelectedEduExp} />}
      <input type="button" value={"Add new education"} onClick={handleEduNew}/>

      {workExpInsert ? <Section sectionType={"work"} sectionDescription={"Work Experience"} submitButtonHandler={updateWorkList} selectedEduExp={selectedWorkExperience} sectionInputFields={workInputFields} /> : <ExperienceCard workExpList={workExpList} editButtonHandler={changeSelectedWorkExp} />}
      <input type="button" value={"Add new work"} onClick={handleWorkNew}/>

      <CVDisplay name={name} email={email} phone={phone} generalInfoClicked={generalInfoClicked} eduExpList={eduExpList} workExpList={workExpList}/>
    </>
  )
}

export default App
