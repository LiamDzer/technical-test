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
  creditCardVectorSelect,
  servicesVectorSelect,
  settingsVectorSelect,
} from "../assets/icons";

// Props
interface DashboardProps {
  currentPage: string;
  onCreditCardClick: () => void;
  onServicesClick: () => void;
  onSettingsClick: () => void;
}

// Component Dashboard
function Dashboard({
  currentPage,
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
      selectedLogo: creditCardVectorSelect,
      menuName: "Credit Cards",
      alt: "Credit Cards Logo",
      onClick: onCreditCardClick,
      page: "credit-card",
    },
    {
      logo: loansVector,
      menuName: "Loans",
      alt: "Loans Logo",
    },
    {
      logo: servicesVector,
      selectedLogo: servicesVectorSelect,
      menuName: "Services",
      alt: "Services Logo",
      onClick: onServicesClick,
      page: "services",
    },
    {
      logo: myPrivelegesVector,
      menuName: "My Privileges",
      alt: "My Priveleges Logo",
    },
    {
      logo: settingsVector,
      selectedLogo:settingsVectorSelect,
      menuName: "Settings",
      alt: "Settings Logo",
      onClick: onSettingsClick,
      page: "settings",
    },
  ];

  return (
    <aside>
      <nav className="d-flex flex-column">
        {menuItems.map((menuItem) => {
          const isActive = menuItem.page === currentPage;

          return (
            <div
              className={`menu-item d-flex align-items-center ${
                isActive ? "active" : ""
              }`}
              key={menuItem.menuName}
              onClick={menuItem.onClick}
            >
              <img
                src={
                  isActive && menuItem.selectedLogo
                    ? menuItem.selectedLogo
                    : menuItem.logo
                }
                alt={menuItem.alt}
              />

              <span>{menuItem.menuName}</span>
            </div>
          );
        })}
      </nav>
    </aside>
  );
}

export default Dashboard;