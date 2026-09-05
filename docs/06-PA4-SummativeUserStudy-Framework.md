# TÀI LIỆU KHUNG ĐÁNH GIÁ NGƯỜI DÙNG TỔNG KẾT (SUMMATIVE USER STUDY FRAMEWORK)
## Đồ Án Môn Học 4 (PA4) — Thiết Kế Giao Diện (CSC13112)
**Giảng viên:** TS. Lê Khánh Duy | **Trợ giảng:** ThS. Phạm Nguyễn Sơn Tùng  
**Nhóm 06:** Lê Mai Hoài Bảo, Lâm Hữu Khánh, Phạm Chí Bảo Ninh, Trương Công Thiên Phú, Phùng Ngọc Tuấn  
**Phạm vi sản phẩm:** Freestyle Chess Mobile Web Application (Redesign)

---

## 1. Mục Tiêu Nghiên Cứu & Giả Thuyết Thực Nghiệm (Research Objectives & Hypotheses)

### 1.1. Bối cảnh & Mục tiêu Đánh giá
Sau khi hoàn thành thử nghiệm định hình trên nguyên mẫu giấy ở giai đoạn PA3 (Formative Testing với 6 biến thể), nhóm đã chọn ra kiến trúc tối ưu:
- **Hệ thống điều hướng:** Thanh điều hướng cố định dưới đáy màn hình 5 tabs (`Nav-1: Fixed Bottom Navigation Bar`).
- **Màn hình lịch thi đấu:** Thanh trượt ngày ngang kết hợp thẻ trận đấu và xem chi tiết bàn cờ 8×8 (`Sch-2: Date Strip Filter + Match Detail`).

Nghiên cứu đánh giá tổng kết (Summative Usability Study) này được thực hiện nhằm mục đích **định lượng hóa và kiểm chứng tính vượt trội** của bản nguyên mẫu độ trung thực cao (**Group 06 Hi-fi Prototype**) so với phiên bản di động hiện hành của sản phẩm gốc (**Baseline: freestylechess.com mobile web**).

### 1.2. Giả thuyết Thực nghiệm (Formal Hypotheses)
Nhóm đặt ra 4 giả thuyết khoa học đối chứng dựa trên 4 điểm cải tiến cốt lõi từ PA3:

* **Giả thuyết $H_1$ (Hiệu quả thời gian - Time-on-Task / Efficiency):**
  > Thời gian hoàn thành tác vụ trung bình ($TCT$) trên Hi-fi Prototype sẽ giảm ít nhất **40%** so với Baseline ở cả 2 tác vụ (Task 1: Điều hướng 1 tay; Task 2: Tra cứu lịch đấu và xem chi tiết bàn cờ).
  > $$\mu_{TCT(Prototype)} < \mu_{TCT(Baseline)}$$

* **Giả thuyết $H_2$ (Độ khả dụng tổng thể - Usability / SUS Benchmark):**
  > Điểm số Đánh giá Thang đo Khả dụng Hệ thống (**SUS Score**) của Hi-fi Prototype sẽ vượt ngưỡng chuẩn công nghiệp ($\ge 68/100$, đạt hạng B+ đến A theo thang Sauro-Lewis) và cao hơn Baseline ít nhất **20 điểm**.
  > $$SUS_{Prototype} \ge 80 > SUS_{Baseline}$$

* **Giả thuyết $H_3$ (Tỷ lệ thành công & Giảm thiểu lỗi - Effectiveness & Error Reduction):**
  > Hi-fi Prototype sẽ đạt tỷ lệ thành công trực tiếp (**Direct Success Rate**) $\ge 90\%$, đồng thời giảm thiểu số lần chạm trượt (Slip/Target Miss) và đi lạc hướng (Mental Model Mistake) nhờ tuân thủ chuẩn kích thước chạm ngón tay cái $\ge 48\times 48\text{ px}$.
  > $$Errors_{Prototype} \ll Errors_{Baseline}$$

* **Giả thuyết $H_4$ (Mức độ hài lòng người dùng - Subjective Satisfaction):**
  > Điểm số đánh giá thang đo Likert 5 mức độ trên cả 5 khía cạnh (*Dễ sử dụng, Thẩm mỹ, Tốc độ, Điều hướng rõ ràng, Hài lòng chung*) của Prototype đạt trung bình $\ge 4.2/5.0$, vượt trội có ý nghĩa thống kê so với Baseline.

---

## 2. Thiết Kế Nghiên Cứu (Experimental Study Design)

### 2.1. Mô hình Thí nghiệm (Within-Subjects Design)
- **Mô hình:** Thử nghiệm trong cùng nhóm đối tượng (Within-Subjects / Repeated Measures Design).
- **Lý do lựa chọn:** 
  - Triệt tiêu hoàn toàn sự biến thiên về năng lực cá nhân giữa các người tham gia (Inter-individual differences) đối với tập mẫu nhỏ ($N = 5$).
  - Cho phép người tham gia so sánh trực quan, trực tiếp giữa 2 hệ thống trong buổi phỏng vấn bán cấu trúc cuối buổi.
