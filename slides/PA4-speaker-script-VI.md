# KỊCH BẢN THUYẾT TRÌNH ĐỒ ÁN PA4 (SPEAKER SCRIPT)
## ĐỀ TÀI: REDESIGN FREESTYLE CHESS MOBILE WEB
**Môn học:** CSC13112 - Thiết kế giao diện (UI/UX Design)  
**Giảng viên hướng dẫn:** TS. Lê Khánh Duy | **Trợ giảng:** ThS. Phạm Nguyễn Sơn Tùng  
**Nhóm thực hiện:** Nhóm 06 (4 Người thuyết trình chính + 1 Demo Operator)  
**Thời lượng chuẩn:** 16 – 18 phút (bao gồm 4 phút Live Demo tương tác)  
**Tài liệu tham chiếu:** `docs/PA4-LKDuy-2026-VI.md`, `docs/06-PA4-SummativeUserStudy-Framework.md`, `docs/06-PA4-ParticipantsReplies.md`

---

## ⏱️ BẢNG PHÂN BỔ 4 NGƯỜI THUYẾT TRÌNH (4-SPEAKER ROTATION MATRIX)

| Speaker | Phạm vi Slide / Trọng tâm phụ trách | Các Slide đảm trách | Thời lượng ước tính |
| :--- | :--- | :---: | :---: |
| **SPEAKER 1** | **Bối cảnh, Động lực & Giải pháp kế thừa PA3**<br>• Giới thiệu đồ án, Agenda, Problem framing 2 lỗi khả dụng di động.<br>• 2 Giải pháp thắng cuộc từ Formative Testing PA3 (`Nav-1`, `Sch-2`). | **Slide 01 $\rightarrow$ Slide 05** | **~4.0 phút** |
| **SPEAKER 2** | **Requirement 1 — Hiện thực hóa Hi-fi Prototype**<br>• 4 Tiêu chuẩn công thái học chuyển dịch từ PA3 sang Hi-fi.<br>• Kiến trúc & chi tiết 3 màn hình cốt lõi (*Home, Schedule, Match Detail*). | **Slide 06 $\rightarrow$ Slide 09** | **~4.0 phút** |
| **SPEAKER 3** | **Requirement 2 — Nghiên cứu Người dùng Tổng kết**<br>• Thiết kế thí nghiệm đối chứng ($N=6$, Within-subjects, Latin Square).<br>• 2 Tác vụ chuẩn hóa, Kết quả Định lượng (TCT, SUS 85.8) & Định tính. | **Slide 10 $\rightarrow$ Slide 13** | **~4.5 phút** |
| **SPEAKER 4** | **Requirement 3 — Live Demo Trực tiếp & Kết luận**<br>• Thuyết minh trực tiếp 4 phút Live Demo trên Browser (cùng Operator).<br>• 3 Trụ cột kết luận, bài học thiết kế, lộ trình & Điều phối Q&A. | **Slide 14 $\rightarrow$ Slide 15**<br>*(+ Q&A Lead)* | **~5.0 phút** |

---

## 🎤 CHI TIẾT LỜI THOẠI PHÂN VAI TỪNG SLIDE (WORD-FOR-WORD SCRIPT)

---

### 🎙️ PHẦN 1: BỐI CẢNH & GIẢI PHÁP KẾ THỪA PA3 (SPEAKER 1)

---

#### SLIDE 01: TIÊU ĐỀ & GIỚI THIỆU ĐỒ ÁN PA4
* **Người trình bày:** **SPEAKER 1**
* **Thời lượng:** 01 phút 00 giây
* **Tiêu đề Slide:** `Freestyle Chess Mobile Web Redesign` / `High-Fidelity Prototype & Summative User Study`
* **Visual:** Bố cục Swiss Modern lớn, Hero Logo Freestyle Chess, Badges kỹ thuật và Danh sách thành viên.

> **[LỜI THOẠI SPEAKER 1]:**  
> *"Kính chào Thầy Lê Khánh Duy, Thầy Phạm Nguyễn Sơn Tùng cùng toàn thể các bạn!  
> 
> Em là **[Tên Speaker 1]**, đại diện cho Nhóm 06 trình bày báo cáo đồ án **Project Assignment 4** với đề tài: **Tái thiết kế giao diện Mobile Web cho giải đấu Cờ vua Biến thể Freestyle Chess**.  
> 
> Kế thừa các bằng chứng định hình từ nguyên mẫu giấy ở PA3, mục tiêu cốt lõi của nhóm trong PA4 hôm nay bao gồm:  
> 1. **Requirement 1 — Xây dựng bản Nguyên mẫu độ trung thực cao (Hi-fi Prototype)** hoàn chỉnh, có tương tác thật bằng mã nguồn web React và TypeScript.  
> 2. **Requirement 2 — Tiến hành Đánh giá Tổng kết (Summative Usability Study)** với 6 người dùng thực tế theo mô hình đối chứng khoa học để chứng minh tính vượt trội của thiết kế mới so với website gốc.  
> 3. **Requirement 3 — Trình diễn Tương tác Trực tiếp (Live Interactive Demo)** trên trình duyệt di động để kiểm chứng trải nghiệm mượt mà trong thực tế."*

