document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
});

const slides = document.querySelectorAll('.slide');
const first = document.getElementById('first');
const manualBtns = document.querySelectorAll('.manual-btn');
const aspectRatioInput = document.getElementById('aspect-ratio');
const radioSizeInput = document.getElementById('radio-size');
const radioMbInput = document.getElementById('radio-mb');
const radioGapInput = document.getElementById('radio-gap');
const arrowSizeInput = document.getElementById('arrow-size');
const transitionInput = document.getElementById('automatic-transition');
const speedInput = document.getElementById('animation-speed');

imgNumber.addEventListener('paste', (e) => e.preventDefault());
imgNumber.addEventListener('change', changeSize);
aspectRatioInput.addEventListener('change', changeAspectRatio);
radioSizeInput.addEventListener('change', changeRadioSize);
radioMbInput.addEventListener('change', changeRadioMb);
radioGapInput.addEventListener('change', changeRadioGap);
arrowSizeInput.addEventListener('change', (e)=>{changeArrowSize(e)});
transitionInput.addEventListener('change', updateIntervals);
speedInput.addEventListener('change', changeSpeed);

function changeSize() {
    if (imgNumber.value < 2 || imgNumber.value > 10) imgNumber.value = 4;
    radios[0].checked = true;
    first.style.marginLeft = '0';

    imgVisibility(imgNumber.value);
    document.documentElement.style.setProperty('--how-many-img', imgNumber.value);

    imgNumber.blur();
}
function imgVisibility(imgNum) {
    for (let i = 1; i < slides.length; i++) {

        if (manualBtns[i].classList.contains('last')) manualBtns[i].classList.remove('last');

        if (i < imgNum) {
            slides[i].classList.add('d-block');
            slides[i].classList.remove('d-none');
            manualBtns[i].classList.add('d-block');
            manualBtns[i].classList.remove('d-none');

            !activeRadios.includes(radios[i]) && activeRadios.push(radios[i]);

            if (i === imgNum - 1) manualBtns[i].classList.add('last');

        } else {
            slides[i].classList.add('d-none');
            slides[i].classList.remove('d-block');
            manualBtns[i].classList.add('d-none');
            manualBtns[i].classList.remove('d-block');

            activeRadios.includes(radios[i]) && activeRadios.pop();
        }
    }
}

function getAspectRatio() {
    const value = Number(aspectRatioInput.value.split('/')[0]) / Number(aspectRatioInput.value.split('/')[1]);
    return value;
}
function changeAspectRatio() {

    document.documentElement.style.setProperty('--aspect-ratio', getAspectRatio());
    const imgHeight = (800 / getAspectRatio()).toFixed(0);

    slides.forEach((slide, i) => {
        slide.firstElementChild.removeAttribute('src');
        slide.firstElementChild.setAttribute('src', `https://picsum.photos/800/${imgHeight}?random=${i}`);
    })
}

function getRadioSize() {
    const option = Number(radioSizeInput.value);

    switch (option) {
        case 1:
            return 'calc(100% / 220)';
            break;
        case 2:
            return 'calc(100% / 160)';
            break;
        case 3:
            return 'calc(100% / 110)';
            break;

        default:
            return 'calc(100% / 160)';
            break;
    }
}
function changeRadioSize() {
    document.documentElement.style.setProperty('--radio-size', getRadioSize());
}
function getRadioMb() {
    const option = Number(radioMbInput.value);

    switch (option) {
        case 1:
            return 'calc(var(--width)/30)';
            break;
        case 2:
            return 'calc(var(--width)/20)';
            break;
        case 3:
            return 'calc(var(--width)/12)';
            break;

        default:
            return 'calc(var(--width)/20)';
            break;
    }
}
function changeRadioMb() {
    document.documentElement.style.setProperty('--radio-distance-from-bottom', getRadioMb());
}
function getRadioGap() {
    const option = Number(radioGapInput.value);

    switch (option) {
        case 1:
            return 'calc(100%/30)';
            break;
        case 2:
            return 'calc(100%/20)';
            break;
        case 3:
            return 'calc(100%/12)';
            break;

        default:
            return 'calc(100%/20)';
            break;
    }
}
function changeRadioGap() {
    document.documentElement.style.setProperty('--distance-between-radios', getRadioGap());
}
function getArrowSize() {
    const option = Number(arrowSizeInput.value);

    switch (option) {
        case 1:
            return 'calc(6cqi / var(--how-many-img))';
            break;
        case 2:
            return 'calc(8cqi / var(--how-many-img))';
            break;
        case 3:
            return 'calc(10cqi / var(--how-many-img))';
            break;

        default:
            return 'calc(8cqi / var(--how-many-img))';
            break;
    }
}
let eventTimeStamp;
function changeArrowSize(e) {

    document.documentElement.style.setProperty('--arrow-size', getArrowSize());

    arrowRight.style.opacity = '1';
    arrowRight.style.visibility = 'visible';
    arrowLeft.style.opacity = '1';
    arrowLeft.style.visibility = 'visible';

    eventTimeStamp = e.timeStamp;
    resetTimer(e.timeStamp); //In order to show the arrows for 5 seconds when it's changed
}
function resetTimer(timeStamp) {
    setTimeout(() => {

        if(timeStamp === eventTimeStamp) {
            arrowRight.removeAttribute('style');
            arrowLeft.removeAttribute('style');
        }

    }, 5000);
}

function getTransition() {
    const option = Number(transitionInput.value);

    switch (option) {
        case 1:
            return false;
            break;
        case 2:
            return 3000;
            break;
        case 3:
            return 5000;
            break;
        case 4:
            return 7000;
            break;

        default:
            return 5000;
            break;
    }
}
function updateIntervals() { //TESTAAAAAAAAR

    if(automaticTransition !== null) clearInterval(automaticTransition);

    if(getTransition()) {
        resetInterval(getTransition());
    } 

}

function getSpeed() {
    const option = Number(speedInput.value);

    switch (option) {
        case 1:
            return '0.5s';
            break;
        case 2:
            return '1s';
            break;
        case 3:
            return '1.5s';
            break;

        default:
            return '1s';
            break;
    }
}
function changeSpeed() {
    document.documentElement.style.setProperty('--transition', getSpeed());
    resetInterval();
    nextImage(false);
}



