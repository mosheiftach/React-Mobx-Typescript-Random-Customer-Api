## Installation and Running

Run the following commands to clone and run the repository.

`cd <repo name>`

`npm install`

`npm start`

## Coding Challenge Requirements

- When you finish the assignment, upload the project's root folder (excluding `node_modules` and `build` folders) to `https://wetransfer.com` and send us the link.
- This coding challenge should not take more than 1-3 hours.

# React/Mobx

## Task 1

Create a Customer Model in React.

## Task 1 Details

- Customer Model should contain at least `Age` and `Name` properties.
- Ensure you have utilizing MobX reactivity decorators.
- A starter file is located at `~/src/models/Customer.model.ts`.

## Task 2

Create a `CurrentCustomerStore` that uses the `CustomerModel` type you just wrote in Task 1.

- A starter file is located at `~/src/stores/CurrentCustomer.store.ts`.

## Task 3

- Create two React components: `EditCustomer` and `DisplayCustomerName`.
- The components should be displayed, side by side, in the `App.tsx` component.

## Task 3 Details

## `EditCustomer`

- On component load, if no customer information alrady exists, query this API `https://randomuser.me/api` and display some of the customer's information.
- Create button that calls the API without refreshing the page.
- Component should allow editing of customer's name and age.
- Store current customer information in browser local storage. Load information on page load, if exists.
- Create button to clear all customer information.

## `DisplayCustomerName`

Component should display the customer's name.

- CustomerName = customer.name + customer.age (Example: Eric30, Anna25, Shai42)
- Only the first 10 chars of a name should be displayed in the customer name, but the full name should be saved (even longer than 10 chars).
- Ensure that the first letter of the name is capital, and that rest of the letter are lowercase.
- Changes in the customer's name and age should be automatically reflected in this component utilizing MobX reactivity.

# MongoDB/Mongoose

## Task 1

Write a simple Mongoose customer schema.

## Task 1 Details

- Schema properties should match the `CustomerModel` from above.
- Ensure that timestamps will be recorded.
- This code will not be executed, but should be valid.
- A starter file is located at `~/customerModel.js`. Fix and finish the code.

## Task 2

- Write a simple function that demonstrates how to find and update a customer model.

### Task 2 Details

- A starter function is in the `~/updateCurrentCustomer.js file`. Fix and finish the code.
- This code should utilize the customer schema you wrote in Task 1.
- Assume the Customer ID is given to you.
- If no DB document is found, create a new one.
- Return the new document after update.
- This code will not be executed, but should be valid.

### Bonus Task

- Add dark/light mode switching functionality to the app you just created.

# Notes

Your work will be judged based on these factors:

1. Does it run without errors?
2. Is the code clean and easy to understand?
3. Is the code easy to extend?
4. Does the code follow best practices?

If you have extra time and energy, feel free to add a feature of your own design. It will be taken into strong consideration.

Please provide feedback if any errors or bugs are encountered in this repo. We want to make your coding challenge as painless as possible.

- Albarius Dev Team