---

#### SLIDE 02: AGENDA — BỐ CỤC BÀI BÁO CÁO 5 PHẦN
* **Người trình bày:** **SPEAKER 1**
* **Thời lượng:** 00 phút 30 giây
* **Tiêu đề Slide:** `Agenda: Presentation Flow`
* **Visual:** Bố cục 2 cột Swiss Modern + Watermark quân Tốt cờ vua.

> **[LỜI THOẠI SPEAKER 1]:**  
> *"Bài báo cáo của nhóm được phân bổ đồng đều qua 5 nội dung chính:  
> 1. **Problem Framing:** 2 điểm nghẽn trải nghiệm di động trên website hiện tại.  
> 2. **Selected Solutions:** 2 giải pháp cốt lõi `Nav-1` và `Sch-2` kế thừa từ thử nghiệm PA3.  
> 3. **Hi-fi Prototype (Requirement 1):** Kiến trúc và hành trình 3 màn hình tương tác thật.  
> 4. **Summative User Study (Requirement 2):** Phương pháp luận và kết quả thực nghiệm với 6 người dùng.  
> 5. **Live Demo & Next Steps (Requirement 3):** 4 phút demo trực tiếp trên trình duyệt và hướng phát triển tiếp theo."*

---

#### SLIDE 03: BỐI CẢNH & 2 VẤN ĐỀ KHẢ DỤNG CỐT LÕI (PROBLEM FRAMING)
* **Người trình bày:** **SPEAKER 1**
* **Thời lượng:** 01 phút 00 giây
* **Tiêu đề Slide:** `Two current screens expose two core problems.`
* **Visual:** Ảnh chụp thực tế website di động gốc `freestylechess.com` (Menu Hamburger & Trang Schedule).

> **[LỜI THOẠI SPEAKER 1]:**  
> *"Thưa Thầy và các bạn, trước khi bắt tay vào thiết kế, nhóm đã phân tích sâu phiên bản di động hiện tại của `freestylechess.com` và xác định 2 điểm nghẽn nghiêm trọng phá vỡ trải nghiệm người dùng:  
> 
> * **Vấn đề thứ nhất — Điều hướng ngoài tầm với ngón cái (Ergonomic Breakdown):**  
>   Nút Hamburger Menu của trang web hiện tại được đặt ở góc trên cùng bên trái. Theo bản đồ nhiệt ngón tay cái của Steven Hoober (Thumb Zone), đây là **'Vùng cấm địa' (Ow Zone)** khi người dùng cầm máy bằng một tay. Khi mở ra, menu chiếm trọn toàn màn hình, che khuất toàn bộ nội dung đang đọc và bắt buộc người dùng phải dùng cả hai tay để thao tác.  
> 
> * **Vấn đề thứ hai — Trang Lịch thi đấu nghèo nàn thông tin (Information Architecture Gap):**  
>   Khi truy cập trang Schedule hiện tại, người dùng chỉ nhìn thấy một danh sách dài các sự kiện dạng thẻ tin tức đơn điệu, chỉ có ngày và địa điểm chung chung kèm nút 'Read More' nhỏ xíu. Trang hoàn toàn **thiếu vắng thông tin cặp đấu, tên kỳ thủ, trạng thái ván đấu trực tiếp, tỷ số và thế trận bàn cờ**. Người xem cờ vua không thể biết được ván đấu mình quan tâm đang diễn ra như thế nào.  
> 
> Đây chính là 2 bài toán cốt lõi mà PA4 phải giải quyết triệt để."*

---

#### SLIDE 04: KẾ THỪA PA3: GIẢI PHÁP 1 — FIXED BOTTOM NAVIGATION (`Nav-1`)
* **Người trình bày:** **SPEAKER 1**
* **Thời lượng:** 01 phút 00 giây
* **Tiêu đề Slide:** `Selected solution 1 · Nav-1: Fixed bottom navigation`
* **Visual:** Ảnh chụp nguyên mẫu giấy biến thể `Nav-1` từ PA3.

