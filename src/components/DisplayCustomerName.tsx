import { Component } from "react";
import { observer } from "mobx-react";
import { toJS } from "mobx";
import currentCustomerStore from "../stores/CurrentCustomer.store";
import "../style/DisplayCustomerName.css";

@observer
class DisplayCustomerName extends Component {
  state = {
    list: currentCustomerStore.customers,
  };

  render() {
    return (
      <div className="disply-main-wrapper">
        <h1>Curstomer's list</h1>
        {toJS(currentCustomerStore.customers.length >= 1) ? (
          toJS(this.state.list).map((customer, indx) => (
            <li className="list" key={indx}>{`${
              customer.name.charAt(0).toUpperCase() +
              customer.name.slice(1, 10).toLowerCase()
            }_${customer.age}`}</li>
          ))
        ) : (
          <p>Please add customers</p>
        )}
      </div>
    );
  }
}

export default DisplayCustomerName;
