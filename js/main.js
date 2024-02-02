

const btn = document.querySelector("#btn");

btn.addEventListener("click", function(){

       const todoCard = document.querySelector(".todoCard");

       const cloneCarte = todoCard.cloneNode(true);

       const todoCards = document.querySelector("#todoCards");

       todoCards.appendChild(cloneCarte);
});

const todoCard = document.querySelectorAll(".todoCard");

todoCard.forEach((card) => {
       const delBtn = document.querySelectorAll(".delBtn")
       delBtn.forEach((btn) => {
         btn.addEventListener("click", function(){
            card.remove()
        })
       })
 } )

   
// delBtn.forEach(btn => {
//     btn.addEventListener("click", function(){

//         console.log("ok")
    
//         const todoCard = document.querySelector(".todoCard");

//     //   const cloneCarte = todoCard.cloneNode(true);

//         delBtn.addEventListener("click", function(){
//         todoCard.remove()
//     })
//     const todoCards = document.querySelector("#todoCards");
//     todoCards.appendChild(todoCard)
    
// })
            
//         });

