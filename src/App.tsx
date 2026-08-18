// Imports
import Dashboard from "./components/Dashboard.tsx";
import Header from "./components/Header.tsx";
import CreditCard from "./components/Credit Cards.tsx";

// App Function
function App() {
  return (
    <div className="d-flex flex-column vh-100">
      <Header pageName={""}/>
      <div className="d-flex flex-grow-1">
        <div className="flex-shrink-0 dashboard">
          <Dashboard/>
        </div>
        
        <div className="d-flex flex-grow-1 min-vh-0">
          <CreditCard/>
        </div>
      </div>
    </div>
  );
}

export default App;
