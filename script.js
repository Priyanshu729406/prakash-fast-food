function calculateOrder() {

    let item = document.getElementById("item");
    let quantity = document.getElementById("quantity").value;

    let customerName = document.getElementById("customerName").value;
    let customerPhone = document.getElementById("customerPhone").value;
    let customerAddress = document.getElementById("customerAddress").value;
    let landmark = document.getElementById("landmark").value;
    let paymentMethod = document.getElementById("paymentMethod").value;

    let price = parseInt(item.value);
    let total = price * quantity;

    document.getElementById("total").innerHTML = "Total: ₹" + total;

    let message =
`🍔 *Prakash Fast Food Order*

👤 Name: ${customerName}

📞 Mobile: ${customerPhone}

📍 Address:
${customerAddress}

📌 Landmark:
${landmark}

🍽 Item: ${item.options[item.selectedIndex].text}

🔢 Quantity: ${quantity}

💰 Total: ₹${total}

💳 Payment: ${paymentMethod}`;

    let whatsappLink =
        "https://wa.me/919634713276?text=" +
        encodeURIComponent(message);

    document.getElementById("orderWhatsapp").href = whatsappLink;
}

function payNow() {

    let paymentMethod =
        document.getElementById("paymentMethod").value;

    if (paymentMethod === "Cash on Delivery") {
        alert("Cash on Delivery selected.\nPlease place your order on WhatsApp.");
        return;
    }

    alert(
        "UPI Payment Number:\n\n9634713276\n\nOpen any UPI app (PhonePe, Google Pay, Paytm) and pay to this number."
    );
}
