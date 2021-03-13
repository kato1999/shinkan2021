const book = document.getElementById("book")
const ul = document.getElementById("ul")
const div = document.getElementById("div")
const project = document.getElementById("project")

function matchHeight(){
    const block2 = document.getElementsByClassName("block2")
    const height = (block2[0].offsetWidth) + "px"
    console.log(height)
    const lineHeight = height
    console.log(lineHeight)
    for(i=0;i<block2.length;i++){
        block2[i].style.height = height
        block2[i].style.lineHeight = lineHeight
    }
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