> **[LỜI THOẠI SPEAKER 1]:**  
> *"Để giải quyết vấn đề điều hướng một tay, tại PA3 nhóm đã thử nghiệm đối chứng 3 biến thể Paper Prototype (Floating Action Button, Fullscreen Modal và Fixed Bottom Bar).  
> 
> Kết quả thử nghiệm định hình đã chỉ ra phương án chiến thắng tuyệt đối là **`Nav-1: Fixed Bottom Navigation Bar`** với 5 tab chức năng chính.  
> 
> Lý do chiến thắng rất rõ ràng:  
> - 5 tab quan trọng nhất (*Schedule, Videos, Home, News, More*) luôn hiển thị cố định ở đáy màn hình — nằm trọn trong **'Vùng tự nhiên của ngón cái' (Natural Thumb Zone)**.  
> - Người dùng chỉ mất đúng **1 chạm** là chuyển ngay đến trang mong muốn mà không cần mở menu phụ.  
> - Nút 'More' ở góc phải hỗ trợ truy cập các mục phụ mà không bao giờ che khuất thanh điều hướng chính."*

---

#### SLIDE 05: KẾ THỪA PA3: GIẢI PHÁP 2 — DATE STRIP & MATCH DETAIL (`Sch-2`)
* **Người trình bày:** **SPEAKER 1**
* **Thời lượng:** 01 phút 00 giây
* **Tiêu đề Slide:** `Selected solution 2 · Sch-2: Date strip + Match detail`
* **Visual:** Ảnh chụp nguyên mẫu giấy `Sch-2` từ PA3.

> **[LỜI THOẠI SPEAKER 1]:**  
> *"Đối với trang Lịch thi đấu, từ 3 biến thể ở PA3, nhóm đã lựa chọn giải pháp **`Sch-2: Date Strip kết hợp Match Detail`**.  
> 
> Thay vì bắt người dùng cuộn vô tận trên một trang dài gây mỏi mắt (Scrolling Fatigue), `Sch-2` áp dụng mô hình:  
> 1. **Thanh trượt ngày nằm ngang (Horizontal Date Strip):** Giúp người dùng chọn nhanh bất kỳ ngày nào trong tuần chỉ bằng thao tác vuốt nhẹ.  
> 2. **Thẻ trận đấu cô đọng (Matchup Cards):** Hiển thị ngay tên 2 kỳ thủ, ảnh đại diện, hệ số ELO và tỷ số ván đấu.  
> 3. **Cửa ngõ dẫn tới Bàn cờ 8×8 (Dedicated Match Detail):** Nút 'Chi tiết' dẫn thẳng người dùng vào màn hình phân tích thế trận bàn cờ trực quan.  
> 
> *(Chuyển giao)*: Để trình bày chi tiết cách nhóm hiện thực hóa các giải pháp này thành bản Hi-fi Prototype hoàn chỉnh ở **Requirement 1**, em xin nhường lời lại cho bạn **[Tên Speaker 2]**."*

---

### 🎙️ PHẦN 2: REQUIREMENT 1 — HI-FI PROTOTYPE (SPEAKER 2)

---

#### SLIDE 06: CHUYỂN DỊCH PA3 $\rightarrow$ PA4: 4 TIÊU CHUẨN THIẾT KẾ CÔNG THÁI HỌC
* **Người trình bày:** **SPEAKER 2**
* **Thời lượng:** 01 phút 00 giây
* **Tiêu đề Slide:** `PA4 · Implementation criteria: Four findings became four product constraints.`
* **Visual:** 4 Cam kết kỹ thuật dạng lưới chuẩn Swiss Modern.

> **[LỜI THOẠI SPEAKER 2]:**  
> *"Xin cảm ơn bạn [Tên Speaker 1]. Kính chào Thầy và các bạn, em là **[Tên Speaker 2]**, em xin phụ trách trình bày **Requirement 1** của đồ án.  
> 
> Từ những lỗi thao tác và ngập ngừng mà người dùng gặp phải trong đợt thử nghiệm PA3, nhóm đã thiết lập **4 tiêu chuẩn kỹ thuật bắt buộc** khi hiện thực hóa bản Hi-fi Prototype:  
> 
> 1. **Kích thước vùng chạm $\ge 48\times 48\text{ px}$:** Toàn bộ icon, tab điều hướng và nút bấm đều tuân thủ nghiêm ngặt tiêu chuẩn tiếp cận **WCAG AAA**, loại bỏ hoàn toàn lỗi chạm trượt (Slip Errors).  
> 2. **Nút Back rõ ràng và bảo toàn ngữ cảnh (Explicit Back Navigation):** Nút quay lại luôn được ghim ở góc trên màn hình chi tiết, cho phép quay về đúng vị trí ngày và bộ lọc đang chọn trên trang Schedule mà không bị tải lại trang.  
> 3. **Thanh tìm kiếm nhanh & Filter Chips trạng thái:** Cho phép tìm ngay kỳ thủ ưa thích hoặc lọc các trận 'Đang đấu' (Live), 'Sắp diễn ra' (Upcoming), 'Đã kết thúc' (Finished).  
> 4. **Phản hồi vi tương tác mượt mà (Micro-interactions $< 250\text{ ms}$):** Hiệu ứng chuyển tab, active indicator và scale-up ngày được tối ưu tức thì, mang lại cảm giác ứng dụng di động bản địa (Native Mobile App feel)."*

