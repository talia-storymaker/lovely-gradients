const gradientContainers = document.querySelectorAll('.gradient-container');

function populateGradientCodes() {
    for (let i = 0; i < gradientContainers.length; i++) {
        gradientContainers[i].querySelector('.gradient-code').textContent = window.getComputedStyle(gradientContainers[i].querySelector('.gradient')).getPropertyValue('background-image');
    }
}

function addCopyButtons() {
    for (let i = 0; i < gradientContainers.length; i++) {
        const copyButton = document.createElement('button');
        copyButton.className = 'copy-button';
        copyButton.textContent = 'Copy';
        gradientContainers[i].appendChild(copyButton);
    }
}

function copyToClipboard(str) {
    const el = document.createElement('textarea');
    el.value = str;
    el.setAttribute('readonly', '');
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
}

document.addEventListener('click', function(event) {
	if (event.target.matches('.copy-button')) {
		copyToClipboard(event.target.parentNode.querySelector('.gradient-code').textContent);
    }
}, false);

populateGradientCodes();
addCopyButtons();