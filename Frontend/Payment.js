import React from 'react'
import { useNavigate } from 'react-router-dom'
import NewNav2 from './NewNav2'
import './Payment.css'
export default function Payment() {
    const navigate = useNavigate();
    const handleOnClick = () => {
        navigate("/booked");
    }
    return (
        <div>
            <NewNav2 /><br />
            <div> <h2 style={{ backgroundColor: 'lightgrey', textAlign: 'center' }}>Payment</h2></div><br />
            <div className='pay-form'>
                <form>
                    <table>
                        <label>Card No:</label>
                        <tr>

                            <td colspan='2'><input type="text" required /></td>
                        </tr>
                        <label>Card Holder Name:</label>
                        <tr>

                            <td><input type="text" /></td>
                        </tr>
                        <label>Month:</label>
                        <tr>
                            <td><input type="number" /></td>
                        </tr>

                        <label>Year:</label>
                        <tr>
                            <td><input type="number" /></td>
                        </tr>
                        <label>CVV:</label>
                        <tr>
                            <td><input type="text" /></td>
                        </tr>
                        <tr style={{ justifyContent: "center" }}>
                            <td className='p-btn'><button onClick={handleOnClick}>Confirm Payment</button></td>
                        </tr>



                    </table>
                </form>
            </div>

        </div>
    )
}
