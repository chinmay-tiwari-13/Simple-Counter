const content = document.querySelector("#content");

const increment = () => {
    let value = parseInt(content.innerText);
    value += 1;
    content.innerText = value;
}

const decrement = () => {
    let value = parseInt(content.innerText);
    value -= 1;
    // if(value < 0){
    //     value = 0;
    // }//This condition to avoid having negative count.
    content.innerText = value;
}



