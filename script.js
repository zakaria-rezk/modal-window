'use strict';
const cl = function(){

    modal.classList.add('hidden');
    overplay.classList.add('hidden');
}
const overplay=document.querySelector('.overlay');
const modal=document.querySelector('.modal');
const closemodel=document.querySelector('.close-modal');


let showmodal =document.querySelectorAll('.show-modal')
console.log(showmodal);
for(let i=0;i<showmodal.length;i++)
{
showmodal[i].addEventListener('click',function(){
modal.classList.remove('hidden');
overplay.classList.remove('hidden');
})
closemodel.addEventListener('click', cl)
}
overplay.addEventListener('click',cl);


document.addEventListener('keydown', function(e){
    if(e.key==='Escape' && !modal.classList.contains('hidden')){
        cl();

    }
           
})
