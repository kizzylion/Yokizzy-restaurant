import tandooriChicken from './img/menu-img/Tandoori-Chicken-Wings.jpg';
import yakiNoodle from './img/menu-img/Yaki-Udon-noddle.jpg';
import sobaNoodle from './img/menu-img/Sansai-Soba-Noodle-Soup.jpg';
import chickenNugget from './img/menu-img/Chicken-Nuggets.jpg';
import kimchiRamen from './img/menu-img/Vegan-Kimchi-Ramen.jpg';
import snail from './img/menu-img/Peppered-Snail.jpg';



const menuItems = [
    {
        special:true,
        title: 'Tandoori Chicken',
        description: 'Delicious Indian appetizer, marinated chicken wings.',
        pic: tandooriChicken,
        alt:"Picture of tandoori chicken wings",
        price:"N 15,000"
    },
    {
        special:true,
        title: 'Yaki Udon Noodles',
        description: 'fresh spring veggies, crispy tofu, bamboo shoots, and mushrooms',
        pic:yakiNoodle,
        alt:"Picture of Yaki udon noodles",
        price:"N 20,000"
    },
    {
        special:true,
        title: 'Sansai Soba Noodle',
        description: 'Veggies, crispy tofu, bamboo shoots, and mushrooms in a noodles',
        pic: sobaNoodle,
        alt:"Picture of Sansai soba noodle soup",
        price:"N 25,000"
    },
    {
        special:true,
        title: 'Vegan Chicken Nuggets',
        description: 'Golden and crispy outside and firm and meaty inside, with  umami flavor',
        pic: chickenNugget,
        alt:"Picture of Vegan Chicken Nugget",
        price:"N 10,000"
    },
    {
        special:true,
        title: 'Vegan Kimchi Ramen',
        description: 'Broth, mushrooms, bamboo shoots, seaweed, with vegan butter',
        pic: kimchiRamen,
        alt:"Picture of Vegan kimchi ramen",
        price:"N 45,000"
    },
    {
        title: 'Pepper Snails',
        description: 'Herb seasoned snails with glazed capsicum and plantains in Naija pepper sauce and chips',
        pic: snail,
        alt:"Picture of Pepper snail",
        price:"N 15,000"
    },
]

export default menuItems