import menuList from "./menu-list";

export default function createMenuPage(){
    const main = document.getElementById('main');

    main.innerHTML = `
    
    <section id="menu" class="section">
        <div class="container">
            <div class="title-center">
                <h2 >OUR MENU</h2>
            </div>
            <div class="wrapper row wrap-menu">
                <ul id="list-menu" class="list-menu">
                    <li id="All" class="active">All</li>
                    <li id="Burgers">Burgers</li>
                    <li id="Chillis" >Chillis</li>
                    <li id="Pastas" >Pastas</li>
                    <li id="Rice" >Rice</li>
                    <li id="Salads" >Salads</li>
                    <li id="Drinks" >Drinks</li>
                </ul>
            </div>
            <div class="wrapper menu-items" id="menu-items">
            </div>
        </div>
    </section>
    
    <footer id="footer">
        <p>
            Copyright &copy; All rights reserved.
            <a href="https://github.com/kizzylion/yokizzy-restaurant"><i class="fa-brands fa-github"></i> Kizzylion</a>
        </p>
    </footer>
    `
    
    const menuItems = document.getElementById('menu-items');

    const menuTabs = document.querySelectorAll('.list-menu li');

    menuTabs.forEach((elem) => {
        elem.addEventListener('click', function () {
            menuTabs.forEach((tab) => {
                tab.classList.remove('active');
            });
            this.classList.add('active');
            generateTabItems(this, menuItems);
        });
    });

  
    

    //predefined filter functions
    
    const filter = {
        ['All']: () => true,
        ['Burgers']: (record) => record.group === 'Burgers',
        ['Chillis']: (record) => record.group === 'Chillis',
        ['Pastas']: (record) => record.group === 'Pastas',
        ['Rice']: (record) => record.group === 'Rice',
        ['Salads']: (record) => record.group === 'Salads',
        ['Drinks']: (record) => record.group === 'Drinks',
    }

    const generateTabItems = (elem, tabContent) => {
        const filterName = elem.id;

        const filterFunction = filter[filterName];

        const mappedRecords = menuList
        .filter(filterFunction)
        .map(
            (record) =>{
                return `
                    <div class="item">
                        <img src="${record.pic}" alt="${record.alt}" />
                        <h3 class="title">${record.title}</h3>
                        <p class="description">${record.description}</p>
                        <footer class="price">${record.price}</footer>
                    </div>
                `
            }
        );
        tabContent.innerHTML = mappedRecords.join("");
    }

    let activeLink = document.querySelector('.list-menu .active');
    
    generateTabItems(activeLink, menuItems)


}