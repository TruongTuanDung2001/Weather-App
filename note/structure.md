# Weather App — Project Structure

A portfolio-quality weather forecast UI built with **vanilla HTML, CSS, and JavaScript**. No frameworks, no build tools, no dependencies. Designed mobile-first with a glassmorphism aesthetic and a clean DOM ready for Fetch API integration.

---

## 1. Folder Structure

```
Weather App/
├── index.html        # Markup, semantic structure
├── style.css         # Design tokens, glassmorphism, responsive grid
├── script.js         # DOM selectors, event placeholders, empty render fns
└── structure.md      # This file — project documentation
```

---

## 2. Component Tree

```
app (#app)
├── header (#header)
│   ├── header__brand
│   │   ├── header__logo
│   │   └── header__title
│   └── header__nav
│       ├── btn btn--ghost  →  #unitToggle   (°C / °F)
│       └── btn btn--ghost  →  #locationBtn  (📍 My Location)
│
├── search (#search)
│   └── search__form (#searchForm)
│       ├── search__field
│       │   ├── search__icon
│       │   ├── search__input  (#searchInput)
│       │   └── search__btn    (#searchBtn)
│       └── search__error      (#searchError)
│
├── main (#main)
│   ├── state state--loading    (#loadingState)
│   │   ├── spinner
│   │   └── state__text
│   │
│   ├── state state--error      (#errorState)
│   │   ├── state__icon
│   │   ├── state__title
│   │   ├── state__text         (#errorMessage)
│   │   └── btn btn--primary    (#errorRetryBtn)
│   │
│   └── content (#content)
│       ├── card card--current  (#currentWeather)
│       │   ├── current__top
│       │   │   ├── current__location
│       │   │   │   ├── current__city       (#currentCity)
│       │   │   │   └── current__date       (#currentDate)
│       │   │   └── current__icon           (#currentIcon)
│       │   ├── current__main
│       │   │   ├── current__temp           (#currentTemp)
│       │   │   ├── current__condition      (#currentCondition)
│       │   │   └── current__range
│       │   │       ├── current__min        (#currentMin)
│       │   │       └── current__max        (#currentMax)
│       │   └── current__meta               (#currentMeta)
│       │       ├── meta-item  →  #currentFeels
│       │       ├── meta-item  →  #currentHumidity
│       │       ├── meta-item  →  #currentWind
│       │       └── meta-item  →  #currentPressure
│       │
│       ├── highlights (#highlights)
│       │   ├── section-title
│       │   └── highlights__grid
│       │       ├── card highlight  →  UV Index       (#uvValue, #uvBadge)
│       │       ├── card highlight  →  Wind Status    (#windValue, #windDirection)
│       │       ├── card highlight  →  Sunrise/Sunset (#sunriseValue, #sunsetValue)
│       │       ├── card highlight  →  Humidity       (#humidityValue, #humidityStatus)
│       │       ├── card highlight  →  Visibility     (#visibilityValue)
│       │       └── card highlight  →  Air Quality    (#airQualityValue, #airQualityBadge)
│       │
│       ├── forecast (#hourlyForecast)
│       │   ├── section-title
│       │   └── forecast__list (#hourlyList)
│       │       └── [JS-injected] .hourly-item × N
│       │
│       └── forecast forecast--days (#dailyForecast)
│           ├── section-title
│           └── forecast__days (#dailyList)
│               └── [JS-injected] .daily-item × 5
│
└── footer (#footer)
    └── footer__text
```

---

## 3. Class & ID Reference

### Layout / container classes

| Class | Purpose |
|---|---|
| `.app` | Root wrapper, max-width 1200px, vertical flex layout |
| `.main` | Main content grid; switches to 2-col on desktop (≥1024px) |
| `.content` | Wrapper that wraps all data-driven sections; toggled with `hidden` |

### Reusable components

