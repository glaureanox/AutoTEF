import { Container } from "./styles";
import BoschLogo from "../../../public/bosch.svg"

const Logo = () => {
    return(
        <Container>
            <img src={BoschLogo} alt="" style={{
                objectFit: "cover",
                width: "150px",
                marginRight: "20px"
            }}/>
        </Container>
    )
}

export default Logo;