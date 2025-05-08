# Buzzvel Front-End Technical Challenge 2025: uteach website
Nextjs website created as a Single Page Application for the education company uteach as part of Buzzvel's front-end technical challenge 2025.

## Instalation / Initialization
```npm install```: to install the required dependencies

```npm run dev```: to start the project in development mode. The website can then be accessed on ```localhost:3000```.

## Section components
Each section is a component on its own. Although not absolutely necessary, this makes the code more manageable and readable. All section components can be identified by their suffix ```-Section```. Therefore, the section components, in the order they appear on the page, are:
```IntroSection```, ```AppSection```, ```QuotesSection```, ```MeetSection```, ```CounterSection```, ```TestimonialsSection```, ```FeaturesSection```, ```JoinSection```, and ```MessageSection```.

## Other components
### Card
This component is a small card element showing a badge, a title, some text and a 'Take Lesson' button.

Props:

```badgeType``` [string]: this determines the style of the badge, as well as its text. Possible values are ```featured```, ```popular```, and ```new```. The values are case-sensitive. The badge shows a capitalized version of this prop. Other values are still shown and capitalized, but will be styled as ```new```.

```title``` [string]: the title at the top of the card.

```text``` [string]: the text in the card.

```linkHref``` [string]: the URL where clicking the button will takes. Default value is ```#```.

```responsive``` [boolean]: determines if the card with shrink for smaller screens. Default value is ```true```.

### CounterCard
This component shows counting information, with an icon, a number, a subtitle.

Props:

```icon``` [HTMLElement]: any HTML Element to be shown as the icon. In this project, SVGs were used.

```value``` [string]: the text representing the accounted number. A string is used so that values such as '1M' or formatted values such as '1.000,00' can be used.

```text``` [string]: the subtitle shown under the number, explaining what the value refers to.

### Fader
This component is responsible for the fade in/slide in animation when it enters the viewport. Children elements will be animated.

Props:

```from``` [string]: the direction where the slide in starts from. Possible values are ```left``` and ```right```. Default value is ```right```.

### Footer
The footer component at the bottom of the page. This components only organizes and manages the footer element. There are no props.

### Navbar
The navigation bar at the top of the page. This component only organizes and manages the navigation bar. It automatically collapses its contents into a burger menu for small screens. There are no props.

### SliderCard
The cards used in the slider section. This component was used in the ```TestimonialsSection```.

Props:

```text``` [string]: the text on the card. In this project, it contains a testimonial.

```image``` [string]: the URL of the image to be shown. In this project, it shows a picture of the testimonial's author.

```author``` [string]: the name of the testimonial's author.

```occupation``` [string]: the text to be shown as the author's occupation.

### UnderlinedText
This is the underlined text shown in many of this project's titles. In this project, this component was used to inside ```<h2>``` tags to underline part of the text.

Props:

```text``` [string]: The text to be underlined.
