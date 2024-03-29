const gradientContainers = document.querySelectorAll('.gradient-container');
const fullScreenView = document.querySelector('.full-screen-gradient');
let fullScreenViewShown = false;

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
    navigator.clipboard.writeText(str);
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

function showFullScreenGradient(gradientClass) {
    fullScreenView.classList.add(gradientClass);
    fullScreenView.style.display = 'flex';
    fullScreenView.style.opacity = '1';
    fullScreenViewShown = true;
    document.querySelector('body').style.overflow = 'hidden';
    console.log('showFullScreenGradient');
}

function hideFullScreenGradient() {
    fullScreenView.style.display = '';
    fullScreenView.style.opacity = '';
    fullScreenView.className = 'full-screen-gradient';
    fullScreenViewShown = false;
    document.querySelector('body').style.overflow = '';
    console.log('hideFullScreenGradient');
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
    if (event.target.matches('.gradient')) {
        showFullScreenGradient(event.target.classList[1]);
    } else if (fullScreenViewShown === true) {
        hideFullScreenGradient();
    }
}, false);

document.addEventListener('keydown', function(event) {
    if (event.code === 'Escape' && fullScreenViewShown === true) {
        hideFullScreenGradient();
    }
})

populateGradientCodes();
addCopyButtons();