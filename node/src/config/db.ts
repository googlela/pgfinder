import mongoose from "mongoose";
// MongoDb Configurations
const options = {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true
};


// mongodb://root:tushar2197@3.16.158.110:27017/?authSource=admin&compressors=zlib&readPreference=primary&gssapiServiceName=mongodb&appname=MongoDB%20Compass&ssl=false
// const DB_URI = `mongodb://root:tangram@backend-mongo@ec2-3-129-19-68.us-east-2.compute.amazonaws.com:27017/?authSource=admin&compressors=zlib&readPreference=primary&gssapiServiceName=mongodb&appname=MongoDB%20Compass&ssl=false`;
const DB_URI = `mongodb+srv://tushar:Papa@1527@cluster0.kvqys.mongodb.net/pgapp`;
export const connect = async () => {
    mongoose.connect(DB_URI, options).then((client) => {
        console.log('DB is connected.')
    });
};

