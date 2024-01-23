import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { GraphCard } from "../../../styles/test.styles";

const myChalenges = [
    { name: "Cardio Crusher Challenge", status: "In Progress", progress: 25 },
    { name: "Flexibility Fiesta Sprint", status: "Completed", progress: 100 },
    { name: "Strength Surge Quest", status: "In Progress", progress: 70 },
    { name: "Core Conqueror Circuit", status: "Completed", progress: 100 },
    { name: "Endurance Expedition Challenge", status: "In Progress", progress: 40 },
    { name: "Power Pulse Adventure", status: "Completed", progress: 100 }
];

const Chart1 = () => {
    return (
        <GraphCard style={{ maxWidth: 'cale(100% - 20px)' }}>
            <div style={{ width: '100vw', height: '100vh' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
    )
};

export default Chart1;