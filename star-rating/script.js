const stars = document.querySelectorAll('.star');
const ratingText = document.getElementById('rating-text');
let selectedRating = 0;

stars.forEach((star, index) => {
    star.addEventListener('mouseover', () => {
        updateStars(index);
    })

    star.addEventListener("mouseout", () => {
        updateStars(selectedRating - 1);
    })

    star.addEventListener('click', () => {
        selectedRating = index + 1;
        updateStars(index);
        ratingText.textContent = `You rated ${selectedRating} star${selectedRating > 1 ? 's' : ''}`;
    })
})

function updateStars(index) {
    stars.forEach((star, i) => {
        star.classList.toggle('hovered', i <= index);
        star.classList.toggle('selected', i < selectedRating);
    })
}