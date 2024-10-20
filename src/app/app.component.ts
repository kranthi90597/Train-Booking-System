import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  seats = []; // Array to hold seat data
  totalSeats = 80; // Total number of seats
  bookedSeats = []; // Store booked seats for display

  constructor() {
    this.initializeSeats();
  }

  // Initializing seat data with 80 seats
  initializeSeats() {
    for (let i = 1; i <= this.totalSeats; i++) {
      this.seats.push({ id: i, status: 'available' });
    }
  }

  // Book requesting number of seats
  bookSeats(requestedSeats: number) {
    if (requestedSeats > 7) {
      alert('Cannot book more than 7 seats at a time');
      return;
    }

    const availableSeats = this.seats.filter(
      (seat) => seat.status === 'available'
    );
    if (availableSeats.length < requestedSeats) {
      alert('Not enough available seats.');
      return;
    }

    // Finding the nearest available seats
    const seatsToBook = availableSeats.slice(0, requestedSeats);
    seatsToBook.forEach((seat) => (seat.status = 'booked'));
    this.bookedSeats = seatsToBook.map((seat) => seat.id);
  }
}
