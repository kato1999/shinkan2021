const block2 = document.getElementsByClassName("block2")
for(i=0;i<block2.length;i++){
    console.log(block2[i].offsetWidth)
    const height = (block2[i].offsetWidth) + "px"
    console.log(height)
    block2[i].style.height = height
    block2[i].style.lineHeight = height 
    console.log(block2[i].style.height)
}