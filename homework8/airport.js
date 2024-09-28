class Airport {
  flights = [];

  addFlight(flightNumber, destination, status) {
    this.flights.push({
      flightNumber: flightNumber,
      destination: destination,
      status: status,
    });
  }

  findFlight(flightNumber) {
    return console.log(
      this.flights.filter(flight => flight.flightNumber === flightNumber)
    );
  }

  filterDelayedFlights() {
    return console.log(
      this.flights.filter(flight => flight.status === 'delayed')
    );
  }

  getFlightInfo() {
    return this.flights.forEach(flight => {
      console.log(
        `Flight: ${flight.flightNumber}, Destination: ${flight.destination}, Status: ${flight.status}`
      );
    });
  }
}

const airport = new Airport();

airport.addFlight('SU123', 'Москва', 'on time');
airport.addFlight('AF456', 'Париж', 'delayed');
airport.addFlight('LH789', 'Берлин', 'on time');
airport.addFlight('BA101', 'Лондон', 'delayed');

airport.findFlight('AF456');

airport.filterDelayedFlights();

airport.getFlightInfo();
