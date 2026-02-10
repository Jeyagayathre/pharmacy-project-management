function addMedicine() {
    const name = document.getElementById("medicineName").value;
    const qty = document.getElementById("medicineQty").value;
    const list = document.getElementById("medicineList");

    if (name === "" || qty === "") {
        alert("Please enter all details");
        return;
    }

    const li = document.createElement("li");
    li.textContent = `${name} - Quantity: ${qty}`;
    list.appendChild(li);

    document.getElementById("medicineName").value = "";
    document.getElementById("medicineQty").value = "";
}
