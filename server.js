const multer = require("multer");
const aws = require("aws-sdk");
const storage = multer.memoryStorage({});
const upload = multer({storage});


const express = require("express");
require("dotenv").config();
const PORT = process.env.PORT || 4400;


const app = express();
app.set("view engine","ejs");
app.use(express.static(__dirname + "/public"))
// ! routes:
app.get("/",(req,res)=>{
    const message = "i'm index.ejs"
    res.render("index",{message})
})

const region = process.env.BUCKET_REGION;
const bucketName =process.env.BUCKET_NAME;
const accessKeyId = process.env.ACCESS_KEY;
const secretAccessKey = process.env.SECRET_ACCESS_KEY;

const s3 = new aws.S3({
    region,
    accessKeyId,
    secretAccessKey,
    signatureVersion:"v4"
})
const generateUploadURL = async()=>{
    const imageName = Math.round(Math.random() * 138729183012).toString();
    const params = ({
        Bucket:bucketName,
        Key:imageName,
        Expires : 60
    })
    const uplaodUrl = await s3.getSignedUrlPromise("putObject",params);
    return uplaodUrl;
}


app.get("/s3url",async(req,res)=>{
   const url = await generateUploadURL();
   res.send({url});
})

app.post("/upload",upload.array("images"),(req,res)=>{
    // const images = req.body;
    console.log("body : ",req.body);
    console.log("files : ",req.files);
    res.status(200).json({
        success:true,
        status:200,
        message:"aint "
    })
})






app.listen(PORT,()=>{
    console.log("server running on PORT : ",PORT)
})