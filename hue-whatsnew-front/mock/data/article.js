import Mock from 'mockjs';

var Random = Mock,Random;
Random.date();
Random.datetime();
Random.title();
Random.ctitle();
Random.first();
Random.paragraph();


Mock.mock(/\/whatsnew\/posts/,{
    'data':{
        'list|1-10': [{
            'id|+1': 1,
            'title':@title,
            'author':@first,
            'date': @date,
            'postTime':@datetime,
            'section|3-5':[@ctitle],
            'content':@paragraph
        }]
    }

})