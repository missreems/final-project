![ga_cog_large_red_rgb](https://cloud.githubusercontent.com/assets/40461/8183776/469f976e-1432-11e5-8199-6ac91363302b.png)

# Animalia


## Intro
Animalia is my final project created whilst studying at General Assembly in the Software Engineering Immersive. This is a full-stack application using React for the front-end, Python Django for the back-end and serving my data via a Postgres database.

#
## Motivation
For this application, I decided to create an animal cyclopedia with a focus on animal conservation. I chose this subject for my project as I have a deep interest for animals.

Many of my ideas were inspired from my project research like the [National Geographic Wild](https://www.nationalgeographic.com/animals/facts-pictures/) website, as well as the [WWF](https://www.worldwildlife.org/species) website.

#
## Table of Contents
- [Tech Used](##tech-used)
- [Deployment](##deployment)
- [Getting Started](##getting-started)
- [Game Architecture](##game-architecture)
- [Planning](##planning)
- [Challenges](##challenges)
- [Future Features](##future-features)
- [Creator](##creator)


#
## Tech used
* Postgres
* Python
    * Django
* JavaScript
    * React
    * Axios
* SAAS
* HTML5


#
## Deployment
This web app is deployed on Heroku and it can be found here: HEROKU LINK


## Getting Started
Use the clone button to download the source code. In the terminal enter the following commands:

```
<!-- To install all the packages: -->
$ yarn
<!-- Create a shell: -->
$ pipenv shell
<!-- In your localhost, run the front-end: -->
$ yarn serve:front
<!-- In your localhost, run the back-end: -->
$ yarn serve:back
```
Check the console for any issues and if there are check the package.json for any dependancies missing

#
## Game Architecture

### Animalia Homepage
This page highlights the core aspects of this website, like the newest content available or upcoming content like the Collections section. As this application is based on animals, animal classification links are present at the bottom of the home page.
![Animalia Home Page](assets/home.png)

### Habitats
This page obtains the API data for habitats and displays it through two pages:
* Index page - displays all the habitats
* Show page - shows each habitat with relevant information, and links to the animals living in the specific habitat
![Habitat Index Page](assets/habitat-index.png)

### Animals
This page obtains the API data for animals and displays it through two pages:
* Index page - displays all the animals and can be filtered via alphabet buttons, which refer to the initial of the animal name
* Show page - shows each animal with relevant information, and links to the animals's habitat
![Animal Index Page](assets/animal-index.png)

### Database
A large aspect of this application is the creation of all the data, instead of using an external API. There are many models used in the backend and each model is conencted to the other models in various ways.

#
## Planning
### Back-end
The complexity of my project lies in the many entwined relationships created. I made a mindmap to show the one-to-many and many-to-many relationships between all my models, to simplify the contents of the serializers:
[MINDMAP]

### Front-end
Some hand-drawn wireframes were made to highlight the user experience of my application:
[HAND-DRAWN WIREFRAMES]

#
## Challenges
This was my first time working with Django and it was quite a learning curve for me as a lot of the functionality is covered by Django. As I started to understand the relationships between the models, the serializers, the views and the urls, Django became more and more simpler to use as I created my application. Also, this is my first project in which I have used Python as a key programming language and I really enjoyed the challenge of coding in a new language after using JavaScript in my previous projects and throughout my studying at General Assembly.

One of the key challenges I faced was creating the 'animal' model as it contained many fields, some which were connected via one-to-many and many-to-many relationships.
![Animal Model in the Back-End](./assets/animal-model.png =410x600)

An additional challenge I faced was filtering my Animal Index page to show the animals who's name initial matched the letter chosen by the user.
![Animal Filtering Function in the Front-End](assets/animal-filter-function.png =470x500)

#
## Future Features
In the future, I hope to add the additional models in my back-end like collections and the Red List scale for endangered animals, as well as creating web pages for these models. I'd also like to add additional components on React for my models like classifications, as well as connecting all webpages together.

#
## Creator
Reema Patel