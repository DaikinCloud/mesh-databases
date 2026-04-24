db.Branches.updateMany(
  {
    branchNumber: {
      $in: [
        '702', '706', '724', '730', '746', '790', '794', '764', '748', '772',
        '732', '752', '722', '786', '795', '796', '708', '712', '726', '744',
        '754', '758', '760', '762', '768', '770', '778', '792', '793', '826'
      ]
    }
  },
  {
    $set: {
      branchType: 'ACT',
      sapEnabled: true,
      sapBranchNumber: {
        $switch: {
          branches: [
            { case: { $eq: ['$branchNumber', '702'] }, then: '4702' },
            { case: { $eq: ['$branchNumber', '706'] }, then: '4706' },
            { case: { $eq: ['$branchNumber', '724'] }, then: '4724' },
            { case: { $eq: ['$branchNumber', '730'] }, then: '4730' },
            { case: { $eq: ['$branchNumber', '746'] }, then: '4746' },
            { case: { $eq: ['$branchNumber', '790'] }, then: '4790' },
            { case: { $eq: ['$branchNumber', '794'] }, then: '4794' },
            { case: { $eq: ['$branchNumber', '764'] }, then: '4764' },
            { case: { $eq: ['$branchNumber', '748'] }, then: '4748' },
            { case: { $eq: ['$branchNumber', '772'] }, then: '4772' },
            { case: { $eq: ['$branchNumber', '732'] }, then: '4732' },
            { case: { $eq: ['$branchNumber', '752'] }, then: '4752' },
            { case: { $eq: ['$branchNumber', '722'] }, then: '4722' },
            { case: { $eq: ['$branchNumber', '786'] }, then: '4786' },
            { case: { $eq: ['$branchNumber', '795'] }, then: '4795' },
            { case: { $eq: ['$branchNumber', '796'] }, then: '4796' },
            { case: { $eq: ['$branchNumber', '708'] }, then: '4708' },
            { case: { $eq: ['$branchNumber', '712'] }, then: '4712' },
            { case: { $eq: ['$branchNumber', '726'] }, then: '4726' },
            { case: { $eq: ['$branchNumber', '744'] }, then: '4744' },
            { case: { $eq: ['$branchNumber', '754'] }, then: '4754' },
            { case: { $eq: ['$branchNumber', '758'] }, then: '4758' },
            { case: { $eq: ['$branchNumber', '760'] }, then: '4760' },
            { case: { $eq: ['$branchNumber', '762'] }, then: '4762' },
            { case: { $eq: ['$branchNumber', '768'] }, then: '4768' },
            { case: { $eq: ['$branchNumber', '770'] }, then: '4770' },
            { case: { $eq: ['$branchNumber', '778'] }, then: '4778' },
            { case: { $eq: ['$branchNumber', '792'] }, then: '4792' },
            { case: { $eq: ['$branchNumber', '793'] }, then: '4793' },
            { case: { $eq: ['$branchNumber', '826'] }, then: '4826' }
          ],
          default: null
        }
      }
    }
  }
);