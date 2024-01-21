import { useState } from "react";
import { ListButton, ChallengeCard, ChallengesCard, StatusButton, Title, InProgressButton, Container, GraphCard } from "../../styles/test.styles";
import { Bar, BarChart, CartesianGrid, Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

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
        { name: "Cardio Crusher Challenge", status: "In Progress", progress: 25 },
        { name: "Flexibility Fiesta Sprint", status: "Completed", progress: 100 },
        { name: "Strength Surge Quest", status: "In Progress", progress: 70 },
        { name: "Core Conqueror Circuit", status: "Completed", progress: 100 },
        { name: "Endurance Expedition Challenge", status: "In Progress", progress: 40 },
        { name: "Power Pulse Adventure", status: "Completed", progress: 100 }
    ];

    const handleChallengesList = () => {
        if (challengesList === 'All Chalenges') {
            setChallengesList('My Challenges');
        } else {
            setChallengesList('All Chalenges')
        };
    };

    const categorizedChallenges = {
        completed: myChalenges.filter(challenge => challenge.status === "Completed"),
        inProgress: myChalenges.filter(challenge => challenge.status === "In Progress" && challenge.progress > 25),
        beginning: myChalenges.filter(challenge => challenge.progress <= 25)
    };

    const totalChallenges = myChalenges.length;

    const calculatePercentage = (category: keyof typeof categorizedChallenges) => {
        const challengesInCategory = categorizedChallenges[category].length;
        return (challengesInCategory / totalChallenges) * 100;
    };

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({
        cx,
        cy,
        midAngle,
        innerRadius,
        outerRadius,
        percent,
    }: any) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text
                x={x}
                y={y}
                fill="white"
                textAnchor={x > cx ? "start" : "end"}
                dominantBaseline="central"
            >
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    return (
        <Container>
            <div>
                <Title>
                    <h1>FitForge</h1>
                    <h2>Join FitForge for a Dynamic Fitness Experience Like Never Before!</h2>
                </Title>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '160px' }}>
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
                            {challenge.status === "Completed" ?
                                <StatusButton>{challenge.status}</StatusButton> :
                                <InProgressButton>{challenge.status}</InProgressButton>}
                            <h4>{challenge.name}</h4>
                        </ChallengeCard>
                    ))}
                </ChallengesCard>

                <div style={{ display: 'flex', flexDirection: "column" }}>
                <GraphCard>
                        <div style={{ width: '100vw', height: '100vh' }}>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '2em' }}>
                                <div style={{ height: '35vh', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', background: 'rgb(240, 240, 240)' }}>
                                    <ResponsiveContainer width="100%" height="100%" style={{ backgroundColor: 'rgb(240, 240, 240)', padding: '1em', borderRadius: '0.2em'/* , border: 'solid rgb(156, 162, 218) 0.5px', borderTop: 'none' */, boxShadow: '2px 5px 5px 0px' }}>
                                        <BarChart data={myChalenges}>
                                            <CartesianGrid strokeDasharray="3 3" stroke="#F5F5F5" />
                                            <XAxis dataKey="name" stroke="#333" tick={{ fill: '#black', fontSize: 12 }} tickFormatter={(value) => value.length > 10 ? `${value.substring(0, 10)}...` : value} />
                                            <YAxis stroke="#333" />
                                            <Tooltip contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }} />
                                            <Legend />
                                            <Bar dataKey="progress" fill="#0088FE" />
                                        </BarChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>
                        </div>
                    </GraphCard>
                    <GraphCard>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <div style={{ height: '35vh', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', background: 'rgb(240, 240, 240)' }}>

                                <ResponsiveContainer width="100%" height="100%" style={{ backgroundColor: 'rgb(240, 240, 240)', padding: '1em', borderRadius: '0.2em', boxShadow: '2px 5px 5px 0px' }}>
                                    <PieChart width={400} height={400}>
                                        <Pie
                                            data={[
                                                { name: "Completed", value: calculatePercentage("completed") },
                                                { name: "In Progress", value: calculatePercentage("inProgress") },
                                                { name: "In Beginning", value: calculatePercentage("beginning") }
                                            ]}
                                            cx={300}
                                            cy={120}
                                            labelLine={false}
                                            label={renderCustomizedLabel}
                                            outerRadius={80}
                                            fill="#8884d8"
                                            dataKey="value"
                                        >
                                            {["#00C49F", "#FFBB28", "#FF8042"].map((color, index) => (
                                                <Cell key={`cell-${index}`} fill={color} />
                                            ))}
                                        </Pie>
                                        <Tooltip
                                            formatter={(value) => `${Number(value).toFixed(2)}%`}
                                            contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', border: '1px solid #ddd' }}
                                        />
                                        <Legend />
                                    </PieChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    </GraphCard>
                </div>
            </div>
        </Container>
    );
};

export default MainPage;
