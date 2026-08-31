# PA3 Report — Requirement 2: Formative Testing

## Freestyle Chess Mobile Web — Group 06

- **Course:** CSC13112 - UI/UX Design
- **Lecturer:** Dr. Le Khanh Duy
- **Teaching Assistant / Instructor:** MSc. Pham Nguyen Son Tung
- **Assignment:** Project Assignment 3 (PA3) — Paper Prototype & Formative Testing
- **Team Members:** Le Mai Hoai Bao, Lam Huu Khanh, Pham Chi Bao Ninh, Truong Cong Thien Phu, Phung Ngoc Tuan
- **Product Scope:** Freestyle Chess Mobile Website on Smartphone Browser
- **Submission Deliverable:** Requirement 2 — Formative Usability Testing Report

---

## 1. Formative Testing Plan

### 1.1. Testing Objectives

Formative Usability Testing was conducted to evaluate the 6 hand-drawn paper prototype variants (lo-fi prototypes) early in the design lifecycle before progressing to the computer-based high-fidelity prototype in PA4. The specific evaluation objectives include:

- **Learnability & Discoverability:** Can first-time users immediately recognize the navigation architecture and locate tournament schedules and player rosters without prior guidance or demonstration?
- **One-Handed Ergonomics:** Assess the physical comfort, thumb reach zone safety, and operation ease when users interact with the smartphone using a single hand while walking.
- **Information Architecture & Density:** Evaluate whether tournament schedules, player rosters, matchup pairings, and 8x8 chessboard detail layouts present information clearly without cluttering the mobile viewport.
- **Usability Friction & Breakdowns:** Identify hesitation points, erroneous taps, context loss, and cognitive friction during real-time interaction.

### 1.2. Target Users & Test Assignment

Testing was conducted with **3 independent participants** (Person 1, Person 2, Person 3) who had no prior knowledge of or exposure to the team's prototype sketches.

- **Test Design:** Between-Subjects assignment — Each participant independently evaluated **1 Navigation variant** and **1 Schedule variant** to ensure authentic, unbiased, and realistic first-time user feedback.
- **Participant Profiles & Variant Assignment (All participants: Male, 21 years old, 3rd-year CS students):**

| Participant ID | Summary Profile | Usage Habits & Background | Tested Navigation Variant | Tested Schedule Variant |
| :---: | :--- | :--- | :---: | :---: |
| **Person 1 (P1)** | Male, 21 y/o, 3rd-year CS Student | Frequently browses chess news; often uses smartphone single-handedly while walking | **Nav-3** (Bottom Hamburger) | **Sch-2** (Date Strip) |
| **Person 2 (P2)** | Male, 21 y/o, 3rd-year CS Student | Prefers direct, visible UI controls; dislikes multi-layered hidden drawer menus | **Nav-2** (FAB Menu) | **Sch-3** (Past Timeline) |
| **Person 3 (P3)** | Male, 21 y/o, 3rd-year CS Student | Deeply follows professional chess (Carlsen, Liem); values 8x8 board analysis view | **Nav-1** (Bottom Nav) | **Sch-1** (Accordion Cards) |

### 1.3. Testing Methodology

- **Method:** Paper Prototype usability testing combined with direct behavioral observation and rapid post-task structured interviews to capture qualitative user sentiment and feedback (**Post-Task Interview & Paraphrased Quotes**).
- **Non-Intervention Principle:** Facilitators and observers strictly adhered to a non-intervention protocol—providing no hints, explanations of icon semantics, or leading suggestions while the user performed tasks.
- **Role Assignment:**
  - **Facilitator & "Computer Role" — Phung Ngoc Tuan & Pham Chi Bao Ninh:** Introduced task scenarios, managed task execution, facilitated post-task interviews, and manually swapped paper screen overlays and states in response to user touches.
  - **Observer & Note-Taker — Truong Cong Thien Phu & Lam Huu Khanh:** Logged user actions, facial expressions, hesitation markers, thumb reach difficulties, and synthesized qualitative feedback.
  - **Video Lead — Le Mai Hoai Bao:** Recorded close-up videos of hand interactions, thumb movement, and participant expressions across all sessions.

### 1.4. Specific Tasks & Scenarios

#### Task 1: Single-Handed Navigation (Addressing P-01 Navigation)

- **Scenario:** You are holding your smartphone with one hand (using only your thumb) while opening the Freestyle Chess mobile website.
- **Task Prompt:** *"From the current Home screen, use your thumb to navigate to the News page and the Schedule page."*
- **Success Criteria:** The participant correctly identifies and taps `News` to arrive at the news page, then selects `Schedule` to reach the tournament schedule screen.
- **3 Tested Variants:**
  1. `Nav-1:` Fixed Bottom Navigation Bar (Persistent 5-tab bar at the bottom of the viewport).
  2. `Nav-2:` Floating Action Button (Radial circular FAB at the bottom right expanding into an arc menu).
  3. `Nav-3:` Bottom Hamburger Menu (3-line hamburger icon on the bottom bar triggering a full-screen drawer menu).

