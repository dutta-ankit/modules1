import { weatherData } from "./weatherDb.mjs";

function createData(cityName, tempValue){
    weatherData.push({
        location:cityName,
        temp:tempValue
    });

}

function updateData(cityName, newTemp){
    for(let i=0; i<weatherData.length; i++)
    {
        if(weatherData[i].location==cityName){
            weatherData[i].location=cityName;
            weatherData[i].temp=newTemp;
        }
    }
}

function deleteData(cityName){
    for(let i=0; i<weatherData.length; i++)
    {
        if(weatherData[i].location==cityName)
        {
            weatherData.splice(i,1);
        }
    }
}

function getData(cityName){
    for(let i=0; i<weatherData.length; i++)
    {
        if(weatherData[i].location==cityName)
        {
            console.log(weatherData[i]);
        }
    }
}

// createData("Burdwan",23);
// deleteData("Kolkata");
// updateData("Delhi", 10);
// console.log(weatherData);
getData("Mumbai");

export { getData, deleteData, updateData, createData }