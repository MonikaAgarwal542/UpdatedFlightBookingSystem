import { Link, useNavigate } from 'react-router-dom'
import NewNav2 from './NewNav2';
export default function Booked() {
    const navigate = useNavigate();
    const handleOnClick = (event) => {
        alert("Check your mail for further details.");
        navigate("/home2");
    };

    return (
        <>

            <NewNav2 />
            <h2 style={{ marginTop: 20, color: 'blue' }}>Flight is booked!!!</h2>
            <div ><button onClick={handleOnClick} style={{ backgroundColor: 'lightblue', height: '40px', width: '100px', color: 'blue' }}>Show Flight details</button></div>
        </>)
}