import { useState } from "react";

const Security = () => {
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleSave = () => {
    console.log("Password change requested");
  };

  return (
    <div className="settings-content">
      <div className="security-section">
        <h2>Two-Factor Authentication</h2>

        <div className="two-factor-row">
          <button
            type="button"
            className={`toggle ${twoFactorEnabled ? "enabled" : ""}`}
            onClick={() => setTwoFactorEnabled(!twoFactorEnabled)}
            aria-label="Toggle two-factor authentication"
          >
            <span className="toggle-circle" />
          </button>

          <span>Enable or disable two factor authentication</span>
        </div>
      </div>

      <div className="security-section">
        <h2>Change Password</h2>

        <div className="password-fields">
          <div className="form-group">
            <label htmlFor="current-password">Current Password</label>
            <input
              id="current-password"
              type="password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              placeholder="•••••••••"
            />
          </div>

          <div className="form-group">
            <label htmlFor="new-password">New Password</label>
            <input
              id="new-password"
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="•••••••••"
            />
          </div>
        </div>

        <div className="save-container">
          <button className="save-button" onClick={handleSave}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Security;