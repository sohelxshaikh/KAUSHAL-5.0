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