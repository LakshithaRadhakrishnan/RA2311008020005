const axios = require("axios");
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJycjI1ODFAc3JtaXN0LmVkdS5pbiIsImV4cCI6MTc3NzcwMDQwMCwiaWF0IjoxNzc3Njk5NTAwLCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiMWM2OTQyNGQtMWQ0NS00ZTk5LTg1NjYtZDVlZmQ5MWY4Yzc0IiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoici5sYWtzaGl0aGEiLCJzdWIiOiJmY2M1NzI2MS1lMTk4LTQ4NTAtOGQzNC0zMGU0MjJlZDg2MDkifSwiZW1haWwiOiJycjI1ODFAc3JtaXN0LmVkdS5pbiIsIm5hbWUiOiJyLmxha3NoaXRoYSIsInJvbGxObyI6InJhMjMxMTAwODAyMDAwNSIsImFjY2Vzc0NvZGUiOiJRa2JweEgiLCJjbGllbnRJRCI6ImZjYzU3MjYxLWUxOTgtNDg1MC04ZDM0LTMwZTQyMmVkODYwOSIsImNsaWVudFNlY3JldCI6IlNFVlRGSFlUZ1JEQXNjbUcifQ.ltP-hH-y6jWPu0Z9JObiInZhYD5hSF2Vi0W6FwrVJFY";
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