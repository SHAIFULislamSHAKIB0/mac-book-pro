
function myEquipmentCost(product, price) {
    /*  const memoryCost = document.getElementById('extra-memory');
     memoryCost.innerText = price; */
    const memoryCost = document.getElementById(product);
    memoryCost.innerText = price;
}
function totalCost() {
    const totalPrice = document.getElementById('total-price');
    const total = document.getElementById('discount-total');

    const bestPrice = document.getElementById('best-price');
    const myBestPrice = parseFloat(bestPrice.innerText);

    const extraMemory = document.getElementById('extra-memory');
    const myExtraMemory = parseFloat(extraMemory.innerText);

    const extraStorage = document.getElementById('extra-storage');
    const myExtraStorage = parseFloat(extraStorage.innerText);

    const deliveryCharge = document.getElementById('delivery-charge');
    const myDeliveryCharge = parseFloat(deliveryCharge.innerText);

    const myTotalCost = myBestPrice + myExtraMemory + myExtraStorage + myDeliveryCharge;

    totalPrice.innerText = myTotalCost;
    total.innerText = myTotalCost;

}


document.getElementById('memory-one').addEventListener('click', function () {
    /* const memoryCost = document.getElementById('extra-memory');
    memoryCost.innerText = '0'; */
    myEquipmentCost('extra-memory', '0');
    totalCost();
})
document.getElementById('memory-two').addEventListener('click', function () {
    /* const memoryCost = document.getElementById('extra-memory');
    memoryCost.innerText = '180'; */
    myEquipmentCost('extra-memory', '180');
    totalCost();
})
document.getElementById('storage-one').addEventListener('click', function () {
    /* const storageCost = document.getElementById('extra-storage');
    storageCost.innerText = '0'; */
    myEquipmentCost('extra-storage', '0');
    totalCost();
})
document.getElementById('storage-two').addEventListener('click', function () {
    /* const storageCost = document.getElementById('extra-storage');
    storageCost.innerText = '100'; */
    myEquipmentCost('extra-storage', '100');
    totalCost();
})
document.getElementById('storage-three').addEventListener('click', function () {
    /* const storageCost = document.getElementById('extra-storage');
    storageCost.innerText = '180'; */
    myEquipmentCost('extra-storage', '180');
    totalCost();
})
document.getElementById('free-delivery').addEventListener('click', function () {
    /* const delivaryCost = document.getElementById('delivery-charge');
    delivaryCost.innerText = '0'; */
    myEquipmentCost('delivery-charge', '0');
    totalCost();
})
document.getElementById('paid-delivery').addEventListener('click', function () {
    /* const delivaryCost = document.getElementById('delivery-charge');
    delivaryCost.innerText = '20'; */
    myEquipmentCost('delivery-charge', '20');
    totalCost();
})


