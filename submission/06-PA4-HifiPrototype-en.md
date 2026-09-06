# PA4 - HI-FI PROTOTYPE

**Course:** Interface Design (CSC13112)**Instructors:** Dr. Le Khanh Duy, MSc. Pham Nguyen Son Tung**Team:** Group 06 - **Class:** 23KTMP2**Team members:**

- Le Mai Hoai Bao (23127326)
- Lam Huu Khanh (23127205)
- Pham Chi Bao Ninh (23127446)
- Truong Cong Thien Phu (23127455)
- Phung Ngoc Tuan (23127510)

---

**Live Prototype: [testpa4.vercel.app](https://testpa4.vercel.app/)**

**Demo Video: [www.youtube.com/watch?v=pGMsQEdcXys](https://www.youtube.com/watch?v=pGMsQEdcXys)**

---

## 1. Introduction & Design Goals

After the formative usability testing process with 6 paper-prototype variants in PA3, Group 06 selected and merged two design solutions:

1. **`Nav-1` (Fixed Bottom Navigation Bar):** A fixed 5-tab navigation bar at the bottom of the screen, thoroughly addressing thumb-zone reachability.
2. **`Sch-2` (Date Strip Filter + Dedicated 8×8 Match Detail):** An intuitive date-strip slider combined with compact match cards and a dedicated 8×8 chessboard-position analysis screen.

In PA4, the team developed this solution into a complete **High-Fidelity Prototype** that supports direct interaction with realistic data across mobile devices.

---

## 2. Technical Architecture & Implementation Technologies

The prototype is not a static mockup; it is implemented as a real interactive web application:

* **Core Framework:** React 19 combined with TypeScript to ensure type safety and a modular component structure.
* **Build Tool & Runtime:** Vite for fast startup, instant hot reloading, and smooth 60fps rendering performance on mobile.
* **Routing:** `React Router` with `HashRouter` for zero-latency navigation and flexible static deployment.
* **Design Tokens & Styling:** Modern vanilla CSS (CSS Custom Properties), with CSS Grid/Flexbox layouts optimized for mobile screen standards.
* **Advanced interactive components:** Radix Popover and React Day Picker for the Date Picker Modal.
* **Near-realistic data:** Integrated tournament information such as the *2026 FIDE Freestyle Chess World Championship*, ELO ratings, portraits of international Grandmasters (Magnus Carlsen, Le Quang Liem, Hikaru Nakamura, Fabiano Caruana, Vincent Keymer, etc.), and real match chessboards from [chess.com](https://www.chess.com/).

---

## 3. Main Components in the Prototype

### 3.1. Navigation Bar

* **Fixed Bottom Navigation (Nav-1):** 5 fixed tabs (*Schedule, Videos, Home, News, More*) at the bottom edge of the screen, placed within the thumb-reach zone with standard touch target sizes of $\ge 48\times 48\text{ px}$.
* **More Action Sheet:** Tapping the 'More' tab opens a menu for secondary pages (Rating, Galleries, Merch, etc.) without covering the main navigation bar. Users can tap anywhere on the corresponding button to open a secondary page.

![Home screen](images/hifi-home-more-menu.jpg)

### 3.2. Schedule Screen

* **Top App Bar:** Page title, search button, and Date Picker button.
* **Horizontal Date Strip:** A horizontally scrollable date strip that allows users to select any day in the week. The selected date tab is highlighted.
* **Date Picker Modal:** Allows users to quickly jump to distant dates in the month, with a "Go to Today" button to return to the current date.
* **Instant Search & Filter Chips:** Instant search by player name/location combined with status filters (*Live, Upcoming, Completed*).
* **Expandable Matchup Cards:** Match cards display national flags, the names of the two players, ELO ratings, match status, and a "View Details $\rightarrow$" button.

![Schedule screen](images/hifi-schedule-overview.jpg)

### 3.3. Match Detail Screen

* **Sticky Header & Contextual Back Button:** A clear Back button in the top-left corner helps users return to the exact date and filter state on the Schedule page without losing context.
* **Player Banner:** Displays information about the two players, ELO ratings, score, and match status.
* **Interactive 8×8 Chessboard:** A visual 8×8 chessboard that accurately shows the real position of each chess game.

![Match Detail screen](images/hifi-match-detail.jpg)

---

## 4. Four Ergonomic & Accessibility Criteria

1. **Touch Target Size $\ge 48\times 48\text{ px}$:** Completely eliminates thumb mis-tap errors.
2. **Thumb Zone Optimization:** Places the most frequently used functions in the lower half of the screen (Natural Thumb Zone).
3. **Contrast Ratio $\ge 4.5:1$:** Targets WCAG AA contrast for normal text; the clean Light Mode background supports readability under outdoor lighting.
4. **Instant Feedback $< 250\text{ ms}$:** All micro-interactions respond instantly within 250ms, creating a smooth Native App-like experience.
