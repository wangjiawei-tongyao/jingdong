define([], function() {
    return {

        list: ! function() {
            let array_default = []; //排序前的li数组
            let array = []; //排序中的数组
            //冒泡排序，比较相邻的两个数字。
            let prev = null; //前一个商品价格
            let next = null; //后一个商品价格
            const piclist = $('.piclist ul');
            $.ajax({
                url: 'http://localhost:8080/jingdong/php/listdata.php',
                dataTpye: 'json'
            }).done(function(data) {
                // console.log(data);
                let str = '';
                $.each($.parseJSON(data), function(index, value) {
                    str += `
                        <a href="detail.html?sid=${value.sid}">
                        <li>
                           <img class="lazy" data-original="${value.url}" width="150px" height="150px">
                           <span class="price">￥${value.price}</span>
                           <p>${value.title}</p>
                        </li>
                       </a>
                        `;
                })
                piclist.html(str);
                $("img.lazy").lazyload({
                    effect: "fadeIn"
                });
                $('.piclist li').each(function(index, element) {
                    array[index] = $(this);
                    array_default[index] = $(this);
                    // console.log(array_default);
                    // console.log(array);
                });
            });
            // 分页
            $('.page').pagination({
                pageCount: 4, //总的页数
                jump: true, //是否开启跳转到指定的页数，布尔值
                prevContent: '上一页', //将图标改成上一页下一页。
                nextContent: '下一页',
                callback: function(api) {
                    // console.log(api.getCurrent());
                    $.ajax({
                        url: 'http://localhost:8080/jingdong/php/listdata.php',
                        data: {
                            page: api.getCurrent()
                        },
                        dataTpye: 'json'
                    }).done(function(data) {
                        // console.log(data);
                        let str = ''
                        $.each($.parseJSON(data), function(index, value) {
                            str += `
                                <a href="detail.html?sid=${value.sid}">
                                <li>
                                   <img class="lazy" data-original="${value.url}" width="150px" height="150px">
                                   <span class="price">￥${value.price}</span>
                                   <p>${value.title}</p>
                                </li>
                               </a>
                                `;
                        })
                        piclist.html(str);
                        $("img.lazy").lazyload({
                            effect: "fadeIn"
                        });
                        array_default = [];
                        array = [];
                        prev = null;
                        next = null;
                        $('.piclist li').each(function(index, element) {
                            array[index] = $(this);
                            array_default[index] = $(this);
                        })
                    })
                }
            })

            //3.排序，排序前的数组都已经具有li元素
            // 默认排序
            $('.btn button').eq(0).on('click', function() {
                $('.piclist ul').empty();
                $.each(array_default, function(index, value) {
                    $('.piclist ul').append(value)
                })

                return;
            });
            // 升序排序
            $('.btn button').eq(1).on('click', function() {
                for (let i = 0; i < array.length; i++) {
                    for (let j = 0; j < array.length - i - 1; j++) {
                        // console.log($('.price').html());
                        prev = parseFloat(array[j].find('.price').html().substring(1));
                        next = parseFloat(array[j + 1].find('.price').html().substring(1));
                        // console.log(prev);
                        if (prev > next) {
                            let temp = array[j]
                            array[j] = array[j + 1]
                            array[j + 1] = temp
                        }
                    }
                }
                $('.piclist ul').empty();
                $.each(array, function(index, value) {
                    $('.piclist ul').append(value)
                })
            });
            // 升序排序
            $('.btn button').eq(2).on('click', function() {
                for (let i = 0; i < array.length; i++) {
                    for (let j = 0; j < array.length - i - 1; j++) {
                        // console.log($('.price').html());
                        prev = parseFloat(array[j].find('.price').html().substring(1));
                        next = parseFloat(array[j + 1].find('.price').html().substring(1));
                        // console.log(prev);
                        if (prev < next) {
                            let temp = array[j]
                            array[j] = array[j + 1]
                            array[j + 1] = temp
                        }
                    }
                }
                $('.piclist ul').empty();
                $.each(array, function(index, value) {
                    $('.piclist ul').append(value)
                })
            });
        }()
    }
})