const sliderImages = [
    {
        id: '001',
        title: 'Первый слайд',
        image: './slider/001.jpg',
    },
    {
        id: '002',
        title: 'Второй слайд',
        image: './slider/002.jpg',
    },
    {
        id: '003',
        title: 'Третий слайд',
        image: './slider/003.jpg',
    },
]

const cards =[
    {
      "id": "01GQJPGWDXNM6N3AN4KFXWQ3F0",
      "image": "http://dummyimage.com/360x400.png/dddddd/000000",
      "title": "Редис",
      "about": "Пикантный вкус, хорошо сочетается с яйцами и будербродами.",
      "price": "149 ₽",
      "discount": "$1.24",
      "isNew": false,
      "isSale": false,
      "isHit": false
    },
    {
      "id": "01GQJPGWE0JH59AXCKZREWRRDK",
      "image": "http://dummyimage.com/360x400.png/5fa2dd/ffffff",
      "title": "Рукола",
      "about": "Благоприятно влияет на аппетит, кровообращение и состояние сосудов. Обладает острым вкусом. Дополнит пиццу или пасту.",
      "price": "89 ₽",
      "discount": "$4.99",
      "isNew": true,
      "isSale": true,
      "isHit": true
    },
    {
      "id": "01GQJPGWE4G79ENCH6Z9T960GQ",
      "image": "http://dummyimage.com/360x400.png/5fa2dd/ffffff",
      "title": "Подсолнечник",
      "about": "Насыщена полезными веществами, в том числе витамином Е и цинком. Обладает вкусом молодых семечек. Обычно добавляют в салаты и гарниры. Насыщена полезными веществами, в том числе витамином Е и цинком. Обладает вкусом молодых семечек. Обычно добавляют в салаты и гарниры.Насыщена полезными веществами, в том числе витамином Е и цинком. Обладает вкусом молодых семечек. Обычно добавляют в салаты и гарниры.",
      "price": "129 ₽",
      "discount": "$1.99",
      "isNew": false,
      "isSale": true,
      "isHit": false
    },
    {
      "id": "01GQJPGWE7T7DZX9BKRXZRW254",
      "image": "http://dummyimage.com/360x400.png/ff4444/ffffff",
      "title": "Горох",
      "about": "Богат фосфором, протеинами и клетчаткой. По вкусу сладковат, как молодой горошек. Превосходен в салатах, гарнирах, супах.",
      "price": "169 ₽",
      "discount": "$4.71",
      "isNew": false,
      "isSale": false,
      "isHit": true
    },
    {
      "id": "01GQJPGWE9WJAJAX1CHKEJ8TRT",
      "image": "http://dummyimage.com/360x400.png/ff4444/ffffff",
      "title": "Горчица",
      "about": "Благодаря перечному вкусу и тонкому аромату придает легкую остроту любым блюдам, свежим салатам и закускам. Отлично сочетается с рыбой и суши.",
      "price": "159 ₽",
      "discount": "$4.97",
      "isNew": false,
      "isSale": true,
      "isHit": false
    },
    {
      "id": "01GQJPGWECZBW8QPSB3GFGZ893",
      "image": "http://dummyimage.com/360x400.png/cc0000/ffffff",
      "title": "Дайкон",
      "about": "По вкусу эта микрозелень напоминает редьку, а по внешнему виду — редис. Отлично заменяет специи и наполняет рацион целым набором ценных витаминов и питательных веществ.",
      "price": "139 ₽",
      "discount": "$2.71",
      "isNew": true,
      "isSale": false,
      "isHit": true
    },
    {
      "id": "01GQJPGWEFQ25VQE8AC9PHQ30A",
      "image": "http://dummyimage.com/360x400.png/5fa2dd/ffffff",
      "title": "Lobaria kurokawae Yoshim.",
      "about": "Oth traum nondisp spondylolysis of 7th cervcal vert, init",
      "price": "$7.51",
      "discount": "$3.11",
      "isNew": false,
      "isSale": false,
      "isHit": true
    },
    {
      "id": "01GQJPGWEJBH915RASV6Z8GCVG",
      "image": "http://dummyimage.com/360x400.png/5fa2dd/ffffff",
      "title": "Calyptronoma Griseb.",
      "about": "Dislocation of distal end of left ulna",
      "price": "$9.12",
      "discount": "$2.03",
      "isNew": true,
      "isSale": false,
      "isHit": false
    },
    {
      "id": "01GQJPGWEM5JA7RAEHQKQJ3BVA",
      "image": "http://dummyimage.com/360x400.png/cc0000/ffffff",
      "title": "Trophis racemosa (L.) Urb.",
      "about": "Whole chromosome monosomy,nonmosaic (meiotic nondisjunction)",
      "price": "$7.38",
      "discount": "$2.37",
      "isNew": true,
      "isSale": false,
      "isHit": false
    },
    {
      "id": "01GQJPGWEQV5MCKPVYTMCP18B4",
      "image": "http://dummyimage.com/360x400.png/ff4444/ffffff",
      "title": "Buddleja asiatica Lour.",
      "about": "Struck by thrown, projected or falling object",
      "price": "$8.02",
      "discount": "$1.13",
      "isNew": false,
      "isSale": true,
      "isHit": false
    },
    {
      "id": "01GQJPGWETYS2XVC8BJMEHQT14",
      "image": "http://dummyimage.com/360x400.png/ff4444/ffffff",
      "title": "Trifolium lappaceum L.",
      "about": "Person injured wh brd/alit from aircraft, subs",
      "price": "$6.48",
      "discount": "$3.71",
      "isNew": true,
      "isSale": false,
      "isHit": false
    },
    {
      "id": "01GQJPGWEWS9VDJXR8W63PAXC3",
      "image": "http://dummyimage.com/360x400.png/5fa2dd/ffffff",
      "title": "Pulicaria dysenterica (L.) Bernh.",
      "about": "Greenstick fx shaft of left ulna, subs for fx w routn heal",
      "price": "$8.89",
      "discount": "$0.24",
      "isNew": false,
      "isSale": false,
      "isHit": false
    },
    {
      "id": "01GQJPGWEZHTDD2TES5X5XAAMC",
      "image": "http://dummyimage.com/360x400.png/ff4444/ffffff",
      "title": "Ribes erythrocarpum Coville & Leiberg",
      "about": "Underdosing of digestants",
      "price": "$7.27",
      "discount": "$1.09",
      "isNew": false,
      "isSale": false,
      "isHit": true
    },
    {
      "id": "01GQJPGWF2KNRDB169GQGVW4PB",
      "image": "http://dummyimage.com/360x400.png/ff4444/ffffff",
      "title": "Critonia P. Br.",
      "about": "Ped on sktbrd inj pick-up truck, pk-up/van, unsp, sequela",
      "price": "$6.06",
      "discount": "$3.82",
      "isNew": false,
      "isSale": true,
      "isHit": true
    },
    {
      "id": "01GQJPGWF4XDGYTVSKMR40FMQZ",
      "image": "http://dummyimage.com/360x400.png/cc0000/ffffff",
      "title": "Microlepia strigosa (Thunb.) C. Presl",
      "about": "Open bite of unsp great toe w/o damage to nail, subs encntr",
      "price": "$8.03",
      "discount": "$4.31",
      "isNew": false,
      "isSale": true,
      "isHit": true
    },
    {
      "id": "01GQJPGWF76HQ7NBPEQ7S1A1Q2",
      "image": "http://dummyimage.com/360x400.png/5fa2dd/ffffff",
      "title": "Leptosiphon aureus (Nutt.) J.M. Porter & L.A. Johnson",
      "about": "Inj unsp musc/fasc/tend at wrs/hnd lv, left hand, subs",
      "price": "$7.43",
      "discount": "$3.20",
      "isNew": true,
      "isSale": false,
      "isHit": true
    },
    {
      "id": "01GQJPGWF9CWXFVA9TARY8JM5A",
      "image": "http://dummyimage.com/360x400.png/5fa2dd/ffffff",
      "title": "Eriophorum ×medium Andersson",
      "about": "False labor before 37 completed weeks of gest, third tri",
      "price": "$7.27",
      "discount": "$3.76",
      "isNew": false,
      "isSale": true,
      "isHit": true
    },
    {
      "id": "01GQJPGWFCESG3DTZZMA8EG82V",
      "image": "http://dummyimage.com/360x400.png/cc0000/ffffff",
      "title": "Vinca herbacea Waldst. & Kit.",
      "about": "Unsp pedl cyclst injured in clsn w 2/3-whl mv nontraf, init",
      "price": "$9.74",
      "discount": "$1.93",
      "isNew": true,
      "isSale": false,
      "isHit": true
    },
    {
      "id": "01GQJPGWFFDAR0QRFWDQ1CSGZG",
      "image": "http://dummyimage.com/360x400.png/cc0000/ffffff",
      "title": "Thelenella inductula (Nyl.) H. Mayrh.",
      "about": "War op involving explosion of marine weapons, milt, sequela",
      "price": "$9.83",
      "discount": "$2.90",
      "isNew": true,
      "isSale": false,
      "isHit": false
    },
    {
      "id": "01GQJPGWFHX7YYRG5HGHB38S1X",
      "image": "http://dummyimage.com/360x400.png/ff4444/ffffff",
      "title": "Lupinus odoratus A. Heller",
      "about": "Passenger in 3-whl mv injured in clsn w hv veh in traf, subs",
      "price": "$6.78",
      "discount": "$4.94",
      "isNew": true,
      "isSale": false,
      "isHit": false
    }
  ]

export { sliderImages, cards }