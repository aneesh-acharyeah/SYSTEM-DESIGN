const openModalBtn=document.getElementById('openModalBtn');
const modal=document.getElementById('modal');
const closeModalBtn=document.getElementById('closeModalBtn');


openModalBtn.addEventListener('click',()=>{
    modal.style.display='flex';
})

closeModalBtn.addEventListener('click',()=>{
    modal.style.display='none';
})

window.addEventListener('click',(e)=>{
    if(e.target === modal){
        modal.style.display='none';
    }
})