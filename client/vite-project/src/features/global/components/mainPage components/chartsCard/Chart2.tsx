import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { GraphCard } from "../../../styles/test.styles";


const myChalenges = [
    { name: "Cardio Crusher Challenge", status: "In Progress", progress: 25 },
    { name: "Flexibility Fiesta Sprint", status: "Completed", progress: 100 },
    { name: "Strength Surge Quest", status: "In Progress", progress: 70 },
    { name: "Core Conqueror Circuit", status: "Completed", progress: 100 },
    { name: "Endurance Expedition Challenge", status: "In Progress", progress: 40 },
    { name: "Power Pulse Adventure", status: "Completed", progress: 100 }
];

const Chart2 = () => {
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
                                cx={'300vw'}
                                cy={'120vh'}
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
                                contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', border: '1px solid #ddd' }} />
                            <Legend />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </GraphCard>
    )
};

export default Chart2;