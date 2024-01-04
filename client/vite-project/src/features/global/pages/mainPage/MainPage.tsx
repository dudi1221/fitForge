import { useState } from "react";
import { ListButton, ChallengeCard, ChallengesCard, StatusButton, Title, InProgressButton, Container, GraphCard, StyledBox, StyledGridContainer, StyledGridItem, StyledTypography } from "../../styles/test.styles";
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const MainPage = () => {

    const [challengesList, setChallengesList] = useState('MyChallenges');

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
        { name: "Cardio Crusher Challenge", status: "in progress", progress: 30 },
        { name: "Flexibility Fiesta Sprint", status: "completed", progress: 100 },
        { name: "Strength Surge Quest", status: "in progress", progress: 70 },
        { name: "Core Conqueror Circuit", status: "completed", progress: 100 },
        { name: "Endurance Expedition Challenge", status: "in progress", progress: 40 },
        { name: "Power Pulse Adventure", status: "completed", progress: 100 }
    ];

    const handleChallengesList = () => {
        if (challengesList === 'All Chalenges') {
            setChallengesList('My Challenges');
        } else {
            setChallengesList('All Chalenges')
        };
    };

    const getBarColor = (data: any) => {
        const progress = data.payload.progress;
        if (progress === 100) {
          return 'green';
        } else if (progress > 25) {
          return 'orange';
        } else {
          return 'red';
        }
      };

    return (
        <Container>
            <div>
                <Title>
                    <h1>FitForge</h1>
                    <h2>Join FitForge for a Dynamic Fitness Experience Like Never Before!</h2>
                </Title>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <ChallengesCard>
                    <div>
                        <ListButton onClick={handleChallengesList}>All challenges</ListButton>
                        <ListButton onClick={handleChallengesList}>My challenges</ListButton>
                    </div>
                    <h3>{challengesList}</h3>
                    {challengesList === 'All Chalenges' ? allChallenges.map((challenge) => (
                        <ChallengeCard>
                            <StatusButton>START ⟫</StatusButton>
                            <h4>{challenge}</h4>
                        </ChallengeCard>
                    )) : myChalenges.map((challenge) => (
                        <ChallengeCard>
                            {challenge.status === "completed" ?
                                <StatusButton>{challenge.status}</StatusButton> :
                                <InProgressButton>{challenge.status}</InProgressButton>}
                            <h4>{challenge.name}</h4>
                        </ChallengeCard>
                    ))}
                </ChallengesCard>
                {/* <GraphCard>
                    <div style={{ width: '100vw', height: '100vh' }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '2em' }}>
                            <div style={{ height: '45vh', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                                <h4 style={{ marginBottom: '1em' }}>
                                    User Challenges Progress
                                </h4>
                                <ResponsiveContainer width="100%" height="100%" style={{ backgroundColor: '#E8EAF6', padding: '1em', borderRadius: '0.8em', border: 'solid #9FA8DA 0.1em' }}>
                                    <AreaChart
                                        width={500}
                                        height={400}
                                        data={myChalenges}
                                        margin={{
                                            top: 10,
                                            right: 30,
                                            left: 0,
                                            bottom: 0,
                                        }}
                                    >
                                        <CartesianGrid strokeDasharray="3 4" />
                                        <XAxis dataKey="name" tick={{ fill: '#black', fontSize: 12 }} tickFormatter={(value) => value.length > 10 ? `${value.substring(0, 10)}...` : value} />
                                        <YAxis />
                                        <Tooltip />
                                        <Area type="monotone" dataKey="progress" stroke="#7986CB" fill="#7986CB" />
                                    </AreaChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    </div>
                </GraphCard> */}
                <GraphCard>
                    <div style={{ width: '100vw', height: '100vh' }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '2em' }}>
                            <div style={{ height: '45vh', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                                <StyledTypography>
                                    User Challenges Progress
                                </StyledTypography>
                                <ResponsiveContainer width="100%" height="100%" style={{ backgroundColor: '#E8EAF6', padding: '1em', borderRadius: '0.8em', border: 'solid #9FA8DA 0.1em' }}>
                                    <BarChart data={myChalenges}>
                                        <CartesianGrid strokeDasharray="3 3" stroke="#F5F5F5" />
                                        <XAxis dataKey="name" stroke="#333" tick={{ fill: '#black', fontSize: 12 }} tickFormatter={(value) => value.length > 10 ? `${value.substring(0, 10)}...` : value} />
                                        <YAxis stroke="#333" />
                                        <Tooltip />
                                        <Legend />
                                        <Bar dataKey="progress" fill={getBarColor}/>
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    </div>
                </GraphCard>
            </div>
        </Container>
    );
};

export default MainPage;
