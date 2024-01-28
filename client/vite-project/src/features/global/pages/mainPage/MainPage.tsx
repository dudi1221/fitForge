import { Title, Container, CardsContainer, ChartsContainer } from "../../styles/test.styles";
import Header from "../../components/mainPage components/header/Header";
import MyChallenges from "../../components/mainPage components/myChallenges/MyChallenges";
import Chart1 from "../../components/mainPage components/chartsCard/Chart1";
import Chart2 from "../../components/mainPage components/chartsCard/Chart2";

const MainPage = () => {

    return (
        <Container style={{backgroundImage: `url("https://img.freepik.com/premium-photo/muscular-man-working-out-battle-ropes-gym_53876-158325.jpg?w=826")`}}>
            <Title>
                <Header />
            </Title>
            <CardsContainer>
                <MyChallenges />
                <ChartsContainer>
                    <Chart1 />
                    <Chart2 />
                </ChartsContainer>
            </CardsContainer>
        </Container>
    );
};

export default MainPage;
