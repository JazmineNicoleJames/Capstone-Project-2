const db = require("../db");

/* Costume class */

class Costume {

/* Get single costume by item_name */
    static async getCostume(name) {
        const res = await db.query(`
            SELECT item_name,
                    theme,
                    experience_level,
                    gender_pref,
                    result_type,
                    youtube_video_id,
                    amazon_link_id,
                    img
            FROM costumes
            WHERE item_name = $1`, 
            [name]
        );
        const costume = res.rows[0];
        return costume;
    };

/*     Get all costumes */
    static async getAll() {
        const res = await db.query(
            `SELECT item_name,
            theme, experience_level,
            gender_pref,
            result_type,
            youtube_video_id,
            amazon_link_id,
            img
            FROM costumes`
        );
        const costumes = res.rows;
        return costumes;
    };

/*     Get costume by gender prefence */
    static async getGenderPref(genderPref) {
        const res = await db.query(
            `SELECT item_name,
            theme, experience_level,
            gender_pref,
            result_type,
            youtube_video_id,
            amazon_link_id,
            img
            FROM costumes
            WHERE gender_pref = $1`,
            [genderPref]
        );
        const costumes = res.rows;
        return costumes;
    };

/*     Get costume by experience level */
    static async getExperienceLevel(experience_level){
        const res = await db.query(
            `SELECT item_name,
            theme, experience_level,
            gender_pref,
            result_type,
            youtube_video_id,
            amazon_link_id,
            img
            FROM costumes
            WHERE experience_level = $1`,
            [experience_level]
        );
        const costumes = res.rows;
        return costumes;
    };

/*     Get a costume by all filters -- 
    * theme,
    * gender_preference,
    * experience_level
    * */
    static async getByFilters({theme, gender_pref, experience_level}) {
        let res = 
            `SELECT item_name,
            theme, experience_level,
            gender_pref,
            result_type,
            youtube_video_id,
            amazon_link_id,
            img
            FROM costumes
            WHERE 1=1`
        ;
        const params = [];

        if(theme){
            res += ` AND theme = $${params.length +1}`
            params.push(theme);
        }

        if(gender_pref){
            res += ` AND gender_pref = $${params.length +1}`;
            params.push(gender_pref);
        };
        console.log("GENDER PREFF", gender_pref)


        if(experience_level){
            res += ` AND experience_level = $${params.length +1}`;
            params.push(experience_level);
        };

        const results = await db.query(res, params)
        console.log('res in get by filters', results)
        return results.rows;
    }
};

module.exports = Costume;