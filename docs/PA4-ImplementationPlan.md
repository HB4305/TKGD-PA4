# PA4 Implementation Plan — Freestyle Chess Mobile Web (Group 06)

## Bối cảnh & Mục tiêu

**Môn:** CSC13112 - Thiết kế giao diện | **Giảng viên:** TS. Lê Khánh Duy
**Tổng điểm:** 175/500 | **Deadline thuyết trình:** ~3/9/2026 | **Deadline nộp bài:** 6/9/2026
**Phương thức:** Vibe Coding (HTML/CSS/JS) — Web prototype chạy thật trên browser

### Kết quả đã đạt từ PA3

| Kết quả PA3 | Chi tiết |
| :--- | :--- |
| **Winning Nav** | `Nav-1`: Fixed Bottom Navigation Bar (5 tabs) |
| **Winning Schedule** | `Sch-2`: Date Strip + Match Detail (8x8 chessboard) |
| **4 điểm cải thiện bắt buộc** | ① Touch Target 48×48px ② Back Navigation ③ Quick Search + Filter Chips ④ Micro-Interactions |
| **Formative Testing** | 3 participants, between-subjects, 6 paper prototype variants |
| **Peer Review feedback** | Back buttons, testing session photos |

---

## Phân bổ điểm PA4

| Hạng mục | Trọng số | Điểm tuyệt đối |
| :--- | :---: | :---: |
| **Req 1: Hi-fi Prototype** | **55%** | **96.25 điểm** |
| **Req 2: Summative User Study** | **40%** | **70 điểm** |
| **Req 4: Weekly Report** | **5%** | **8.75 điểm** |

---

## Quyết định thiết kế (đã thống nhất)

| Quyết định | Lựa chọn |
| :--- | :--- |
| Công cụ prototype | **Vibe coding** (HTML/CSS/JS) — web chạy thật trên browser |
| Phạm vi màn hình | **3 màn hình**: Home + Schedule (Date Strip) + Match Detail (8x8) |
| Design theme | **Light mode clean** — nền trắng/xám nhạt, accent xanh dương/xanh lá |
| Dữ liệu content | **Dữ liệu thực** từ freestylechess.com (Magnus Carlsen, Lê Quang Liêm, Hikaru Nakamura...) |
| Số participants study | **5 người** |
| Study design | **Within-subjects** + counterbalancing |
| Baseline so sánh | **freestylechess.com** mobile web (sản phẩm gốc đang redesign) |
| Metrics | Task Completion Time, SUS, Task Success Rate, Error Count, Likert Satisfaction |
| Study tasks | Task 1: Navigate Home→Schedule (1 tay), Task 2: Tìm match 16/8 → Detail 8x8 |
| Presentation | 15–20 phút: Hi-fi walk-through + Study results + **Live demo trên browser** + Q&A |

---

## Proposed Changes — Chi tiết từng Deliverable

---

### 📦 Deliverable 1: Hi-fi Prototype (55% — 96.25 điểm)

#### Kiến trúc kỹ thuật

```
TKGD-PA4/
├── index.html              # Entry point — Home Screen
├── schedule.html           # Schedule Screen (Date Strip + Match cards)
├── match-detail.html       # Match Detail Screen (8x8 chessboard)
├── css/
│   ├── variables.css       # Design tokens (colors, spacing, typography, shadows)
│   ├── global.css          # Reset, base styles, font imports
│   ├── components.css      # Reusable component styles (nav, cards, buttons)
│   ├── home.css            # Home-specific styles
│   ├── schedule.css        # Schedule-specific styles
│   └── match-detail.css    # Match Detail-specific styles
├── js/
│   ├── navigation.js       # Bottom nav active state, page transitions
│   ├── schedule.js         # Date strip scroll, filter logic, card expand
│   ├── match-detail.js     # Chessboard render, piece placement, move animation
│   └── data.js             # Tournament/match/player data (hardcoded realistic data)
├── assets/
│   ├── icons/              # SVG icons (chess pieces, nav icons, back arrow)
│   └── images/             # Player headshots, tournament logos
└── docs/
    ├── PA4-LKDuy-2026-EN.md
    ├── PA4-LKDuy-2026-VI.md
    └── PA4-LKDuy-2026-Public.pdf
```

#### Màn hình 1: Home Screen (`index.html`)

