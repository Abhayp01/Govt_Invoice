import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const InvoiceForm = ({ customer, onChangeCustomer, onAddItem }) => {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productQuantity, setProductQuantity] = useState('');

  const handleAddItem = () => {
    if (product.name && product.price && product.quantity) {
      const newItem = {
        name: product.name,
        price: parseFloat(product.price),
        quantity: parseInt(product.quantity),
        total: parseFloat(product.price) * parseInt(product.quantity)
      };
  
      onAddItem(newItem); // Call the parent's onAddItem function
      setProduct({ name: '', price: '', quantity: '' });
    }
  };
  
  

  return (
    <View style={styles.container}>
      <View style={styles.customerInfo}>
        <TextInput
          placeholder="Customer Name"
          value={customer.name}
          onChangeText={(text) => onChangeCustomer({ ...customer, name: text })}
          style={styles.input}
        />
        <TextInput
          placeholder="Customer Email"
          value={customer.email}
          onChangeText={(text) => onChangeCustomer({ ...customer, email: text })}
          style={styles.input}
        />
      </View>
      <View style={styles.productInfo}>
        <TextInput
          placeholder="Product Name"
          value={productName}
          onChangeText={(text) => setProductName(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Price"
          value={productPrice}
          onChangeText={(text) => setProductPrice(text)}
          keyboardType="numeric"
          style={styles.input}
        />
        <TextInput
          placeholder="Quantity"
          value={productQuantity}
          onChangeText={(text) => setProductQuantity(text)}
          keyboardType="numeric"
          style={styles.input}
        />
        <Button title="Add Product" onPress={handleAddItem} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20
  },
  customerInfo: {
    marginBottom: 10
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 10,
    padding: 10
  }
});

export default InvoiceForm;
