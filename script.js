/* ============================================================
   Weather App — script.js
   Vanilla JavaScript — DOM selectors, event placeholders,
   and empty rendering functions. No API calls yet.
   ============================================================ */

(function () {
    'use strict';

    /* --------------------------------------------------------
       1. DOM Selectors
       -------------------------------------------------------- */

    // App shell
    const app = document.getElementById('app');
    const header = document.getElementById('header');
    const main = document.getElementById('main');
    const footer = document.getElementById('footer');

    // Search
    const searchForm = document.getElementById('searchForm');
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    const searchError = document.getElementById('searchError');
    const unitToggle = document.getElementById('unitToggle');
    const locationBtn = document.getElementById('locationBtn');

    // States
    const loadingState = document.getElementById('loadingState');
    const errorState = document.getElementById('errorState');
    const errorMessage = document.getElementById('errorMessage');
    const errorRetry = document.getElementById('errorRetryBtn');
    const content = document.getElementById('content');

    // Current weather
    const currentCity = document.getElementById('currentCity');
    const currentDate = document.getElementById('currentDate');
    const currentIcon = document.getElementById('currentIcon');
    const currentTemp = document.getElementById('currentTemp');
    const currentCondition = document.getElementById('currentCondition');
    const currentMin = document.getElementById('currentMin');
    const currentMax = document.getElementById('currentMax');
    const currentFeels = document.getElementById('currentFeels');
    const currentHumidity = document.getElementById('currentHumidity');
    const currentWind = document.getElementById('currentWind');
    const currentPressure = document.getElementById('currentPressure');

    // Highlights
    const uvValue = document.getElementById('uvValue');
    const uvBadge = document.getElementById('uvBadge');
    const windValue = document.getElementById('windValue');
    const windDirection = document.getElementById('windDirection');
    const sunriseValue = document.getElementById('sunriseValue');
    const sunsetValue = document.getElementById('sunsetValue');
    const humidityValue = document.getElementById('humidityValue');
    const humidityStatus = document.getElementById('humidityStatus');
    const visibilityValue = document.getElementById('visibilityValue');
    const airQualityValue = document.getElementById('airQualityValue');
    const airQualityBadge = document.getElementById('airQualityBadge');


    /* --------------------------------------------------------
       2. App State (placeholder)
       -------------------------------------------------------- */

    // TODO: Replace placeholder state with real data from a weather API.
    const state = {
        unit: 'C',          // 'C' | 'F'
        city: '',
        current: null,
        hourly: [],
        daily: [],
        isLoading: false,
        error: null
    };

    //Lưu giá trị mặc định
    let celsius;
    let fahrenheit;
    let unit = 'celsius';

    function init() {
        bindEvents();
        hideLoading();
        hideError();
    }

    function bindEvents() {
        // TODO: Wire up the form, unit toggle, location button, and retry.
        if (searchForm) {
            searchForm.addEventListener('submit', handleSearch);
        }
        if (unitToggle) {
            unitToggle.addEventListener('click', handleUnitToggle);
        }
        if (locationBtn) {
            locationBtn.addEventListener('click', handleGeolocation);
        }
    }

    function handleSearch(event) {
        // TODO: Prevent default, validate input, call fetchWeather(query).
        event.preventDefault();
        const query = (searchInput.value || '').trim();
        if (!query) {
            setSearchError('Please enter a city name.');
            return;
        }
        setSearchError('');
        getApiLocationByNameCities(query);
    }

    //Hàm chuyển độ C sang F và ngược lại
    async function handleUnitToggle() {
        //celsius - fahrenheit
        if (celsius || fahrenheit) {
            if (unit === 'celsius') {
                currentTemp.textContent = fahrenheit + '°';
                unit = 'fahrentheit';
            } else if (unit === 'fahrentheit') {
                currentTemp.textContent = celsius + '°';
                unit = 'celsius';
            }
        }
    }

    //Hàm lấy vị trí hiện tại
    async function handleGeolocation() {
        // TODO: Use navigator.geolocation to get coordinates, then fetch by lat/lon.
        navigator.geolocation //trình duyệt sẽ hỏi và lấy vị trí 
            .getCurrentPosition(
                async function (position) {
                    let lat = position.coords.latitude;

                    let lon = position.coords.longitude;

                    let city = await getCityByLocation(lat, lon);

                    let weather = await getApiWeatherByLocation(lat, lon);
                    currentCity.textContent = city;
                },
                function (error) {
                    console.log(
                        error.message
                    );
                }
            );
    }

    function showLoading() {
        // TODO: Hide content + error, show loadingState.
        if (loadingState) loadingState.hidden = false;
        if (errorState) errorState.hidden = true;
        if (content) content.hidden = true;
        state.isLoading = true;
    }

    function hideLoading() {
        // TODO: Hide loadingState.
        if (loadingState) loadingState.hidden = true;
        state.isLoading = false;
    }

    function showError(message) {
        // TODO: Hide content + loading, show errorState with message.
        if (loadingState) loadingState.hidden = true;
        if (content) content.hidden = true;
        if (errorState) errorState.hidden = false;
        if (errorMessage) errorMessage.textContent = message || 'Something went wrong.';
        state.error = message;
    }

    function hideError() {
        // TODO: Hide errorState.
        if (errorState) errorState.hidden = true;
        state.error = null;
    }

    function setSearchError(message) {
        // TODO: Display validation error under the search input.
        if (searchError) searchError.textContent = message || '';
    }

    function renderWeather(data) {
        // TODO: Populate current weather fields from API response.
        // Expected shape: { city, date, icon, temp, condition, min, max, feelsLike, humidity, wind, pressure }
        // Current Weather
        //Đưa thông tin weather api lên html
        currentTemp.textContent = `${Math.round(data.current.temperature_2m)}°`;

        currentHumidity.textContent = `${data.current.relative_humidity_2m}%`;

        currentWind.textContent = `${data.current.wind_speed_10m} km/h`;

        // Highlights
        humidityValue.textContent = `${data.current.relative_humidity_2m}%`;

        windValue.textContent = `${data.current.wind_speed_10m} km/h`;

        currentPressure.textContent = `${Math.round(data.current.pressure_msl)} hPa`;

        currentMin.textContent = `${Math.round(data.daily.temperature_2m_min[0])}°`;

        currentMax.textContent = `${Math.round(data.daily.temperature_2m_max[0])}°`;

        // highlight
        uvValue.textContent = data.daily.uv_index_max[0];
        windValue.textContent = `${data.current.wind_speed_10m} km/h`;

        humidityValue.textContent = `${data.current.relative_humidity_2m}%`;

        // sunrise sunset
        sunriseValue.textContent = new Date(data.daily.sunrise[0]).toLocaleTimeString('vi-VN',
            {
                hour: '2-digit',
                minute: '2-digit'
            });

        sunsetValue.textContent = new Date(data.daily.sunset[0]).toLocaleTimeString('vi-VN',
            {
                hour: '2-digit',
                minute: '2-digit'
            });

        currentFeels.textContent = `${Math.round(data.current.apparent_temperature)}°`;

        visibilityValue.textContent = `${(data.current.visibility / 1000).toFixed(1)} km`;

        airQualityValue.textContent = getComfort(data.current.temperature_2m, data.current.relative_humidity_2m);

        airQualityBadge.textContent = 'Weather';

        // icon
        currentIcon.textContent = getWeatherIcon(data.current.weather_code);
    }

    function showContent() {
        // TODO: Show the main content container.
        if (content) content.hidden = false;
        if (errorState) errorState.hidden = true;
        if (loadingState) loadingState.hidden = true;
    }

    document.addEventListener('DOMContentLoaded', init);

    /* --------------------------------------------------------
       10. API
       -------------------------------------------------------- */

    //Hàm lấy api 63 tỉnh thành của việt nam
    async function getApiCities() {
        try {
            let response = await fetch('https://provinces.open-api.vn/api/p/');

            if (response.ok) {
                let data = await response.json();
            }
        } catch (error) {
            console.log(error);
        }
    }

    // getApiCities(); //Có được thông tin 63 tỉnh thành.


    //Hàm lấy tọa độ bằng tên thành phố
    async function getApiLocationByNameCities(nameCity) {
        try {
            nameCity = nameCity.replace('Tỉnh ', '').replace('Thành phố ', '');

            let response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${nameCity}&country=VN&count=1`);

            if (response.ok) {
                let data = await response.json();

                //kiểm tra dữ liệu search trả về nếu mà dữ liệu kh có thì hiện lỗi và return luôn
                if (!data.results || data.results.length === 0) {
                    setSearchError('City not found');
                    hideLoading();
                    showError('City not found');
                    return;
                }

                //
                let locationAt = data.results[0];
                getApiWeatherByLocation(locationAt.latitude, locationAt.longitude);
                //
                currentCity.textContent = locationAt.name;   //tên địa điểm 
                currentDate.textContent = new Date().toLocaleDateString('vi-VN', //ngày giờ hiện tại của vn
                    {
                        weekday: 'long',
                        day: 'numeric',
                        month: 'long'
                    });
            }
        } catch (error) {
            console.log(error);
        }
    }

    //Hàm lấy thời tiết hiện tại thông qua kinh độ, vĩ độ
    async function getApiWeatherByLocation(lat, lon, unit = 'celsius') {
        try {
            showLoading();
            //celsius độ c - fahrenheit độ f
            let response = await fetch(
                `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&temperature_unit=${unit}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,pressure_msl,apparent_temperature,visibility,weather_code,is_day&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max&timezone=auto`
            ); //lấy thông số api để xuất ra màn hình
            if (response.ok) {
                let data = await response.json();
                renderWeather(data);
                showContent();
                celsius = Math.round(data.current.temperature_2m);
                fahrenheit = cToF(celsius);
                return data;
            }
        } catch (error) {
            console.log(error);
            hideLoading();
            showError(error.message);
        }
    }

    //Hàm lấy thông tin thành phố thông qua lat và lon
    async function getCityByLocation(lat, lon) {
        let response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`
        );

        if (response.ok) {
            let data = await response.json();
            return (
                data.address.city ||
                data.address.state ||
                data.address.county ||
                'Unknown'
            );
        }
    }

    //Hàm lấy thông số cảm giác nhiệt độ
    function getComfort(temp, humidity) {
        if (temp < 20)
            return 'Cold';
        if (temp <= 30 && humidity <= 70)
            return 'Comfortable';
        if (temp > 35)
            return 'Very Hot';
        return 'Warm';
    }

    //Icon theo thời tiết 
    function getWeatherIcon(code, isDay) {
        // trời quang
        if (code === 0) {
            return isDay
                ? '☀️'
                : '🌙';
        }

        // ít mây
        if ([1, 2].includes(code)) {
            return isDay
                ? '🌤️'
                : '🌙☁️';
        }

        // nhiều mây
        if (code === 3)
            return '☁️';

        // sương mù
        if ([45, 48].includes(code))
            return '🌫️';

        // mưa nhỏ
        if ([51, 53, 55].includes(code))
            return '🌦️';

        // mưa
        if ([61, 63, 65].includes(code))
            return '🌧️';

        // tuyết
        if ([71, 73, 75].includes(code))
            return '❄️';

        // giông
        if ([95, 96, 99].includes(code))
            return '⛈️';

        return '🌍';
    }

    //
    function fToC(f) {
        return (f - 32) * 5 / 9;
    }

    function cToF(c) {
        return (c * 9 / 5) + 32;
    }

})();






