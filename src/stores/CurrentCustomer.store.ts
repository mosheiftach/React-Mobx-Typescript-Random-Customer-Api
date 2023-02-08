import { observable, action, toJS, reaction } from "mobx";
import CustomerModel from "../models/Customer.model";

class CurrentCustomerStore {
  @observable customers: CustomerModel[] = [];

  customerCount = 0;
  customerList: CustomerModel[] = [];

  constructor() {
    reaction(
      () => this.customers,
      (customers) => {
        this.customerCount = customers.length;
        this.customerList = toJS(customers);
      }
    );
  }

  @action addCustomer(customer: CustomerModel) {
    this.customers.push(customer);
  }

  @action removeCustomer(customer: CustomerModel) {
    this.customers = this.customers.filter((c) => c !== customer);
  }

  @action editCustomer(customer: CustomerModel) {
    this.customers = this.customers.filter((c) => c !== customer);
  }

  @action clearCustomers() {
    let len = this.customers.length
    for(let i = 0 ; i< len ; i++){
      this.customers.pop();
    }
  }
}

const currentCustomerStore = new CurrentCustomerStore();
export default currentCustomerStore;