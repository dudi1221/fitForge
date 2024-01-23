import { ChallengeCard, StatusButton } from "../../../styles/test.styles";

interface Challenge {
    challenge: string;
}

const StartChallenge: React.FC<Challenge> = ({ challenge }) => {
    return (
        <ChallengeCard>
            <StatusButton>START ⟫</StatusButton>
            <h4>{challenge}</h4>
        </ChallengeCard>
    )
};

export default StartChallenge;         