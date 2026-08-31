# Freestyle Chess Hi-fi Prototype

Prototype giao diện Freestyle Chess được xây dựng bằng React, TypeScript và Vite. Giao diện được thiết kế mobile-first nhưng vẫn hoạt động như một trang web thông thường, có chiều rộng tối đa `1000px` và được căn giữa trên màn hình lớn.

Prototype tập trung vào hai thiết kế chính và ba trang nội dung:

- `Nav-1`: thanh điều hướng cố định ở đáy màn hình.
- `Sch-2`: date strip, danh sách trận theo ngày và trang chi tiết trận đấu.
- Home: tổng quan sự kiện, video và tin tức nổi bật.
- Videos: video/stream có bộ lọc theo loại nội dung.
- News: danh sách bài viết dẫn tới bài gốc của Freestyle Chess.

## Công nghệ đang sử dụng

- React 19 và TypeScript.
- Vite để chạy development server và tạo production build.
- React Router với `HashRouter`, phù hợp khi deploy dưới dạng static website.
- Font Awesome cho icon giao diện.
- Radix Popover và React Day Picker cho date picker theo cấu trúc shadcn/ui.
- Vitest và Testing Library cho kiểm thử.
- Dữ liệu prototype được đọc từ các file JSON trong [`src/data`](./src/data/).

## Yêu cầu môi trường

- Node.js `20.19+` hoặc `22.12+`.
- pnpm. Dự án hiện được kiểm tra với pnpm 10.
- Internet để tải Flag API, nội dung Chess.com và những nội dung bên ngoài khác.

## Cài đặt và chạy trên máy tính

Mở terminal tại folder `TKGD-PA4/prototype`, sau đó chạy:

```bash
pnpm install
pnpm dev
```

Script `pnpm dev` đã được cấu hình thành:

```text
vite --host
```

Vì vậy không cần tự thêm `--host` vào lệnh. Terminal sẽ hiển thị các địa chỉ tương tự:

```text
Local:   http://localhost:5173/
Network: http://192.168.1.10:5173/
```

Mở địa chỉ `Local` để xem trên chính máy tính.

Không mở trực tiếp file `index.html` bằng trình duyệt. Prototype cần được phục vụ qua Vite để module, route và asset hoạt động đúng.

## Chạy prototype trên điện thoại

Điện thoại không thể dùng `localhost:5173`, vì `localhost` trên điện thoại là chính điện thoại. Cần truy cập bằng địa chỉ IPv4 của máy tính.

### 1. Kết nối cùng mạng

Máy tính và điện thoại phải kết nối cùng một mạng Wi-Fi/LAN. Nên tắt VPN trong lúc kiểm tra. Một số mạng Guest Wi-Fi hoặc mạng trường học có thể chặn các thiết bị nhìn thấy nhau.

### 2. Khởi động development server

Tại folder prototype, chạy:

```bash
pnpm dev
```

Do script đã dùng `vite --host`, cổng development được expose cho các thiết bị khác trong cùng mạng nội bộ.

### 3. Mở trên điện thoại

Khi chạy `pnpm dev`, ví dụ màn hình hiện các link

```Shell
  ➜  Local:   http://localhost:5173/
  ➜  Network: http://192.168.56.1:5173/
  ➜  Network: http://192.168.101.100:5173/
```

Dùng 1 trong 2 địa chỉ `Network` được cung cấp.

### 4. Cho phép qua Windows Firewall

Trong lần chạy đầu tiên, Windows Defender Firewall có thể hỏi quyền truy cập mạng cho Node.js. Chọn cho phép trên `Private networks`.

Nếu trước đó đã từ chối:

1. Mở `Windows Security`.
2. Chọn `Firewall & network protection`.
3. Chọn `Allow an app through firewall`.
4. Cho phép Node.js trên mạng `Private`.

Chỉ nên expose development server trong mạng nội bộ đáng tin cậy. Lệnh này không phải phương án deploy production ra Internet.

## Các lệnh chính

| Lệnh                      | Chức năng                                                                        |
| -------------------------- | ---------------------------------------------------------------------------------- |
| `pnpm dev`               | Chạy Vite với host được expose trong mạng nội bộ.                          |
| `pnpm build`             | Typecheck và tạo production build trong folder`dist`.                          |
| `pnpm typecheck`         | Kiểm tra TypeScript.                                                              |
| `pnpm test`              | Chạy toàn bộ unit test bằng Vitest.                                            |
| `pnpm data:import-match` | Mở CLI để nhập một trận đấu từ các PGN tag block và Chess.com embed ID. |

Trước khi bàn giao thay đổi, nên chạy:

```bash
pnpm typecheck
pnpm test
pnpm build
```

## Cấu trúc code

```text
prototype/
├── public/
│   ├── favicon.png
│   └── logo.svg
├── scripts/
│   ├── import-match.mjs
│   └── import-match.test.mjs
├── src/
│   ├── components/
│   │   ├── ui/
│   │   ├── BottomNavigation.tsx
│   │   ├── BrandHeader.tsx
│   │   ├── ChessEmbed.tsx
│   │   ├── DateStrip.tsx
│   │   ├── GameAccordion.tsx
│   │   ├── MatchCard.tsx
│   │   ├── NewsCard.tsx
│   │   └── PlayerCard.tsx
│   │   └── VideoCard.tsx
│   ├── data/
│   │   ├── home.json
│   │   ├── news.json
│   │   ├── videos.json
│   │   ├── navigation.json
│   │   ├── players.json
│   │   ├── events.json
│   │   ├── matches.json
│   │   └── README.md
│   ├── lib/
│   ├── pages/
│   ├── App.tsx
│   ├── main.tsx
│   ├── styles.css
│   └── types.ts
├── index.html
└── package.json
```

