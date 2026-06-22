# 📊 Thống kê chi tiết — Weather App (script.js)

File này tổng hợp toàn bộ selectors, hàm, events, IDs, classes có trong `script.js` để tiện tra cứu nhanh khi implement.

---

## 1. Tổng quan file

| Mục | Giá trị |
|---|---|
| Pattern | IIFE `(function(){...})()` |
| Strict mode | ✅ Bật |
| Framework | ❌ Vanilla JS |
| Tổng số block | 9 |
| Tổng số hàm | **24** |
| Tổng số DOM selectors | **42** |
| Tổng số event listeners | **4** |
| Số hàm đã implement | **0** (tất cả đều là TODO) |
| Số hàm đã rỗng + comment | **24/24** |

---

## 2. Thống kê DOM Selectors (42 biến)

### 📦 App shell (4 selectors)
| # | Biến | ID | Nhóm |
|---|---|---|---|
| 1 | `app` | `app` | Layout |
| 2 | `header` | `header` | Layout |
| 3 | `main` | `main` | Layout |
| 4 | `footer` | `footer` | Layout |

### 🔍 Search (6 selectors)
| # | Biến | ID | Nhóm |
|---|---|---|---|
| 5 | `searchForm` | `searchForm` | Search |
| 6 | `searchInput` | `searchInput` | Search |
| 7 | `searchBtn` | `searchBtn` | Search |
| 8 | `searchError` | `searchError` | Search |
| 9 | `unitToggle` | `unitToggle` | Search |
| 10 | `locationBtn` | `locationBtn` | Search |

### 🔄 States (6 selectors)
| # | Biến | ID | Nhóm |
|---|---|---|---|
| 11 | `loadingState` | `loadingState` | States |
| 12 | `errorState` | `errorState` | States |
| 13 | `errorMessage` | `errorMessage` | States |
| 14 | `errorRetry` | `errorRetryBtn` | States |
| 15 | `content` | `content` | States |

### ☀️ Current Weather (10 selectors)
| # | Biến | ID | Nhóm |
|---|---|---|---|
| 16 | `currentCity` | `currentCity` | Current |
| 17 | `currentDate` | `currentDate` | Current |
| 18 | `currentIcon` | `currentIcon` | Current |
| 19 | `currentTemp` | `currentTemp` | Current |
| 20 | `currentCondition` | `currentCondition` | Current |
| 21 | `currentMin` | `currentMin` | Current |
| 22 | `currentMax` | `currentMax` | Current |
| 23 | `currentFeels` | `currentFeels` | Current |
| 24 | `currentHumidity` | `currentHumidity` | Current |
| 25 | `currentWind` | `currentWind` | Current |
| 26 | `currentPressure` | `currentPressure` | Current |

### 📊 Highlights (12 selectors)
| # | Biến | ID | Nhóm |
|---|---|---|---|
| 27 | `uvValue` | `uvValue` | Highlights |
| 28 | `uvBadge` | `uvBadge` | Highlights |
| 29 | `windValue` | `windValue` | Highlights |
| 30 | `windDirection` | `windDirection` | Highlights |
| 31 | `sunriseValue` | `sunriseValue` | Highlights |
| 32 | `sunsetValue` | `sunsetValue` | Highlights |
| 33 | `humidityValue` | `humidityValue` | Highlights |
| 34 | `humidityStatus` | `humidityStatus` | Highlights |
| 35 | `visibilityValue` | `visibilityValue` | Highlights |
| 36 | `airQualityValue` | `airQualityValue` | Highlights |
| 37 | `airQualityBadge` | `airQualityBadge` | Highlights |

### 📅 Forecasts (2 selectors)
| # | Biến | ID | Nhóm |
|---|---|---|---|
| 38 | `hourlyList` | `hourlyList` | Forecasts |
| 39 | `dailyList` | `dailyList` | Forecasts |

---

## 3. Thống kê 24 hàm theo Block

