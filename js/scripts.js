function populateGradientCodes() {
    const gradientContainers = document.querySelectorAll('gradient-container');
    for (let i = 0; i < gradientContainers.length; i++) {
        gradientContainers[i].querySelector('.gradient-code').innerHTML = gradientContainers[i].querySelector('.gradient').style.background;
    }
}

populateGradientCodes();