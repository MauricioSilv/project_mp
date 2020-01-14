import React from 'react';
import { TouchableOpacity } from 'react-native';
// import { Container } from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Background from '~/components/Background';

export default function typeEquipament() {
  return <Background />;
}

typeEquipament.navigationOptions = ({ navigation }) => ({
  title: 'Tipo de equipamento',
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Dashboard');
      }}
    >
      <Icon name="chevron-left" size={20} color="#fff" />
    </TouchableOpacity>
  ),
});
