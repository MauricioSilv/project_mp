import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, Left, Name } from './styles';

export default function ListOptions({ data, handleNavigation }) {
  return (
    <Container key={data.id}>
      <TouchableOpacity onPress={e => handleNavigation(data, e)}>
        <Left>
          <Icon name={data.icon} size={20} color="#3F2474" />
          <Name>{data.name}</Name>
        </Left>
      </TouchableOpacity>
      <Icon name="keyboard-arrow-right" size={20} color="#3F2474" />
    </Container>
  );
}