### Block 1 — DOM Selectors
- *(Không có function, chỉ là khai báo biến)*

### Block 2 — App State
- *(Không có function, chỉ là object `state`)*

### Block 3 — Init (2 hàm)
| # | Hàm | Loại | Trạng thái |
|---|---|---|---|
| 1 | `init()` | Khởi động | ⚠️ TODO |
| 2 | `bindEvents()` | Gắn event | ⚠️ TODO |

### Block 4 — Event Handlers (4 hàm)
| # | Hàm | Trigger | Trạng thái |
|---|---|---|---|
| 3 | `handleSearch(event)` | Submit form | ⚠️ TODO |
| 4 | `handleUnitToggle()` | Click °C/°F | ⚠️ TODO |
| 5 | `handleGeolocation()` | Click 📍 | ⚠️ TODO |
| 6 | `handleRetry()` | Click Retry | ⚠️ TODO |

### Block 5 — State Helpers (5 hàm)
| # | Hàm | Mục đích | Trạng thái |
|---|---|---|---|
| 7 | `showLoading()` | Hiện loading | ⚠️ TODO |
| 8 | `hideLoading()` | Ẩn loading | ⚠️ TODO |
| 9 | `showError(msg)` | Hiện error | ⚠️ TODO |
| 10 | `hideError()` | Ẩn error | ⚠️ TODO |
| 11 | `setSearchError(msg)` | Lỗi input | ⚠️ TODO |

### Block 6 — Render Functions (6 hàm)
| # | Hàm | Render vào | Trạng thái |
|---|---|---|---|
| 12 | `renderWeather(data)` | Current card | ⚠️ TODO |
| 13 | `renderHighlights(data)` | 6 ô highlights | ⚠️ TODO |
| 14 | `renderHourly(items)` | `#hourlyList` | ⚠️ TODO |
| 15 | `renderDaily(items)` | `#dailyList` | ⚠️ TODO |
| 16 | `renderForecast(hourly, daily)` | Cả 2 trên | ⚠️ TODO |
| 17 | `clearContent()` | Reset UI | ⚠️ TODO |

### Block 7 — Data Layer (2 hàm)
| # | Hàm | Mục đích | Trạng thái |
|---|---|---|---|
| 18 | `fetchWeather(query)` | Gọi API thật | ⚠️ TODO |
| 19 | `showContent()` | Hiện UI data | ⚠️ TODO |

### Block 8 — Utilities (4 hàm)
| # | Hàm | Mục đích | Trạng thái |
|---|---|---|---|
| 20 | `formatDate(date)` | Format ngày | ⚠️ TODO |
| 21 | `formatTime(value)` | Format giờ | ⚠️ TODO |
| 22 | `convertTemp(value, unit)` | Đổi °C↔°F | ⚠️ TODO |
| 23 | `getWeatherIcon(code)` | Map icon | ⚠️ TODO |

### Block 9 — Boot
| # | Hàm | Mục đích | Trạng thái |
|---|---|---|---|
| 24 | (anonymous) | `DOMContentLoaded` → `init()` | ✅ Hoạt động |

---

## 4. Thống kê 4 Event Listeners

| # | Element | Event | Handler | Mục đích |
|---|---|---|---|---|
| 1 | `searchForm` | `submit` | `handleSearch` | Tìm thành phố |
| 2 | `unitToggle` | `click` | `handleUnitToggle` | Đổi °C/°F |
| 3 | `locationBtn` | `click` | `handleGeolocation` | Lấy vị trí |
| 4 | `errorRetry` | `click` | `handleRetry` | Thử lại |

---

## 5. Thống kê trạng thái UI (State Machine)

App chỉ có **3 trạng thái chính**, chuyển qua lại bằng `hidden`:

