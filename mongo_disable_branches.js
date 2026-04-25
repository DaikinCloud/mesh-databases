// Turn off all SAP branches.
//db.Branches.updateMany(
//  { "sapEnabled": true },
//  { "$set": { "branchType": "ACT" } }
//)
//
//
//db.Branches.updateOne(
//  { branchNumber: "204" },
//  { $set: { branchType: "ACT" } }
//);



db.Branches.updateMany(
  {
    branchNumber: {
      $in: [
        "702", "706", "724", "730", "746", "790", "794", "764", "748", "772",
        "732", "752", "722", "786", "795", "796", "708", "712", "726", "744",
        "754", "758", "760", "762", "768", "770", "778", "792", "793", "826"
      ]
    }
  },
  [
    {
      $set: {
        branchType: "OFFLINE",
        sapEnabled: true,
        sapBranchNumber: {
          $concat: ["4", "$branchNumber"]
        }
      }
    }
  ]
);

