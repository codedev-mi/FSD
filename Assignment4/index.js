import fs from 'fs';
try {
    const data = "Hello My name is Nilesh"

    fs.writeFileSync('demo.text', data)
    console.log("File Created Successfully");

    const content = fs.readFileSync('demo.text', 'utf8')
    console.log(content);

} catch (error) {
console.log('something went wrong',error)
}

