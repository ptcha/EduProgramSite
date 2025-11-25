// Массив с данными о ТОП-10 укрупнённых группах профессий для участников СВО
const professionsData = [
    {
        id: 1,
        title: "IT и цифровые технологии",
        code: "09.00.00, 10.00.00, 01.00.00",
        description: "Востребованные IT-специальности: от программирования до кибербезопасности и робототехники.",
        categories: [
            "Разработка ПО",
            "Информационная безопасность", 
            "Системное администрирование",
            "Аналитика данных и ИИ",
            "Робототехника"
        ],
        programs: [
            {
                level: "СПО",
                code: "09.02.06",
                name: "Сетевое и системное администрирование",
                qualification: "Системный администратор",
                duration: "2 г. 10 мес. (11 кл.)",
                profstandard: "06.026 Системный администратор ИКС",
                positions: ["Системный администратор", "Специалист отдела ИТ"],
                federalDistricts: ["ЦФО", "СЗФО", "ПФО"]
            },
            {
                level: "ВО",
                code: "09.03.03",
                name: "Прикладная информатика",
                qualification: "Бакалавр",
                duration: "4 года (11 кл.)",
                profstandard: "06.027 Специалист по информационным системам",
                positions: ["Программист", "Аналитик данных", "Специалист по ИБ"],
                federalDistricts: ["ЦФО", "СЗФО", "ПФО", "СФО"]
            }
        ]
    },
    {
        id: 2,
        title: "Энергетика и электросети",
        code: "13.00.00, 14.00.00, 27.00.00",
        description: "Профессии в сфере энергетики, электросетевого хозяйства и атомной промышленности.",
        categories: [
            "Электросетевое хозяйство",
            "Атомная энергетика",
            "Возобновляемая энергетика",
            "Электрооборудование",
            "Энергоменеджмент"
        ],
        programs: [
            {
                level: "СПО",
                code: "13.02.11",
                name: "Техническая эксплуатация и обслуживание электрического и электромеханического оборудования",
                qualification: "Техник",
                duration: "2 г. 10 мес. (11 кл.)",
                profstandard: "27.003 Техник-электрик",
                positions: ["Электромонтер", "Слесарь-ремонтник", "Электрик"],
                federalDistricts: ["ЦФО", "СЗФО", "ПФО", "УФО"]
            },
            {
                level: "ВО",
                code: "13.03.02",
                name: "Электроэнергетика и электротехника",
                qualification: "Бакалавр",
                duration: "4 года (11 кл.)",
                profstandard: "27.004 Инженер-электрик",
                positions: ["Инженер по релейной защите", "Энергетик", "Главный энергетик"],
                federalDistricts: ["ЦФО", "СЗФО", "ПФО", "СФО", "УФО"]
            }
        ]
    },
    {
        id: 3,
        title: "Строительство, архитектура и геоданные",
        code: "07.00.00, 08.00.00, 20.00.00, 21.00.00",
        description: "Профессии в сфере строительства, архитектуры, геодезии и недропользования.",
        categories: [
            "Архитектура и проектирование",
            "Строительные технологии",
            "Геодезия и кадастр",
            "Горное дело",
            "ЖКХ и инфраструктура"
        ],
        programs: [
            {
                level: "СПО",
                code: "08.02.01",
                name: "Строительство и эксплуатация зданий и сооружений",
                qualification: "Техник-строитель",
                duration: "2 г. 10 мес. (11 кл.)",
                profstandard: "08.001 Техник-строитель",
                positions: ["Техник-строитель", "Прораб", "Мастер строительного участка"],
                federalDistricts: ["ЦФО", "СЗФО", "ПФО", "ЮФО"]
            },
            {
                level: "ВО",
                code: "07.03.01",
                name: "Архитектура",
                qualification: "Бакалавр",
                duration: "5 лет (11 кл.)",
                profstandard: "07.001 Архитектор",
                positions: ["Архитектор", "Главный архитектор", "Проектный менеджер"],
                federalDistricts: ["ЦФО", "СЗФО", "ПФО", "СФО"]
            }
        ]
    },
    {
        id: 4,
        title: "Машиностроение и производственные технологии",
        code: "12.00.00, 15.00.00, 27.00.00",
        description: "Профессии в сфере машиностроения, производства и автоматизации технологических процессов.",
        categories: [
            "Машиностроение",
            "Робототехника",
            "Сварочное производство",
            "Металлообработка",
            "Инженерное дело"
        ],
        programs: [
            {
                level: "СПО",
                code: "15.02.08",
                name: "Технология машиностроения",
                qualification: "Техник-технолог",
                duration: "2 г. 10 мес. (11 кл.)",
                profstandard: "15.001 Техник-технолог машиностроительного производства",
                positions: ["Технолог", "Инженер-технолог", "Начальник участка"],
                federalDistricts: ["ЦФО", "СЗФО", "ПФО", "УФО"]
            },
            {
                level: "ВО",
                code: "15.03.05",
                name: "Конструкторско-технологическое обеспечение машиностроительных производств",
                qualification: "Бакалавр",
                duration: "4 года (11 кл.)",
                profstandard: "15.002 Инженер-конструктор",
                positions: ["Конструктор", "Инженер-технолог", "Проект-инженер"],
                federalDistricts: ["ЦФО", "СЗФО", "ПФО", "СФО", "УФО"]
            }
        ]
    },
    {
        id: 5,
        title: "Транспорт и беспилотные системы",
        code: "23.00.00, 25.00.00, 38.00.00",
        description: "Профессии в сфере транспорта, логистики и беспилотных летательных аппаратов.",
        categories: [
            "Автомобильный транспорт",
            "Авиация",
            "Железнодорожный транспорт",
            "Беспилотные системы",
            "Логистика"
        ],
        programs: [
            {
                level: "СПО",
                code: "23.02.03",
                name: "Эксплуатация и ремонт автомобильного транспорта",
                qualification: "Техник",
                duration: "2 г. 10 мес. (11 кл.)",
                profstandard: "23.001 Техник по ремонту и обслуживанию автомобилей",
                positions: ["Автомеханик", "Мастер по ремонту", "Слесарь-моторист"],
                federalDistricts: ["ЦФО", "СЗФО", "ПФО", "ЮФО"]
            },
            {
                level: "ВО",
                code: "25.03.03",
                name: "Авиационные и ракетные комплексы",
                qualification: "Бакалавр",
                duration: "4 года (11 кл.)",
                profstandard: "25.002 Инженер-конструктор авиационной техники",
                positions: ["Инженер-испытатель", "Конструктор БПЛА", "Оператор БПЛА"],
                federalDistricts: ["ЦФО", "СЗФО", "ПФО", "СФО", "ДФО"]
            }
        ]
    },
    {
        id: 6,
        title: "Нефтегазовая промышленность и недропользование",
        code: "18.00.00, 20.00.00, 21.00.00",
        description: "Профессии в сфере добычи, переработки нефти и газа, а также недропользования.",
        categories: [
            "Нефтегазовая отрасль",
            "Бурение скважин",
            "Переработка нефти",
            "Геология",
            "Недропользование"
        ],
        programs: [
            {
                level: "СПО",
                code: "21.02.01",
                name: "Разработка нефтяных и газовых месторождений",
                qualification: "Техник",
                duration: "2 г. 10 мес. (11 кл.)",
                profstandard: "21.001 Техник по добыче нефти и газа",
                positions: ["Слесарь-ремонтник", "Мастер добычи", "Техник по добыче"],
                federalDistricts: ["УФО", "СФО", "ДФО"]
            },
            {
                level: "ВО",
                code: "21.03.01",
                name: "Нефтегазовое дело",
                qualification: "Бакалавр",
                duration: "4 года (11 кл.)",
                profstandard: "21.002 Инженер-нефтяник",
                positions: ["Инженер-нефтяник", "Главный инженер", "Руководитель проекта"],
                federalDistricts: ["УФО", "СФО", "ДФО"]
            }
        ]
    },
    {
        id: 7,
        title: "Здравоохранение и биотехнологии",
        code: "19.00.00, 31.00.00, 32.00.00, 33.00.00",
        description: "Профессии в сфере медицины, фармацевтики, биотехнологий и здравоохранения.",
        categories: [
            "Лечебное дело",
            "Фармацевтика",
            "Сестринское дело",
            "Биотехнологии",
            "Медицинская техника"
        ],
        programs: [
            {
                level: "СПО",
                code: "31.02.03",
                name: "Лечебное дело",
                qualification: "Фельдшер",
                duration: "3 года (11 кл.)",
                profstandard: "31.001 Фельдшер",
                positions: ["Фельдшер", "Фельдшер скорой помощи", "Фельдшер-анестезист"],
                federalDistricts: ["ЦФО", "СЗФО", "ПФО", "ЮФО", "СФО"]
            },
            {
                level: "ВО",
                code: "31.05.01",
                name: "Лечебное дело",
                qualification: "Врач",
                duration: "6 лет (11 кл.)",
                profstandard: "31.002 Врач-терапевт",
                positions: ["Врач-терапевт", "Врач-педиатр участковый", "Специалист скорой помощи"],
                federalDistricts: ["ЦФО", "СЗФО", "ПФО", "ЮФО", "СФО", "ДФО"]
            }
        ]
    },
    {
        id: 8,
        title: "Агро, ветеринария и пищевые технологии",
        code: "19.00.00, 35.00.00, 36.00.00, 43.00.00",
        description: "Профессии в сфере сельского хозяйства, ветеринарии и пищевой промышленности.",
        categories: [
            "Сельское хозяйство",
            "Ветеринария",
            "Пищевые технологии",
            "Растениеводство",
            "Животноводство"
        ],
        programs: [
            {
                level: "СПО",
                code: "35.02.07",
                name: "Механизация сельского хозяйства",
                qualification: "Техник-механик",
                duration: "2 г. 10 мес. (11 кл.)",
                profstandard: "35.001 Техник-механизатор",
                positions: ["Механизатор", "Тракторист", "Слесарь сельхозмашиностроения"],
                federalDistricts: ["ЦФО", "СЗФО", "ПФО", "ЮФО"]
            },
            {
                level: "ВО",
                code: "36.03.01",
                name: "Ветеринарно-санитарная экспертиза",
                qualification: "Бакалавр",
                duration: "4 года (11 кл.)",
                profstandard: "36.002 Ветеринарный врач",
                positions: ["Ветеринарный врач", "Ветеринарный фельдшер", "Специалист по защите животных"],
                federalDistricts: ["ЦФО", "СЗФО", "ПФО", "СФО"]
            }
        ]
    },
    {
        id: 9,
        title: "Образование и гуманитарные направления",
        code: "37.00.00, 39.00.00, 44.00.00",
        description: "Профессии в сфере образования, педагогики и гуманитарных наук.",
        categories: [
            "Образование",
            "Педагогика",
            "Психология",
            "Социальная работа",
            "Искусство и культура"
        ],
        programs: [
            {
                level: "СПО",
                code: "44.02.02",
                name: "Преподавание в начальных классах",
                qualification: "Учитель начальных классов",
                duration: "2 г. 10 мес. (11 кл.)",
                profstandard: "44.001 Учитель начальных классов",
                positions: ["Учитель начальных классов", "Воспитатель", "Методист начального образования"],
                federalDistricts: ["ЦФО", "СЗФО", "ПФО", "ЮФО", "СФО"]
            },
            {
                level: "ВО",
                code: "44.03.05",
                name: "Педагогическое образование",
                qualification: "Бакалавр",
                duration: "4 года (11 кл.)",
                profstandard: "44.002 Педагог",
                positions: ["Учитель", "Преподаватель", "Методист", "Руководитель образовательного проекта"],
                federalDistricts: ["ЦФО", "СЗФО", "ПФО", "ЮФО", "СФО", "ДФО"]
            }
        ]
    },
    {
        id: 10,
        title: "Право, управление и коммуникации",
        code: "38.00.00, 40.00.00, 42.00.00, 46.00.00",
        description: "Профессии в сфере права, управления, юриспруденции и коммуникаций.",
        categories: [
            "Юриспруденция",
            "Государственное управление",
            "Безопасность",
            "Политология",
            "Связи с общественностью"
        ],
        programs: [
            {
                level: "СПО",
                code: "40.02.01",
                name: "Право и организация социального обеспечения",
                qualification: "Юрист",
                duration: "2 г. 10 мес. (11 кл.)",
                profstandard: "40.001 Юрист",
                positions: ["Юрисконсульт", "Специалист по кадрам", "Специалист по юридической работе"],
                federalDistricts: ["ЦФО", "СЗФО", "ПФО", "ЮФО"]
            },
            {
                level: "ВО",
                code: "40.03.01",
                name: "Юриспруденция",
                qualification: "Бакалавр",
                duration: "4 года (11 кл.)",
                profstandard: "40.002 Юрист",
                positions: ["Юрист", "Адвокат", "Следователь", "Прокурор", "Судья"],
                federalDistricts: ["ЦФО", "СЗФО", "ПФО", "ЮФО", "СФО", "ДФО"]
            }
        ]
    }
];

