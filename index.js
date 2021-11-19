const express  = require('express');
const morgan  = require('morgan');
const { Prohairesis } = require('prohairesis');
const bodyParser  = require('body-parser');
const flash = require('express-flash');
const session = require('express-session');
const conexion=require('./database');


const app = express();
const port = process.env.PORT || 8080;


app
   .use(morgan('dev'))
   .use(express.static('public'))
   .use(bodyParser.urlencoded({ extended: false }))
   .use(bodyParser.json())
   .use (flash())
   
   .use(session({ 
        secret: '123456catr',
        resave: false,
        saveUninitialized: true,
        cookie: { maxAge: 60000 }
    }))

   .post('/api/user', function (req, res) {
    const body = req.body;
    var name = body.name;
    var age = body.age;
    var email = body.email;

    var sql = `INSERT INTO users ( name, age, email ) VALUES ( "${name}", "${age}", "${email}" )`;
        conexion.query(sql, function (err, result) {
            if(err) throw err;
            console.log('Record inserted');
            req.flash('Success','Data added successfully!'); 
            res.redirect ('/');
        });
    });



app.listen(port, () => console.log(`Server listening on port ${port}` ));










/* conexion.connect(function(error){
    if(error){
        throw error;
    }else{
        console.log('CONEXION EXITOSA');
    }
});

conexion.query('SELECT * FROM users', function(error,results,fields){
    if(error)
    throw error;
    results.forEach(result => {
        console.log(result);   
    });
})

conexion.end();  */




      /* conexion.query(`
            INSERT INTO users (
                name,
                age,
                email
            ) VALUES (
                @name,
                @age,
                @email    
            )
        `,{
            name: body.name,
            age: body.age,
            email: body.email
        });

        res.end('Added User'); */
