# PA4 Weekly Report — Sprint 4 Task Tracking & Meeting Minutes

## Freestyle Chess Mobile Web — Group 06

**Course:** CSC13112 - UI/UX Design
**Lecturer:** Dr. Le Khanh Duy
**Teaching Assistant / Instructor:** MSc. Pham Nguyen Son Tung
**Class:** 23KTMP2
**Assignment:** Project Assignment 4 (PA4) — High-Fidelity Prototype & Summative User Study
**Product Scope:** Freestyle Chess Mobile Website on Smartphone Browser
**Sprint:** Sprint 4 (2-week sprint: August 24, 2026 – September 06, 2026)
**Process Methodology:** RUP + Scrum
**Repository:** [https:/ /github.com/HB4305/TKGD-PA4](https://github.com/HB4305/TKGD-PA4)

---

## 1. Project & Team Information

### 1.1. Project Overview

| Field                     | Details                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| :------------------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Course**                | CSC13112 - UI/UX Design (FIT - HCMUS)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| **Assignment**            | Project Assignment 4 (PA4) — High-Fidelity Prototype & Summative User Study                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| **Group / Class**         | Group 06 — Class 23KTMP2                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| **Product Scope**         | Freestyle Chess Mobile Website on Smartphone Browser                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| **Sprint**                | Sprint 4 (PA4)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| **Sprint Duration**       | 2 weeks (August 24, 2026 – September 06, 2026)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| **Meeting Link**          | [https://meet.google.com/yat-svzi-mkm](https://meet.google.com/yat-svzi-mkm)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| **Live Interactive Demo** | [https://testpa4.vercel.app](https://testpa4.vercel.app)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| **Video Demo (YouTube)**  | [https://www.youtube.com/watch?v=jkVPSlJTUtY](https://www.youtube.com/watch?v=jkVPSlJTUtY)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| **Sprint Goal**           | Implement a fully interactive High-Fidelity Prototype using React + Vite + TypeScript based on the two winning solutions from PA3 (`Nav-1`: Fixed Bottom Nav & `Sch-2`: Date Strip + Dedicated 8×8 Match Detail). Conduct a Within-Subjects Counterbalanced Summative Usability Study with 6 participants ($P01 \rightarrow P06$) comparing the prototype against the legacy mobile web (`freestylechess.com`). Measure TCT, Success Rate, Errors (ERR-1/2/3), SUS benchmark, and Likert satisfaction. Build an interactive Swiss Modern presentation slide deck, record video proofs, and complete all required deliverables for PA4 submission. |

### 1.2. Team Members & Scrum Roles

| No. | Full Name                 | Student ID | Scrum Role & Primary Responsibilities                                                                                                                                                                                                         | Contribution |
| :-: | :------------------------ | :--------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------: |
|  1  | **Le Mai Hoai Bao**       |  23127326  | **Product Owner / Frontend Developer**- Lead React/Vite/TypeScript prototype development and deployment to Vercel.- Manage GitHub repository, coordinate 45° camera video proofs, and produce YouTube demo.                                   |   **100%**   |
|  2  | **Lam Huu Khanh**         |  23127205  | **Scrum Master / UX Researcher**- Design Summative Study framework, Latin Square Counterbalancing matrix ($AB/BA$).- Synthesize raw data logs, calculate mean TCT, SUS scores, Likert distributions, and statistical tests.                   |   **100%**   |
|  3  | **Pham Chi Bao Ninh**     |  23127446  | **UI Designer / Data Observer**- Architect CSS Design Tokens (`variables.css`), ensure WCAG AAA touch targets ($\ge 48\times 48\text{ px}$).- Serve as Observer & Note-taker, classify ERR-1/2/3 interaction errors during testing sessions.  |   **100%**   |
|  4  | **Truong Cong Thien Phú** |  23127455  | **Content Lead / Co-Facilitator**- Populate realistic tournament/match datasets and design bilingual survey instruments.- Assist in conducting user testing sessions and lead post-study semi-structured interviews.                          |   **100%**   |
|  5  | **Phung Ngoc Tuan**       |  23127510  | **Lead Facilitator / Slide Lead**- Guide participants through testing protocol, stopwatch timing, and participant logistics ($N=6$).- Build interactive Swiss Modern HTML/CSS slide deck (`PA4-assignment-briefing.html`) and Speaker Script. |   **100%**   |

---

## 2. Meeting Records Overview

In accordance with the RUP + Scrum course framework, Group 06 conducted 4 formal meetings during Sprint 4:

| Meeting Record                    |           Date & Time           |                                         Mode / Location                                          | Purpose                                                                                                         |
| :-------------------------------- | :-----------------------------: | :----------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------- |
| **Sprint Planning Meeting**       |  August 25, 202621:00 – 22:30   |     Google Meet[https://meet.google.com/yat-svzi-mkm](https://meet.google.com/yat-svzi-mkm)      | Define Sprint 4 goals, translate PA3 winning solutions into technical WBS tasks, assign deadlines.              |
| **Weekly Scrum Meeting 1**        |  August 30, 202621:00 – 22:30   | Google Meet / Online[https://meet.google.com/yat-svzi-mkm](https://meet.google.com/yat-svzi-mkm) | Review Week 1 progress: React prototype core screens, design system tokens, study protocol setup.               |
| **Weekly Scrum Meeting 2**        | September 03, 202621:00 – 22:30 | Google Meet / Online[https://meet.google.com/yat-svzi-mkm](https://meet.google.com/yat-svzi-mkm) | Review 6 user testing sessions ($P01 \rightarrow P06$), verify YouTube video proofs, review initial slide deck. |
| **Sprint Review & Retrospective** | September 06, 202621:00 – 22:30 |     Google Meet[https://meet.google.com/yat-svzi-mkm](https://meet.google.com/yat-svzi-mkm)      | Evaluate deliverables vs PA4 criteria, analyze quantitative & qualitative results, finalize submission package. |

---

## 3. Sprint Planning Meeting Minutes

- **Date & Time:** August 25, 2026 · 21:00 – 22:30
- **Location:** Online (Google Meet: [https://meet.google.com/yat-svzi-mkm](https://meet.google.com/yat-svzi-mkm))
- **Members Present:** Le Mai Hoai Bao, Lam Huu Khanh, Pham Chi Bao Ninh, Truong Cong Thien Phu, Phung Ngoc Tuan (5/5)
- **Members Absent:** None

### 3.1. Sprint Goal Definition

Develop a production-grade, responsive High-Fidelity Prototype running smoothly on mobile browsers that embodies `Nav-1` and `Sch-2`. Execute a rigorous within-subjects summative usability study ($N = 6$) comparing baseline vs prototype across TCT, error rates, SUS, and Likert satisfaction. Package all findings into a high-impact interactive presentation deck and formal submission reports.

### 3.2. Work Breakdown Structure (WBS) & Task Allocation

| Task ID    | Task Description                                                                           |       Assignee        | Est. Hours | Priority | Target Deliverable / Output                                                         |
| :--------- | :----------------------------------------------------------------------------------------- | :-------------------: | :--------: | :------: | :---------------------------------------------------------------------------------- |
| **TSK-01** | Setup React + TypeScript + Vite project repo, routing, and deploy to Vercel                |    Le Mai Hoai Bao    |     6h     |   High   | Working Vercel URL, Repo skeleton                                                   |
| **TSK-02** | Design CSS design tokens, typography, dark/gold palette, and touch target rules            |   Pham Chi Bao Ninh   |     8h     |   High   | `variables.css`, responsive foundation                                              |
| **TSK-03** | Implement 5-tab fixed Bottom Navigation Bar (`Nav-1`) with active states                   |    Le Mai Hoai Bao    |     8h     |   High   | `BottomNav.tsx` component                                                           |
| **TSK-04** | Implement Date Strip carousel, Date Picker modal, and match filtering (`Sch-2`)            |       Bảo, Ninh       |    12h     |   High   | `DateStrip.tsx`, `Schedule.tsx`                                                     |
| **TSK-05** | Implement Match Detail screen with interactive 8×8 SVG chessboard                          |    Le Mai Hoai Bao    |    10h     |   High   | `MatchDetail.tsx`, 8×8 board                                                        |
| **TSK-06** | Curate realistic tournament database (players, FIDE ratings, matches, boards)              | Truong Cong Thien Phu |     6h     |  Medium  | `matches.ts`, player datasets                                                       |
| **TSK-07** | Design Summative Usability Study protocol & Latin Square Counterbalancing ($AB/BA$)        |     Lam Huu Khanh     |     8h     |   High   | `06-PA4-SummativeUserStudy-Framework.md`                                            |
| **TSK-08** | Prepare bilingual questionnaires (Demographic, SUS 10-item, Likert 5-dimension)            |      Phu, Khanh       |     6h     |   High   | `DemographicForm.md`, `SUS.md`, `Likert.md`                                         |
| **TSK-09** | Recruit 6 participants ($P01 \rightarrow P06$) with diverse backgrounds, schedule sessions |    Phung Ngoc Tuan    |     6h     |   High   | Participant roster & testing schedule                                               |
| **TSK-10** | Setup Over-the-Shoulder$45^\circ$ camera recording rig and conduct dry-run                 |       Bao, Tuan       |     4h     |  Medium  | Standardized testing environment                                                    |
| **TSK-11** | Execute 6 Summative Usability Testing sessions ($20\text{ min/session}$)                   |    Tuan, Phu, Ninh    |    12h     |   High   | Raw stopwatch logs, observation notes                                               |
| **TSK-12** | Synthesize quantitative metrics (TCT, Success Rate, ERR-1/2/3, SUS, Likert)                |     Lam Huu Khanh     |    10h     |   High   | Statistical tables, verification logs                                               |
| **TSK-13** | Process video recordings, upload 6 proof videos + 1 interactive demo to YouTube            |    Le Mai Hoai Bao    |     8h     |   High   | 6 YouTube proof links + Demo video                                                  |
| **TSK-14** | Build 17-slide interactive Swiss Modern presentation (`PA4-assignment-briefing.html`)      |    Phung Ngoc Tuan    |    16h     |   High   | `PA4-assignment-briefing.html`                                                      |
| **TSK-15** | Author 18-minute Speaker Script for 4 presenters and Demo Operator                         |      Tuấn, Khánh      |     8h     |   High   | `PA4-speaker-script-VI.md`                                                          |
| **TSK-16** | Consolidate reports, verify checklist, export PDFs, package`06-PA4.zip`                    |      All Members      |     8h     |   High   | `06-PA4-HifiPrototype.md`, `06-PA4-SummativeUserStudy.md`, `06-PA4-WeeklyReport.md` |

---

## 4. Weekly Scrum Meeting Minutes

### 4.1. Weekly Scrum Meeting 1 (Week 1 Review)

- **Date & Time:** August 30, 2026 · 21:00 – 22:30
- **Location:** Online (Google Meet: [https://meet.google.com/yat-svzi-mkm](https://meet.google.com/yat-svzi-mkm))
- **Members Present:** Le Mai Hoai Bao, Lam Huu Khanh, Pham Chi Bao Ninh, Truong Cong Thien Phu, Phung Ngoc Tuan (5/5)
- **Members Absent:** None

#### Status Reports by Member

1. **Le Mai Hoai Bao (Product Owner / Developer):**
   - **Completed Tasks:** Built interactive prototype with Home, Schedule, and Match Detail screens; deployed live version to Vercel; integrated Bottom Navigation Bar (`Nav-1`) with haptic feedback transitions.
   - **To-do Tasks:** Polish Date Strip animation; add 8×8 chessboard piece rendering for Carlsen vs Lê Quang Liêm; set up video recording apparatus.
   - **Issues / Obstacles:** Ensuring the bottom navigation bar remains firmly pinned above mobile OS virtual home bars (iOS Home Indicator & Android gesture pill). Resolved via `env(safe-area-inset-bottom)`.

2. **Lam Huu Khanh (Scrum Master / UX Researcher):**
   - **Completed Tasks:** Established experimental framework: Within-subjects Latin Square design ($3\times AB + 3\times BA = 6\text{ users}$); defined 4 testable hypotheses ($H_1$ to $H_4$); created raw logging template.
   - **To-do Tasks:** Monitor testing data collection; calculate Brooke's 1996 SUS formula and paired delta comparisons once logs are submitted.
   - **Issues / Obstacles:** Ensuring wash-out interval ($90\text{ s}$) between System 1 and System 2 is strictly adhered to prevent carryover fatigue.

3. **Pham Chi Bao Ninh (UI Designer / Observer):**
   - **Completed Tasks:** Finalized CSS design tokens in `variables.css`; verified that all touch targets satisfy $\ge 48\times 48\text{ px}$ with $\ge 8\text{ px}$ spacing; developed error categorization taxonomy (ERR-1 Slip, ERR-2 Mistake, ERR-3 Hesitation).
   - **To-do Tasks:** Act as Observer during live testing; log timestamps and error codes in real-time.
   - **Issues / Obstacles:** Distinguishing between ERR-1 (touch slip) and ERR-3 (hesitation) during rapid user finger movements. Standardized definition: hesitation is $>3\text{ s}$ pause without touching.

4. **Truong Cong Thien Phu (Content Lead / Co-Facilitator):**
   - **Completed Tasks:** Curated realistic match data from FIDE Freestyle Chess 2026; authored bilingual survey sheets (Demographic, SUS 10-item, 5-dimension Likert).
   - **To-do Tasks:** Assist Lead Facilitator during test sessions; conduct post-test qualitative interview.
   - **Issues / Obstacles:** Making sure survey questions in Vietnamese accurately convey the nuances of standard English SUS phrasing.

5. **Phung Ngoc Tuan (Lead Facilitator / Slide Lead):**
   - **Completed Tasks:** Recruited 6 participants ($P01 \rightarrow P06$) with balanced profiles (handedness, chess experience, mobile habits); completed test rehearsal dry-run.
   - **To-do Tasks:** Facilitate 6 user testing sessions on August 31 – September 02; begin constructing presentation slide structure.
   - **Issues / Obstacles:** Coordinating participant time slots across evening hours to ensure zero external noise interruptions during video recording.

#### Actions & Summary

- Prototype deployed successfully on Vercel (`testpa4.vercel.app`).
- Full testing setup approved; schedule locked for 6 sessions across 2 days.

---

### 4.2. Weekly Scrum Meeting 2 (Week 2 Review & Study Synthesis)

- **Date & Time:** September 03, 2026 · 21:00 – 22:30
- **Location:** Online (Google Meet: [https://meet.google.com/yat-svzi-mkm](https://meet.google.com/yat-svzi-mkm))
- **Members Present:** Le Mai Hoai Bao, Lam Huu Khanh, Pham Chi Bao Ninh, Truong Cong Thien Phu, Phung Ngoc Tuan (5/5)
- **Members Absent:** None

#### Status Reports by Member

1. **Le Mai Hoai Bao (Product Owner / Developer):**
   - **Completed Tasks:** Recorded over-the-shoulder video proofs for 6 sessions; uploaded videos to YouTube; recorded official 4-minute interactive Hi-fi Demo video (`jkVPSlJTUtY`).
   - **To-do Tasks:** Compile deliverable document `06-PA4-HifiPrototype.md`; package final ZIP.
   - **Issues / Obstacles:** Hand occlusion on camera for left-handed angle; adjusted camera position to $45^\circ$ right elevation.

2. **Lam Huu Khanh (Scrum Master / UX Researcher):**
   - **Completed Tasks:** Completed full quantitative data synthesis ($N=6$): Total TCT reduced by **$77.7\%$** ($118.6\text{ s} \rightarrow 26.5\text{ s}$), SUS increased from **$50.0$ (Grade D)** to **$85.8$ (Grade A)**, Slip errors eliminated ($3.5 \rightarrow 0.0$); validated all 4 hypotheses ($p < 0.001$).
   - **To-do Tasks:** Complete `06-PA4-SummativeUserStudy.md`; verify raw logs against video timestamps.
   - **Issues / Obstacles:** None; data distributions showed strong statistical significance across all metrics.

3. **Pham Chi Bao Ninh (UI Designer / Observer):**
   - **Completed Tasks:** Consolidated error logs: 0 ERR-1 slips observed on Prototype vs 21 total slips on Baseline; captured in-situ photos from testing sessions for presentation evidence.
   - **To-do Tasks:** Format visual cards and photo galleries for slide deck.
   - **Issues / Obstacles:** None.

4. **Truong Cong Thien Phu (Content Lead / Co-Facilitator):**
   - **Completed Tasks:** Transcribed and coded qualitative interviews into 3 core thematic clusters: (1) One-handed reachability, (2) Day-by-day schedule browsing, (3) Match card information density.
   - **To-do Tasks:** Draft future iteration design implications (auto-month threshold, direct date input).
   - **Issues / Obstacles:** None.

5. **Phung Ngoc Tuan (Lead Facilitator / Slide Lead):**
   - **Completed Tasks:** Completed all 6 test sessions ($P01 \rightarrow P06$); developed 17-slide interactive HTML deck (`PA4-assignment-briefing.html`) with embedded raw log modal, comparative bar charts, and 6 participant photo cards; authored 18-minute 4-speaker script.
   - **To-do Tasks:** Conduct full dry-run rehearsal with all 4 speakers and demo operator.
   - **Issues / Obstacles:** Slide 12 card grid layout required fine-tuning to fit 6 participant photos side-by-side gracefully at 1920×1080 resolution. Resolved via 6-column CSS grid.

#### Actions & Summary

- All 6 user testing sessions successfully completed and verified.
- Rehearsal scheduled for September 05; submission deadline set for September 06.

---

## 5. Weekly Task Tracking Table

| Week   | Member                | Assigned Task IDs & Details                                                                              | Output / Evidence Artifact        | Status | Notes & Role              |
| :----- | :-------------------- | :------------------------------------------------------------------------------------------------------- | :-------------------------------- | :----: | :------------------------ |
| **W1** | Le Mai Hoai Bao       | **TSK-01, TSK-03, TSK-05**: Setup React/Vite repo, build Bottom Nav & Match Detail 8×8 board.            | Codebase, Vercel deployment       |  Done  | Frontend & PO             |
| **W1** | Lam Huu Khanh         | **TSK-07, TSK-08**: Design Summative study protocol, Latin Square matrix, survey questionnaires.         | `SummativeUserStudy-Framework.md` |  Done  | UX Research Lead          |
| **W1** | Pham Chi Bao Ninh     | **TSK-02**: Design CSS tokens (`variables.css`), verify touch target boundaries $\ge 48\text{ px}$.      | `variables.css`, Error taxonomy   |  Done  | UI & Observation Lead     |
| **W1** | Truong Cong Thien Phu | **TSK-06, TSK-08**: Curate match/tournament dataset, prepare bilingual survey forms.                     | Dataset files, Survey forms       |  Done  | Content & Survey Lead     |
| **W1** | Phung Ngoc Tuan       | **TSK-09, TSK-10**: Recruit 6 participants, setup $45^\circ$ camera rig, conduct testing dry-run.        | Testing schedule & lab setup      |  Done  | Facilitation Lead         |
| **W2** | Le Mai Hoai Bao       | **TSK-10, TSK-13, TSK-16**: Record 6 video proofs, record 4-min interactive demo, package ZIP.           | 6 YouTube proofs + Demo video     |  Done  | Video Lead & Submitter    |
| **W2** | Lam Huu Khanh         | **TSK-12, TSK-15, TSK-16**: Analyze quantitative metrics (TCT/SUS/Likert), co-author speaker script.     | Quantitative log tables, Script   |  Done  | Data Analyst & Script     |
| **W2** | Pham Chi Bao Ninh     | **TSK-11, TSK-12**: Observe 6 test sessions, log ERR-1/2/3 codes, prepare photo evidence.                | Error log sheet, Photo assets     |  Done  | Observer & Evidence       |
| **W2** | Truong Cong Thien Phu | **TSK-11, TSK-12**: Co-facilitate testing, transcribe post-test interviews, qualitative thematic coding. | `06-PA4-ParticipantsReplies.md`   |  Done  | Interviewer & Qualitative |
| **W2** | Phung Ngoc Tuan       | **TSK-11, TSK-14, TSK-15**: Facilitate 6 sessions, build 17-slide HTML deck, lead speaker script.        | `PA4-assignment-briefing.html`    |  Done  | Slide Lead & Facilitator  |

---

## 6. Git Commit Tracking & Traceability Table

The table below maps representative repository commits to their corresponding tasks, dates, and authors:

| Commit Hash |   Date & Time (ISO 8601)    | Author                |  Task ID   | Commit Message / Description                                                                    | Linked Artifacts                  |
| :---------: | :-------------------------: | :-------------------- | :--------: | :---------------------------------------------------------------------------------------------- | :-------------------------------- |
|  `27e2bfa`  | `2026-08-27 14:15:20 +0700` | Le Mai Hoai Bao       | **TSK-04** | `feat: enhance DateStrip component with new date picker and smooth scrolling animations`        | `DateStrip.tsx`                   |
|  `3fb6c5c`  | `2026-08-28 10:22:14 +0700` | Le Mai Hoai Bao       | **TSK-04** | `feat: Add place holder for matches with no game`                                               | `Schedule.tsx`                    |
|  `92a7b97`  | `2026-08-28 16:40:05 +0700` | Truong Cong Thien Phu | **TSK-06** | `feat: add matches from FIDE Freestyle Chess World Championship 2026 to dataset`                | `matches.ts`                      |
|  `e1a0c53`  | `2026-08-29 11:18:42 +0700` | Le Mai Hoai Bao       | **TSK-01** | `feat: update more data and change some UI`                                                     | Prototype UI assets               |
|  `ca395b2`  | `2026-08-29 18:30:11 +0700` | Le Mai Hoai Bao       | **TSK-03** | `feat: add Rating page`                                                                         | `Rating.tsx`                      |
|  `c857636`  | `2026-08-30 09:45:18 +0700` | Phung Ngoc Tuan       | **TSK-15** | `Add speaker script for PA4 presentation on Freestyle Chess Mobile Web`                         | `PA4-speaker-script-VI.md`        |
|  `dd33430`  | `2026-08-30 15:20:00 +0700` | Pham Chi Bao Ninh     | **TSK-02** | `add paper prototype images`                                                                    | Reference assets                  |
|  `5d01c66`  | `2026-08-30 20:12:35 +0700` | Truong Cong Thien Phu | **TSK-08** | `feat: add demographic form, Likert satisfaction scale, and SUS questionnaire for user testing` | Survey documents                  |
|  `3845a2a`  | `2026-08-30 21:05:40 +0700` | Truong Cong Thien Phu | **TSK-08** | `docs: add interview guide for user testing feedback`                                           | `InterviewGuide.md`               |
|  `6a5d058`  | `2026-08-31 08:30:12 +0700` | Lam Huu Khanh         | **TSK-07** | `feat: add user study framework documentation`                                                  | `SummativeUserStudy-Framework.md` |
|  `097d389`  | `2026-08-31 10:15:00 +0700` | Truong Cong Thien Phu | **TSK-08** | `docs: rename demographic form, Likert satisfaction scale, and SUS questionnaire`               | Survey naming standardization     |
|  `89a846f`  | `2026-09-01 14:22:18 +0700` | Le Mai Hoai Bao       | **TSK-01** | `Refactor code structure for improved readability and maintainability`                          | Codebase refactor                 |
|  `4591c15`  | `2026-09-02 11:05:33 +0700` | Phung Ngoc Tuan       | **TSK-14** | `fix: adjust iframe image styling for better display`                                           | Slide UI components               |
|  `28ec814`  | `2026-09-02 16:40:12 +0700` | Phung Ngoc Tuan       | **TSK-14** | `docs: add agenda in slide`                                                                     | Presentation deck structure       |
|  `11cbe45`  | `2026-09-03 09:30:25 +0700` | Lam Huu Khanh         | **TSK-12** | `docs: add detailed verification testing documentation`                                         | `06-PA4-VerifyTesting.md`         |
|  `9fce968`  | `2026-09-03 14:10:00 +0700` | Truong Cong Thien Phu | **TSK-11** | `Add file to manage test participants results`                                                  | Logging framework                 |
|  `d3c5376`  | `2026-09-03 18:25:40 +0700` | Truong Cong Thien Phu | **TSK-11** | `Add data analysis for P01, P02, P03, P05, P06`                                                 | Participant reply logs            |
|  `92ef7e5`  | `2026-09-04 10:12:00 +0700` | Truong Cong Thien Phu | **TSK-11** | `docs: add participant 06 reply and analysis`                                                   | `06-PA4-ParticipantsReplies.md`   |
|  `fec9374`  | `2026-09-04 16:50:30 +0700` | Phung Ngoc Tuan       | **TSK-14** | `feat: add presentation slides, project documentation, and user study assets`                   | Slide deck & photo galleries      |
|  `c9f8bcb`  | `2026-09-05 11:20:15 +0700` | Le Mai Hoai Bao       | **TSK-16** | `feat: update slide and rename file for submission`                                             | Submission structure              |
|  `557ca00`  | `2026-09-06 14:18:22 +0700` | Phung Ngoc Tuan       | **TSK-13** | `fix: update video link for Participant P06 in replies document`                                | `06-PA4-ParticipantsReplies.md`   |
|  `3ee4c16`  | `2026-09-06 14:20:00 +0700` | Le Mai Hoai Bao       | **TSK-16** | `Merge branch 'main' of https://github.com/HB4305/TKGD-PA4`                                     | Branch synchronization            |

---

## 7. Sprint Review & Deliverables Evaluation

### 7.1. Deliverables Checklist vs. PA4 Assignment Requirements

| Assignment Requirement (PA4 Spec)                                                                                                                                                                                                                                                                                                                                                                                                | Group 06 Deliverable & Evidence                                                                                                                                                                                                                                                                                                                                                                                                                                      |       Status       |
| :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------: | --- |
| **Requirement 1: High-Fidelity Prototype (40%)**- Mobile web prototype implemented with high design fidelity.- Resolves PA2/PA3 user problems (`Nav-1` & `Sch-2`).- Fully interactive on mobile browsers (Home, Schedule, Match Detail).- Interactive 4-minute YouTube demo video link provided.                                                                                                                                 | - Responsive React + Vite web application deployed on Vercel:[https://testpa4.vercel.app](https://testpa4.vercel.app).- 3 complete screens: Home with ergonomic Thumb Zone, Schedule with Date Strip & Date Picker, Match Detail with 8×8 SVG chessboard.- YouTube Demo Video: [https://www.youtube.com/watch?v=jkVPSlJTUtY](https://www.youtube.com/watch?v=jkVPSlJTUtY).- Detailed architecture & component documentation delivered in `06-PA4-HifiPrototype.pdf`. | **100% Completed** |
| **Requirement 2: Summative Usability Study (40%)**- Within-subjects counterbalanced study design ($N \ge 5$, Group 06 conducted $N=6$).- Standardized protocol: Task 1 (Navigation) & Task 2 (Schedule lookup).- Quantitative metrics: TCT, Success Rate, Error taxonomy (ERR-1/2/3), SUS score, 5-dimension Likert.- Qualitative thematic analysis with participant quotes.- YouTube video proof links for all 6 test sessions. | - Complete study report in `06-PA4-SummativeUserStudy.pdf`.- 6 testing sessions ($P01 \rightarrow P06$) with Latin Square $AB/BA$ order.- 6 YouTube proof video links recorded with $45^\circ$ over-the-shoulder angle.- Statistically significant findings ($p < 0.001$) across all 4 formal hypotheses ($H_1$ to $H_4$).                                                                                                                                           | **100% Completed** |     |
| **Requirement 3: Live Demo & Presentation (10%)**- 15–20 minute presentation including a 4-minute live prototype run.- Slide deck summarizing problem framing, solutions, prototype, and study outcomes.- Prepared speaker script with time allocations.                                                                                                                                                                         | - 17-slide interactive Swiss Modern presentation deck (`PA4-assignment-briefing.html`).- Embedded interactive raw data modal & 6 in-situ photo gallery cards.- Comprehensive 18-minute 4-speaker script (`PA4-speaker-script-VI.md`).                                                                                                                                                                                                                                | **100% Completed** |
| **Requirement 4: Weekly Report (10%)**- Complete task tracking using RUP+Scrum template.- Document sprint planning, weekly scrums, and retrospective.- Git commit traceability and contribution breakdown.                                                                                                                                                                                                                       | - Full sprint documentation, meeting minutes, and commit mapping.- Delivered in `06-PA4-WeeklyReport.md` / `06-PA4-WeeklyReport.pdf`.                                                                                                                                                                                                                                                                                                                                | **100% Completed** |

---

### 7.2. Summative Usability Study Key Outcomes

- **Hypothesis $H_1$ (Efficiency / TCT Reduction):**
  - **Task 1 (One-Handed Navigation):** TCT decreased from **$36.3\text{ s}$** to **$11.8\text{ s}$** (**giảm $67.5\%$**, $p < 0.001$).
  - **Task 2 (Schedule & Match Detail):** TCT decreased from **$82.3\text{ s}$** to **$14.7\text{ s}$** (**giảm $82.1\%$**, $p < 0.001$).
  - **Total Time-on-Task:** Decreased by **$77.7\%$** overall ($118.6\text{ s} \rightarrow 26.5\text{ s}$).
- **Hypothesis $H_2$ (SUS Benchmark):**
  - SUS Score jumped by **$+35.8\text{ points}$**, from **$50.0 / 100$ (Grade D - Poor)** on Baseline to **$85.8 / 100$ (Grade A - Excellent)** on Prototype, far exceeding the industry average benchmark of $68.0$.
- **Hypothesis $H_3$ (Effectiveness & Error Reduction):**
  - Direct Task Success reached **$100\%$** on Prototype (vs $50\%$ on Baseline).
  - Slip Errors (ERR-1) were completely eliminated (**$0.0\text{ errors}$** vs $3.5\text{ errors/user}$ on Baseline) due to large touch targets ($\ge 48\times 48\text{ px}$) and thumb-zone optimization.
- **Hypothesis $H_4$ (Subjective Satisfaction):**
  - 5-dimension Likert score reached **$4.7 / 5.0$** (vs $2.9 / 5.0$ on Baseline), confirming overwhelming user preference for the redesigned interface.

---

### 7.3. Member Contribution Summary

| Team Member               |  Student ID  | Primary Roles & Key Contributions                                                                                               | Completion Quality | Contribution Score |
| :------------------------ | :----------: | :------------------------------------------------------------------------------------------------------------------------------ | :----------------: | :----------------: |
| **Le Mai Hoai Bao**       | **23127326** | Product Owner, React/Vite development, Vercel deployment, YouTube video proofs & demo production, repository governance.        |     Excellent      |      **100%**      |
| **Lam Huu Khanh**         | **23127205** | Scrum Master, Summative study experimental design, Latin Square matrix, statistical synthesis (TCT/SUS/Likert), report writing. |     Excellent      |      **100%**      |
| **Pham Chi Bao Ninh**     | **23127446** | UI Designer, CSS design tokens, touch target WCAG AAA compliance, live test observer & error classification.                    |     Excellent      |      **100%**      |
| **Truong Cong Thien Phu** | **23127455** | Content Lead, match/tournament dataset curation, survey questionnaires, co-facilitation, qualitative thematic synthesis.        |     Excellent      |      **100%**      |
| **Phung Ngoc Tuan**       | **23127510** | Testing Lead, participant logistics ($N=6$), lead test facilitator, Swiss Modern HTML presentation deck, speaker script.        |     Excellent      |      **100%**      |

---

## 8. Sprint Retrospective Meeting Minutes

- **Date & Time:** September 06, 2026 · 21:00 – 22:30
- **Location:** Online (Google Meet: [https://meet.google.com/yat-svzi-mkm](https://meet.google.com/yat-svzi-mkm))
- **Members Present:** All 5 members present (5/5)

### 8.1. What Went Well

- **Production-Grade Hi-fi Prototype:** Building the prototype in React + TypeScript with realistic animations and haptic-like visual states provided participants with a truly authentic app experience that felt native.
- **Flawless Counterbalancing Execution:** The Latin Square $AB/BA$ order distribution successfully canceled out carryover learning effects, providing rock-solid empirical data.
- **Interactive Presentation Engineering:** The self-contained Swiss Modern presentation (`PA4-assignment-briefing.html`) with embedded raw log modal, comparative SVG charts, and in-situ photo evidence created an exceptionally compelling visual narrative for the briefing.

### 8.2. What Went Wrong & Problems Encountered

- **Mobile Screen Glare under Outdoor Lighting:** Session P02 (outdoor cafe test) experienced sunlight reflection on the camera lens.
  - _Root Cause:_ Direct overhead midday sunlight at the cafe outdoor terrace.
  - _Correction:_ Adjusted camera exposure and rotated seating angle by $45^\circ$ to eliminate reflection.
- **Video Timestamp Cross-Referencing Overhead:** Manually verifying think-aloud quotes and micro-hesitations against 6 multi-gigabyte video files required substantial time.
  - _Root Cause:_ Note-taker initial timestamps were recorded via wristwatch rather than synced stopwatch.
  - _Correction:_ Re-synced all video audio tracks to central stopwatch timestamps during final data consolidation.

### 8.3. What Can Be Done Differently in Future Projects

- **Automated Telemetry Logging:** Embed lightweight client-side event logging (e.g., tap coordinates, time-per-screen) directly into the prototype code to automatically capture micro-timings alongside manual stopwatch logs.
- **Automated Monthly Boundary Scrolling:** As suggested by P01 and P03, implement auto-month header snapping when scrolling across date boundaries in future production releases.

### 8.4. Key Lessons Learned

- Summative usability testing with empirical rigor (counterbalancing, within-subjects, formal hypothesis testing) provides definitive, undeniable proof of design improvements that subjective opinions cannot refute.
- Investing effort into clean CSS tokens and component-driven architecture during early sprints pays massive dividends when adapting and polishing the final product.

---

## 9. Issues, Adjustments & Final Status

| Issue Identified                                                                                  | Impact on Project                                | Corrective Adjustment Made                                                                                       |
| :------------------------------------------------------------------------------------------------ | :----------------------------------------------- | :--------------------------------------------------------------------------------------------------------------- |
| Mobile browser navigation bars occluded bottom tabs on certain Android viewports.                 | Risk of touch target clipping for Bottom Nav.    | Added`padding-bottom: max(16px, env(safe-area-inset-bottom))` to keep tabs in prime Thumb Zone.                  |
| Baseline site lacked search and date filtering, causing participant P06 to exceed 120s timeout.   | Skewed baseline time-on-task variance.           | Recorded baseline completion as$120.0\text{ s}+$ (Timeout/Assist) according to standardized assistance protocol. |
| Slide 12 gallery required displaying 6 participant photos side-by-side without vertical clipping. | Risk of overcrowded visual cards on 16:9 canvas. | Implemented responsive 6-column CSS grid with card hover micro-animations and compact typography.                |

### Final Status

All Sprint 4 tasks for Project Assignment 4 (PA4) were completed 100% on schedule. All 5 team members maintained perfect attendance across all 4 sprint meetings and contributed equally to all deliverables. All 3 required submission files (`06-PA4-HifiPrototype.md`, `06-PA4-SummativeUserStudy.md`, `06-PA4-WeeklyReport.md`) have been verified, cross-checked against rubric criteria, and prepared for final packaging into `06-PA4.zip`.
