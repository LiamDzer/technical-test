// Imports
import {
  creditCardLogo,
  settingsVector,
  notificationsVector,
  profilePicture,
} from "../assets/icons";

// Props
interface HeaderProps {
  pageName: string;
  onSettingsClick: () => void;
}

// Header Component
const Header = ({ pageName, onSettingsClick }: HeaderProps) => {
  const formattedPageName = pageName
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <header className="header d-flex align-items-center border-bottom">
      <div className="header-logo d-flex align-items-center">
        <img
          src={creditCardLogo}
          alt="BankDash Logo"
          className="header-logo-icon"
        />
        <span className="fw-bold">BankDash.</span>
      </div>

      <span className="header-page-name fw-semibold">
        {formattedPageName}
      </span>

      <div className="header-actions d-flex align-items-center ms-auto gap-3">
        <div className="search-box">
          <span className="search-icon">⌕</span>
          <input type="text" placeholder="Search for something" />
        </div>

        <button
          className="header-button rounded-circle border-0"
          onClick={onSettingsClick}
        >
          <img src={settingsVector} alt="Settings" />
        </button>

        <button className="header-button rounded-circle border-0">
          <img src={notificationsVector} alt="Notifications" />
        </button>

        <img
          className="profile-picture rounded-circle"
          src={profilePicture}
          alt="Profile"
        />
      </div>
    </header>
  );
};

export default Header;