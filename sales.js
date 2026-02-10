function calculate() {
    const price = document.getElementById("price").value;
    const quantity = document.getElementById("quantity").value;
    const total = document.getElementById("total");

    if (price === "" || quantity === "") {
        alert("Enter price and quantity");
        return;
    }

    const amount = price * quantity;
    total.textContent = "Total Amount: ₹" + amount;
}

