import styled from 'styled-components/native';
import Button from '~/components/Button';
import Input from '~/components/Input';

export const Container = styled.View`
  flex: 1;
  margin-top: 80px;
  padding: 0 30px;
`;

export const Form = styled.View`
  align-self: stretch;
`;
export const FormInput = styled(Input)`
  margin-bottom: 10px;
`;
export const SubmitButton = styled(Button)`
  margin-bottom: 10px;
  background-color: #4ab84a;
`;
export const CancelSave = styled(Button)`
  background-color: #e51721;
`;
