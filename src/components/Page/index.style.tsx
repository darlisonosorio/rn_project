import styled from 'styled-components';

const Container = styled.View`
    background-color: ${props => props.color ?? 'white'};
    flex: 1;
`;

export default {
    Container,
};