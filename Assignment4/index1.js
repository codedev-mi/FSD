import fs from 'fs';

const data = "Hello there this is Nilesh"

fs.writeFile('demo1.txt',data,(err) =>{
    if(err){
        console.log("error occured")
    }
    console.log("File created successully");

        fs.readFile("demo1.txt",'utf-8',(err,content)=>{
            if(err){
                console.log("Error Occured During Reading",err)
            }
            console.log(content)
        })

    
})

