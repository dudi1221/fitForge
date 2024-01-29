import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";

const Title = () => {
    // const userName = 'user'

    return (
        <div>
            <h1>So, where do we stand ?</h1>
            {/* <h1>Welcome, {userName}</h1> */}
            {/* <h2>Experience the Ultimate Fitness Journey with FitForge <FontAwesomeIcon icon={faDumbbell} bounce /></h2> */}
            <h2><em>Don't Limit Your Challenges, Challenge Your Limits <FontAwesomeIcon icon={faDumbbell} bounce /></em></h2>
        </div>
    );
};

export default Title;