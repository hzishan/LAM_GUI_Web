import './css_styled/App.css';
import { NavLink, Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header">
      <NavLink to="/" className="header_link">Home</NavLink>
      <NavLink to="/annoucement" className="header_link">Annoucement</NavLink>
      <NavLink to="todo_list" className="header_link">TodoList</NavLink>
      <NavLink to="/preference" className="header_link">Preference</NavLink>
      <NavLink to="/leave_request" className="header_link">LeaveRequest</NavLink>
    </div>
  );
}

export default Header;