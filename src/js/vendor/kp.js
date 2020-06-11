// //scrollto arrow JS
// // Add smooth scrolling to all links
// $("a").on('click', function (event) {

//   // Make sure this.hash has a value before overriding default behavior
//   if (this.hash !== "") {
//     // Prevent default anchor click behavior
//     event.preventDefault();

//     // Store hash
//     var hash = this.hash;

//     // Using jQuery's animate() method to add smooth page scroll
//     // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
//     $('html, body').animate({
//       scrollTop: $(hash).offset().top
//     }, 400, function () {

//       // Add hash (#) to URL when done scrolling (default click behavior)
//       // window.location.hash = hash;
//     });
//   } // End if
// });

// $(".menu__inner").removeClass("hidden");

// //hamburgler
// (function () {
//   var navEl = document.querySelector("nav.menu"),
//     revealer = new RevealFx(navEl),
//     closeCtrl = navEl.querySelector(".btn--close");

//   document.querySelector(".btn--menu").addEventListener("click", function () {
//     revealer.reveal({
//       bgcolor: "#252525",
//       //bgcolor: '#e8e8e8',
//       //bgcolor: '#00e0ff',
//       duration: 400,
//       easing: "easeInOutCubic",
//       onCover: function (contentEl, revealerEl) {
//         navEl.classList.add("menu--open");
//         contentEl.style.opacity = 1;
//       },
//       onComplete: function () {
//         closeCtrl.addEventListener("click", closeMenu);
//       },
//     });
//   });

//   function closeMenu() {
//     closeCtrl.removeEventListener("click", closeMenu);
//     navEl.classList.remove("menu--open");
//     revealer.reveal({
//       bgcolor: "#252525",
//       duration: 400,
//       easing: "easeInOutCubic",
//       onCover: function (contentEl, revealerEl) {
//         navEl.classList.remove("menu--open");
//         contentEl.style.opacity = 0;
//       },
//     });
//   }
// })();

// // //scrollify nav arrows on homepage
// // $('.previous').click(function(){
// //   $.fn.fullpage.moveSectionUp();
// // });

// // $('.next').click(function(){
// //   $.fn.fullpage.moveSectionDown();
// // });
