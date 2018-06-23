let express = require('express');
let path = require('path');
let app = express();

app.use(express.static(path.join(__dirname,'public','views')));

app.get('/',function (req,res,next) {
    res.render('index');
});





// Route and GET or POST ........
/*app.route('/')
    .get(function (req,res,next) {
    res.end('GET Hello Word');
}).post(function (req,res,next) {
    res.end('POST Hello Word');
})*/
//--------------------------------------------------------------
// Поледовательные опработчики url
/*app.get('/',
    function (req,res,next) {
    res.write("First Hello  ");
    next();
    });

app.get('/',function (req,res,next) {
    res.end("Second World ");

})*/
//----------------------------------------------------------
//locals хранить настройки которые будут доступны везде
/*app.locals.mysettings = 'Set1';

app.get('/',function (req,res,next) {
    console.log(app.locals.mysettings);
    res.write("Second World ")
    res.end("Second World dfaasd")

})*/
//---------------------------------------------------------------
//---------app.set -настройка может быть включена или выключена
/*app.set('mysetting','myset_1');

app.get('/',function (req,res,next) {

    console.log(app.get('mysetting'));
    app.enable('mysetting');
    console.log(app.enabled('mysetting'));
    app.disable('mysetting');
    console.log(app.enabled('mysetting'));


    res.write("Second World ")
    res.end("Second World dfaasd")

})*/
//----------------------------------------------------------------------
//---------Проходной обработчик---------------------
/*
// /user/!***
app.use('/user',function (req,res,next) {
    //same cod
    console.log("First middleware");
    next();
});

app.use(function (req,res,next) {
    //same cod
    console.log("Second middleware");
    next();
});
*/
//---------доступ к филдам Request------------
/*app.get('/',function (req,res,next) {
    console.log("Проверка на Свежесть запроса "+req.fresh);
    console.log("Проверка на старость запроса "+req.stale);
    console.log("Достать нейм хоста "+req.hostname);
    console.log("Вывод IP "+req.ip);
    console.log("Вывод метода "+req.method);
    console.log("Вывод URL "+req.originalUrl);
    console.log("Вывод Protocol "+req.protocol);
    console.log("Вывод Protect "+req.secure);
    console.log("Вывод AJax "+req.xhr);
    console.log("Вывод acceptsLanguage "+req.acceptsLanguage('uk'));
    console.log("Вывод about browser "+req.get('user-agent'));


    res.send("End World")
});*/

//---------------доступ к филдам Responce------------
/*app.get('/',function (req,res,next) {

    console.log("Проверка before "+res.headersSent);
    res.write('fdffd');
    console.log("Проверка after "+res.headersSent);
    res.end();

});*/
//---------------доступ к филдам Responce----locals--------
/*app.get('/',function (req,res,next) {
    res.locals.myVariable = 'I have Power';
    next();
});

app.get('/',function (req,res,next) {
    console.log(res.locals.myVariable);
    res.end();
});
app.get('/',function (req,res,next) {
    console.log(res.locals.myVariable);
    res.end();
});*/
//---------------доступ к филдам Responce----Headers--------
/*app.get('/',function (req,res,next) {
   // console.log(res.locals.myVariable);
    res.append('Content-type','text/plain'); //---or -->
  /!*  res.set({
        'asd': 'hdfjjfdffj',
        'asd': 'hdfjjfdffj'
    });*!/

  res.format({ //chek by postman
      'text/plain': function () {
          res.send('first plain')
      },
      'text/html': function () {
          res.send('second html')
      }
  })

});*/
//---------------доступ к филдам Responce---------send status to browser
/*
app.get('/',function (req,res,next) {
   res.sendStatus(404); //send status to browser

});
*/

app.listen(3000,(err)=>{
    if (err)
        console.log(err)
    else
        console.log("Server runing");
})