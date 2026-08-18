import { useState } from "react";

// Imports
import Dashboard from "./components/Dashboard.tsx";
import Header from "./components/Header.tsx";
import CreditCard from "./components/Credit Cards.tsx";
import Services from "./components/Services.tsx";
import Settings from "./components/Settings.tsx";

type Page = "credit-card" | "services" | "settings";

function App() {
  const [currentPage, setCurrentPage] = useState<Page>("credit-card");

  return (
    <div className="d-flex flex-column vh-100">
      <Header
        pageName={currentPage}
        onSettingsClick={() => setCurrentPage("settings")}
      />

      <div className="d-flex flex-grow-1 min-vh-0">
        {/* Dashboard / Sidebar - ALWAYS VISIBLE */}
        <div className="flex-shrink-0 dashboard">
          <Dashboard
            onCreditCardClick={() => setCurrentPage("credit-card")}
            onServicesClick={() => setCurrentPage("services")}
            onSettingsClick={() => setCurrentPage("settings")}
          />
        </div>

        {/* Main Content */}
        <div className="d-flex flex-grow-1 min-vh-0">
          {currentPage === "credit-card" && <CreditCard />}

          {currentPage === "services" && <Services />}

          {currentPage === "settings" && <Settings />}
        </div>
      </div>
    </div>
  );
}

export default App;