import { styled } from 'styled-components';

export const Container = styled.div`
    margin: 0 auto;
`

export const Title = styled.div`
    justify-content: center;
    color: rgb(240, 240, 240);
`

export const ChallengesCard = styled.div`
    /* position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-140%, -60%);
    box-sizing: border-box;
    overflow: hidden;
    box-shadow: 0 20px 50px rgb(23, 32, 90);
    border: 2px solid #2a3cad;
    padding: 20px; */
    
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 380px;
    border: 0.5px solid rgb(156, 162, 218);
    border-radius: 2px;
    background-color: rgb(240, 240, 240);
    margin-top: 160px;
    box-shadow: 2px 5px 5px 0px;
    /* span{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: block;
        box-sizing: border-box;
    }
    span:nth-child(2){
        transform:rotate(90deg);
    }
    span:nth-child(3){
        transform:rotate(180deg);
    }
    span:nth-child(4){
        transform:rotate(270deg);
    } */
    /* span:before{
        color: #50dfdb;
        content: '𝕎𝕖𝕝𝕔𝕠𝕞𝕖';
        position: absolute;
        width:50%;
        height: 3px;
        background: #50dfdb;
        animation: animate 4s linear infinite;
    }
    @keyframes animate {
        0% {
        transform:scaleX(0);
        transform-origin: left;
        }
        50%
        {
            transform:scaleX(1);
        transform-origin: left;
        } */
        /* 50.1%
        {
            transform:scaleX(4);
        transform-origin: right;
            
        }
        
        100%
        {
            transform:scaleX(0);
        transform-origin: right;
            
        } */
    /* } */
`

export const ChallengeCard = styled.div`
    display: flex;
    width: 360px;
    height: 40px;
    align-items: center;
    margin: 5px;
    margin-bottom: 15px;
    color: rgb(207, 206, 206);
    /* border-bottom: 1px solid rgb(156, 162, 218); */
    border-radius: 5px;
    background: linear-gradient(to right, rgb(49, 49, 49), rgb(140, 140, 140), rgb(49, 49, 49));
`

export const StatusButton = styled.button`
    height: 28px;
    margin: 15px;
    padding-right: 10px;
    padding-left: 10px;
    background: linear-gradient(to top, rgb(104, 168, 96), rgb(183, 209, 179));
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
    background: linear-gradient(to top, orange, rgb(248, 212, 144));
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
    background: linear-gradient(to top, black, gray);
    color: rgb(240, 240, 240);
    box-shadow: 0 1px 2px 0;
    &:hover {
        box-shadow: 0 2px 3px 0;
        transform: scale(1.05);
    }
`

export const GraphCard = styled.div`
    display: flex;
    /* flex-direction: column; */
    /* align-items: center; */
    height: 500px;
    width: 650px;
    /* border: 0.5px solid rgb(156, 162, 218); */
    /* border-radius: 2px; */
    /* background-color: rgb(240, 240, 240); */
    margin-top: 180px;
    /* box-shadow: 2px 5px 5px 0px; */
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
