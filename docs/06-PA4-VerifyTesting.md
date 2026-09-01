# VERIFY TESTING

## 1. Bước 1: Xác định Câu hỏi Nghiên cứu (Define the Research Question)

### 1.1. Câu hỏi tổng quát
Kế hoạch hiện có đã phát biểu rõ dạng câu hỏi: giao diện Hi fi Prototype so với giao diện di động thực tế của freestyle-chess.com khác nhau như thế nào về hiệu quả sử dụng, cụ thể ở hai điểm: điều hướng bằng một tay và tra cứu lịch thi đấu.
**Kết luận:** Đạt yêu cầu Bước 1.1.

### 1.2. Đối tượng mục tiêu (Target Population)
Kế hoạch hiện có mô tả từng người tham gia cụ thể (tuổi, nghề nghiệp, mức độ quan tâm cờ vua, thói quen dùng điện thoại một tay), nhưng chưa có một **phát biểu tổng quát duy nhất** về đối tượng mục tiêu (ví dụ dạng: "người dùng di động phổ thông, có hoặc không quan tâm cờ vua, quen thao tác một tay khi di chuyển").
**Kết luận:** Từng phần. Có dữ liệu mô tả mẫu người tham gia nhưng thiếu câu phát biểu chính thức về target population. Xem Mục 6, câu hỏi 1.

### 1.3. Nhiệm vụ (Task)
Kế hoạch đã xác định rõ 2 nhiệm vụ:
* **Task 1:** Điều hướng một tay từ màn hình chính đến trang Schedule.
* **Task 2:** Tra cứu trận đấu ngày 16/8 và mở màn hình chi tiết bàn cờ 8x8.

Mỗi Task đều có kịch bản thực tế, hiệu lệnh cụ thể, mốc bắt đầu và kết thúc bấm giờ, cùng ba mức tiêu chuẩn thành công (trực tiếp, có trợ giúp, thất bại).
**Kết luận:** Đạt yêu cầu Bước 1.3

### 1.4. Đo lường (Measures)

| Tiêu chí đo lường | Có trong kế hoạch không | Chi tiết tương ứng |
| :--- | :---: | :--- |
| Tốc độ (Speed) | Có | Task Completion Time (TCT) từng Task |
| Độ chính xác (Accuracy) | Có | Task Success Rate, Error Count (Slip, Mistake, Hesitation) |
| Khả năng học (Learnability) | Không có | Không có phép đo lặp lại theo thời gian để quan sát đường cong học tập |
| Đo lường bổ sung (không bắt buộc trong bài giảng nhưng hợp lệ) | Có | SUS Score, Likert Satisfaction 5 khía cạnh, phỏng vấn định tính |

**Kết luận:** Đạt yêu cầu tối thiểu (Speed và Accuracy đã có, đo lường được). Không đo Learnability là điều hợp lý vì nghiên cứu này là summative usability test một lần, không phải thử nghiệm hiệu suất lặp lại nhiều block nên việc bỏ qua learnability không phải là thiếu sót nghiêm trọng.

### 1.5. Yếu tố khác (Factors)
Cần xác định các yếu tố ngoài loại task có thể ảnh hưởng đến kết quả đo. Kế hoạch hiện có xác định:
* Yếu tố bối cảnh sử dụng: cầm điện thoại một tay khi di chuyển (được kiểm soát bằng hướng dẫn bắt buộc trong Task 1).
* Yếu tố thứ tự trình bày hệ thống (thứ tự A trước B hoặc B trước A), được xử lý bằng counterbalancing.
* Yếu tố nền tảng thiết bị: đã giới hạn chỉ dùng thiết bị di động, không dùng laptop hay PC, đúng như phạm vi được xác nhận.

**Kết luận:** Đạt yêu cầu Bước 1.5. Các yếu tố quan trọng nhất (thứ tự trình bày, tư thế cầm máy) đã được xác định và có phương án xử lý.

---

## 2. Bước 2: Xác định Biến (Determine Variables)

