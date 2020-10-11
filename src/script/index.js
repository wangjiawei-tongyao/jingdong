define([], function() {
    return {
        list: ! function() {
            const plist = $('.plist ul');
            $.ajax({
                url: 'http://localhost:8080/jingdong/php/jingdong.php',
                dataType: 'json'
            }).done(function(data) {
                // console.log(data);
                let str = '';
                $.each(data, function(index, value) {
                    str += ` 
                    <a href="detail.html?sid=${value.sid}">
                    <li>
                        <img class="lazy" src="${value.url}">
                        <p>${value.title}</p>
                        <span><i>￥</i>${value.price}</span>
                    </li>
                </a>
                `;
                })
                plist.html(str);

            })
        }(),
        lunbotu: ! function() {
            class Lunbo {
                constructor() {
                    this.lunbo = $('.piclist');
                    this.piclist = $('.piclist ul li');
                    this.btnlist = $('.piclist ol li');
                    this.left = $('#left');
                    this.right = $('#right');
                    this.index = 0;
                    this.timer = null;
                }
                init() {
                    let that = this
                    this.lunbo.hover(function() {
                        that.left.show();
                        that.right.show();
                        clearInterval(that.timer)

                    }, function() {
                        that.left.hide();
                        that.right.hide();
                        that.timer = setInterval(function() {
                            that.rightclick()
                        }, 3000)

                    })
                    this.btnlist.on('click', function() {
                        that.index = $(this).index();
                        that.tabswitch();
                    })
                    this.right.on('click', function() {
                        that.rightclick()
                    })
                    this.left.on('click', function() {
                        that.leftclick()
                    })
                }
                tabswitch() {
                    this.btnlist.eq(this.index).addClass('active').siblings().removeClass('active');
                    this.piclist.eq(this.index).stop(true).animate({
                        opacity: 1
                    }).siblings().stop(true).animate({
                        opacity: 0
                    })
                }
                rightclick() {
                    this.index++;
                    if (this.index > this.piclist.size() - 1) {
                        this.index = 0
                    }
                    this.tabswitch()
                }
                leftclick() {
                    this.index--;
                    if (this.index < 0) {
                        this.index = this.piclist.size() - 1
                    }
                    this.tabswitch()
                }
            }
            new Lunbo().init();
        }(),
        nav: ! function() {
            $('.nav li').hover(function() {
                $(this).addClass('active').siblings().removeClass('active');
                $('.navlist').show();
                $('.navlist .itemlist').eq($(this).index()).show().siblings().hide();

                $(window).on('scroll', function() {
                    let bannertop = $('.banner').offset().top;
                    let scrolltop = $(window).scrollTop();
                    if (scrolltop > bannertop) {
                        $('.navlist').css({
                            top: scrolltop - bannertop
                        });
                    } else {
                        $('.navlist').css({
                            top: 0
                        });
                    }
                });
            }, function() {
                $('.navlist').hide();
            });
            $('.navlist').hover(function() {
                $(this).show();
            }, function() {
                $(this).hide();
            });


        }()
    }
})