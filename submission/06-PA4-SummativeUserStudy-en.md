# PA4 - SUMMATIVE USER STUDY REPORT

**Course:** Interface Design (CSC13112)  
**Instructors:** Dr. Le Khanh Duy, MSc. Pham Nguyen Son Tung  
**Group:** Group 06 - **Class:** 23KTMP2  
**Team members:**  
- Le Mai Hoai Bao (23127326)
- Lam Huu Khanh (23127205)
- Pham Chi Bao Ninh (23127446)
- Truong Cong Thien Phu (23127455)
- Phung Ngoc Tuan (23127510)

---

## 1. Research Objectives & Experimental Hypotheses

### 1.1. Context & Evaluation Objectives

After completing formative testing on paper prototypes in PA3 (Formative Testing with 6 variants), the team selected the optimal architecture:

- **Navigation system:** A 5-tab fixed bottom navigation bar (`Nav-1: Fixed Bottom Navigation Bar`).
- **Schedule screen:** A horizontal date strip combined with match cards and an 8×8 chessboard detail view (`Sch-2: Date Strip Filter + Match Detail`).

This Summative Usability Study was conducted to **quantify and validate the superiority** of the high-fidelity prototype (**Group 06 Hi-fi Prototype**) compared with the current mobile version of the original product (**Baseline: freestylechess.com mobile web**).

### 1.2. Formal Hypotheses

The team proposed 4 controlled scientific hypotheses based on the 4 core improvements from PA3:

* **Hypothesis $H_1$ (Time-on-Task / Efficiency):** The average task completion time ($TCT$) on the Hi-fi Prototype will decrease by at least **40%** compared with the Baseline across both tasks (Task 1: one-handed navigation; Task 2: looking up the schedule and viewing chessboard details).

  $$
  \mu_{TCT(Prototype)} < \mu_{TCT(Baseline)}
  $$
* **Hypothesis $H_2$ (Overall Usability / SUS Benchmark):** The **System Usability Scale (SUS Score)** of the Hi-fi Prototype will exceed the industry benchmark ($\ge 68/100$, reaching B+ to A according to the Sauro-Lewis scale) and be at least **20 points** higher than the Baseline.

  $$
  SUS_{Prototype} \ge 80 > SUS_{Baseline}
  $$
* **Hypothesis $H_3$ (Effectiveness & Error Reduction):** The Hi-fi Prototype will achieve a **Direct Success Rate** of $\ge 90\%$, while reducing slip/touch-target misses and mental model mistakes by complying with the thumb touch-target size standard of $\ge 48\times 48\text{ px}$.

  $$
  Errors_{Prototype} \ll Errors_{Baseline}
  $$
* **Hypothesis $H_4$ (Subjective Satisfaction):**
  The 5-point Likert scale scores across all 5 dimensions (*Ease of use, Aesthetics, Speed, Navigation clarity, Overall satisfaction*) for the Prototype will average $\ge 4.2/5.0$, statistically outperforming the Baseline.

---

## 2. Experimental Study Design

### 2.1. Within-Subjects Design

- **Model:** Within-Subjects / Repeated Measures Design.
- **Rationale:**
  - Completely eliminates variation in individual ability among participants (inter-individual differences) for a small sample size ($N = 6$).
  - Allows participants to visually and directly compare the 2 systems during the semi-structured interview at the end of the session.
- **Independent Variable (IV):** The interface system being tested:
  - **System A (Baseline):** The actual mobile website `freestylechess.com`.
  - **System B (Hi-fi Prototype):** The interactive web prototype running in a mobile browser, developed by Group 06.
- **Dependent Variables (DV):**
  - Task Completion Time (seconds).
  - Task Success Rate: Direct / Partial / Fail.
  - Error Frequency, classified by Slip, Mistake, Hesitation.
  - SUS usability score (0 - 100).
  - Likert satisfaction score (1 - 5 across 5 dimensions).
  - Qualitative feedback and user preference.

### 2.2. Extraneous Variable Control & Counterbalancing Matrix

To reduce the **Learning / Carryover Effect**, where users remember information locations from the first system and apply them to the second system, the task order was cross-assigned using two orders, $AB / BA$. The actual allocation was **4 participants using A → B and 2 participants using B → A**; therefore, this is partial counterbalancing rather than perfect balancing.

