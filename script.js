const input = document.getElementById("name");
const  textarea = document.querySelector(".textarea");

 const addname =()=>{
    if(input.value==="")
    return null;
    const text = document.createElement("div");
    text.setAttribute("class", "text");
    text.innerText = `Hey! I am ${input.value}`;
    textarea.append(text); 
 } 