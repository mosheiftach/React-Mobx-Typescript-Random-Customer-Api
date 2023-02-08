import React from "react";
import { reaction, toJS } from "mobx";
import currentCustomerStore from "../stores/CurrentCustomer.store";
import CustomerModel from "../models/Customer.model";
import "../style/EditCustomer.css";

class EditCustomer extends React.Component {
  state = {
    list: [],
    age: 0,
    name: "",
    darkMode:true,
  };

  disposer: any;

  componentDidMount() {
    this.disposer = reaction(
      () => this.setState({ list: currentCustomerStore.customers }),
      (customerList) => this.setState({ list: customerList })
    );

    const customer = localStorage.getItem("customer");

    if (customer) {
      const obj = JSON.parse(customer);
      for (let i = 0; i < obj.length; i++) {
        currentCustomerStore.addCustomer(
          new CustomerModel(obj[i].age, obj[i].name)
        );
      }
    } else {
      this.fetchCustomerData();
    }
  }

  fetchCustomerData = () => {
    fetch("https://randomuser.me/api")
      .then((res) => res.json())
      .then((data) => {
        currentCustomerStore.addCustomer(
          new CustomerModel(
            data.results[0].registered.age,
            `${data.results[0].name.first}_${data.results[0].name.last}`
          )
        );
        localStorage.setItem(
          "customer",
          JSON.stringify(toJS(currentCustomerStore.customers))
        );
      });
  };

  handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ age: Number(e.target.value) });
  };

  handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ name: String(e.target.value) });
  };

  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    currentCustomerStore.addCustomer(
      new CustomerModel(this.state.age, this.state.name)
    );
    localStorage.setItem(
      "customer",
      JSON.stringify(toJS(currentCustomerStore.customers))
    );
  };

  handleClear = () => {
    currentCustomerStore.clearCustomers();
    localStorage.removeItem("customer");
  };

  handleApiCall = () => {
    this.fetchCustomerData();
  };

  setTheme = ()=> {
    if (this.state.darkMode) {
        document.documentElement.style.setProperty('--text-color', '#FFFFFFFF');
        document.documentElement.style.setProperty('--body-left-color', 'rgb(0, 0, 0)');
        document.documentElement.style.setProperty('--body-right-color', '#fffcfc');
        document.documentElement.style.setProperty('--form-back-color', 'rgb(0, 0, 0)');
        this.setState({darkMode:false})
    } else {
        document.documentElement.style.setProperty('--body-left-color', 'rgb(107, 178, 248)');
        document.documentElement.style.setProperty('--body-right-color', '#fffcfc');
        document.documentElement.style.setProperty('--text-color', 'rgb(0, 0, 0)');
        document.documentElement.style.setProperty('--form-back-color', '#FFFFFFFF');
        this.setState({darkMode:true})
    }
}

  render() {
    return (
      <div className="center">
        <button onClick={this.setTheme} className="button">{this.state.darkMode?"DarkMode":"LightMode"}</button>
        <h1>Add Customer</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="inputbox">
            <input
              type="number"
              value={this.state.age}
              onChange={this.handleAgeChange}
              required={true}
            />
            <span>Age</span>
          </div>
          <div className="inputbox">
            <input
              type="text"
              value={this.state.name}
              onChange={this.handleNameChange}
              required={true}
            />
            <span>Name</span>
          </div>
          <button className="button" type="submit">
            Add
          </button>
        </form>
        <button className="button" onClick={this.handleClear}>
          Clear
        </button>
        <button className="button" onClick={this.handleApiCall}>
          Call Api
        </button>
      </div>
    );
  }
}

export default EditCustomer;
