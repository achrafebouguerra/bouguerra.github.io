let title = document.querySelector('.title');
let turn = 'x' ;
let square =[] ;
let oldTitle = title.innerHTML;
 


function reset()
{
     location.reload();

    console.log('i am her')
    for(let i = 1; i<17;i++)
    {
        document.getElementById('item'+ i).style.background = '#f25';
        document.getElementById('item'+ i).innerHTML ='';
        var sqr = document.getElementById('item'+ i);
       
    }
    title.innerHTML = oldTitle;
  
 
 }




function end(num1,num2,num3,num4)
{
    title.innerHTML = `${square[num1]} winner` ;
    document.getElementById('item'+num1).style.background = '#000';
    document.getElementById('item'+num2).style.background = '#000';
    document.getElementById('item'+num3).style.background = '#000';
    document.getElementById('item'+num4).style.background = '#000';  

 }

function winner()
{
    for(let i = 1; i<17;i++)
    {
        square[i] = document.getElementById('item'+ i).innerHTML;
    }

    if(square[1]==square[2]&& square[2] ==square[3]&& square[3]==square[4] && square[1] != '')
    {
        end(1,2,3,4)
     
    }

    else if(square[5]==square[6]&& square[6] ==square[7]&& square[7]==square[8] && square[5] != '')
    {
        end(5,6,7,8)

    }

    else if(square[9]==square[10]&& square[10] ==square[11]&& square[11]==square[12] && square[10] != '')
    {
        end(9,10,11,12)

    }
    
    else if(square[13]==square[14]&& square[14] ==square[15]&& square[15]==square[16] && square[14] != '')
    {
        end(13,14,15,16)
    
    }

    else if(square[1]==square[5]&& square[5]==square[9]&& square[9]==square[13] && square[5] != '')
    {
        end(1,5,9,13)
  
    }

    else if(square[2]==square[6]&& square[6] ==square[10]&& square[10]==square[14]&& square[10] != '')
    {
        end(2,6,10,14)
   
    }

    else if(square[3]==square[7]&& square[7] ==square[11]&& square[11]==square[15] && square[11] != '')
    {
        end(3,7,11,15)
    }
     

    else if(square[4]==square[8]&& square[8] ==square[12]&& square[12]==square[16] && square[8] != '')
    {
        end(4,8,12,16)
    }

    else if(square[1]==square[6]&& square[6] ==square[11]&& square[11]==square[16] && square[6] != '')
    {
        end(1,6,11,16)
    }

    else if(square[4]==square[7]&& square[7] ==square[10]&& square[10]==square[13] && square[7] != '')
    {
        end(4,7,10,13)
    }
    



}
function game(id)
{
    console.log(id)
    let element = document.getElementById(id);
    if(turn === 'x' && element.innerHTML == '')
    {
       element.innerHTML = 'X'
       turn = 'o';
       title.innerHTML = 'O';
       element.style.background = '#000';
    }
    else if(turn ==='o' && element.innerHTML == '')
    {
        element.innerHTML ='O' ;
        turn ='x';
        title.innerHTML = 'X';
       element.style.background = '#fa0';

    }
    winner();


}
