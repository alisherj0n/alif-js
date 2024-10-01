class PoliceStation {
  cases = [];

  addCase(caseNumber, suspectName, status) {
    this.cases.push({
      caseNumber,
      suspectName,
      status,
    });
  }
  findCaseByNumber(caseNumber) {
    console.log(this.cases.filter(c => c.caseNumber === caseNumber));
  }

  findCaseBySuspectName(suspectName) {
    console.log(this.cases.filter(c => c.suspectName === suspectName));
  }

  getAllCases() {
    console.log(this.cases);
  }
}

const policeStation = new PoliceStation();

policeStation.addCase(101, 'Анвар Холиков', 'расследуется');
policeStation.addCase(102, 'Рухшона Давлатова', 'открыто');
policeStation.addCase(103, 'Сомон Усмонов', 'закрыто');

policeStation.findCaseByNumber(102);

policeStation.getAllCases();
