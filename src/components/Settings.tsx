// Imports
import { useState } from "react";
import EditProfile from "./settingPartComponent/Edit Profile";
import Preferences from "./settingPartComponent/Preferences";
import Security from "./settingPartComponent/Security";

// Untuk Navbar
type SettingsPage = "profile" | "preferences" | "security";

// Settings Component
const Settings = () => {
  const [activePage, setActivePage] = useState<SettingsPage>("profile");

  return (
    <div className="settings-content">
      {/* Navigation */}
      <div className="settings-nav">
        <button
          className={activePage === "profile" ? "active" : ""}
          onClick={() => setActivePage("profile")}
        >
          Edit Profile
        </button>

        <button
          className={activePage === "preferences" ? "active" : ""}
          onClick={() => setActivePage("preferences")}
        >
          Preferences
        </button>

        <button
          className={activePage === "security" ? "active" : ""}
          onClick={() => setActivePage("security")}
        >
          Security
        </button>
      </div>

      {/* Page Content */}
      {activePage === "profile" && <EditProfile />}
      {activePage === "preferences" && <Preferences />}
      {activePage === "security" && <Security />}
    </div>
  );
};

export default Settings;