#### Task 2: Tournament Schedule Lookup & Match Detail (Addressing P-05 Schedule)

- **Scenario:** You want to find match details and pairings for the August 16th game between Magnus Carlsen and Le Quang Liem.
- **Task Prompt:** *"Look up the desired tournament match date, inspect the participating player roster, and open the detailed match analysis screen."*
- **Success Criteria:** The participant filters to the target date, expands the player roster, and successfully opens the match detail screen (`match.JPG`).
- **3 Tested Variants:**
  1. `Sch-1:` Accordion Cards (Tournament cards with arrow toggle for inline player expansion + event page button).
  2. `Sch-2:` Date Strip Filter + Match Detail (Horizontal scrollable date strip + Matchup cards + `Detail ->` button opening the 8x8 chessboard detail screen).
  3. `Sch-3:` Past Timeline (Vertical infinite-scroll timeline for historical tournament events).

---

## 2. Testing Results

### 2.1. Empirical Behavioral Observations by Testing Session

#### Task 1: Navigation Bar (One-Handed Ergonomics)

| Participant | Tested Variant | Outcome | Empirical Behavioral Observations | Qualitative Feedback & User Sentiment |
| :---: | :---: | :---: | :--- | :--- |
| **Person 1 (P1)** | **Nav-3** (Bottom Hamburger) | Completed | Tapped the hamburger icon at the bottom, then scanned down the full-screen vertical menu to locate and select Schedule. | *"It works, but requires an extra intermediate menu step; the full-screen overlay loses track of the home page."* |
| **Person 2 (P2)** | **Nav-2** (FAB Menu) | Completed | Tapped the circular FAB, then hesitated while processing the arc-shaped icons; reaching the top-most icon required uncomfortable thumb extension. | *"The radial menu looks unique, but obscures underlying content, and the upper button is hard to reach with the thumb."* |
| **Person 3 (P3)** | **Nav-1** (Bottom Nav) | Completed | Instantly tapped the Schedule icon on the bottom bar; the thumb rested naturally in place with zero grip adjustment or stretching. | *"Bottom Nav is effortless; my thumb rests right there naturally."* |

#### Task 2: Schedule (Schedule Lookup & Match Detail)

| Participant | Tested Variant | Outcome | Empirical Behavioral Observations | Qualitative Feedback & User Sentiment |
| :---: | :---: | :---: | :--- | :--- |
| **Person 1 (P1)** | **Sch-2** (Date Strip) | Completed | Swiped smoothly across the horizontal date strip to select Aug 16; decisively tapped `Detail ->` to open the detail screen with the 8x8 chessboard. | *"The horizontal date strip is very intuitive; having a dedicated board analysis screen makes it feel professional."* |
| **Person 2 (P2)** | **Sch-3** (Past Timeline) | Completed | Had to repeatedly scroll down the past timeline to reach the June 9 event; showed noticeable thumb fatigue. | *"Vertical scrolling timeline is fine for a few events, but for longer tournaments it causes fatigue and risks scrolling past target dates; needs quick search."* |
| **Person 3 (P3)** | **Sch-1** (Accordion) | Completed | Immediately recognized the chevron icon to toggle the expandable card; viewed the inline player roster smoothly. | *"Inline card expansion is instant; I don't lose my reading context."* |

### 2.2. Paraphrased User Quotes

> **Participant 1 (T1-V1 — Bottom Nav):**
> *"Bottom Nav is effortless, my thumb rests right there."*

> **Participant 2 (T2-V1 — Accordion Cards):**
> *"Inline card expansion is instant, I don't lose my reading context."*

> **Participant 3 (T2-V2 — Date Strip + Match Detail):**
> *"The match analysis on the detail screen looks professional."*

### 2.3. Key Breakdowns & Usability Issues

Based on empirical observations across all sessions (synchronized with **Presentation Slide 16 — Key Breakdowns**):

1. **Discoverability Issue:** The FAB conceals the entire navigation structure until tapped, forcing users into a trial-and-error discovery process.
2. **Context Loss:** The full-screen drawer overlay (`Nav-3`) abruptly disconnects the user from their active reading context on the home screen.
3. **Information Overload:** Expanding accordion cards inline unloads too much visual information simultaneously, cluttering the mobile viewport.
4. **Lack of Searching Operation:** Users must repeatedly scroll through long historical tournament timelines (`Sch-3`) without quick search or direct date jump controls.

---

## 3. Evaluation & Selection of Best Lo-fi Prototypes