```
                ┌─────────────┐
                │   LOADING   │ ← showLoading()
                └──────┬──────┘
                       │
            ┌──────────┴──────────┐
            ▼                     ▼
     ┌─────────────┐       ┌─────────────┐
     │   ERROR     │       │   CONTENT   │
     │ (showError) │       │(showContent)│
     └──────┬──────┘       └──────┬──────┘
            │                     │
            └────── Retry ────────┘
```

| Trạng thái | Element hiển thị | Hàm bật | Hàm tắt |
|---|---|---|---|
| Loading | `#loadingState` | `showLoading()` | `hideLoading()` |
| Error | `#errorState` | `showError()` | `hideError()` |
| Content | `#content` | `showContent()` | `clearContent()` |

---

## 6. Thống kê State Object

```js
state = {
    unit:      'C',    // string: 'C' | 'F'
    city:      '',     // string
    current:   null,   // object | null
    hourly:    [],     // array
    daily:     [],     // array
    isLoading: false,  // boolean
    error:     null    // string | null
}
```

| Field | Type | Mục đích | Set bởi |
|---|---|---|---|
| `unit` | string | Đơn vị nhiệt độ | `handleUnitToggle` |
| `city` | string | Thành phố hiện tại | `handleSearch` |
| `current` | object | Data thời tiết hiện tại | `fetchWeather` |
| `hourly` | array | 24h dự báo | `fetchWeather` |
| `daily` | array | 5 ngày dự báo | `fetchWeather` |
| `isLoading` | boolean | Có đang fetch? | `showLoading` / `hideLoading` |
| `error` | string | Thông báo lỗi | `showError` |

---

## 7. Tổng kết số liệu

| Hạng mục | Số lượng |
|---|---|
| 📄 Tổng số dòng script.js | ~260 |
| 🔢 Tổng số biến DOM | 42 |
| 🛠️ Tổng số hàm | 24 |
| ⚠️ Số hàm cần implement (TODO) | 23/24 |
| ✅ Số hàm đã hoạt động | 1/24 (boot listener) |
| 🎯 Tổng số event listeners | 4 |
| 🔄 Số trạng thái UI | 3 |
| 📊 Số section HTML được JS quản lý | 7 |
| 🏷️ Số field trong state | 7 |

---

## 8. Checklist khi implement

- [ ] Implement `fetchWeather()` — gọi API thật
- [ ] Implement `formatDate()` & `formatTime()`
- [ ] Implement `convertTemp()` & `getWeatherIcon()`
- [ ] Implement 6 hàm render (`renderWeather`, `renderHighlights`, `renderHourly`, `renderDaily`, `renderForecast`, `clearContent`)
- [ ] Implement 4 hàm state helper (`showLoading`, `hideLoading`, `showError`, `hideError`, `setSearchError`)
- [ ] Implement 4 event handlers (`handleSearch`, `handleUnitToggle`, `handleGeolocation`, `handleRetry`)
- [ ] Test luồng: search → loading → success → render
- [ ] Test luồng: search → loading → error → retry
- [ ] Test toggle °C/°F
- [ ] Test geolocation
- [ ] Thêm localStorage cho last city

---

## 9. Luồng hoạt động khi hoàn thiện

```
1.  DOMContentLoaded
2.  init()
3.  bindEvents() ──────────────┐
4.  showLoading()              │
5.  (chờ 600ms)                │
6.  showError("Search...")     │
                               │
User bấm Search:               │
7.  handleSearch() ◄────────────┘
8.  fetchWeather("Hanoi")
9.    showLoading()
10.   await fetch(...)
11.   state.current = data
12.   renderWeather(state.current)
13.   renderHighlights(...)
14.   renderForecast(...)
15.   showContent()

User bấm °C/°F:
16. handleUnitToggle()
17.   state.unit = 'F'
18.   renderWeather(...)
19.   renderForecast(...)
```

---

> 📌 **Ghi chú:** Tất cả các hàm hiện đang **rỗng + comment TODO**. File này dùng làm "bản đồ" để implement từng phần một cách có hệ thống.