---

#### SLIDE 07: REQUIREMENT 1: KIẾN TRÚC HI-FI PROTOTYPE (HÀNH TRÌNH 3 MÀN HÌNH)
* **Người trình bày:** **SPEAKER 2**
* **Thời lượng:** 01 phút 00 giây
* **Tiêu đề Slide:** `Requirement 1 · Prototype Scope: One complete journey across three screens.`
* **Visual:** Layout 3 thiết bị điện thoại hiển thị: Home $\rightarrow$ Schedule $\rightarrow$ Match Detail.

> **[LỜI THOẠI SPEAKER 2]:**  
> *"Về mặt kỹ thuật, nhóm đã xây dựng bản Hi-fi Prototype bằng **React, TypeScript và CSS thuần hiện đại**, đóng gói trên nền tảng Vite để đảm bảo tốc độ phản hồi 60 khung hình/giây trên mọi trình duyệt di động.  
> 
> Bản prototype bao quát một hành trình người dùng liền mạch qua 3 màn hình cốt lõi:  
> - **Màn hình Home:** Đón người dùng với thông tin giải đấu nổi bật và thanh điều hướng 5 tab.  
> - **Màn hình Schedule:** Cung cấp bộ lọc ngày Date Strip, tìm kiếm kỳ thủ và danh sách các cặp đấu.  
> - **Màn hình Match Detail:** Hiển thị chi tiết ván đấu đối kháng, lịch sử nước đi và bàn cờ 8×8 có thể tương tác."*

---

#### SLIDE 08: REQUIREMENT 1: CHI TIẾT HOME & SCHEDULE (NAV-1 & SCH-2 IN ACTION)
* **Người trình bày:** **SPEAKER 2**
* **Thời lượng:** 01 phút 30 giây
* **Tiêu đề Slide:** `Requirement 1 · Home & Schedule: Persistent navigation meets rapid date retrieval.`
* **Visual:** Mockup chi tiết Home (kèm menu More mở rộng) và Schedule (Date Strip + Filter Chips).

> **[LỜI THOẠI SPEAKER 2]:**  
> *"Đi sâu vào chi tiết thiết kế của Requirement 1:  
> 
> - **Tại Màn hình Home:** Chúng em sử dụng phong cách **Light Mode Clean** cao cấp, màu chữ tương phản cao trên nền sáng giúp đọc ngoài trời nắng tốt. Banner giải đấu Grand Slam được nhấn mạnh bằng CTA 'View Schedule' màu xanh chủ đạo. Khi nhấn vào tab 'More', một Action Sheet trượt lên êm ái, cho phép truy cập các trang phụ như Standings, Players hay Rules.  
> 
> - **Tại Màn hình Schedule:** Thanh **Date Strip** ở phía trên cho phép người dùng cuộn ngang qua các ngày thi đấu. Nếu muốn nhảy đến một ngày xa hơn trong tương lai, nút Date Picker ở góc phải sẽ mở lịch tháng trực quan kèm nút 'Go to Today' tiện lợi. Mỗi thẻ trận đấu hiển thị rõ cờ quốc gia, ELO, thời gian thi đấu và nút 'View Details' nổi bật."*

---

#### SLIDE 09: REQUIREMENT 1: CHI TIẾT MATCH DETAIL & BÀN CỜ 8×8
* **Người trình bày:** **SPEAKER 2**
* **Thời lượng:** 01 phút 00 giây
* **Tiêu đề Slide:** `Requirement 1 · Match Detail: Preserves context and supports deep game analysis.`
* **Visual:** Mockup màn hình Match Detail với Player Banner và Bàn cờ 8x8.

> **[LỜI THOẠI SPEAKER 2]:**  
> *"Khi người dùng chạm vào một cặp đấu, màn hình **Match Detail** sẽ xuất hiện:  
> - Phần Banner trên cùng thể hiện thế trận đối xứng: Kỳ thủ Cầm trắng vs Kỳ thủ Cầm đen (ví dụ Magnus Carlsen đối đầu Lê Quang Liêm), đi kèm quốc kỳ, chỉ số ELO và tỷ số trực tiếp.  
> - Ngay bên dưới là **Bàn cờ 8×8 tương tác** hiển thị đúng vị trí các quân cờ thực tế trên sân đấu. Người dùng có thể xem danh sách nước đi theo ký hiệu cờ vua quốc tế (Algebraic Notation) và xem thời gian còn lại của từng đồng hồ thi đấu.  
> - Nút Back ở góc trên bên trái giúp người dùng quay lại đúng ngày thi đấu trước đó mà không mất trạng thái cuộn.  
> 
> *(Chuyển giao)*: Để chứng minh tính hiệu quả và sự vượt trội của bản Hi-fi Prototype bằng thực nghiệm khoa học ở **Requirement 2**, xin mời bạn **[Tên Speaker 3]** tiếp tục phần trình bày."*