| Class | Purpose |
|---|---|
| `.card` | Glassmorphism card base; used for current + highlights |
| `.btn` | Button base; pairs with `.btn--primary` or `.btn--ghost` |
| `.section-title` | Section heading style |
| `.state` | Empty / loading / error panel base |
| `.state--loading` | Spinner state variant |
| `.state--error` | Error state variant |

### Section-specific classes

| Class | Purpose |
|---|---|
| `.header`, `.header__brand`, `.header__logo`, `.header__title`, `.header__nav` | Top navigation |
| `.search`, `.search__form`, `.search__field`, `.search__icon`, `.search__input`, `.search__btn`, `.search__error` | Search bar + inline error |
| `.card--current`, `.current__*`, `.meta-item__*` | Current weather card |
| `.highlights`, `.highlights__grid`, `.highlight`, `.highlight__*` | 6-tile highlights grid |
| `.forecast`, `.forecast__list`, `.hourly-item__*` | Hourly forecast horizontal scroller |
| `.forecast--days`, `.forecast__days`, `.daily-item__*` | 5-day vertical list |
| `.footer`, `.footer__text` | Footer |

### IDs (JS interaction)

| ID | Element | JS Interaction |
|---|---|---|
| `#app` | Root | Mount point |
| `#searchForm` | Form | `submit` → `handleSearch` |
| `#searchInput` | Text input | Read query |
| `#searchBtn` | Submit button | Inside form |
| `#searchError` | Inline error | `setSearchError(msg)` |
| `#unitToggle` | °C/°F button | `click` → `handleUnitToggle` |
| `#locationBtn` | Geolocation button | `click` → `handleGeolocation` |
| `#loadingState` | Loading panel | `showLoading()` / `hideLoading()` |
| `#errorState` | Error panel | `showError(msg)` / `hideError()` |
| `#errorMessage` | Error text | Updated in `showError` |
| `#errorRetryBtn` | Retry button | `click` → `handleRetry` |
| `#content` | Data wrapper | `showContent()` |
| `#currentCity`, `#currentDate`, `#currentIcon` | Header | `renderWeather` |
| `#currentTemp`, `#currentCondition`, `#currentMin`, `#currentMax` | Main temp block | `renderWeather` |
| `#currentFeels`, `#currentHumidity`, `#currentWind`, `#currentPressure` | Meta list | `renderWeather` |
| `#uvValue`, `#uvBadge` | UV tile | `renderHighlights` |
| `#windValue`, `#windDirection` | Wind tile | `renderHighlights` |
| `#sunriseValue`, `#sunsetValue` | Sun tile | `renderHighlights` |
| `#humidityValue`, `#humidityStatus` | Humidity tile | `renderHighlights` |
| `#visibilityValue` | Visibility tile | `renderHighlights` |
| `#airQualityValue`, `#airQualityBadge` | AQI tile | `renderHighlights` |
| `#hourlyList` | Hourly container | `renderHourly` (JS-injected children) |
| `#dailyList` | Daily container | `renderDaily` (JS-injected children) |

---

## 4. Layout Behavior

- **Mobile first.** Base styles target small screens; layouts enhance at `≥640px` and `≥1024px`.
- **Glassmorphism.** Every `.card` and `.state` uses `backdrop-filter: blur()` over a fixed gradient body.
- **CSS Grid — desktop.** At `≥1024px`, `.main` becomes a 2×2 grid using named `grid-template-areas`:
  - `current`  → `#currentWeather` (left, full height)
  - `highlights` → `#highlights` (right, top)
  - `hourly` → `#hourlyForecast` (left, bottom)
  - `daily`  → `#dailyForecast` (right, bottom)
- **Stacks on mobile/tablet.** Below 1024px, sections stack vertically; highlights move to 2 columns at ≥640px.
- **Hourly scroller.** `forecast__list` is `overflow-x: auto` with custom thin scrollbar.
- **Animations.** `fadeUp` on cards, `spin` on spinner, `floaty` on weather icon, `fadeIn` on state panels. `prefers-reduced-motion` disables all.

