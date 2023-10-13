const blogrouter=require("express").Router()

blogrouter.get("/bollywood",(req,res)=>{
    res.send({
            "userId": 1,
            "id": 1,
            "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    })
})

blogrouter.get("/hollywood",(req,res)=>{
    res.send("EXPRESS JS :--- is a back end web application framework for building RESTful APIs with Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs. It has been called the de facto standard server framework for Node.js. The original author, TJ Holowaychuk, described it as a Sinatra-inspired server, meaning that it is relatively minimal with many features available as plugins. Express is the back-end component of popular development stacks like the MEAN, MERN or MERN stack, together with the MongoDB database software and a JavaScript front-end framework or library.")
})



module.exports=blogrouter

