![ga_cog_large_red_rgb](https://cloud.githubusercontent.com/assets/40461/8183776/469f976e-1432-11e5-8199-6ac91363302b.png)

# Animalia


## Intro
Animalia is my final project created whilst studying at General Assembly in the Software Engineering Immersive. This is a full-stack application using React for the front-end, Python Django for the back-end and serving my data via a Postgres database.


## Motivation
Since starting my first project, I have gained lots of knowledge and worked on lots of small projects gathering coding experience. For this application, I decided to create an animal encyclopedia with a focus on animal conservation. I chose this subject for my project as I have a deep interest for animals.

Many of my ideas were inspired from my project research like the [National Geographic Wild](https://www.nationalgeographic.com/animals/facts-pictures/) website, as well as the [WWF](https://www.worldwildlife.org/species) website.


## Table of Contents
- [Deployment](##deployment)
- [Tech Used](##tech-used)
- [Getting Started](##getting-started)
- [Game Architecture](##game-architecture)
- [Challenges & Future Improvements](##challenges-&-future-improvements)
- [Creator](##creator)


## Deployment
This web app is deployed on Heroku and it can be found here: HEROKU LINK


## Tech used
* Postgres
* Python
    * Django
* JavaScript
    * React
    * Axios
* SAAS
* HTML5


## Getting Started
Use the clone button to download the source code. In the terminal enter the following commands:

```
<!-- To install all the packages listed in the package.json: -->
$ yarn
<!-- Run the app in your localhost: -->
$ yarn start
<!-- Check the console for any issues and if there are check the package.json for any dependancies missing  -->
```


## Game Architecture

Jelly Invaders is a game where the user moves the player and attempts to shoot all the moving jellies on the 10x10 grid before it reaches the bottom.

![readme-one](assets/screenshots/starting-page.png)

The game currently has one wave of jellies.

![readme-one](assets/screenshots/jellies.png)


When the game begins, the computer releases the wave of jellies onto the grid. The jellies move across the grid from left to right, when it reaches the end of each line on the grid the jellies will move from left to right on the next line until they reach the red line indicated on the grid.

<!-- screenshot of red line -->

The player's sprite is at the bottom of the grid, it is allowed to move left and right via the arrow keys, one cell at a time. The player can shoot the jellies via the 'V' key and releases a bullet only one at a time. The jellies move slighlty slower than the speed of the bullet.

After every bullet is shot by the player, the game checks for a 'win' by verifying if any jellies are left. If the result 'false' is returned from the length of the array of jellies, the player wins.

The game can be won by shooting all the jellies on the grid, else the screen will show the sign 'Game Over' if any jelly reaches the red line.

![readme-one](assets/screenshots/winning-page.png) ![readme-one](assets/screenshots/losing-page.png)

An example of the function...used for ... :
<!-- screenshot of code for the function chosen to show -->


## Challenges & Future Improvements
The main challenge of this project was creating the game logic for each feature. Each feature introduced in the game allowed me to understand a little bit more about how to piece together code to produce a fully-working feature in the game. Also, connecting features together so they all worked well together was quite challenging.

<!-- EXAMPLE - This strategy was effective as it allowed to easily debug which columns were being played on correctly or not. However, the code is quite long and it makes Squidward's move reliant on Spongebob's last one rather then looking at the whole game so far.-->

In the future, I hope to refactor my key functions so the game works smoothly. I'd like to give the jellies the functionality of shooting at the player and adding an additional condition for losing the game.


## Creator
Reema Patel
<!--  - Link to first project here: website link  -->