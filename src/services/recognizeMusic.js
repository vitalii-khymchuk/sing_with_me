import axios from "axios";
import CryptoJS from "crypto-js";

// const API_TOKEN = process.env.REACT_APP_AUDD_TOKEN;

// const getInfo = async (file) => {
//   const inputData = {
//     api_token: API_TOKEN,
//     file,
//     return: "apple_music,spotify",
//   };

//   try {
//     const { data } = await axios({
//       method: "post",
//       url: "https://api.audd.io/",
//       data: inputData,
//       headers: { "Content-Type": "multipart/form-data" },
//     });
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };

const options = {
  endpoint: "/v1/identify",
  signature_version: "1",
  data_type: "audio",
  secure: true,
  access_key: process.env.REACT_APP_ARC_CLOUD_ACCESS_KEY,
  access_secret: process.env.REACT_APP_ARC_CLOUD_SECRET_KEY,
  method: "POST",
};

function buildStringToSign(timestamp) {
  const {
    method,
    endpoint: uri,
    access_key,
    data_type,
    signature_version,
  } = options;

  return [
    method,
    uri,
    access_key,
    data_type,
    signature_version,
    timestamp,
  ].join("\n");
}

function sign(signString, accessSecret) {
  return CryptoJS.enc.Base64.stringify(
    CryptoJS.HmacSHA1(signString, accessSecret)
  );
}

async function getInfo(blob) {
  const current_data = new Date();
  const timestamp = current_data.getTime() / 1000;

  const stringToSign = buildStringToSign(timestamp);

  const signature = sign(stringToSign, options.access_secret);
  const formData = new FormData();
  formData.append("sample", blob);
  formData.append("access_key", options.access_key);
  formData.append("data_type", options.data_type);
  formData.append("signature_version", options.signature_version);
  formData.append("signature", signature);
  formData.append("sample_bytes", blob.size);
  formData.append("timestamp", timestamp);

  try {
    const { data } = await axios({
      method: "post",
      url: "https://identify-eu-west-1.acrcloud.com/v1/identify",
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
}

export default { getInfo };