### 2.1. Biến độc lập (IV)
* **IV chính (Primary):** Hệ thống giao diện, 2 mức: Baseline (freestylechess.com) và Prototype (Hi fi nhóm 06). Đây là IV chính vì đây là mục tiêu so sánh trung tâm của nghiên cứu.
* **Biến liên quan khác:** Task (Task 1, Task 2) đóng vai trò là loại nhiệm vụ khác nhau, không phải là hai mức của cùng một IV có thể so sánh trực tiếp với nhau (Task 1 đo điều hướng, Task 2 đo tra cứu), nên không cần xem là IV cần counterbalance như hai mức của cùng một biến.

### 2.2. Biến phụ thuộc (DV)
TCT, Success Rate, Error Count (phân theo 3 mã lỗi ERR-1, ERR-2, ERR-3), SUS Score, Likert Satisfaction. Tất cả đều là các đại lượng đo được sau khi thao tác.
**Kết luận:** Đạt yêu cầu.

### 2.3. Biến kiểm soát (Control Variable)
Kế hoạch đã kiểm soát: cùng kịch bản lời thoại chuẩn hóa cho mọi người tham gia, cùng quy tắc can thiệp và gợi ý (chỉ 2 mức cố định), cùng thời lượng buổi test 20 phút, cùng góc quay video, cùng bối cảnh cầm máy một tay.

Một điểm chưa thấy được nêu rõ trong kế hoạch: **liệu thiết bị di động dùng để test có được chuẩn hóa (nhóm cung cấp cùng 1 mẫu điện thoại cho mọi người tham gia) hay mỗi người dùng điện thoại cá nhân của họ.** Vì Hi fi Prototype được thiết kế cố định theo viewport 390x844 (iPhone 14) trong khi freestylechess.com là trang web thật sẽ tự co giãn theo màn hình thiết bị thật của người tham gia, nếu không chuẩn hóa thiết bị thì kích thước màn hình khác nhau giữa những người tham gia có thể trở thành biến ngoại lai ảnh hưởng đến TCT và Error Count.
**Kết luận:** Từng phần.

### 2.4. Biến ngẫu nhiên (Random Variable)
Đặc điểm người tham gia (tuổi, mức độ quen thuộc với cờ vua, thói quen dùng điện thoại) đã được ghi nhận trong bảng mô tả 5 người tham gia, đúng vai trò Random Variable giúp tăng tính khái quát hóa (generalizability).
**Kết luận:** Đạt yêu cầu.

### 2.5. Rà soát Biến gây nhiễu (Confounding Variable)
1. **Thứ tự trình bày (order effect):** đã được xử lý bằng counterbalancing AB/BA, đúng hướng dẫn.
2. **Kinh nghiệm sẵn có với hệ thống cũ (prior experience):** Đối chiếu với dữ liệu người tham gia trong kế hoạch: P2 chơi cờ thường xuyên và có khả năng đã dùng các trang cờ vua tương tự, P5 theo dõi giải đấu Freestyle Chess Grand Slam nên nhiều khả năng đã từng truy cập freestylechess.com trước đây. Trong khi đó, **không ai trong 5 người tham gia từng thấy Hi fi Prototype trước buổi test.**

---

## 3. Bước 3: Sắp xếp Điều kiện (Arrange Conditions) cho Thiết kế Within-Subject

### 3.1. Liệt kê IV và mức
IV duy nhất cần cân bằng thứ tự: Hệ thống, 2 mức (Baseline, Prototype). Đã được liệt kê rõ trong kế hoạch.

### 3.2. Chiến lược cân bằng thứ tự
Kế hoạch chọn cân bằng đầy đủ (fully counter balanced) dạng AB/BA cho IV chính: "IV chính luôn cần được counter balance."

### 3.3. Số người tham gia tối thiểu
Với 2 mức, cân bằng đầy đủ dạng AB/BA cần số người tham gia là bội số của 2 để mỗi thứ tự có số người bằng nhau. Đối chiếu với bảng phân bổ thực tế trong kế hoạch:
* Thứ tự A → B (Baseline trước): P1, P3, P5 (3 người)
* Thứ tự B → A (Prototype trước): P2, P4 (2 người)

Với N = 5 (số lẻ), việc cân bằng 3 và 2 là không thể tránh khỏi nếu giữ nguyên 5 người, vì 5 không chia hết cho 2. Đây không phải là lỗi thiết kế mà là hệ quả tất yếu của cỡ mẫu lẻ.
**Kết luận:** Cần nhóm xác nhận có chấp nhận độ lệch nhỏ này hay không.

