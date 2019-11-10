// @file vuetodo.js <controllers>
// load ORM nmodule
let db = require('../models/index')

// REST controller definitions
module.exports = {
    index: (req, res) => {
        db.storeditem.findAll()            
        .then((d) => {
            let data = d.map((p) => {
                  return {
                    id: p.id,
                    originaluser: p.originaluser,
                    content: p.content,
                    storageloc: p.storageloc,
                    latestuser: p.latestuser
                }
            })
            res.json(data)
        })
    },

    create: (req, res) => {
        let data = {
          originaluser:req.body.originaluser,
          content:req.body.content,
          storageloc:req.body.storageloc,
          latestuser:req.body.latestuser,
        }
        db.storeditem.create(data).then((p)=>{
          res.json({
              id: p.id,
              originaluser: p.originaluser,
              content: p.content,
              storageloc: p.storageloc,
              latestuser: p.latestuser,
            })
        })
    },

    // update: (req, res) => {
    //     db.vuetodotable.update({
    //       item:req.body.item
    //     },{
    //       where:{
    //         id:req.params.id
    //       }
    //     }).then((p)=>{
    //       let data = p
    //       res.json(data)
    //     })},

    // //（重要論点）Sequlize上ではdestroy。でもhttp上ではdeleteとする。
    // destroy: (req, res) => {
    //     db.vuetodotable.destroy({
    //         where: {
    //          id:req.params.id
    //         }
    //     }).then(() => {
    //         res.send({})
    //     })
 
}