
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault()
    const input = document.getElementById('inp').value
    const output = document.querySelector('h2')
    const prices = input.split(",").map(Number)

    function calculateTotal(...prices) {
        let total = 0;
        prices.forEach(price => {
            total += price * 1.18;
        })
        return total.toFixed(2);
    }
    output.textContent = `After 18% Gst Total Bill : ₹${calculateTotal(...prices)}`

})