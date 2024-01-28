import { styled } from 'styled-components';

export const Container = styled.div`
    margin: 0 auto;
    height: 38vh;
    /* background-image: url("https://img.freepik.com/premium-photo/muscular-man-working-out-battle-ropes-gym_53876-158325.jpg?w=826"); */
    background-size: cover;
    background-repeat: no-repeat;
    padding: 2rem;
`

export const Title = styled.div`
    justify-content: center;
    color: rgb(240, 240, 240);
    text-shadow: 2px 2px 4px rgb(0, 0, 0);
    font-family: sans-serif;
`

export const CardsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 7vh;
    flex-wrap: wrap;
`

export const ChallengesCard = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    width: 380px;
    max-width: 400px;
    margin-bottom: 20px;
    border: 0.5px solid rgb(156, 162, 218);
    border-radius: 0.2em;
    background-color: rgb(240, 240, 240);
    box-shadow: 2px 5px 5px 0px;
`

export const ChallengeCard = styled.div`
    display: flex;
    width: 360px;
    height: 40px;
    align-items: center;
    margin: 5px;
    margin-bottom: 15px;
    color: rgb(207, 206, 206);
    border-radius: 5px;
    background: linear-gradient(to right, rgb(49, 49, 49), rgb(140, 140, 140), rgb(49, 49, 49));
    box-shadow: 2px 5px 5px 0px;
`

export const StatusButton = styled.button`
    height: 28px;
    margin: 15px;
    padding-right: 10px;
    padding-left: 10px;
    background: linear-gradient(to top, #00C49F, rgb(183, 209, 179));
    transition: background-color 300ms;
    border: 1px solid;
    border-radius: 2px;
    color: rgb(0, 87, 0);
    font-weight: 700;
    &:hover {
        box-shadow: 0 1px 2px 0;
        transform: scale(1.05);
    }
`

export const InProgressButton = styled.button`
    height: 28px;
    margin: 15px;
    padding-right: 10px;
    padding-left: 10px;
    background: linear-gradient(to top, orange, #ffd57c);
    transition: background-color 300ms;
    border: 1px solid;
    border-radius: 2px;
    color: rgb(161, 105, 0);
    font-weight: 700;
    &:hover {
        box-shadow: 0 1px 2px 0;
        transform: scale(1.05);
    }
`

export const ListButton = styled.button`
    height: 35px;
    width: 105px;
    margin: 15px;
    border: 1px solid black;
    border-radius: 4px;
    color: rgb(240, 240, 240);
    box-shadow: 0 1px 2px 0;
    &:hover {
        box-shadow: 0 2px 3px 0;
        transform: scale(1.05);
    }
`

export const ChartsContainer = styled.div`
    /* display: flex; */
    /* flex-direction: column; */
    font-family: sans-serif;
`

export const GraphCard = styled.div`
    display: flex;
    height: 38vh;
    width: 54vw;
`



interface StyledGridItemProps {
    md?: number;
}

export const StyledBox = styled.div`
    margin-top: 1vh;
    background: #F0F0F0;
    width: 140%;
`;
export const StyledGridContainer = styled.div`
    display: flex;
    // align-items: center;
    // justify-content: center;
    background: #F0F0F0;
    width: 100%;
`;
export const StyledGridItem = styled.div<StyledGridItemProps>`
    flex-basis: ${props => props.md ? (props.md / 12 * 100) + '%' : '100%'};
`;
export const StyledTypography = styled.div`
    text-align: center;
    margin-bottom: 1rem;
    background-color: rgb(240, 240, 240);
    font-size: 1.5rem;
    color: #323232;
    font-family: Roboto;
    font-style: italic;
    line-height: normal;
`;
