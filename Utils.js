export function generateInvoiceNumber() {
    return `INV-${Math.floor(Math.random() * 1000)}`;
  }
  
  export function calculateTotals(items, taxRate = 0.1) {
    // Calculate subtotal
    const subtotal = items.reduce((acc, item) => acc + item.qty * item.rate, 0);
  
    // Calculate tax
    const tax = subtotal * taxRate;
  
    // Calculate total
    const total = subtotal + tax;
  
    return {
      subtotal,
      tax,
      total
    };
  }
  