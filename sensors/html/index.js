const express = require('express')
const app = express()

const httpPort = 8080

var count = -1;

app.get('/multiplicar', function(req, res) {
   res.sendFile('multiplicar.html', { root: __dirname }); console.log('multiplicar');
} )

app.get('/reset', function(req, res) {
   count = 0;
   res.sendFile('reset.html', { root: __dirname }); console.log('reset');
} )

app.get('/hitcount', function(req, res) {
   res.send(
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Page HitCount</title>
</head>
<body>
<div id="count">${count}</div>  
</body>
</html>`);

 console.log('hitcount');
} )



app.get('/hit', function(req, res) {
   ++count;
   res.send('hit ok'); console.log('get hit');

} )


app.post('/cargar_datos.php', function(req, res) {
   ++count;
   res.sendFile('postOk.html', { root: __dirname } ); console.log('post hit');

} )

app.get('/imagen.png', function(req, res) {
   ++count;
   res.sendFile('gok.png', { root: __dirname } ); console.log('img hit');

} )

app.listen(httpPort, () => console.log(`App listening on port ${httpPort}!`))

app.get('/multiplicar.html', function(req, res) {
	res.send(
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Page Multiplies</title>
</head>
<body>
<form id="mult" method="POST" action="mult">
<label for="a">a:</label><br>
<input type="text" id="a" name="a"><br>
<label for="b">b:</label><br>
<input type="text" id="b" name="b"><br><br>
<input type="submit" id="send">
</form>
</body>
</html>`)
;})

app.post('/mult', function(req, res) {
	var a = parseInt(req.body.a);
	var b = parseInt(req.body.b);
	var result = a*b;
	res.send(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Page Multiplies Post</title>
</head>
<body>
<h1 id="res" name="res"></h1>
<h1 id="result">${result}</h1>
</body>
</html>`);
})
