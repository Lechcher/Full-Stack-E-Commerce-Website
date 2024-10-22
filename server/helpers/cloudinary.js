const cloudinary = require("cloudinary").v2;
const multer = require("multer");

cloudinary.config({
  cloud_name: "dmisw3dpf",
  api_key: "252525196577465",
  api_secret: "axcZdBYqL8S5834vqjDK58iA2p0"
});

const storage = new multer.memoryStorage();

async function imageUploadUtil(file) {
  const result = await cloudinary.uploader.upload(file, {
    resource_type: "auto"
  });

  return result;
}

const upload = multer({ storage });

module.exports = { upload, imageUploadUtil };
