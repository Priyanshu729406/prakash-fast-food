function calculateOrder() {

    let item = document.getElementById("item");
    let price = Number(item.value);

    let itemName = item.options[item.selectedIndex].text;

    let quantity = Number(document.getElementById("quantity").value);

    if (quantity < 1) {
        quantity = 1;
        document.getElementById("quantity").value = 1;
    }

    let total = price * quantity;

    document.getElementById("total").innerHTML =
    "Total: ₹" + total;

    let message =
    "🍔 *Prakash Fast Food*%0A%0A" +
    "Namaste 🙏%0A%0A" +
    "Mujhe order karna hai.%0A%0A" +
    "🍽️ Item: " + itemName + "%0A" +
    "🔢 Quantity: " + quantity + "%0A" +
    "💰 Total: ₹" + total + "%0A%0A" +
    "Please confirm my order.%0A%0A" +
    "Thank You ❤️";

    document.getElementById("orderWhatsapp").href =
    "https://wa.me/918126598181?text=" + message;

}
