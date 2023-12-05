document.addEventListener("DOMContentLoaded", () => {
    const containerElement = document.querySelector('.sketch')
    const gridSize = 16
    console.log(gridSize);
    //Dynamically create the squares
    for (let i = 0; i < gridSize*gridSize; i++) {
        const square = document.createElement('div');

        //Add square styling for grid
        square.style.width = `calc(100% / ${gridSize})`
        square.style.height = `calc(100% / ${gridSize})`

        square.classList = 'square';

        //Add event listeners
        square.addEventListener('mouseover', showHide)
        square.addEventListener('mouseleave', showHide)

        //Add to sketch area
        containerElement.appendChild(square);

        //Show or hide squares
        function showHide() {
            if (square.classList[1] === 'fade-in') {
                square.classList.add('fade-out')
                square.classList.remove('fade-in')
            } else {
                square.classList.add('fade-in')
                square.classList.remove('fade-out')
            }
        }
    }
})