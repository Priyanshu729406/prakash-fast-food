function calculateOrder() {

    let item = document.getElementById("item");
    let price = Number(item.value);
    let itemName = item.options[item.selectedIndex].text;

    let quantity = Number(document.getElementById("quantity").value);

    let name = document.getElementById("customerName").value;
    let phone = document.getElementById("customerPhone").value;
    let address = document.getElementById("customerAddress").value;
    let landmark = document.getElementById("landmark").value;

    // Validation
    if (quantity < 1) {
        alert("Please enter a valid quantity.");
        return;
    }

    if (name.trim() === "") {
        alert("Please enter your name.");
        return;
    }

    if (phone.trim() === "") {
        alert("Please enter your mobile number.");
        return;
    }

    if (address.trim() === "") {
        alert("Please enter your delivery address.");
        return;
    }

    let total = price * quantity;

    document.getElementById("total").innerHTML =
        "Total: ₹" + total;

    let message =
        "🍔 *Prakash Fast Food Order*%0A%0A" +
        "👤 Name: " + name + "%0A" +
        "📞 Mobile: " + phone + "%0A" +
        "📍 Address: " + address + "%0A" +
        "🏠 Landmark: " + (landmark || "Not Provided") + "%0A%0A" +
        "🍽️ Item: " + itemName + "%0A" +
        "🔢 Quantity: " + quantity + "%0A" +
        "💰 Total Amount: ₹" + total + "%0A%0A" +
        "Please confirm my order.%0A%0A" +
        "Thank you 😊";

    document.getElementById("orderWhatsapp").href =
        "https://wa.me/919634713276?text=" + message;

    // Automatically open WhatsApp
    document.getElementById("orderWhatsapp").click();
}
