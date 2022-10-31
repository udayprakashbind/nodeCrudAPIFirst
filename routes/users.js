const express = require('express');
require('dotenv/config');

const router = express.Router();
const userdetail = require('../model/user');

router.get('/', async (req, res) => {
    // console.log('hello node users')
    // res.send('hello node users')

    try {
        const findData = await userdetail.find();
        res.json(findData)
    }
    catch (err) {
        res.json({ message: err })

    }
});

// find data by Id

router.get('/:id', async (req, res) => {


    try {
        const findDataById = await userdetail.findById(req.params.id);
        res.json(findDataById)
    }
    catch (err) {
        res.json({ message: err })

    }
});


router.post('/', async (req, res) => {
    console.log(req.body);

    const userdetailInput = new userdetail({
        title: req.body.title,
        discription: req.body.discription
    });

    try {
        const saveInput = await userdetailInput.save()
        res.json(saveInput);
    } catch (err) {
        res.json({ message: err })
    }

    // console.log('hello node post')
    // res.send(`hello node post `)
});


router.patch('/:id', async(req, res) => {
    try{
        const updateData=await userdetail.updateOne({_id:req.params.id},{$set:{title:req.body.title}});
        res.json(updateData);
    }catch(err){
        res.json({message:err})
    }
});
//put method 
router.put('/:id', async(req, res) => {
    try{
        const updateData=await userdetail.updateOne({_id:req.params.id},{$set:{title:req.body.title}});
        res.json(updateData);
    }catch(err){
        res.json({message:err})
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const deleteData = await userdetail.remove({ _id: req.params.id });
        res.json(deleteData);
    }
    catch (err) {
        res.json({
            message: err
        })
    }
})

module.exports = router;