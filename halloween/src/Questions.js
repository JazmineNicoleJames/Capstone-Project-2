import React, {useState} from "react";
import HalloweenApi from "./api";
import { useNavigate } from "react-router-dom";
import "./Questions.css";

/* Questions component -- This is the home page for the app. 

    * holds state for -- 
        * theme (classic, animal, pop_culture),
        * genderPref (feminine, masculine, gender_neutral),
        * experienceLevel (beginner, intermediate, advanced)
    
    * renders a form for questions -- updates state with input results

    * handles form submission, calls on Halloween API to get costume results by filter (getByAllFilters)
    * navigates to CostumeDetail component with details on specific costume
    *  or displays Error alert message and refreshes page


*/
const Questions = () => {
    const [theme, setTheme] = useState('');
    const [genderPref, setGenderPref] = useState('');
    const [experienceLevel, setExperienceLevel] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const res = await HalloweenApi.getByAllFilters(theme || null, genderPref || null, experienceLevel || null);
        if(res && res.length > 0){
            const costumeResult = res[0].item_name;
            navigate(`/costumes/${costumeResult}`)
        } else {
            alert("Sorry, there are no results for your search filter. Please try again")
            navigate("/")
        }
    }

    return (
        <div> 
            <h1 className="welcome-msg">Welcome. Let's come up with a costume, shall we?</h1>
            <h3 className="directions"> Begin by answering the following prompts </h3>
            <form onSubmit={handleSubmit} className="custom-select" data-testid="my-form">
                <div className="custom-select">
                    <label htmlFor="theme">
                        <select id='theme' value={theme} onChange={(e) => setTheme(e.target.value)}>
                            <option value="theme">Select a theme</option>
                            <option value="classic">Classic</option>
                            <option value="pop-culture">Pop Culture</option>
                            <option value="animal">Animal</option>
                        </select>
                    </label>
                </div>
                <div className="custom-select">
                    <label htmlFor="genderPref">
                        <select value={genderPref} onChange={(e) => setGenderPref(e.target.value)}>
                            <option value="genderPref">Select a gender preference</option>
                            <option value="feminine">Feminine</option>
                            <option value="masculine">Masculine</option>
                            <option value="gender-neutral">Gender Neutral</option>
                        </select>
                    </label>
                </div>
                <div className="custom-select">
                    <label htmlFor="experienceLevel">
                        <select value={experienceLevel} onChange={(e) => setExperienceLevel(e.target.value)}>
                            <option value="experienceLevel"> Select your experience Level</option>
                            <option value="easy">Easy</option>
                            <option value="intermediate">Intermediate</option>
                            <option value="advanced">Advanced</option>
                        </select>
                    </label>
                </div>
                <button type="submit">Submit</button>
            </form>
            </div>
    )
};

export default Questions;