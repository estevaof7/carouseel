//tirar div pai

// colocar comentário com instruções
// Colocar no css para mudar ali no root de acordo com o que o usuário quer

const htmlBtn = document.getElementById('html-btn');
const cssBtn = document.getElementById('css-btn');
const jsBtn = document.getElementById('js-btn');

function copyHtml() {
    let msg = htmlCode();
    copy(msg);
}
function copyCss() {
    let msg = cssCode();
    copy(msg);
}
function copyJs() {
    let msg = jsCode();
    copy(msg);
}

function copy(msg) {
    navigator.clipboard.writeText(msg).then(function() {
        alert("Code copied successfully!");
    }, function() {
        alert("Something went wrong");
    });
}

function htmlCode() {    
    let inputs = '<input type="radio" name="radio-btn" id="radio1">';
    const imgHeight = (800/getAspectRatio()).toFixed(0);
    let imgs = `<div class="slide first"><img src="https://picsum.photos/800/${imgHeight}?random=1" alt="Image 1"></div>`;
    let labels = '<label for="radio1" class="manual-btn manual-btn1"></label>'

    for (let i = 2; i <= imgNumber.value; i++) {
        inputs += `<input type="radio" name="radio-btn" id="radio${i}">`;
        imgs += `<div class="slide"><img src="https://picsum.photos/800/${imgHeight}?random=${i}" alt="Image ${i}"></div>`;
        labels += `<label for="radio${i}" class="manual-btn manual-btn${i}"></label>`;        
    } 
    
    const div = `<div class="slider">
        <div id="slides">

            ${inputs}

            <!-- INSERT IMAGES HERE! -->
            ${imgs}

            <div class="manual-navigation">
                ${labels}
            </div>

            <div class="arrow" id="arrow-left">
                <div>
                &#10094;
                </div>
            </div>
            <div class="arrow" id="arrow-right">
                <div>
                &#10095;
                </div>
            </div>
        </div>
    </div>`;

    return div;
}

function cssCode() {
    let radios = '';

    let marginLeft = 100/imgNumber.value;

    for (let i = 1; i <= imgNumber.value; i++) {
        radios += `
        #radio${i}:checked~.first {margin-left: ${-1*(i-1)*marginLeft}%;}
        #radio${i}:checked~.manual-navigation .manual-btn${i} {background-color: #FFF;}
        `
    }

    let css = `
        :root {
    --aspect-ratio: ${getAspectRatio()};
    --how-many-img: ${imgNumber.value};
    --radio-size: ${getRadioSize()};
    --radio-distance-from-bottom: ${getRadioMb()}; 
    --distance-between-radios: ${getRadioGap()}; 
    --arrow-size: ${getArrowSize()};
    --transition: ${getSpeed()};
    --width: calc(100% / var(--how-many-img)); 
    --height: calc(var(--width) / (var(--aspect-ratio))); 
}

.slider {
    ${radios}
}

.slider {
    width: 100%;
    aspect-ratio: var(--aspect-ratio);
    overflow: hidden;

    #slides {
        width: calc(100% * var(--how-many-img));
        height: 100%;
        display: flex;
        position: relative;
        container-type: inline-size;

        & input {
            display: none;
        }

        .slide {
            width: var(--width);
            position: relative;
            transition: var(--transition);
            
            & img {
                object-fit: cover;
                width: 100%;
                min-height: 100%;
            }
        }

        .manual-navigation {
            position: absolute;
            width: var(--width);
            margin-top: calc(var(--height) - var(--radio-distance-from-bottom));
            display: flex;
            justify-content: center;
        
            .manual-btn {
                border: 2px solid #FFF;
                padding: var(--radio-size);
                border-radius: 50%;
                cursor: pointer;
                transition: 0.7s;
        
                &:not(:last-child) {
                    margin-right: var(--distance-between-radios);
                }
        
                &:hover {
                    background-color: #FFF;
                }
            }
        }

        .arrow {
            position: absolute;
            width: calc(var(--width)/6);
            height: 100%;
            color: #ffffff21;
            font-size: var(--arrow-size);
            box-sizing: border-box;
            display: flex;
            align-items: center;
            cursor: pointer;
            opacity: 0;
            visibility: hidden;
            transition: 0.7s;
        }

        #arrow-left {

            padding-left: calc(var(--width)/40);

            background:
                linear-gradient(
                  to right,
                  hsl(0, 0%, 11%) 0%,
                  hsla(0, 0%, 11%, 0.987) 8.2%,
                  hsla(0, 0%, 11%, 0.951) 16.1%,
                  hsla(0, 0%, 11%, 0.896) 23.7%,
                  hsla(0, 0%, 11%, 0.825) 31.1%,
                  hsla(0, 0%, 11%, 0.741) 38.1%,
                  hsla(0, 0%, 11%, 0.648) 45%,
                  hsla(0, 0%, 11%, 0.55) 51.6%,
                  hsla(0, 0%, 11%, 0.45) 58.1%,
                  hsla(0, 0%, 11%, 0.352) 64.4%,
                  hsla(0, 0%, 11%, 0.259) 70.5%,
                  hsla(0, 0%, 11%, 0.175) 76.6%,
                  hsla(0, 0%, 11%, 0.104) 82.5%,
                  hsla(0, 0%, 11%, 0.049) 88.4%,
                  hsla(0, 0%, 11%, 0.013) 94.2%,
                  hsla(0, 0%, 11%, 0) 100%
                );
            ;
        }

        #arrow-right {
            justify-content: end;
            padding-right: calc(var(--width)/40);
            margin-left: calc(var(--width) - var(--width)/6);
            background: 
                linear-gradient(
                  to left,
                  hsl(0, 0%, 11%) 0%,
                  hsla(0, 0%, 11%, 0.987) 8.2%,
                  hsla(0, 0%, 11%, 0.951) 16.1%,
                  hsla(0, 0%, 11%, 0.896) 23.7%,
                  hsla(0, 0%, 11%, 0.825) 31.1%,
                  hsla(0, 0%, 11%, 0.741) 38.1%,
                  hsla(0, 0%, 11%, 0.648) 45%,
                  hsla(0, 0%, 11%, 0.55) 51.6%,
                  hsla(0, 0%, 11%, 0.45) 58.1%,
                  hsla(0, 0%, 11%, 0.352) 64.4%,
                  hsla(0, 0%, 11%, 0.259) 70.5%,
                  hsla(0, 0%, 11%, 0.175) 76.6%,
                  hsla(0, 0%, 11%, 0.104) 82.5%,
                  hsla(0, 0%, 11%, 0.049) 88.4%,
                  hsla(0, 0%, 11%, 0.013) 94.2%,
                  hsla(0, 0%, 11%, 0) 100%
                );  
            ;
        }

        &:hover {
            .arrow {
                opacity: 1;
                visibility: visible;
            }

        }
    }
}
    `
    return css;
}

