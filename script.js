let body = document.querySelector(`body`);
let  button = document.createElement(`button`);
body.append(button);
button.style.height = `2rem`;
button.addEventListener(`click`, function(){
    const squares = prompt(`input the number of squares you want:`);
})
button.textContent = `Click here to setup grid`;
let contdiv = document.createElement(`div`);
let div = document.createElement(`div`);
body.appendChild(div);
div.style.border = `solid blue 2px`
div.style.height = `192px`;
div.style.width = `192px`;
div.style.display = `flex`;
div.style.flexWrap = `wrap`;
div.style.gap = `0px`;
div.style.justifyContent = `flex-start`;
for (let i=0; i<16*16; i++){
let div2 = document.createElement(`div`);
div.append(div2)
div2.style.border = `solid 1px`;
div2.style.height = `10px`;
div2.style.width = `10px`;
div2.style.margin = `0`;
div2.style.padding = `0`;
div2.addEventListener(`mouseover`, function(){
    div2.style.backgroundColor = `blue`;
});
}
