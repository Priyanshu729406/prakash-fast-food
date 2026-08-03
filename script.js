let latitude = "";
let longitude = "";

function getLocation() {

    if (navigator.geolocation) {

        navigator.geolocation.getCurrentPosition(function(position) {

            latitude = position.coords.latitude;
            longitude = position.coords.longitude;

            document.getElementById("locationStatus").innerHTML =
                "✅ Live Location Added Successfully";

        }, function() {

            alert("Please allow location permission.");

        });

    } else {

        alert("Your browser does not support GPS.");

    }

}

function calculateOrder() {

    let item = document.getElementById("item");
    let quantity = parseInt(document.getElementById("quantity").value);

    let customerName = document.getElementById("customerName").value;
    let customerPhone = document.getElementById("customerPhone").value;
    let customerAddress = document.getElementById("customerAddress").value;
    let landmark = document.getElementById("landmark").value;
    let paymentMethod = document.getElementById("paymentMethod").value;

    let price = parseInt(item.value);
    let total = price * quantity;

    document.getElementById("total").innerHTML = "Total: ₹" + total;

    let locationLink = "Location Not Shared";

    if (latitude !== "" && longitude !== "") {
        locationLink = "https://maps.google.com/?q=" + latitude + "," + longitude;
    }

    let message =
`🍔 *Prakash Fast Food Order*

👤 Name: ${customerName}

📞 Mobile: ${customerPhone}

📍 Address:
${customerAddress}

📌 Landmark:
${landmark}

🍽 Item:
${item.options[item.selectedIndex].text}

🔢 Quantity:
${quantity}

💰 Total:
₹${total}

💳 Payment:
${paymentMethod}

📍 Live Location:
${locationLink}`;

    let whatsappLink =
        "https://wa.me/919634713276?text=" +
        encodeURIComponent(message);

    document.getElementById("orderWhatsapp").href = whatsappLink;

}

function payNow() {

    let price = parseInt(document.getElementById("item").value);
    let quantity = parseInt(document.getElementById("quantity").value);

    let total = price * quantity;

    let upiLink =
        `upi://pay?pa=9634713276@fam&pn=Prakash Fast Food&am=${total}&cu=INR`;

    window.location.href = upiLink;

}