### 3.1. Comprehensive Variant Synthesis

- **For One-Handed Navigation (Task 1 — P-01):**
  - `Nav-1 (Fixed Bottom Navigation Bar)` decisively outperformed `Nav-2` and `Nav-3` in learnability, visual clarity, and instant single-tap efficiency.
  - The persistent bottom tab bar sits directly within the natural sweep zone of the thumb, completely eliminating the risk of phone drops or awkward regripping while walking.
- **For Schedule Lookup & Match Details (Task 2 — P-05):**
  - `Sch-2 (Date Strip + Match Detail)` emerged as the clear winner due to its effective two-tiered interaction architecture: the top horizontal Date Strip enables rapid temporal filtering, while matchup cards with a dedicated `Detail ->` button open an 8x8 chessboard analysis screen that fully satisfies chess enthusiasts.
  - Sch-2 prevents infinite scrolling fatigue (observed in Sch-3) and avoids excessive vertical page bloating (observed in Sch-1).

### 3.2. Selected Winning Prototypes per Task

- **Task 1 — Winning Prototype:** **`Variant 1: Fixed Bottom Navigation Bar`** (`Nav-1`)
  - *Rationale:* Direct 1-tap access, persistent visual labels, zero cognitive overhead, and perfect optimization for one-handed mobile reach on the move.
  - *Demo Video:* [https://www.youtube.com/watch?v=vfbPjZbB6Bs](https://www.youtube.com/watch?v=vfbPjZbB6Bs)

- **Task 2 — Winning Prototype:** **`Variant 2: Date Strip + Match Detail Screen`** (`Sch-2`)
  - *Rationale:* Structured information hierarchy (Tournament → Date → Matchup → Match Analysis), rapid horizontal date filtering, and a rich, interactive 8x8 visual chessboard detail screen.
  - *Demo Video:* [https://www.youtube.com/watch?v=0F2A6Z4maCo](https://www.youtube.com/watch?v=0F2A6Z4maCo)

---

## 4. Points for Improvement for PA4

Based on usability breakdowns discovered during formative testing and feedback received from the Peer Review session, Group 06 established **4 mandatory improvement commitments** for the High-Fidelity Figma prototype in PA4:

1. **Touch Target Compliance (WCAG AAA):**
   - Ensure all navigation icons, tab items, accordion toggles, and `Detail ->` buttons meet the minimum touch target dimension of $48 \times 48\text{ px}$ with at least $8\text{ px}$ safe spacing between targets.
2. **Explicit Back Navigation Controls:**
   - Incorporate prominent `< Back` buttons on the top-left app bar of all nested detail screens (`Event Detail`, `Match Detail`) alongside sticky header bars to ensure user autonomy and clear exit paths (*Jakob Nielsen's Heuristic #3: User Control and Freedom*).
3. **Quick Search & Category Filter Chips:**
   - Implement an instant player search bar (e.g., Magnus Carlsen, Le Quang Liem) and status filter chips (`Live`, `Upcoming`, `Finished`) to eliminate manual scrolling friction.
4. **Micro-Interactions & Active State Feedback:**
   - Introduce smooth expansion animations (under 250ms) and clear active state indicators (vibrant accent colors and icon highlights) across the Bottom Navigation bar and Date Strip.

---

## 5. Formative Testing Video Directory

| No. | Prototype / Task Description | YouTube Video Link |
| :---: | :--- | :--- |
| 1 | **Task 1 - Nav-1:** Fixed Bottom Navigation Bar Interview (Winner) | [www.youtube.com/watch?v=vfbPjZbB6Bs](https://www.youtube.com/watch?v=vfbPjZbB6Bs) |
| 2 | **Task 1 - Nav-2:** Floating Action Button (FAB) Menu Interview | [www.youtube.com/watch?v=5u2LBX2vbSo](https://www.youtube.com/watch?v=5u2LBX2vbSo) |
| 3 | **Task 1 - Nav-3:** Bottom Hamburger Full Menu Interview | [www.youtube.com/watch?v=0leO_QLuY_U](https://www.youtube.com/watch?v=0leO_QLuY_U) |
| 4 | **Task 2 - Sch-1:** Accordion Cards + Event Detail Interview | [www.youtube.com/watch?v=swYRYz9qp-A](https://www.youtube.com/watch?v=swYRYz9qp-A) |
| 5 | **Task 2 - Sch-2:** Date Strip + Match Detail Page Interview (Winner) | [www.youtube.com/watch?v=0F2A6Z4maCo](https://www.youtube.com/watch?v=0F2A6Z4maCo) |
| 6 | **Task 2 - Sch-3:** Past Timeline + Event Detail Interview | [www.youtube.com/watch?v=AQhmQKJuMy0](https://www.youtube.com/watch?v=AQhmQKJuMy0) |
