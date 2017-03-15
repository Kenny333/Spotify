ZENEFITS TASK

AUTHOR
Chenyi Kang

GOAL
This task is to create an artist search webpage based on Spotify API.

REQUIREMENTS
Constrain all work to one webpage only.
Implement some artist search functionality.
Display the artist name and image on the page.
Accommodate every UI edge case.
Populate data asynchronously using the Spotify API.
Use HTML, CSS and Javascript and libraries like jQuery or Bootstrap but not any front-end framework.
Consider the usability and visual quality,page structure and layout, code organization, feature selection, and level of completion.

INSTALLATION
In this project, do not need to install anything, it's already include all necessary files and libraries, make sure index.html file, style.css file and script.js file in the same folder, and just open the index.html file in your browser.

USAGE
1. Open the index.html on the browser, it shows a text, a small instruction and a search button.
2. Type an artist name, click search button, it will show covers of all ablums of this artist, and the artist name will show under the cover.
   E.g. If typing "Michael Jackson" as the artist name, click search button, it will show the all the ablums' cover like "BAD","This is it","Thriller", etc. And the artist name(Michael Jackson) will show under every cover.
3. Type an Album name, click search button, it will show covers of all ablums which match the name typed, and every artist name will show under 
   the related album cover.
   E.g. If typing "Love" as the album name, click search button, it will show the cover of "Love & Sex" with "Plan B" under it, the cover of "Hard II Love" with "Usher" under it, the cover of "Dangerous In Love" with "Beyonce" under it, etx.

HOW IT WORK
1. The text box and button are wrapped by a form, once the search button been clicked, it can be regarded as form submitted.
2. Once the form been submitted, it will parse the value of text box as a parameter into showAlbum function.
3. Inside showAlbum function, it make the AJAX call, based on the searching URL from spotify API, it will get the data asynchronously.
4. Once getting the response successfully, it make use of a for loop to iterate the images of album and related artist names.
5. In the for loop in last step, it will get the url and name, parse them as parameters into the creatAlbum function.
6. Inside creatAlbum function, it will dynamically append a new cover into the result div.

COMMENTS
This small project was a lot of fun to me, I will finish this project anyway, to make every cover clickable to play preview of tracks inside,I only use HTML, CSS, JavaScript, jQuery or Bootstrap, I'm not sure if I can use Handlebars JS, so I didn't, but I think it will be more efficient, and the code will be templated and organized better.



