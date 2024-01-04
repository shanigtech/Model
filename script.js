function myfunction() {
    const model = document.getElementById('content');
    const modelContainer = document.querySelector('.model-container');

        model.style.transform = 'scale(1)';
        modelContainer.style.transform = 'scaleY(1)';
}

function closeModel() {
    const model = document.getElementById('content');
    const modelContainer = document.querySelector('.model-container');

        model.style.transform = 'scale(0)';
        modelContainer.style.transform = 'scaleY(0)';
}
