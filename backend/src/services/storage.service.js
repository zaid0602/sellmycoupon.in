const ImageKit = require("@imagekit/nodejs")


const imagekit = new ImageKit({
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
})

async function uploadFle(buffer){
    const result
}