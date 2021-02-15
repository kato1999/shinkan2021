const book = document.getElementById("book")
const ul = document.getElementById("ul")
const div = document.getElementById("div")
const project = document.getElementById("project")

function matchHeight(){
    const block2 = document.getElementsByClassName("block2")
    for(i=1;i<block2.length;i++){
        const height = (block2[i].offsetWidth) + "px"
        const line_height = (block2[i].offsetWidth) * 0.15 + "px"
        const padding_top = (block2[i].offsetWidth) * 0.38+ "px"
        block2[i].style.height = height
        block2[i].style.lineHeight = line_height
        block2[i].style.paddingTop = padding_top 
    }
    const height = (block2[0].offsetWidth) + "px"
    block2[0].style.height = height
    block2[0].style.lineHeight = height 
}

function triangle(){
    div.insertBefore(book,ul)
    book.style.width = ((project.offsetWidth) + "px")
    book.style.padding = "0 0.625rem 0.8rem"
    matchHeight()
}

function flat(){
    book.style.width = "33.33%"
    ul.insertBefore(book,project)

    matchHeight()
}

function whichEvent(){
    if(window.innerWidth <= 640){
        console.log("aaa")
        triangle()
    }else{
        console.log("bbb")
        flat()
    }
}

whichEvent()

window.addEventListener('resize',whichEvent, false )