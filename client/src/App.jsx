import { useState } from 'react';
import Onboarding from './pages/Onboarding';
import Dashboard from './pages/Dashboard';
import Calendar from './pages/Calendar';

function App() {
  const [currentPage, setCurrentPage] = useState('onboarding');

  return (
    <>
      {currentPage === 'onboarding' && (
        <Onboarding onNavigateToDashboard={() => setCurrentPage('dashboard')} />
      )}
      
      {currentPage === 'dashboard' && (
        <Dashboard 
          onNavigateToCalendar={() => setCurrentPage('calendar')} 
          onNavigateToOnboarding={() => setCurrentPage('onboarding')} 
        />
      )}
      
      {currentPage === 'calendar' && (
        <Calendar onNavigateToDashboard={() => setCurrentPage('dashboard')} />
      )}
    </>
  );
}

export default App;