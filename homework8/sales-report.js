class SalesReport {
  constructor() {
    this.sales = new Set();
  }

  addSale(propertyId, saleDate) {
    const saleRecord = `${propertyId}-${saleDate}`;
    if (this.sales.has(saleRecord)) {
      console.log(
        `The Property ID ${propertyId} and Date ${saleDate} already existed`
      );
    } else {
      this.sales.add(saleRecord);
      console.log(`The record has been added: ${propertyId} - ${saleDate}`);
    }
  }

  removeSale(propertyId, saleDate) {
    const saleRecord = `${propertyId}-${saleDate}`;
    if (this.sales.has(saleRecord)) {
      this.sales.delete(saleRecord);
      console.log(`Sale Record has been deleted ${propertyId} - ${saleDate}`);
    } else {
      console.log(
        `Sale Record with ${propertyId} and date ${saleDate} not found`
      );
    }
  }

  getAllSales() {
    return Array.from(this.sales);
  }

  getSalesCount() {
    return this.sales.size;
  }
}

const salesReport = new SalesReport();

salesReport.addSale('Apartment1', '2024-09-01');
salesReport.addSale('Apartment2', '2024-09-05');
salesReport.addSale('Apartment1', '2024-09-01'); // Дубликат
salesReport.addSale('Apartment3', '2024-09-10');

salesReport.removeSale('Apartment2', '2024-09-05');

console.log('Все уникальные записи о продаже:', salesReport.getAllSales());
console.log('Количество уникальных записей:', salesReport.getSalesCount());
