import Employee from './Employee';

function EmployeeRow(props) {
    return (
        <div>
            {props.employees.map((employee, i) => (
                <div border="3" key={i} style={{marginBottom: "10px", padding: "5px", 
                                                borderRadius: "5px", backgroundColor: "#ef9494"}}>
                    <Employee employee={employee} index={i} pageMode="view"/>
                </div>
            ))}
        </div>
    );
}

export default EmployeeRow;