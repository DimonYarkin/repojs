'use strict'

function creatDesk() {
    const containerElement = document.getElementById('desk')
    let mySm = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
    for (let row = 0; row < 9; row++) {
        const trElem = document.createElement('tr')
        // if (!row % 2 == 0) trElem.style.backgroundColor = black
        containerElement.appendChild(trElem);

        for (let col = 0; col < 9; col++) {
            const cell = document.createElement('td')
             if (col % 2 !== 0 && row % 2 ==0 && row !==0) cell.className = 'cellblack'
            else if (col % 2 == 0 && row % 2 !==0 && col !== 0) cell.className = 'cellblack'
            if (col === 0 && row > 0) cell.innerText = `${row}`
            if (col > 0 && row === 0) cell.innerText = `${mySm[col-1]}`
            trElem.appendChild(cell)


        }
    }
}

creatDesk();