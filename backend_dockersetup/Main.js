const pino = require('pino');
const pretty = require('pino-pretty');

const streams = [
  { stream: pretty({ colorize: true }) }
];

const logger = pino({},pino.multistream(streams))


const express = require('express');
const mysql = require('mysql2/promise');
const app = express();
const cors = require('cors')

app.use(cors());
app.use(express.static('public'));

const config = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
};

let connection;
let reconnectDelay = 1000; // 1 second
async function connect() {
  try {
    connection = await mysql.createConnection(config);
    logger.info('[+] Connected to Database!');
    reconnectDelay = 1000; // Reset delay to 1 second on successful connection

    connection.on('error', (err) => {
      logger.error({ err }, '[-] Database connection error:');
      setTimeout(connect, reconnectDelay); // recursive connect() call
      reconnectDelay = Math.min(reconnectDelay * 2, 600000); // Increase delay up to 10 minutes
    });
  } catch (err) {
    logger.error({ err }, '[-] Failed to connect to database:');
    setTimeout(connect, reconnectDelay); // recursive connect() call
    reconnectDelay = Math.min(reconnectDelay * 2, 600000); // Increase delay up to 10 minutes
  }
}
connect();

app.get('/getClassInfo', async (req, res) => {
  try {
    const [rows] = await connection.execute('select name, room, countStudent from klasse');
    res.json(rows);
  } catch (err) {
    logger.error(err);
    res.sendStatus(500);
  }
});

app.get('/getTeacher', async (req, res) => {
  try {
    const [rows] = await connection.execute('select vname, nname, foto from lehrer');
    res.json(rows);
  } catch (err) {
    logger.error(err);
    res.sendStatus(500);
  }
});

app.get('/getAllschueler', async (req, res) => {
  try {
    const [rows] = await connection.execute('SELECT * FROM personal ORDER BY nname');
    let outArray = []
    for (row of rows) {
      const birthdate = new Date(row.gebdat).toLocaleDateString('de-DE');
      const ageInMs = Date.now() - new Date(row.gebdat).getTime();

      const ageInYears = Math.floor(ageInMs / 1000 / 60 / 60 / 24 / 365);
      row.age = ageInYears
      row.gebdat = birthdate;
      outArray.push(row)
    }

    res.json(outArray);
  } catch (err) {
    logger.error(err);
    res.sendStatus(500);
  }
});

function daysUntilBirthday(birthdate) {
  const today = new Date();
  const birthday = new Date(today.getFullYear(), birthdate.getMonth(), birthdate.getDate());

  if (birthday < today) {
    birthday.setFullYear(birthday.getFullYear() + 1);
  }

  const diff = birthday.getTime() - today.getTime();
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  return days;
}

app.get('/getschueler', async (req, res) => {
  try {
    let id = req.query["id"];
    const [rows] = await connection.execute('SELECT * FROM personal where id = ?', [id]);

    // Calculate age and days till next birthday
    const now = new Date();
    const dob = new Date(rows[0].gebdat);
    let age = now.getFullYear() - dob.getFullYear();
    const monthDiff = now.getMonth() - dob.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && now.getDate() < dob.getDate())) {
      age--;
    }
    const daysTillNextBirthday = daysUntilBirthday(dob);

    // Add age and days till next birthday to response JSON
    rows[0].age = age;
    rows[0].daysTillNextBirthday = daysTillNextBirthday;

    rows[0].gebdat = new Date(rows[0].gebdat).toLocaleDateString('de-DE');

    res.json(rows);
  } catch (err) {
    logger.error(err);
    res.sendStatus(500);
  }
});

app.get('/getHobbies', async (req, res) => {
  try {
    let id = req.query["id"];
    const [rows] = await connection.execute('SELECT * FROM hobby where id = ?', [id]);
    res.json(rows);
  } catch (err) {
    logger.error(err);
    res.sendStatus(500);
  }
});

app.get('/getNationalitaet', async (req, res) => {
  try {
    let id = req.query["id"];
    const [rows] = await connection.execute('SELECT * FROM nationalitaet where id = ?', [id]);
    res.json(rows);
  } catch (err) {
    logger.error(err);
    res.sendStatus(500);
  }
});

app.get('/getMaleCount', async (req, res) => {
  try {
    const [rows] = await connection.execute('select count(id) from personal where geschlecht = "Männlich"');
    res.json(rows[0]["count(id)"]);
  } catch (err) {
    logger.error(err);
    res.sendStatus(500);
  }
});

app.get('/getFemaleCount', async (req, res) => {
  try {
    const [rows] = await connection.execute('select count(id) from personal where geschlecht = "Weiblich"');
    res.json(rows[0]["count(id)"]);
  } catch (err) {
    logger.error(err);
    res.sendStatus(500);
  }
});

app.get('/getCount', async (req, res) => {
  try {
    const [rows] = await connection.execute('select count(id) from personal');
    res.json(rows);
  } catch (err) {
    logger.error(err);
    res.sendStatus(500);
  }
});

app.get('/getMainPage', async (req, res) => {
  try {
    const [rows] = await connection.execute('SELECT id, vname, nname, gebdat FROM personal');
    let outArray = []
    for (row of rows) {
      const birthdate = row.gebdat;
      const ageInMs = Date.now() - new Date(birthdate).getTime();
      const ageInYears = Math.floor(ageInMs / 1000 / 60 / 60 / 24 / 365);
      row.age = ageInYears
      outArray.push(row)
    }

    res.json(outArray);
  } catch (err) {
    logger.error(err);
    res.sendStatus(500);
  }
});

const PORT = 6234;
app.listen(PORT, () => {
  logger.info(`[+] Server listening on port ${PORT}`);
});