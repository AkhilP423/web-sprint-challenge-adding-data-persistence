// build your `/api/projects` router here

//consts defined, should be correct
const express = require('express')
const router = express.Router()
const Projects = require('./model')

//get finished. confused on the error number, may have to change.
router.get('/', (req, res, next) => {

    Projects.getAll()
    .then((projects) => {
        res.status(200).json(projects)
    })
    .catch(next)

})


//post finished. 
router.post('/', async (req, res, next) => {

    try{
        const newProject = await Projects.create(req.body)
        res.status(200).json({
            project_id: newProject.project_id,
            project_name: newProject.project_name,
            project_description: newProject.project_description,
            project_completed: newProject.project_completed === 0 ? false : true
        })

    }catch(err){
        next(err)
    }
})

//may have too many project fields in try. Will try a shorthand version of this code later if tests fail.
module.exports = router