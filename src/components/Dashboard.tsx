//Imports

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

// Array Data Dashboard

// Component Dashboard
function Dashboard() {
  const menuItems = [
    { logo: homeVector, menuName: "Dashboard", alt: "Dashboard Logo" },
    {
      logo: transactionsVector,
      menuName: "Transactions",
      alt: "Transactions Logo",
    },
    { logo: accountVector, menuName: "Accounts", alt: "Accounts Logo" },
    {
      logo: investmentVector,
      menuName: "Investments",
      alt: "Investments Logo",
    },
    {
      logo: creditCardVector,
      menuName: "Credit Cards",
      alt: "Credit Cards Logo",
    },
    { logo: loansVector, menuName: "Loans", alt: "Loans Logo" },
    { logo: servicesVector, menuName: "Services", alt: "Services Logo" },
    {
      logo: myPrivelegesVector,
      menuName: "My Privileges",
      alt: "My Priveleges Logo",
    },
    { logo: settingsVector, menuName: "Settings", alt: "Settings Logo" },
  ];

  return (
    <>
      <aside>
        <nav className="d-flex flex-column">
          {menuItems.map((menuItem) => (
            <div
              className="menu-item d-flex align-items-center"
              key={menuItem.menuName}
            >
              <img src={menuItem.logo} alt={menuItem.alt} />
              <span>{menuItem.menuName}</span>
            </div>
          ))}
        </nav>
      </aside>
    </>
  );
}

export default Dashboard;
