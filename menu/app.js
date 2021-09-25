const menu = [
    {
      id: 1,
      title: "buttermilk pancakes",
      category: "breakfast",
      price: 15.99,
      img: "./images/item-1.jpeg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      title: "diner double",
      category: "lunch",
      price: 13.99,
      img: "./images/item-2.jpeg",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 3,
      title: "godzilla milkshake",
      category: "shakes",
      price: 6.99,
      img: "./images/item-3.jpeg",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 4,
      title: "country delight",
      category: "breakfast",
      price: 20.99,
      img: "./images/item-4.jpeg",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 5,
      title: "egg attack",
      category: "lunch",
      price: 22.99,
      img: "./images/item-5.jpeg",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      title: "oreo dream",
      category: "shakes",
      price: 18.99,
      img: "./images/item-6.jpeg",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: 7,
      title: "bacon overflow",
      category: "breakfast",
      price: 8.99,
      img: "./images/item-7.jpeg",
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      id: 8,
      title: "american classic",
      category: "lunch",
      price: 12.99,
      img: "./images/item-8.jpeg",
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id: 9,
      title: "quarantine buddy",
      category: "shakes",
      price: 16.99,
      img: "./images/item-9.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
  ];

  const catergoryMenu = ['all'];
  let activeCategory = 'all';
  menu.forEach(item => {
    if(!catergoryMenu.includes(item.category)){
      catergoryMenu.push(item.category);
    }
  })

  const menuButton = document.querySelector('.menu-btn');
  const menuWrapper = document.querySelector('.menu-wrapper');

  window.addEventListener('DOMContentLoaded', () => {
      catergoryMenu.forEach(item => {
        const newMenuButton = document.createElement('button');
        newMenuButton.classList.add('btn');
        if (item == 'all') {
          newMenuButton.classList.add('btn-active');
        }
        newMenuButton.textContent = item;
        menuButton.appendChild(newMenuButton);
      })
      
      const btn = document.querySelectorAll('.btn');
      btn.forEach(b => b.addEventListener('click', (e) => {
        btn.forEach(i => {
          i.classList.remove('btn-active');
        })
        if (!e.target.classList.contains('btn-active')) {
          e.target.classList.add('btn-active');
          // console.log(e.target.textContent);
          activeCategory = e.target.textContent;
          menuWrapper.innerHTML = getMenu().join("");
        }
      }))
      menuWrapper.innerHTML = getMenu().join("");
  })

  function getMenu() {
    return menu.map(item => {
      const {id, category, title, price, img, desc} = item;
      if (category == activeCategory || activeCategory == 'all') {
      return `
      <div class="items-container">
      <img src=${img} alt=${title} class="items-img">
      <div class="items-wrapper">
      <div class="items-head">
      <h3 class="items-title">${title}</h3>
      <h4 class="items-price">$${price}</h4>
      </div>
      <p class="items-desc">${desc}</p>
      </div>
      </div>
      `
      }
    })
  }