const imgNumber = document.getElementById('img-number');
const radios = document.querySelectorAll('input[name="radio-btn"]');
const activeRadios = [];
for (let i = 0; i < imgNumber.value; i++) activeRadios.push(radios[i]);
const arrowLeft = document.getElementById('arrow-left');
const arrowRight = document.getElementById('arrow-right');
activeRadios[0].checked = true;
let userClicked = false;

radios.forEach((radio) => {
    radio.addEventListener('click', () => {
        resetInterval();
        updateMargin(imgNumber.value);
    })
});

arrowLeft.addEventListener('click', () => {
    resetInterval();
    nextImage(true);
    
});
arrowRight.addEventListener('click', () => {
    console.log(resetTimer);
    resetInterval();
    nextImage(false);
    
});

function checkedRadioIndex() {

    let radioIndex;

    activeRadios.forEach((radio, index) => {
        if (radio.checked) {
            radioIndex = index;
        }; 
    });

    return radioIndex;
} 

function nextImage(previous = false) {

    console.log('oi');

    if(document.activeElement === imgNumber) return; //para não mudar de imagem automaticamente se o foco estiver no input
    if(!imgNumber.value) imgNumber.value = 4; 
    
    let nextChecked;
    
    let checkedIndex = checkedRadioIndex();

    if(previous) {
        if(checkedIndex !== 0) nextChecked = activeRadios[checkedIndex - 1];
        else nextChecked = activeRadios[activeRadios.length - 1];
    } else {
        if(checkedIndex !== activeRadios.length - 1) nextChecked = activeRadios[checkedIndex + 1];
        else nextChecked = activeRadios[0];
    }
    
    nextChecked.checked = true;
    updateMargin(imgNumber.value);
};

let automaticTransition = null;

function resetInterval(time = 5000) {

    if(automaticTransition !== null) clearInterval(automaticTransition);
    
    automaticTransition = setInterval(function () {
        nextImage(false);
    }, time);
}; 
resetInterval();


function updateMargin(imgNum) {
    let marginLeft = 100 / imgNum;
    const i = checkedRadioIndex();
    first.style.marginLeft = `${-1*i*marginLeft}%`;
}

