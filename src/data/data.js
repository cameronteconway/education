const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];

const addDays = days => {
    const date = new Date();
    date.setDate(date.getDate() + days);
    const day = date.getDate();
    const month = months[date.getMonth()].substring(0, 3).toUpperCase();
    return { day, month };
};

export const eventData = [
    {
        name: 'Working from home - here to stay?',
        day: addDays(6).day,
        month: addDays(6).month,
        img: '/images/events/work-from-home.jpg',
        imgAlt: 'Man with a face mask on working at home on his laptop.',
        location: 'Online (Zoom)',
    },
    {
        name: 'Architecture and climate change',
        day: addDays(15).day,
        month: addDays(15).month,
        img: '/images/events/architecture.jpg',
        imgAlt: 'Large modern house in Belgium.',
        location: 'Lecture Theater 2',
    },
    {
        name: 'Art in the city',
        day: addDays(24).day,
        month: addDays(24).month,
        img: '/images/events/city-art.jpg',
        imgAlt: 'Grafitti on the wall of an old town house.',
        location: 'Lecture Theater 6',
    },
    {
        name: 'Structuring an argument',
        day: addDays(38).day,
        month: addDays(38).month,
        img: '/images/events/notes.jpg',
        imgAlt: 'Notepad graphic over a solid background.',
        location: 'Main Library',
    },
];

export const newsData = [
    {
        name: 'Government to fund research into renewable energy',
        day: addDays(-5).day,
        month: addDays(-5).month,
        img: '/images/news/renewable-energy.jpg',
        imgAlt: 'A single wind turbine in a field with cloudy skies above.',
        category: 'Science',
    },
    {
        name: 'Department of Medicine expansion',
        day: addDays(-9).day,
        month: addDays(-9).month,
        img: '/images/news/medicine.jpg',
        imgAlt: 'Two doctors performing surgery on a patient.',
        category: 'Medicine',
    },
    {
        name: 'Students selected to represent their country',
        day: addDays(-12).day,
        month: addDays(-12).month,
        img: '/images/news/sport.jpg',
        imgAlt: 'Women running on a track in a stadium.',
        category: 'Sport',
    },
    {
        name: 'Hundreds of threes to be planted across campus',
        day: addDays(-15).day,
        month: addDays(-15).month,
        img: '/images/news/tree.jpg',
        imgAlt: 'Single tree infront of a river.',
        category: 'Campus Life',
    },
];

export const statsData = [
    {
        stat: '94%',
        text: 'student satisfaction',
    },
    {
        stat: '??500 million',
        text: 'in research funding',
    },
    {
        stat: '5th',
        text: 'in QS World University Rankings',
    },
    {
        stat: '108',
        text: 'countries reprisented',
    },
];

export const footerData = [
    {
        colTitle: 'Information about',
        links: [
            {
                text: 'Open days',
                title: '',
            },
            {
                text: 'Course fees and funding',
                title: '',
            },
            {
                text: 'Statement on Modern Slavery',
                title: '',
            },
            {
                text: 'Data privacy / GDPR',
                title: '',
            },
            {
                text: 'Libraries',
                title: '',
            },
        ],
    },
    {
        colTitle: 'Information for',
        links: [
            {
                text: 'Prospective undergraduates',
                title: '',
            },
            {
                text: 'Prospective graduate students',
                title: '',
            },
            {
                text: 'Prospective online/distance learning students',
                title: '',
            },
            {
                text: 'Current students',
                title: '',
            },
            {
                text: 'Alumni',
                title: '',
            },
        ],
    },
    {
        colTitle: 'Popular Links',
        links: [
            {
                text: 'Academic Calendar',
                title: '',
            },
            {
                text: 'Jobs and vacancies',
                title: '',
            },
            {
                text: 'Sport',
                title: '',
            },
            {
                text: 'Covid-19 Info',
                title: '',
            },
        ],
    },
    {
        colTitle: 'Visiting',
        links: [
            {
                text: 'Virtual Tour',
                title: '',
            },
            {
                text: 'Transport',
                title: '',
            },
            {
                text: 'Maps & directions',
                title: '',
            },
            {
                text: 'Outdoor spaces',
                title: '',
            },
        ],
    },
];

export const researchData = [
    {
        title: 'What to study',
        img: '',
        text: 'We offer a range of high-quality courses, which include full-time, part-time, online and distance learning.',
    },
    {
        title: 'Discover',
        img: '',
        text: 'Our historic institution offers engaging research opportunities, a welcoming community, excellent sport facilities, and much more.',
    },
    {
        title: 'Apply now',
        img: '',
        text: 'Persue your passion and become part of our world renown instituation - apply now and take the first steps on your new journey.',
    },
];
