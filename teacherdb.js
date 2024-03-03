const db=require('./db/connect')

const teacher=require('./models/teachermodel')

const teacherjson=require('./teachersdata.json')

const start= async ()=>{
try {
    await teacher.create(teacherjson)
    console.log("teachers data has been stored in mongo")
} catch (error) {
    console.log(error);
}
}

start();