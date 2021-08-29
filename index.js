const superagent = require('superagent');
const cheerio = require('cheerio');

superagent.get(`https://image.baidu.com/search/index?tn=baiduimage&ie=gb18030&word=${encodeURIComponent('猫咪')}`).end((err, res) => {
    if(err) {
        return console.log(`发生了错误, ${err}`);
    } 
    const htmlText = res.text;
    console.log('爬取的内容', htmlText);
    // const $ = cheerio.load(htmlText);
    // $('meta').each((index, ele) => {
    //     console.log(index);
    //     console.log($(ele).attr('content'));
    // });
});