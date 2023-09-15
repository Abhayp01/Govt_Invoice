import React from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';

const InvoiceItemList = ({ items, onRemoveItem , onAddItem}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.name}</Text>
            <Text>Price: ${item.price.toFixed(2)}</Text>
            <Text>Quantity: {item.quantity}</Text>
            <Text>Total: ${item.total.toFixed(2)}</Text>
            <Button title="Remove" onPress={() => onRemoveItem(item)} />
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20
  },
  item: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray'
  }
});

export default InvoiceItemList;
