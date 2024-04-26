const academySchema = require('../models/academies/academySchema');

exports.addNewAcademy = async (req, res) => {
  try {
    const newAcademy = await academySchema.create({
      title: req.body.title,
      address: req.body.address,
    });
    res.status(201).json({
      status: 'success',
    });
  } catch (error) {
    res.status(500).send('Server encountered an issue');
  }
};
