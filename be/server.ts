import express from "express";

const app = express();

const port = 3000;

app.use(express.json());

app.get("/",async(req,res)=>{
    try{
    const data = await fetch("https://api.openweathermap.org/data/2.5/weather?q=amritsar&appid=4425ff7391b0e6d15b651d74508d16e3")
    return res.json({data});
    }catch(e){
        console.log(e);
        return res.status(401).json("Something went wrong in fetching data");
    }

})

app.listen(port,()=>{
    console.log(`server is running on ${port}`);
})