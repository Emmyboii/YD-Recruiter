import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/auth/Loginpage';
import Dashboard from './pages/recruiters/Dashboard';
import RegisterPage from './pages/auth/Registerpage';
import PostJob from './pages/recruiters/Postjob';
import JobRecuiterSettings from './pages/recruiters/JobRecruitersettings';
import AdminDashboard from './pages/admin/AdminDashboard';
import RequestStudent from './pages/recruiters/RequestStudent';
import JobHistory from './pages/recruiters/JobHistory';
import AdminStudentRequest from './pages/admin/AdminStudentRequest';
import AdminJobRequests from './pages/admin/AdminJobRequest';
import LandingPage from './pages/LandingPage';
import RequestedStudents from './pages/recruiters/RequestedStudents';
import SetupAccount from './pages/recruiters/SetupAccount';
import AdminRecruitersList from './pages/admin/Recruiterslist';

function App() {
  return (
    <div className="App overflow-x-hidden">
      <Routes>
        <Route path='/' element={<LandingPage />} />

        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />

        <Route path='/recruiter/setupaccount' element={<SetupAccount />} />
        <Route path='/recruiter/dashboard' element={<Dashboard />} />
        <Route path='/recruiter/postjob' element={<PostJob />} />
        <Route path='/recruiter/jobrecruitersettings' element={<JobRecuiterSettings />} />
        <Route path='/recruiter/requeststudent' element={<RequestStudent />} />
        <Route path='/recruiter/jobhistory' element={<JobHistory />} />
        <Route path='/recruiter/requestedstudents' element={<RequestedStudents />} />

        <Route path='/admin/dashboard' element={<AdminDashboard />} />
        <Route path='/admin/studentrequest' element={<AdminStudentRequest />} />
        <Route path='/admin/jobrequest' element={<AdminJobRequests />} />
        <Route path='/admin/recruiterslist' element={<AdminRecruitersList />} />

        {/* <Route path='/' element={<Navigate to='/dashboard'/>}/> */}

      </Routes>
    </div>
  );
}

export default App;
