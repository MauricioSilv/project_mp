import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Background from '~/components/Background';
import { Container, Title } from './styles';

export default function Dashboard() {
  return (
    <Background>
      <Container>
        <Title>Dashboard</Title>
      </Container>
    </Background>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Dashboard',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="developer-board" size={20} color={tintColor} />
  ),
};
