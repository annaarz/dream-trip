const profileBlock = document.querySelector('.profile-block');
const menuButton = document.querySelector('.button-menu');
const menu = document.querySelector('.menu-box');
const register = document.querySelector('.register');
const linkProfile = document.querySelector('.link');
const signIn = document.querySelector('.signIn');
const regPage = document.querySelector('.reg-page')
const regIn = document.querySelector('.regIn');
const regInEnd = document.querySelector('.regInEnd')
const closeButton = document.querySelector('.closeMenu')
//инпуты регистрации
const nameReg = document.querySelector('#nameReg')
const name = nameReg.value
const surReg = document.querySelector('#surReg')
const surname = surReg.value
const emailReg = document.querySelector('#emailReg')
const email = emailReg.value
const passReg = document.querySelector('#passReg')
const pass = passReg.value
const regPhoto = document.querySelector('.regPhoto')
const logReg = document.querySelector('.login')
//инпуты авторизации
const nameSign = document.querySelector('.nameSign')
const passSign = document.querySelector('.passwordSign')
const userDataFormSign = document.querySelector('.user-data-sign')
//окно профиля
const userProfile = document.querySelector('.user-profile');
const userPhoto = document.querySelector('.user-photo');
const userName = document.querySelector('.user-name');
const closeProfileButton = document.querySelector('.close-popup-button');
const getPhoto = document.querySelector('.getPhoto');
const userPhotoAva = document.querySelector('.userPhotoAva')
const outProfileAva = document.querySelector('.outProfileAva');

//функционал карточек
const cardLondon = document.querySelector('.card-London')
const cardVenesia = document.querySelector('.card-Venesia')
const cardBerlin = document.querySelector('.card-Berlin')
const cardTokio = document.querySelector('.card-Tokio')
const cardUSA = document.querySelector('.card-USA')
const cardSeul = document.querySelector('.card-Seul')
const cardPekin = document.querySelector('card-Pekin')
const cardEgypt = document.querySelector('.card-Egypt');
const cardSweden = document.querySelector('.card-Sweden');
const oldBg = document.querySelector('.oldBg')
const oldBg1 = document.querySelector('.oldBg1')
const oldBg2 = document.querySelector('.oldBg2')
const oldBg3 = document.querySelector('.oldBg3')
const oldBg4 = document.querySelector('.oldBg4')
const oldBg5 = document.querySelector('.oldBg5')
const oldBg6 = document.querySelector('.oldBg6')
const oldBg7 = document.querySelector('.oldBg7')
const oldBg8 = document.querySelector('.oldBg8')
//карточки
const cards = document.querySelectorAll('.card')


//отзывы
const feeddback = document.querySelector('.feedback-input')
const feedbackForm = document.querySelector('.feedbackForm')
const feedbacks = document.querySelector('.feedbacks')

//


// console.log(profileBlock,menuButton,menu,register,linkProfile,signIn,regIn)
console.log(nameReg, surReg, emailReg, passReg)





let users = [
    {
        login: "katyaaa",
        name: 'Екатерина',
        surname: 'Голубева',
        email: 'katyagol@gmail.com',
        password: 'HotEj33',
    },
    {
        login: "andrew_smirnov",
        name: 'Андрей',
        surname: 'Смирнов',
        email: 'andrew_222@gmail.com',
        password: 'yYghost567'
    },
    {
        login: "aleks_01",
        name: 'Алексей',
        surname: 'Леонов',
        email: 'alex_leon@gmail.com',
        password: 'lllleonov',
        photo: {
            name: `https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80`
        }
    }
]



if (localStorage.users) {
    users = JSON.parse(localStorage.users)
}







//карточки
let video = document.createElement('video')
video.className = 'commonNewBg'
video.setAttribute('autoplay', "")
// video.setAttribute('loop', "")
cardLondon.addEventListener('mouseover', () => {
    oldBg.remove()
    video.src = "./img/london.mp4"
    cardLondon.append(video)
})
cardLondon.addEventListener('mouseout', () => {
    video.remove();
    cardLondon.append(oldBg)
})
cardVenesia.addEventListener('mouseover', () => {
    oldBg1.remove()
    video.src = "./img/venesia.mp4"
    cardVenesia.append(video)
})
cardVenesia.addEventListener('mouseout', () => {
    video.remove();
    cardVenesia.append(oldBg1)
})
cardBerlin.addEventListener('mouseover', () => {
    oldBg2.remove()
    video.src = "./img/Berlin.mp4"
    cardBerlin.append(video)
})
cardBerlin.addEventListener('mouseout', () => {
    video.remove();
    cardBerlin.append(oldBg2)
})
cardTokio.addEventListener('mouseover', () => {
    oldBg3.remove()
    video.src = "./img/tokio.mp4"
    cardTokio.append(video)
})
cardTokio.addEventListener('mouseout', () => {
    video.remove();
    cardTokio.append(oldBg3)
})
cardUSA.addEventListener('mouseover', () => {
    oldBg4.remove()
    video.src = "./img/losangeles.mp4"
    cardUSA.append(video)
})
cardUSA.addEventListener('mouseout', () => {
    video.remove();
    cardUSA.append(oldBg4)
})
cardSeul.addEventListener('mouseover', () => {
    oldBg5.remove()
    video.src = "./img/seul.mp4"
    cardSeul.append(video)
})
cardSeul.addEventListener('mouseout', () => {
    video.remove();
    cardSeul.append(oldBg5)
})
cardEgypt.addEventListener('mouseover', (event) => {
    console.log(event.targer)
    oldBg7.remove()
    video.src = "./img/egypt.mp4"
    cardEgypt.append(video)
})
cardEgypt.addEventListener('mouseout', () => {
    video.remove();
    cardEgypt.append(oldBg7)
})
cardSweden.addEventListener('mouseover', (event) => {
    oldBg8.remove()
    video.src = "./img/sweden.mp4"
    cardSweden.append(video)
})
cardEgypt.addEventListener('mouseout', () => {
    video.remove();
    cardSweden.append(oldBg8)
})



