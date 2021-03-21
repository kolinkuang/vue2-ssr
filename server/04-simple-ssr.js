// node server: koa, express, egg.js
const Vue = require('vue')
const express = require('express')
const app = express()

// vue-server-renderer
const {createRenderer} = require('vue-server-renderer')

// fetch renderer
const renderer = createRenderer()

// router
app.get('/', async (req, res) => {
    // create a vue app
    // const vm = new Vue({
    //     template: '<div>hello {{name}}</div>',
    //     data() {
    //         return {
    //             name: 'guys'
    //         }
    //     }
    // })

    try {
        const html = await renderer.renderToString(vm)
        res.send(html)
    } catch (err) {
        res.status(500).send('Internal server error')
    }
})

// listen
app.listen(3000)
