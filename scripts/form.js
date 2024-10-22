// Product array
const products = [
    { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
    { id: "fc-2050", name: "power laces", averagerating: 4.7 },
    { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
    { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
    { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
];

// Function to populate product options
function populateProductOptions() {
    const productSelect = document.getElementById('product');
    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });
}
// Call the function on page load
document.addEventListener('DOMContentLoaded', populateProductOptions);
// Handle form submission
function handleFormSubmit(event) {
    event.preventDefault();
    // Get the current review count from localStorage, default to 0 if none exists
    let reviewCount = localStorage.getItem('reviewCount') ? parseInt(localStorage.getItem('reviewCount')) : 0;
    // Increment the review count
    reviewCount++;
    // Store the new count in localStorage
    localStorage.setItem('reviewCount', reviewCount);
    // Redirect to the review.html page
    window.location.href = 'review.html';
}
// Add event listener to form submit
const form = document.querySelector('.form');
if (form) {
    form.addEventListener('submit', handleFormSubmit);
}

// Display the review count on the review page
function displayReviewCount() {
    if (window.location.pathname.includes('review.html')) {
        // Get the review count from localStorage
        const reviewCount = localStorage.getItem('reviewCount') || 0;
    
        console.log("Review Count from localStorage:", reviewCount);

        
        document.getElementById('reviewCounter').textContent = `You have submitted ${reviewCount} review(s).`;
    }
}
document.addEventListener('DOMContentLoaded', displayReviewCount);
