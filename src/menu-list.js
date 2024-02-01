import tandooriChicken from './img/menu-img/Tandoori-Chicken-Wings.jpg';
import yakiNoodle from './img/menu-img/Yaki-Udon-noddle.jpg';
import sobaNoodle from './img/menu-img/Sansai-Soba-Noodle-Soup.jpg';
import chickenNugget from './img/menu-img/Chicken-Nuggets.jpg';
import kimchiRamen from './img/menu-img/Vegan-Kimchi-Ramen.jpg';
import snail from './img/menu-img/Peppered-Snail.jpg';
import chilliChicken from './img/menu-img/chilli-chicken.jpeg';
import potatoesChilli from './img/menu-img/PotatoesChilli.jpeg';
import chickenManchurian from './img/menu-img/ChickenManchurian.jpeg';
import VegBurger from './img/menu-img/VegBurger.jpeg';
import goumetBurger from './img/menu-img/goumetBurger.jpeg';
import jeeraRice from './img/menu-img/jeeraRice.jpeg';
import chopperRice from './img/menu-img/Chopper-Rice.jpeg';
import paneerRice from './img/menu-img/paneerRice.jpeg';
import chickenCaesar from './img/menu-img/chickenCaesar.jpeg';
import tuscanArtichocke from './img/menu-img/tuscanArtichocke.jpeg';
import strawberryIcedTea from './img/menu-img/strawberryIcedTea.jpeg';
import mangoBerrySmoothie from './img/menu-img/mangoBerrySmoothie.jpeg';


const menuItems = [
    {
        special:true,
        title: 'Tandoori Chicken',
        description: 'Delicious Indian appetizer, marinated chicken wings.',
        pic: tandooriChicken,
        alt:"Picture of tandoori chicken wings",
        price:"N 15,000",
        group: "Pastas", 
    },
    {
        special:true,
        title: 'Yaki Udon Noodles',
        description: 'Fresh spring veggies, crispy tofu, bamboo shoots, and mushrooms',
        pic:yakiNoodle,
        alt:"Picture of Yaki udon noodles",
        price:"N 20,000",
        group: "Pastas",
    },
    {
        special:true,
        title: 'Sansai Soba Noodle',
        description: 'Veggies, crispy tofu, bamboo shoots, and mushrooms in a noodles',
        pic: sobaNoodle,
        alt:"Picture of Sansai soba noodle soup",
        price:"N 25,000",
        group: "Pastas",
    },
    {
        special:true,
        title: 'Vegan Chicken Nuggets',
        description: 'Golden and crispy outside and firm and meaty inside, with  umami flavor',
        pic: chickenNugget,
        alt:"Picture of Vegan Chicken Nugget",
        price:"N 10,000",
        group: "Burgers",
    },
    {
        special:true,
        title: 'Vegan Kimchi Ramen',
        description: 'Broth, mushrooms, bamboo shoots, seaweed, with vegan butter',
        pic: kimchiRamen,
        alt:"Picture of Vegan kimchi ramen",
        price:"N 45,000",
        group: "Pastas",
    },
    {
        title: 'Pepper Snails',
        description: 'Herb seasoned snails with glazed capsicum and plantains in Naija pepper sauce and chips',
        pic: snail,
        alt:"Picture of Pepper snail",
        price:"N 15,000",
        group: "Chillis",
    },
    {
        title: 'Chilli Chicken',
        description: 'Soy sauce, boneless chicken, green thai, honey, rice vinegar',
        pic: chilliChicken,
        alt:"Picture of Chicken chilli",
        price:"N 8,000",
        group: "Chillis",
    },
    {
        title: 'Potatoes Chilli',
        description: 'Coated in a sweet and spicy sauce that will make your taste buds dance with joy',
        pic: potatoesChilli,
        alt:"Picture of Potatoes chilli",
        price:"N 10,000",
        group: "Chillis",
    },
    {
        title: 'Chicken Manchurian',
        description: 'Made with pan-fried chicken chunks and seasoned with a fiery sauce',
        pic: chickenManchurian,
        alt:"Picture of Chicken Manchurian",
        price:"N 12,000",
        group: "Chillis",
    },
    {
        title: 'Veg Burger',
        description: 'Made with chickpeas/Garbanzo beans, multigrain flour and veggies like carrot.',
        pic: VegBurger,
        alt:"Picture of Veggie Burger",
        price:"N 5,000",
        group: "Burgers",
    },
    {
        title: 'Goumet Burger',
        description: 'Fresh herbs, mushrooms and luxurious truffle mayo.',
        pic: goumetBurger,
        alt:"Picture of Goumet Burger",
        price:"N 6,500",
        group: "Burgers",
    },
    {
        title: 'Jeera Rice',
        description: 'Made using rice, cumin seeds, and a few other spices.',
        pic: jeeraRice,
        alt:"Picture of Jeera Rice",
        price:"N 6,500",
        group: "Rice",
    },
    {
        title: 'Chicken Chopper',
        description: 'A delicious dish made up of egg fried rice and chicken curry.',
        pic: chopperRice,
        alt:"Picture of Chicken Chopper Rice",
        price:"N 9,500",
        group: "Rice",
    },
    {
        title: 'Paneer Fried Rice',
        description: 'Stir-fried with paneer, sauces, and lots of crunchy veggies.',
        pic: paneerRice,
        alt:"Picture of Paneer Fried Rice",
        price:"N 12,500",
        group: "Rice",
    },
    {
        title: 'Chicken Caesar',
        description: 'hearty and delicious dish that is packed with all your favorite flavors from a caser salad!',
        pic: chickenCaesar,
        alt:"Picture of Chicken Caesar Salad",
        price:"N 15,500",
        group: "Salads",
    },
    {
        title: 'Tuscan Artichoke Salad',
        description: 'Filled with artichoke hearts, chickpeas, fresh herbs, & ripe tomatoes',
        pic: tuscanArtichocke,
        alt:"Picture of Tuscan Artichoke Salad",
        price:"N 10,500",
        group: "Salads",
    },
    {
        title: 'Strawberry Iced Tea',
        description: 'Perfect combination of rooiboss tea, vanilla and strawberries',
        pic: strawberryIcedTea,
        alt:"Picture of Strawberry Iced Tea",
        price:"N 4,500",
        group: "Drinks",
    },
    {
        title: 'Mango Berry Smoothie',
        description: 'Delicious flavors of juicy mango and sweet berries',
        pic: mangoBerrySmoothie,
        alt:"Picture of Mango Berry Smoothie",
        price:"N 5,500",
        group: "Drinks",
    },
]

export default menuItems