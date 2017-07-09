$(function () {
    // 为按钮添加click事件。
    $('#btn').click(function () {
        // 点击click事件之后 我要获取表单中输入的内容。
        // 通过val() 方法获取或者设置表单元素的value值。
        // 通过attr() 获取或者设置元素的属性。
        // console.log($('#userName').attr('data-msg')) //..获取属性data-msg的值。
        // $('#userName').attr('data-msg','哈哈') //设置data-msg的值为哈哈
        console.log($('#userName').val());

        // 输出xx属性的值。
        console.log($('#email').attr('xx'))
    })

    // 实现全屏效果。
    $('#btnFullScreen').click(function () {
        $(document).fullScreen(true)
    })

    // 使用validate插件对表单元素进行验证
    $('#form').validate({
        debug: true, //加此代码的目的是禁止表单验证通过后进行提交。
        rules: {
            userName: {
                required: true,  //此项必填
                minlength: 2,  //最小长度
                maxlength: 10  //最大长度
            },
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            userName: {
                minlength: '用户名最小长度为2',
                maxlength: '用户名最大长度为10'
            },
            email: {
                email: '邮箱格式错误'
            }
        }
    })
})