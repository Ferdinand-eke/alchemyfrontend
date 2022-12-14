import './guestsidebar.scss';
// import DashboardIcon from '@mui/icons-material/Dashboard';
// import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
// import LocalShippingIcon from '@mui/icons-material/LocalShipping';
// import CreditCardIcon from '@mui/icons-material/CreditCard';
// import StoreIcon from '@mui/icons-material/Store';
// import InsertChartIcon from '@mui/icons-material/InsertChart';
// import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
// import ExitToAppIcon from '@mui/icons-material/ExitToApp';
// import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
// import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
// import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../../context/darkModeContext';
import { useContext } from 'react';

const GuestSidebar = () => {
  const { dispatch } = useContext(DarkModeContext);

  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <span className="logo">alchemyBank</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">USER</p>

          <Link to="/login" style={{ textDecoration: 'none' }}>
            <li>
              <AccountCircleOutlinedIcon className="icon" />
              <span>Login</span>
            </li>
          </Link>

          {/* <li>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li> */}
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: 'LIGHT' })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: 'DARK' })}
        ></div>
      </div>
    </div>
  );
};

export default GuestSidebar;
