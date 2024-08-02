const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const userId = 'john_doe_17091999';
const email = 'john@xyz.com';
const rollNumber = 'ABCD123';

// POST endpoint
app.post('/bfhl', (req, res) => {
  try {
    const { data } = req.body;
    const numbers = [];
    const alphabets = [];
    let highestAlphabet = '';

    data.forEach((item) => {
      if (!isNaN(item)) {
        numbers.push(item);
      } else {
        alphabets.push(item);
        if (item.toLowerCase() > highestAlphabet.toLowerCase()) {
          highestAlphabet = item;
        }
      }
    });

    res.json({
      is_success: true,
      user_id: userId,
      email,
      roll_number: rollNumber,
      numbers,
      alphabets,
      highest_alphabet: [highestAlphabet],
    });
  } catch (error) {
    res.status(400).json({ is_success: false, error: error.message });
  }
});

// GET endpoint
app.get('/bfhl', (req, res) => {
  res.json({ operation_code: 1 });
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});