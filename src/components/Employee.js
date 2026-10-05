import {useState} from 'react';

function Employee(props) {
    const [modifyMode, setModifyMode] = useState(false);
    const [employeeName, setEmployeeName] = useState('');
    const [employeePosition, setEmployeePosition] = useState('');
    const [employeeIndex, setEmployeeIndex] = useState(-1);
    const [errors, setErrors] = useState([]);

    const deleteEmployee = (employee) => {
        console.log("Deleting employee: ", employee);
        props.onDeleteEmployee(employee);
    }

    const modifyEmployee = (employee, index) => {
        console.log("Modify employee: ", employee, " at index: ", index);
        setModifyMode(true);
        setEmployeeIndex(index);
    }

    const saveModifiedEmployee = (employee) => {
        if (!employeeName) {
            setErrors(["Name is required"]);
            return;
        }
        if (!employeePosition) {
            setErrors(["Position is required"]);
            return;
        }
        
        const updatedEmployee = { name: employeeName, position: employeePosition };
        props.onUpdateEmployee(employee, updatedEmployee);
        setModifyMode(false);
        setEmployeeName('');
        setEmployeePosition('');
        setEmployeeIndex(-1);
        setErrors([]);
    }

    const cancelModifiedEmployee = (employee) => {
        setModifyMode(false);
        setEmployeeName('');
        setEmployeePosition('');
        setEmployeeIndex(-1);
        setErrors([]);
    }

    return (
        <table style={{width: "100%"}}>
            <tbody>
                <tr>
                    <td width="39%">
                        {(modifyMode && employeeIndex === props.index) ? (
                            <input type="text" value={employeeName} 
                            onChange={(e) => setEmployeeName(e.target.value)} />
                        ) : (
                            props.employee.name
                        )}
                    </td>
                    <td width="38%">
                        {(modifyMode && employeeIndex === props.index) ? (
                            <input type="text" value={employeePosition} style={{width: "50%"}} 
                            onChange={(e) => setEmployeePosition(e.target.value)} />
                        ) : (
                            props.employee.position
                        )}
                    </td>
                    <td width="13%">
                        {(props.pageMode !== "view") ? ((modifyMode && employeeIndex === props.index) ? (
                            <div>
                            <div>
                                <button onClick={() => saveModifiedEmployee(props.employee)}>
                                    Save
                                </button>
                                <button onClick={() => cancelModifiedEmployee(props.employee)}>
                                    Cancel
                                </button>
                            </div>
                            {errors.length > 0 && (
                                <div>
                                {errors.map((error, index) => (
                                    <p className="error-message-edit" key={index}>{error}</p>
                                ))}
                                </div>
                            )}
                            </div>
                        ) : (
                            <img src={require(`../images/edit.png`)} style={{cursor: "pointer"}}
                            width="20" height="25" onClick={() => modifyEmployee(props.employee, props.index)}/>
                        )) : (
                            <br />
                        )}
                    </td>
                    <td width="10%">
                        {(props.pageMode !== "view") ? (
                            <img src={require(`../images/delete.png`)} style={{cursor: "pointer"}}
                            width="20" height="25" onClick={() => deleteEmployee(props.employee)} />
                            ) : (
                                <br /  >
                            )
                        }
                    </td>
                </tr>
            </tbody>
        </table>
    );
}

export default Employee;