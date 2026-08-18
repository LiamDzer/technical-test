import { useState } from "react";

const Preferences = () => {
  const [digitalCurrency, setDigitalCurrency] = useState(true);
  const [merchantOrder, setMerchantOrder] = useState(false);
  const [recommendations, setRecommendations] = useState(true);

  return (
    <div className="preferences">
      <div className="preferences-settings">
        <div className="preferences-field">
          <label htmlFor="currency">Currency</label>

          <input id="currency" type="text" defaultValue="USD" />
        </div>

        <div className="preferences-field">
          <label htmlFor="time-zone">Time Zone</label>

          <input
            id="time-zone"
            type="text"
            defaultValue="(GMT-12:00) International Date Line West"
          />
        </div>
      </div>

      <div className="preferences-notifications">
        <h6>Notifications</h6>

        <div className="notification-item">
          <span>I send or receive digital currency</span>

          <button
            type="button"
            className={`notification-toggle ${digitalCurrency ? "active" : ""}`}
            onClick={() => setDigitalCurrency(!digitalCurrency)}
            aria-label="Toggle digital currency notifications"
          >
            <span></span>
          </button>
        </div>

        <div className="notification-item">
          <span>I receive merchant order</span>

          <button
            type="button"
            className={`notification-toggle ${merchantOrder ? "active" : ""}`}
            onClick={() => setMerchantOrder(!merchantOrder)}
            aria-label="Toggle merchant order notifications"
          >
            <span></span>
          </button>
        </div>

        <div className="notification-item">
          <span>There are recommendations for my account</span>

          <button
            type="button"
            className={`notification-toggle ${recommendations ? "active" : ""}`}
            onClick={() => setRecommendations(!recommendations)}
            aria-label="Toggle account recommendations"
          >
            <span></span>
          </button>
        </div>
      </div>

      <div className="preferences-save">
        <button type="button">Save</button>
      </div>
    </div>
  );
};

export default Preferences;
