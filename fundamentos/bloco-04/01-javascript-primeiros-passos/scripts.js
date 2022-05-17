// let chessPieces= "king";

// switch (chessPieces.toLowerCase()) {
//     case "king":
//         console.log("King --> move one square in any direction");
//         break;

//     case "queen":
//         console.log("Queen --> move diagonally");
//         break; 
        
//     case "rook":
//         console.log("Rooks --> move horizontally or vertically any number of squares.");
//         break;

//     case "bishop":
//         console.log("Bishop --> move diagonally any number of squares.");
//         break;

//     case "knight":
//         console.log("Knights --> move in an L shape: two squares in a horizontal or vertical direction, then move one square horizontally or vertically.");
//         break;

//     case "pawns":
//         console.log("Pawns --> move vertically forward one square, with the option to move two squares if they have not yet moved.");
//         break;
        
//     default:
//         console.log("erro.")    
// }

function chessPiece (piece) {
    if (piece === 'king') {
        return "King --> move one square in any direction";
    } else if (piece === 'queen') {
        return "Queen --> move diagonally";
    } else if (piece === 'rook') {
        return "Rooks --> move horizontally or vertically any number of squares.";
    } else if (piece === 'bishop') {
        return "Bishop --> move diagonally any number of squares.";
    } else if (piece === 'knight') {
        return "Knights --> move in an L shape: two squares in a horizontal or vertical direction, then move one square horizontally or vertically.";
    } else if (piece === 'pawns') {
        return "Pawns --> move vertically forward one square, with the option to move two squares if they have not yet moved.";
    } else {
        return "erro."
    }
}

console.log(chessPiece('king'));