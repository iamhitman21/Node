const User = require('../models/userModel');
const catchAsync = require('../utils/catchAsync');

exports.createUser = (req, res) => {
  //   const newID = tours[tours.length - 1].id + 1;
  //   // eslint-disable-next-line prefer-object-spread
  //   const newTour = Object.assign({ id: newID }, req.body);
  //   tours.push(newTour);
  //   fs.writeFile(
  //     `${__dirname}/dev-data/data/tours-simple.json`,
  //     JSON.stringify(tours),
  //     () => {
  //       res.status(201).json({
  //         status: 'success',
  //         data: {
  //           tours: newTour
  //         }
  //       });
  //     }
  //   );
};
exports.getAllUsers = catchAsync(async (req, res) => {
  //   const newID = tours[tours.length - 1].id + 1;
  //   const newID = tours[tours.length - 1].id + 1;
  //   // eslint-disable-next-line prefer-object-spread
  //   const newTour = Object.assign({ id: newID }, req.body);
  //   tours.push(newTour);
  //   fs.writeFile(
  //     `${__dirname}/dev-data/data/tours-simple.json`,
  //     JSON.stringify(tours),
  //     () => {
  //       res.status(201).json({
  //         status: 'success',
  //         data: {
  //           tours: newTour
  //         }
  //       });
  //     }
  //   );
  const users = await User.find();
  res.status(200).json({
    status: 'success',
    results: users.length,
    data: {
      users
    }
  });
});
exports.getUser = (req, res) => {
  //   const id = req.params.id * 1;
  //     if (id > tours.length) {
  //       return res.status(404).json({
  //         status: 'fail',
  //         message: 'Invalid ID'
  //       });
  //     }
  //     const tour = tours.find((el) => el.id === id);
  //   res.status(200).json({
  //     status: 'success',
  //     data: {
  //       tour
  //     }
  //   });
};

exports.updateUser = (req, res) => {
  //   if (req.params.id * 1 > tours.length) {
  //     return res.status(404).json({
  //       status: 'fail',
  //       message: 'Invalid ID'
  //     });
  //   }

  res.status(200).json({
    status: 'success',
    data: {
      tour: 'Updated Tour'
    }
  });
};

exports.deleteUser = (req, res) => {
  //   if (req.params.id * 1 > tours.length) {
  //     return res.status(404).json({
  //       status: 'fail',
  //       message: 'Invalid ID'
  //     });

  res.status(204).json({
    status: 'success',
    data: null
  });
};
