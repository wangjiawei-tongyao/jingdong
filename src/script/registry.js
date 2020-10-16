define([], function() {
    return {
        register: ! function() {
            let $user = $('#username');
            let $usernameflag = true;
            $user.on('blur', function() {
                $.ajax({
                    type: 'post',
                    url: 'http://localhost:8080/jingdong/php/registry.php',
                    data: {
                        username: $user.val()
                    }

                }).done(function(result) {
                    if (!result) { //不存在
                        $('.tishikuang').html('√').css('color', 'green');
                        $usernameflag = true;
                        // location.href = "index1.html";
                    } else {
                        $('.tishikuang').html('该用户名已经存在').css('color', 'red');
                        $usernameflag = false;
                    }
                })
            });

            $('.form').on('submit', function() {
                if ($user.val() == '') {
                    $('.tishikuang').html('用户名不能为空').css('color', 'red');
                    $usernameflag = false;
                }
                if (!$usernameflag) {
                    return false; //阻止提交
                }
            });
        }()
    }
})