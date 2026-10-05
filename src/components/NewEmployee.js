import {useState} from 'react';

function NewEmployee (props) {
    const [name, setName] = useState('');
    const [position, setPosition] = useState('');
    const [errors, setErrors] = useState([]);

    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const handlePositionChange = (event) => {
        setPosition(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!name) {
            setErrors(["Name is required"]);
            return;
        }
        if (!position) {
            setErrors(["Position is required"]);
            return;
        }

        const newEmployee = { name: name, position: position };
        props.onAddEmployee(newEmployee);
        setName('');
        setPosition('');
        setErrors([]);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Employee Name" value={name} onChange={handleNameChange} />
                <input type="text" placeholder="Employee Position" value={position} onChange={handlePositionChange} />
                <button type="submit"><b>Add Employee</b></button>
            </form>
            <br />
            {errors.length > 0 && (
                <div>
                {errors.map((error, index) => (
                    <p className="error-message-add" key={index}>{error}</p>
                ))}
                </div>
            )}
        </div>
    );
}
export default NewEmployee;