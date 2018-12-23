import Mock from 'mockjs';




var product = Mock.mock(/\/whatsnew\/product/,{
    'product':{
        'name': 'Enterprise Spreadsheet'
    }

})

export {product};