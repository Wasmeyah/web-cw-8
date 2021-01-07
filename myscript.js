let board = [
    ['00', '01', '02'],
    ['10', '11', '12'],
    ['20', '21', '22']
]


let s = "O"

function press(x,y) {

    // Do stuff
    console.log(x,y)
    if (s=="O"){
        s= "X"
    } 
    else{
        s="O"
    }
    board[x][y]=s;
    let cell = document.getElementById(`${x}${y}`)
    cell.innerText = s ;
    
    if ( board[0][0]==s && board[0][1]==s && board[0][2]==s) {
        document.getElementById('here').innerText = (`${s} wins`)
       
    }
    if ( board[0][0]==s && board[1][0]==s && board[2][0]==s) {
        document.getElementById('here').innerText = (`${s} wins`)
        
    }
    if ( board[0][0]==s && board[1][1]==s && board[2][2]==s) {
        document.getElementById('here').innerText = (`${s} wins`)
        
    }
    if ( board[1][0]==s && board[1][1]==s && board[1][2]==s) {
        document.getElementById('here').innerText = (`${s} wins`)
      
    }
    if ( board[2][0]==s && board[2][1]==s && board[2][2]==s) {
        document.getElementById('here').innerText = (`${s} wins`)
       
    }
    if ( board[0][1]==s && board[1][1]==s && board[2][1]==s) {
        document.getElementById('here').innerText = (`${s} wins`)
      
    }
    if ( board[0][1]==s && board[1][2]==s && board[2][2]==s) {
        document.getElementById('here').innerText = (`${s} wins`)
       
    }
    if ( board[2][0]==s && board[1][1]==s && board[0][2]==s) {
        document.getElementById('here').innerText = (`${s} wins`)
        
    }
}

