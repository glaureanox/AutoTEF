import Footer from "../../components/footer";
import Logo from "../../components/logo";
import Navbar from "../../components/navbar";
import Card from "./components/card";
import { Container } from "./styles";

const Home = () => {
    return(
        <>
            <Navbar />
            <Container>
                <Logo />
                <Card />
            </Container>
            <Footer />
        </>
    )   
}

export default Home;