import styled from "styled-components";
import { colors } from "../libs/colors";
import { fonts } from "../libs/fonts";

export const Text = styled.h1(props => ({
    color: colors.white,
    ...fonts.poppins.Xl
}));