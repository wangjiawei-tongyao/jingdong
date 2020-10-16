define([], function() {
    return {
        list: ! function() {
            const plist = $('.plist ul');
            $.ajax({
                url: 'http://localhost:8080/jingdong/php/jingdong.php',
                dataType: 'json'
            }).done(function(data) {
                let str = '';
                $.each(data, function(index, value) {
                    str += ` 
                    <a href="detail.html?sid=${value.sid}">
                     <li>
                        <img class="lazy" data-original="${value.url}">
                        <p>${value.title}</p>
                        <span><i>￥</i>${value.price}</span>
                     </li>
                    </a>
                `;
                })
                plist.html(str);
                $("img.lazy").lazyload({
                    effect: "fadeIn"
                });

            })
        }(),
        lunbotu: ! function() {
            class Lunbo {
                constructor() {
                    this.picliatall = $('.piclist');
                    this.piclist = $('.piclist ul li');
                    this.btnlist = $('.piclist ol li');
                    this.left = $('#left');
                    this.right = $('#right');
                    this.index = 0;
                    this.timer = null;
                }
                init() {
                    let that = this
                    this.picliatall.hover(function() {
                        // that.left.show();
                        // that.right.show();
                        clearInterval(that.timer)

                    }, function() {
                        // that.left.hide();
                        // that.right.hide();
                        that.timer = setInterval(function() {
                            that.rightclick()
                        }, 3000)

                    })

                    this.btnlist.on('mouseover', function() {
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
                // $(this).addClass('active').siblings().removeClass('active');
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


        }(),
        part1plist: ! function() {
            const plist1 = $('.part1_plist');
            $.ajax({
                url: 'http://localhost:8080/jingdong/php/jingdong1.php',
                dataType: 'json'
            }).done(function(data) {
                let str = '';
                $.each(data, function(index, value) {
                    str += `
                    <div class="part1_plist_inner" id="part1_plist_inner${value.sid}">
                    <a href="detail.html?sid=${value.sid}">
                        <p>
                        <span>${value.title}</span>
                        <strong>${value.title1}</strong>
                        </p>
                        <div class="part1_plist_img">
                        <img class="lazy" data-original="${value.url}">
                        <img class="lazy" data-original="${value.url2}"">
                        </div>
                     </a>
                     </div>
                    `;
                })
                plist1.html(str)
                $("img.lazy").lazyload({
                    effect: "fadeIn"
                });
            })

        }(),
        piclistside: ! function() {
            class Lun {
                constructor() {
                    this.piclistall = $('.piclist-side');
                    this.piclist = $('.piclist-side .picside ul');
                    this.leftside = $('#leftside');
                    this.rightside = $('#rightside');
                    this.index = 0;
                    this.timer = null;
                }
                init() {
                    let that = this
                    this.piclistall.hover(function() {
                        clearInterval(that.timer)

                    }, function() {
                        that.timer = setInterval(function() {
                            that.rightclick()
                        }, 3000)

                    })
                    this.rightside.on('click', function() {
                        that.rightclick()
                    })
                    this.leftside.on('click', function() {
                        that.leftclick()
                    })
                }
                tabswitch() {
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
            new Lun().init();
        }(),
        move: ! function() {
            $(window).on('scroll', function() {
                let $top = $(window).scrollTop();
                let $loutinavtop = $('.part1_plist').offset().top - $top
                if ($top >= 600) {
                    $('.logo-scroll').stop(true).animate({
                        top: 0
                    })
                    $('.loutinav').stop(true).animate({
                        top: 75
                    })
                } else {
                    $('.logo-scroll').stop(true).animate({
                        top: -60
                    })
                    $('.loutinav').css({
                        top: $loutinavtop
                    })
                }
            })
            $('.last').on('click', function() {
                $('html').animate({
                    scrollTop: 0
                })
            })
            $('.pingdao').on('click', function() {
                let $pingdaotop = $('.part1_plist').offset().top - 120;
                $('html').animate({
                    scrollTop: $pingdaotop
                })
            })
            $('.recommend').on('click', function() {
                let $recommendtop = $('.main_part2').offset().top - 120;
                $('html').animate({
                    scrollTop: $recommendtop
                })
            })
        }()

    }
})