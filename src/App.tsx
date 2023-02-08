import "./App.css";
import DisplayCustomerName from "./components/DisplayCustomerName";
import EditCustomer from "./components/EditCustomer";

const App = () => {
  return (
    <div className="App">
      <EditCustomer />
      <DisplayCustomerName />
    </div>
  );
};

export default App;
