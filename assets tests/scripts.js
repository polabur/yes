document.querySelectorAll('.tab-link').forEach(button => {
    button.addEventListener('click', () => {
        const name = button.dataset.name;
        const description = button.dataset.description;
        const image = button.dataset.image;

        document.getElementById('main-character-image').src = image;
        document.getElementById('character-name').textContent = name;
        document.getElementById('character-description').textContent = description;
    });
});
