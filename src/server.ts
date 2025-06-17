const port = 5000;
import {Server} from 'http'
import app from './app';
import mongoose from 'mongoose';
let server:Server;

async function main() { 
     await mongoose.connect("mongodb+srv://todoDB:rd2UhKvuOl2m6yBX@cluster0.hg2ad.mongodb.net/todoDB?retryWrites=true&w=majority&appName=Cluster0"); 
       console.log("Data connection sucessful")
    server = app.listen(port,()=>{
        console.log(`Port on ${port}`)
    })
}
main()