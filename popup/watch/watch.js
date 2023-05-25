document.addEventListener('DOMContentLoaded', function(){
    setInterval(function(){
        const watch=document.getElementById('watch');
        watch.innerHTML=new Date().toLocaleString();  
})

});

  
