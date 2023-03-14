// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================

var header = {
    name: {
        firstname: "Ivan",
        lastname: "Ivanov",
    },
    position: "Junior Fullstack JS Developer",
    salary: "600$ в месяц",
    address: "Kiev st Pravdy",
}

var footer = {

    social: {
        email: {
            text: "dmytro@mail.com",
            href: "mailto:dmytro@mail.com",
        },
        phone: {
            text: "+380670000123",
            href: "tel:+380670000123",
        },
        linkedin: {
            text: "LinkedIn",
            href: "https://www.linkedin.com/in/dmytro-test",
        },
    },

}

// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
    // res.render генерує нам HTML сторінку

    //            ↙ cюди вводимо назву файлу з сontainer
    res.render('index', {})
    //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
    //             ↙ cюди вводимо назву файлу з сontainer
    res.render('summary', {
        // ↙ сюди вводимо JSON дані

        page: {
            title: "Resume | summary",
        },

        header,

        main: {
            summary: {
                title: "Summary",
                text: `"Open-minded for new technologies, with 1 years of experience in development. Whenever I start to
                    work on a new project I learn the domain and try to understand the idea of the project.Good team
                    player, every colleague is a friend to me.`,
            },

            experience: {
                title: "Other experience",
                text: `"Pet project for parsing sport betting data from different platforms(odds) and sport statistics(
                    tournament position, goals etc), analyzing by simple mathematics models and preparing probability
                    for such events like: money line - first win / draw / second win, totals etc.`,
            },
        },

        footer,

    })
})
// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/skills', function (req, res) {
    //             ↙ cюди вводимо назву файлу з сontainer
    res.render('skills', {
        // ↙ сюди вводимо JSON дані

        page: {
            title: "Resume | skills",
        },

        header,




        main: {
            hobbies: [
                {
                    name: "body",
                    isMain: true,
                },
                {
                    name: "wolk",
                    isMain: true,
                },
                {
                    name: "work",
                    isMain: false,
                },
            ],

            skills: [
                {
                    name: "HTML",
                    point: 10,
                    istop: true,
                },
                {
                    name: "Handlebare",
                    point: 8,
                    istop: true,
                },
                {
                    name: "Git & terminal",
                    point: 9,
                    istop: false,
                },
                {
                    name: "VS Code & NPM",
                    point: 7,
                },
                {
                    name: "React.js",
                    point: 0,
                },
                {
                    name: "PHP",
                    point: null,
                },




            ],
        },


        footer,

    })
})
// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/education', function (req, res) {
    //             ↙ cюди вводимо назву файлу з сontainer
    res.render('education', {
        // ↙ сюди вводимо JSON дані
        page: {
            title: "Resume | education",
        },

        header,


        main: {
            certificates: [
                {
                    name: "abs",
                    id: 9,
                },
                {
                    name: "esp",
                    id: 8,
                },
                {
                    name: "asr",
                    id: 7,
                },
            ],

            education: [
                {
                    name: "school",
                    isEnd: true,
                },
                {
                    name: "highschool",
                    isEnd: true,
                },
                {
                    name: "bursitet",
                    isEnd: false,
                },

            ],
        },

        footer,





    })
})
// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/work', function (req, res) {
    //             ↙ cюди вводимо назву файлу з сontainer
    res.render('work', {
        // ↙ сюди вводимо JSON дані

        layout: "big",

        page: {
            title: "Resume | work",
        },

        header,


        main: {
            works: [
                {
                    position: 'Junior Fullstack Developer',
                    company: {
                        name: 'IT Brains',
                        url: 'http://it-brains.com.ua/',
                    },
                    duration: {
                        from: '10.10.2022',
                        to: null,
                    },

                    projectAmount: 3,

                    projects: [
                        {
                            stackAmount: 3,
                            awardAmount: 2,
                            name: 'Resume',
                            url: 'https://resume.com.ua/',
                            about: 'uysdgfuawsgfu',
                            stack: [
                                {
                                    name: 'React.js',
                                },
                                {
                                    name: 'HTML / CSS',
                                },
                                {
                                    name: 'Node.js',
                                },
                            ],
                            awards: [
                                {
                                    name: 'star',
                                },
                                {
                                    name: 'zero',
                                },
                            ],
                        },
                    ],
                },
            ],
        },

        footer,





    })
})
// ================================================================

// Підключаємо роутер до бек-енду
module.exports = router
