// document.addEventListener('DOMContentLoaded', () =>{

//   const gridDisplay = document.querySelector('.grid')
//   const scoreDisplay = document.querySelector('#score')
//   const resultDisplay = document.querySelector('#result')
//   const width = 4
//   let squares = []
//   let score = 0

//   //creat the playing board
//   function createBoard(){
//     for(let i = 0; i < width*width;i++){
//       const square = document.createElement('div')
//       square.innerHTML = 0
//       gridDisplay.appendChild(square)
//       squares.push(square)
      
//     }

//     generate()
//     generate()


//   }


//   createBoard()

//   //generate new numbers
//   function generate(){
//     const randomNum = Math.floor(Math.random()*squares.length)
//     if(squares[randomNum].innerHTML == 0){
//       squares[randomNum].innerHTML = 2

//       //check for  gameover
//     }else generate()
//   }


//   function moveRight(){

//     for(let i = 0; i<16;i++){

//       if(i%4 === 0)
//       {
//         let totalOne = squares[i].innerHTML
//         let totalTwo = squares[i+1].innerHTML
//         let totalThree = squares[i+2].innerHTML
//         let totalFour = squares[i+3].innerHTML

//         let row = [parseInt(totalOne), parseInt(totalTwo),parseInt(totalThree),parseInt(totalFour)]
        
//         let filteredRow = row.filter(num =>num)
//         let missing = 4 - filteredRow.length
//         let zeros = Array(missing).fill(0)
//         let newRow = zeros.concat(filteredRow)
        
//         squares[i].innerHTML = newRow[0]
//         squares[i+1].innerHTML = newRow[1]
//         squares[i+2].innerHTML = newRow[2]
//         squares[i+3].innerHTML = newRow[3]
         
//       }
//     }

//   }

//   function combineRow() {
//     for (let i = 0; i < 15; i++) {
//       if (i % 4 === 3) continue; // Skip end of rows to prevent cross-row combinations
//       if (squares[i].innerHTML === squares[i + 1].innerHTML) {
//         let combineTotal = parseInt(squares[i].innerHTML) + parseInt(squares[i + 1].innerHTML)
//         squares[i].innerHTML = combineTotal
//         squares[i + 1].innerHTML = 0
//         score += combineTotal
//         scoreDisplay.innerHTML = score

//     }
    

//   }
//   //checkForWin()
// }



//   //assign functions to keys
//   function control(e) {
//     if (e.key === 'ArrowLeft') {
//       keyLeft()
//     } else if (e.key === 'ArrowRight') {
//       keyRight()
//     }
//   }

//   document.addEventListener('keydown',control)

//     // function keyLeft(){
//     //   moveLeft()
//     //   combineRow()
//     //   moveLeft()
//     //   generate()
//     // }

//   function keyRight() {
//     moveRight()
//     combineRow()
//     moveRight()
//     generate()
//   }

//   }
// )


