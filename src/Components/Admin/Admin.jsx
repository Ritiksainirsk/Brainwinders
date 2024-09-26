import { Routes, Route } from 'react-router-dom';
import Sidebar from './Sidebar'
import PageManagement from './Pages/Page_Management/PageManagement';

// Admin Dashboard with Sidebar and Content Area
export default function Admin() {
  return (
    <div className="flex">
      {/* Sidebar for navigation */}
      <div className='admin_sidebar'>

      <Sidebar/>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-4">
        {/* Nested Routes for Admin Pages */}
        <Routes>
          <Route path="page_management" element={<PageManagement/>} />
        </Routes>
      </div>
    </div>
  );
}
