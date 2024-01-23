import MyChallenge from "../challengesCard/MyChallengeCard";
import StartChallenge from "../challengesCard/StartChallengeCard";

interface MyChallengesContentProps {
    challengesList: string;
}

const MyChallengesContent: React.FC<MyChallengesContentProps> = ({ challengesList }) => {

    const allChallenges = [
        "Cardio Crusher Challenge",
        "Flexibility Fiesta Sprint",
        "Strength Surge Quest",
        "Core Conqueror Circuit",
        "Endurance Expedition Challenge",
        "Power Pulse Adventure",
        "Balance Mastery Marathon",
        "Agility Ascendance Quest",
        "HIIT Hero Challenge",
        "Mindful Movement Odyssey",
        "Full Body Fusion Fiesta",
        "Breathe & Burn Bonanza",
        "Dynamic Dance Drill",
        "Mettle Metamorphosis Challenge",
        "Sprint to Zen Mastery"
    ];

    const myChalenges = [
        { name: "Cardio Crusher Challenge", status: "In Progress", progress: 25 },
        { name: "Flexibility Fiesta Sprint", status: "Completed", progress: 100 },
        { name: "Strength Surge Quest", status: "In Progress", progress: 70 },
        { name: "Core Conqueror Circuit", status: "Completed", progress: 100 },
        { name: "Endurance Expedition Challenge", status: "In Progress", progress: 40 },
        { name: "Power Pulse Adventure", status: "Completed", progress: 100 }
    ];

    return (
        <>
            <h3>{challengesList}</h3>
            {challengesList === 'All Challenges' ? allChallenges.map((challenge) => (
                <StartChallenge challenge={challenge} />
            )) : myChalenges.map((challenge) => (
                <MyChallenge challenge={challenge} />
            ))}
        </>
    )
};

export default MyChallengesContent;