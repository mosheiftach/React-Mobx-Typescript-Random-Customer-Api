import { observable, action } from "mobx";


class CustomerModel {
  @observable age: number;
  @observable name: string;

  constructor(age: number, name: string) {
    this.age = age;
    this.name = name;
  }

  @action setAge(age: number) {
    this.age = age;
  }

  @action setName(name: string) {
    this.name = name;
  }
}

export default CustomerModel;