|  Participant  | Demographics & Habits                                                           | Video Evidence (YouTube)                                |     Testing order (Order)     |         System 1 (First)         |         System 2 (Second)         |
| :-----------: | :------------------------------------------------------------------------------ | :------------------------------------------------------ | :---------------------------: | :-------------------------------: | :-------------------------------: |
| **P01** | Right-handed, does not follow chess news, often uses one hand                   | [Video P01](https://www.youtube.com/watch?v=jkVPSlJTUtY) | **A $\rightarrow$ B** | Baseline (`freestylechess.com`) |          Hi-fi Prototype          |
| **P02** | Right-handed, plays chess frequently (ELO ~1400), passively follows chess       | [Video P02](https://www.youtube.com/watch?v=dVKwWvC-f_g) | **A $\rightarrow$ B** | Baseline (`freestylechess.com`) |          Hi-fi Prototype          |
| **P03** | Right-handed, not interested in chess, late 20s                                 | [Video P03](https://www.youtube.com/watch?v=8K-5v6kj4i8) | **A $\rightarrow$ B** | Baseline (`freestylechess.com`) |          Hi-fi Prototype          |
| **P04** | Right-handed, often uses two hands, not interested in chess                     | [Video P04](https://www.youtube.com/watch?v=FYYQkVIUwJ4) | **A $\rightarrow$ B** | Baseline (`freestylechess.com`) |          Hi-fi Prototype          |
| **P05** | Right-handed, uses one hand when browsing media / two hands when gaming         | [Video P05](https://www.youtube.com/watch?v=H0-6QAFTI7c) | **B $\rightarrow$ A** |          Hi-fi Prototype          | Baseline (`freestylechess.com`) |
| **P06** | Right-handed, knows how to play chess, often uses one hand when watching videos | [Video P06](https://www.youtube.com/watch?v=Q7xo4Kr6YfY) | **B $\rightarrow$ A** |          Hi-fi Prototype          | Baseline (`freestylechess.com`) |

---

## 3. Standardized Study Protocol

Each testing session lasted about **20 minutes** and followed 9 steps:

- Step 1: Welcome, Introduction & Consent Agreement
- Step 2: Collect Demographic Information Form
- Step 3: Perform Scenario on SYSTEM 1 (Task 1 & Task 2)
- Step 4: Complete SYSTEM 1 Survey (SUS + Likert Satisfaction)
- Step 5: Cognitive wash-out period (90s)
- Step 6: Perform Scenario on SYSTEM 2 (Task 1 & Task 2)
- Step 7: Complete SYSTEM 2 Survey (SUS + Likert Satisfaction)
- Step 8: Comparative Semi-Structured Post-Study Interview
- Step 9: Debriefing, Thanks, Souvenir Gift & End Session

---

## 4. Task Specifications & Assistance Protocol

### Task 1: Single-Handed Navigation & Ergonomics

* **Realistic scenario:** *"You are walking on the street and have only one hand free to hold your phone. You want to quickly check the upcoming schedule for the Freestyle Chess tournament."*
* **Task prompt:** *"From the current home screen, use ONLY one thumb to find and open the Schedule page."*
* **Timing points ($TCT_1$):**
  - **Start ($t_{start}$):** As soon as the facilitator says "Start".
  - **End ($t_{end}$):** When the Schedule screen is fully displayed and the user stops tapping.
* **Success criteria:**
  - **Direct Success:** Accurately taps the `Schedule` tab on the Bottom Nav (Prototype) or finds the Schedule item on the Baseline within $\le 60\text{ s}$ without any assistance.
  - **Partial/Assisted Success:** Completes the task after receiving 01 standardized hint (after being stuck for more than $45\text{ s}$).
  - **Fail/Timeout:** Exceeds $120\text{ s}$ or the participant states that they give up.

---

### Task 2: Schedule Lookup & 8×8 Chessboard Match Detail

* **Realistic scenario:** *"You know that on 02/09/2026 there is a match between Magnus Carlsen and Le Quang Liem. You want to view detailed information about this matchup and see the 8×8 chessboard position layout."*
* **Task prompt:** *"On the Schedule page, find the match on 02/09/2026 between Magnus Carlsen and Le Quang Liem, then open the match detail screen to view the analysis chessboard."*
* **Timing points ($TCT_2$):**
  - **Start ($t_{start}$):** As soon as the facilitator says "Start".
  - **End ($t_{end}$):** When the Match Detail route (`/schedule/:matchId`) opens with the 8×8 chessboard and information for both players clearly displayed.
* **Success criteria:**
  - **Direct Success:** Interacts with the date strip to select 02/09/2026 $\rightarrow$ expands the match card $\rightarrow$ taps `Chi tiết / Detail` within $\le 60\text{ s}$.
  - **Partial Success:** Completes the task after 01 standardized hint when stuck for more than $60\text{ s}$.
  - **Fail/Timeout:** Exceeds $120\text{ s}$ or cannot find the match.

---

### Standardized Assistance Protocol

To ensure objectivity and reproducibility, the facilitator may intervene only at 2 fixed levels:

1. **Level 1 Hint (Only when the user is silent/stuck for $> 45\text{ s}$ in Task 1 or $> 60\text{ s}$ in Task 2):** *"You may pay attention to the toolbars at the bottom or the date filter area at the top of the screen."*
2. **Stop task (When reaching the $120\text{ s}$ timeout threshold):**
   *"Thank you, we can stop this task here and continue to the next step."*

---

## 5. HCI Usability Breakdown & Error Taxonomy

The observer will use the following 3-category behavioral error coding table to record issues in the log:

|   Error code   | Error Category                                                                                                                                                                                                      | Definition & Observable Manifestation                                                                                     | Root Cause                                                                                                        |
| :-------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :------------------------------------------------------------------------------------------------------------------------ | :---------------------------------------------------------------------------------------------------------------- |
| **ERR-1** | **Slip / Touch Target Miss**                                                                                                                                                                                  | Misses the target, accidentally taps an adjacent tab, or the thumb cannot reach a touch point near the top.               | Button size$< 48\text{ px}$, spacing between buttons $< 8\text{ px}$, outside the ergonomic Thumb Reach Zone. |
| **ERR-2** | **Mental Model Mistake**                                                                                                                                                                                      | Clicks unrelated menus (such as News, Videos, Settings) while looking for Schedule; does not know how to expand the card. | Lack of visual affordance; messy hierarchical information architecture (IA).                                      |
| **ERR-3** | **Hesitation Delay** (cognitive hesitation $> 3\text{ s}$) | Finger pauses above the screen, eyes scan back and forth continuously for$> 3\text{ s}$ before tapping; doubts whether a button is tappable. | Lack of visual feedback, active state, or clear loading feedback.                                                         |                                                                                                                   |

---

## 6. Measurement Instruments

### 6.1. System Usability Scale - SUS

The study applied John Brooke's (1996) international standard scale consisting of 10 bilingual questions with a 5-point Likert scale (1 = Strongly disagree, 5 = Strongly agree).

#### Standardized SUS scoring formula:

- For **odd-numbered** questions (1, 3, 5, 7, 9 - positive statements):
  $$
  Score_i = X_i - 1
  $$
- For **even-numbered** questions (2, 4, 6, 8, 10 - negative statements):
  $$
  Score_i = 5 - X_i
  $$
- Converted score on a 100-point scale: **SUS = (Score₁ + Score₂ + … + Score₁₀) × 2.5**

#### SUS Score Rating Scale (Sauro & Lewis, Bangor et al.):

- **SUS $\ge 80.3$:** Grade **A / A+** (Excellent — Superior experience).
- **$68.0 \le \text{SUS} < 80.3$:** Grade **B / C** (Good / Above Average — Industry benchmark).
- **$51.0 \le \text{SUS} < 68.0$:** Grade **D** (Poor / OK — Needs many improvements).
- **$\text{SUS} < 51.0$:** Grade **F** (Unacceptable — Failed experience).

---

### 6.2. 5-Dimension Likert Satisfaction Scale

Evaluates agreement level (1 to 5) across 5 dimensions:

1. **$Q_1$ - Ease of Use:** *"I find it very easy to search for and view chess match information in this application."*
2. **$Q_2$ - Aesthetics:** *"The application's interface looks beautiful, professional, modern, and appealing."*
3. **$Q_3$ - Speed & Responsiveness:** *"The application loads quickly and responds immediately to my touch interactions."*
4. **$Q_4$ - Navigation Clarity:** *"The buttons, navigation bar, and options are intuitive, easy to find, and easy to understand."*
5. **$Q_5$ - Overall Satisfaction:** *"Overall, I am very satisfied with the experience of using this application."*

---

## 7. Raw Data Logging Sheets

### 7.1. Quantitative Performance Log

#### A. Baseline System (`freestylechess.com` mobile web)

|              Participant              | Order |    Task 1: TCT (s)    |         Task 1: Result         |     Task 2: TCT (s)     |            Task 2: Result            |     ERR-1 (Slip)     |   ERR-2 (Mistake)   |  ERR-3 (Hesitation)  |        SUS Score (0-100)        |   Likert Avg (1-5)   |  |
| :------------------------------------: | :---: | :--------------------: | :-----------------------------: | :---------------------: | :----------------------------------: | :------------------: | :------------------: | :------------------: | :------------------------------: | :------------------: | :-: |
|             **P01**             |  1st  |          38.2          |             Direct             |          84.5          |           Partial (1 hint)           |          4          |          2          |          3          |               27.5               |         2.8         |  |
|             **P02**             |  1st  |          29.4          |             Direct             |          62.1          |                Direct                |          2          |          1          |          2          |               50.0               |         3.4         |  |
|             **P03**             |  1st  |          41.0          |        Partial (1 hint)        |          92.0          |           Partial (1 hint)           |          5          |          3          |          4          |               22.5               |         2.6         |  |
|             **P04**             |  1st  |          28.5          |             Direct             |          58.4          |                Direct                |          2          |          1          |          2          |               50.0               |         3.2         |  |
|             **P05**             |  2nd  |          36.0          |             Direct             |          77.0          |                Direct                |          3          |          2          |          3          |               37.5               |         3.0         |  |
|             **P06**             |  2nd  |          44.5          |        Partial (1 hint)        |         120.0+         |            Fail / Assist            |          5          |          4          |          5          |               12.5               |         2.4         |  |
| **Average ($\mu \pm \sigma$)** |  —  | **36.3 ± 6.4s** | **67% Direct / 33% Part** | **82.3 ± 22.8s** | **50% Direct / 50% Part-Fail** | **3.5 ± 1.4** | **2.2 ± 1.1** | **3.2 ± 1.1** | **33.3 ± 15.2 (Grade F)** | **2.9 ± 0.4** |  |

#### B. Hi-fi Prototype System (Group 06)

|              Participant              | Order |    Task 1: TCT (s)    |    Task 1: Result    |    Task 2: TCT (s)    |    Task 2: Result    |     ERR-1 (Slip)     |   ERR-2 (Mistake)   |  ERR-3 (Hesitation)  |        SUS Score (0-100)        |   Likert Avg (1-5)   |  |
| :------------------------------------: | :---: | :--------------------: | :-------------------: | :--------------------: | :-------------------: | :------------------: | :------------------: | :------------------: | :------------------------------: | :------------------: | :-: |
|             **P01**             |  2nd  |          11.2          |        Direct        |          14.8          |        Direct        |          0          |          0          |          1          |               97.5               |         4.8         |  |
|             **P02**             |  2nd  |          10.5          |        Direct        |          13.9          |        Direct        |          0          |          0          |          0          |               92.5               |         4.6         |  |
|             **P03**             |  2nd  |          14.1          |        Direct        |          18.2          |        Direct        |          0          |          1          |          1          |               75.0               |         4.2         |  |
|             **P04**             |  2nd  |          11.0          |        Direct        |          13.5          |        Direct        |          0          |          0          |          0          |               97.5               |         4.8         |  |
|             **P05**             |  1st  |          12.2          |        Direct        |          15.6          |        Direct        |          0          |          0          |          1          |               92.5               |         4.6         |  |
|             **P06**             |  1st  |          12.0          |        Direct        |          12.0          |        Direct        |          0          |          0          |          0          |              100.0              |         5.0         |  |
| **Average ($\mu \pm \sigma$)** |  —  | **11.8 ± 1.2s** | **100% Direct** | **14.7 ± 2.1s** | **100% Direct** | **0.0 ± 0.0** | **0.2 ± 0.4** | **0.5 ± 0.5** | **92.5 ± 9.1 (Grade A+)** | **4.7 ± 0.3** |  |

---

### 7.2. SUS Item Breakdown Matrix

| System              | P_ID | Q1 | Q2 | Q3 | Q4 | Q5 | Q6 | Q7 | Q8 | Q9 | Q10 | Total SUS Score |  Grade  |  |
| :------------------ | :--: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-------------: | :------: | :-: |
| **Baseline**  | P01 | 2 | 4 | 2 | 4 | 2 | 4 | 3 | 4 | 2 |  4  | **27.5** | Grade F |  |
|                     | P02 | 3 | 3 | 3 | 3 | 3 | 3 | 3 | 3 | 3 |  3  | **50.0** | Grade F |  |
|                     | P03 | 2 | 4 | 2 | 5 | 2 | 4 | 2 | 4 | 2 |  4  | **22.5** | Grade F |  |
|                     | P04 | 3 | 3 | 3 | 3 | 3 | 3 | 3 | 3 | 3 |  3  | **50.0** | Grade F |  |
|                     | P05 | 3 | 4 | 3 | 4 | 3 | 3 | 3 | 4 | 2 |  4  | **37.5** | Grade F |  |
|                     | P06 | 2 | 5 | 2 | 5 | 2 | 5 | 2 | 5 | 2 |  5  | **12.5** | Grade F |  |
| **Prototype** | P01 | 5 | 1 | 5 | 1 | 4 | 1 | 5 | 1 | 5 |  1  | **97.5** | Grade A+ |  |
|                     | P02 | 5 | 1 | 4 | 2 | 5 | 1 | 5 | 1 | 4 |  1  | **92.5** | Grade A+ |  |
|                     | P03 | 4 | 2 | 4 | 2 | 4 | 2 | 4 | 2 | 4 |  2  | **75.0** | Grade B |  |
|                     | P04 | 5 | 1 | 5 | 1 | 4 | 1 | 5 | 1 | 5 |  1  | **97.5** | Grade A+ |  |
|                     | P05 | 5 | 1 | 4 | 2 | 4 | 1 | 5 | 1 | 5 |  1  | **92.5** | Grade A+ |  |
|                     | P06 | 5 | 1 | 5 | 1 | 5 | 1 | 5 | 1 | 5 |  1  | **100.0** | Grade A+ |  |

---

### 7.3. 5-Dimension Likert Scale Detailed Summary

| System              | P_ID | Q1: Ease | Q2: Aesthetics | Q3: Speed | Q4: Nav Clarity | Q5: Satisfaction |  Likert Avg  |
| :------------------ | :--: | :------: | :------------: | :-------: | :-------------: | :--------------: | :-----------: |
| **Baseline**  | P01 |    3    |       3       |     3     |        2        |        3        | **2.8** |
|                     | P02 |    3    |       4       |     3     |        3        |        4        | **3.4** |
|                     | P03 |    2    |       3       |     3     |        2        |        3        | **2.6** |
|                     | P04 |    3    |       4       |     3     |        3        |        3        | **3.2** |
|                     | P05 |    3    |       3       |     3     |        3        |        3        | **3.0** |
|                     | P06 |    2    |       3       |     2     |        2        |        3        | **2.4** |
| **Prototype** | P01 |    5    |       5       |     5     |        5        |        4        | **4.8** |
|                     | P02 |    5    |       5       |     4     |        5        |        4        | **4.6** |
|                     | P03 |    4    |       4       |     4     |        5        |        4        | **4.2** |
|                     | P04 |    5    |       5       |     5     |        5        |        4        | **4.8** |
|                     | P05 |    5    |       5       |     4     |        5        |        4        | **4.6** |
|                     | P06 |    5    |       5       |     5     |        5        |        5        | **5.0** |

---

## 8. Data Synthesis & Visualization Plan

### 8.1. Task Completion Time Analysis

- **Task 1 (one-handed navigation):** TCT decreased from $36.3\text{ s}$ to $11.8\text{ s}$ (**a $67.5\%$ reduction**, $p < 0.001$).
- **Task 2 (schedule lookup & chessboard):** TCT decreased from $82.3\text{ s}$ to $14.7\text{ s}$ (**an $82.1\%$ reduction**, $p < 0.001$). In particular, P06 spent more than $120\text{ s}$ on the old system due to being led into a news article, but took exactly $12\text{ s}$ on the Prototype.

### 8.2. Error Reduction Analysis

- **Slip Errors (ERR-1):** Decreased from an average of $3.5\text{ errors}$ to **$0.0\text{ errors}$** thanks to touch targets of $\ge 48\times 48\text{ px}$.
- **Mental Model Mistakes (ERR-2):** Decreased from $2.2$ to $0.2\text{ errors}$ thanks to the fixed navigation bar and clear card hierarchy.
- **Hesitation Delays (ERR-3):** Decreased from $3.2$ to $0.5\text{ times}$ thanks to instant visual feedback $<250\text{ ms}$.

### 8.3. SUS & Likert Scale Comparison

- **SUS Benchmark:** Increased from **$33.3 / 100$ (Grade F)** to **$92.5 / 100$ (Grade A+)**, a difference of **$+59.2$ points**, exceeding the industry benchmark of $68.0$.
- **Likert Score:** Increased from $2.9 / 5.0$ to **$4.7 / 5.0$**, confirming substantially higher satisfaction across all 5 dimensions (*Ease of use, Aesthetics, Speed, Clarity, Overall satisfaction*).

### 8.4. Qualitative Thematic Coding with Timestamps

#### Theme 1: Thumb ergonomics & intuitiveness of Bottom Navigation

* **P01 [0:41, 1:03]:** *"The navigation function on the old website was hidden way up in the top-left corner, forcing me to use two hands. In the new app, the bar is already under my thumb, with both icons and text, so I can operate it quickly without spending time reading."*
* **P01 [1:16]:** *"The old menu popped out and occupied the whole screen, interrupting content reading."*
* **P02 [0:37, 1:23]:** *"The old website looked like a shrunken desktop interface rather than a phone website. The new design is much clearer and easier to use with one right hand."*
* **P04 [7:11]:** *"The new app is very good for new users; when it opens, you immediately know what features the page has instead of having to search by scrolling."*
* **P05 [2:29, 3:43]:** *"The schedule is a very important function in sports. Putting it directly on the bar makes access much faster and more convenient than having to tap the hamburger menu."*
* **P06:** *"On the old website I was very confused when switching between pages and was forced to use two hands. With the new app, I could control everything with one hand after only 30 seconds of getting familiar with it."*
* **Critical perspective from P03 [0:54, 2:15]:** P03 (the only participant who preferred the hidden menu) acknowledged that the old menu was harder to reach with one hand, but personally preferred a screen without a fixed bar to save space.

#### Theme 2: Date-based schedule layout & 8×8 chessboard visualization

* **P01 [3:01]:** *"On the old website, the font and display style between events were too similar, making it very hard to read. The new app separates content by day in a linear way, with the number of matches shown very intuitively."*
* **P02 [3:10, 4:10]:** *"The information arrangement in the new version is compact, with lots of information but without needing to scroll far. The old version's font was very poor for skimming."*
* **P04 [2:22, 4:51]:** *"Viewing matches by day is more optimal than viewing large events, because chess viewers mainly want to know who is playing whom today. The old website's lack of a search bar is a major drawback."*
* **P05 [0:40, 1:32]:** *"The 'Go to Today' button is very useful for returning when I accidentally tap the wrong date."*
* **P06:** *"The 'Read more' button on the old website was too small to tap and it led to a news article, causing disorientation. The new app lets me view match details and has a very professional visual chessboard."*

#### Theme 3: Improvement contributions for future versions (Design Implications)

1. **Auto-month Threshold on Date Strip (P01 [4:12], P03 [6:54]):** Automatically update the month title on the date strip when users scroll across the boundary between two months, without waiting for users to click a specific date.
2. **Direct Date Input & Parent Tournament Header (P02 [7:05], P06):** Allow quick date/month/year entry and display the parent tournament name at the top of each day so users can follow weeks with multiple parallel events more easily.
3. **Custom Navigation Positioning (P05 [6:01]):** Add an option to customize the position or height of the bar for users with longer thumbs or different phone-holding habits.

---

## 9. Roles & Video Protocol

### 9.1. Task Assignment in Each Session

* **Facilitator — Phung Ngoc Tuan / Truong Cong Thien Phu:**
  - Welcomes participants, guides the testing steps, and gives start/stop timing commands.
  - Maintains a strictly neutral attitude, does not explain icon meanings or point at the screen unless the user asks for a hint.
* **Observer & Data Logger — Lam Huu Khanh / Pham Chi Bao Ninh:**
  - Uses a digital stopwatch to accurately measure $TCT$ down to milliseconds.
  - Records ERR-1, ERR-2, and ERR-3 error codes in the raw log sheet.
  - Notes Think-Aloud statements and facial reactions (surprise, confusion, satisfied smiling).
* **Video & Tech Lead — Le Mai Hoai Bao:**
  - Sets up the camera angle: over-the-shoulder recording from a $45^\circ$ side angle, fully covering the phone screen and the participant's thumb.
  - Ensures clear lighting, no screen glare, and clear participant audio recording.
  - Manages raw video files and edits evidence clips for the report slides.

---
