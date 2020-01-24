import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, Left, Name } from './styles';

export default function ListOptions({ data, handleNavigation }) {
  return (
    <Container
      style={{
        elevation: 6,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: {
          width: 5,
          height: 5,
        },
      }}
      key={data.id}
    >
      <TouchableOpacity onPress={e => handleNavigation(data, e)}>
        <Left>
          <Icon name={data.icon} size={20} color="#333" />
          <Name>{data.name}</Name>
        </Left>
      </TouchableOpacity>
      <Icon name="keyboard-arrow-right" size={20} color="#333" />
    </Container>
  );
}
