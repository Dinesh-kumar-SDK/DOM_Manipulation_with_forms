document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('userForm');
    const tableBody = document.getElementById('tableBody');
    form.addEventListener('submit', function(event) {
          const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const email = document.getElementById('email').value;
        const address = document.getElementById('address').value;
        const pincode = document.getElementById('pincode').value;
        const gender = document.getElementById('gender').value;
        const state = document.getElementById('state').value;
        const country = document.getElementById('country').value;

        const food = [];
        if (document.getElementById('food1').checked) food.push('Pizza');
        if (document.getElementById('food2').checked) food.push('Burger');
        if (document.getElementById('food3').checked) food.push('Pasta');
        if (document.getElementById('food4').checked) food.push('Salad');
        if (document.getElementById('food5').checked) food.push('Sushi');
        if (food.length < 2) {
            alert('Please select at least 2 food items!');
            return;
        }
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${email}</td>
            <td>${address}</td>
            <td>${pincode}</td>
            <td>${gender}</td>
            <td>${food.join(', ')}</td>
            <td>${state}</td>
            <td>${country}</td>
        `;
        tableBody.appendChild(newRow);
        form.reset();
    });

});
