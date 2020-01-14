import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
// import PropTypes f rom 'prop-types';
import ListOptions from '~/components/ListOptions';
import Background from '~/components/Background';
import { Container, Title, List } from './styles';

const data = [
  {
    id: '0',
    icon: 'person-add',
    name: 'Adicionar usuarios',
    action: 'addUser',
  },
  {
    id: '1',
    icon: 'add-box',
    name: 'Nova operação',
    action: 'newOperation',
  },
  {
    id: '2',
    icon: 'more',
    name: 'Tipos de equipamentos',
    action: 'typeEquipament',
  },
  {
    id: '3',
    icon: 'group-add',
    name: 'Criar times',
    action: 'newTeam',
  },
  {
    id: '4',
    icon: 'list',
    name: 'Criar etapas',
    action: 'newPhase',
  },
];
export default function Dashboard({ navigation }) {
  function handleNavigate(event) {
    navigation.navigate(event.action);
  }

  return (
    <Background>
      <Container>
        <Title>Dashboard</Title>
        <List
          data={data}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <ListOptions data={item} handleNavigation={handleNavigate} />
          )}
        />
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
