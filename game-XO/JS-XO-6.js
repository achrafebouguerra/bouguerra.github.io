let title = document.querySelector('.title');
let turn = 'x' ;
let square =[] ;
let oldTitle = title.innerHTML;
 


function reset()
{
     //location.reload();

    console.log('i am her')
    for(let i = 1; i<37;i++)
    {
        document.getElementById('item'+ i).style.background = 'white';
        document.getElementById('item'+ i).innerHTML ='';
        title.innerHTML = oldTitle;
        title.style.color = 'red' ;
        turn = 'x' ;
      
    }
 
 }

function end(num1,num2,num3,num4,num5)
{

     
        title.innerHTML = `${square[num1]} winner` ;
        title.style.color = `black`;
 
        document.getElementById('item'+num1).style.background = '#000';
        document.getElementById('item'+num2).style.background = '#000';
        document.getElementById('item'+num3).style.background = '#000';
        document.getElementById('item'+num4).style.background = '#000'; 
        document.getElementById('item'+num5).style.background = '#000';



 }

function winner()
{
    for(let i = 1; i<37;i++)
    {
        square[i] = document.getElementById('item'+ i).innerHTML;
    }

    if(square[1]==square[2]&& square[2] ==square[3]&& square[3]==square[4] && square[4] ==square[5] && square[1] != '')
    {
        end(1,2,3,4,5)
     
    }

    if(square[2]==square[3]&& square[3] ==square[4]&& square[4]==square[5] && square[5] ==square[6] && square[3] != '')
    {
        end(2,3,4,5,6)


    }

    else if(square[7]==square[8]&& square[8] ==square[9]&& square[9]==square[10] && square[10] ==square[11] && square[8] != '')
    {
        end(7,8,9,10,11)
     
    }

    else if(square[8]==square[9]&& square[9] ==square[10]&& square[10]==square[11] && square[11] ==square[12] && square[9] != '')
    {
        end(8,9,10,11,12)
     
    }

    else if(square[13]==square[14]&& square[14] ==square[15]&& square[15]==square[16] && square[16] ==square[17] && square[17] != '')
    {
        end(13,14,15,16,17)
     
    }

    
    else if(square[14]==square[15]&& square[15] ==square[16]&& square[16]==square[17] && square[17] ==square[18] && square[17] != '')
    {
        end(14,15,16,17,18)
     
    }

    else if(square[19]==square[20]&& square[20] ==square[21]&& square[21]==square[22] && square[22] ==square[23] && square[23] != '')
    {
        end(19,20,21,22,23)
     
    }

    else if(square[20] ==square[21]&& square[21]==square[22] && square[22] ==square[23] && square[23] ==square[24]&& square[23] != '')
    {
        end(20,21,22,23,24)
     
    }

    else if(square[25]==square[26]&& square[26] ==square[27]&& square[27]==square[28] && square[28] ==square[29] && square[27] != '')
    {
        end(25,26,27,28,29)
     
    }

    else if(square[26] ==square[27]&& square[27]==square[28] && square[28] ==square[29] && square[29] ==square[30]&& square[27] != '')
    {
        end(26,27,28,29,30)
     
    }

    else if(square[31]==square[32]&& square[32] ==square[33]&& square[33]==square[34] && square[34] ==square[35] && square[31] != '')
    {
        end(31,32,33,34,35)
     
    }

    else if( square[32] ==square[33]&& square[33]==square[34] && square[34] ==square[35] && square[35] ==square[36]&& square[33] != '')
    {
        end(32,33,34,35,36)
     
    }


    else if(square[1]==square[7]&& square[7] ==square[13]&& square[13]==square[19] && square[19] ==square[25] && square[1] != '')
    {
        end(1,7,13,19,25)
     
    }

    else if(square[7] ==square[13]&& square[13]==square[19] && square[19] ==square[25] && square[25] ==square[31]&& square[13] != '')
    {
        end(7,13,19,25,31)
     
    }

    else if(square[2]==square[8]&& square[8] ==square[14]&& square[14]==square[20] && square[20] ==square[26] && square[26] != '')
    {
        end(2,8,14,20,26)
     
    }

    else if( square[8] ==square[14]&& square[14]==square[20] && square[20] ==square[26] && square[26] ==square[32]&& square[26] != '')
    {
        end(8,14,20,26,32)
     
    }

    else if(square[3]==square[9]&& square[9] ==square[15]&& square[15]==square[21] && square[21] ==square[27] && square[27] != '')
    {
        end(3,9,15,21,27)
     
    }

    else if( square[9] ==square[15]&& square[15]==square[21] && square[21] ==square[27] && square[27] ==square[33]&& square[27] != '')
    {
        end(9,15,21,27,33)
     
    }

    else if(square[4]==square[10]&& square[10] ==square[16]&& square[16]==square[22] && square[22] ==square[28] && square[10] != '')
    {
        end(4,10,16,22,28)
     
    }

    
    else if( square[10] ==square[16]&& square[16]==square[22] && square[22] ==square[28] && square[28] ==square[34]&& square[16] != '')
    {
        end(10,16,22,28,34)
     
    }

    else if(square[5]==square[11]&& square[11] ==square[17]&& square[17]==square[23] && square[23] ==square[29] && square[29] != '')
    {
        end(5,11,17,23,29)
     
    }

    else if( square[11] ==square[17]&& square[17]==square[23] && square[23] ==square[29] && square[29] ==square[35]&& square[29] != '')
    {
        end(11,17,23,29,35)
     
    }

    else if(square[6]==square[12]&& square[12] ==square[18]&& square[18]==square[24] && square[24] ==square[30] && square[24] != '')
    {
        end(6,12,18,24,30)
     
    }

    else if( square[12] ==square[18]&& square[18]==square[24] && square[24] ==square[30] && square[30] ==square[36]&& square[24] != '')
    {
        end(12,18,24,30,36)
     
    }

    else if(square[1]==square[8]&& square[8] ==square[15]&& square[15]==square[22] && square[22] ==square[29] && square[1] != '')
    {
        end(1,8,15,22,29)
     
    }

    else if( square[8] ==square[15]&& square[15]==square[22] && square[22] ==square[29] && square[29] ==square[36]&& square[15] != '')
    {
        end(8,15,22,29,36)
     
    }

    else if(square[6]==square[11]&& square[11] ==square[16]&& square[16]==square[21] && square[21] ==square[26] && square[26] != '')
    {
        end(6,11,16,21,26)
     
    }

    
    else if( square[11] ==square[16]&& square[16]==square[21] && square[21] ==square[26] && square[26] ==square[31]&& square[26] != '')
    {
        end(11,16,21,26,31)
     
    }

    else if( square[2] ==square[9]&& square[9]==square[16] && square[16] ==square[23] && square[23] ==square[30]&& square[23] != '')
    {
        end(2,9,16,23,30)
     
    }

    else if( square[5] ==square[10]&& square[10]==square[15] && square[15] ==square[20] && square[20] ==square[25]&& square[15] != '')
    {
        end(5,10,15,20,25)
     
    } 

    else if( square[7] ==square[14]&& square[14]==square[21] && square[21] ==square[28] && square[28] ==square[35]&& square[21] != '')
    {
        end(7,14,21,28,35)
     
    }

    else if( square[12] ==square[17]&& square[17]==square[22] && square[22] ==square[27] && square[27] ==square[32]&& square[17] != '')
    {
        end(12,17,22,27,32)
     
    }


}
 
    

function game(id)
{

    console.log(id)
    let element = document.getElementById(id);
    if(turn === 'x' && element.innerHTML == '')
    {
        element.innerHTML = '&#10008';
        turn = 'o';
        title.style.color = 'black';
        title.innerHTML = 'O';
        element.style.background = 'white' ;
        element.style.color = 'red';
        
     }
     else if(turn ==='o' && element.innerHTML == '')
     {
         element.innerHTML ='O' ;
         turn ='x';
         title.style.color = 'black';
         title.innerHTML = '&#10008';
         element.style.background = 'white' ;
         element.style.color = 'green';
 
     }
    winner();
}



