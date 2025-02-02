function rsvp() {
    const name = prompt("Vui lòng nhập tên của bạn:");
    if (name) {
        alert(`Cảm ơn ${name} đã xác nhận tham dự! Chúng tôi rất mong được gặp bạn.`);
    } else {
        alert("Vui lòng nhập tên của bạn để xác nhận.");
    }
}

document.getElementById('rsvp-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const guests = document.getElementById('guests').value;
    alert(`Cảm ơn ${name} đã xác nhận tham dự với ${guests} khách. Chúng tôi sẽ gửi thông tin chi tiết đến ${email}.`);
});

// Initialize the map
const map = L.map('map').setView([10.8231, 106.6297], 15); // Coordinates for Ho Chi Minh City

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([10.8231, 106.6297]).addTo(map)
    .bindPopup('Nhà hàng Hạnh Phúc, 123 Đường Hạnh Phúc, TP. Hồ Chí Minh')
    .openPopup();
