import { ChallengeInfoCard, ChallengeInfoContainer, Container, GradientOverlay, Header, Title } from "../../../global/styles/test.styles";

const ChallengePage = () => {
    return (
        <Container style={{ backgroundImage: `url("https://img.freepik.com/free-photo/still-life-gym-equipment_23-2148197730.jpg?w=740&t=st=1706187130~exp=1706187730~hmac=2ddabe0a27517b2a536d7b0283f098dfe65259d2615560b2ada3da56d0fbad91")` }}>
            <GradientOverlay />
            <Header>
                <Title>Cardio Crusher Challenge</Title>
            </Header>
            <ChallengeInfoContainer>
                <ChallengeInfoCard>
                    <h3 style={{ color: "white" }}>Your Title Here</h3>
                    <p style={{ color: "white" }}>Your Title Here</p>
                </ChallengeInfoCard>
            </ChallengeInfoContainer>
        </Container>
    );
};

export default ChallengePage;
