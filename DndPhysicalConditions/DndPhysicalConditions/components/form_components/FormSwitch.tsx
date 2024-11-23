import React, { useState } from 'react';
import { View, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { Switch, Text } from 'react-native-paper';

// Define the props interface
interface FormSwitchProps {
  name: string; // Name of the switch
}

// Define a separate style interface
interface Style {
  container: ViewStyle;
  label: TextStyle;
}

const styles = StyleSheet.create<Style>({
  container: {
    flexDirection: 'row',
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    columnGap: 16,
  },
  label: {
    width: 200,
  },
});

const FormSwitch: React.FC<FormSwitchProps> = ({ name }) => {
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{name}</Text>
      <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
    </View>
  );
};

export default FormSwitch;
