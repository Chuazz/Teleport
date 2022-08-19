var x = document.querySelector("button");

x.addEventListener('mouseover', () => {
    var top = Math.random() * 100;
    var left = Math.random() * 100;
    x.style = `
        top: ${top}%; 
        left: ${left}%;
        transform: translate(-${left}%, -${top}%);
    `
});

x.addEventListener('click', () => {
    var top = Math.random() * 100;
    var left = Math.random() * 100;
    x.style = `
        top: ${top}%; 
        left: ${left}%;
        transform: translate(-${left}%, -${top}%);
    `
});