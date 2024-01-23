import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ChallengesCard, ListButton } from "../../../styles/test.styles";
import { faArrowsLeftRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import MyChallengesContent from "../myChallengesContent/MyChallengesContent";

const MyChallenges = () => {
    const [challengesList, setChallengesList] = useState('My Challenges');

    const handleChallengesList = () => {
        if (challengesList === 'All Challenges') {
            setChallengesList('My Challenges');
        } else {
            setChallengesList('All Challenges')
        };
    };

    return (
        <ChallengesCard>
            <div>
                <ListButton style={{ background: challengesList === 'All Challenges' ? 'rgb(158, 158, 158)' : `linear-gradient(to top, black, gray)` }} onClick={handleChallengesList}>All challenges</ListButton>
                <FontAwesomeIcon icon={faArrowsLeftRight} fade size="xl" />
                <ListButton style={{ background: challengesList === 'My Challenges' ? 'rgb(158, 158, 158)' : `linear-gradient(to top, black, gray)` }} onClick={handleChallengesList}>My challenges</ListButton>
            </div>
            <MyChallengesContent challengesList={challengesList} />
        </ChallengesCard>
    )
};

export default MyChallenges;