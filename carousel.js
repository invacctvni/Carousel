// Create image array
const imgArr = [
    // store image
    'https://mobilecontent.costco.com/live/resource/img/ca-homepage/d-hero-1019-22-P6-MVM-Wk1-en.jpg',
    'https://mobilecontent.costco.com/live/resource/img/ca-homepage/d-hero-220131-Limited-en1.jpg',
    'https://mobilecontent.costco.com/live/resource/img/ca-homepage/d-hero-220131-apple-watch-en.jpg',
    'https://mobilecontent.costco.com/live/resource/img/ca-homepage/d-hero-220131-ghostbed-en.jpg',
    'https://mobilecontent.costco.com/live/resource/img/ca-homepage/d-hero-220131-pirelli-en.jpg',
    'https://mobilecontent.costco.com/live/resource/img/ca-homepage/d-hero-220124-tvs-football-en.jpg'
]
// create button array and store button name
const btnArr = [
    'Member-only Savings',
    'Limited-time Offers',
    'Apple Watch',
    'Ghostbed',
    'Pirelli',
    'Televisions'
]

// create empty arrays
let eleImgArr = [];
let imgIndex = 0;

//find nodes
const imgContainer = document.getElementById('imgContainer')
const btnContainer = document.getElementById('btnContainer')

//create elements dynamically based on the array
const createCarousel = function () {
    for (let i = 0; i < imgArr.length; i++) {
        // create image
        let eleImg = document.createElement('img');
        eleImg.src = imgArr[i]
        eleImg.width= 1000
        imgContainer.appendChild(eleImg)
        //save the img node to an array
        eleImgArr.push(eleImg)
        // create button
        let eleBtn = document.createElement('button');
        eleBtn.innerHTML = btnArr[i]
        btnContainer.appendChild(eleBtn)
    }
}

// define function for changing img/btn
const switchImgBtn = function () {
    // hide all images first
    for (let i = 0; i < eleImgArr.length; i++) {
        eleImgArr[i].style.display = 'none'
    }
    // another way to display mod
    if (imgIndex === eleImgArr.length) {
        imgIndex = 0
    }
    // display the current image
    eleImgArr[imgIndex].style.display = 'block'
    imgIndex++
}
// 运行function
createCarousel()

// click buttons below will show the page

// directly call the function
// initialize the function
switchImgBtn()
// every 2s, get the function
setInterval(switchImgBtn,2000)









