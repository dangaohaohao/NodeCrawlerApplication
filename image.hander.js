const superagent = require('superagent');
const cheerio = require('cheerio');

const word = '猫咪';

const headers = {
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
    "Accept-Encoding": "gzip, deflate, br",
    "Accept-Language": "zh-CN,zh;q=0.9",
    "Cache-Control": "max-age=0",
    "sec-ch-ua": '"Chromium";v="92", " Not A;Brand";v="99", "Google Chrome";v="92"',
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36"
}

superagent
    .get(`https://image.baidu.com/search/index?tn=baiduimage&ie=gb18030&word=${encodeURIComponent(word)}`)
    .set('Accept', headers['Accept'])
    .set('Accept-Encoding', headers['Accept-Encoding'])
    .set('Accept-Language', headers['Accept-Language'])
    .set('Cache-Control', headers['Cache-Control'])
    .set('sec-ch-ua', headers['sec-ch-ua'])
    .set('User-Agent', headers['User-Agent'])
    .end((err, res) => {
        if(err) {
            return console.log(`访问失败, ${err}`);
        } 
        const htmlText = res.text;
        // const imageMatches = htmlText.match(/"objURL":"(.*?)",/g);
        // const imageUrlList = imageMatches.map((item) => {
        //     const imageUrl = item.match(/:"(.*?)",/g);
        //     return RegExp.$1;
        // });
        const titleMatches = htmlText.match(/"fromPageTitle":"(.*?)"/g)
        console.log('titleMatches', titleMatches);
    });