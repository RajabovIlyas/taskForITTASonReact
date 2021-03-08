import styled from "styled-components";


const DivCity = styled.div`
    border: solid 1px black;
    width: 300px;
    height: 300px;
    text-align: center;
`

export default (props) => {
    console.log(props)


    return (
        <DivCity>
            <h4>Город: {props.name}</h4>
            <p>Температура: {props.main.temp}°С- </p>
            <p>Влажность: {props.main.humidity}%</p>
            <p>Атмосферное давление: {props.main.pressure}</p>
            <p>Сила и направление ветра: {props.wind.speed}М/С-</p>
            <p>Последнее обновление данных: {props.date.toString().slice(0,24)}</p>
        </DivCity>
    )
}