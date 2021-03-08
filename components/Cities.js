import styled from "styled-components";
import City from "./City";

const DivGrid=styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit,300px);
  grid-gap: 15px;
  align-items: center;
`

export default (props) => {
    return (
        <DivGrid>
            {props.cities.map(city=><City key={city.id} {...city}/>)}
        </DivGrid>
    )
}