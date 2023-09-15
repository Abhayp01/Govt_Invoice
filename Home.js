import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const InvoiceGenerator = () => {
  const [customer, setCustomer] = useState({
    name: '',
    email: '',
  });

  const [item, setItem] = useState({
    name: '',
    quantity: '',
    price: '',
  });

  const [items, setItems] = useState([]);

  const addItem = () => {
    if (item.name && item.quantity && item.price) {
      setItems([...items, { customerName: customer.name, ...item }]);
      setItem({ name: '', quantity: '', price: '' });
    }
  };

  const removeItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  const calculateTotals = () => {
    const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const tax = subtotal * 0.1; // Assuming 10% tax rate
    const total = subtotal + tax;

    return {
      subtotal,
      tax,
      total,
    };
  };

  const generateInvoiceNumber = () => {
    return `INV-${Math.floor(Math.random() * 1000)}`;
  };

  const generateCurrentDate = () => {
    const date = new Date();
    const year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    if (month < 10) {
      month = `0${month}`;
    }

    if (day < 10) {
      day = `0${day}`;
    }

    return `${year}-${month}-${day}`;
  };

  const { subtotal, tax, total } = calculateTotals();

  return (
    <View style={styles.container}>
      <View style={styles.customerInfo}>
        <Text>Customer Name:</Text>
        <TextInput
          placeholder="Enter name"
          value={customer.name}
          onChangeText={(text) => setCustomer({ ...customer, name: text })}
          style={styles.input}
        />
        <Text>Customer Email:</Text>
        <TextInput
          placeholder="Enter email"
          value={customer.email}
          onChangeText={(text) => setCustomer({ ...customer, email: text })}
          style={styles.input}
        />
      </View>

      <View style={styles.invoiceItems}>
        <Text style={styles.header}>Invoice Items:</Text>
        <TextInput
          placeholder="Product Name"
          value={item.name}
          onChangeText={(text) => setItem({ ...item, name: text })}
          style={styles.input}
        />
        <TextInput
          placeholder="Quantity"
          value={item.quantity}
          onChangeText={(text) => setItem({ ...item, quantity: text })}
          keyboardType="numeric"
          style={styles.input}
        />
        <TextInput
          placeholder="Price"
          value={item.price}
          onChangeText={(text) => setItem({ ...item, price: text })}
          keyboardType="numeric"
          style={styles.input}
        />
        <Button title="Add Item" onPress={addItem} />
        <FlatList
          data={items}
          renderItem={({ item, index }) => (
            <View style={styles.itemContainer}>
              <View style={styles.item}>
                <Text>Customer Name: {item.customerName}</Text>
                <Text>Product Name: {item.name}</Text>
                <Text>Quantity: {item.quantity}</Text>
                <Text>Price: ${item.price}</Text>
              </View>
              <TouchableOpacity
                style={styles.removeButton}
                onPress={() => removeItem(index)}
              >
                <Text style={styles.removeButtonText}>Remove</Text>
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>

      <View style={styles.summary}>
        <Text style={styles.header}>Invoice Summary:</Text>
        <Text>Subtotal: ${subtotal.toFixed(2)}</Text>
        <Text>Tax (10%): ${tax.toFixed(2)}</Text>
        <Text>Total: ${total.toFixed(2)}</Text>
      </View>

      <View style={styles.footer}>
        <Button style={styles.btx} title="Generate Invoice Number" onPress={() => console.log(generateInvoiceNumber())} />
        <Button style={styles.btx} title="Generate Current Date" onPress={() => console.log(generateCurrentDate())} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  customerInfo: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 10,
    padding: 8,
  },
  invoiceItems: {
    marginBottom: 20,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
  },
  item: {
    flex: 1,
  },
  removeButton: {
    backgroundColor: 'red',
    padding: 5,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  removeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  summary: {
    marginBottom: 20,
  },
  footer: {
    
  },
  btx:{
    width:'10%',
    marginTop:10,
  }
});

export default InvoiceGenerator;
