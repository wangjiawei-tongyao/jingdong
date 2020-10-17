define([], function() {
    return {
        plist: ! function() {
            //1.获取列表页传来的sid
            let $sid = location.search.substring(1).split('=')[1];
            // console.log($sid);
            const $smallpic = $('#smallpic')
            const $bpic = $('#bpic')
            const $title = $('.title')
            const $price = $('.price .p-price')

            //如果$sid不存在，默认$sid = 1
            if (!$sid) {
                $sid = 1
            }
            // 将sid传给后端
            $.ajax({
                url: 'http://localhost:8080/jingdong/php/getsid.php',
                data: {
                    sid: $sid
                },
                dataType: 'json'
            }).done(function(data) {
                // console.log(data);
                // 渲染大图
                $smallpic.attr('src', data.url)
                $smallpic.attr('sid', data.sid)
                $bpic.attr('src', data.url)
                $title.html(data.title)
                $price.html(data.price)
                    //渲染小图
                let picarr = data.piclisturl.split(',')
                    // console.log(picarr);
                let str = '';
                $.each(picarr, function(index, value) {
                    str += '<li><img src="' + value + '"/></li>';
                })
                $('#list ul').html(str);

            })

            // 放大镜效果
            const $spic = $('#spic');
            // const $bpic = $('#bpic');
            const $sf = $('#sf'); //小放
            const $bf = $('#bf'); //大放

            //小放/大放=小图/大图
            $sf.width($spic.width() * $bf.width() / $bpic.width());
            $sf.height($spic.height() * $bf.height() / $bpic.height());
            let $bili = $bpic.width() / $spic.width();

            $spic.hover(function() {
                $sf.css('visibility', 'visible');
                $bf.css('visibility', 'visible');
                $(this).on('mousemove', function(ev) {
                    let $leftvalue = ev.pageX - $('.goodsinfo').offset().left - $sf.width() / 2;
                    let $topvalue = ev.pageY - $('.goodsinfo').offset().top - $sf.height() / 2;
                    if ($leftvalue < 0) {
                        $leftvalue = 0;
                    } else if ($leftvalue >= $spic.width() - $sf.width()) {
                        $leftvalue = $spic.width() - $sf.width()
                    }
                    if ($topvalue < 0) {
                        $topvalue = 0;
                    } else if ($topvalue >= $spic.height() - $sf.height()) {
                        $topvalue = $spic.height() - $sf.height()
                    }
                    $sf.css({
                        left: $leftvalue,
                        top: $topvalue
                    });
                    $bpic.css({
                        left: -$leftvalue * $bili,
                        top: -$topvalue * $bili
                    });
                })

            }, function() {
                $sf.css('visibility', 'hidden');
                $bf.css('visibility', 'hidden');
            })
            const $left = $('#left'); //左箭头
            const $right = $('#right'); //右箭头
            //小图切换

            $('#list ul').on('click', 'li', function() {
                    let $imgurl = $(this).find('img').attr('src');
                    $smallpic.attr('src', $imgurl);
                    $bpic.attr('src', $imgurl)
                })
                //左右箭头事件
            let $num = 5; //列表显示的图片个数
            $right.on('click', function() {
                let $lists = $('#list ul li');
                // console.log($lists.size());
                if ($lists.size() > $num) { //限制点击的条件
                    $num++;
                    // console.log($num);
                    $left.css('color', '#333');
                    if ($lists.size() == $num) {
                        $right.css('color', '#fff');
                    }
                    $('#list ul').stop(true).animate({

                        left: -($num - 5) * $lists.eq(0).outerWidth(true)
                    });

                }
            });
            $left.on('click', function() {
                let $lists = $('#list ul li');
                if ($num > 5) { //限制点击的条件
                    $num--;
                    $right.css('color', '#333');
                    if ($num <= 5) {
                        $left.css('color', '#fff');
                    }
                    $('#list ul').stop(true).animate({
                        left: -($num - 5) * $lists.eq(0).outerWidth(true)
                    });
                }
            });



            //加入购物车
            let arrsid = []; //存储商品的编号。
            let arrnum = []; //存储商品的数量。
            //取出cookie,才能判断是第一次还是多次点击
            function cookietoarray() {
                if (jscookie.get('cookiesid') && jscookie.get('cookienum')) {
                    arrsid = jscookie.get('cookiesid').split(','); 
                    arrnum = jscookie.get('cookienum').split(','); 
                } else {
                    arrsid = [];
                    arrnum = [];
                }
            }

            $('.btn .shopcar a').on('click', function() {
                let $sid = $(this).parents('.goodsinfo').find('#smallpic').attr('sid');
                cookietoarray();
                if ($.inArray($sid, arrsid) != -1) { 
                    let $num = parseInt(arrnum[$.inArray($sid, arrsid)]) + parseInt($('#count').val()); //取值
                    arrnum[$.inArray($sid, arrsid)] = $num; //赋值
                    jscookie.add('cookienum', arrnum, 100);
                } else {
                    arrsid.push($sid); 
                    jscookie.add('cookiesid', arrsid, 100);
                    arrnum.push($('#count').val());
                    jscookie.add('cookienum', arrnum, 100);
                }

            });
            const $increase = $('#increase');
            const $reduce = $('#reduce');

            $increase.on('click', function() {
                var $increasevalue = $(this).parents('.btn_input').find('#count').val();
                $increasevalue++;
                $(this).parents('.btn_input').find('input').val($increasevalue);
                $reduce.css('color', '#666');

            })
            $reduce.on('click', function() {
                var $increasevalue = $(this).parents('.btn_input').find('#count').val();
                $increasevalue--;
                $(this).parents('.btn_input').find('input').val($increasevalue);
                if ($increasevalue <= 1) {
                    $increasevalue = 1;
                    $(this).parents('.btn_input').find('input').val($increasevalue);
                    $reduce.css('color', '#ccc');
                    $reduce.css('cursor', 'not-allowed')
                }
            })

            $reduce.hover(function() {
                var $increasevalue = $(this).parents('.btn_input').find('#count').val();
                if ($increasevalue <= 1) {
                    $reduce.css('cursor', 'not-allowed')
                } else {
                    $reduce.css('cursor', 'pointer')
                }

            })
        }(),

    }
})