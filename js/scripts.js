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
        const copyText = document.createElement('span');
        copyText.className = 'copy-text';
        copyText.textContent = 'Copy';
        copyButton.appendChild(copyText);
        const copyConfirmation = document.createElement('span');
        copyConfirmation.className = 'copy-confirmation';
        copyConfirmation.textContent = 'Copied!';
        copyButton.appendChild(copyConfirmation);
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

function showCopyConfirmation(el) {
    el.querySelector('.copy-text').style.display = 'none';
    el.querySelector('.copy-confirmation').style.display = 'inline';
    setTimeout(() => hideCopyConfirmation(el), 1000);
}

function hideCopyConfirmation(el) {
    el.querySelector('.copy-text').style.display = 'inline';
    el.querySelector('.copy-confirmation').style.display = 'none';
}

document.addEventListener('click', function(event) {
    let currentButton;
	if (event.target.matches('.copy-button') || event.target.parentNode.matches('.copy-button')) {
        if (event.target.matches('.copy-button')) {
            currentButton = event.target;
        } else {
            currentButton = event.target.parentNode;
        }
        copyToClipboard(currentButton.parentNode.querySelector('.gradient-code').textContent);
        showCopyConfirmation(currentButton);
    }
}, false);

populateGradientCodes();
addCopyButtons();