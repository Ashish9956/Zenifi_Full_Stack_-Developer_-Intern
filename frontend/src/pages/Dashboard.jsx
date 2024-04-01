import { Outlet } from "react-router-dom"
import Sidebar from "../components/Sidebar"


function Dashboard() {
 

  return (
    <div className="relative flex min-h-[calc(100vh-3.5rem)]">
    {/* Assuming Sidebar component styles */}
    <Sidebar className="w-64 bg-gray-800 text-white border-r border-gray-600" />
  
    <div className="h-[calc(100vh-3.5rem)] flex-1 overflow-auto">
      <div className="mx-auto w-11/12 max-w-[1000px] py-10">
        <Outlet />
      </div>
    </div>
  </div>
  )
}

export default Dashboard