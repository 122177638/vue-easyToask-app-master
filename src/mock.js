// 引入mockjs
const Mock = require('mockjs');
// 获取 mock.Random 对象
const Random = Mock.Random;

// mock一组数据
const produceNewsData = function () {
    let articles = [];
    for (let i = 0; i < 11; i++) {
        let newArticleObject = {
            // title: Random.csentence(5, 20), //  Random.csentence( min, max )
            cid: Random.string('number', 8),
            postTxt: Random.csentence(5),
            score: Random.float(1, 5, 1, 1),
            money: Random.natural(60, 100),
            answerNum: 1982,
            tabs: ['感情', '流年运势', '财运'],
            headImg: Random.dataImage('70x70'), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
            name: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
            date: Random.date() + ' ' + Random.time() // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
        }
        articles.push(newArticleObject)
    }
 
    return {
      articles: articles,
      ERROR_OK: 1
    }
}
const chatData = function () {
    let articles = [];
    for (let i = 0; i < 11; i++) {
        let newArticleObject = {
            content: '', //  Random.csentence( min, max )
            uid: 1,
            headImg: Random.dataImage('40x40'), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
            date: Random.date() + ' ' + Random.time(), // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
            file: {
                fid: Random.string('number', 8),
                img: Random.dataImage('150x150')
            }
        }
        let newArticleObject1 = {
            content: Random.csentence(20, 40), //  Random.csentence( min, max )
            uid: 1,
            headImg: Random.dataImage('40x40'), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
            date: Random.date() + ' ' + Random.time(), // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
            file: ''
        }
        let newArticleObject2 = {
            content: '[露牙笑]你是不是傻你是不是傻你是不是傻你是不是傻你是不是傻你是不是傻[露牙笑][露牙笑][-_-]', //  Random.csentence( min, max )
            uid: 2,
            headImg: Random.dataImage('40x40'), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
            date: Random.date() + ' ' + Random.time(), // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
            file: ''
        }
        let newArticleObject3 = {
            content: '', //  Random.csentence( min, max )
            uid: 2,
            headImg: Random.dataImage('40x40'), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
            date: Random.date() + ' ' + Random.time(), // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
            file: {
                fid: Random.string('number', 8),
                img: Random.dataImage('150x150')
            }
        }
        articles.push(newArticleObject, newArticleObject1, newArticleObject2, newArticleObject3)
    }
    return {
    articles: articles,
    ERROR_OK: 1
    }
}
// 响应时间
Mock.setup({
  timeout: 200
})
// Mock.mock( url, post/get , 返回的数据)；
Mock.mock('/putquest/index', 'post', produceNewsData);
Mock.mock('/chat', 'post', chatData);
