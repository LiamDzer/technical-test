// Imports

import {
  accountVector,
  creditCardVector,
  homeVector,
  investmentVector,
  loansVector,
  myPrivelegesVector,
  servicesVector,
  settingsVector,
  transactionsVector,
} from "../assets/icons";

// Props
interface DashboardProps {
  onCreditCardClick: () => void;
  onServicesClick: () => void;
  onSettingsClick: () => void;
}

// Component Dashboard
function Dashboard({
  onCreditCardClick,
  onServicesClick,
  onSettingsClick,
}: DashboardProps) {
  const menuItems = [
    {
      logo: homeVector,
      menuName: "Dashboard",
      alt: "Dashboard Logo",
    },
    {
      logo: transactionsVector,
      menuName: "Transactions",
      alt: "Transactions Logo",
    },
    {
      logo: accountVector,
      menuName: "Accounts",
      alt: "Accounts Logo",
    },
    {
      logo: investmentVector,
      menuName: "Investments",
      alt: "Investments Logo",
    },
    {
      logo: creditCardVector,
      menuName: "Credit Cards",
      alt: "Credit Cards Logo",
      onClick: onCreditCardClick,
    },
    {
      logo: loansVector,
      menuName: "Loans",
      alt: "Loans Logo",
    },
    {
      logo: servicesVector,
      menuName: "Services",
      alt: "Services Logo",
      onClick: onServicesClick,
    },
    {
      logo: myPrivelegesVector,
      menuName: "My Privileges",
      alt: "My Priveleges Logo",
    },
    {
      logo: settingsVector,
      menuName: "Settings",
      alt: "Settings Logo",
      onClick: onSettingsClick,
    },
  ];

  return (
    <aside>
      <nav className="d-flex flex-column">
        {menuItems.map((menuItem) => (
          <div
            className="menu-item d-flex align-items-center"
            key={menuItem.menuName}
            onClick={menuItem.onClick}
          >
            <img src={menuItem.logo} alt={menuItem.alt} />
            <span>{menuItem.menuName}</span>
          </div>
        ))}
      </nav>
    </aside>
  );
}

export default Dashboard;