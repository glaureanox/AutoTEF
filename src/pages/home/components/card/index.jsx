import { Container, Image, Title } from "./styles";
import Tree from "../../../../../public/machinetree.svg"

const Card = () => {
    return(
        <Container>
            <Image src={Tree} alt="" />
            <div style={{
                display: "flex",
                flexWrap: "wrap",
                width: "70%",
                textAlign: "center"
            }}>
                <Title>Organize Machine Hierarchy</Title>
            </div>
        </Container>
    )
}

export default Card;