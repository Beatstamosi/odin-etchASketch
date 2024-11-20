// set starting grid size
const STARTINGGRIDSIZE = 16;

// set starting color
let currentColor = "random";

// give all functions access to sketchArea
let sketchArea; 


document.addEventListener("DOMContentLoaded", () => {
    sketchArea = document.querySelector("#sketch-area");

    // on start run apply grid size
    setGridSize(STARTINGGRIDSIZE);


    // set up buttons
    document.querySelector("#grid-size").addEventListener("click", chooseGridSize);
    document.querySelector("#clear-grid").addEventListener("click", clearGrid);
    document.querySelector("#choose-color").addEventListener("change", chooseColor);
    document.querySelector("#cell-border").addEventListener("click", toggleCellBorder);
    document.querySelector("#rainbow").addEventListener("click", () => {
        clearGrid();
        currentColor = "random";
    })
});


function choosePixel() {
    return Array.from(sketchArea.children);
}

function setGridSize(size) {

    removeGrid();

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
            setPixelColor(pixel);
        });
    }

}

function removeGrid() {
    const pixels = choosePixel();

    pixels.forEach(pixel => pixel.remove());
}


function setPixelColor(pixel) {

    let color = currentColor;

    if (color === "random") {
        color = generateRandomColorRGB();
    }

    // - Set background color
    if (!pixel.style.background) {
        pixel.style.background = `${color}`;
        
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


function generateRandomColorRGB() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);

    return `rgba(${r}, ${g}, ${b}, 0.1)`;
}


function chooseGridSize() { 
    let value;

    while (true) {
        value = prompt("Please input a number between 4 and 100: ");
        value = parseInt(value);

        if (value < 100 && value > 4 && !isNaN(value)) {
            break;
        }
    }

    clearGrid();
    setGridSize(value);
}


function chooseColor() {
    clearGrid();

    // get color value
    let color = document.querySelector("#choose-color").value;

    // format color to rgb
    currentColor = hexToRgba(color);    
}


function hexToRgba(color) {
    const r = parseInt(color.substr(1,2), 16);
    const g = parseInt(color.substr(3,2), 16);
    const b = parseInt(color.substr(5,2), 16);

    return `rgba(${r}, ${g}, ${b}, 0.1)`;
}


function toggleCellBorder() {
    const pixels = choosePixel();

    pixels.forEach(child => {
        child.classList.toggle("border");
    })
}


function clearGrid() {
    const pixels = choosePixel();

    pixels.forEach(child => {
        child.style.background = "";
    })

}