---

### 🎙️ PHẦN 3: REQUIREMENT 2 — SUMMATIVE USER STUDY (SPEAKER 3)

---

#### SLIDE 10: REQUIREMENT 2: THIẾT KẾ NGHIÊN CỨU SUMMATIVE STUDY ($N=6$, WITHIN-SUBJECTS)
* **Người trình bày:** **SPEAKER 3**
* **Thời lượng:** 01 phút 30 giây
* **Tiêu đề Slide:** `Requirement 2 · Study design: Six participants compare two mobile experiences.`
* **Visual:** Sơ đồ Within-Subjects & Ma trận Counterbalancing Latin Square ($AB/BA$).

> **[LỜI THOẠI SPEAKER 3]:**  
> *"Xin cảm ơn bạn [Tên Speaker 2]. Kính chào Thầy và các bạn, em là **[Tên Speaker 3]**, em xin đại diện nhóm trình bày **Requirement 2: Đánh giá Tổng kết Người dùng (Summative Usability Study)**.  
> 
> Để đảm bảo tính khoa học cao nhất theo chuẩn nghiên cứu HCI, nhóm đã thiết lập phương pháp luận nghiêm ngặt:  
> 1. **Mô hình Thí nghiệm trong cùng nhóm (Within-Subjects Design):** Cả 6 người tham gia ($P01 \rightarrow P06$) đều trải nghiệm cả 2 hệ thống (Baseline và Prototype), giúp triệt tiêu hoàn toàn sự sai lệch do năng lực cá nhân.  
> 2. **Kỹ thuật Cân bằng thứ tự (Latin Square Counterbalancing $AB / BA$):** Nhóm xen kẽ thứ tự thực hiện (3 người thử Baseline trước, 3 người thử Prototype trước) để loại trừ hoàn toàn **Hiệu ứng học tập (Learning Effect)**.  
> 3. **Toàn bộ 6 phiên test đều được ghi hình video từ góc 45° phía sau vai (Over-the-shoulder)** và lưu trữ minh chứng YouTube phục vụ đối soát."*

---

#### SLIDE 11: REQUIREMENT 2: ĐẶC TẢ 2 TÁC VỤ CHUẨN HÓA & QUY TRÌNH 9 BƯỚC
* **Người trình bày:** **SPEAKER 3**
* **Thời lượng:** 01 phút 30 giây
* **Tiêu đề Slide:** `Requirement 2 · Tasks & protocol: Standardized tasks measure efficiency, accuracy & satisfaction.`
* **Visual:** 2 Task Card + Sơ đồ luồng 9 bước.

> **[LỜI THOẠI SPEAKER 3]:**  
> *"Nghiên cứu tập trung vào 2 tác vụ chuẩn hóa tương ứng với 2 mục tiêu PA3:  
> - **Task 1 (One-handed Navigation):** Người dùng cầm điện thoại bằng 1 tay khi đang đi dạo, sử dụng duy nhất ngón cái để tìm và mở trang Schedule từ Home.  
> - **Task 2 (Schedule Lookup & Board View):** Tìm trận đấu ngày 16/8 giữa Magnus Carlsen và Lê Quang Liêm, sau đó mở màn hình chi tiết để xem bố cục bàn cờ 8×8.  
> 
> Mỗi buổi test kéo dài đúng **20 phút**, tuân thủ quy trình 9 bước tiêu chuẩn hóa bao gồm: ký cam kết bảo mật, điền phiếu nhân khẩu học, thực hiện tác vụ, trả lời bảng câu hỏi **SUS** và **Likert 5 khía cạnh**, khoảng nghỉ giải tỏa nhận thức 90 giây (Wash-out Period) giữa 2 hệ thống, và phỏng vấn bán cấu trúc cuối buổi."*

---

#### SLIDE 12: REQUIREMENT 2: KẾT QUẢ ĐỊNH LƯỢNG (TCT -75.2%, SUS 85.8, SUCCESS 100%)
* **Người trình bày:** **SPEAKER 3**
* **Thời lượng:** 02 phút 00 giây
* **Tiêu đề Slide:** `Requirement 2 · Quantitative results: Measured outcomes prove a massive usability leap.`
* **Visual:** 3 Metric Card lớn (TCT -75.2%, Success 100%, SUS 85.8/100) + Bảng số liệu đối chứng Baseline vs. Prototype.

