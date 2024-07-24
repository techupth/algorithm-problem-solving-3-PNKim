function sortCustomerName(customers) {
  // เริ่มเขียนโค้ดตรงนี้จ้า
  for (let i = 0; i < customers.length - 1; i++) {
    for (let j = i; j < customers.length - 1 - i; j++) {
      if (customers[j] > customers[j + 1]) {
        let newCustomer = customers[j];
        customers[j] = customers[j + 1];
        customers[j + 1] = newCustomer;
      }
    }
  }
  return customers;
}

customers = ["Somchai", "Arthit", "Suchada", "Napasorn", "Pimchanok"];
console.log(sortCustomerName(customers));

// ตอบคำถามตรงนี้จ้า
// มี Big O เป็น On^2 เนื่องจากมีการวนลูปจำนวน 2 ครั้งในฟังก์ชั่น
