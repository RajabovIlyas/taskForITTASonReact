import Input from "../components/Input";
import Cities from "../components/Cities";
import {useEffect, useState} from "react";
import {getCityWeather} from "../api/api";

const Index = (props) => {
    const [citiesWeather, setCitiesWeather] = useState([])
    const readData = (value) => {
        const cities=[];
        value.forEach(value => {
            getCityWeather(value).then(value1 => {
                value1.date = new Date();
                cities.push(value1)
            })

        })
        setCitiesWeather(citiesWeather.concat(cities));
    }

    useEffect(() => {

        const readCheckOfNULL = async () => {
            const cities = await localStorage.getItem('cities');
            if (!cities) {
                await localStorage.setItem('cities', JSON.stringify([]));
            } else {
                if (citiesWeather.length === 0) {
                    await readData(JSON.parse(cities));
                }

            }
        }
        readCheckOfNULL().then();


    }, [])
    const addCity = (value) => {
        const cities = localStorage.getItem('cities');
        const citiesJSON = JSON.parse(cities);
        if (citiesJSON.find((val) => val === value)) {
            alert('Такой город уже есть')
            return;
        }
        citiesJSON.push(value);
        localStorage.setItem('cities', JSON.stringify(citiesJSON));
        readData([value]).then();
    }


    return (
        <div>
            <Input addCity={addCity}/>
            <Cities cities={citiesWeather}/>
        </div>
    )
}



export default Index;
