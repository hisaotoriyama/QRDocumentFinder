let express = require('express')
let Res = require('express-resource')
// let cp = require('cookie-parser')
let path = require('path')

// let login   = require('./routes/login')
// let logout  = require('./routes/logout')
// let  addstoreditem= require('./routes/addstoreditem.js')
let app = express()

let bodyParser = require('body-parser');
// let db = require('./models/index')

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// app.use(cp())
app.use(express.json())
// app.use('/login', login)// app.resource('logins', require('./controllers/login'), {id: 'id'})とはしない。POSTだけでいいのでresourceは使わない！
// // 他のシート(今回の場合public/main.js)で/loginとなった場合、ここを読み込みに来る。
// app.use('/logout', logout)
// app.use('/adduser', adduser)

// register REST controllers
app.resource('addstoreditems', require('./controllers/addstoreditem'), {id: 'id'})
// app.resource('users', require('./controllers/user'), {id: 'id'})

app.use(express.static('public'));

app.listen(3050)