### 3.4. Sắp xếp tổng thể
Bảng phân bổ người tham gia theo thứ tự A/B đã có sẵn và rõ ràng trong kế hoạch (bảng Counterbalancing Matrix).

### 3.5. Sắp xếp chi tiết cho từng người tham gia
Trong mỗi hệ thống, thứ tự thực hiện luôn cố định là Task 1 rồi đến Task 2, không đổi thứ tự giữa các người tham gia. Vì Task 1 và Task 2 là hai nhiệm vụ khác nhau về bản chất (điều hướng và tra cứu), không phải hai mức có thể hoán đổi của cùng một IV, nên việc giữ thứ tự cố định Task 1 trước Task 2 là hợp lý và phù hợp, không cần counterbalance.
**Kết luận:** Đạt yêu cầu Bước 3 nhìn chung, riêng mục 3.3 cần xác nhận thêm.

---

## 4. Bước 4: Xác định Block và Trial (Decide Blocks and Trials)
Trial là một lần lặp của một điều kiện, khuyến nghị **tối thiểu 3 trial cho mỗi điều kiện** để tăng độ tin cậy, còn Block là một chu kỳ lặp lại toàn bộ các điều kiện dùng để quan sát hiệu ứng học tập.

Đối chiếu với kế hoạch hiện có:
* Mỗi Task trong mỗi hệ thống chỉ được thực hiện **đúng 1 lần** (1 trial), không lặp lại.
* Không có cấu trúc block, tức là không lặp lại toàn bộ chuỗi Task để quan sát đường học tập theo thời gian.

**Kết luận:** Từng phần, thông lệ ngành cho phép 1 trial trong loại nghiên cứu usability test, nhưng vì khuyến nghị tối thiểu 3, đây vẫn cần được nhóm xác nhận là quyết định có chủ đích chứ không phải bị bỏ sót.

Về thời lượng: tổng thời gian mỗi buổi khoảng 20 phút, nằm trong giới hạn hợp lý. Thời lượng 20 phút hoàn toàn phù hợp và không gây mệt mỏi cho người tham gia.
**Kết luận:** Đạt yêu cầu về thời lượng thử nghiệm.

---

## 5. Bước 5: Thiết lập Hướng dẫn và Quy trình (Set Instructions and Procedures)

| Các bước thực hiện | Có trong kế hoạch không | Ghi chú đối chiếu |
| :--- | :---: | :--- |
| 5.1 Tuyển người tham gia | Có | 5 người, có bảng đặc điểm và phân bổ thứ tự rõ ràng |
| 5.2 Phiếu đồng thuận và khảo sát trước | Có | Bước 1 (Consent) và Bước 2 (Demographic Form) trong kịch bản |
| 5.3 Hướng dẫn | Có | Kịch bản lời thoại chuẩn hóa cho từng bước, kèm quy tắc can thiệp cố định 2 mức |
| 5.4 Trial làm quen (Practice) | Không thấy | Không có bước cho người tham gia làm quen thao tác trước khi bấm giờ chính thức ở mỗi hệ thống |
| 5.5 Thử nghiệm chính có nghỉ | Có | Task 1 và Task 2 cho từng hệ thống, có khoảng nghỉ Wash out 90 giây giữa 2 hệ thống |
| 5.6 Khảo sát và phỏng vấn sau | Có | SUS, Likert 5 khía cạnh, phỏng vấn bán cấu trúc 7 câu |
| 5.7 Debriefing | Từng phần | Bước 9 chỉ ghi "cảm ơn, tặng quà, kết thúc", chưa thấy nội dung giải thích lại mục tiêu nghiên cứu hoặc hỏi đáp cuối buổi |

### Điểm cần lưu ý đặc biệt: Practice Trial (Bước 5.4)
Hiện kế hoạch chưa có bước làm quen ngắn (ví dụ vài giây thao tác thử trên giao diện trước khi bấm giờ chính thức) cho cả hai hệ thống.
**Kết luận:** Đây là điểm còn thiếu trong quy trình, cần nhóm xác nhận hướng xử lý. 
---

## 6. Danh sách Câu hỏi Cần Xác nhận

