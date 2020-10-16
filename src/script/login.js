define([], function() {
    return {
        login: ! function() {
            $('.login-tab-r').on('click', function() {
                $('.login-input').css('display', 'block');
                $('.login-box').css('display', 'none');

            })
            $('.login-tab-l').on('click', function() {
                $('.login-input').css('display', 'none');
                $('.login-box').css('display', 'block');

            })
            $('.btn').on('click', function() {
                $('.login-input').css('display', 'block');
                $.ajax({
                    type: 'post',
                    url: 'http://localhost:8080/jingdong/php/login.php',
                    data: {
                        user: $('.username').val(),
                        pass: hex_sha1($('.password').val() + '')
                    }
                }).done(function(result) {
                    if (result) {
                        location.href = "index1.html";
                        localStorage.setItem('username', $('.username').val());
                    } else {
                        $('.password').val('');
                        alert('用户名或者密码错误');
                    }
                });
            });
        }()
    }
})