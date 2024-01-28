import { Routes, Route } from 'react-router-dom';
import MainPage from '../pages/mainPage/MainPage';
import ChallengePage from '../../challenges/pages/allChallenges/ChallengePage';
import ROUTES from './Models';

function Ruoter() {
    return (
            <Routes>
                <Route path='/' element={<MainPage />} />
                <Route path={ROUTES.CHALLENGE} element={<ChallengePage />} />
            </Routes>
    )
};
export default Ruoter;