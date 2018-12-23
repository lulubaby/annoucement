const router = require('koa-router')();
const Mock = require('mockjs')


router.get('/hue/hue/whatsnew', async(ctx, next) => {
  await ctx.render('whatsnew');
});

router.get('/hue/hue/whatsnew/admin', async(ctx, next) => {
  await ctx.render('admin');
});

router.get('/mock/product', async(ctx, next) => {
  ctx.body = {
    name: 'Enterprise SpreadSheet'
  }
});

router.get('/mock/menu', async(ctx, next) => {
  ctx.body = {
    releaseNote: [
      '<h2 id="00">Shape</h2><p>gongneng1</p><p>gongnengn2</p><h2 id="01">Customized Data Source</h2><p>gongneng2</p><p>gongnengn2</p> <h2 id="02">BIAOTI</h2><p>gongneng2</p><p>gongnengn2</p> <h2 id="03">BIAOTI</h2><p>gongneng2</p><p>gongnengn2</p> <h2 id="04">BIAOTI</h2><p>gongneng2</p><p>gongnengn2</p>',
      '<h2 id="10">Shape</h2><p>gongneng1</p><p>gongnengn2</p><h2 id="11">Customized Data Source</h2><p>gongneng2</p><p>gongnengn2</p> <h2 id="12">BIAOTI</h2><p>gongneng2</p><p>gongnengn2</p> <h2 id="13">BIAOTI</h2><p>gongneng2</p><p>gongnengn2</p> <h2 id="14">BIAOTI</h2><p>gongneng2</p><p>gongnengn2</p>',
      '<h2 id="20">Shape</h2><p>gongneng1</p><p>gongnengn2</p><h2 id="21">Customized Data Source</h2><p>gongneng2</p><p>gongnengn2</p> <h2 id="22">BIAOTI</h2><p>gongneng2</p><p>gongnengn2</p> <h2 id="23">BIAOTI</h2><p>gongneng2</p><p>gongnengn2</p> <h2 id="24">BIAOTI</h2><p>gongneng2</p><p>gongnengn2</p>',
      '<h2 id="30">Shape</h2><p>gongneng1</p><p>gongnengn2</p><h2 id="31">Customized Data Source</h2><p>gongneng2</p><p>gongnengn2</p> <h2 id="32">BIAOTI</h2><p>gongneng2</p><p>gongnengn2</p> <h2 id="33">BIAOTI</h2><p>gongneng2</p><p>gongnengn2</p> <h2 id="34">BIAOTI</h2><p>gongneng2</p><p>gongnengn2</p>',
    ],
    menulist: [
      {
        title: '1.0 2018 Nov 12',
        postid: '1',
        open: true,
        subtitle: ['Shape', 'Customized Data Source', 'New UI', 'Bug Fix', 'Data Migration']
      },
      {
        title: '2018 Nov 1',
        postid: '2',
        open: false,
        subtitle: ['Shape', 'Customized Data Source', 'New UI', 'Bug Fix', 'Data Migration']
      },
      {
        title: '2018 Oct 12',
        postid: '3',
        open: false,
        subtitle: ['Shape', 'Customized Data Source', 'New UI', 'Bug Fix', 'Data Migration']
      },
      {
        title: '2018 Oct 1',
        postid: '4',
        open: false,
        subtitle: ['Shape', 'Customized Data Source', 'New UI', 'Bug Fix', 'Data Migration']
      }
    ]
  }
});
router.get('/mock/releaseList/set', async(ctx, next) => {
  ctx.body = {
    state: ctx.query.state,
  }
});

router.get('/mock/releaseList', async(ctx, next) => {
  ctx.body = {
    releaseList: [
      {id:'000000',title:'Title1',product:'ESS',version:'v18.02.000',lastModified:'DEC 12,2018 15:30PM',state:'1'},
      {id:'000001',title:'Title1',product:'ESS',version:'v18.02.000',lastModified:'DEC 12,2018 15:30PM',state:'1'},
      {id:'000002',title:'Title1',product:'ESS',version:'v18.02.000',lastModified:'DEC 12,2018 15:30PM',state:'1'},
      {id:'000003',title:'Title1',product:'ESS',version:'v18.02.000',lastModified:'DEC 12,2018 15:30PM',state:'1'},
      {id:'000004',title:'Title1',product:'ESS',version:'v18.02.000',lastModified:'DEC 12,2018 15:30PM',state:'1'},
      {id:'000005',title:'Title1',product:'ESS',version:'v18.02.000',lastModified:'DEC 12,2018 15:30PM',state:'1'},
      {id:'000006',title:'Title1',product:'ESS',version:'v18.02.000',lastModified:'DEC 12,2018 15:30PM',state:'0'},
      {id:'000007',title:'Title1',product:'ESS',version:'v18.02.000',lastModified:'DEC 12,2018 15:30PM',state:'0'},
      {id:'000008',title:'Title1',product:'ESS',version:'v18.02.000',lastModified:'DEC 12,2018 15:30PM',state:'0'},
      {id:'000009',title:'Title1',product:'ESS',version:'v18.02.000',lastModified:'DEC 12,2018 15:30PM',state:'0'},
      {id:'000010',title:'Title1',product:'ESS',version:'v18.02.000',lastModified:'DEC 12,2018 15:30PM',state:'0'},
      {id:'000011',title:'Title1',product:'ESS',version:'v18.02.000',lastModified:'DEC 12,2018 15:30PM',state:'0'},
      {id:'000012',title:'Title1',product:'ESS',version:'v18.02.000',lastModified:'DEC 12,2018 15:30PM',state:'0'},
      {id:'000013',title:'Title1',product:'ESS',version:'v18.02.000',lastModified:'DEC 12,2018 15:30PM',state:'0'},
      {id:'000014',title:'Title1',product:'ESS',version:'v18.02.000',lastModified:'DEC 12,2018 15:30PM',state:'0'},
      {id:'000015',title:'Title1',product:'ESS',version:'v18.02.000',lastModified:'DEC 12,2018 15:30PM',state:'0'},
  ]}});

module.exports = router;




