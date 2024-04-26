const express = require('express');
const db = require('./pkg/db/index');
const academy = require('./handlers/academyHandler');
const course = require('./handlers/courseHandler');

const app = express();
db.init();

app.use(express.urlencoded({ extended: true }));

app.post('/api/v1/academies/create-new', academy.addNewAcademy);

app.get('/api/v1/courses', course.loadAllCourses);
app.post('/api/v1/courses/create-new', course.addNewCourse);
app.delete('/api/v1/courses/delete-course/:id', course.deleteCourse);
app.put('/api/v1/courses/update-course/:id', course.updateCourse);

app.listen(process.env.PORT, (err) => {
  if (err) {
    console.log('Could not start service');
  }
  console.log(`Service initiated on port ${process.env.PORT} `);
});