| Element | Mô tả chi tiết |
| :--- | :--- |
| **Status Bar** | Thanh trạng thái giả lập (giờ, wifi, pin) — viewport 390×844 (iPhone 14) |
| **Header** | Logo Freestyle Chess + greeting text |
| **Hero Banner** | Live tournament banner — "Freestyle Chess Grand Slam 2025" với countdown timer, gradient background |
| **Quick Stats** | 3 stat cards: "Live Matches", "Players", "Upcoming Events" |
| **Featured Match** | Card nổi bật: Carlsen vs Lê Quang Liêm, avatar 2 bên, ELO rating, "Watch Live" CTA |
| **Recent News** | 2–3 news preview cards (thumbnail + title + date) |
| **Bottom Navigation Bar** | 5 tabs: Schedule, Videos, **Home** (active), News, More — icon + label, active state highlight xanh |

> [!IMPORTANT]
> Bottom Nav phải đảm bảo touch target ≥ 48×48px, spacing ≥ 8px giữa các icon (WCAG AAA — điểm cải thiện #1 từ PA3).

#### Màn hình 2: Schedule Screen (`schedule.html`)

| Element | Mô tả chi tiết |
| :--- | :--- |
| **Top App Bar** | `< Back` button (top-left, ≥ 48×48px) + "Schedule" title + Search icon |
| **Search Bar** | Expandable search input: gõ tên cầu thủ để filter (cải thiện #3 từ PA3) |
| **Filter Chips** | Horizontal scroll: `Live` (xanh lá pulse), `Upcoming` (xanh dương), `Finished` (xám) — cải thiện #3 từ PA3 |
| **Date Strip** | Horizontal scrollable strip hiển thị 7 ngày — active date highlight xanh, smooth scroll animation |
| **Match Cards** | Expandable cards: Tournament name → tap để mở → danh sách matchup pairs (Avatar + Tên + ELO + Score) |
| **Detail Button** | `Detail →` button trên mỗi matchup card → navigate sang Match Detail screen |
| **Bottom Navigation** | 5 tabs: **Schedule** (active), Videos, Home, News, More |

> [!IMPORTANT]
> Date Strip phải có micro-animation khi chuyển ngày (smooth scroll + scale-up active date) — điểm cải thiện #4 từ PA3.

#### Màn hình 3: Match Detail Screen (`match-detail.html`)

| Element | Mô tả chi tiết |
| :--- | :--- |
| **Sticky Top Bar** | `< Back` button + "Match Detail" title + Share icon |
| **Player Info Banner** | 2 cột đối xứng: Player A (avatar, tên, ELO, flag) vs Player B — score ở giữa |
| **8×8 Chessboard** | Interactive SVG/Canvas chessboard — hiển thị vị trí quân cờ thực tế, có thể tap piece để highlight |
| **Move List** | Scrollable danh sách nước đi (algebraic notation): 1. e4 e5 2. Nf3 Nc6... |
| **Game Stats** | Bar charts mini: Accuracy %, Time used, Material advantage |
| **Bottom Navigation** | 5 tabs: Schedule, Videos, Home, News, More (none active trên detail screen) |

#### Design System — CSS Custom Properties

```css
:root {
  /* Colors — Light Clean Theme */
  --color-bg-primary: #FFFFFF;
  --color-bg-secondary: #F5F7FA;
  --color-bg-card: #FFFFFF;
  --color-accent-primary: #2563EB;      /* Blue — chủ đạo */
  --color-accent-secondary: #10B981;    /* Green — live/success */
  --color-text-primary: #1A1A2E;
  --color-text-secondary: #6B7280;
  --color-border: #E5E7EB;
  --color-nav-active: #2563EB;
  --color-nav-inactive: #9CA3AF;
  
  /* Typography — Google Fonts */
  --font-primary: 'Inter', sans-serif;
  --font-display: 'Outfit', sans-serif;
  
  /* Spacing */
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 32px;
  
  /* Touch Targets (WCAG AAA) */
  --touch-target-min: 48px;
  --touch-spacing-min: 8px;
  
  /* Shadows */
  --shadow-card: 0 2px 8px rgba(0,0,0,0.08);
  --shadow-elevated: 0 4px 16px rgba(0,0,0,0.12);
  
  /* Animations */
  --transition-fast: 150ms ease;
  --transition-normal: 250ms ease;
  --transition-slow: 350ms ease;
  
  /* Border Radius */
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --radius-full: 9999px;
}
```

#### Micro-Interactions & Animations (Cải thiện #4 từ PA3)

| Interaction | Animation | Duration |
| :--- | :--- | :---: |
| Bottom Nav tap | Icon scale(1.15) + color transition + ripple effect | 150ms |
| Date Strip select | Scale-up active date + slide indicator + haptic hint | 200ms |
| Match card expand | Height auto-expand + chevron rotate 180° | 250ms |
| Page transition | Slide-in from right + fade | 300ms |
| Back navigation | Slide-out to right + fade | 250ms |
| `Detail →` button hover | Background fill + translateX(4px) arrow | 200ms |
| Search bar expand | Width expand + focus glow ring | 250ms |
| Live indicator | Pulsing green dot (infinite) | 1.5s loop |

---

### 📊 Deliverable 2: Summative User Study (40% — 70 điểm)

#### 2.1. Study Design Overview

| Thiết kế | Chi tiết |
| :--- | :--- |
| **Loại nghiên cứu** | Summative Usability Study |
| **Thiết kế thí nghiệm** | Within-subjects (repeated measures) |
| **Counterbalancing** | AB/BA — P1,P3,P5 test freestylechess.com trước; P2,P4 test prototype trước |
| **Số participants** | 5 người (≥ yêu cầu tối thiểu) |
| **Hệ thống so sánh** | Prototype (nhóm) vs. freestylechess.com mobile web (baseline) |
| **Quay video** | Bắt buộc tất cả sessions |

#### 2.2. Quy trình Testing (cho mỗi participant)

```
[1] Giới thiệu & đồng ý tham gia (2 phút)
    ↓
[2] Demographic questionnaire (1 phút)
    ↓
[3] System A — Thực hiện Task 1 & Task 2 (đo TCT, Error Count, Success Rate)
    ↓
[4] Post-System A: SUS Questionnaire + Likert Satisfaction (3 phút)
    ↓
[5] Nghỉ 2 phút (wash-out period)
    ↓
[6] System B — Thực hiện Task 1 & Task 2 (đo TCT, Error Count, Success Rate)
    ↓
[7] Post-System B: SUS Questionnaire + Likert Satisfaction (3 phút)
    ↓
[8] Post-study interview — So sánh 2 hệ thống, ưu/nhược điểm (3 phút)
    ↓
[9] Cảm ơn & kết thúc (1 phút)
```

**Tổng thời gian mỗi session:** ~20 phút/participant

#### 2.3. Tasks chi tiết

| Task | Scenario | Hành động kỳ vọng | Success Criteria |
| :--- | :--- | :--- | :--- |
| **Task 1** | "Bạn đang cầm điện thoại 1 tay khi đi bộ. Hãy mở trang Schedule." | Tap "Schedule" trên bottom nav (prototype) hoặc tìm cách navigate trên freestylechess.com | Đến được trang Schedule thành công |
| **Task 2** | "Tìm trận đấu ngày 16/8 giữa Carlsen và Lê Quang Liêm, xem chi tiết bàn cờ." | Chọn ngày trên date strip → expand match card → tap Detail → xem 8x8 board | Nhìn thấy bàn cờ chi tiết + thông tin trận đấu |

#### 2.4. Metrics thu thập

| Metric | Loại | Cách đo | Mục đích |
| :--- | :--- | :--- | :--- |
| **Task Completion Time** | Quantitative | Bấm giờ (stopwatch) từ lúc đọc task → hoàn thành | So sánh tốc độ prototype vs baseline |
| **Task Success Rate** | Quantitative | Binary: Success / Fail / Partial (cần hint) | Đánh giá effectiveness |
| **Error Count** | Quantitative | Đếm: tap nhầm, quay lại, lạc hướng | Đánh giá efficiency |
| **SUS Score** | Quantitative | 10 câu hỏi chuẩn, thang 1–5, quy đổi 0–100 | Benchmark usability tổng thể |
| **Likert Satisfaction** | Quantitative | 5 khía cạnh × thang 1–5: Ease of use, Aesthetics, Speed, Navigation clarity, Overall satisfaction | Đánh giá chi tiết trải nghiệm |

#### 2.5. Questionnaires cần chuẩn bị

1. **Demographic Questionnaire** — Tuổi, giới tính, nghề nghiệp, mức độ quen thuộc với chess apps (1–5)
2. **SUS Questionnaire** — 10 câu chuẩn hóa (dịch song ngữ Anh–Việt)
3. **Likert Satisfaction Scale** — 5 câu custom cho Freestyle Chess
4. **Post-Study Interview Guide** — 5–7 câu hỏi mở: "Bạn thích/không thích gì?", "So sánh 2 hệ thống?", v.v.

#### 2.6. Data Analysis Plan

| Phân tích | Phương pháp | Output |
| :--- | :--- | :--- |
| TCT comparison | Bar chart: Prototype vs Baseline (mean ± SD) | Chart + bảng thống kê |
| SUS Score | Tính điểm SUS, so sánh với benchmark (68 = average) | Adjective rating + chart |
| Success Rate | Bảng tổng hợp 5 participants × 2 tasks × 2 systems | Percentage table |
| Error analysis | Bảng tổng hợp error count + phân loại lỗi | Error type table |
| Likert results | Radar/spider chart 5 khía cạnh | Radar chart |
| Qualitative themes | Thematic coding từ interview quotes | Quote table + themes |

---

### 📋 Deliverable 3: Presentation/Demo (15–20 phút)

| Phần | Thời lượng | Người trình bày (đề xuất) | Nội dung |
| :--- | :---: | :--- | :--- |
| **Opening** | 1 phút | Hoai Bao (PO) | Giới thiệu nhóm, recap PA3 → PA4 transition |
| **Hi-fi Design System** | 4 phút | Lam Huu Khanh | Design tokens, component library, 4 improvements từ PA3 |
| **Study Methodology** | 3 phút | Thien Phu (UX Researcher) | Study design, metrics, procedure, counterbalancing |
| **Study Results & Data** | 5 phút | Ngoc Tuan (Testing Lead) | TCT charts, SUS scores, error analysis, key findings |
| **Live Demo** | 4 phút | Bao Ninh (Prototype Lead) | Demo thật trên browser — navigate Home → Schedule → Match Detail |
| **Conclusion & Q&A** | 3 phút | Hoai Bao | Key takeaways, lessons learned, Q&A |

> [!TIP]
> Lợi thế cực lớn: Vì dùng vibe coding, nhóm có thể **live demo thật** trên browser thay vì chiếu video/Figma. Đây sẽ là điểm gây ấn tượng mạnh nhất với giảng viên.

---

### 📝 Deliverable 4: Weekly Report (5% — 8.75 điểm)

Sử dụng template từ Google Drive, track công việc từng thành viên theo tuần.

---

## Phân công công việc — Team Allocation

> [!IMPORTANT]
> Deadline cực gấp: **~4 ngày** đến thuyết trình (3/9), **~7 ngày** đến nộp bài (6/9).
> Tất cả workstreams phải chạy **song song**.

### Workstream A: Hi-fi Prototype (2 người)

| Thành viên | Vai trò | Nhiệm vụ cụ thể |
| :--- | :--- | :--- |
| **Lam Huu Khanh** (Scrum Master) | Lead Developer | Design system (CSS variables), Home screen, Bottom Nav, page transitions, micro-animations |
| **Pham Chi Bao Ninh** (Prototype Lead) | Developer | Schedule screen (date strip, filter chips, match cards), Match Detail screen (8×8 chessboard) |

### Workstream B: Summative User Study (2 người)

| Thành viên | Vai trò | Nhiệm vụ cụ thể |
| :--- | :--- | :--- |
| **Truong Cong Thien Phu** (UX Researcher) | Study Design Lead | Viết study plan, thiết kế questionnaires (SUS, Likert, Demographic), interview guide, counterbalancing schedule |
| **Phung Ngoc Tuan** (Testing Lead) | Testing Coordinator | Mời 5 participants, lên lịch sessions, quay video, thu thập data, tổng hợp kết quả |

### Workstream C: Presentation + Reports (1 người + hỗ trợ)

| Thành viên | Vai trò | Nhiệm vụ cụ thể |
| :--- | :--- | :--- |
| **Le Mai Hoai Bao** (Product Owner) | Report & Presentation Lead | Xây dựng presentation slide deck, weekly report, tổng hợp deliverables, đóng gói nộp bài |

---

## Timeline chi tiết — Sprint tối ưu

### Ngày 1–2 (30–31/8): Foundation Sprint

| Ai | Làm gì |
| :--- | :--- |
| Khanh + Ninh | ✅ Setup project structure, CSS design system, Home screen layout, Bottom Nav component |
| Thien Phu | ✅ Hoàn thành study plan, SUS questionnaire, demographic form, interview guide |
| Ngoc Tuan | ✅ Liên hệ 5 participants, lên lịch test sessions (target: ngày 2–3/9) |
| Hoai Bao | ✅ Khởi tạo presentation template, weekly report tuần 1 |

### Ngày 3–4 (1–2/9): Build Sprint

| Ai | Làm gì |
| :--- | :--- |
| Khanh + Ninh | ✅ Schedule screen hoàn chỉnh (date strip + filter + cards) + Match Detail (8×8 board) + Micro-animations |
| Thien Phu + Tuan | ✅ Pilot test (thử với 1 thành viên nhóm) → chỉnh questionnaire nếu cần |
| Hoai Bao | ✅ Chuẩn bị nội dung presentation: Hi-fi walkthrough section |

### Ngày 5 (3/9): 🎤 PRESENTATION DAY

| Ai | Làm gì |
| :--- | :--- |
| Cả nhóm | 🎤 Thuyết trình 15–20 phút, live demo prototype trên browser |

### Ngày 5–6 (3–5/9): User Study Sprint (sau thuyết trình)

| Ai | Làm gì |
| :--- | :--- |
| Thien Phu + Tuan | ✅ Tiến hành 5 sessions user study (quay video), thu thập data |
| Khanh + Ninh | ✅ Polish prototype dựa trên feedback từ thuyết trình, fix bugs |
| Hoai Bao | ✅ Bắt đầu viết báo cáo Summative User Study |

### Ngày 7 (6/9): 📦 SUBMISSION

| Ai | Làm gì |
| :--- | :--- |
| Thien Phu + Tuan | ✅ Phân tích data, hoàn thành charts/tables |
| Hoai Bao | ✅ Finalize 3 PDFs + demo video YouTube + đóng gói `06-PA4.zip` |
| Cả nhóm | ✅ Review chéo → NỘP BÀI |

---

## Hồ sơ nộp bài

| File | Nội dung |
| :--- | :--- |
| `06-PA4-HifiPrototype.pdf` | Trang 1: YouTube demo link. Tài liệu design system, screen captures, user flow diagrams |
| `06-PA4-SummativeUserStudy.pdf` | Study plan, procedure, questionnaires, raw data, analysis, charts, findings |
| `06-PA4-WeeklyReport.pdf` | Theo template Google Drive — 2 tuần |
| **Đóng gói:** `06-PA4.zip` | Tất cả PDFs + source code prototype |

---

## Verification Plan

### Automated / Technical
- Mở prototype trên Chrome DevTools mobile emulation (iPhone 14, 390×844)
- Kiểm tra tất cả navigation flows: Home → Schedule → Match Detail → Back
- Verify touch targets ≥ 48×48px bằng Chrome Accessibility audit
- Test trên thiết bị thật (smartphone) qua `python -m http.server`

### Manual Verification
- Mỗi thành viên tự test prototype trước khi demo
- Pilot test user study với 1 thành viên nhóm
- Review chéo tất cả deliverables trước khi nộp
- Chạy thử presentation đủ 15–20 phút

---

## Open Questions

> [!IMPORTANT]
> **Q1:** Ngày thuyết trình chính xác là ngày nào? (Bạn đề cập "có thể 3/9" — cần xác nhận với lớp/giảng viên)

> [!IMPORTANT]
> **Q2:** User study có thể tiến hành song song hoặc sau thuyết trình không? (Trong kế hoạch tôi đã bố trí linh hoạt: nếu study xong trước 3/9 thì càng tốt, nếu không thì sau thuyết trình vẫn kịp deadline 6/9)

> [!NOTE]
> **Q3:** Ảnh thật player headshots — nhóm tự tìm từ Wikipedia/chess24 hay tôi generate placeholder? Cần xác nhận bản quyền hình ảnh cho mục đích academic.
