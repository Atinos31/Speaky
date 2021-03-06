<h1 align="center">Speaky!</h1>
<h2 align="left"> Interactive  Frontend Development  Milestone Project 2 for Code Institute.</h2>



-*Display from different screen shots![display from different screen shots](assets/images/mockup4.png)*
*Contact page mockup![display from different screen shots](assets/images/contactm2.png)*

[👁 View the live project here.](https://atinos31.github.io/Speaky/)
---
This is a text to speech application created mainly for non verbal children with learning issues.
Its main goal is to help families to better understand the basic needs and feeling of their children in real time thereby simplifying their daily lives.


* I used SpeechSynthesis interface of the Web Speech API to retrieve information about the synthesis voices available on the device.

> Speech synthesis is accessed via the SpeechSynthesis interface, a text-to-speech component that allows programs to read out their text content (normally via the device's   default speech synthesizer.) Different voice types are represented by SpeechSynthesisVoice objects, and different parts of text that you want to be spoken are represented by  SpeechSynthesisUtterance objects. You can get these spoken by passing them to the SpeechSynthesis.speak() method.
> 
### Browser support
Support for Web Speech API speech synthesis is still getting there across mainstream browsers, and is currently limited to the following:

Firefox desktop and mobile support it in Gecko 42+ (Windows)/44+, without prefixes, and it can be turned on by flipping the media.webspeech.synth.enabled flag to true in about:config.

Firefox OS 2.5+ supports it, by default, and without the need for any permissions.

Chrome for Desktop and Android have supported it since around version 33, without prefixes.
- **This app uses the web speech Api which is experimental and may not fully work in some versions of certain browsers**
 
 
_Click [Here](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis) for more information._


 


# Table of contents

- [UX](#ux)
  - [Website Owner Business goals](#website-owner-business-goals)
  - [User Goals](#user-goals)
     - [New User Goals](#new-user-goals)
     - [Returning User Goals](#returning-user-goals)
     - [Website Owner Business Goals](#website-owner-business-goals)
   - [User Stories](#user-stories)
   - [Website Structure](#website-structure)
   - [Wireframes](#wireframes)
   - [Surface](#surface)
    - [Color Scheme](#colorscheme)
    - [Typograghy](#typography)
    - [Images](#images)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Testing](#testing)
    - [Functionality](#functionality)
    - [Compartibility](#compartibility)
    - [Code Validation](#code-validation)
    - [User Stories Testing](#user-stories-testing)
    - [Known Bugs](#known-bugs)
    - [Perfomance Testing](#performance-testing)
- [Deployment](#deployment)
- [Credits](#credits)
- [Aknowledgements](#aknowledgements)

# [UX](#ux)

## [Website Owner Business Goals](#website-owner-goals)
- The main reason of creating this app is to help non verbal special needs children communicate with their friends and family in an easy way about their basic needs and feelings in real time.
- Users can find useful descriptive content to help them express their feelings.
- Users can interact by touching a photo.
- Users can get feedback in form of a voice expressing what they need.
- Users can choose their preferred voice.
- Users can type in their feelings ,needs and wants.

## [User Goals](#user-goals)

### [New User Goals](#new-user-goals)
- As a first time visiter, i want to be able to find relevant information fast and navigate easily to find necessary content.
- As a first time visitor i want to be able to understand the main role of the app.
- As a first time user i want to be able to choose the voice that suits me.
- As a first time user i want to be able to write down my emotions.
- As a first time user i wan to be able to hear  voice feedback after typing in my needs.
- As a first time user i wan to be able to choose any photo to communicate my needs in real time.


### [Returning User Goals](#returning-user-goals)

- As a returning visitor i want to be able to leave feedback regarding what improvements could be implemented and what i like about the app.

## [Website Structure](#website-structure)
  - The website is designed to be easy to navigate and user friendly on all device types but its mainly designed for  mobile and tablettes.
  - Users can  can easily interact  using the buttons and selecting images.
  - users can type in their feeling and emotions in real time.
  - Users can leave feedback on what they liked and what they could propose to be improved on.

## [Website Owner Business Goals](#website-owner-business-goals)

   - Create responsive UI with picture buttons
   - Speaks the text when button clicked
   - Drop down custom text to speech modal to choose voices and accents.
   - Speaks the text typed in
   - Change voices and accents


## [Wireframes](#wireframes)

As part of the design process, before starting the project i made initial wireframes using balsamique. Creating these wireframes helped me plan the basic structure and arrangement of the features for the app.
> there are some slight changes on the real site to improve the user experience.
- Mobile wireframe ![mobile](assets/wireframes/mobile.png)
- Tablette wireframes![tablette](assets/wireframes/tablette1.png)
-  Desktop wireframe![desktop](assets/wireframes/desktop1.png)
-  Contact wireframe![desktop](assets/wireframes/contact5.png)




## [Surface](#surface)
 A simple clean design with easy to use buttons to handle the navigation throughout the app.


 #### [Color Scheme](#colorscheme)
 * I chose to go with a subtle  but fresh color scheme that is easy on the eyes.
![colour scheme](assets/images/colorscheme.jpg)

## [Typograghy](#typography)
 * The main font used throughout the site is 'Lato'. The font is clean and elegant, making it a good choice for web design.

- I have used the 'Abril+Fatcae' font for titles and headers all over the site.
- Kalam font comes close to a hand written font so i used for textarea in the main page and for textarea nad input fields in the contact us page.
- Sans Serif is set as the fallback font if for any reason the main fonts aren't being imported onto the site correctly.

         
```html
    <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Lato&family=Kalam:wght@400&display=swap">

```

### [Images](#images)
 All images used are from [pixabay.com](https://pixabay.com/) and have been compressed using [tinypng.com](https://tinypng.com/)


# [Features](#features)
   
   * A user-friendly interface with easy navigation throughout the site
   * Attractive, minimalistic design with visuals and information presented clearly and concisely.
   * A button to choose voices
   * A button for text input to be converted to speech.
   * Easily readable fonts and simple navigation throughout the site.
   * Brand logo to link back to the homepage.

  
- **Buttons**
    - Clear interactive buttons used for a effortless user journey.

## Navigation Bar 
* Navigation Scheme On the left side there is a logo and it can be used a nav link to the home section.
* The toggle button  for users to choose voice is on the right top of the page.

## Main 
### The main are consists of two sections:

 #### 1.Type section
  - In this section , for the children that can write, they may type their emotions, feelings and wants in real time . As i could not include all the imaginable feelings wants and emotions. i thought it best to include this section.

#### 2. Image, text section
  - In this section, its more to do with visualisation. the child is able to choose what they feel or want , and in return a voice feedback is played therby the parent can understand what they need.
## Footer
 The footer is positioned at the bottom of the page and it contains:

  * Contact us button - that opens with a form for users to provide feeback.
  * Social media icons that opens on a separate page.
  * Copyright with a github link in that leads to a 404 error page.


## Future Features
1. In the future , the app may have different languages implemented.

2. find a well tested technology to use that is more compatible with several browsers and devices.

3. Add more images with slide animation.

## [Technologies Used](#technologies-used)
### Languages Used

- [HTML5](https://en.wikipedia.org/wiki/HTML5)
- [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
- [JavaScript](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)



### Frameworks, Libraries & Programs Used

1. [Bootstrap 4.4.1:](https://getbootstrap.com/docs/4.4/getting-started/introduction/)
    - Bootstrap was used to assist with the responsiveness and styling of the website.
2.[jQuery](https://code.jquery.com/) 
    - used jquery to simply code used in emailjs file.
3. [Google Fonts:](https://fonts.google.com/)
    - Google fonts were used to import the 'Fatface & Lato Web' font into the style.css file which is used on all pages throughout the project.
4. [Font Awesome:](https://fontawesome.com/)
    - Font Awesome was used For website logo to add icons for aesthetic and UX purposes.
5. [GitHub:](https://github.com/)
    - GitHub is used to store the projects code after being pushed from Git.
6. [Balsamiq:](https://balsamiq.com/)
    - Balsamiq was used to create the wireframes in the beginning of the design process.
7. [canva](https://www.canva.com/)
    - Canva was used to create the color scheme.
8. [Vsc](https://www.canva.com/)
    - visual studio code was used as a code editor
9. [hover min css](https://ianlunn.github.io/Hover/)
   - hover min css was used as a hover effect on the social links in the footer.
10. [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis)
    - To handle voice data
11. [am i responsive](http://ami.responsivedesign.is/)
    - This was used to generate the responvie mockups.
12. [Email Js](https://www.emailjs.com/)
    - To send emails using client-side technology .
  
# [Testing](#testing)
  ## [Functionality Testing](#functionality-testing)
  
   -  The app was tested on Microsoft Edge, Google Chrome, mozilla firefox.
   - Tested for responsiveness on  various devices iphone5,iphone 6/7/8 plus ,ipad,ipad mini ,Nexas X5/X6   and PIXELS, runs fine.
   -  Friends  were asked to review the app and documentation to point out any bugs and user experience issues.
   
  ## [Compartibility Testing](#compartibility-testing)
  - Tested on Microsoft Edge, runs very well.
  - Works fine on Google chrome and mozilla firefox.
  - Tested on iphone8 and internet explorer-not so compatible.

  ## Code Validation
   The W3C Markup Validator and W3C CSS Validator Services were used to validate every file of the project to ensure there were no syntax errors in the project.

   -   [W3C Jigsaw html validator](http://jigsaw.w3.org/css-validator/check/referer (for HTML/XML document only))  ![passed Results](assets/images/index.png) 
   -   [W3C CSS Validator](http://jigsaw.w3.org/css-validator/check/referer (for HTML/XML document only)) ![passed Result](assets/images/css.png)
   -   [Jslint](https://www.jslint.com/) - [no major warnings]()

   ### [User stories testing](#user-stories-testing)
   - A user can choose the preferred voice to use with the app.
   - A user can type their emotion and in return get an audio feeback.
   - A user can tap on the images and in return get an audio feedback with each specific image.
   - A user may leave us some feedback .
  ### [Performance Testing](#performance-testing)
   - I ran [lighthouse](https://developers.google.com/web/tools/lighthouse/) tool to check for performance, accesibility, SEO and best paractices.
   ![lighthouse report](assets/images/lighthouse-report.png)


### [Known Bugs](#known-bugs)
 - submit button still needs to be reconfigured *solved*
 - responsiveness on desktop size screens.*solved*
 - choose voice btn/toggle btn and speak btn doesnt work on iphone8
 - confirmation pop up message after form validation and submit btn pressed, modal container used *solved*
 - onvoiceschanged not well incoporatated with the images and type area sections.
# [Deployment](#depployment)

   ### GitHub Pages

    The project was deployed to GitHub Pages using the following steps...

    1. Log in to GitHub and locate the [Speaky](https://github.com/Atinos31/Speaky)
    2. At the top of the Repository (not top of page), locate the "Settings" Button on the menu.
    3. Scroll down the Settings page until you locate the "GitHub Pages" Section.
    4. Under "Source", click the dropdown called "None" and select "Master Branch".
    5. The page will automatically refresh.
    6. Scroll back down through the page to locate the now published site [link](https://github.com/Atinos31/Speaky) in the "GitHub Pages" section.

  ### Forking the GitHub Repository

   By forking the GitHub Repository we make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original repository by   using the following steps...

    1. Log in to GitHub and locate the [Speaky](https://github.com/Atinos31/Speaky)
    2. At the top of the Repository (not top of page) just above the "Settings" Button on the menu, locate the "Fork" Button.
    3. You should now have a copy of the original repository in your GitHub account.

   ### Making a Local Clone

    1. Log in to GitHub and locate the [Speaky](https://github.com/Atinos31/Speaky)
    2. Under the repository name, click "Clone or download".
    3. To clone the repository using HTTPS, under "Clone with HTTPS", copy the link.
    4. Open Git Bash
    5. Change the current working directory to the location where you want the cloned directory to be made.
    6. Type `git clone`, and then paste the URL you copied in Step 3.

```
$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
```

    7. Press Enter. Your local clone will be created.

```
$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
> Cloning into `CI-Clone`...
> remote: Counting objects: 10, done.
> remote: Compressing objects: 100% (8/8), done.
> remove: Total 10 (delta 1), reused 10 (delta 1)
> Unpacking objects: 100% (10/10), done.
```

Click [Here](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository#cloning-a-repository-to-github-desktop) to retrieve pictures for some of the buttons and more detailed explanations of the above process.

## [Credits](#credits)
 
 * I used code institute student template to begin this project[ gitpod full template](https://github.com/Code-Institute-Org/gitpod-full-template)

### Code

-    [W3school tutorials](https://www.w3schools.com/default.asp)

-    [StackOverflow posts](https://stackoverflow.com) 

-   [Bootstrap4](https://getbootstrap.com/docs/4.4/getting-started/introduction/): Bootstrap Library used throughout the project mainly to make site responsive using the Bootstrap Grid System.



### [Acknowledgements](#acknowledgements)

-   My Mentor for continuous helpful feedback.
-   Full stack Wattsapp group for the positive feedback and encouragement.
-   Tutor support for encouraging me to look for the right solutions.
-   Peer code review chanel on Slack for constructive criticism.
