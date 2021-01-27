const baseUrl = `https://api.openweathermap.org/data/2.5/weather?appid=69518b1f8f16c35f8705550dc4161056&units=metric&q=`;
const iconUrl = `http://openweathermap.org/img/wn/`;
const forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?appid=69518b1f8f16c35f8705550dc4161056&units=metric&q=";

const vremeaAcumBtn = document.getElementById('vremea'); 
const prognozaBtn = document.getElementById('prognoza');

vremeaAcumBtn.addEventListener('click', function(e) {
    e.preventDefault();

    const city = document.getElementById('city').value.trim();

    if(city.length && city !== ' ') {
        const url = `${baseUrl}${city}`;
        
        getCityInfo(url, res => {

            //handle error
            if(res.cod === '404') {
                const errorSpan = document.getElementById('error'); 
                errorSpan.innerText = res.message;

                setTimeout(() => {
                    errorSpan.innerText = '';
                }, 2000);
                
            //handle success
            } else {  
                const vremeaInfo = document.querySelector('.vremea-acum-info');
                vremeaInfo.style.display = 'flex';
                const {lat, lon} = res.coord;
                initMap(lat, lon)
                const description = document.querySelector('.descriere');
                description.innerText = `${description.dataset.title} ${res.weather[0].description}`;

                const umiditate = document.querySelector('.umiditate');
                umiditate.innerText = `${umiditate.dataset.title} ${res.main.humidity}`; 

                const presiune = document.querySelector('.presiune');
                presiune.innerText = `${presiune.dataset.title} ${res.main.pressure}`; 

                const tempCurenta = document.querySelector('.temperatura-curenta');
                tempCurenta.innerText = `${tempCurenta.dataset.title} ${res.main.temp}`; 

                const minTemp = document.querySelector('.minima-zilei');
                minTemp.innerText = `${minTemp.dataset.title} ${res.main.temp_min}`; 

                const maxTemp = document.querySelector('.maxima-zilei');
                maxTemp.innerText = `${maxTemp.dataset.title} ${res.main.temp_max}`; 

                const spanImg = document.getElementById('weather-img');                
                spanImg.innerHTML = `<img src="${iconUrl}${res.weather[0].icon}.png" alt="weather image"/>`
            }
        })
    }

   
})
prognozaBtn.addEventListener('click', function(e) {
    e.preventDefault();
    const city = document.getElementById('city').value.trim();

    if(city.length && city !== ' ') {
        const url = `${forecastUrl}${city}`;
        getCityInfo(url, res => {
            
            //handle error
            if(res.cod === '404') {
                const errorSpan = document.getElementById('error'); 
                errorSpan.innerText = res.message;

                setTimeout(() => {
                    errorSpan.innerText = '';
                }, 2000);
                
            //handle success
            } else {
                const dailyForecast = tranformToObject(res.list);
                const showcase = document.querySelector('.prognoza-showcase');
                renderForecastItems(dailyForecast, showcase);
            }

        })

    }
})


function renderForecastItems(data, domElement) {
    let output = '';
    for(let key in data) {
        let divs = ''; 
        data[key].list.forEach(item => {
            divs += `
            <div class="item-mini-item">
                <img src="${item.icon}" alt="temperature icon" />
                <span>Desc: ${item.description}</span>
                <span>Temp: ${item.temp}</span>
                <span>Hour: ${item.hour}</span>
            </div>
            `
        })
        output += `
            <li class="showcase-item">
                <h2 class="item-day">${key}</h2>
                ${divs}
            </li>
        `
    };
    domElement.innerHTML = output;
}


function getCityInfo(url, fn) { 
    fetch(url)
    .then(response => response.json())
    .then(res => fn(res))
    .catch(err => fn(err));
}

function tranformToObject(arr) {
    const myObj = arr.reduce((acc, current) => {

        let currentDay = current.dt_txt.split(' ')[0];
        if(!acc[currentDay]) {
            acc[currentDay] = {
                list: []
            }
        }

        return acc;
    }, {});

    arr.forEach(item => {
        let day = item.dt_txt.split(' ')[0]; 
        if(myObj[day]) {
            myObj[day].list.push({
                day: item.dt_txt.split(' ')[0],
                description: item.weather[0].description,
                icon: `${iconUrl}${item.weather[0].icon}.png`,
                temp: item.main.temp,
                hour: item.dt_txt.split(' ')[1]
            })
        }
    });

    return myObj;
}


function initMap(lat = -34.397, lng = 150.644) {
  let map = new google.maps.Map(document.getElementById("map"), {
    center: { lat, lng },
    zoom: 8,
  });
  new google.maps.Marker({
    position: { lat, lng },
    map: map,
  });
}