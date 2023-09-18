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
      