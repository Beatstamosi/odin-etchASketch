// define starting variables
// set starting grid size
const STARTINGGRIDSIZE = 16;

// set starting color
const startingColor = "white";
let sketchArea; 


document.addEventListener("DOMContentLoaded", () => {
    sketchArea = document.querySelector("#sketch-area");

    // on start
    // run apply grid size
    setGridSize(STARTINGGRIDSIZE);

    // toggle borders on
    // set color

    // choose buttons
    // for each call random color
    // set box shadow to random color
});


// apply grid size
function setGridSize (size) {
    for (let i = 0; i < size * size; i++) {
        let pixel = document.createElement("div");
        
        // give class pixel
        pixel.classList.add("pixel");

        // give class border
        pixel.classList.add("border");

        // set flex values
        const widthHeightPixel = `${100 / size}%` 
        pixel.style.width = widthHeightPixel;
        pixel.style.height = widthHeightPixel;

        // append to sketchArea
        sketchArea.appendChild(pixel);

        pixel.addEventListener("mouseover", () => {
            changePixelColor(pixel);
        });
    }
}


function changePixelColor (pixel) {
    // - Set background color
    if (!pixel.style.background) {
        let randomColor = generateRandomColorRGB();
        pixel.style.background = `${randomColor}`;
    // - Mouseover again darken opacity by 10%
    } else {
        let background = pixel.style.background;

        if (background.startsWith("rgba")) {
            let rgbaValues = background.match(/rgba?\((\d+), (\d+), (\d+), ([\d.]+)\)/);

            if (rgbaValues) {
                let r = rgbaValues[1];
                let g = rgbaValues[2];
                let b = rgbaValues[3];
                let opacity = parseFloat(rgbaValues[4]);

                if (opacity < 1) {
                    opacity = Math.min(opacity + 0.1, 1);
                }

                pixel.style.background = `rgba(${r}, ${g}, ${b}, ${opacity})`;
            }
        }
    }
}


function generateRandomColorRGB () {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);

    return `rgba(${r}, ${g}, ${b}, 0.1)`;
}

// choose grid size
    // add eventlistener to button
    // prompt for input between 4 and 100
    // keep asking if input is incorrect
    // clear grid
    // apply grid size


// choose color
    // add eventlistener to button
    // have user choose color
    // run set color

// rainbow
    // add eventlistener to button
    // generate random color
    // set color


// toggle cell border
    // add eventlistener to button
    // select all divs inside container
    // loop through and toggle class


// clear grid
    // add eventlistener to button
    // select all divs inside container
    // loop through and set backgroundColor to "lightgray"


