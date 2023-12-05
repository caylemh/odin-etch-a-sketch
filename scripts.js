document.addEventListener("DOMContentLoaded", () => {
    const containerElement = document.querySelector('.sketch')
    const changeSizeBtn = document.querySelector('.changeButton')
    const newColor = document.querySelector('#newColor')

    let gridSize = 16
    const defaultColor = '#d87093'

    //Change the color of the square
    function colorChange() {
        newColor.value = defaultColor
        console.log(newColor.value);
        newColor.addEventListener("input", updateFirst, false)
        newColor.addEventListener("change", updateAll, false)
        newColor.select()
    
        function updateFirst(event) {
            const squares = document.querySelectorAll('.square')
            if (squares) {
                squares.style.backgroundColor = event.target.value;
            }
        }
    
        function updateAll(event) {
            document.querySelectorAll('.square').forEach((square) => {
              square.style.backgroundColor = event.target.value;
            });
        }
    }

    //Button to create a new grid size
    changeSizeBtn.addEventListener('click', () => {

        gridSize = parseInt(prompt('Please enter a new grid size between 16 - 100: '))

        console.log(isNaN(gridSize));

        if (gridSize < 16 || gridSize > 100 || isNaN(gridSize) === true) {
            alert('PLease enter a value between 16-100')
        } else {
            while (containerElement.firstChild) {
                containerElement.removeChild(containerElement.firstChild);
              }
            changeSizeBtn.textContent = `Current Grid Size: ${gridSize}x${gridSize}`
            createGrid(gridSize)
        }
    })

    //Dynamically create the squares
    function createGrid(gridSize) {
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
        colorChange()
    }
    
    createGrid(gridSize)
})