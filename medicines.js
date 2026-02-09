function addMedicine() {
  let name = mname.value;
  let price = price.value;
  let qty = qty.value;

  let li = document.createElement("li");
  li.innerText = name + " - Rs." + price + " - Qty: " + qty;
  document.getElementById("list").appendChild(li);
}
