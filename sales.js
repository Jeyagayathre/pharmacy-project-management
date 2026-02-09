function calculate() {
  let price = sprice.value;
  let qty = sqty.value;
  document.getElementById("total").innerText =
    "Total Amount: Rs." + (price * qty);
}
