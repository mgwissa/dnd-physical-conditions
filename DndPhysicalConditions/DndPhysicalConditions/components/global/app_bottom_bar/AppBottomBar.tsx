import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';

const BoonsRoute = () => <Text>Music</Text>;

const ConditionsRoute = () => <Text>Albums</Text>;

const AppBottomBar = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'boons', title: 'Boons', focusedIcon: 'arm-flex', unfocusedIcon: 'arm-flex-outline'},
    { key: 'conditions', title: 'Conditions', focusedIcon: 'skull', unfocusedIcon: 'skull-outline' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    boons: BoonsRoute,
    conditions: ConditionsRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default AppBottomBar;