> **[LỜI THOẠI SPEAKER 3]:**  
> *"Và đây là những con số biết nói thu được từ dữ liệu thực nghiệm trên 6 người tham gia:  
> 
> 1. **Thời gian hoàn thành tác vụ (TCT) giảm tới 75.2% tổng thể:**  
>    - Ở Task 1 (Điều hướng 1 tay), thời gian trên Prototype trung bình chỉ mất **11.8 giây** so với **36.3 giây** trên Baseline — nhanh hơn gấp 3 lần ($p < 0.001$, giảm $67.5\%$).  
>    - Ở Task 2 (Tìm trận & Xem bàn cờ), Prototype chỉ mất **14.7 giây** trong khi Baseline mất tới **82.3 giây** (giảm $82.1\%$). Đặc biệt bạn P06 mất hơn 2 phút trên web cũ do bị lạc sang bài viết tin tức, nhưng chỉ mất đúng **12 giây** trên Prototype.  
> 
> 2. **Tỷ lệ thành công trực tiếp (Direct Success Rate) đạt tuyệt đối 100%:**  
>    Trên Prototype, 100% người tham gia hoàn thành cả 2 task mà không cần bất kỳ sự trợ giúp nào; trong khi trên Baseline có tới 50% trường hợp bế tắc cần gợi ý hoặc thất bại.  
> 
> 3. **Điểm Khả dụng Hệ thống (SUS Score) nhảy vọt từ Hạng D lên Hạng A:**  
>    Website gốc Baseline chỉ đạt **50.0 / 100 điểm (Grade D — mức Poor)**. Trong khi đó, Hi-fi Prototype của Nhóm 06 đạt tới **85.8 / 100 điểm (Grade A / Excellent)** — vượt xa ngưỡng chuẩn công nghiệp 68 điểm theo thang Sauro-Lewis.  
> 
> 4. **Triệt tiêu lỗi tương tác:** Lỗi chạm trượt (Slip ERR-1) giảm từ trung bình 3.5 lỗi/người xuống **0.0 lỗi** nhờ touch target $\ge 48\times 48\text{ px}$."*

---

#### SLIDE 13: REQUIREMENT 2: PHÂN TÍCH ĐỊNH TÍNH & TIẾNG NÓI NGƯỜI DÙNG ($P01 - P06$)
* **Người trình bày:** **SPEAKER 3**
* **Thời lượng:** 01 phút 30 giây
* **Tiêu đề Slide:** `Requirement 2 · Qualitative findings: Observed behavior and participant voice explain the numbers.`
* **Visual:** Card 3 Cụm chủ đề định tính + Trích dẫn phát biểu trực tiếp của P01, P02, P04, P06.

> **[LỜI THOẠI SPEAKER 3]:**  
> *"Dữ liệu định lượng được củng cố mạnh mẽ bởi những nhận định sâu sắc từ các buổi phỏng vấn trực tiếp:  
> 
> * **Về tính năng Điều hướng một tay:**  
>   - Bạn **P01 [0:41]** nhận xét: *'Web cũ giấu menu ở tít trên góc trái khiến mình phải dùng 2 tay. Ở app mới, thanh bar nằm sẵn dưới ngón cái, có cả icon và chữ giúp bấm được ngay.'*  
>   - Bạn **P02 [0:37, 1:23]** đánh giá: *'Web cũ nhìn như giao diện máy tính thu nhỏ, còn thiết kế mới rõ ràng dễ dùng bằng 1 tay phải hơn nhiều.'*  
>   - Bạn **P04 [7:11]** chia sẻ: *'Giao diện mới rất thân thiện cho người mới, mở ứng dụng ra là biết ngay nó có những chức năng gì chứ không phải mò mẫm.'*  
> 
> * **Về trang Lịch thi đấu & Bàn cờ:**  
>   - Bạn **P02 [3:10]** và **P04 [2:22]** cùng chung nhận định: *'Bố cục thông tin ở bản mới cô đọng, nhiều thông tin nhưng không phải cuộn xa. Xem lịch đấu theo từng ngày trực quan hơn hẳn việc đọc một danh sách sự kiện dài ngoằng của trang cũ.'*  
>   - Bạn **P06** nhấn mạnh: *'Nút Read more ở web cũ quá nhỏ và bấm vào lại nhảy sang bài viết tin tức gây lạc hướng. App mới xem được chi tiết ván đấu và có bàn cờ trực quan rất chuyên nghiệp.'*  
> 
> * **Góc nhìn phản biện & Lộ trình cải tiến:**  
>   - Người dùng **P01 [4:12]** và **P03 [6:54]** đóng góp ý kiến: nên tự động cập nhật tên tháng trên thanh Date Strip khi cuộn qua ranh giới giữa 2 tháng (Auto-month threshold).  
>   - Người dùng **P06** đề xuất bổ sung tính năng nhập trực tiếp ngày/tháng/năm.  
> 
> *(Chuyển giao)*: Và ngay sau đây là phần minh chứng thực tế quan trọng nhất — em xin mời bạn **[Tên Speaker 4]** bước vào **Requirement 3: Live Interactive Demo** trực tiếp trên trình duyệt."*

---

### 🎙️ PHẦN 4: REQUIREMENT 3 — LIVE DEMO & KẾT LUẬN (SPEAKER 4)

---

