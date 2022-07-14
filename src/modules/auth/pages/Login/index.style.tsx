import styled from 'styled-components';
import { Title, TextInput, Button as Btn, Card as Crd, useTheme } from 'react-native-paper';
import { Page } from '../../../../components';


const height = 52;
const mb = 12;

const Container = styled(Page)`
    padding: 24px;
    justify-content: center;
`;

const Card = styled(Crd)`
    padding: 24px;
`;

const Label = styled(Title)`
    text-align: center;
`;

const fieldHeight = `
    height: ${height}px;
    margin-bottom: ${mb}px;
`;

const Input = styled(TextInput).attrs({ mode: 'outlined' })`
    ${fieldHeight}
    color: black; 
    background-color: white;
`;

const Button = styled(Btn).attrs({ mode: 'contained' })`
    ${fieldHeight}
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    width: 100%;
`;

const BTInner = styled.Text`
    color: white;
    font-size: 18px;
    font-weight: 600;
`;

export default {
    Container,
    Card,
    Label,
    Input,
    Button,
    BTInner,
}
