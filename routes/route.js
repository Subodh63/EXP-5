const express = require('express');
const router = express.Router();
const student = require('../models/Student');

// post Api 
router.post("/Student", async (req, res) => {
    try {
        const data = new student(req.body);
        const saved = await data.save();
        if (saved) {
            res.status(201).json({
                message: "data submited successfully"
            });
        } else {
            res.status(400).json({
                error: "data not submit"
            });
        }

    } catch (error) {
        res.status(500).json({
            error: "server error occurs"
        })
    }

})
// get Api

router.get("/Student", async (req, res) => {
    try {
        const data = await student.find();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({
            error: "server error occurs"
        })
    }
})

// patch Api
router.patch("/Student/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const data = await student.findByIdAndUpdate(id, req.body, {
            new: true
        });
        if (data) {
            res.status(200).json({
                message: "data update successfully"
            })
        } else {
            res.status(400).json({
                error: "data not update"
            })
        }
    } catch (error) {
        res.status(500).json({
            error: "server error occurs"
        })
    }
})
// delete Api
router.delete("/Student/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const data = await student.findByIdAndDelete(id);
        if (data) {
            res.status(200).json({
                message: "data delete successfully"
                })
                } else {
                    res.status(400).json({
                        error: "data not delete"
                        })
                        }
                        } catch (error) {
                            res.status(500).json({
                                error: "server error occurs"
                                })
                                }
                                })
    // Get by id Api
    router.get("/Student/:id", async (req, res) => {
        try {
            const id = req.params.id;
            const data = await student.findById(id);
            if (data) {
                res.status(200).json({
                    message: "data found",
                    data: data
                    })
                    } else {
                        res.status(400).json({
                            error: "data not found"
                            })
                            }
                            } catch (error) {
                                res.status(500).json({
                                    error: "server error occurs"
                                    })
                                    }
                                    })


module.exports = router;