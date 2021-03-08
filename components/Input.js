import {useState} from "react";
import {getCitiesByName} from "../api/api";
import styled from 'styled-components'

const DivInput=styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px;
`

export default (props) => {
    const [search,setSearch]=useState('');
    const [searchCity,setSearchCity]=useState([])

    const handleChange = async (value) => {

        const changeKey=value.target.value;
        if(changeKey.length>2){
            if(value.nativeEvent.data===undefined){
                const dataSelect=searchCity.find((ele=>changeKey===ele.place_name));
                const codeCou=dataSelect.context[1]?dataSelect.context[1].short_code:dataSelect.context[0].short_code
                props.addCity(changeKey.split(',')[0]+','+codeCou);
                setSearch('');
                setSearchCity([]);
                return;
            }
            setSearchCity(await getCitiesByName(changeKey))
        }else{
            setSearchCity([])
        }
        setSearch(changeKey)
    }
    return (
        <DivInput>
            <input style={{width: '300px', height: '20px'}} list="character" placeholder={'Введите город'}
                   value={search}
                   onChange={handleChange}/>
                <datalist id="character" >
                    {searchCity.map(value=>(
                        <option key={value.id} value={value.place_name}></option>
                    ))}
                </datalist>
        </DivInput>
    )
}