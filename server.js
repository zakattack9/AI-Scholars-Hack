require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const AWS = require('aws-sdk');
const app = express();
const PORT = process.env.PORT || 8080;
const Class = require('./server/db/models/Class');
const Stats = require('./server/db/models/Stats');
AWS.config.update({
  accessKeyId: process.env.ACCESS_KEY_ID,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
  region: 'us-east-1'
});

const lambda = new AWS.Lambda();

app.use(bodyParser('json'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.get('/', (req, res) => {
//   setTimeout(() => {
//     res.send('its been 3 seconds');
//   }, 3000);
//   console.log("hello world");
// });
app.post('/addGrade', (req, res) => {
  let subject = req.body.subject;
  let grade = req.body.grade;
  return new Class({
    class: subject,
    grade: grade
  })
    .save()
    .then(() => {
      res.json({
        message: `Added ${req.body.subject} with grade ${req.body.grade}`
      });
    })
    .then(newClass => {
      res.json(newClass);
    })
    .catch(err => console.log(err));
});

app.post('/fastTimer', (req, res) => {
  let fastTimeYes =
    req.body.fastTime === 'yes' ||
    req.body.fastTime === 'yeah' ||
    req.body.fastTime === 'yup' ||
    req.body.fastTime === 'sure';
  let fastTimeNo =
    req.body.fastTime === 'no' ||
    req.body.fastTime === 'nope' ||
    req.body.fastTime === 'nah' ||
    req.body.fastTime === 'naw';
  if (fastTimeYes) {
    return new Stats({
      break: 5,
      studying: 20,
      cycles: 1,
      looked_away: 20
    })
      .save()
      .then(newStats => {
        res.json(newStats);
      })
      .then(() => {
        res.json({
          message: 'Fast forwarding studying timer for demo purposes'
        });
      })
      .catch(err => console.log(err));
  } else if (fastTimeNo) {
    res.json({ message: 'Timer not fast forwarded, continue studying' });
  }

  // let params = {
  //   FunctionName: 'pace-study-tool-dev-start' /* required */
  // };

  // lambda.invoke(params, function(err, data) {
  //   if (err) console.log(err, err.stack);
  //   // an error occurred
  //   else console.log(data); // successful response
  // });
});

app.post('/study', (req, res) => {
  console.log('req', req.body);
  let usingDeviceYes =
    req.body.usingDevice === 'yes' ||
    req.body.usingDevice === 'yeah' ||
    req.body.usingDevice === 'yup' ||
    req.body.usingDevice === 'sure';
  let usingDeviceNo =
    req.body.usingDevice === 'no' ||
    req.body.usingDevice === 'nope' ||
    req.body.usingDevice === 'nah' ||
    req.body.usingDevice === 'naw';

  if (usingDeviceYes) {
    res.json({
      message:
        'Timer set to 20 minutes. Study mode has been set to utilize the 20 20 20 rule.'
    });
  } else if (usingDeviceNo) {
    res.json({
      message:
        'Timer set to 25 minutes. Study mode has been set to utilize the Pomodoro Technique.'
    });
  } else {
    res.json({ message: "I didn't catch that please try again" });
  }
});

app.get('/startBreak', (req, res) => {
  res.json({
    message:
      "It's time to take a break. Timer has been set for five minutes starting now"
  });
});

app.post('/fastBreak', (req, res) => {
  let fastTimeYes =
    req.body.fastTime === 'yes' ||
    req.body.fastTime === 'yeah' ||
    req.body.fastTime === 'yup' ||
    req.body.fastTime === 'sure';
  let fastTimeNo =
    req.body.fastTime === 'no' ||
    req.body.fastTime === 'nope' ||
    req.body.fastTime === 'nah' ||
    req.body.fastTime === 'naw';

  if (fastTimeYes) {
    res.json({
      message:
        'Break is up. Time to begin studying for another twenty minutes starting now.'
    });
  } else if (fastTimeNo) {
    res.json({ message: 'Timer not fast forwarded, you are still on break' });
  }
});

// GRADE INTENTS
app.post('/grade', (req, res) => {
  let msg = '';
  let response = {};

  let allGrades =
    req.body.allGrades === 'yes' ||
    req.body.allGrades === 'yeah' ||
    req.body.allGrades === 'yup' ||
    req.body.allGrades === 'sure';
  let recommend =
    req.body.recommend === 'yes' ||
    req.body.recommend === 'yeah' ||
    req.body.recommend === 'yup' ||
    req.body.recommend === 'sure';
  let howLong =
    req.body.howLong === 'yes' ||
    req.body.howLong === 'yeah' ||
    req.body.howLong === 'yup' ||
    req.body.howLong === 'sure';

  console.log(allGrades, recommend, howLong);

  if (allGrades) {
    msg +=
      'Your grades are A for Physics, B for Math, C for Computer Science. ';
  }
  if (recommend) {
    msg +=
      'Math and Computer Science are the classes you should study for the most. ';
  }
  if (howLong) {
    msg +=
      'According to my calculations, it is reccomended that you study Physics for 10 minutes, Math for 30 minutes, and Computer Science for 45 minutes. ';
  } else {
    msg += 'No option selected, please try again';
  }

  response.message = msg;
  res.json(response);
});

// VIEW PROGRESS INTENTS
app.post('/progress', (req, res) => {
  //let seeToday = req.body.dayOrWeek === "today" || req.body.dayOrWeek === "just today" || req.body.dayOrWeek === "progress for today" || req.body.dayOrWeek === "today's progress";
  //let seeWeek = req.body.dayOrWeek === "this week" || req.body.dayOrWeek === "week" || req.body.dayOrWeek === "past seven days" || req.body.dayOrWeek === "entire week" || req.body.dayOrWeek === "whole week" || req.body.dayOrWeek === "current week" || req.body.dayOrWeek === "the whole week" || req.body.dayOrWeek === "for the whole week";
  let seeToday = req.body.dayOrWeek === 'just today';
  let seeWeek = req.body.dayOrWeek === 'this week';

  if (seeToday) {
    res.json({
      message:
        'You have studied for 20 minutes and taken 5 minutes of break with a total of 25 minutes of productive work'
    });
  } else if (seeWeek) {
    res.json({
      message:
        'This week you have studied for 120 minutes and taken 30 minutes of break this with a total of 150 minutes of productive work'
    });
  } else {
    res.json({ message: "Sorry, I didn't catch that, try again" });
  }
});

app.get('/api/classes', (req, res) => {
  return Class.fetchAll().then(classes => {
    return res.json(classes);
  });
});

app.get('/api/stats', (req, res) => {
  return Stats.fetchAll().then(result => {
    return res.json(result);
  });
});

app.listen(PORT, err => {
  console.log(`connected to ${PORT}`);
});
