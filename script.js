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
  

  let contactInfo = firebase.database().ref("contacts");

// firebase.firestore().collection("contacts").add({
 
// });

document.querySelector('#contactForm').addEventListener('submit', submitForm);

function submitForm(even) {
    even.preventDefault();

    let name = document.querySelector("#userName").value;
    let email = document.querySelector("#userEmail").value;
    let message = document.querySelector("#userMessage").value;     

    console.log(name, email, message)
    
    saveContactForm(name, email, message)

    document.querySelector("#contactForm").reset();
}

function saveContactForm(name, email, message) {
    let newContactInfo = contactInfo.push();

    newContactInfo.set({
        user_name: name,
        user_email: email,
        user_message: message, 
    })
}


function getInputValue(id) {
    return document.getElementById(id).value;
}



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



// // save message to firebase

// function saveMessage(userName, userEmail, userMessage) {
//     const newMessageRef = messagesRef.push();
//     newMessageRef.set({
//         name: userName,
//         email: userEmail,
//         message: userMessage
//     });
// }






