#### SLIDE 14: REQUIREMENT 3: LIVE INTERACTIVE DEMO TRÊN TRÌNH DUYỆT (4 PHÚT)
* **Người trình bày:** **SPEAKER 4** *(phối hợp cùng Demo Operator)*
* **Thời lượng:** 04 phút 00 giây
* **Tiêu đề Slide:** `Requirement 3 · Live demo: A four-minute live run proves the prototype is fully interactive.`
* **Hành động:** Speaker 4 thuyết minh trực tiếp từng bước thao tác của Operator đang chia sẻ màn hình điện thoại thật / DevTools mobile viewport (iPhone 14, 390×844).

> **[KỊCH BẢN ĐIỀU PHỐI LIVE DEMO CỦA SPEAKER 4]:**  
> 
> *(Speaker 4 ra hiệu cho Operator bắt đầu thao tác)*  
> 
> > **[00:00 - 00:45] BƯỚC 1: TRẢI NGHIỆM TẠI HOME & ĐIỀU HƯỚNG 1 TAY**  
> > *"Kính mời Thầy và các bạn cùng theo dõi màn hình demo trực tiếp của **Requirement 3**.  
> > Hiện tại chúng ta đang ở trang Home. Bạn kỹ thuật viên chỉ dùng **duy nhất một ngón tay cái bên tay phải** để cuộn trang.  
> > Các bạn có thể thấy thanh Bottom Navigation luôn cố định ở đáy. Bây giờ chúng ta chạm vào nút 'More' — menu mở lên mượt mà với hiệu ứng blur hiện đại.  
> > Sau đó, chỉ cần một chạm nhẹ vào icon 'Schedule', chúng ta lập tức chuyển hướng sang trang Lịch thi đấu trong tích tắc."*  
> 
> > **[00:45 - 01:45] BƯỚC 2: TƯƠNG TÁC VỚI THANH DATE STRIP & BỘ LỌC TÌM KIẾM**  
> > *"Tại trang Schedule, bạn kỹ thuật viên đang vuốt thanh Date Strip. Khi chọn ngày 16 tháng 8, danh sách các trận đấu trong ngày lập tức xuất hiện với hiệu ứng chuyển động mượt mà.  
> > Chúng ta cũng có thể nhấn vào biểu tượng Lịch để mở Date Picker chọn ngày bất kỳ, hoặc nhấn 'Go to Today' để quay về ngày hiện tại.  
> > Tiếp theo, trên thanh tìm kiếm, chúng ta gõ nhanh chữ 'Lê Quang Liêm' hoặc 'Carlsen' — bộ lọc phản hồi tức thì và hiển thị đúng trận đấu tâm điểm."*  
> 
> > **[01:45 - 03:00] BƯỚC 3: MỞ THẺ TRẬN ĐẤU & TRẢI NGHIỆM MATCH DETAIL**  
> > *"Bây giờ, chúng ta nhấn vào nút 'View Details' của trận Carlsen vs Lê Quang Liêm.  
> > Màn hình Match Detail mở ra với thông tin chi tiết của 2 Đại kiện tướng quốc tế.  
> > Cuộn xuống phía dưới, chúng ta thấy bàn cờ 8×8 với đầy đủ các quân cờ trực quan. Người dùng có thể chạm vào các quân cờ để xem ô di chuyển hợp lệ và xem danh sách biên bản ván đấu (PGN moves).  
> > Cuối cùng, chúng ta nhấn nút 'Back' ở góc trên — ứng dụng đưa chúng ta trở về chính xác danh sách ngày 16 tháng 8 trên trang Schedule mà không cần tải lại."*  
> 
> > **[03:00 - 04:00] BƯỚC 4: TỔNG KẾT LIVE DEMO**  
> > *"Toàn bộ luồng thao tác từ Home $\rightarrow$ Schedule $\rightarrow$ Filter $\rightarrow$ Match Detail $\rightarrow$ Back diễn ra hoàn toàn tự nhiên, không hề có độ trễ nhận thức và thực hiện trọn vẹn chỉ bằng một tay. Điều này chứng minh bản prototype của nhóm là một ứng dụng web chạy thật 100% chứ không phải bản mockup tĩnh."*

---

#### SLIDE 15: KẾT LUẬN & HƯỚNG PHÁT TRIỂN TIẾP THEO (CONCLUSION)
* **Người trình bày:** **SPEAKER 4**
* **Thời lượng:** 01 phút 00 giây
* **Tiêu đề Slide:** `PA4 · Conclusion: Prototype. Evaluate. Improve.`
* **Visual:** 3 trụ cột kết luận (Built at High Fidelity, Empirically Validated, Ready for Production) + Lời cảm ơn.

