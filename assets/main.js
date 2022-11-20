let snakeField=document.querySelector('#snakeField');

snackLoop=()=>{
    ausgabe='';
    for(let i=0; i<100; i++){
        ausgabe+=i
        let divElement=document.createElement('div')
        snakeField.appendChild(divElement)
        }
    }
    snackLoop(); 
    
   snakeField.addEventListener('mouseover', (event)=>{   
    event.target.style.backgroundColor='yellow';
setTimeout(()=>{
    event.target.style.backgroundColor=''
}, 500);
}) 