//user 

let createUser = () => {
    let user = {
        login: logReg.value,
        name: nameReg.value,
        surname: surReg.value,
        email: emailReg.value,
        password: passReg.value,
        photo: regPhoto.files[0] // добавляем выбранный файл в объект пользователя
    }
    userName.innerText = user.login
    let isDuplicate = users.find(u => u.email === user.email);
    if (!isDuplicate) {
        users.push(user);
    }
    console.log(user)
    localStorage.users = JSON.stringify(users)
}


getPhoto.addEventListener('change', () => {
    let url = URL.createObjectURL(getPhoto.files[0]);
    userPhotoAva.src = url
    outProfileAva.src = url

    createUser(url)
})

regPhoto.addEventListener('change', (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    // Отображаем превью выбранного файла
    reader.addEventListener('load', () => {
        userPhotoAva.src = reader.result;
    });

    // Читаем выбранный файл
    reader.readAsDataURL(file);
});

let createFeedback = (user) => {

    console.log(user)

    let feedbackBlock = document.createElement('div')
    let userBlock = document.createElement('div');
    let userInfo = document.createElement('div');
    let userPhoto = document.createElement('div');
    let userPhotoAva = document.createElement('img')
    let userName = document.createElement('p')
    let feedbackInfo = document.createElement('div')
    let feedbackText = document.createElement('p')
    let moreInfoButton = document.createElement('button')
    let moreInfo = document.createElement('div')

    userPhotoAva.classList.add('userPhoto')
    userPhotoAva.src = user.photo.name;
    userName.innerText = user.login

    moreInfo.classList.add('more-info')
    moreInfoButton.classList.add('more-info-button')
    moreInfoButton.innerText = 'Подробнее'
    feedbackInfo.classList.add('info-field')
    userName.classList.add('user-name')
    userBlock.classList.add('feed-cont')
    userInfo.classList.add('user-field');
    feedbackBlock.classList.add('feedback-card')

    feedbackText.innerText = feeddback.value

    feedbackInfo.append(feedbackText)


    userPhoto.append(userPhotoAva)
    userInfo.append(userPhoto)
    userInfo.append(userName)

    userBlock.append(userInfo)
    userBlock.append(feedbackInfo)

    moreInfo.append(moreInfoButton)
    feedbackBlock.append(userBlock)
    feedbackBlock.append(moreInfo)

    feedbacks.append(feedbackBlock)

    feedbackText.value = ''
}



let feedbackFunction = (user) => {
    feedbackForm.addEventListener('submit', (event) => {
        event.preventDefault();
        console.log('форма')
        createFeedback(user);
    })
}


userDataFormSign.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('hi')
    users.forEach(user => {
        console.log(user.name)
        if (nameSign.value === user.login) {
            outProfileAva.src = user.photo.name
            userPhotoAva.src = user.photo.name
            userName.innerText = user.login
            console.log(user.photo.name)
            register.classList.remove('register-open')
            feedbackFunction(user)
        }

    })

})





//header script
menuButton.addEventListener('click', () => {
    menu.className = 'menu-box-open';
    let openMenu = document.querySelector('.menu-box-open')
    openMenu.addEventListener('click', () => {
        menu.className = 'menu-box';
    })
})
linkProfile.addEventListener('click', (event) => {
    event.preventDefault();
    register.classList.add('register-open');
})
profileBlock.addEventListener('click', () => {
    userProfile.classList.add('user-profile-open');
    userWindowCreate(user)
})
closeProfileButton.addEventListener('click', () => {
    userProfile.classList.remove('user-profile-open');
})

userDataFormSign.addEventListener('submit', (event) => {
    event.preventDefault();

    let isUserFound = false;
    users = JSON.parse(localStorage.users)
    users.forEach(user => {
        if (user.name === nameSign.value && user.password === passSign.value) {
            console.log('user work');
            isUserFound = true;
            register.classList.remove('register-open');
        }else {
            console.log('Неправильный логин или пароль');
            
        }
    });


});

regIn.addEventListener('click', () => {
    regPage.classList.add('reg-page-open');
    register.classList.remove('register-open');


    const userDataFormReg = document.querySelector('.user-data-reg')
    userDataFormReg.addEventListener('submit', (event) => {
        event.preventDefault();

        console.log('sayhi');
        createUser();

        regPage.classList.remove('reg-page-open');
        console.log(users)
    })
})

cards.forEach(card => {
    card.addEventListener('click', (event) => {
        createInfo(card)
    })
})

let createInfo = (card) => {
    url = 'https://countries-cities.p.rapidapi.com/location/country/list'
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
        })
}