> **[LỜI THOẠI SPEAKER 4]:**  
> *"Kính thưa Thầy và các bạn, nhìn lại toàn bộ chặng đường từ PA1 đến PA4:  
> Nhóm 06 đã hoàn thành trọn vẹn một vòng đời thiết kế lấy người dùng làm trung tâm (User-Centered Design Cycle):  
> 1. **Kế thừa bằng chứng vững chắc từ PA3** để chọn ra `Nav-1` và `Sch-2`.  
> 2. **Hiện thực hóa thành bản Hi-fi Prototype tương tác thật (Requirement 1)**, đạt chuẩn công thái học WCAG AAA.  
> 3. **Đánh giá tổng kết nghiêm ngặt với 6 người dùng thật (Requirement 2)**, định lượng hóa sự vượt trội về tốc độ (TCT -75.2%), độ chính xác (100% Success) và SUS 85.8 điểm Hạng A xuất sắc.  
> 4. **Trình diễn tương tác trực tiếp (Requirement 3)** chứng minh tính sẵn sàng triển khai thực tế.  
> 
> Trong tương lai, nhóm sẽ tiếp tục tối ưu hóa Date Strip với cơ chế auto-month threshold theo góp ý của P01 và tích hợp chế độ Dark Mode cho người dùng cờ vua ban đêm.  
> 
> Nhóm 06 xin chân thành cảm ơn sự lắng nghe và chỉ dẫn tận tình của Thầy Lê Khánh Duy cùng Thầy Phạm Nguyễn Sơn Tùng trong suốt học kỳ vừa qua.  
> 
> Em xin mời Thầy và các bạn cùng đặt câu hỏi phản biện cho nhóm!"*

---

## 🛡️ HƯỚNG DẪN BẢO VỆ & DỰ PHÒNG CÂU HỎI PHẢN BIỆN (Q&A DEFENSE GUIDE)
*(Toàn bộ 4 thành viên phối hợp trả lời)*

### Câu hỏi 1 của Giảng viên: *"Tại sao nhóm chỉ chọn kiểm thử trên N = 6 người tham gia? Số mẫu này có đủ đại diện không?"*
* **Người trả lời đề xuất:** **SPEAKER 3 (UX Researcher)**  
* **Cách trả lời chuẩn:**  
  *"Dạ thưa Thầy, theo công trình kinh điển của Jakob Nielsen và Landauer (1993) về Usability Engineering, kiểm thử với 5 đến 6 người dùng có thể phát hiện tới **$85\%$ - $90\%$ các vấn đề khả dụng cốt lõi** của một hệ thống.  
  Đặc biệt, nhóm đã áp dụng mô hình **Within-Subjects (Repeated Measures)** kết hợp **Counterbalancing Latin Square $AB/BA$**. Với mô hình này, cả 6 người đều thực hiện trên cả 2 hệ thống, tương đương với 12 phiên thu thập dữ liệu đối chứng, giúp triệt tiêu hoàn toàn sự khác biệt về năng lực cá nhân giữa các người tham gia."*

### Câu hỏi 2 của Giảng viên: *"Làm thế nào nhóm đảm bảo tính khách quan, không mớm ý cho người dùng trong lúc test?"*
* **Người trả lời đề xuất:** **SPEAKER 3 hoặc SPEAKER 1**  
* **Cách trả lời chuẩn:**  
  *"Dạ thưa Thầy, nhóm đã xây dựng **Kịch bản điều phối chuẩn hóa từng lời thoại (Standardized Facilitator Script)** trong tài liệu `SummativeUserStudy-Framework.md`.  
  Người điều phối chỉ đọc đúng kịch bản đề bài và chỉ được phép đưa ra 01 gợi ý chuẩn duy nhất nếu người dùng bế tắc quá 45 giây ở Task 1 hoặc 60 giây ở Task 2. Mọi cử chỉ chỉ tay vào màn hình hay giải thích trước đều bị cấm tuyệt đối và toàn bộ 6 buổi test đều được quay video góc $45^\circ$ để minh chứng."*

### Câu hỏi 3 của Giảng viên: *"Điểm khác biệt cốt lõi nhất giữa bản Hi-fi của nhóm và website gốc là gì?"*
* **Người trả lời đề xuất:** **SPEAKER 2 (Hi-fi Lead) hoặc SPEAKER 4**  
* **Cách trả lời chuẩn:**  
  *"Dạ thưa Thầy, có 2 điểm khác biệt mang tính quyết định:  
  1. **Về công thái học:** Chuyển từ Hamburger Menu góc trên bên trái (vùng cấm địa ngón cái) sang **Fixed Bottom Navigation 5 tabs** chuẩn $\ge 48\text{ px}$ (nằm trọn trong vùng tự nhiên của ngón cái).  
  2. **Về cấu trúc thông tin (IA):** Chuyển từ danh sách tin tức tĩnh sang **Date Strip lọc ngày tương tác** kết hợp xem trực tiếp thông tin kỳ thủ và **Bàn cờ thế trận 8×8** ngay trên màn hình chi tiết."*
