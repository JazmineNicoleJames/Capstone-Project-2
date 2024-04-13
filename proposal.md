**“What should I be for Halloween?”**

1. What tech stack will I use?
	- For the tech stack I will use React and Node.

2. Is the front-end UI or the back-end going to be the focus of my project?
 - This app is going to evenly focus on both front-end UI(displaying images, links, videos, user input forms, etc) and backend (database, routing, API endpoints, error handling, etc) 

3. Website or mobile app?
	- This will be a website :) 

4. What goal with my project be designed to achieve?
	- The goal of this project is to allow a user to easily figure out what they should be for halloween by asking multiple questions, then displaying either a link to buy the costume, a YouTube video tutorial, or both.

5. What kind of users will visit my app? Whats the demographic?
 - This app is for everyone, but might be best for adults only because of the specific Amazon costume links that will be displayed.

6. What data do I plan on using? 
	- I plan on using:
		- YouTube API to retrieve videos and display them on the page, 
		- either hardcoding Amazon links or using Amazon API to display product information including images, titles, prices, and a clickable thumbnail image.
 		- as well as creating my own Costume API that will make calls to my database.

7. Outlining my approach to creating my project. 
	
	- What does your database schema look like? 
		- For this project I plan to first create a database schema using postgreSQL to   hold all of the costume data. 
The Costume table will have  
name(PK), 
image,
theme(classic, punny, animals, pop_culture), 
experience_level,
 gender_preference,	
 result_type(youtube_video, amazon_link,  or both), 
youtube_video_id, 
amazon_link_id  
 		-  In the initial set up, I will populate the database table with a predefined list of about 20 costumes.

	- What kinds of issues might you run into with your API? 
		- API rate limits is a possible issue I might run into using YouTubes API. For my own Costume API - there could be issues with consistency.

	- Is there any sensitive information you need to secure? 
		- As of now with the MVP of this project, there will not be any sensitive information. This app will not require any logging in or authentication.

	- What functionality will your app include? 
		- Allowing a user to easily think of Halloween costume ideas based on preferences!

	- What will the user flow look like? 
		- The home page will start with a list of pre-selected themes for a user to choose from. From there, it will ask about gender preferences, and experience level. Once user has answered all questions, the final page will load a costume with an image, and either an amazon link or thumbnail, a YouTube video, or both.

	- What features make your site more than a CRUD app? What are your stretch goals?
		- This app goes beyond simple browsing. It allows a user to narrow down costume ideas based on theme, gender preferences, and experience level. My app heavily relies on external APIs to enhance the functionality and display videos directly on the page. The results are personalized and includes e-commerce functionality, giving the user a seamless transition from browsing to purchasing the costume recommended.
		- Stretch goals for me would be implementing more costumes, having links to more than just Amazon for costume purchasing, allowing users to create an account to save information, and maybe even allowing users to creat their own submission for a costume.