function jsCode() {

    let code = '';

    if (getTransition()) {
        code = `const radios = document.querySelectorAll('input[name="radio-btn"]');
const arrowLeft = document.getElementById('arrow-left');
const arrowRight = document.getElementById('arrow-right');
radios[0].checked = true;

radios.forEach((radio) => {
    radio.addEventListener('click', () => {
        resetInterval();
    })
});

arrowLeft.addEventListener('click', () => {
    resetInterval();
    nextImage(true);
});

arrowRight.addEventListener('click', () => {
    resetInterval();
    nextImage(false);
});

function checkedRadioIndex() {

    let radioIndex;

    radios.forEach((radio, index) => {
        if (radio.checked) {
            radioIndex = index;
        }; 
    });

    return radioIndex;
} 

function nextImage(previous = false) {

    let nextChecked;
    
    let checkedIndex = checkedRadioIndex();

    if(previous) {
        if(checkedIndex !== 0) nextChecked = radios[checkedIndex - 1];
        else nextChecked = radios[radios.length - 1];
    } else {
        if(checkedIndex !== radios.length - 1) nextChecked = radios[checkedIndex + 1];
        else nextChecked = radios[0];
    }
    
    nextChecked.checked = true;
};

let automaticTransition = null;

function resetInterval() {

    if(automaticTransition !== null) clearInterval(automaticTransition);
    
    automaticTransition = setInterval(function () {
        nextImage(false);
    }, ${getTransition()});
}; 
resetInterval();`
    
    } else { //code for if it doesn't have automatic transition
        code = `const radios = document.querySelectorAll('input[name="radio-btn"]');
const arrowLeft = document.getElementById('arrow-left');
const arrowRight = document.getElementById('arrow-right');
radios[0].checked = true;

arrowLeft.addEventListener('click', () => {
    nextImage(true);
});

arrowRight.addEventListener('click', () => {
    nextImage(false);
});

function checkedRadioIndex() {

    let radioIndex;

    radios.forEach((radio, index) => {
        if (radio.checked) {
            radioIndex = index;
        }; 
    });

    return radioIndex;
} 

function nextImage(previous = false) {

    let nextChecked;
    
    let checkedIndex = checkedRadioIndex();

    if(previous) {
        if(checkedIndex !== 0) nextChecked = radios[checkedIndex - 1];
        else nextChecked = radios[radios.length - 1];
    } else {
        if(checkedIndex !== radios.length - 1) nextChecked = radios[checkedIndex + 1];
        else nextChecked = radios[0];
    }
    
    nextChecked.checked = true;
};`
    }

    return code;
}