// Функция для генерации карточек профессий
function generateProfessionCards() {
    const container = document.getElementById('professions-container');
    container.innerHTML = ''; // Очищаем контейнер перед добавлением новых карточек
    
    professionsData.forEach(profession => {
        const card = document.createElement('div');
        card.className = 'profession-card';
        
        // Создаем теги для категорий
        const categoriesTags = profession.categories.map(category => 
            `<span class="skill-tag">${category}</span>`
        ).join('');
        
        // Создаем элементы списка для образовательных программ
        const programsList = profession.programs.map(program => 
            `<li><strong>${program.level}:</strong> ${program.name} (${program.code}) - ${program.qualification}. Срок: ${program.duration}. Профстандарт: ${program.profstandard}</li>`
        ).join('');
        
        card.innerHTML = `
            <h3 class="profession-title">${profession.title}</h3>
            <div class="code-label">Коды УГС: <span class="code-value">${profession.code}</span></div>
            <p class="profession-description">${profession.description}</p>
            <div class="categories-section">
                <h4 class="skills-title">Базовые категории профессий:</h4>
                <div class="skills-list">${categoriesTags}</div>
            </div>
            <div class="programs-section">
                <h4 class="programs-title">Образовательные программы:</h4>
                <ul class="programs-list">${programsList}</ul>
            </div>
            <button class="btn apply-btn" onclick="location.href='#'">Поступить</button>
        `;
        
        container.appendChild(card);
    });
}

