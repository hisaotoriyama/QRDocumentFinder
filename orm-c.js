let db = require('./models/index')
 db.content.create({
   name: 'Contract of Sales'
 })
 db.content.create({
    name: 'Contract of Purchase'
  })
 db.content.create({
    name: 'Shipping Documents / Bill of Lading'
  })
 db.storageloc.create({
   name: 'A-1'
 })
 db.storageloc.create({
   name: 'A-2'
 })
 db.storageloc.create({
    name: 'A-3'
 })
 db.storageloc.create({
   name: 'B-1'
 })
 db.storageloc.create({
   name: 'B-2'
 })
 db.storageloc.create({
   name: 'B-3'
 })
 db.user.create({
    name: 'Toriyama'
 })
  db.user.create({
     name: 'Hirota'
 })
 db.user.create({
    name: 'Yokoyama'
})
db.storeditem.create({
    name: 'Contract',
    content:1,
    storageloc:1,
    user:1
  })
  db.storeditem.create({
    name: 'Shioment',
    content:2,
    storageloc:2,
    user:2
  })