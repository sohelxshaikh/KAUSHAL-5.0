


gsap.registerPlugin(ScrollTrigger);

// CURSOR
var cursor = $(".cursor"),
follower = $(".cursor-follower");

var posX = 0,
    posY = 0;

var mouseX = 0,
    mouseY = 0;

TweenMax.to({}, 0.016, {
  repeat: -1,
  onRepeat: function() {
    posX += (mouseX - posX) / 9;
    posY += (mouseY - posY) / 9;

    TweenMax.set(follower, {
        css: {
        left: posX - 12,
        top: posY - 12
        }
    });

    TweenMax.set(cursor, {
        css: {
        left: mouseX,
        top: mouseY
        }
    });
  }
});

$(document).on("mousemove", function(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

var tl = gsap.timeline()

tl
    .from("#lowest",{
        duration:0.3,
        onStart:function(){
            $('#lowest').textillate({ 
                in: { effect: 'fadeInUp',
                callback:function(){
                    $('#lowest').textillate('out')
                }
            },
                out:  { effect: 'fadeOutUp' },
        });
        }
    })
    .from("#second-lowest",{
        opacity:0,
        delay:0.9,
        onStart:function(){
            $('#second-lowest').textillate({ 
                in: { effect: 'fadeInUp',
                callback:function(){
                    $('#second-lowest').textillate('out')
                }
            },
                out:  { effect: 'fadeOutUp' },
        });
        }
    })
    
    
    
    .from("#third-lowest",{
        opacity:0,
        delay:0.9,
        onStart:function(){
            $('#third-lowest').textillate({ 
                in: { effect: 'fadeInUp',
                callback:function(){
                    $('#third-lowest').textillate('out')
                }
            },
                out:  { effect: 'fadeOutUp' },
        });
        }
    })
    .from("#second-top",{
        opacity:0,
        delay:0.9,
        onStart:function(){
            $('#second-top').textillate({ 
                in: { effect: 'fadeInUp',
                callback:function(){
                    $('#second-top').textillate('out')
                }
            },
                out:  { effect: 'fadeOutUp' },
        });
        }
    })
    .from("#top",{
        opacity:0,
        delay:0.9,

        onStart:function(){
            $('#top').textillate({ 
                in: { effect: 'fadeInUp',
               
            },
               
        });
        }
    })
    .to("#top-screen",{
        top : "-100%",
        delay:1,
        
        ease :"Power4.easeOut"
    })


    
  gsap.to("#main",{
      backgroundColor:"#fff",
      scrollTrigger:{
          trigger:"#main",
          scroller:"body",
         
          start:"top -25%",
          end :"top -100%",
          scrub:2,
      }
  })


    window.onload = function () {
        const bars = document.querySelector(".bars");
        const menu = document.querySelector(".menu");
        bars.addEventListener("click", function (e) {
          this.classList.toggle("active");
          if (this.classList.contains("active")) {
            gsap.to(".menu", {
              duration: 0.1,
              display: "flex",
              ease: "expo.in"
            });
            gsap.to(".navBefore", {
              duration: 0.5,
              marginLeft: "0",
              ease: "expo.in"
            });
            gsap.to(".nav", {
              duration: 0.8,
              marginLeft: "0",
              delay: 0.3,
              ease: "expo.in"
            });
            gsap.to(".navigation", {
              duration: 1,
              opacity: "1",
              delay: 0.8,
              ease: "expo.in"
            });
          } else {
            gsap.to(".navigation", {
              duration: 0.2,
              opacity: "0",
              ease: "expo.in"
            });
            gsap.to(".nav", {
              duration: 1,
              marginLeft: "100%",
              delay: 0.3,
              ease: "expo.in"
            });
            gsap.to(".navBefore", {
              duration: 1,
              marginLeft: "100%",
              delay: 0.5,
              ease: "expo.in"
            });
            gsap.to(".menu", {
              duration: 1,
              display: "none",
              delay: 1,
              ease: "expo.in"
            });
          }
        });
      };
      


      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;
      
      const images = document.querySelectorAll(".image");
      let random = gsap.utils.random(0, 100, 4, true);
      let randomImageSize = gsap.utils.random(200, 500, true);
      
      function setImages() {
        images.forEach((image) => {
          let randomY = Math.round((random() * screenHeight) / 200);
          let randomW = Math.round(random() * screenWidth) / 100;
      
          //image.style.top = Math.round(screenHeight + randomY) + "px";
          image.style.top = Math.round(screenHeight) + "px";
      
          image.style.left = randomW + "px";
      
          if (screenWidth < 800) {
            image.style.width = Math.round(randomImageSize() / 3) + "px";
            console.log(
              (image.style.width = Math.round(randomImageSize() / 3) + "px")
            );
          } else {
            image.style.width = Math.round(randomImageSize()) + "px";
          }
      
          // Make larger images appear closer
          image.style.zIndex = Math.round(image.style.width.replace("px", "") / 40);
        });
      }
      
      setImages();
      
      gsap
        .to(".image", {
          y: function (index, target) {
            return -Math.round(target.offsetHeight + screenHeight) + "px";
          },
          ease: "none",
          duration: function (index, target) {
            return 10000 / target.style.width.replace("px", "");
          },
          stagger: {
            amount: 3,
            repeat: -1,
            delay: function (index, target) {
              return -10000 / target.style.width.replace("px", "");
            }
          }
        })
        .progress(0.5);
      
        const scroll = new LocomotiveScroll({
          el: document.querySelector('body'),
          smooth: true
        });

        var $circle = $('.circle'),
    $follow = $('.circle-follow');


document.querySelectorAll(".elem")
.forEach(function(elem){
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin("rotation");
  var rotate =0;
  var diffroot = 0;
  elem.addEventListener("mousemove",function(details){
    
    var diff = details.clientY - elem.getBoundingClientRect().top;
    diffroot = details.clientX - rotate;
    rotate = details.clientX;
    
    gsap.to(elem.querySelector("img"),{
      opacity:1,
      ease:Power3,
      top:diff,
      left:details.clientX,
      rotate : gsap.utils.clamp(-20 ,20 ,diffroot*0.5),
    });
    });
    elem.addEventListener("mouseleave",function(details){
    
      var diff = details.clientY - elem.getBoundingClientRect().top;
      diffroot = details.clientX - rotate;
      rotate = details.clientX;
      
      gsap.to(elem.querySelector("img"),{
        opacity:0,
        ease:Power3,
        duration:0.5
       
      });
      });
 
});


        