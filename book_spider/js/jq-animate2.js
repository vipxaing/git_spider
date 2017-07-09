$(function() {
    $('#btnFade').click(function() {
        $('#tag').fadeToggle(3000,function() {
            console.log('fadeToggle执行完成')
        });
        // fadeToggle 如果是out 那么就变成in 反之一样。
        // fadeIn   //淡入
        // fadeOut  //淡出
        // fadeTo(speed,opacity,callback) //渐变给定的透明度。
    })

    $('#btnSlide').click(function() {
        $('#tag').slideToggle(2000,function() {
            // alert('slideToggle执行完成')
        })
        /**
         * slideToggle //向上／向下滑动  与现在的状态相反。
         * slideUp 向下滑动
         * slideDown 向上滑动
         */
    })

    /**
     * $(selector).animate({params},speed,callback)
     */   
     $('#btnAnimate').click(function() {
         console.log(this)  //a标签
         $('#tag').slideDown(2000, function() {
             console.log(this)  //div元素
             $('#tag').animate({
                 width:'+=500px',
                 height:'+=200px',
                 left:'+=300px',
                 top:'+=30px',
                 opacity:'0.4'
             },2000)
             $('#tag').animate({
                 width:'300px',
                 height:'200px',
                 left:'80px',
                 top:'20px',
                 opacity:'1'
             },1000)
         })
     })

     /**
      * 鼠标点击后通过offsetX和offsetY获取当前点击位置的坐标(相当于当前元素)
      */

      $('#tag').click(function(e) {
        console.log(e.offsetX+ '|' + e.offsetY)
      })

      $('.section').click(function(e) {
          var x = e.offsetX;
          var y = e.offsetY;
        //   console.log(x+ '|' + y)

          if(x > 150 && x < 237 && y > 170 && y < 210) {
            //   console.log(e.offsetX + '|' + e.offsetY)
              alert('当前点击的是我的鼻子')
          }else if(x > 164 && x < 300 && y > 223 && y < 310) {
            //   console.log(e.offsetX + '|' + e.offsetY)
              alert('点击的是我的嘴巴')
          }else {
              alert('未知部位')
          }
      })

})