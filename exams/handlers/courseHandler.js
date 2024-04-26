const courseSchema = require('../models/courses/courseSchema');

exports.loadAllCourses = async (req, res) => {
  try {
    const loadCourses = await courseSchema.list();
    res.render('courses', loadCourses);
  } catch (error) {
    res.status(500).send('Server encountered an issue');
  }
};

exports.addNewCourse = async (req, res) => {
  try {
    const addNewCourse = await courseSchema.create({
      title: req.body.title,
      address: req.body.address,
      area: req.body.area,
    });
    res.status(201).json({
      status: 'Created',
    });
  } catch (error) {
    res.status(500).send('Server encountered an issue');
  }
};

exports.deleteCourse = async (req, res) => {
  try {
    await courseSchema.remove(+req.params.id);
  } catch (error) {
    res.status(500).send('Server encountered an issue');
  }
};

exports.updateCourse = async (req, res) => {
  try {
    const updateCourse = await courseSchema.findByIdAndUpdate({
      id: req.params.id,
      title: req.body.title || this.title,
      address: req.body.address || this.address,
      area: req.body.area || this.area,
    });
  } catch (error) {
    res.status(500).send('Server encountered an issue');
  }
};
