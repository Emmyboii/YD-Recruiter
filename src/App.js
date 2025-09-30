import {Routes,Route, Navigate} from 'react-router-dom';
import LoginPage from './pages/loginpage';
import Dashboard from './pages/dashboard';
import RegisterPage from './pages/registerpage';
import PostJob from './pages/Postjob';
import JobRecuiterSettings from './pages/JobRecruitersettings';
import AdminDashboard from './pages/AdminDashboard';
import RecruiterProfile from './pages/RecruiterProfile';
import RequestStudent from './pages/RequestStudent';
import JobHistory from './pages/JobHistory';
import AdminStudentRequest from './pages/AdminStudentRequest';
import AdminJobRequests from './pages/AdminJobRequest';
import LandingPage from './pages/LandingPage';
import ContactPage from './pages/Contactpage';
import AboutPage from './pages/AboutPage';
import Testimonial from './pages/Testimonial';

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/register' element={<RegisterPage/>}/>
      <Route path='/postjob' element={<PostJob/>}/>
      <Route path='/jobrecruitersettings' element={<JobRecuiterSettings/>}/>
      <Route path='/admindashboard' element={<AdminDashboard/>}/>
      <Route path='/recruiterprofile' element={<RecruiterProfile/>}/>
      <Route path='/requeststudent' element={<RequestStudent/>}/>
      <Route path='/jobhistory' element={<JobHistory/>}/>
      <Route path='/adminstudentrequest' element={<AdminStudentRequest/>}/>
      <Route path='/adminjobrequest' element={<AdminJobRequests/>}/>
      <Route path='/landingpage' element={<LandingPage/>}/>
      <Route path='/contactpage' element={<ContactPage/>}/>
      <Route path='/aboutpage' element={<AboutPage/>}/>
      <Route path='/testimonial' element={<Testimonial/>}/>
      <Route path='/' element={<Navigate to='/dashboard'/>}/>
      
     </Routes>
    </div>
  );
}

export default App;
