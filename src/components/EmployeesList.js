import {useState} from 'react';
import Employee from './Employee';

function EmployeesList (props) {
    const [sortOrder, setSortOrder] = useState('asc');    

    const sortByName = (order) => {
        order === "asc" ? setSortOrder("desc") : setSortOrder("asc");
        console.log("Sorting employees by names and order: ", sortOrder);
        props.onSortByName(sortOrder);
    }

    const sortByPosition = (order) => {
        order === "asc" ? setSortOrder("desc") : setSortOrder("asc");
        console.log("Sorting employees by position and order: ", sortOrder);
        props.onSortByPosition(sortOrder);
    }

    const onUpdateEmployee = (employee, updatedEmployee) => { 
        props.onUpdateEmployee(employee, updatedEmployee);
    }

    const onDeleteEmployee = (employee) => {
        props.onDeleteEmployee(employee);
    }

    return (
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
            <table className="employee-table">
                <thead>
                    <tr>
                        <th style={{cursor: "pointer"}} width="39%" onClick={() => sortByName(sortOrder)}><u>Employee Name</u></th>
                        <th style={{cursor: "pointer"}} width="38%" onClick={() => sortByPosition(sortOrder)}><u>Position</u></th>
                        <th width="13%"><u>Modify Employee</u></th>
                        <th width="10%"><u>Delete Employee</u></th>
                    </tr>
                </thead>
                <tbody> 
                    {props.employees.map((employee, i) => (
                        <tr key={i}>
                            <td colSpan="4">
                                <Employee employee={employee} index={i} 
                                    onUpdateEmployee={onUpdateEmployee} onDeleteEmployee={onDeleteEmployee}/>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default EmployeesList;