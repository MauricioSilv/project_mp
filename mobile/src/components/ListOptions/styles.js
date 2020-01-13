import styled from 'styled-components/native';

export const Container = styled.View`
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 5px;
  background: #fff;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const Left = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const Name = styled.Text`
  margin-left: 15px;
  font-size: 14px;
  color: #333;
  font-weight: bold;
`;
