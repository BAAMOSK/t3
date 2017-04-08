$(function() {
    var x = 'x';
    var o = 'o';
    var turns = 0;
    
    var spot1 = $('spot1');
    var spot2 = $('spot2');
    var spot3 = $('spot3');
    var spot4 = $('spot4');
    var spot5 = $('spot5');
    var spot6 = $('spot6');
    var spot7 = $('spot7');
    var spot8 = $('spot8');
    var spot9 = $('spot9');
    
    var board = [['+','+','+'],['+','+','+'],['+','+','+']];
    //DO NOT REPEAT LOGIC
    $('#container li').on('click', function(event) {
        if($(this).hasClass('o') || $(this).hasClass('x')) {
          alert('You have to pick another spot');
        } else {                          
          if(turns % 2 === 0) {
            console.log($(this).val());   
            $(this).text('o').addClass('o');
          } else {
            console.log($(this).val());    
            $(this).text('x').addClass('x');
          }            
          turns++;
        if(turns > 4) {
          checkWinner();
        }      
        }
    });  
    //WIN CONDITION
    //check for left-right cases
    function checkWinner(board) {
        var result = board[0](row => row.every(element => element === 'o'));
        console.log('Yolo');
//        if(result) {
//            console.log('winner');
//        }
    }
    
//    if(board[i].every(element => element === 'x')) {
//        alert(`${element} is the Winner!`);
//    }
//    ['+','+','+'],
//    ['+','+','+'],
//    ['+','+','+']        
    //check for top-down cases
    //check for diagonal cases
    
    //RESET FUNCTION
    $('#reset').click(function(event) {
        $('li').removeClass('o').removeClass('x').text('+');
        turns = 0;
    });
    
});