### Routing và layout

[`src/App.tsx`](./src/App.tsx) khai báo các route chính và dùng `HashRouter`. Bottom navigation được render ngoài phần route để luôn cố định ở đáy màn hình.

- `#/schedule`: danh sách trận đấu theo ngày.
- `#/schedule/:matchId`: chi tiết một trận đấu.
- `#/`: trang Home.
- `#/videos`: thư viện video và stream.
- `#/news`: danh sách tin tức.
- Các route trong More hiện hiển thị placeholder “Coming soon”.

[`src/components/BottomNavigation.tsx`](./src/components/BottomNavigation.tsx) tạo năm mục Schedule, Videos, Home, News và More. Danh sách route, URL và icon được đọc từ [`src/data/navigation.json`](./src/data/navigation.json).

### Schedule

[`src/pages/SchedulePage.tsx`](./src/pages/SchedulePage.tsx) chịu trách nhiệm:

- Đồng bộ ngày, search, status filter và match đang mở với query string.
- Lọc trận theo ngày được chọn.
- Search theo kỳ thủ, giải đấu hoặc địa điểm.
- Sắp xếp trận theo `match.id` tăng dần.
- Chỉ mở một Match Card tại một thời điểm.

[`src/components/DateStrip.tsx`](./src/components/DateStrip.tsx) hiển thị năm ngày trong vùng nhìn thấy, hỗ trợ cuộn ngang tự do và dùng date picker để chuyển nhanh tới ngày khác.

### Match detail và bàn cờ

[`src/pages/MatchDetailPage.tsx`](./src/pages/MatchDetailPage.tsx) hiển thị thông tin giải, ngày bắt đầu, trạng thái, kỳ thủ, Elo và danh sách game.

[`src/components/ChessEmbed.tsx`](./src/components/ChessEmbed.tsx) nhúng bàn cờ từ Chess.com bằng `embedId`. Các iframe được mount với `loading="eager"` ngay khi trang chi tiết render, kể cả khi Game Accordion chưa được mở.

Chess.com embed cần Internet. Nếu Chess.com không tải được, kiểm tra mạng, embed ID và console của trình duyệt.

### Dữ liệu

Dữ liệu nằm trong [`src/data`](./src/data/):

- `navigation.json`: cấu hình bottom navigation và các route ngoài Schedule.
- `players.json`: tên, title, quốc gia và ảnh kỳ thủ.
- `events.json`: tên giải, địa điểm và format.
- `matches.json`: ngày bắt đầu/kết thúc, trạng thái, Elo cấp trận và danh sách game kèm ngày thi đấu.
- `home.json`: hero, sự kiện sắp tới và ID nội dung nổi bật.
- `videos.json`: tên, loại, YouTube ID, thumbnail và link video.
- `news.json`: tên bài viết, ngày, tác giả và link bài gốc.

Schema chi tiết và những trường cần điền thủ công được mô tả trong [`src/data/README.md`](./src/data/README.md).

Không lưu Elo ở từng game. Elo trên trang chi tiết là snapshot từ game cuối cùng sau khi importer sắp xếp game theo Round.

## Nhập dữ liệu trận đấu

Chạy:

```bash
pnpm data:import-match
```

Mỗi lần chạy tạo đúng một match mới. Quy trình nhập:

1. Nhập Chess.com embed ID; có thể paste trực tiếp `[gid=15623306]` thay cho số ID.
2. Paste toàn bộ PGN export của game, gồm cả movetext nếu có. Importer chỉ lấy các tag cần thiết và bỏ qua FEN, SetUp cùng nước đi.
3. Khi movetext kết thúc bằng `1-0`, `0-1`, `1/2-1/2` hoặc `*`, game tự kết thúc. Với PGN chỉ có tags, nhập `END` trên một dòng riêng.
4. Chọn có nhập thêm game thuộc cùng match hay không, kiểm tra preview và xác nhận ghi dữ liệu.

Importer validate toàn bộ dữ liệu trước khi cập nhật JSON, kiểm tra embed ID trùng, sắp xếp game theo Round và ghi file thông qua file tạm để tránh cập nhật dở dang.

## Giới hạn hiện tại

- Các mục trong menu More mới là placeholder và chưa có nội dung hoàn chỉnh.
- Nội dung Home, Videos và News là snapshot trong JSON; cần cập nhật thủ công khi trang chính thức có nội dung mới.
- Chess.com board embed hiện hoạt động bình thường nhưng phụ thuộc vào dịch vụ bên ngoài và kết nối Internet.
- Prototype là static frontend, không có backend hoặc hệ thống đăng nhập.

## Khắc phục lỗi khi điện thoại không truy cập được

- Kiểm tra máy tính và điện thoại đang cùng mạng.
- Dùng IPv4 của máy tính, không dùng `localhost` trên điện thoại.
- Dùng đúng cổng Vite đang in ở dòng `Network`.
- Cho phép Node.js qua Windows Firewall trên mạng Private.
- Tắt VPN hoặc proxy tạm thời.
- Không dùng Guest Wi-Fi có bật client isolation.
- Thử mở địa chỉ Network trên một thiết bị khác để xác định lỗi thuộc máy tính hay mạng.
- Giữ terminal chạy `pnpm dev`; đóng terminal sẽ dừng development server.
