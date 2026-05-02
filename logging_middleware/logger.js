const axios = require("axios");
const TOKEN = "token_here";
async function Log(stack, level, pkg, message) {
  try {
    const res = await axios.post(
      "http://20.207.122.201/evaluation-service/logs",
      {
        stack,
        level,
        package: pkg,
        message,
      },
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      }
    );
console.log("Log success:", res.data);
} 
catch (err) 
{
    console.log("Log failed:", err.message);
}
}
module.exports = Log;