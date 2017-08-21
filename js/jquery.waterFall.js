;
(function($) {
    $.fn.waterFall = function (options) {
        var _this = $(this); //获取this

        // 默认值及参数
        var init = $.extend({
            gap: 15
        }, options);
        console.log(init);
        var items = _this.children(), //获取每一个子元素
            width = items.width(), //获取每一个图片宽度
            height = 0, //设置初始高度为0
            h = [], //获取一个数组，用于存放每一列的高度值
            count = Math.floor(_this.width() / (width +init.gap)); //计算可以放多少列
            console.log(count);//5

        items.each(function(k, v) {
            //设值height等于 每个item的高度
            height = $(v).height();
            //设置第一行图片
            if (k < count) {
                //将每一列的高度放入数组h中
                h[k] = height;
                $(v).css({
                    top: 0,
                    left: k * (width +init.gap)
                })
               
            }else {
                var min_h = h[0];//假设最小高度是第一项
                var min_k = 0;//假设最小高度下标是0
                //获取高度最小列及下标
                for(var j=0;j<h.length;j++){
                    if(h[j]<min_h){
                        min_k = j;
                        min_h = h[j];
                    }
                }
                //更新当前列高度
                h[min_k] +=height;
                $(v).css({
                    top:min_h+init.gap,
                    left:min_k*(init.gap+width)
                })

                
            }
        });
         var maxH = h[0];

        for(var i = 0;i<h.length;i++){
            if(h[i]>maxH){
                maxH = h[i];
            }
        }
        console.log(maxH);
       _this.height(maxH);
        

        
    }

})(jQuery);