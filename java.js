const scrpit= ()=>{
    const sketch =(i)=>{
        const sqr=i*i;
        var container=document.querySelector('.container');
        container.style.gridTemplateColumns= `repeat(${i},1fr)`;
        container.style.gridTemplateRows= `repeat(${i},1fr)`;
        
        




    for(i=0;i<sqr;i++){
        //need to change the grid in css
        const grid= document.createElement('div');
        
        /*grid.classList.add('div');*/
        container.appendChild(grid);
    }
    const tile=document.querySelectorAll('.container div');
    tile.forEach(tile =>{
        tile.addEventListener('mouseover', function(){
            color=document.querySelector('.choice');
            console.log(color.value);
            tile.style.backgroundColor=color.value;
                    
            })
        })
    const btn=document.querySelector('.reset');
        btn.addEventListener('click',function(){
            const tile=document.querySelectorAll('.container div');
            tile.forEach(tile =>{
                tile.style.backgroundColor='rgb(255,255,255)';
            })
            
        })
    }

    const num = document.querySelector('input');
    var number=(Number(num.value));
    
    const submit= document.querySelector('.sub');
    submit.addEventListener('click',e=>{
        var number=(Number(num.value));
        
        if (number<1|| number==NaN){
            number=16;
            
        }
        if(number>=100){
            number=100;
        }
        console.log(number);
        const tile=document.querySelectorAll('.container div');

        //hopefully take this out
        tile.forEach(tile=>{
            tile.remove();
        })
        //
        sketch(number);
    })
    if(number<1){
        number=16;
    }
    sketch(number);
    
    }
// Call whole code
scrpit();