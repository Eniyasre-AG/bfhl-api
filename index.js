import express from "express";

const app = express();
app.use(express.json());


const FULL_NAME = "eniya_sre_ag";
const DOB = "08012005";
const EMAIL = "eniyasre05@gmail.com";
const ROLL_NUMBER = "22BPS1002";


function isNumeric(str) {
  return /^[0-9]+$/.test(str);
}
function alternateCaps(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    result += i % 2 === 0 ? str[i].toUpperCase() : str[i].toLowerCase();
  }
  return result;
}


app.get("/bfhl", (req, res) => {
  res.status(200).json({
    is_success: true,
    message: "Use POST request with JSON body"
  });
});


app.post("/bfhl", (req, res) => {
  try {
    if (!req.body || !Array.isArray(req.body.data)) {
      return res.status(400).json({
        is_success: false,
        message: "Invalid input. 'data' must be an array."
      });
    }

    const data = req.body.data;

    let odd_numbers = [];
    let even_numbers = [];
    let alphabets = [];
    let special_characters = [];
    let sum = 0;

    data.forEach((item) => {
      if (isNumeric(item)) {
        const num = parseInt(item, 10);
        if (num % 2 === 0) even_numbers.push(item);
        else odd_numbers.push(item);
        sum += num;
      } else if (/^[a-zA-Z]+$/.test(item)) {
        alphabets.push(item.toUpperCase());
      } else {
        special_characters.push(item);
      }
    });

    const concat_raw = alphabets.join("");
    const reversed = concat_raw.split("").reverse().join("");
    const concat_string = alternateCaps(reversed);

    return res.status(200).json({
      is_success: true,
      user_id: `${FULL_NAME}_${DOB}`,
      email: EMAIL,
      roll_number: ROLL_NUMBER,
      odd_numbers,
      even_numbers,
      alphabets,
      special_characters,
      sum: sum.toString(),
      concat_string
    });
  } catch (error) {
    return res.status(500).json({
      is_success: false,
      message: error.message || "Something went wrong"
    });
  }
});


app.use((req, res) => {
  res.status(404).json({ is_success: false, message: "Route not found" });
});


export default app;
