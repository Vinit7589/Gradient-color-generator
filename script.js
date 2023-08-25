const gradientBox = document.querySelector(".gradient-box")
const selectMenu = document.querySelector(".select-box select")
const colorInput = document.querySelectorAll(".colors input")
const textArea = document.querySelector("textarea")
const refreshBtn = document.querySelector(".refresh")
const copyBtn = document.querySelector(".copy")

const getRandomColor = () => {
    // Generating the random color in hexical forma. Example = #5665E9
    const randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
    return `#${randomHex}`
}

const generateGradient = (isRandom) => {
    if (isRandom) {
        // If random is true, update the colors inputs with random color
        colorInput[1].value = getRandomColor()
        colorInput[0].value = getRandomColor()
    }
    // Creating a gradient string using the select menu value with color input values.
    const gradient = `linear-gradient(${selectMenu.value}, ${colorInput[1].value}, ${colorInput[0].value})`;
    gradientBox.style.background = gradient;
    textArea.value = `background: ${gradient};`;
}

const copyCode = () => {
    // Copying textarea value and updating the copy button text
    navigator.clipboard.writeText(textArea.value)
    copyBtn.innerText = "Code Copied"
    setTimeout(() => copyBtn.innerText = "Copy Code", 1600)
}


colorInput.forEach(input => {
    // Calling generateGradient function on each color input clicks
    input.addEventListener("input", () => generateGradient(false))
})

selectMenu.addEventListener("change", () => generateGradient(false))
refreshBtn.addEventListener("click", () => generateGradient(true))
copyBtn.addEventListener("click", copyCode)
