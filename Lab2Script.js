use Sliit

db.studentDetails.insert({
name: 'John',
dateOfBirth: '1990-01-01T00:00:00Z',
subjects: ['Application frameworks', 'Computer architecture']
})

db.studentDetails.find({name:'John'})

db.studentDetails.find({name:'6044c8b8c8a660e55ef0ae23'})

db.studentDetails.insert({
name: 'John',
dateOfBirth: '1990-01-01T00:00:00Z',
subjects: ['Application frameworks', 'Computer architecture','Distributed Computing']
})

db.studentDetails.update({
name: "Smith",
dateOfBirth: "1990-01-15T00:00:00Z",
subjects: ["Application frameworks", "Computer architecture"],
isActive: true
}
,"6044cb50c8a660e55ef0ae38")


db.studentDetails.insert({  
name: 'John',
dateOfBirth: '1990-01-01T00:00:00Z',
subjects: ['Application frameworks', 'Computer architecture'],
isActive: true
})

db.studentDetails.insert({
name: "Smith",
dateOfBirth: "1990-01-15T00:00:00Z",
subjects: ["Application frameworks", "Computer architecture"],
isActive: false
})

db.studentDetails.updateOne({_id: ObjectId("6044cef2c8a660e55ef0ae39")},{$set:{isActive:true,name:'cina'}})

db.studentDetails.find({_id: ObjectId("6044cef2c8a660e55ef0ae39")})

db.sliit.deleteMany({name:"Smith"})
