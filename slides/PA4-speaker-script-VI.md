# Kịch bản thuyết trình PA4 — Freestyle Chess Mobile Web

Nguồn chính: `docs/PA4-LKDuy-2026-EN.md` và `docs/PA4-ImplementationPlan.md`. PA3 chỉ cung cấp hai quyết định thiết kế đầu vào.

## Slide 1 — PA4: High-fidelity prototype & user study

Chào thầy và các bạn. Đây là bài trình bày PA4 của Nhóm 06: high-fidelity prototype và summative user study cho Freestyle Chess Mobile Web. Trọng tâm là sản phẩm PA4, cách prototype hoạt động và cách nhóm đánh giá nó.

## Slide 2 — Current usability problems

Trước khi thiết kế PA4, nhóm xác định hai vấn đề trên website mobile hiện tại. Thứ nhất, menu hamburger nằm ở góc trên bên trái nên khó chạm khi cầm điện thoại bằng một tay, đồng thời các điểm đến chính bị ẩn. Thứ hai, trang Schedule chỉ liệt kê ngày, địa điểm và Read More, nhưng thiếu player, trạng thái, tỷ số và thông tin trận. Đây là hai vấn đề mà PA4 cần giải quyết.

## Slide 3 — Selected solution 1: Nav-1

Solution thứ nhất được chọn từ formative testing là Nav-1: fixed bottom navigation. Năm destination chính luôn hiển thị trong tầm ngón tay, active tab được nhấn mạnh và More mở các destination phụ. Hai ảnh paper prototype minh họa trạng thái mặc định và trạng thái mở rộng.

## Slide 4 — Selected solution 2: Sch-2

Solution thứ hai được chọn là Sch-2: date strip kết hợp match information. Người dùng chọn ngày trực tiếp, xem matchup ngay trên schedule và mở trận cần phân tích. Solution này giải quyết vấn đề thiếu thông tin của trang Schedule hiện tại.

## Slide 5 — Hi-fi prototype scope

Prototype PA4 gồm ba màn hình trong một user journey hoàn chỉnh: Home tạo điểm vào, Schedule hỗ trợ tìm trận, và Match Detail cung cấp thông tin người chơi, game và bàn cờ.

## Slide 6 — Prototype: Home

Home dùng content gần thật, CTA View Schedule và fixed bottom navigation. Ảnh thứ hai cho thấy More menu mở các destination phụ mà không che khuất năm tab chính.

## Slide 7 — Prototype: Schedule

Schedule hiển thị ba trạng thái quan trọng. Màn hình chính có date strip, search và status filter. Date picker cho phép nhảy nhanh đến ngày xa. Match card mở rộng cung cấp tournament, location và View Details.

## Slide 8 — Prototype: Match Detail

Match Detail hoàn tất task flow. Back control ở đầu trang giúp quay lại Schedule. Player banner hiển thị tên, Elo, quốc kỳ, tỷ số và trạng thái; phần Games mở rộng để xem thông tin và bàn cờ.

## Slide 9 — Live demo run

Trong khoảng bốn phút, nhóm sẽ mở Home, vào Schedule, chọn ngày 16 tháng 8, tìm trận Carlsen và Lê Quang Liêm, sau đó mở Match Detail và bàn cờ. Flow này chứng minh prototype có interaction thật.

## Slide 10 — Summative study design

Nhóm so sánh prototype với mobile website hiện tại của freestylechess.com. Năm participants dùng cả hai system theo thiết kế within-subjects; thứ tự AB/BA được xen kẽ và tất cả session được quay video.

## Slide 11 — User study tasks

Task 1 là mở Schedule khi cầm điện thoại một tay. Task 2 là tìm trận ngày 16 tháng 8 giữa Carlsen và Lê Quang Liêm, sau đó mở bàn cờ. Hai system dùng cùng task và success criteria.

## Slide 12 — Protocol and measures

Mỗi session gồm consent, test System A, SUS và Likert, nghỉ ngắn, test System B và interview. Nhóm thu thập completion time, success, errors và satisfaction để đánh giá efficiency, effectiveness và perceived usability.

## Slide 13 — Quantitative results

Bấm vào ba con số để nhập completion time, success rate và SUS. Kéo thả biểu đồ vào khung và chỉ viết kết luận sau khi dữ liệu study đã được tổng hợp.

## Slide 14 — Qualitative findings

Khung trái dùng cho ảnh testing session hoặc affinity map. Hai quote nên là phát biểu thật có participant ID; ô cuối ghi issue quan trọng nhất và hướng iteration tiếp theo.

## Slide 15 — PA4 conclusion

Đây là một bài PA4 hoàn chỉnh: xây high-fidelity prototype có interaction thật, đánh giá với năm participants và dùng evidence để quyết định bước cải tiến. PA3 chỉ là nguồn evidence đầu vào; sản phẩm, demo và evaluation đều thuộc PA4.

## Thao tác trước khi thuyết trình

- Kiểm tra các screenshot hi-fi trên slide 5–8 và flow demo thực tế.
- Nhập dữ liệu study thật trên slide 13–14.
- Nhấn `S` xem script, `E` chỉnh text và `F` toàn màn hình.
