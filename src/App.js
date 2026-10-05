import './App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Home from './components/Home';
import PaginatedEmployees from './components/PaginatedEmployees';
import {useState} from 'react';

const employees = [
  { name: "John Doe", position: "CEO" },
  { name: "Villy Manea", position: "CTO" },
  { name: "Rodrigo Carlig", position: "Developer" },
  { name: "Jimmy Parjol", position: "Designer" },
  { name: "Riciu Caraiman", position: "Designer" },
  { name: "Clint Eastwood", position: "Developer" },
  { name: "Ion Iliescu", position: "VP" },
  { name: "AAA", position: "BBB" },
  { name: "CCC", position: "DDD" },
  { name: "EEE", position: "FFF" },
  { name: "GGG", position: "HHH" },
  { name: "III", position: "JJJ" },
  { name: "KKK", position: "LLL" },
  { name: "MMM", position: "NNN" },
  { name: "OOO", position: "PPP" },
  { name: "RRR", position: "SSS" },
  { name: "TTT", position: "UUU" },
  { name: "VVV", position: "XXX" },
  { name: "ZZZ111", position: "WWW" }
];

function App() {
  const [employeeList, setEmployeeList] = useState(employees);

  try { 
    const addEmployee = (employee) => {    
      setEmployeeList([...employeeList, employee]);
    }

    const deleteEmployee = (employee) => {
      setEmployeeList(employeeList.filter(e => e !== employee));
    }

    const onUpdateEmployee = (employee, updatedEmployee) => {
      console.log("Updating employee: ", employee, " with new data: ", updatedEmployee);    
      setEmployeeList(employeeList.filter(e => e !== employee).concat(updatedEmployee));
    }

    const sortByName = (sortOrder) => {
      sortOrder === "asc" ? employeeList.sort((a, b) => a.name.localeCompare(b.name)) : employeeList.sort((a, b) => b.name.localeCompare(a.name));
    }

    const sortByPosition = (sortOrder) => {
      sortOrder === "asc" ? employeeList.sort((a, b) => a.position.localeCompare(b.position)) : employeeList.sort((a, b) => b.position.localeCompare(a.position));
    }
    
    return (
      <div className="App">
        <BrowserRouter>        
          <Routes>
            <Route exact path="/" element={<Home employees={employeeList} onAddEmployee={addEmployee} 
                                            onDeleteEmployee={deleteEmployee} onUpdateEmployee={onUpdateEmployee} 
                                            onSortByName={sortByName} onSortByPosition={sortByPosition} />} />
            <Route exact path="/paginated-employees" element={<PaginatedEmployees employees={employeeList}/>} />
          </Routes>
          <nav>
            <Link to="/">Home</Link>
            <br />
            <Link to="/paginated-employees">Paginated Employees</Link>
          </nav>
        </BrowserRouter>
      </div>
    );
  } catch (error) {
    console.error("Error in App component: ", error);
    return (
      <div className="App">
        <br /><br /><br /><br /><br />
        <h1>The application encountered an error.</h1>
        <p>Please check the console for more details.</p>
      </div>
    );
  }
}

export default App;