document.addEventListener('DOMContentLoaded', () => {
  const gridDisplay = document.querySelector('.grid')
  const scoreDisplay = document.querySelector('#score')
  const resultDisplay = document.querySelector('#result')
  const width = 4
  let squares = []
  let score = 0

  //create the playing board
  function createBoard() {
    for(let i = 0; i < width * width; i++) {
      const square = document.createElement('div')
      square.innerHTML = 0
      gridDisplay.appendChild(square)
      squares.push(square)
    }
    generate()
    generate()
  }

  createBoard()

  //generate new numbers
  function generate() {
    const randomNum = Math.floor(Math.random() * squares.length)
    if(squares[randomNum].innerHTML == 0) {
      squares[randomNum].innerHTML = 2
    } else generate()
  }


  //RIGHT FUNCTION
  function moveRight() {
    for(let i = 0; i < 16; i++) {
      if(i % 4 === 0) {
        let totalOne = squares[i].innerHTML
        let totalTwo = squares[i+1].innerHTML
        let totalThree = squares[i+2].innerHTML
        let totalFour = squares[i+3].innerHTML

        let row = [parseInt(totalOne), parseInt(totalTwo), parseInt(totalThree), parseInt(totalFour)]
        let filteredRow = row.filter(num => num)
        let missing = 4 - filteredRow.length
        let zeros = Array(missing).fill(0)
        let newRow = zeros.concat(filteredRow)
        
        squares[i].innerHTML = newRow[0]
        squares[i+1].innerHTML = newRow[1]
        squares[i+2].innerHTML = newRow[2]
        squares[i+3].innerHTML = newRow[3]
      }
    }
  }

  //Left FUNCTION
  function moveLeft(){
    for(let i =0; i<16;i++){
      if(i % 4 === 0){
        let totalOne = squares[i].innerHTML
        let totalTwo = squares[i+1].innerHTML
        let totalThree = squares[i+2].innerHTML
        let totalFour = squares[i+3].innerHTML

        let row = [parseInt(totalOne), parseInt(totalTwo), parseInt(totalThree), parseInt(totalFour)]
        let filteredRow = row.filter(num => num)
        let missing = 4 - filteredRow.length
        let zeros = Array(missing).fill(0)
        let newRow = filteredRow.concat(zeros)
        
        squares[i].innerHTML = newRow[0]
        squares[i+1].innerHTML = newRow[1]
        squares[i+2].innerHTML = newRow[2]
        squares[i+3].innerHTML = newRow[3]
      }
    }
  }





// //UP MOVE
//   function moveUp(){
//     for(let i=0;i < 4; i++){
//       let totalOne = squares[i].innerHTML
//       let totalTwo = squares[i+width].innerHTML
//       let totalThree = squares[i+2*width].innerHTML
//       let totalFour = squares[i+3*width].innerHTML

//       let column = [parseInt(totalOne), parseInt(totalTwo), parseInt(totalThree), parseInt(totalFour)]
     
//       let filteredColumn = column.filter(num => num)
//       let missing = 4 - filteredColumn.length
//       let zeros = Array(missing).fill(0)
//       let newColumn = filteredColumn.concat(zeros)
      
//       squares[i].innerHTML = newColumn[0]
//       squares[i+width].innerHTML = newColumn[1]
//       squares[i+2*width].innerHTML = newColumn[2]
//       squares[i+3*width].innerHTML = newColumn[3]
//     }
//   }




//   function moveDown(){
//     for(let i=0;i < 4; i++){
//       let totalOne = squares[i].innerHTML
//       let totalTwo = squares[i+width].innerHTML
//       let totalThree = squares[i+2*width].innerHTML
//       let totalFour = squares[i+3*width].innerHTML

//       let column = [parseInt(totalOne), parseInt(totalTwo), parseInt(totalThree), parseInt(totalFour)]
     
//       let filteredColumn = column.filter(num => num)
//       let missing = 4 - filteredColumn.length
//       let zeros = Array(missing).fill(0)
//       let newColumn = zeros.concat(filteredColumn)
      
//       squares[i].innerHTML = newColumn[0]
//       squares[i+width].innerHTML = newColumn[1]
//       squares[i+2*width].innerHTML = newColumn[2]
//       squares[i+3*width].innerHTML = newColumn[3]
//     }
//   }

// ///Columns

//   // Fixed combineRow function
//   function combineColumn() {
//     // Start from the rightmost cell of each row
//     for(let i = 0; i < 12; i++) {
//       // Skip the leftmost cell of each row
      
//         // If current number equals the one to its left
//         if(squares[i].innerHTML === squares[i+width].innerHTML ) {
//           let combineTotal = parseInt(squares[i].innerHTML) + parseInt(squares[i+width].innerHTML)
//           squares[i].innerHTML = combineTotal
//           squares[i+width].innerHTML = 0
//           score += combineTotal
//           scoreDisplay.innerHTML = score
//         }
      
//     }
//   }





///Columns

//FIXED BY CLAUDE

//UP MOVE
function moveUp() {
  for(let i = 0; i < 4; i++) {
    let totalOne = squares[i].innerHTML
    let totalTwo = squares[i+width].innerHTML
    let totalThree = squares[i+(width*2)].innerHTML
    let totalFour = squares[i+(width*3)].innerHTML

    let column = [parseInt(totalOne), parseInt(totalTwo), parseInt(totalThree), parseInt(totalFour)]
    let filteredColumn = column.filter(num => num)
    let missing = 4 - filteredColumn.length
    let zeros = Array(missing).fill(0)
    let newColumn = filteredColumn.concat(zeros)
    
    squares[i].innerHTML = newColumn[0]
    squares[i+width].innerHTML = newColumn[1]
    squares[i+(width*2)].innerHTML = newColumn[2]
    squares[i+(width*3)].innerHTML = newColumn[3]
  }
}

function moveDown() {
  for(let i = 0; i < 4; i++) {
    let totalOne = squares[i].innerHTML
    let totalTwo = squares[i+width].innerHTML
    let totalThree = squares[i+(width*2)].innerHTML
    let totalFour = squares[i+(width*3)].innerHTML

    let column = [parseInt(totalOne), parseInt(totalTwo), parseInt(totalThree), parseInt(totalFour)]
    let filteredColumn = column.filter(num => num)
    let missing = 4 - filteredColumn.length
    let zeros = Array(missing).fill(0)
    let newColumn = zeros.concat(filteredColumn)
    
    squares[i].innerHTML = newColumn[0]
    squares[i+width].innerHTML = newColumn[1]
    squares[i+(width*2)].innerHTML = newColumn[2]
    squares[i+(width*3)].innerHTML = newColumn[3]
  }
}

function combineColumnUp() {
  for(let i = 0; i < 12; i++) {
    if(squares[i].innerHTML === squares[i + width].innerHTML && squares[i].innerHTML !== '0') {
      let combineTotal = parseInt(squares[i].innerHTML) + parseInt(squares[i + width].innerHTML)
      squares[i].innerHTML = combineTotal
      squares[i + width].innerHTML = 0
      score += combineTotal
      scoreDisplay.innerHTML = score
    }
  }
}

function combineColumnDown() {
  for(let i = 15; i >= 4; i--) {
    if(squares[i].innerHTML === squares[i - width].innerHTML && squares[i].innerHTML !== '0') {
      let combineTotal = parseInt(squares[i].innerHTML) + parseInt(squares[i - width].innerHTML)
      squares[i].innerHTML = combineTotal
      squares[i - width].innerHTML = 0
      score += combineTotal
      scoreDisplay.innerHTML = score
    }
  }
}

//FIXED BY CLAUDE




  // Fixed combineRow function
  function combineRow() {
    // Start from the rightmost cell of each row
    for(let i = 15; i >= 0; i--) {
      // Skip the leftmost cell of each row
      if(i % 4 !== 0) {
        // If current number equals the one to its left
        if(squares[i].innerHTML === squares[i-1].innerHTML && squares[i].innerHTML !== '0') {
          let combineTotal = parseInt(squares[i].innerHTML) + parseInt(squares[i-1].innerHTML)
          squares[i].innerHTML = combineTotal
          squares[i-1].innerHTML = 0
          score += combineTotal
          scoreDisplay.innerHTML = score
        }
      }
    }
  }

  //assign functions to keys
  function control(e) {
    if(e.key === 'ArrowLeft') {
      keyLeft()
    } else if(e.key === 'ArrowRight') {
      keyRight()
    }else if (e.key ==='ArrowUp'){
      keyUp()
    }else if (e.key ==='ArrowDown'){
      keyDown()
    }
  }
  
  document.addEventListener('keydown', control)

  function keyLeft(){
      moveLeft()
      combineRow()
      moveLeft()
      generate()
    }

  function keyRight() {
    moveRight()
    combineRow()
    moveRight()
    generate()
  }

  function keyUp(){
    moveUp()
    combineColumnUp()
    moveUp()
    generate()
  }

  function keyDown(){
    moveDown()
    combineColumnDown()
    moveDown()
    generate()
  }


  //check for the num 2048

  function check(){
    for(let i=0;i< squares.length;i++){
      if(squares[i].innerHTML ==2048){
        resultDisplay.innerHTML ='YOU WIN!!'
        document.removeEventListener('keydown',control)
        setTimeout(clear,3000)
      }
    }
  }

  //check if are no zeros on the board to lose

  // function checkforGameOver(){
  //   zeros =0
  //   for(let i = 0; i<squares.length;i++){
  //     if(squares[i].innerHTML ==0){

  //       zeros++
  //     }
  //   }
  //   if(zeros === 0){
  //     resultDisplay.innerHTML = 'YOU LOOSE!'
  //     document.removeEventListener('keydown',control)
  //     setTimeout(clear,50)
  //   }
  // }
///////////////////

  function checkForGameOver() {
    let zeros = 0  // Added 'let'
    
    // Check for empty cells
    for(let i = 0; i < squares.length; i++) {
      if(squares[i].innerHTML == 0) {
        zeros++
      }
    }
    
    // Check for possible matches horizontally and vertically
    let canMove = false
    for(let i = 0; i < squares.length; i++) {
      // Check right neighbor
      if(i % 4 !== 3 && squares[i].innerHTML === squares[i + 1].innerHTML) {
        canMove = true
      }
      // Check bottom neighbor
      if(i < 12 && squares[i].innerHTML === squares[i + width].innerHTML) {
        canMove = true
      }
    }
    
    // Game is over if no zeros and no possible moves
    if(zeros === 0 && !canMove) {
      resultDisplay.innerHTML = 'GAME OVER!'
      document.removeEventListener('keydown', control)
    }
  }//////////////////////////


  function clear(){
    clearInterval(myTimer)
  }
  //add clours

  function addColours(){
    for(let i =0; i<squares.length;i++){
      if(squares[i].innerHTML ==0) squares[i].style.backgtoundColor = '#afa192'
    }

  }
  addColours()

  let myTimer = setInterval(addColours,50)
})