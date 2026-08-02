function calculateOrder(){

    let item = document.getElementById("item");
    let price = Number(item.value);

    let itemName = item.options[item.selectedIndex].text;

    let quantity = Number(document.getElementById("quantity").value);

    let total = price * quantity;


    document.getElementById("total").innerHTML =
    "Total: ₹" + total;


    let message =
    "Namaste Prakash Fast Food 🙏%0A%0A" +
    "Mujhe order karna hai.%0A%0A" +
    "Item: " + itemName + "%0A" +
    "Quantity: " + quantity + "%0A" +
    "Total Amount: ₹" + total + "%0A%0A" +
    "Please confirm my order.%0A%0A" +
    "Thank you 😊";


    document.getElementById("orderWhatsapp").href =
    "https://wa.me/919917857259?text=" + message;

}
