let title = document.querySelector('.title');
let turn = 'x' ;
let square =[]  ;
let oldTitle = title.innerHTML;
 let nbrLine=4
 let nbrColone=6
Build_Matrix(nbrLine,nbrColone)


function Build_Matrix( nbrLine, nbrColone)
{
    platforme = document.getElementById('platfome');
    for(let i = 0; i<nbrLine;i++)
    {
        const boxLine = document.createElement("div");
        boxLine.id = "line" + i;
        boxLine.classList.add('alignH');
        platforme.appendChild(boxLine);
    }

    for(let i = 0; i<nbrLine;i++)
    {
        const boxLine =document.getElementById( "line" + i);
        for(let j = 0;j<nbrColone;j++)
        {
            const boxColone = document.createElement("div");
            boxColone.id = "item" +i+"_" + j ;
            boxColone.classList.add('square');
            boxColone.setAttribute("onclick","game(this.id)");
            boxLine.appendChild(boxColone);
        }
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
       element.style.background = 'white' ;
       element.style.color = 'red';
       
    }
    else if(turn ==='o' && element.innerHTML == '')
    {
        element.innerHTML ='O' ;
        turn ='x';
        title.innerHTML = 'X';
        element.style.background = 'white' ;
        element.style.color = 'black';

    }
    winner(nbrLine,nbrColone);


}

function winner(nbrLine, nbrColone)
{
    var arry = []; 
    for(let i = 0; i<nbrLine;i++)
    {
        var line = []; 
        for(let j = 0; j<nbrColone;j++)
        {
            line[j] = document.getElementById("item" +i+"_" + j  ).innerHTML;
        }
        arry.push( line);
    }
    console.log(arry)
    
     
    

}



function reset()
{
    location.reload();
 }




function end(num1,num2,num3)
{
    title.innerHTML = `${square[num1]} winner` ;
    document.getElementById('item'+num1).style.background = '#000';
    document.getElementById('item'+num2).style.background = '#000';
    document.getElementById('item'+num3).style.background = '#000';


 }




 