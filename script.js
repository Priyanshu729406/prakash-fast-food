let latitude = "";
let longitude = "";
let cart = [];

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
function addToCart() {

    let item = document.getElementById("item");
    let quantity = parseInt(document.getElementById("quantity").value);

    let price = parseInt(item.value);
    let subtotal = price * quantity;

    cart.push({
        name: item.options[item.selectedIndex].text,
        quantity: quantity,
        subtotal: subtotal
    });

    let html = "";
    let total = 0;

    cart.forEach(function(food){

        html += food.name + " × " +
                food.quantity +
                " = ₹" +
                food.subtotal +
                "<br>";

        total += food.subtotal;

    });

    document.getElementById("cartItems").innerHTML = html;
    document.getElementById("total").innerHTML =
        "Total: ₹" + total;
}

function calculateOrder(){

    if(cart.length==0){
        alert("Please add items first.");
        return;
    }

    let customerName=document.getElementById("customerName").value;
    let customerPhone=document.getElementById("customerPhone").value;
    let customerAddress=document.getElementById("customerAddress").value;
    let landmark=document.getElementById("landmark").value;
    let paymentMethod=document.getElementById("paymentMethod").value;

    let total=0;
    let order="";

    cart.forEach(function(food){

        order += food.name + " × " +
                 food.quantity +
                 " = ₹" +
                 food.subtotal +
                 "\n";

        total += food.subtotal;

    });

    let locationLink="Location Not Shared";

    if(latitude!="" && longitude!=""){
        locationLink="https://maps.google.com/?q="+latitude+","+longitude;
    }

    let message=
`🍔 *Prakash Fast Food Order*

👤 ${customerName}

📞 ${customerPhone}

📍 ${customerAddress}

📌 ${landmark}

🛒 Order:
${order}

💰 Total: ₹${total}

💳 Payment: ${paymentMethod}

📍 ${locationLink}`;

    document.getElementById("orderWhatsapp").href=
    "https://wa.me/919634713276?text="+encodeURIComponent(message);
}
function payNow(){

    if(cart.length==0){
        alert("Please add items first.");
        return;
    }

    let total = 0;

    cart.forEach(function(food){
        total += food.subtotal;
    });

    let upiLink =
    `upi://pay?pa=9634713276@fam&pn=Prakash Fast Food&am=${total}&cu=INR`;

    window.location.href = upiLink;
}
