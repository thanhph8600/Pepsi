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

    dealerObj.forEach((i)=>loadDealer(i))

    // $('.first-section__btn__number').click(function() {
    //    // console.log($(this));
    //     console.log( $('.first-section__btn__number').index(this) );
    //     $('.first-section__number').css("display", "none");
    //     $('.first-section__number').eq($('.first-section__btn__number').index(this)).css("display", "block");
    // });
});

function loadDealer(data) {
    //console.log(data)
    var div = document.createElement("div")
    div.classList.add("first-section__content__boxs")
    div.innerHTML= `                
            <div class="first-section__content__boxs__img">
                <img src="`+data.img+`" alt="">
            </div>
            <div class="first-section__content__boxs__info">
                <div class="">
                    <h3 class="first-section__content__boxs__name">`+data.name+`</h3>
                    <p class="first-section__content__boxs__time">Oppen: `+data.timeOppen+` - <span>`+data.timeLose+`</span></p>
                    <p class="firts-section__content__boxs__dress">`+data.dress+`</p>
                </div>

                <div class="first-section__btn">
                    <p class="btn south first-section__btn__item first-section__btn__number" onclick="viewNumber(this)">VIEW NUMBER</p>
                    <a href="https://www.google.com/maps" class="btn north first-section__btn__item first-section__btn__map">VIEW MAP</a>
                </div>
            </div>
            <div class="first-section__number" style="display:none" >
                        <p>${data.number}</p>
                        <span class="close-number">&times;</span>
            </div>`
    document.getElementById("north-content").appendChild(div)
}

function south(data_id) {

    document.getElementById("north-content").innerHTML = "";

    if(data_id==0){
        dealerObj.forEach((i)=>loadDealer(i))
    }

   //console.log(dealerObj)
   var objectFilter = [];
   //dealerObj.fi
  
   objectFilter = dealerObj.filter(obj => obj.area == data_id);
  // console.log(objectFilter);
 
   objectFilter.map((items, key) => {


    var div = document.createElement("div")
    div.classList.add("first-section__content__boxs")
    div.innerHTML= `                
            <div class="first-section__content__boxs__img">
                <img src="${items.img}" alt="">
            </div>
            <div class="first-section__content__boxs__info">
                <div class="">
                    <h3 class="first-section__content__boxs__name">`+items.name+`</h3>
                    <p class="first-section__content__boxs__time">Oppen: `+items.timeOppen+` - <span>`+items.timeLose+`</span></p>
                    <p class="firts-section__content__boxs__dress">`+items.dress+`</p>
                </div>

                <div class="first-section__btn">
                    <p class="btn south first-section__btn__item first-section__btn__number" onclick="viewNumber(this)">VIEW NUMBER</p>
                    <a href="https://www.google.com/maps" class="btn north first-section__btn__item first-section__btn__map">VIEW MAP</a>
                </div>
            </div>
            <div class="first-section__number" style="display:none" >
                        <p>${items.number}</p>
                        <span class="close-number">&times;</span>
            </div>`
    document.getElementById("north-content").appendChild(div);
   });
}


function viewNumber(i) {
    var numbers = document.getElementsByClassName("first-section__number")
    for(var j=0;j<numbers.length;j++){
        numbers[j].style.display = "none"
    }
    var openNumber = i.parentElement.parentElement.parentElement
    var number = openNumber.getElementsByClassName("first-section__number")[0]
    number.style.display = "block"
    number.getElementsByClassName("close-number")[0].addEventListener("click",function() {
        number.style.display = "none"
     })
   
}


    