// Функция для фильтрации профессий
function filterProfessions() {
    const educationLevel = document.getElementById('education-level').value;
    const educationType = document.getElementById('education-type').value;
    const formOfStudy = document.getElementById('form-of-study').value;
    const federalDistrict = document.getElementById('federal-district').value;
    const budgetPlaces = document.getElementById('budget-places').value;
    
    const container = document.getElementById('professions-container');
    container.innerHTML = ''; // Очищаем контейнер
    
    const filteredProfessions = professionsData.filter(profession => {
        // Проверяем, есть ли хотя бы одна подходящая программа для фильтров
        const hasMatchingProgram = profession.programs.some(program => {
            // Фильтр по уровню образования (СПО/ВО)
            if (educationType !== 'all' && program.level !== (educationType === 'spo' ? 'СПО' : 'ВО')) {
                return false;
            }
            
            // Фильтр по федеральному округу
            if (federalDistrict !== 'all' && !program.federalDistricts.includes(federalDistrict)) {
                return false;
            }
            
            return true;
        });
        
        return hasMatchingProgram;
    });
    
    if (filteredProfessions.length === 0) {
        container.innerHTML = '<p class="no-results">По заданным критериям не найдено подходящих профессий</p>';
    } else {
        filteredProfessions.forEach(profession => {
            const card = document.createElement('div');
            card.className = 'profession-card';
            
            // Создаем теги для категорий
            const categoriesTags = profession.categories.map(category => 
                `<span class="skill-tag">${category}</span>`
            ).join('');
            
            // Фильтруем программы по заданным критериям
            const matchingPrograms = profession.programs.filter(program => {
                // Фильтр по уровню образования (СПО/ВО)
                if (educationType !== 'all' && program.level !== (educationType === 'spo' ? 'СПО' : 'ВО')) {
                    return false;
                }
                
                // Фильтр по федеральному округу
                if (federalDistrict !== 'all' && !program.federalDistricts.includes(federalDistrict)) {
                    return false;
                }
                
                return true;
            });
            
            // Создаем элементы списка только для подходящих программ
            const programsList = matchingPrograms.map(program => 
                `<li><strong>${program.level}:</strong> ${program.name} (${program.code}) - ${program.qualification}. Срок: ${program.duration}. Профстандарт: ${program.profstandard}</li>`
            ).join('');
            
            card.innerHTML = `
                <h3 class="profession-title">${profession.title}</h3>
                <div class="code-label">Коды УГС: <span class="code-value">${profession.code}</span></div>
                <p class="profession-description">${profession.description}</p>
                <div class="categories-section">
                    <h4 class="skills-title">Базовые категории профессий:</h4>
                    <div class="skills-list">${categoriesTags}</div>
                </div>
                <div class="programs-section">
                    <h4 class="programs-title">Образовательные программы:</h4>
                    <ul class="programs-list">${programsList}</ul>
                </div>
                <button class="btn apply-btn" onclick="location.href='#'">Поступить</button>
            `;
            
            container.appendChild(card);
        });
    }
}

// Запускаем генерацию карточек после загрузки DOM
document.addEventListener('DOMContentLoaded', function() {
    generateProfessionCards();
    
    // Добавляем обработчик события для кнопки фильтрации
    document.getElementById('apply-filter').addEventListener('click', filterProfessions);
});