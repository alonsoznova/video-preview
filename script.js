function mouseOver(element){
    element.play();
}
function mouseOut(element){
    element.currentTime = 0;
    element.pause();
}