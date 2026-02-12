
for (i=0; i<16*16; i++) {
    const grid = document.createElement(`div`)
    const container = document.querySelector(`.container`)
    container.appendChild(grid)
    grid.style.border = 'solid 1px blue'
    container.style.border = 'solid 1px black'
    grid.style.width = '10px'
    grid.style.height = '10px'
    container.style.display = 'flex'
    container.style.flexWrap = 'wrap'
    container.style.height = '192px'
    container.style.width = '192px'
    container.style.margin = '0 auto'
    grid.addEventListener('mouseover', write)
    }

    const reset = document.createElement(`button`)
    const body = document.querySelector(`body`)
    body.appendChild(reset)
    reset.textContent = 'Reset'
    const input = document.createElement(`button`)
    const h1 = document.querySelector(`h1`)
    h1.append(input)
    input.textContent = 'Change Grid Size'

    input.addEventListener('click', () => {
        const newSize = prompt('Enter new grid size (e.g. 16 for 16x16)')
        const container = document.querySelector(`.container`)
        container.innerHTML = ''
        if (newSize < 1 || newSize >= 100) {
            alert('Please enter a number between 1 and 100')
            return
        }
        for (i=0; i<newSize*newSize; i++) {
            const grid = document.createElement(`div`)
            container.appendChild(grid)
            container.style.border = 'solid 1px black'
            container.style.display = 'flex'
            container.style.flexWrap = 'wrap'
            container.style.height = `192px`
            container.style.width = `192px`
            grid.style.border = 'solid 1px blue'
            grid.style.margin = '0'
            grid.style.width = `${(192/newSize)-2}px`
            grid.style.height = `${(192/newSize)-2}px`
            grid.addEventListener('mouseover', write)
        }
    })

    function resetGrid() {        
    const grid = document.querySelectorAll(`.container div`)
        grid.forEach(div => div.style.backgroundColor = 'white')
    }

    reset.addEventListener('click', resetGrid)
    function write(e) {
        e.target.style.backgroundColor = 'blue'
    }
 
