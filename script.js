const firebaseConfig = {
    apiKey: "AIzaSyDS1kfHDlu9JjGaYzm5toIyrlOWVonsGVw",
    authDomain: "website-exam.firebaseapp.com",
    databaseURL: "https://website-exam-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "website-exam",
    storageBucket: "website-exam.appspot.com",
    messagingSenderId: "794487191558",
    appId: "1:794487191558:web:81d1831494b2855283eb87"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
firebase.firestore().collection("contacts").add({
 
});


const burgerButton = document.querySelector(".btn-burger-menu");
const headerList = document.querySelector(".header-nav");
const body = document.querySelector("body");
const headerLinkItem = document.querySelectorAll(".header-link-item");


    $('.btn-burger-menu').on('click', function () {
        $('.header-nav').toggleClass('show-burger');
        $('body').toggleClass('wrapper-body');
    });

   $('.header-link-item').on('click', function () {
       $('body').removeClass('wrapper-body');
       $('.header-nav').removeClass('show-burger');
    });
  

$(document).ready(function () {
    
    $('.slider-list').slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow:  $(".recent-previous-button"),
        nextArrow: $(".recent-next-button"),
        responsive: [
            {
                breakpoint: 430,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
            }
        ]
    });

});

$(document).ready(function () {
    
    $('.member-list').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        centerMode: true,
        prevArrow:  $(".member-previous-button"),
        nextArrow: $(".member-next-button"),
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 430,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
            }
        ]
    });

});

// // form summit 

document.querySelector('#contactForm').addEventListener('submit', submitForm);

function submitForm(even) {
    even.preventDefault();
    
    const userName = getInputValue('userName');
    const userEmail = getInputValue('userEmail');
    const userMessage = getInputValue('userMessage');

    saveMessage(userName, userEmail, userMessage)

}

function getInputValue(id) {
    return document.getElementById(id).value;
}

// // save message to firebase

// function saveMessage(userName, userEmail, userMessage) {
//     const newMessageRef = messagesRef.push();
//     newMessageRef.set({
//         name: userName,
//         email: userEmail,
//         message: userMessage
//     });
// }



const label = document.querySelector(".label-input1")

console.log(label.nextElementSibling)


