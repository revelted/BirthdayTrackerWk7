const router = require('express').Router();

let Birthday = require('../db/models/birthday.model');
console.log('connected');

router.get('/birthdays', (req, res) => {
  console.log('im hit');
  Birthday.find()
    .then((birthday) => res.json(birthday))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.post('/birthdays', (req, res) => {
  const username = req.body.username;
  const cohort_number = Number(req.body.cohort_number);
  const month = Number(req.body.month);
  const dates = Number(req.body.dates);

  const newBirthday = new Birthday({
    username,
    cohort_number,
    month,
    dates
  });

  newBirthday
    .save()
    .then(() => res.json('Birthday added!'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router