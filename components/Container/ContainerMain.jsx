import { ContainerMainComp } from "./ContainerComponent";
import { Text } from "../Shared";
export default function Container({ children, ...props }) {
    return (
        <ContainerMainComp>
           <Text>Atlas</Text>
        </ContainerMainComp>
    )
} 