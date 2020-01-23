function populateGradientCodes() {
    const gradientContainers = document.querySelectorAll('.gradient-container');
    for (let i = 0; i < gradientContainers.length; i++) {
        gradientContainers[i].querySelector('.gradient-code').textContent = window.getComputedStyle(gradientContainers[i].querySelector('.gradient')).getPropertyValue('background');
    }
}

populateGradientCodes();