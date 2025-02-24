**CashOut** is a simple, lightweight web-based tool I created for my personal use. Every time I need to cash out from platforms like bKash, Nagad, or Rocket, I find myself manually calculating charges and remaining balances. To save time and avoid errors, I built this tool to automate the process.


## Why Did I Build This?
As someone who frequently uses digital payment platforms, I often need to calculate:
- How much money I’ll receive after deducting transaction charges.
- The exact charge amount based on the selected payment method and transaction type.
- The remaining balance in my account after the transaction.

Instead of doing these calculations manually every time, I decided to create a solution that works for me. It’s quick, easy, and saves me from unnecessary headaches. This project is tailored specifically to my needs, but if you find it useful, feel free to adapt it for your own use!

## Features
1. **Dynamic Payment Method Selection**:
   - Choose between bKash, Nagad, and Rocket.
   - Each platform has specific charge rates for different transaction types (e.g., Prio, Merchant, ATM).

2. **Customizable Inputs**:
   - Enter your current account balance and specify how much you want to leave as a remaining balance after the transaction.

3. **Real-Time Charge Display**:
   - Once you select a payment method and transaction type, the app dynamically shows the applicable charge per thousand units of currency.

4. **Simple and Personalized**:
   - Designed for my personal workflow, but flexible enough for others to use.

5. **Error Handling**:
   - Alerts guide you if any required fields are missing or incorrect.


## How to Use
1. **Input Current Balance**:
   - Enter your current account balance in the "Current Balance" field.

2. **Set Remaining Balance**:
   - Specify how much you want to keep in your account after the transaction. This value defaults to `0`.

3. **Select Payment Method**:
   - Click on one of the payment method icons (bKash, Nagad, Rocket) to select it. This will display the corresponding transaction options (e.g., Prio, Merchant, ATM).

4. **Choose Transaction Type**:
   - Select the desired transaction type from the displayed buttons. The charge rate for the selected option will appear below.

5. **Calculate**:
   - Click the "Calculate" button to view the results:
     - **Cashout Amount**: The amount you will receive after deducting charges.
     - **Charge**: The fee applied for the transaction.
     - **Remaining Balance**: The amount left in your account after the transaction.

## Installation and Setup
Since this project was built for personal use, there’s no need for complex installation steps. Simply:
1. Clone the repository or download the project files.
2. Ensure the following files are present in the root directory:
   - `index.html`: The main HTML file.
   - `script.js`: Contains the JavaScript logic.
   - `styles.css`: Stylesheet for the application.
   - `assets/`: Folder containing images for payment methods (e.g., bKash, Nagad, Rocket).
3. Open `index.html` in your web browser, and you’re ready to go!