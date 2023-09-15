import React from 'react';
import { View, Text } from 'react-native';

const InvoiceSummary = ({ subtotal, tax, total }) => {
  return (
    <View>
      <Text>Subtotal: ${subtotal.toFixed(2)}</Text>
      <Text>Tax (10%): ${tax.toFixed(2)}</Text>
      <Text>Total: ${total.toFixed(2)}</Text>
    </View>
  );
};

export default InvoiceSummary;
