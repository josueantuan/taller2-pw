const { Client } = require('pg')
const connectionData = {
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'josue1996',
    port: 5432,
  }
const client = new Client(connectionData)
client.connect()
client.query("INSERT INTO public.registros(nombre, cedula, telefono) VALUES ('Stalin', '0989454', '02154')")
    .then(response => {
        console.log(response.rows)
        client.end()
    })
    .catch(err => {
        client.end()
    })
    /*client.query('SELECT id, nombre, cedula, telefono FROM public.registros')
    .then(response => {
        console.log(response.rows)
        client.end()
    })
    .catch(err => {
        client.end()
    })*/
    