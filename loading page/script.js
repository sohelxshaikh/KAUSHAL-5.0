var $circle = $('.circle'),
    $follow = $('.circle-follow');

function moveCircle(e) {
    TweenLite.to($circle, 0.3, {
      x: e.clientX,
      y: e.clientY
  });
    TweenLite.to($follow, 0.7, {
      x: e.clientX,
      y: e.clientY
  });  
}

$(window).on('mousemove', moveCircle);







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
      