const express = require('express');
const mysql = require('mysql')
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = process.env.PORT||4000

const app=express()
app.use(cors())
app.use(bodyParser.json())

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Joshi@123',
    database: 'youtube'
})

con.connect((err)=>{
    if(err){
    console.log('Not connected');
    }else{
        console.log("Connected");

        //SigningUp of users

        app.post('/register',(req,res)=>{
            const u_name = req.body.u_name
            const u_mail = req.body.u_mail
            const u_password = req.body.u_password
            var sql=`INSERT INTO USER (u_name,u_mail,u_password) VALUES ('${u_name}','${u_mail}','${u_password}' )`
            con.query(sql,function(err,result){
                if(err) res.send('error')
                console.log('1 record inserted');
                res.send(result)
            })
        })

        //SigningIn of Users
        // app.post('/login',(req,res)=>{
        //     const u_name = req.body.u_name
        //     //const u_mail = req.body.u_mail
        //     const u_password = req.body.u_password
        //     var sql=`SELECT * FROM USER WHERE u_name='${u_name}' AND u_password='${u_password}';`
        //     con.query(sql,function(err,result){
        //         if(err) res.send({err:err});
                
        //             if(result.length>0){
        //                 res.send(result)
        //             }else{
        //                 res.send({message:"wrong combination"})
        //             }
                
                
        //     })
        // })
        app.post('/login',(req,res)=>{
            // const u_name = req.body.u_name
            const u_mail = req.body.u_mail
            const u_password = req.body.u_password
            var sql=`SELECT * FROM USER WHERE u_mail='${u_mail}' AND u_password='${u_password}';`
            con.query(sql,function(err,result){
                if(err) res.send({err:err});
                
                    if(result.length>0){
                        res.send(result)
                    }else{
                        res.send({message:"wrong combination"})
                    }
                
                
            })
        })

        //Fetch channels for home page
        app.get('/home',(req,res)=>{
            var sql=`SELECT * FROM channels`;
            con.query(sql,function(err,result){
                if(err) res.send('ERROR')
                console.log(result);
                // console.log('hey');
                res.send(result)
            })
        })

        //Subscribing to ch
        app.post('/subs',(req,res)=>{
            var u_id=req.body.u_id
            var ch_name=req.body.ch_name
            var sql=`INSERT INTO subs VALUES ${u_id}, ${ch_name}`
            con.query(sql,function(err,result){
                if(err) res.send('ERROR')
                console.log(result);
                res.send(result)
            })
        })

        //Unsubscribe from ch

        app.post('/unsubs',(req,res)=>{
            var u_id=req.body.u_id
            var ch_name=req.body.ch_name
            var sql=`DELETE FROM subs WHERE u_id=${u_id} AND ch_name=${ch_name}`
            con.query(sql,function(err,result){
                if(err) res.send('ERROR')
                console.log(result);
                res.send(result)
            })
        })

        //Fetch mySubs
        app.get('/mysubs',(req,res)=>{
            var u_id=req.body.u_id;
            var sql=`SELECT * FROM subs WHERE u_id=${u_id}`
            con.query(sql,function(err,result){
                if(err) res.send('ERROR')
                console.log(result);
                res.send(result)
            })
        })

        //Fetch vines
        app.get('/vines',(req,res)=>{
            var sql=`SELECT * FROM vines`
            con.query(sql,function(err,result){
                if(err) res.send('ERROR')
                console.log(result);
                res.send(result)
            })
        })
        //Fetch songs
        app.get('/songs',(req,res)=>{
            var sql=`SELECT * FROM songs`
            con.query(sql,function(err,result){
                if(err) res.send('ERROR')
                console.log(result);
                res.send(result)
            })
        })
        //Fetch gaming
        app.get('/gaming',(req,res)=>{
            var sql=`SELECT * FROM gaming`
            con.query(sql,function(err,result){
                if(err) res.send('ERROR')
                console.log(result);
                res.send(result)
            })
        })
        //Fetch movies
        app.get('/movies',(req,res)=>{
            var sql=`SELECT * FROM movies`
            con.query(sql,function(err,result){
                if(err) res.send('ERROR')
                console.log(result);
                res.send(result)
            });
        });
    }
    
})
 


app.listen(PORT,()=> console.log(`Server started on port ${PORT}`))
