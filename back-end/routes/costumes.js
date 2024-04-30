const express = require("express");
const router = express.Router({mergeParams: true});
const Costume = require('../models/costume');
const API_KEY = process.env.API_KEY;
const BASE_URL = process.env.BASE_URL;
const axios = require("axios");

/* Get all costumes */
router.get("/", async (req, res, next) => {
    try{    
        const allCostumes = await Costume.getAll();
        console.log('all costumes', allCostumes)
        return res.json(allCostumes)
    } catch (e) {
        console.error('e',e)
    }
});

/* Get costumes by filter -- based on questions form */
router.get("/filters", async (req, res, next) => {
    try {
        const { theme, gender_pref, experience_level } = req.query;
        const costumes = await Costume.getByFilters({ theme, gender_pref, experience_level });
        res.json(costumes)
    } catch(e) {
        console.error('error', e)
    }
});


/* Get costume by item_name */
router.get("/:name", async (req, res, next) => {
    try {
        const name = await Costume.getCostume(req.params.name);
        let videoId = name.youtube_video_id;
        const response = await axios.get(`${BASE_URL}?key=${API_KEY}&id=${videoId}&part=snippet`);
        const videoData = response.data.items[0]; 
        res.json(videoData)
    } catch(e){
        console.error('error', e)
    }
});


module.exports = router;