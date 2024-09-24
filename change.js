function btn(){
    debugger;
    let image = document.getElementById('image');
    let image = ['IMG-20240821-WA0021.jpg','IMG-20240821-WA0030.jpg'];
    let random = math.floor(math.random()*2);
    image.src=images[random];
}