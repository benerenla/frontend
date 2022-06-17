import styled from "styled-components"


export const ContainerMainComp = styled.div(props => ({
    width: props.width ? props.width : '80%',
    height: props.height ? props.height : '15%',
}));

