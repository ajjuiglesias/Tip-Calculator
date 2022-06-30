let calculate = document.querySelector(".calculate")
calculate.addEventListener('click', () => {
    let bill = document.querySelector("#billAmount").value
    let rating = document.querySelector("#serviceQuality").value
    let people = document.querySelector("#people").value
    // varidate
    if (bill === '' || rating === '' || people === '') {
        alert("Please fill the valid input");
        return;
    }
    // caculate
    let totalBill = (bill * rating) / people;
    totalBill = totalBill.toFixed(2);
    console.log(totalBill);
    let result = document.getElementById('tip');
    result.innerHTML=totalBill
})