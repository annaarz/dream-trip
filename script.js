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
console.log(profileBlock,menuButton,menu,register,linkProfile,signIn,regIn)
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
            name:`https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80`
        } 
    }
]



if (localStorage.users) {
    users = JSON.parse(localStorage.users)
}



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
        }
    });

    if (!isUserFound) {
        console.log('Неправильный логин или пароль');
    }
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

let createUser = () => {
    let user = {
        login: logReg.value,
        name: nameReg.value,
        surname: surReg.value,
        email: emailReg.value,
        password: passReg.value,
        photo: regPhoto.files[0] // добавляем выбранный файл в объект пользователя
    }

    let isDuplicate = users.find(u => u.email === user.email);
    if (!isDuplicate) {
        users.push(user);
    }
    console.log(user)
    localStorage.users = JSON.stringify(users)
}

regPhoto.addEventListener('change', (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    // Отображаем превью выбранного файла
    reader.addEventListener('load', () => {
        userPhotoAva.src = reader.result;
    });

    // Читаем выбранный файл
    reader.readAsDataURL(file);
})

getPhoto.addEventListener('change', () => {
    let url = URL.createObjectURL(getPhoto.files[0]);
    userPhotoAva.src = url
    outProfileAva.src = url
    createUser(url)
})


let createFeedback = () => {

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

    // userPhotoAva.src = photo;

    moreInfo.classList.add('more-info')
    moreInfoButton.classList.add('more-info-button')
    feedbackInfo.classList.add('info-field')
    userName.classList.add('user-name')
    userBlock.classList.add('feed-cont')
    userInfo.classList.add('user-field');
    feedbackBlock.classList.add('feedback-card')

    feedbackText.innerText = feeddback.value

    feedbackInfo.append(feedbackText)
    userPhoto.append(userPhotoAva)
    userInfo.append(userName)
    userInfo.append(userPhoto)
    userBlock.append(feedbackInfo)
    userBlock.append(userInfo)
    moreInfo.append(moreInfoButton)
    feedbackBlock.append(userBlock)
    feedbackBlock.append(moreInfo)

    feedbacks.append(feedbackBlock)

    feedbackText.value = ''
}

console.log(feedbackForm)

feedbackForm.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('форма')
    createFeedback();
})


userDataFormSign.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('hi')
    users.forEach(user => {
    console.log(user.name)
        if (nameSign.value === user.login) {
           outProfileAva.src = user.photo.name
           userPhotoAva.src = user.photo.name
           console.log(user.photo.name)
           register.classList.remove('register-open')
        }

    })

})