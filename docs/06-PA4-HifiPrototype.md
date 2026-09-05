# BÁO CÁO NGUYÊN MẪU ĐỘ TRUNG THỰC CAO (HI-FI PROTOTYPE REPORT)
## Đồ Án Môn Học 4 (PA4) — Thiết Kế Giao Diện (CSC13112)
**Giảng viên:** TS. Lê Khánh Duy | **Trợ giảng:** ThS. Phạm Nguyễn Sơn Tùng  
**Nhóm thực hiện:** Nhóm 06  
**Thành viên nhóm:**  
- Lê Mai Hoài Bảo (23127008)
- Lâm Hữu Khánh (23127202)
- Phạm Chí Bảo Ninh (23127096)
- Trương Công Thiên Phú (23127252)
- Phùng Ngọc Tuấn (23127144)

---

## 🎥 LIÊN KẾT VIDEO DEMO SẢN PHẨM & MINH CHỨNG KIỂM THỬ (YÊU CẦU BẮT BUỘC)

> 🔗 **Đường dẫn Video Demo Sản Phẩm Trên YouTube (High-Fidelity Interactive Demo):**  
> **[https://www.youtube.com/watch?v=jkVPSlJTUtY](https://www.youtube.com/watch?v=jkVPSlJTUtY)**  
> *(Video ghi lại quá trình thao tác tương tác thật 100% trên trình duyệt di động: Màn hình Home $\rightarrow$ Điều hướng Bottom Nav 1 tay $\rightarrow$ Schedule Date Strip $\rightarrow$ Bộ lọc Search/Chips $\rightarrow$ Match Detail 8×8 Chessboard $\rightarrow$ Contextual Back Navigation).*

### 📹 Danh Sách Video Ghi Hình 6 Phiên Kiểm Thử Người Dùng (Summative Usability Proofs):
1. **Participant P01 (Session 1):** [https://www.youtube.com/watch?v=jkVPSlJTUtY](https://www.youtube.com/watch?v=jkVPSlJTUtY)
2. **Participant P02 (Session 2):** [https://www.youtube.com/watch?v=dVKwWvC-f_g](https://www.youtube.com/watch?v=dVKwWvC-f_g)
3. **Participant P03 (Session 3):** [https://www.youtube.com/watch?v=8K-5v6kj4i8](https://www.youtube.com/watch?v=8K-5v6kj4i8)
4. **Participant P04 (Session 4):** [https://www.youtube.com/watch?v=FYYQkVIUwJ4](https://www.youtube.com/watch?v=FYYQkVIUwJ4)
5. **Participant P05 (Session 5):** [https://www.youtube.com/watch?v=H0-6QAFTI7c](https://www.youtube.com/watch?v=H0-6QAFTI7c)
6. **Participant P06 (Session 6):** [https://www.youtube.com/watch?v=jkVPSlJTUtY](https://www.youtube.com/watch?v=jkVPSlJTUtY)

---

## 1. Giới Thiệu & Mục Tiêu Thiết Kế

Sau quá trình thử nghiệm định hình (Formative Usability Testing) với 6 biến thể nguyên mẫu giấy ở giai đoạn PA3, Nhóm 06 đã lựa chọn và hợp nhất hai giải pháp thiết kế chiến thắng:
1. **`Nav-1` (Fixed Bottom Navigation Bar):** Thanh điều hướng cố định 5 tab ở đáy màn hình, giải quyết triệt để vấn đề với ngón cái (Thumb Zone Reachability).
2. **`Sch-2` (Date Strip Filter + Dedicated 8×8 Match Detail):** Thanh trượt ngày trực quan kết hợp thẻ trận đấu cô đọng và màn hình phân tích thế trận bàn cờ 8×8.

Tại PA4, nhóm đã phát triển giải pháp này thành **Nguyên mẫu có độ trung thực cao (High-Fidelity Prototype)** hoàn chỉnh, có khả năng tương tác trực tiếp với dữ liệu thực tế trên mọi thiết bị di động.

---

## 2. Kiến Trúc Kỹ Thuật & Công Nghệ Hiện Thực

Prototype không sử dụng mockup tĩnh mà được hiện thực hóa bằng mã nguồn web tương tác thật:
* **Core Framework:** React 19 kết hợp TypeScript đảm bảo tính an toàn kiểu dữ liệu và cấu trúc component module hóa.
* **Build Tool & Runtime:** Vite cho tốc độ khởi động nhanh, hot-reloading tức thì và hiệu năng dựng hình mượt mà 60fps trên mobile.
* **Routing:** `React Router` với `HashRouter` hỗ trợ điều hướng không độ trễ và deploy static linh hoạt.
* **Design Tokens & Styling:** CSS thuần hiện đại (CSS Custom Properties), layout CSS Grid/Flexbox tối ưu cho chuẩn màn hình di động `390×844` (iPhone 14 / modern smartphones).
* **Thành phần tương tác cao cấp:** Radix Popover và React Day Picker cho bộ chọn ngày tháng (Date Picker Modal) chuẩn shadcn/ui.
* **Dữ liệu thực tế (Realistic Content):** Tích hợp thông tin giải đấu *Freestyle Chess Grand Slam 2025*, hệ số ELO chuẩn FIDE, ảnh chân dung và quốc kỳ của các Đại kiện tướng quốc tế (Magnus Carlsen, Lê Quang Liêm, Hikaru Nakamura, Fabiano Caruana, Vincent Keymer...).

---

## 3. Chi Tiết 3 Màn Hình Cốt Lõi Trong User Journey

```
[Màn hình 1: Home] ──(Bottom Nav / CTA)──> [Màn hình 2: Schedule] ──(View Details)──> [Màn hình 3: Match Detail]
       ↑                                             │                                          │
       └──────────────────(Back Control)─────────────┴──────────────(Contextual Back)──────────┘
```

### 3.1. Màn hình 1: Home (`#/`)
* **Hero Banner:** Banner giải đấu trực tiếp "Freestyle Chess Grand Slam" với hiệu ứng gradient cao cấp, thông tin ngày thi đấu và nút CTA "View Schedule" điều hướng nhanh.
* **Quick Stats:** 3 thẻ thống kê nhanh (Live Matches, Total Players, Upcoming Events).
* **Featured Match Card:** Trận đấu tâm điểm với avatar 2 bên, chỉ số ELO và nút "Watch Live".
* **Fixed Bottom Navigation (Nav-1):** 5 tab cố định (*Schedule, Videos, Home, News, More*) với kích thước touch target đạt chuẩn $\ge 48\times 48\text{ px}$.
* **More Action Sheet:** Nhấn tab 'More' sẽ mở menu các trang phụ (Standings, Players, Rules) mượt mà mà không che khuất thanh điều hướng chính.

### 3.2. Màn hình 2: Schedule (`#/schedule`)
* **Top App Bar:** Tiêu đề trang, nút tìm kiếm và nút Date Picker.
* **Horizontal Date Strip:** Thanh trượt ngày cuộn ngang mượt mà, cho phép chọn bất kỳ ngày nào trong tuần. Tab ngày đang chọn được highlight xanh nổi bật kèm hiệu ứng vi tương tác.
* **Date Picker Modal:** Cho phép nhảy nhanh đến các ngày xa trong tháng, đi kèm nút "Go to Today" để trở về ngày hiện tại.
* **Instant Search & Filter Chips:** Tìm kiếm tức thời theo tên kỳ thủ/địa điểm kết hợp bộ lọc trạng thái (*Live, Upcoming, Finished*).
* **Expandable Matchup Cards:** Thẻ trận đấu hiển thị cờ quốc gia, tên 2 kỳ thủ, ELO, trạng thái ván đấu và nút "View Details $\rightarrow$".

### 3.3. Màn hình 3: Match Detail (`#/schedule/:matchId`)
* **Sticky Header & Contextual Back Button:** Nút Back rõ ràng ở góc trên bên trái, giúp quay lại đúng vị trí ngày và bộ lọc trên trang Schedule mà không bị mất trạng thái (Preserved Context).
* **Player Banner:** Hiển thị 2 kỳ thủ đối xứng (Cầm trắng vs Cầm đen), quốc kỳ, ELO và tỷ số trực tiếp.
* **Interactive 8×8 Chessboard:** Bàn cờ 8×8 trực quan hiển thị đúng thế trận thực tế của ván cờ.
* **PGN Move History & Game Clock:** Danh sách nước đi theo chuẩn quốc tế và thời gian thi đấu còn lại.

---

## 4. Bốn Tiêu Chuẩn Công Thái Học & Khả Năng Tiếp Cận (WCAG AAA)

1. **Touch Target Size $\ge 48\times 48\text{ px}$:** Loại bỏ hoàn toàn lỗi chạm trượt ngón cái.
2. **Thumb Zone Optimization:** Đưa các chức năng thường dùng nhất vào nửa dưới màn hình (Natural Thumb Zone).
3. **Contrast Ratio $\ge 4.5:1$:** Nền Light Mode Clean với độ tương phản cao, dễ đọc dưới ánh sáng ngoài trời.
4. **Phản hồi tức thì $< 250\text{ ms}$:** Toàn bộ vi tương tác (micro-interactions) phản hồi tức thì dưới 250ms tạo trải nghiệm mượt mà như Native App.

---

## 5. Hướng Dẫn Cài Đặt & Chạy Thử Nghiệm

1. Cài đặt dependencies:
   ```bash
   cd prototype
   pnpm install
   ```
2. Khởi chạy development server (hỗ trợ truy cập qua Wi-Fi nội bộ bằng điện thoại):
   ```bash
   pnpm dev
   ```
3. Mở trên trình duyệt mobile: `http://<IP_MAY_TINH>:5173/` hoặc trải nghiệm trực tiếp trên máy tính với DevTools Mobile Mode (iPhone 14, 390×844).