1. **Định nghĩa Target Population (Bước 1.2):** Nhóm có muốn bổ sung một câu phát biểu tổng quát duy nhất về đối tượng mục tiêu của nghiên cứu (ví dụ nhóm tuổi, mức độ quen thuộc công nghệ, có bắt buộc biết chơi cờ hay không), thay vì chỉ liệt kê đặc điểm từng người tham gia riêng lẻ?
2. **Chuẩn hóa thiết bị (Bước 2.3, Control Variable):** Tất cả 5 hoặc 6 người tham gia có dùng chung một mẫu điện thoại do nhóm cung cấp hay mỗi người dùng điện thoại cá nhân của họ? Nếu dùng điện thoại cá nhân, nhóm có ghi nhận kích thước màn hình của từng người để đối chiếu sau này không?
3. **Practice Trial và kiểm soát độ quen thuộc với Baseline (Bước 2.5 và Bước 5.4):** Nhóm có dự định thêm một bước làm quen ngắn (không tính giờ) trên cả hai hệ thống trước khi bắt đầu đo TCT chính thức hay không? Nếu không thêm, nhóm có cách nào khác để xử lý việc một số người tham gia đã biết freestylechess.com trong khi không ai biết Prototype trước đó?
4. **Cỡ mẫu và cân bằng thứ tự (Bước 3.3):** Với 5 người, tỉ lệ thứ tự A trước B và B trước A là 3 và 2, không cân bằng tuyệt đối. Nhóm có dự định tuyển thêm 1 người (thành N = 6) để đạt tỉ lệ 3 và 3 hay giữ nguyên N = 5 như hiện tại?
5. **Số lượng trial cho mỗi Task (Bước 4):** Việc mỗi Task chỉ thực hiện 1 lần cho mỗi hệ thống có phải là quyết định chủ đích của nhóm (do đặc thù usability test theo kịch bản một lần) hay nhóm muốn cân nhắc thêm lần lặp?
6. **Nội dung Debriefing (Bước 5.7):** Ở Bước 9 (kết thúc buổi test), nhóm có kịch bản cụ thể để giải thích lại mục tiêu thật của nghiên cứu và trả lời thắc mắc của người tham gia hay chưa, hay hiện tại dự định chỉ dừng ở mức cảm ơn và tặng quà?

---

## 7. Bảng Tổng hợp Trạng thái Kiểm chứng

| Bước | Nội dung | Trạng thái |
| :---: | :--- | :---: |
| 1.1 | Câu hỏi tổng quát | Đạt |
| 1.2 | Đối tượng mục tiêu | Từng phần |
| 1.3 | Nhiệm vụ (Task) | Đạt |
| 1.4 | Đo lường | Đạt (thiếu Learnability, chấp nhận được) |
| 1.5 | Yếu tố khác | Đạt |
| 2.1 | Biến độc lập | Đạt |
| 2.2 | Biến phụ thuộc | Đạt |
| 2.3 | Biến kiểm soát | Từng phần (thiết bị) |
| 2.4 | Biến ngẫu nhiên | Đạt |
| 2.5 | Rà soát confound | Cần xác nhận (prior experience) |
| 3.1 - 3.2 | IV và chiến lược cân bằng | Đạt |
| 3.3 | Số người tham gia tối thiểu | Cần xác nhận (lệch 3/2) |
| 3.4 - 3.5 | Sắp xếp tổng thể và chi tiết | Đạt |
| 4 | Block và Trial | Từng phần (1 trial/điều kiện) |
| 5.1 - 5.3 | Tuyển người, đồng thuận, hướng dẫn | Đạt |
| 5.4 | Practice trial | Chưa có, cần xác nhận |
| 5.5 | Thử nghiệm chính có nghỉ | Đạt |
| 5.6 | Khảo sát và phỏng vấn sau | Đạt |
| 5.7 | Debriefing | Từng phần |

**Kết luận chung:** Ba khoảng trống đáng lưu ý nhất trước khi triển khai chính thức là: chưa có bước làm quen (practice trial) để kiểm soát chênh lệch mức độ quen thuộc giữa hai hệ thống, số lượng trial mỗi điều kiện thấp hơn khuyến nghị, và cỡ mẫu lẻ khiến việc cân bằng thứ tự không tuyệt đối. Đây đều là các điểm nên được nhóm xác nhận rõ trước khi tiến hành 5 buổi kiểm thử chính thức.