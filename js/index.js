const searchButton = () => {
    const inputField = document.getElementById('input-field');
    const inputText = inputField.value;

    inputField.value = '';

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputText}&appid=3b0c6ec58dc6c407c6178f5c636ed3e1`)
        .then(res => res.json())
        .then(data => weatherWatch(data))
}
const weatherWatch = data => {
    console.log(data);
    if (data.name != null) {
        const city = document.getElementById('city');
        city.innerText = data.name;
        const temp = document.getElementById('temp');
        let kelvin = parseFloat(data.main.temp);
        let cel = (kelvin - 273);
        temp.innerText = cel.toFixed(2);
        const type = document.getElementById('type');
        type.innerText = data.weather[0].description;
    }
    else {
        city.innerText = 'City';
        temp.innerText = '0.00';
        type.innerText = 'weather';
    }

}