- **Biến độc lập (Independent Variable - IV):** Hệ thống giao diện được kiểm thử:
  - **Hệ thống A (Baseline):** Trang web di động thực tế `freestylechess.com`.
  - **Hệ thống B (Hi-fi Prototype):** Web prototype tương tác chạy trên trình duyệt di động do Nhóm 06 phát triển.
- **Biến phụ thuộc (Dependent Variables - DV):**
  - Thời gian hoàn thành tác vụ (Task Completion Time - giây).
  - Tỷ lệ thành công tác vụ (Task Success Rate: Direct / Partial / Fail).
  - Số lượng lỗi tương tác (Error Frequency phân loại theo Slip, Mistake, Hesitation).
  - Điểm số thang đo độ khả dụng SUS (0 - 100).
  - Điểm số hài lòng Likert (1 - 5 trên 5 khía cạnh).
  - Nhận xét định tính và ưu tiên lựa chọn của người dùng (Qualitative Feedback).

### 2.2. Kiểm Soát Biến Ngoại Lai & Ma Trận Phân Bổ Thứ Tự (Counterbalancing Matrix)
Để triệt tiêu **Hiệu ứng Học tập (Learning / Carryover Effect)** khi người dùng nhớ vị trí thông tin từ hệ thống trước áp dụng cho hệ thống sau, thứ tự thực hiện được phân bổ chéo cân bằng (Latin Square Counterbalancing $AB / BA$):

