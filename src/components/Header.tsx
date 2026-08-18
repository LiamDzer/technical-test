import {
  creditCardLogo,
  settingsVector,
  notificationsVector,
  profilePicture,
} from "../assets/icons";

interface HeaderProps {
  pageName: string;
}

const Header = ({ pageName }: HeaderProps) => {
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

      <span className="header-page-name fw-semibold">{pageName}</span>

      <div className="header-actions d-flex align-items-center ms-auto gap-3">
        <div className="search-box">
          <span className="search-icon">⌕</span>
          <input type="text" placeholder="Search for something" />
        </div>

        <button className="header-button rounded-circle border-0">
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
