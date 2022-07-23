

import Home from './Components/Home';
import AboutUs from './Components/AboutUs'
import Faqs from './Components/Faqs'
import ErrorPage from './Components/ErrorPage';
import { Navigate, Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import SearchFlight from './Components/SearchFlight';
import SignupForm from './Components/SignupForm';
import AdminDashboard from './Components/AdminDashboard'
import Footer from './Components/Footer'
import Booked from './Components/Booked'
import FlightsList from './Components/FlightsList';
import Login from './Components/Login';
import AddFlightsForm from './Components/AddFlightsForm';
import TicketBooking from './Components/TicketBooking';
import PersonList from './Components/PersonList';
import Home2 from './Components/Home2';
import SearchFlight2 from './Components/SearchFlight2'
import AboutUs2 from './Components/AboutUs2';
import Payment from './Components/Payment';

function App() {
  return (
    <div className="appWrapper">


      <BrowserRouter>

        <Routes>
          <Route path='/' element={<Navigate to='/home' />}></Route>
          <Route path='/home' element={<Home />} />
          <Route path='/AboutUs' element={<AboutUs />} />
          <Route path='/FAQ' element={<Faqs />} />
          <Route path='/searchflight' element={<SearchFlight />} />
          <Route path='/booked' element={<Booked />} />
          <Route path='/signup' element={<SignupForm />} />
          <Route path='/adminDashboard' element={<AdminDashboard />} />
          <Route path='/error' element={<ErrorPage />} />
          <Route path='/FlightsList' element={<FlightsList />} />
          <Route path='/Login' element={<Login />} />
          <Route path='*' element={<ErrorPage />} />
          <Route path='/addflights' element={<AddFlightsForm />} />
          <Route path='/ticketbooking' element={<TicketBooking />} />
          <Route path='/addperson' element={<PersonList />} />
          <Route path='/MyPage' element={<Home2 />} />
          <Route path='/flightsearch' element={<SearchFlight2 />} />
          <Route path='/About' element={<AboutUs2 />} />
          <Route path='/home2' element={<Home2 />} />
          <Route path='/payment' element={<Payment />} />

        </Routes>

      </BrowserRouter>

      <Footer />

    </div>
  );
}

export default App;
