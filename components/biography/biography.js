var lFollowX=0,lFollowY=0,x=0,y=0,friction=1/30;function moveBackground(){x+=(lFollowX-x)*friction,y+=(lFollowY-y)*friction,translate="translate("+x+"px, "+y+"px) scale(1.1)",$(".bg").css({"-webit-transform":translate,"-moz-transform":translate,transform:translate}),window.requestAnimationFrame(moveBackground)}$(window).on("mousemove click",function(o){var n=Math.max(-100,Math.min(100,$(window).width()/2-o.clientX)),t=Math.max(-100,Math.min(100,$(window).height()/2-o.clientY));lFollowX=20*n/100,lFollowY=10*t/100}),moveBackground();