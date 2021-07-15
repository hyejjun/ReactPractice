const express = require('express')
const cors =require('cors')
const app = express();

app.use(cors())

// 이 데이터는 DB -> table select -> 객체로 만들어서 응답을 주면 된다.
// http://localhost:3000/api  - 이렇게 하면 객체 형태가 나오는 것을 확인 할 수있다.
app.get('/api',(req,res)=>{
    res.json(
        [
            { userid : 'web7722',content : '안녕하세요', date : '2021-07-07'},
            { userid : 'web7722',content : '안녕하세요', date : '2021-07-07'},
            { userid : 'web7722',content : '안녕하세요', date : '2021-07-07'},
            { userid : 'web7722',content : '안녕하세요', date : '2021-07-07'}
        ]
    )
})

app.listen(3000,()=>{
    console.log('server 3000');
})