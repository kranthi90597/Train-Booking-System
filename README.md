# Train-Booking-System

[Edit in StackBlitz next generation editor ⚡️](https://stackblitz.com/~/github.com/kranthi90597/Train-Booking-System)

## Description
This project is a simple Angular application that simulates a train seat booking system. The train coach has a total of 80 seats. Users can book seats, and the booking logic prioritizes:
1. Booking seats in a single row if possible.
2. If a row does not have enough available seats, the application tries to book seats nearby in the next rows.

## Features
- Displays available and booked seats visually.
- Allows users to select the number of seats to be booked.
- Automatically allocates the best seats based on availability.

## Database Structure
The application uses an in-memory array to store seat availability. Each seat is represented as an object in the array.

### Example Structure
```json
[
  { "seatNumber": 1, "isAvailable": true },
  { "seatNumber": 2, "isAvailable": false },
  ...
]
```

## Key Concepts
- `seatNumber`: Represents the seat's position in the train coach.
- `isAvailable`: Boolean indicating whether the seat is available (`true`) or already booked (`false`).

## Technologies Used
- **Angular**: Framework for building the front-end.
- **TypeScript**: Primary language for Angular components.
- **HTML/CSS**: For structuring and styling the UI.

## Instructions to Run Locally
1. **Clone the repository**: 
   ```bash
   git clone (https://stackblitz.com/~/github.com/kranthi90597/Train-Booking-System)
   ```
2. **Navigate to the project directory**:
   ```bash
   cd train-booking-system
   ```
3. **Install dependencies: Run the following command to install the required packages**:
   ```bash
   npm install
   ```
4. **Start the development server: Run the following command to start the Angular application**:
   ```bash
   ng serve
   ```
 5. **Access the app**: Open your browser and go to http://localhost:4200 to view the application.

## Project Structure
**The key files in the project include**:

- src/app/app.component.ts: Main component logic.
- src/app/app.component.html: Template for the main view.
- src/app/app.component.css: Styling for the main view.
- src/app/hello.component.ts: Additional component used for greetings.

## How to Use
1. Select Number of Seats: Enter the number of seats you want to book.
2. Click 'Book Seats': The application will find the best available seats and mark them as booked.
3. View Booked Seats: Booked seats are displayed visually in a different style, indicating their status.
