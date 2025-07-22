const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');

const app = express();


app.use(cors());


app.options('*', cors());


app.use(express.json());

const users = [];

app.post('/signup', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(400).json({ message: 'Email and password required' });

  const hashed = await bcrypt.hash(password, 10);
  const newUser = {
    id: uuidv4(),
    email,
    password: hashed,
  };
  users.push(newUser);
  res.status(201).json({ message: 'User created', id: newUser.id });
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(400).json({ message: 'Email and password required' });

  const user = users.find(u => u.email === email);
  if (!user) return res.status(400).json({ message: 'User not found' });

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.status(401).json({ message: 'Invalid credentials' });

  res.status(200).json({ message: 'Login successful', id: user.id });
});

app.listen(5000, () => console.log('Server running on http://localhost:5000'));
