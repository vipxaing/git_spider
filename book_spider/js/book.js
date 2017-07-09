// 分类数据。
var _bookTypes = [{
    name: '儿童',
    id: 'ertong'
}, {
    name: '动漫',
    id: 'dongman'
}, {
    name: '历史',
    id: 'lishi'
}, {
    name: '青春文学',
    id: 'qingchunwenxue'
}]
//  页面初始化之后。
$(function () {
    var strTypeHtml = "" //拼接分类信息的html代码
    _bookTypes.forEach(function(item) {
        strTypeHtml += `<div class="list-group">
                            <a href="#" data-tid="${item.id}" class="list-group-item">${item.name}</a>
                        </div>`
    })
    $('#navList').html(strTypeHtml)

    var _bookListData = []  //ajax请求获取到的原数据。

    // 分类信息选择改变事件。
    $('.list-group-item').click(function() {
        $('.list-group-item').removeClass('active')
        $(this).addClass('active')
        var tid = $(this).data('tid')//获取到当前选择到的a标签的data-tid属性
        // 根据分类信息，获取数据。
        // $.getJSON() 表示通过HTTP GET请求载入JSON数据。
        // jQuery.getJSON(url,data,success(data,status,xhr))
        // url	必需。规定将请求发送的哪个 URL。
        // data	可选。规定连同请求发送到服务器的数据
        // success(data,status,xhr)	
        // 可选。规定当请求成功时运行的函数。
        // 额外的参数：
        // response - 包含来自请求的结果数据
        // status - 包含请求的状态
        // xhr - 包含 XMLHttpRequest 对象
        $.getJSON(`/data/book_${tid}.json`,function(res) {
            _bookListData = res
            initHtml(res)
        })
    })

   // 为搜索按钮添加事件。
    $('#btnSearch').click(function(){
        doSearch()
    })

    // 文本输入框事件，输入回车键后执行查询。
    $('#txtSearch').bind('keyup',function(e) {
        console.dir(e)
        // 当按下回车键的时候执行查询
        if(e.keyCode == 13) {
            doSearch()
        }
    })


    /**
     * 查询方法／／／
     */
    function doSearch() {
        var keyWord = $('#txtSearch').val() //获取我要执行的搜索的关键字。
        console.log(`当前搜索的关键字为：${keyWord}`)
        // 执行搜索方法，筛选数据。
        var filterResult = _bookListData.filter(function(book) {
            if(book.title.indexOf(keyWord) > -1){
                return book
            }
        })
        console.dir(filterResult)
        initHtml(filterResult)
    }


    /**
     * 绑定数据到html页面当中
     * books [数据信息的数组]
     */
    function initHtml(books) {
        var strHtmlBooks = "" 
        books.forEach(function(book) {
            strHtmlBooks += `<div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                    <a href="${book.link}" target="_blank">
                                        <div class="thumbnail">
                                            <img src="${book.img}">
                                            <div class="caption">
                                                <p>${book.title}</p>
                                            </div>
                                        </div> 
                                    </a>
                             </div>
                            `
        })
        $('#booksContainer').html(strHtmlBooks)
    }
})


/**
 * nodejs服务器anywhere简介:////
一句话：随时随地将你的当前目录变成一个静态文件服务器的根目录。
安装:::::::////
npm install anywhere -g

访问
http://localhost:8000
执行命令后，默认浏览器将为您自动打开主页。

PS：先安装nodejs是先决条件
npm地址：https://www.npmjs.com/package/anywhere
cssfirefly http://cssfirefly.cnblogs.com
 */