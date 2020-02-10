const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mysql = require('mysql');

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'ecca',
  password : 'abc123!!',
  database : 'tokokasih',
  port     : 3306
});


const PORT = 4000
const app = express()

app.use(cors())
app.use(bodyParser.json())

app.get('/', (req,res) => {
    res.status(202).send('<h1>BackEnd Exam JC 11 </h1>')
})

app.get('/categories', (req,res) => {
    console.log(req.query)
    const query = `SELECT * 
        FROM category_completess;`
    
    connection.query(query, (err, results) => {
        if (err) {
            console.log(err)
            return res.status(500).send(err)
        }
        console.log(results)
        res.status(200).send(results)
      });
})

app.get('/categories/:id', (req,res) => {
    console.log(req.query)
    const query = `select * 
    from categories
    where id = ${connection.escape(req.params.id)};`
    
    connection.query(query, (err, arrProducts) => {
        if (err) {
            console.log(err)
            return res.status(500).send(err)
        }
        console.log(arrProducts)
        res.status(200).send(arrProducts)
      });
})

app.get('/categories/:nama', (req,res) => {
    console.log(req.params.nama)

    const query = `SELECT * 
        FROM categories 
        WHERE category = ${connection.escape(req.params.nama)};`
    
    console.log(query)
    connection.query(query, (err, results) => {
        console.log('Error : ',err)
        if (err) {
            return res.status(500).send(err)
        }
        
        console.log('Results : ', results)

        res.status(200).send(results)
      });
})

app.post('/categories', (req,res) => {
    console.log('Query : ',req.query)
    console.log('Body : ', req.body)

    const query = `INSERT INTO categories SET ? ;`

    connection.query(query, req.body, (err,results) => {
        if(err) {
            return res.status(500).send(err)
        }

        // console.log(results)
        res.status(200).send(results)
    })
})

app.put('/categories/:id', (req,res) => {
    console.log(req.params)
    console.log(req.body)

    const query = `UPDATE categories SET ? WHERE id = ${connection.escape(req.params.id)}`
    console.log(query)
    connection.query(query, req.body, (err,results) => {
        if(err) {
            return res.status(500).send(err)
        }

        console.log(results)
        res.status(200).send(results)
    })
})

app.delete('/categories/:id', (req,res) => {
    console.log(req.params)
    const query = `DELETE FROM productcat WHERE productId = ${connection.escape(req.params.productid)}`;
    
    connection.query(query,(err,results) => {
        if(err) {
            return res.status(500).send(err)
        }

        console.log(results)
        res.status(200).send(results)
    })
})

app.get('/products', (req,res) => {
    console.log(req.query)
    const query = `SELECT * 
        FROM PRODUCTS;`
    
    connection.query(query, (err, arrProducts) => {
        if (err) {
            console.log(err)
            return res.status(500).send(err)
        }
        console.log(arrProducts)
        res.status(200).send(arrProducts)
      });
})

app.get('/products/:id', (req,res) => {
    console.log(req.query)
    const query = `select * 
    from products 
    where id = ${connection.escape(req.params.id)};`
    
    connection.query(query, (err, arrProducts) => {
        if (err) {
            console.log(err)
            return res.status(500).send(err)
        }
        console.log(arrProducts)
        res.status(200).send(arrProducts)
      });
})

app.post('/products', (req,res) => {
    console.log('Query : ',req.query)
    console.log('Body : ', req.body)

    const query = `INSERT INTO products SET ? ;`

    connection.query(query, req.body, (err,results) => {
        if(err) {
            return res.status(500).send(err)
        }

        console.log(results)
        res.status(200).send(results)
    })
})

app.put('/products/:id', (req,res) => {
    console.log(req.params)
    console.log(req.body)

    const query = `UPDATE products SET ? WHERE id = ${connection.escape(req.params.id)}`
    console.log(query)
    connection.query(query, req.body, (err,results) => {
        if(err) {
            return res.status(500).send(err)
        }

        console.log(results)
        res.status(200).send(results)
    })
})

app.delete('/products/:id', (req,res) => {
    console.log(req.params)
    const query = `DELETE FROM products WHERE id = ${connection.escape(req.params.id)}`;
    
    connection.query(query,(err,results) => {
        if(err) {
            return res.status(500).send(err)
        }

        console.log(results)
        res.status(200).send(results)
    })
})

app.get('/leafnode', (req,res) => {
    console.log(req.query)
    const query = `select * from leaf_node;`
    
    connection.query(query, (err, arrProducts) => {
        if (err) {
            console.log(err)
            return res.status(500).send(err)
        }
        console.log(arrProducts)
        res.status(200).send(arrProducts)
      });
})

app.listen(PORT, () => console.log(`API berhasil aktif di PORT ${PORT}`))
