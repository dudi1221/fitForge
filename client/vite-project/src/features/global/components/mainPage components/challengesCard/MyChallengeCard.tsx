import { ChallengeCard, InProgressButton, StatusButton } from "../../../styles/test.styles";

interface MyChallenge {
    challenge: {
        name: string;
        status: string;
        progress: number;
    }
}

const MyChallenge: React.FC<MyChallenge> = ({ challenge }) => {
    return (
        <>
            <ChallengeCard>
                {challenge.status === "Completed" ?
                    <StatusButton>{challenge.status}</StatusButton> :
                    <InProgressButton>{challenge.status}</InProgressButton>}
                < h4 > {challenge.name}</h4 >
            </ChallengeCard>
        </>
    )
};

export default MyChallenge;