 var color=['red','green','blue','pink','orange','seagreen','yellow','cyan','aliceblue','antiquewhite'
     ];

      let bg=document.querySelector('body');
      let button= document.getElementById('myButton');

      button.addEventListener('click',()=>{

        let randomColor=Math.floor(Math.random()*10);
        bg.style.backgroundColor=color[randomColor];
     
      })
         

     
