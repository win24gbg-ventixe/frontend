import { NavLink } from 'react-router-dom'
import logo from '../../images/Logo.svg'
import '../../styles/AppLayout.css'

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-top">
        <div className="sidebar-logo-wrapper">
          <img src={logo} alt="Logo" className="sidebar-logo-img" />
          <h1 className="sidebar-logo-text">Ventixe</h1>
        </div>

        <nav className="sidebar-nav">
          
            <NavLink to="/bookings" className="sidebar-link">
                <i className="bi bi-check-square sidebar-icon" /> Bookings
            </NavLink>
            <NavLink to="/events" className="sidebar-link">
                <i className="bi bi-ticket-perforated sidebar-icon" /  > Events
            </NavLink>
            
        </nav>
      </div>

      <div className="sidebar-bottom">
        <button className="btn btn-outline-secondary w-100">Sign Out</button>
      </div>
    </aside>
  )
}

export default Sidebar