import femaleProfile from './images/femaleProfile.jpg'
import maleProfile from './images/maleProfile.jpg'

const Employees = ({employees, selectedTeam, handlerEmployeeCardClick, handleTeamSelectionChange}) => {
  return (
    <main className="container">
      <div className='row justify-content-center mt-3 mb-3'>
        <div className='col-8'>
          <select name="" id="" className='form-select form-select-lg' value={selectedTeam} onChange={handleTeamSelectionChange}>
            <option value="TeamA">TeamA</option>
            <option value="TeamB">TeamB</option>
            <option value="TeamC">TeamC</option>
            <option value="TeamD">TeamD</option>
          </select>
        </div>
      </div>
      <div className='row justify-content-center mt-3 mb-3'>
        <div className='col-8'>
          <div className='card-collection'>
            {employees.map(employee => {
              return (
                <div key={employee.id} id={employee.id} className={employee.teamName === selectedTeam ? "card m-2 standout" : "card m-2"} style={{cursor: "pointer"}} onClick={handlerEmployeeCardClick}>
                  <img src={employee.gender === "male" ? maleProfile : femaleProfile} className='card-img-top'/>
                  <div className='card-body'>
                    <h5 className='title'>Full name: {employee.fullName}</h5>
                    <p><b>Designation:</b> {employee.designation}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </main>
  )
}

export default Employees