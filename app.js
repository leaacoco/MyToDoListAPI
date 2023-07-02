const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const crypto = require('crypto');

const generateSecretKey = () => {
  return crypto.randomBytes(64).toString('hex');
};

const secretKey = generateSecretKey();

const app = express();
const port = 3000;

app.use(cors({
  origin: 'http://localhost:4200',
  credentials: true
}));

app.use(bodyParser.json());
app.use(session({
  secret: secretKey,
  resave: false,
  saveUninitialized: true
}));

const db = mysql.createConnection({
  host: 'localhost',
  user: 'mytodolist',
  password: 'password',
  database: 'my_todolist'
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Connecté à la base de données MySQL');
});

app.get('/users', (req, res) => {
  const sql = 'SELECT id, nom, prenom, role, email FROM user';
  db.query(sql, (err, results) => {
    if (err) {
      throw err;
    }
    const users = results.map((user) => {
      const { id, nom, prenom, role, email } = user;
      return { id, nom, prenom, role, email };
    });
    res.json(users);
  });
});

app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  const sql = 'SELECT id, nom, prenom, role, email FROM user WHERE id = ?';
  db.query(sql, [userId], (err, results) => {
    if (err) {
      throw err;
    }
    if (results.length === 0) {
      res.status(404).json({ message: 'Utilisateur non trouvé' });
    } else {
      const { id, nom, prenom, role, email } = results[0];
      res.json({ id, nom, prenom, role, email });
    }
  });
});

app.post('/users', (req, res) => {
  const { nom, prenom, email, password } = req.body;

  const newUser = { nom, prenom, role: 'utilisateur', email, password };

  const sql = 'INSERT INTO user SET ?';
  db.query(sql, newUser, (err, result) => {
    if (err) {
      throw err;
    }
    const insertedUserId = result.insertId;
    res.status(201).json({ id: insertedUserId, message: 'Utilisateur créé avec succès' });
  });
});

app.put('/users/:id', (req, res) => {
  const userId = req.params.id;
  const { nom, prenom, role, email, password } = req.body;
  const updateUser = { nom, prenom, role, email, password };
  const sql = 'UPDATE user SET ? WHERE id = ?';
  db.query(sql, [updateUser, userId], (err, result) => {
    if (err) {
      throw err;
    }
    if (result.affectedRows === 0) {
      res.status(404).json({ message: 'Utilisateur non trouvé' });
    } else {
      res.json({ message: 'Utilisateur mis à jour avec succès' });
    }
  });
});

app.delete('/users/:id', (req, res) => {
  const userId = req.params.id;
  const sql = 'DELETE FROM user WHERE id = ?';
  db.query(sql, [userId], (err, result) => {
    if (err) {
      throw err;
    }
    if (result.affectedRows === 0) {
      res.status(404).json({ message: 'Utilisateur non trouvé' });
    } else {
      res.json({ message: 'Utilisateur supprimé avec succès' });
    }
  });
});

app.delete('/users/:userId/tasks/:taskId', (req, res) => {
  const userId = req.params.userId;
  const taskId = req.params.taskId;
  const sql = 'DELETE FROM task WHERE user_id = ? AND id = ?';
  db.query(sql, [userId, taskId], (err, result) => {
    if (err) {
      throw err;
    }
    if (result.affectedRows === 0) {
      res.status(404).json({ message: 'Tâche non trouvée' });
    } else {
      res.json({ message: 'Tâche supprimée avec succès' });
    }
  });
});

app.put('/tasks/:taskId', (req, res) => {
  const taskId = req.params.taskId;
  const { nom, commentaire, status } = req.body;
  const updatedTask = { nom, commentaire, status };
  const sql = 'UPDATE task SET ? WHERE id = ?';
  db.query(sql, [updatedTask, taskId], (err, result) => {
    if (err) {
      throw err;
    }
    if (result.affectedRows === 0) {
      res.status(404).json({ message: 'Tâche non trouvée' });
    } else {
      res.json({ message: 'Tâche mise à jour avec succès' });
    }
  });
});

app.get('/tasks/:id', (req, res) => {
  const taskId = req.params.id;
  const sql = 'SELECT * FROM task WHERE id = ?';
  db.query(sql, [taskId], (err, results) => {
    if (err) {
      throw err;
    }
    if (results.length === 0) {
      res.status(404).json({ message: 'Tâche non trouvée' });
    } else {
      const task = results[0];
      res.json(task);
    }
  });
});

app.get('/users/:id/tasks', (req, res) => {
  const userId = req.params.id;
  const sql = 'SELECT * FROM task WHERE user_id = ?';
  db.query(sql, [userId], (err, results) => {
    if (err) {
      throw err;
    }
    res.json(results);
  });
});

app.post('/users/:id/tasks', (req, res) => {
  const userId = req.params.id;
  const { id, nom, commentaire, status } = req.body;
  const newTask = { id, user_id: userId, nom, commentaire, status };
  const sql = 'INSERT INTO task SET ?';
  db.query(sql, newTask, (err, result) => {
    if (err) {
      throw err;
    }
    res.status(201).json({ message: 'Tâche créée avec succès' });
  });
});

// Le reste du code reste inchangé

app.listen(port, () => {
  console.log(`Serveur Express démarré sur le port ${port}`);
});
