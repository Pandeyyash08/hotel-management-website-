// Open the booking modal with the selected room id
function openBookingModal(roomId) {
    document.getElementById("room_id").value = roomId;
    document.getElementById("message").innerText = '';
}

// Handle the booking process
async function bookNow() {
    const roomId = document.getElementById("room_id").value;
    const checkIn = document.getElementById("check_in").value;
    const checkOut = document.getElementById("check_out").value;

    if (!checkIn || !checkOut) {
        document.getElementById("message").innerText = "Please select both check-in and check-out dates.";
        return;
    }

    const bookingData = {
        room_id: roomId,
        check_in_date: checkIn,
        check_out_date: checkOut
    };

    try {
        const response = await fetch('https://your-server-api-url/book', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(bookingData)
        });
        
        const result = await response.json();
        if (result.success) {
            document.getElementById("message").innerText = "Booking Successful!";
        } else {
            document.getElementById("message").innerText = "Booking Failed! Try again.";
        }
    } catch (error) {
        document.getElementById("message").innerText = "An error occurred. Please try again.";
    }
}
function bookNow() {
    
    const checkIn = document.getElementById("check_in").value;
    const checkOut = document.getElementById("check_out").value;

    if (!checkIn || !checkOut) {
        document.getElementById("message").textContent = "Please select both check-in and check-out dates.";
        return;
    }
    window.location.href = "payment.html";
}
