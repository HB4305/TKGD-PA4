# BÁO CÁO TIẾN ĐỘ HÀNG TUẦN (WEEKLY PROGRESS REPORT)
## Đồ Án Môn Học 4 (PA4) — Thiết Kế Giao Diện (CSC13112)
**Giảng viên:** TS. Lê Khánh Duy | **Trợ giảng:** ThS. Phạm Nguyễn Sơn Tùng  
**Nhóm:** Nhóm 06 — **Lớp:** 23CLC01  
**Đề tài:** Tái thiết kế giao diện Web Di động giải đấu Freestyle Chess  

---

## 1. Thông Tin Thành Viên & Phân Công Nhiệm Vụ Tổng Thể

| MSSV | Họ và Tên | Vai trò chính | Nhiệm vụ đảm trách trong PA4 | Mức độ hoàn thành |
| :---: | :--- | :--- | :--- | :---: |
| **23127008** | **Lê Mai Hoài Bảo** | Tech Lead & Video Producer | Hiện thực hóa Hi-fi prototype (React/TS), thiết lập góc quay video $45^\circ$, biên tập clip demo và quản lý repo. | **100%** |
| **23127202** | **Lâm Hữu Khánh** | UX Researcher & Data Analyst | Thiết kế khung nghiên cứu Summative Study (Within-subjects $AB/BA$), bấm giờ TCT, thống kê số liệu SUS và Likert. | **100%** |
| **23127096** | **Phạm Chí Bảo Ninh** | UI Designer & Observer | Tinh chỉnh Design Tokens, kiểm thử chuẩn kích thước tiếp cận WCAG AAA ($48\times 48\text{ px}$), ghi chép bảng log lỗi thực nghiệm. | **100%** |
| **23127252** | **Trương Công Thiên Phú** | Co-Facilitator & Content Lead | Thu thập dữ liệu thực tế giải đấu, xây dựng kịch bản phỏng vấn bán cấu trúc và điều phối phiên test. | **100%** |
| **23127144** | **Phùng Ngọc Tuấn** | Lead Facilitator & Slide Lead | Điều phối trực tiếp các buổi kiểm thử người dùng theo kịch bản chuẩn, phụ trách xây dựng Slide HTML tương tác & Speaker Script. | **100%** |

---

## 2. Bảng Theo Dõi Tiến Độ Chi Tiết Theo Tuần

### 📅 Tuần 1: Xây Dựng Hi-fi Prototype & Lập Kế Hoạch Nghiên Cứu Người Dùng
* **Thời gian:** 24/08/2026 – 30/08/2026
* **Mục tiêu:** Chuyển hóa 2 giải pháp thắng cuộc (`Nav-1`, `Sch-2`) từ PA3 sang mã nguồn web và chuẩn bị biểu mẫu test.

| Thành viên | Công việc thực hiện | Kết quả đầu ra | Trạng thái |
| :--- | :--- | :--- | :---: |
| **Lê Mai Hoài Bảo** | Khởi tạo dự án Vite + React + TypeScript, cấu trúc các component Home, Schedule, Match Detail. | Codebase prototype hoàn chỉnh, chạy được trên mobile. | Hoàn thành |
| **Phạm Chí Bảo Ninh** | Thiết kế hệ thống biến CSS (variables.css), kiểm tra kích thước touch target và responsive viewport. | Hệ thống CSS Design tokens chuẩn hóa. | Hoàn thành |
| **Lâm Hữu Khánh** | Soạn thảo khung nghiên cứu Summative Study, thiết lập ma trận Latin Square Counterbalancing $AB/BA$. | Tài liệu `SummativeUserStudy-Framework.md`. | Hoàn thành |
| **Trương Công Thiên Phú** | Chuẩn bị dữ liệu kỳ thủ, giải đấu và soạn bộ câu hỏi khảo sát nhân khẩu học, SUS và Likert. | Bộ tài liệu khảo sát song ngữ. | Hoàn thành |
| **Phùng Ngọc Tuấn** | Viết kịch bản lời thoại chuẩn cho Facilitator, mời 5 người tham gia ($P1 \rightarrow P5$). | Lịch hẹn và danh sách 5 participants. | Hoàn thành |

---

### 📅 Tuần 2: Tiến Hành Thử Nghiệm Đối Chứng, Tổng Hợp Dữ Liệu & Đóng Gói Slide
* **Thời gian:** 31/08/2026 – 06/09/2026
* **Mục tiêu:** Thực hiện 5 buổi test có quay video, phân tích số liệu TCT/SUS/Likert, cập nhật slide và kịch bản thuyết trình.

| Thành viên | Công việc thực hiện | Kết quả đầu ra | Trạng thái |
| :--- | :--- | :--- | :---: |
| **Phùng Ngọc Tuấn** & **Trương Công Thiên Phú** | Điều phối 5 buổi thử nghiệm người dùng (20 phút/buổi), phỏng vấn định tính sau test. | 5 phiên test hoàn tất, thu thập đầy đủ phiếu khảo sát. | Hoàn thành |
| **Lê Mai Hoài Bảo** | Quay video góc nhìn từ sau vai ($45^\circ$), quản lý file ghi hình và tải lên YouTube làm minh chứng. | 5 video proof + Video Demo hoàn chỉnh. | Hoàn thành |
| **Lâm Hữu Khánh** & **Phạm Chí Bảo Ninh** | Tổng hợp dữ liệu thô, tính toán TCT trung bình, điểm SUS (Broker 1996), mã hóa phân loại lỗi ERR-1/2/3. | Bảng dữ liệu định lượng và định tính hoàn chỉnh. | Hoàn thành |
| **Phùng Ngọc Tuấn** | Xây dựng Slide HTML tương tác 15 slide (`PA4-assignment-briefing.html`) và Speaker Script chi tiết. | Bộ Slide và Kịch bản thuyết trình 18 phút. | Hoàn thành |
| **Toàn nhóm** | Đóng gói toàn bộ hồ sơ báo cáo PDF (`06-PA4-HifiPrototype.pdf`, `06-PA4-SummativeUserStudy.pdf`, `06-PA4-WeeklyReport.pdf`). | Gói nộp bài `06-PA4.zip` chuẩn quy định. | Hoàn thành |

---

## 3. Tự Đánh Giá & Cam Kết Của Nhóm
* Toàn bộ 5 thành viên đều tham gia tích cực, phối hợp hiệu quả và đóng góp 100% khối lượng công việc được giao.
* Đồ án được thực hiện nghiêm túc, tuân thủ đạo đức nghiên cứu người dùng và quy định chống đạo văn của môn học.