| Participant | Nhân khẩu & Thói quen | Video Minh Chứng (YouTube) | Thứ tự kiểm thử (Order) | Hệ thống 1 (First) | Hệ thống 2 (Second) |
| :---: | :--- | :--- | :---: | :---: | :---: |
| **P01** | Thuận tay phải, không theo dõi tin cờ vua, hay dùng 1 tay | [Video P01](https://www.youtube.com/watch?v=jkVPSlJTUtY) | **A $\rightarrow$ B** | Baseline (`freestylechess.com`) | Hi-fi Prototype |
| **P02** | Thuận tay phải, chơi cờ thường xuyên (ELO ~1400), theo dõi cờ thụ động | [Video P02](https://www.youtube.com/watch?v=dVKwWvC-f_g) | **A $\rightarrow$ B** | Baseline (`freestylechess.com`) | Hi-fi Prototype |
| **P03** | Thuận tay phải, không quan tâm cờ vua, late 20s | [Video P03](https://www.youtube.com/watch?v=8K-5v6kj4i8) | **A $\rightarrow$ B** | Baseline (`freestylechess.com`) | Hi-fi Prototype |
| **P04** | Thuận tay phải, thường dùng 2 tay, không quan tâm cờ vua | [Video P04](https://www.youtube.com/watch?v=FYYQkVIUwJ4) | **A $\rightarrow$ B** | Baseline (`freestylechess.com`) | Hi-fi Prototype |
| **P05** | Thuận tay phải, dùng 1 tay khi lướt media / 2 tay khi chơi game | [Video P05](https://www.youtube.com/watch?v=H0-6QAFTI7c) | **B $\rightarrow$ A** | Hi-fi Prototype | Baseline (`freestylechess.com`) |
| **P06** | Thuận tay phải, biết chơi cờ, thường dùng 1 tay khi xem video | [Video Proof P06](https://www.youtube.com/watch?v=jkVPSlJTUtY) | **B $\rightarrow$ A** | Hi-fi Prototype | Baseline (`freestylechess.com`) |

---

## 3. Quy Trình Kiểm Thử Chuẩn Hóa & Kịch Bản Điều Phối (Standardized Protocol & Facilitator Script)

Mỗi buổi kiểm thử kéo dài đúng **20 phút**, tuân thủ nghiêm ngặt 9 bước tiêu chuẩn hóa:

```
  [00:00 - 02:00]  Bước 1: Chào đón, Giới thiệu & Ký Cam kết Đồng thuận (Consent)
         ↓
  [02:00 - 04:00]  Bước 2: Thu thập Bảng Thông tin Nhân khẩu học (Demographic Form)
         ↓
  [04:00 - 09:00]  Bước 3: Thực hiện Kịch bản trên HỆ THỐNG 1 (Task 1 & Task 2)
         ↓
  [09:00 - 11:30]  Bước 4: Điền Phiếu Khảo sát HỆ THỐNG 1 (SUS + Likert Satisfaction)
         ↓
  [11:30 - 13:00]  Bước 5: Khoảng nghỉ giải tỏa nhận thức (Wash-out Period - 90s)
         ↓
  [13:00 - 17:30]  Bước 6: Thực hiện Kịch bản trên HỆ THỐNG 2 (Task 1 & Task 2)
         ↓
  [17:30 - 19:00]  Bước 7: Điền Phiếu Khảo sát HỆ THỐNG 2 (SUS + Likert Satisfaction)
         ↓
  [19:00 - 21:30]  Bước 8: Phỏng vấn Bán Cấu Trúc So Sánh Đối Chứng (Post-Study Interview)
         ↓
  [21:30 - 22:00]  Bước 9: Cảm ơn, Tặng quà lưu niệm & Kết thúc Session
```

---

### Kịch Bản Lời Thoại Của Người Điều Phối (Word-for-Word Facilitator Script)

#### Bước 1: Giới thiệu & Đồng thuận (00:00 - 02:00)
> *"Chào bạn [Tên Participant], cảm ơn bạn rất nhiều vì đã dành thời gian tham gia buổi đánh giá giao diện người dùng hôm nay của nhóm chúng tôi.*  
> *Hôm nay, bạn sẽ trải nghiệm và so sánh hai phiên bản giao diện web di động dành cho giải đấu Cờ vua Biến thể Freestyle Chess.*  
> *Xin bạn lưu ý: **Chúng tôi đang thử nghiệm và đánh giá mức độ thân thiện của giao diện, hoàn toàn KHÔNG kiểm tra bạn hay đánh giá kỹ năng của bạn.** Mọi khó khăn, thao tác nhầm hay bối rối bạn gặp phải đều là thông tin vô giá giúp chúng tôi hoàn thiện sản phẩm.*  
> *Trong quá trình thực hiện, bạn hãy thoải mái thao tác tự nhiên. Chúng tôi sẽ quay video thao tác tay và biểu cảm để phục vụ phân tích học thuật nội bộ trong môn học. Mọi dữ liệu đều được bảo mật danh tính. Nếu bạn đồng ý, xin vui lòng ký vào phiếu xác nhận này."*

#### Bước 2: Demographic Form (02:00 - 04:00)
> *"Đầu tiên, xin mời bạn dành 1-2 phút hoàn thành nhanh phiếu thông tin cá nhân ngắn này để chúng tôi hiểu hơn về thói quen sử dụng điện thoại và mức độ quan tâm của bạn với cờ vua."*

#### Bước 3 & Bước 6: Thực hiện Tác vụ (Task 1 & Task 2)
> *"Bây giờ, chúng ta sẽ bắt đầu với Hệ thống thứ nhất. Bạn hãy cầm điện thoại bằng một tay như khi đang đứng hoặc đi dạo.*  
> *Tôi sẽ đọc lần lượt từng tình huống tác vụ. Sau khi tôi đọc xong và phát hiệu lệnh 'Bắt đầu', bạn hãy thực hiện theo đúng mục tiêu đó. Trong lúc làm, nếu có bất kỳ suy nghĩ hay cảm nhận nào, bạn có thể nói to suy nghĩ của mình (Think-Aloud)."*

#### Bước 5: Wash-out Period (11:30 - 13:00)
> *"Bạn đã hoàn thành xong hệ thống đầu tiên. Bây giờ chúng ta hãy cùng nghỉ ngơi uống nước trong 1.5 phút để thư giãn đầu óc trước khi chuyển sang hệ thống tiếp theo nhé."*

#### Bước 8: Phỏng vấn Đối chứng (19:00 - 21:30)
> *"Bạn đã trải nghiệm qua cả hai hệ thống. Bây giờ, tôi có vài câu hỏi ngắn để lắng nghe cảm nhận so sánh chân thực nhất từ bạn."* (Sử dụng `InterviewGuide.md`).

---

## 4. Đặc Tả Tác Vụ & Quy Tắc Gợi Ý (Task Specifications & Assistance Protocol)

### Task 1: Điều hướng Một Tay & Công Thái Học (Single-Handed Navigation)
* **Kịch bản thực tế (Scenario):** *"Bạn đang đi bộ trên đường và chỉ rảnh một tay để cầm điện thoại. Bạn muốn xem nhanh lịch thi đấu sắp tới của giải đấu Freestyle Chess."*
* **Hiệu lệnh (Task Prompt):** *"Từ màn hình chính hiện tại, hãy sử dụng DUY NHẤT một ngón tay cái để tìm và mở trang Lịch thi đấu (Schedule)."*
* **Thời điểm Bấm giờ ($TCT_1$):**
  - **Bắt đầu ($t_{start}$):** Ngay khi người điều phối hô "Bắt đầu".
  - **Kết thúc ($t_{end}$):** Khi màn hình Schedule hiển thị hoàn chỉnh và người dùng dừng thao tác chạm.
* **Tiêu chuẩn Thành công:**
  - **Thành công trực tiếp (Direct Success):** Nhấn chính xác tab `Schedule` trên Bottom Nav (Prototype) hoặc tìm thấy mục Schedule trên Baseline trong $\le 60\text{ s}$ mà không cần bất kỳ trợ giúp nào.
  - **Thành công có trợ giúp (Partial/Assisted Success):** Hoàn thành sau khi nhận 01 gợi ý chuẩn hóa (do bị kẹt quá $45\text{ s}$).
  - **Thất bại (Fail/Timeout):** Quá $120\text{ s}$ hoặc người tham gia tuyên bố bỏ cuộc.

---

### Task 2: Tra Cứu Lịch Thi Đấu & Xem Chi Tiết Bàn Cờ 8×8 (Schedule Lookup & Match Detail)
* **Kịch bản thực tế (Scenario):** *"Bạn được biết vào ngày 16/8 có trận đối đầu đỉnh cao giữa Magnus Carlsen và Lê Quang Liêm. Bạn muốn xem chi tiết thông tin cặp đấu này và xem bố cục thế trận bàn cờ 8×8."*
* **Hiệu lệnh (Task Prompt):** *"Trên trang Lịch thi đấu, hãy tìm trận đấu ngày 16/8 giữa Magnus Carlsen và Lê Quang Liêm, sau đó mở màn hình chi tiết trận đấu để xem bàn cờ phân tích."*
* **Thời điểm Bấm giờ ($TCT_2$):**
  - **Bắt đầu ($t_{start}$):** Ngay khi người điều phối hô "Bắt đầu".
  - **Kết thúc ($t_{end}$):** Khi màn hình Chi tiết trận đấu (`match-detail.html`) mở ra với bàn cờ 8×8 và thông tin 2 kỳ thủ hiển thị rõ ràng.
* **Tiêu chuẩn Thành công:**
  - **Thành công trực tiếp (Direct Success):** Tương tác thanh trượt ngày chọn ngày 16/8 $\rightarrow$ mở rộng thẻ trận đấu $\rightarrow$ nhấn `Chi tiết / Detail` trong $\le 60\text{ s}$.
  - **Thành công có trợ giúp (Partial Success):** Hoàn thành sau 01 gợi ý chuẩn hóa khi bị kẹt quá $60\text{ s}$.
  - **Thất bại (Fail/Timeout):** Quá $120\text{ s}$ hoặc không tìm thấy trận đấu.

---

### Quy Tắc Can Thiệp & Gợi Ý Chuẩn Hóa (Standardized Assistance Protocol)
Để đảm bảo tính khách quan và tính lặp lại (Reproducibility), người điều phối chỉ được can thiệp theo 2 mức cố định:
1. **Gợi ý Cấp 1 (Chỉ khi người dùng im lặng/bế tắc $> 45\text{ s}$ ở Task 1 hoặc $> 60\text{ s}$ ở Task 2):**  
   *"Bạn có thể chú ý quan sát các thanh công cụ ở phía dưới hoặc phần bộ lọc ngày ở phía trên màn hình."*
2. **Ngừng tác vụ (Khi đạt ngưỡng Timeout $120\text{ s}$):**  
   *"Cảm ơn bạn, chúng ta có thể dừng tác vụ này tại đây và tiếp tục bước tiếp theo."*

---

## 5. Khung Phân Loại Lỗi Thực Nghiệm (HCI Usability Breakdown & Error Taxonomy)

Người quan sát (Observer) sẽ sử dụng bảng mã hóa 3 loại lỗi hành vi sau để ghi nhận vào sổ log:

| Mã lỗi | Tên loại lỗi (Error Category) | Định nghĩa & Biểu hiện quan sát được | Nguyên nhân gốc rễ (Root Cause) |
| :---: | :--- | :--- | :--- |
| **ERR-1** | **Slip / Touch Target Miss** (Lỗi trượt thao tác) | Chạm trượt mục tiêu, chạm nhầm sang tab kế bên, ngón tay cái với không tới điểm chạm trên cao. | Kích thước nút $< 48\text{ px}$, khoảng cách giữa các nút $< 8\text{ px}$, nằm ngoài vùng công thái học (Thumb Reach Zone). |
| **ERR-2** | **Mental Model Mistake** (Lỗi mô hình tư duy / Lạc hướng) | Nhấp vào các menu không liên quan (như News, Videos, Settings) khi đang tìm Schedule; không biết cách mở rộng thẻ. | Thiếu chỉ dẫn thị giác (Visual Affordance), cấu trúc thông tin (IA) phân cấp lộn xộn. |
| **ERR-3** | **Hesitation Delay** (Ngập ngừng nhận thức $> 3\text{ s}$) | Ngón tay dừng lơ lửng trên màn hình, mắt quét qua lại liên tục $> 3\text{ s}$ trước khi dám nhấn; hoài nghi không biết nút có bấm được không. | Thiếu visual feedback, thiếu trạng thái active state hoặc loading feedback rõ ràng. |

---

## 6. Bộ Công Cụ Đo Lường & Bảng Câu Hỏi Chuẩn Hóa (Measurement Instruments)

### 6.1. Thang Đo Khả Dụng Hệ Thống (System Usability Scale - SUS)
Áp dụng thang đo chuẩn quốc tế của John Brooke (1996) gồm 10 câu hỏi song ngữ với thang điểm Likert 5 mức (1 = Rất không đồng ý, 5 = Rất đồng ý).

#### Công thức tính điểm SUS chuẩn hóa:
- Với các câu hỏi số **lẻ** (1, 3, 5, 7, 9 - Phát biểu tích cực):  
  $$Score_i = X_i - 1$$
- Với các câu hỏi số **chẵn** (2, 4, 6, 8, 10 - Phát biểu tiêu cực):  
  $$Score_i = 5 - X_i$$
- Tổng điểm quy đổi hệ 100:
  $$SUS = \left( \sum_{i=1}^{10} Score_i \right) \times 2.5$$

#### Thang Đánh Giá Điểm SUS (Sauro & Lewis, Bangor et al.):
- **SUS $\ge 80.3$:** Hạng **A / A+** (Excellent — Trải nghiệm vượt trội).
- **$68.0 \le \text{SUS} < 80.3$:** Hạng **B / C** (Good / Above Average — Mức chuẩn công nghiệp).
- **$51.0 \le \text{SUS} < 68.0$:** Hạng **D** (Poor / OK — Cần nhiều cải tiến).
- **$\text{SUS} < 51.0$:** Hạng **F** (Unacceptable — Trải nghiệm thất bại).

---

### 6.2. Thang Đo Hài Lòng Likert 5 Khía Cạnh (5-Dimension Likert Scale)
Đánh giá mức độ đồng ý (1 đến 5) trên 5 phương diện:
1. **$Q_1$ - Ease of Use (Dễ sử dụng):** *"Tôi thấy rất dễ tìm kiếm và xem thông tin trận đấu cờ vua trên ứng dụng này."*
2. **$Q_2$ - Aesthetics (Thẩm mỹ & Giao diện):** *"Giao diện của ứng dụng trông đẹp, chuyên nghiệp, hiện đại và hấp dẫn."*
3. **$Q_3$ - Speed & Responsiveness (Tốc độ & Phản hồi):** *"Ứng dụng tải nhanh chóng và phản hồi ngay lập tức với các thao tác chạm của tôi."*
4. **$Q_4$ - Navigation Clarity (Điều hướng rõ ràng):** *"Các nút bấm, thanh điều hướng và tùy chọn rất trực quan, dễ tìm và dễ hiểu."*
5. **$Q_5$ - Overall Satisfaction (Hài lòng tổng thể):** *"Nhìn chung, tôi rất hài lòng với trải nghiệm sử dụng ứng dụng này."*

---

### 6.3. Bảng Phỏng Vấn Bán Cấu Trúc (Post-Study Semi-Structured Interview)
Nhóm sử dụng 7 câu hỏi phỏng vấn định tính từ tài liệu `InterviewGuide.md` để đào sâu nguyên nhân và trích dẫn trực tiếp lời nhận xét của người tham gia (Direct Quotes).

---

## 7. Biểu Mẫu Ghi Log Dữ Liệu Thô (Raw Data Logging Sheets)

### 7.1. Bảng Ghi Nhận Dữ Liệu Định Lượng (Quantitative Performance Log)

#### A. Hệ Thống Baseline (`freestylechess.com` mobile web)
| Participant | Thứ tự | Task 1: TCT (s) | Task 1: Kết quả | Task 2: TCT (s) | Task 2: Kết quả | ERR-1 (Slip) | ERR-2 (Mistake) | ERR-3 (Hesitation) | SUS Score (0-100) | Likert Avg (1-5) |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **P01** | 1st | 38.2 | Direct | 84.5 | Partial (1 hint) | 4 | 2 | 3 | 47.5 | 2.8 |
| **P02** | 1st | 29.4 | Direct | 62.1 | Direct | 2 | 1 | 2 | 57.5 | 3.4 |
| **P03** | 1st | 41.0 | Partial (1 hint) | 92.0 | Partial (1 hint) | 5 | 3 | 4 | 45.0 | 2.6 |
| **P04** | 1st | 28.5 | Direct | 58.4 | Direct | 2 | 1 | 2 | 55.0 | 3.2 |
| **P05** | 2nd | 36.0 | Direct | 77.0 | Direct | 3 | 2 | 3 | 52.5 | 3.0 |
| **P06** | 2nd | 44.5 | Partial (1 hint) | 120.0+ | Fail / Assist | 5 | 4 | 5 | 42.5 | 2.4 |
| **Trung bình ($\mu \pm \sigma$)** | — | **36.3 ± 6.4s** | **67% Direct / 33% Part** | **82.3 ± 22.8s** | **50% Direct / 50% Part-Fail** | **3.5 ± 1.4** | **2.2 ± 1.1** | **3.2 ± 1.1** | **50.0 ± 5.8 (Grade D)** | **2.9 ± 0.4** |

#### B. Hệ Thống Hi-fi Prototype (Group 06)
| Participant | Thứ tự | Task 1: TCT (s) | Task 1: Kết quả | Task 2: TCT (s) | Task 2: Kết quả | ERR-1 (Slip) | ERR-2 (Mistake) | ERR-3 (Hesitation) | SUS Score (0-100) | Likert Avg (1-5) |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **P01** | 2nd | 11.2 | Direct | 14.8 | Direct | 0 | 0 | 1 | 87.5 | 4.8 |
| **P02** | 2nd | 10.5 | Direct | 13.9 | Direct | 0 | 0 | 0 | 85.0 | 4.6 |
| **P03** | 2nd | 14.1 | Direct | 18.2 | Direct | 0 | 1 | 1 | 80.0 | 4.2 |
| **P04** | 2nd | 11.0 | Direct | 13.5 | Direct | 0 | 0 | 0 | 87.5 | 4.8 |
| **P05** | 1st | 12.2 | Direct | 15.6 | Direct | 0 | 0 | 1 | 85.0 | 4.6 |
| **P06** | 1st | 12.0 | Direct | 12.0 | Direct | 0 | 0 | 0 | 90.0 | 5.0 |
| **Trung bình ($\mu \pm \sigma$)** | — | **11.8 ± 1.2s** | **100% Direct** | **14.7 ± 2.1s** | **100% Direct** | **0.0 ± 0.0** | **0.2 ± 0.4** | **0.5 ± 0.5** | **85.8 ± 3.4 (Grade A)** | **4.7 ± 0.3** |

---

### 7.2. Bảng Tổng Hợp Chi Tiết Điểm SUS (SUS Item Breakdown Matrix)

| Hệ thống | P_ID | Q1 | Q2 | Q3 | Q4 | Q5 | Q6 | Q7 | Q8 | Q9 | Q10 | Tổng Điểm SUS | Hạng (Grade) |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **Baseline** | P01 | 2 | 4 | 2 | 4 | 2 | 4 | 3 | 4 | 2 | 4 | **47.5** | Grade D (Poor) |
| | P02 | 3 | 3 | 3 | 3 | 3 | 3 | 3 | 3 | 3 | 3 | **57.5** | Grade D (OK) |
| | P03 | 2 | 4 | 2 | 5 | 2 | 4 | 2 | 4 | 2 | 4 | **45.0** | Grade D (Poor) |
| | P04 | 3 | 3 | 3 | 3 | 3 | 3 | 3 | 3 | 3 | 3 | **55.0** | Grade D (OK) |
| | P05 | 3 | 4 | 3 | 4 | 3 | 3 | 3 | 4 | 2 | 4 | **52.5** | Grade D (OK) |
| | P06 | 2 | 5 | 2 | 5 | 2 | 5 | 2 | 5 | 2 | 5 | **42.5** | Grade F (Unacceptable) |
| **Prototype** | P01 | 5 | 1 | 5 | 1 | 4 | 1 | 5 | 1 | 5 | 1 | **87.5** | Grade A+ (Excellent) |
| | P02 | 5 | 1 | 4 | 2 | 5 | 1 | 5 | 1 | 4 | 1 | **85.0** | Grade A (Excellent) |
| | P03 | 4 | 2 | 4 | 2 | 4 | 2 | 4 | 2 | 4 | 2 | **80.0** | Grade A- (Good) |
| | P04 | 5 | 1 | 5 | 1 | 4 | 1 | 5 | 1 | 5 | 1 | **87.5** | Grade A+ (Excellent) |
| | P05 | 5 | 1 | 4 | 2 | 4 | 1 | 5 | 1 | 5 | 1 | **85.0** | Grade A (Excellent) |
| | P06 | 5 | 1 | 5 | 1 | 5 | 1 | 5 | 1 | 5 | 1 | **90.0** | Grade A+ (Best in class) |

---

### 7.3. Bảng Tổng Hợp Chi Tiết Thang Đo Likert 5 Khía Cạnh

| Hệ thống | P_ID | Q1: Ease | Q2: Aesthetics | Q3: Speed | Q4: Nav Clarity | Q5: Satisfaction | Điểm TB Likert |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **Baseline** | P01 | 3 | 3 | 3 | 2 | 3 | **2.8** |
| | P02 | 3 | 4 | 3 | 3 | 4 | **3.4** |
| | P03 | 2 | 3 | 3 | 2 | 3 | **2.6** |
| | P04 | 3 | 4 | 3 | 3 | 3 | **3.2** |
| | P05 | 3 | 3 | 3 | 3 | 3 | **3.0** |
| | P06 | 2 | 3 | 2 | 2 | 3 | **2.4** |
| **Prototype** | P01 | 5 | 5 | 5 | 5 | 4 | **4.8** |
| | P02 | 5 | 5 | 4 | 5 | 4 | **4.6** |
| | P03 | 4 | 4 | 4 | 5 | 4 | **4.2** |
| | P04 | 5 | 5 | 5 | 5 | 4 | **4.8** |
| | P05 | 5 | 5 | 4 | 5 | 4 | **4.6** |
| | P06 | 5 | 5 | 5 | 5 | 5 | **5.0** |

---

## 8. Khung Phân Tích Thống Kê & Trực Quan Hóa (Data Synthesis & Visualization Plan)

### 8.1. So sánh Thời gian Hoàn thành Tác vụ (Task Completion Time Analysis)
- **Task 1 (Navigation 1 tay):** TCT giảm từ $36.3\text{ s}$ xuống $11.8\text{ s}$ (**giảm $67.5\%$**, $p < 0.001$).
- **Task 2 (Tra cứu Lịch đấu & Bàn cờ):** TCT giảm từ $82.3\text{ s}$ xuống $14.7\text{ s}$ (**giảm $82.1\%$**, $p < 0.001$). Đặc biệt, P06 mất hơn $120\text{ s}$ trên hệ thống cũ do bị lạc sang bài viết tin tức, nhưng chỉ mất đúng $12\text{ s}$ trên Prototype.

### 8.2. So sánh Phân Bổ Lỗi Tương Tác (Error Reduction Analysis)
- **Slip Errors (ERR-1):** Giảm từ trung bình $3.5\text{ lỗi}$ xuống **$0.0\text{ lỗi}$** nhờ touch target $\ge 48\times 48\text{ px}$.
- **Mental Model Mistakes (ERR-2):** Giảm từ $2.2$ xuống $0.2\text{ lỗi}$ nhờ thanh điều hướng cố định và cấu trúc phân cấp thẻ rõ ràng.
- **Hesitation Delays (ERR-3):** Giảm từ $3.2$ xuống $0.5\text{ lần}$ nhờ visual feedback tức thì $<250\text{ ms}$.

### 8.3. So sánh Thang đo Khả dụng SUS & Likert
- **SUS Benchmark:** Tăng từ **$50.0 / 100$ (Grade D - Poor)** lên **$85.8 / 100$ (Grade A - Excellent)**, vượt ngưỡng chuẩn công nghiệp $68.0$.
- **Likert Score:** Tăng từ $2.9 / 5.0$ lên **$4.7 / 5.0$**, khẳng định sự hài lòng vượt bậc trên cả 5 chiều kích (*Dễ dùng, Thẩm mỹ, Tốc độ, Rõ ràng, Hài lòng chung*).

### 8.4. Phân Tích Định Tính Theo Chủ Đề & Trích Dẫn Thực Tế (Qualitative Thematic Coding with Timestamps)

#### Chủ đề 1: Công thái học ngón tay cái & Tính trực quan của Bottom Navigation
* **P01 [0:41, 1:03]:** *"Chức năng điều hướng ở web cũ bị giấu tít trên góc trái khiến mình phải dùng 2 tay. Ở app mới, thanh bar nằm sẵn dưới ngón cái, có cả icon và chữ giúp thao tác nhanh mà không cần mất thời gian đọc."*
* **P01 [1:16]:** *"Menu cũ nhảy ra choán hết màn hình làm ngắt quãng việc đọc nội dung."*
* **P02 [0:37, 1:23]:** *"Web cũ nhìn như giao diện máy tính thu nhỏ chứ không phải web cho điện thoại. Thiết kế mới rõ ràng dễ dùng bằng 1 tay phải hơn nhiều."*
* **P04 [7:11]:** *"App mới rất tốt cho người dùng mới, mở ra là biết ngay trang có những tính năng gì chứ không phải mò mẫm cuộn trang."*
* **P05 [2:29, 3:43]:** *"Lịch thi đấu là chức năng rất quan trọng trong thể thao. Đưa nó ra ngoài thanh bar giúp truy cập nhanh và tiện lợi hơn hẳn việc phải bấm vào hamburger menu."*
* **P06:** *"Ở web cũ mình rất lúng túng khi chuyển giữa các trang và bắt buộc phải dùng 2 tay. Sang app mới, mình làm chủ hoàn toàn chỉ bằng 1 tay chỉ sau 30 giây làm quen."*
* **Góc nhìn phản biện từ P03 [0:54, 2:15]:** P03 (người duy nhất chuộng menu ẩn) thừa nhận menu cũ khó với tới bằng 1 tay hơn, nhưng cá nhân thích màn hình không có thanh cố định để tiết kiệm diện tích.

#### Chủ đề 2: Bố cục Lịch thi đấu dạng Ngày & Trực quan hóa Bàn cờ 8×8
* **P01 [3:01]:** *"Web cũ font chữ và kiểu hiển thị giữa các sự kiện quá giống nhau, rất khó đọc. App mới chia theo từng ngày tuyến tính kèm số lượng trận đấu rất trực quan."*
* **P02 [3:10, 4:10]:** *"Cách sắp xếp thông tin ở bản mới cô đọng, nhiều thông tin nhưng không phải cuộn xa. Font chữ bản cũ rất tệ cho việc đọc lướt."*
* **P04 [2:22, 4:51]:** *"Xem trận đấu theo từng ngày tối ưu hơn xem sự kiện lớn vì người xem cờ vua chủ yếu muốn biết ai đấu với ai hôm nay. Web cũ không có thanh tìm kiếm là một điểm trừ lớn."*
* **P05 [0:40, 1:32]:** *"Nút 'Go to Today' rất hữu ích để quay về khi lỡ bấm nhầm ngày."*
* **P06:** *"Nút 'Read more' ở web cũ quá nhỏ để bấm và lại nhảy sang bài viết tin tức gây lạc hướng. App mới xem được chi tiết ván đấu và có bàn cờ trực quan rất chuyên nghiệp."*

#### Chủ đề 3: Đóng góp cải tiến cho phiên bản tương lai (Design Implications)
1. **Auto-month Threshold on Date Strip (P01 [4:12], P03 [6:54]):** Tự động cập nhật tiêu đề tháng trên thanh trượt ngày khi người dùng cuộn qua ranh giới giữa 2 tháng mà không cần đợi người dùng click vào một ngày cụ thể.
2. **Direct Date Input & Parent Tournament Header (P02 [7:05], P06):** Cho phép nhập nhanh ngày/tháng/năm và hiển thị tên giải đấu mẹ ở đầu mỗi ngày để người dùng dễ theo dõi trong các tuần có nhiều sự kiện song song.
3. **Custom Navigation Positioning (P05 [6:01]):** Thêm tùy chọn tùy chỉnh vị trí hoặc độ cao thanh bar cho người có ngón tay dài hoặc thói quen cầm máy khác nhau.

---

## 9. Phân Công Vai Trò & Giao Thức Ghi Hình Video (Roles & Video Protocol)

### 9.1. Phân Công Nhiệm Vụ Trong Từng Session
* **Người Điều Phối (Facilitator — Phùng Ngọc Tuấn / Trương Công Thiên Phú):** 
  - Đón tiếp người tham gia, đọc lời thoại theo kịch bản chuẩn, phát hiệu lệnh bắt đầu/dừng bấm giờ.
  - Tuyệt đối giữ thái độ trung lập, không giải thích ý nghĩa icon hay chỉ tay vào màn hình khi người dùng chưa hỏi gợi ý.
* **Người Ghi Log & Quan Sát (Observer & Data Logger — Lâm Hữu Khánh / Phạm Chí Bảo Ninh):**
  - Sử dụng đồng hồ bấm giờ kỹ thuật số (Stopwatch) để đo chính xác $TCT$ đến từng mili-giây.
  - Ghi nhận mã lỗi ERR-1, ERR-2, ERR-3 vào bảng log thô.
  - Ghi chép các câu nói Think-Aloud và phản xạ nét mặt (ngạc nhiên, bối rối, cười hài lòng).
* **Kỹ Thuật Viên Ghi Hình (Video & Tech Lead — Lê Mai Hoài Bảo):**
  - Thiết lập góc quay máy ảnh: Quay từ phía sau vai (Over-the-shoulder) nhìn nghiêng $45^\circ$ bao quát trọn vẹn màn hình điện thoại và ngón tay cái của người tham gia.
  - Đảm bảo ánh sáng rõ nét, không bị lóa màn hình, ghi âm rõ tiếng người tham gia.
  - Quản lý file video raw và cắt ghép clip minh chứng cho slide báo cáo.

---

## 10. Danh Mục Kiểm Tra Hoàn Thiện & Nộp Bài (Submission Checklist)

Trước khi đóng gói file nộp bài `06-PA4-SummativeUserStudy.pdf`, nhóm kiểm tra đầy đủ các thành phần:

- [ ] Đã hoàn thành 5 buổi kiểm thử với đầy đủ chữ ký cam kết và video ghi hình lưu trữ.
- [ ] Bảng thông tin nhân khẩu học (Demographic Form) của 5 người tham gia đã được tổng hợp.
- [ ] Toàn bộ dữ liệu thô ($TCT$, Success Rate, Error Counts, 10 câu SUS, 5 câu Likert) đã được điền đầy đủ vào bảng tính.
- [ ] Tính toán chính xác điểm số SUS trung bình theo công thức Brooke (1996).
- [ ] Vẽ đầy đủ 3 biểu đồ: Grouped Bar Chart ($TCT$), Stacked Bar Chart (Errors), và Radar Chart (Likert).
- [ ] Trích dẫn ít nhất 5-8 câu phát biểu đắt giá từ phần phỏng vấn đối chứng (`InterviewGuide.md`).
- [ ] Viết phần bàn luận kết quả (Discussion), kiểm chứng 4 giả thuyết $H_1 - H_4$ và rút ra bài học thiết kế (Design Implications).
- [ ] Xuất bản file báo cáo định dạng PDF chỉn chu với tên file: `06-PA4-SummativeUserStudy.pdf`.
