var elements = document.getElementsByClassName("icon-open-nav");
elements[0].addEventListener('click', function() {
    var nav = document.getElementById('block-nav__content')
    nav.style.display = 'block'
}, false);

var elementss = document.getElementsByClassName("close-icon");
elementss[0].addEventListener('click', function() {
    //block-nav__content
    var nav = document.getElementById('block-nav__content')
    nav.style.display = 'none'
}, false);



$(document).ready(function(e){

    for(var i=0;i<10;i++){
        // console.log(productObj[i])
        loadDealer(productObj[i],i)
    }

    // remover()

});


function loadDealer(data,index) {
    //console.log(data)
    var div = document.createElement("div")
    div.classList.add("product-content__item__box")
    div.innerHTML= `                
            <div class="img">
                <img src="${data.img}" alt="">
            </div>
            <div class="product-content__item__box__name">
                <p>${data.name}</p>
            </div>
            <div class="product-content__item__box__hover" >
                <i class="fa fa-search" aria-hidden="true" onclick="oppenPopup(${index})"></i>
            </div>
            <div class="product-content__item__box__new">
            <img src="${data.new}" alt="">
            </div>
            `

    document.getElementById("product-item").appendChild(div)
    // var news = document.getElementsByClassName("product-content__item__box__new_p")[0]
    // console.log(news)
    // if(news==''){
    //     news
    // }
}

// function remover() {
//     var div = document.getElementsByClassName("product-content__item__box")
//     var checkNew = document.getElementsByClassName("product-content__item__box__new_p")
//     for(var i=0;i<div.length;i++){
//         if(checkNew[i].innerHTML==""){
//             document.getElementsByClassName("product-content__item__box__new")[i].style.display="none"
//         }
//     }
// }

function oppenPopup(index) {
    
    popup = document.getElementsByClassName("product-popup")[0]
    popup.innerHTML = `
                <div class="product-popup__img">
                    <img src="${productObj[index].img}" alt="">
                </div>
                <div class="product-popup__info">
                    <div class="product-popup__info__top">
                        <h2>${productObj[index].name}</h2>
                        <P>${productObj[index].content}
                        </P>
                    </div>
                    
                    <div class="product-popup__info__top__bottom">
                        <p>Origin: VietNam</p>
                        
                    </div>
                </div>
                <div class="close-popup" onclick="losePopup()">&times;</div>
                `
    popup.style.display = "flex"
    if(screen.width<600)popup.style.display = "block"
    document.getElementsByClassName("over-layer")[0].style.display = "block"
    document.getElementsByClassName("over-layer")[0].addEventListener("click",function(){
        losePopup()
    })
}


function losePopup() {
    document.getElementsByClassName("over-layer")[0].style.display = "none"
    document.getElementsByClassName("product-popup")[0].style.display = 'none'
}


function showMore() {

    for(var i=10;i<20;i++){
        loadDealer(productObj[i],i)
    }
    
                
    document.getElementsByClassName("showMore")[0].getElementsByTagName("span")[0].style.display ="none"
    document.getElementsByClassName("showMore")[0].getElementsByTagName("span")[1].style.display =""
}


function showAll() {
    for(var i=20;i<productObj.length;i++){
        loadDealer(productObj[i],i)
    }
    document.getElementsByClassName("showMore")[0].style.display ="none"
}



function filter(type) {
    document.getElementById("product-item").innerHTML=""
    console.log(type)
    if(type=="All"){
        document.getElementsByClassName("showMore")[0].style.display = "block"
        for(var i=0;i<10;i++){
            loadDealer(productObj[i],i)
        }
        document.getElementsByClassName("showMore")[0].getElementsByTagName("span")[0].style.display ="block"

    }else{
        document.getElementsByClassName("showMore")[0].style.display = "none"
        for(var i=0;i<productObj.length;i++){
            if(productObj[i].type==type) {
                loadDealer(productObj[i],i)
            }else{
                continue;
            }
        }
    }
}

function getValue(obj) {
    var options = obj.children
    for(var i=0;i<options.length;i++) {
        if(options[i].selected){
            filter(options[i].value)
        }
    }
}