import {
  apple,
  blockCardVector,
  googleLogoVector,
  padlockVector,
} from "../../assets/icons";

const CardSetting = () => {
  const settings = [
    {
      logo: blockCardVector,
      title: "Block Card",
      description: "Instantly block your Card",
      color: "#FFF5D9",
    },
    {
      logo: padlockVector,
      title: "Change Pin",
      description: "Choose another pin code",
      color: "#E7EDFF",
    },
    {
      logo: googleLogoVector,
      title: "Add to Google Pay",
      description: "Withdraw without any card",
      color: "#FFE0EB",
    },
    {
      logo: apple,
      title: "Add to Apple Pay",
      description: "Withdraw without any card",
      color: "#DCFAF8",
    },
    {
      logo: apple,
      title: "Add to Apple Store",
      description: "Withdraw without any card",
      color: "#DCFAF8",
    },
  ];

  return (
    <div className="content-box">
      <div className="d-flex flex-column gap-3">
        {settings.map((setting) => (
          <div
            className="card-setting-item d-flex align-items-center"
            key={setting.title}
          >
            <div className="card-setting-icon rounded-circle">
              <img src={setting.logo} />
            </div>

            <div>
              <div className="fw-semibold">{setting.title}</div>

              <small className="text-muted">{setting.description}</small>
            </div>

            <button className="btn btn-sm ms-auto">→</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardSetting;
