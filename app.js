
const modal=document.getElementById('modal');
const modalImg=document.getElementById('modalImg');
document.querySelectorAll('.card img').forEach(img=>{
img.onclick=()=>{modal.style.display='flex';modalImg.src=img.src;}
});
document.getElementById('close').onclick=()=>modal.style.display='none';
modal.onclick=e=>{if(e.target===modal)modal.style.display='none';}
