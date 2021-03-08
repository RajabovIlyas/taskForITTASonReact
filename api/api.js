const appID='0468e884babe5959345a210f5ce066eb';
const access_token='pk.eyJ1IjoiaWx5YXNyYWphYm92IiwiYSI6ImNrbHpuOGZwZjN2dXUyb24xMWFibGc3ejYifQ.DCbHzIJG1fStm6ul94gy7A';

export const getCityWeather=async (city)=>{
    const params = [];
    await params.push(['appid', appID])
    await params.push(['q',city])
    await params.push(['lang','ru'])
    await params.push(['units','metric'])
    const url = new URL('http://api.openweathermap.org/data/2.5/weather')
    url.search = new URLSearchParams(params).toString();
    return fetch(url).then(async res => {
        const data = await res.json();
        return {...data};}).catch(err=>console.log('Такого города нет'));
}

export const getCitiesByName=async (name)=>{
    const params = [];
   await params.push(['access_token', access_token])
   await params.push(['types','place'])
    const url =new URL(`https://api.mapbox.com/geocoding/v5/mapbox.places/${name}.json`)
    url.search = new URLSearchParams(params).toString();
    return fetch(url).then(async res => {
        const data = await res.json();
        return data.features}).catch(err=>console.log('Такого города нет'));
}