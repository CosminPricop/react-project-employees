import EmployeesList from './EmployeesList'; 
import NewEmployee from './NewEmployee';

function Home(props) {
  
  const addEmployee = (employee) => {    
    props.onAddEmployee(employee);
  }

  const deleteEmployee = (employee) => {
    props.onDeleteEmployee(employee);
  }

  const onUpdateEmployee = (employee, updatedEmployee) => {
    props.onUpdateEmployee(employee, updatedEmployee);
  }
  
  const sortByName = (sortOrder) => {
    props.onSortByName(sortOrder);
  }

  const sortByPosition = (sortOrder) => {
    props.onSortByPosition(sortOrder);
  }

  return (
    <div>
      <h3><u>Employees List</u></h3>
      <EmployeesList employees = {props.employees} onDeleteEmployee={deleteEmployee} 
                        onUpdateEmployee={onUpdateEmployee} 
                        onSortByName={sortByName} onSortByPosition={sortByPosition} />
      <br />
      <b>Add a new employee:</b>
      <NewEmployee onAddEmployee={addEmployee} />
    </div>
  );
}

export default Home;
