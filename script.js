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
    const app          = document.getElementById('app');
    const header       = document.getElementById('header');
    const main         = document.getElementById('main');
    const footer       = document.getElementById('footer');

    // Search
    const searchForm   = document.getElementById('searchForm');
    const searchInput  = document.getElementById('searchInput');
    const searchBtn    = document.getElementById('searchBtn');
    const searchError  = document.getElementById('searchError');
    const unitToggle   = document.getElementById('unitToggle');
    const locationBtn  = document.getElementById('locationBtn');

    // States
    const loadingState = document.getElementById('loadingState');
    const errorState   = document.getElementById('errorState');
    const errorMessage = document.getElementById('errorMessage');
    const errorRetry   = document.getElementById('errorRetryBtn');
    const content      = document.getElementById('content');

    // Current weather
    const currentCity      = document.getElementById('currentCity');
    const currentDate      = document.getElementById('currentDate');
    const currentIcon      = document.getElementById('currentIcon');
    const currentTemp      = document.getElementById('currentTemp');
    const currentCondition = document.getElementById('currentCondition');
    const currentMin       = document.getElementById('currentMin');
    const currentMax       = document.getElementById('currentMax');
    const currentFeels     = document.getElementById('currentFeels');
    const currentHumidity  = document.getElementById('currentHumidity');
    const currentWind      = document.getElementById('currentWind');
    const currentPressure  = document.getElementById('currentPressure');

    // Highlights
    const uvValue          = document.getElementById('uvValue');
    const uvBadge          = document.getElementById('uvBadge');
    const windValue        = document.getElementById('windValue');
    const windDirection    = document.getElementById('windDirection');
    const sunriseValue     = document.getElementById('sunriseValue');
    const sunsetValue      = document.getElementById('sunsetValue');
    const humidityValue    = document.getElementById('humidityValue');
    const humidityStatus   = document.getElementById('humidityStatus');
    const visibilityValue  = document.getElementById('visibilityValue');
    const airQualityValue  = document.getElementById('airQualityValue');
    const airQualityBadge  = document.getElementById('airQualityBadge');

    // Forecasts
    const hourlyList = document.getElementById('hourlyList');
    const dailyList  = document.getElementById('dailyList');

    /* --------------------------------------------------------
       2. App State (placeholder)
       -------------------------------------------------------- */

    // TODO: Replace placeholder state with real data from a weather API.
    const state = {
        unit: 'C',          // 'C' | 'F'
        city: '',
        current: null,
        hourly: [],
        daily:  [],
        isLoading: false,
        error: null
    };

    /* --------------------------------------------------------
       3. Init
       -------------------------------------------------------- */

    function init() {
        // TODO: Bind all event listeners here.
        // TODO: Optionally load last searched city from localStorage.
        bindEvents();
        // For now, just show a friendly placeholder state.
        showLoading();
        // Simulate initial idle UI (no data yet).
        setTimeout(() => {
            showError('Search for a city to see the weather forecast.');
        }, 600);
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
        if (errorRetry) {
            errorRetry.addEventListener('click', handleRetry);
        }
    }

    /* --------------------------------------------------------
       4. Event Handlers (placeholders)
       -------------------------------------------------------- */

    function handleSearch(event) {
        // TODO: Prevent default, validate input, call fetchWeather(query).
        event.preventDefault();
        const query = (searchInput.value || '').trim();
        if (!query) {
            setSearchError('Please enter a city name.');
            return;
        }
        setSearchError('');
        // fetchWeather(query);
    }

    function handleUnitToggle() {
        // TODO: Switch state.unit, re-render temperatures.
    }

    function handleGeolocation() {
        // TODO: Use navigator.geolocation to get coordinates, then fetch by lat/lon.
    }

    function handleRetry() {
        // TODO: Re-run last successful query or clear state.
    }

    /* --------------------------------------------------------
       5. State Helpers
       -------------------------------------------------------- */

    function showLoading() {
        // TODO: Hide content + error, show loadingState.
        if (loadingState) loadingState.hidden = false;
        if (errorState)   errorState.hidden   = true;
        if (content)      content.hidden      = true;
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
        if (content)      content.hidden      = true;
        if (errorState)   errorState.hidden   = false;
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

    /* --------------------------------------------------------
       6. Render Functions (placeholders)
       -------------------------------------------------------- */

    function renderWeather(data) {
        // TODO: Populate current weather fields from API response.
        // Expected shape: { city, date, icon, temp, condition, min, max, feelsLike, humidity, wind, pressure }
    }

    function renderHighlights(data) {
        // TODO: Populate UV, wind, sunrise/sunset, humidity, visibility, air quality.
    }

    function renderHourly(items) {
        // TODO: Build hourly-item elements and append to hourlyList.
    }

    function renderDaily(items) {
        // TODO: Build daily-item elements and append to dailyList.
    }

    function renderForecast(hourly, daily) {
        // TODO: Convenience wrapper for hourly + daily.
        renderHourly(hourly);
        renderDaily(daily);
    }

    function clearContent() {
        // TODO: Reset all dynamic DOM nodes to placeholder text.
    }

    /* --------------------------------------------------------
       7. Data Layer (placeholder)
       -------------------------------------------------------- */

    async function fetchWeather(query) {
        // TODO: Replace with real Fetch API call.
        // Example plan:
        //   1. showLoading()
        //   2. const res  = await fetch(`https://api.example.com/weather?city=${query}&unit=${state.unit}`)
        //   3. if (!res.ok) throw new Error(...)
        //   4. const data = await res.json()
        //   5. state.current = data.current
        //   6. state.hourly  = data.hourly
        //   7. state.daily   = data.daily
        //   8. renderWeather(data.current)
        //   9. renderHighlights(data.highlights)
        //  10. renderForecast(data.hourly, data.daily)
        //  11. hideLoading(); showContent();
    }

    function showContent() {
        // TODO: Show the main content container.
        if (content)      content.hidden      = false;
        if (errorState)   errorState.hidden   = true;
        if (loadingState) loadingState.hidden = true;
    }

    /* --------------------------------------------------------
       8. Utilities (placeholders)
       -------------------------------------------------------- */

    function formatDate(date) {
        // TODO: Return a localized date string for the current weather card.
    }

    function formatTime(value) {
        // TODO: Convert ISO time / timestamp to HH:mm.
    }

    function convertTemp(value, unit) {
        // TODO: Convert between Celsius and Fahrenheit.
    }

    function getWeatherIcon(code) {
        // TODO: Map weather codes to emoji / icon class.
    }

    /* --------------------------------------------------------
       9. Boot
       -------------------------------------------------------- */

    document.addEventListener('DOMContentLoaded', init);
})();