---

## 5. Naming Convention

- **BEM-ish** for components: `block__element--modifier`
  - `card`, `card--current`, `header__title`, `btn--primary`, `state--loading`
- **Reusable utilities** prefixed with `--` in CSS variables (`--space-4`, `--radius-md`).
- **IDs** are camelCase and used sparingly — only where JS needs a single anchor.
- **JS selectors** are grouped by section (App shell, Search, States, Current, Highlights, Forecasts).

---

## 6. JavaScript Architecture

The JS uses an **IIFE** to avoid leaking globals. Everything is organized into 9 logical blocks:

1. **DOM Selectors** — every `getElementById` at the top.
2. **App State** — placeholder object ready to be filled with API data.
3. **Init** — `init()` + `bindEvents()`.
4. **Event Handlers** — `handleSearch`, `handleUnitToggle`, `handleGeolocation`, `handleRetry`.
5. **State Helpers** — `showLoading`, `hideLoading`, `showError`, `hideError`, `setSearchError`.
6. **Render Functions** — `renderWeather`, `renderHighlights`, `renderHourly`, `renderDaily`, `renderForecast`, `clearContent`.
7. **Data Layer** — `fetchWeather(query)` placeholder ready for the Fetch API.
8. **Utilities** — `formatDate`, `formatTime`, `convertTemp`, `getWeatherIcon`.
9. **Boot** — `DOMContentLoaded` → `init()`.

**TODO comments** mark every spot where logic is missing. Nothing is functional yet — only structure.

### JS Interaction Map

| User action | Handler | State effect | UI effect |
|---|---|---|---|
| Submit search form | `handleSearch` | Set `state.city` | `showLoading` → `fetchWeather` |
| Click °C/°F | `handleUnitToggle` | Toggle `state.unit` | Re-render temps |
| Click 📍 My Location | `handleGeolocation` | `navigator.geolocation` | `fetchWeather(lat,lon)` |
| Click Retry | `handleRetry` | Re-run last query | `showLoading` |
| API success | `fetchWeather` resolves | Fill `state.*` | `renderWeather` + `renderForecast` |
| API error | `fetchWeather` rejects | Set `state.error` | `showError(msg)` |

---

## 7. Future Implementation Notes

### Near-term (Fetch API integration)
- Replace `fetchWeather()` with a real call (OpenWeather, Open-Meteo, WeatherAPI, etc.).
- Decide unit handling: API can return metric or imperial; `convertTemp()` will bridge.
- Map API weather codes to icons in `getWeatherIcon(code)`.
- Parse timestamps with `formatTime()` and `formatDate()`.

### UX enhancements
- Persist last searched city in `localStorage`.
- Geolocation fallback: if denied, show inline error.
- Loading skeleton instead of centered spinner.
- Empty state ("No city selected") in addition to error/loading.
- Recent searches dropdown under search bar.
- Smooth transition between data states (cross-fade between loading → content).

### Visual enhancements
- Dynamic background based on weather condition (sunny gradient, rainy overlay, etc.).
- Animated weather icons (Lottie or pure CSS).
- Light/dark theme toggle (CSS variables make this trivial).
- Hourly chart strip with temperature curve (optional).

### Code quality
- Split `script.js` into modules: `api.js`, `dom.js`, `utils.js` (ES Modules).
- Add unit tests for `convertTemp`, `getWeatherIcon`, `formatTime`.
- Add a `data-` attribute convention for elements that receive dynamic values.
- Add JSDoc to all render functions for editor IntelliSense.

### Accessibility
- Live region announcements when content updates (`aria-live="polite"`).
- Keyboard support for hourly scroller (arrow keys).
- Focus management when switching between states.

---

## 8. Quick Start

Open `index.html` directly in a browser — no build step required. The page will display the initial loading state, then transition to an error state prompting a search. Once `fetchWeather()` is implemented, real data will populate all sections.
