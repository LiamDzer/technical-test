import { profilePicture } from "../../assets/icons";

const EditProfile = () => {
  return (
    <div className="edit-profile">
      <div className="edit-profile-content">
        <div className="profile-picture-container">
          <img
            src={profilePicture}
            alt="Profile"
            className="edit-profile-picture"
          />

          <button
            type="button"
            className="edit-profile-picture-button"
            aria-label="Edit profile picture"
          >
            ✎
          </button>
        </div>

        <div className="edit-profile-form">
          <div className="edit-profile-field">
            <label htmlFor="your-name">Your Name</label>
            <input
              id="your-name"
              type="text"
              defaultValue="Charlene Reed"
            />
          </div>

          <div className="edit-profile-field">
            <label htmlFor="user-name">User Name</label>
            <input
              id="user-name"
              type="text"
              defaultValue="Charlene Reed"
            />
          </div>

          <div className="edit-profile-field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              defaultValue="charlenereed@gmail.com"
            />
          </div>

          <div className="edit-profile-field">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              defaultValue="1234567890"
            />
          </div>

          <div className="edit-profile-field">
            <label htmlFor="date-of-birth">Date of Birth</label>

            <div className="select-wrapper">
              <select id="date-of-birth" defaultValue="25 January 1990">
                <option>25 January 1990</option>
              </select>
            </div>
          </div>

          <div className="edit-profile-field">
            <label htmlFor="present-address">Present Address</label>
            <input
              id="present-address"
              type="text"
              defaultValue="San Jose, California, USA"
            />
          </div>

          <div className="edit-profile-field">
            <label htmlFor="permanent-address">Permanent Address</label>
            <input
              id="permanent-address"
              type="text"
              defaultValue="San Jose, California, USA"
            />
          </div>

          <div className="edit-profile-field">
            <label htmlFor="city">City</label>
            <input id="city" type="text" defaultValue="San Jose" />
          </div>

          <div className="edit-profile-field">
            <label htmlFor="postal-code">Postal Code</label>
            <input id="postal-code" type="text" defaultValue="45962" />
          </div>

          <div className="edit-profile-field">
            <label htmlFor="country">Country</label>
            <input id="country" type="text" defaultValue="USA" />
          </div>

          <div className="edit-profile-save">
            <button type="button">Save</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;