class Airport {
  flights = [];

  addFlight(flightNumber, destination, status) {
    this.flights.push({
      flightNumber,
      destination,
      status,
    });
  }

  findFlight(flightNumber) {
    console.log(
      this.flights.filter(flight => flight.flightNumber === flightNumber)
    );
  }

  filterDelayedFlights() {
    console.log(this.flights.filter(flight => flight.status === 'delayed'));
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
