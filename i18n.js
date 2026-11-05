// English is the source copy. Russian is applied before the case-page scripts run.
const russianCopy = new Map(Object.entries({
  // Shared navigation and controls.
  'Dina Radosavlevich': 'Дина Радосавлевич',
  'Product Designer': 'Продуктовый дизайнер',
  'Works': 'Работы',
  'About me': 'Обо мне',
  'Resume': 'Резюме',
  'Feel free to reach out': 'Предложить работу или задать вопрос:',
  '< back': '< назад',
  'Next Project': 'Следующий проект',
  'Primary navigation': 'Основная навигация',
  'Switch site language': 'Переключить язык сайта',
  'Project preview': 'Превью проекта',
  'Project previews': 'Превью проекта',
  'Project highlights': 'Особенности проекта',
  'Problem and solution': 'Проблема и решение',
  'Problem': 'Проблема',
  'Solution': 'Решение',
  'Design Process': 'Процесс работы',
  'Screens': 'Экраны',
  'Mobile': 'Мобильные',
  'Desktop': 'Десктопные',
  'Screen format': 'Формат экранов',
  'Scroll inside each screen to explore': 'Прокручивайте экраны, чтобы изучить их',
  'Previous process step': 'Предыдущий этап работы',
  'Next process step': 'Следующий этап работы',
  'Previous screens': 'Предыдущие экраны',
  'Next screens': 'Следующие экраны',
  'Previous screens page': 'Предыдущая группа экранов',
  'Next screens page': 'Следующая группа экранов',
  'Previous DH Alliance screens': 'Предыдущие экраны DH Alliance',
  'Next DH Alliance screens': 'Следующие экраны DH Alliance',

  // Home, about, resume.
  'Redesign': 'Редизайн',
  'Greenfield': 'С нуля',
  'Concept': 'Концепт',
  'Commercial': 'Заказной',
  'Redesign of Georgian National Museum Website': 'Редизайн сайта Национального музея Грузии',
  'Mobile App for iOS Fragrantica': 'Мобильное приложение Fragrantica для iOS',
  'Architectural Firm “Artlife”': 'Сайт архитектурного бюро Artlife',
  'Selected projects': 'Избранные проекты',
  'About Dina': 'О Дине',
  'I specialize in dashboards, research platforms, and large institutional websites – products where structure matters as much as visuals': 'Я специализируюсь на дашбордах, исследовательских платформах и крупных институциональных сайтах — продуктах, в которых структура так же важна, как визуальный стиль.',
  'Currently based in Tbilisi – remote-first, but open to relocating for the right opportunity': 'Сейчас живу в Тбилиси. Предпочитаю удалённую работу, но готова к переезду ради подходящего проекта.',
  'Download PDF': 'Скачать PDF',
  'Open resume PDF': 'Открыть PDF с резюме',
  'Dina Radosavlevich’s English resume': 'Резюме Дины Радосавлевич на английском языке',

  // Case titles and labels.
  'Redesign of Georgian National': 'Редизайн сайта',
  'Museum Website': 'Национального музея Грузии',
  'DH Alliance Digital': 'Платформа DH Alliance',
  'Humanities Platform': 'Цифровая гуманитаристика',
  'Mobile App for iOS': 'Мобильное приложение iOS',
  'Architectural Bureau': 'Архитектурное бюро',
  'solo project': 'соло-проект',
  'adaptive': 'адаптив',
  'redline and clean': 'редлайны и чистовики',
  'INTERVIEWS & UX TESTING': 'ИНТЕРВЬЮ И UX-ТЕСТЫ',
  'COMPETITOR ANALYSIS': 'АНАЛИЗ КОНКУРЕНТОВ',
  'Conducted': 'Провела',
  'a survey': 'опрос',
  'with 30': 'среди 30',
  'participants': 'участников',
  '0-to-1 solo project': '0-to-1 соло-проект',
  'UX INTERVIEW': 'UX-ИНТЕРВЬЮ',
  'UX TESTING': 'UX-ТЕСТЫ',
  'eng & ru': 'англ. и рус.',
  'User research': 'Исследование',

  // Introductory copy and static case-study text.
  'The original website didn’t clearly communicate that GNM is a network of distinct museums. Essential visitor information, such as opening hours and ticket purchasing, was difficult to find and often required visiting external websites': 'Исходный сайт не объяснял, что Национальный музей Грузии объединяет несколько самостоятельных музеев. Важную информацию для посетителей — часы работы и покупку билетов — было сложно найти, а для некоторых действий приходилось переходить на другие сайты.',
  'The redesign presents GNM as one connected museum network, gives every institution its own identity, and makes practical information and ticket access clear from the first screen.': 'Редизайн показывает Национальный музей Грузии как единую сеть, сохраняя характер каждого музея. Время работы, билеты и другая важная информация доступны уже с первого экрана.',
  'Fragrantica’s mobile experience does not fully reflect the capabilities and usage patterns of smartphones: the interface is overloaded, key features and community interactions are poorly adapted, while the potential of mobile technologies and personalization remains largely unused': 'Мобильная версия Fragrantica не использует возможности смартфонов в полной мере: интерфейс перегружен, основные функции и общение внутри сообщества плохо адаптированы, а потенциал мобильных технологий и персонализации почти не задействован.',
  'I redesigned Fragrantica for mobile by simplifying key screens, updating the visual style, and adapting core features to smartphone use. I also introduced barcode scanning, location-based fragrance discovery, and name pronunciation, while keeping the interface concise without losing functionality.': 'Я переосмыслила Fragrantica для смартфонов: упростила ключевые экраны, обновила визуальный стиль и адаптировала основные функции. Добавила сканирование штрихкода, поиск ароматов по местоположению и произношение названий, сохранив функциональность без перегрузки интерфейса.',
  'Students and early-career researchers have no single place to discover projects, tools, communities and relevant opportunities. Researchers also struggle to connect with technical specialists, while communities remain scattered across different platforms': 'Студентам и начинающим исследователям не хватает единого места, где можно найти проекты, инструменты, сообщества и профессиональные возможности. Исследователям сложно находить технических специалистов, а сообщества разбросаны по разным платформам.',
  'A structured discovery platform connects people, projects, jobs and tools through clear navigation and a scalable information architecture. It creates one accessible entry point into the digital humanities community': 'Платформа объединяет людей, проекты, вакансии и инструменты в понятной системе навигации. Её информационная архитектура создаёт единую точку входа в сообщество цифровой гуманитаристики.',
  'Choosing an architectural bureau is a complex, high-risk decision. Research showed that clients need proof of expertise, transparent pricing and materials, clear examples of completed work, and predictable communication throughout the project.': 'Выбор архитектурного бюро — сложное и ответственное решение. Исследование показало, что клиентам нужны подтверждение опыта, понятная информация о стоимости и материалах, примеры реализованных проектов и предсказуемое общение на каждом этапе.',
  'I designed a responsive platform that makes Artlife’s expertise and services easy to evaluate, combines portfolio and standard-project catalogues, and introduces a guided calculator for both standard and custom projects.': 'Я спроектировала адаптивную платформу, на которой легко оценить опыт и услуги Artlife. Она объединяет портфолио, каталог типовых проектов и пошаговый калькулятор для типовых и индивидуальных заказов.',

  // Initial process state shown in the HTML.
  '1/3 References': '1/3 Референсы',
  '1/5 Current Experience': '1/5 Текущий опыт',
  '1/8 Context': '1/8 Контекст',
  '1/6 Interview Guides': '1/6 Гайды интервью',

  // Museum process carousel.
  'References': 'Референсы',
  'I explored museum websites, collecting and organising visual references to inform the layout, typography and interaction patterns of the new interface. This helped me explore different design approaches and establish a visual direction for the project': 'Я изучила сайты музеев и собрала визуальные референсы для структуры, типографики и сценариев взаимодействия. Это помогло сравнить подходы и определить визуальное направление проекта.',
  'Redlines': 'Редлайны',
  'Alongside desktop and mobile layouts, a redline version was created for every screen to document the grid, spacing, dimensions and alignment for development': 'Для каждого десктопного и мобильного экрана я подготовила редлайны с сеткой, отступами, размерами и выравниванием, чтобы облегчить передачу макетов в разработку.',
  'Interactive Prototype': 'Интерактивный прототип',
  'An interactive prototype was created to test navigation, user flows and the connections between desktop and mobile screens before the final handoff': 'Я собрала интерактивный прототип, чтобы проверить навигацию, пользовательские сценарии и связи между десктопными и мобильными экранами до передачи проекта.',

  // Fragrantica process carousel.
  'Current Experience': 'Текущий опыт',
  'I reviewed conversations on Reddit, iRecommend and the Fragrantica forum to understand how people use the current platform. The feedback confirmed demand for a mobile app and highlighted an overloaded interface, weak mobile adaptation and friction in everyday fragrance discovery.': 'Я изучила обсуждения на Reddit, iRecommend и форуме Fragrantica, чтобы понять, как люди пользуются платформой. Отзывы подтвердили потребность в приложении и выявили перегруженный интерфейс, слабую адаптацию и сложности при поиске ароматов.',
  'Competitor Analysis': 'Анализ конкурентов',
  'I studied fragrance, beauty and retail apps with similar user journeys, comparing their strengths, weaknesses and mobile interaction patterns. This helped identify useful conventions and opportunities for features that were not represented in the existing Fragrantica experience.': 'Я изучила приложения про ароматы, красоту и покупки с похожими пользовательскими сценариями. Сравнение сильных и слабых сторон помогло найти удачные паттерны и возможности для функций, которых не хватало в Fragrantica.',
  'Usability Testing': 'Юзабилити-тестирование',
  'I tested the existing interface with five respondents across four scenarios: basic search, search by notes, finding reviews and discovering similar fragrances. Basic tasks were completed successfully, while advanced features proved difficult to find and understand, revealing clear priorities for the redesign.': 'Я протестировала существующий интерфейс с пятью респондентами по четырём сценариям: обычный поиск, поиск по нотам, чтение отзывов и подбор похожих ароматов. Простые задачи выполнялись успешно, а продвинутые функции было трудно найти и понять.',
  'Low-fidelity Prototype': 'Черновой прототип',
  'I created low-fidelity prototypes to define the structure of the key screens and work through the main user flows before moving into visual design. This made it possible to explore search, filtering and fragrance details quickly while keeping the focus on hierarchy and usability.': 'Я создала черновые прототипы ключевых экранов и основных сценариев до работы над визуальным стилем. Это позволило быстро проверить поиск, фильтры и карточку аромата, сохраняя фокус на иерархии и удобстве.',
  'I connected the final screens into an interactive prototype to test navigation and complete product scenarios. The prototype covers the journey from onboarding and discovery to search, filtering, fragrance details and evaluation.': 'Я связала финальные экраны в интерактивный прототип для проверки навигации и целых сценариев — от знакомства с приложением и поиска до фильтрации, карточки аромата и оценки.',

  // DH Alliance process carousel.
  'Context': 'Контекст',
  'Digital humanities projects, from digital archives and virtual museums to text-based visualizations and interactive historical maps, preserve cultural heritage, yet they are hard to find online': 'Проекты цифровой гуманитаристики — от архивов и виртуальных музеев до визуализаций текстов и исторических карт — помогают сохранять культурное наследие, но их сложно найти в интернете.',
  'Problems': 'Проблемы',
  'Projects are scattered across sites and channels, rarely described in public and closed within their teams, with no simple way to collaborate or find funding': 'Проекты разбросаны по сайтам и каналам, редко подробно представлены публично и часто замкнуты внутри команд. Найти партнёров или финансирование непросто.',
  'Target Audience': 'Аудитория',
  'Three audiences emerged: project authors who want to present their work and find co-authors, people looking for internships, jobs and tools, and users who want to join projects and learn from them': 'Выделились три аудитории: авторы проектов, которым нужны соавторы; люди, ищущие стажировки, работу и инструменты; и участники, которые хотят присоединиться к проектам и учиться.',
  'Competitive Analysis': 'Анализ конкурентов',
  'Six foreign and Russian-speaking DH organizations were compared: most have no internship or job sections, and Russian-language resources have not been updated in over a year': 'Я сравнила шесть зарубежных и русскоязычных организаций: у большинства нет разделов со стажировками и вакансиями, а русскоязычные ресурсы не обновлялись больше года.',
  'Research Insights': 'Результаты исследования',
  'Surveys, in-depth interviews and UX testing with 46 participants helped uncover user needs, workflows and the barriers people face when looking for digital humanities opportunities': 'Опросы, глубинные интервью и UX-тестирование с 46 участниками помогли выявить потребности, сценарии и барьеры при поиске возможностей в цифровой гуманитаристике.',
  'Personas': 'Персоны',
  'The findings were distilled into three personas, a student, a project author and a project participant, each with their own pain points': 'На основе исследования я описала три персоны: студента, автора проекта и участника проекта — с их задачами и болевыми точками.',
  'User Stories': 'Пользовательские истории',
  'Each persona received their own user stories describing what they need from the platform and why': 'Для каждой персоны я составила пользовательские истории: что ей нужно от платформы и почему.',
  'Information Architecture': 'Информационная архитектура',
  'The research findings were translated into a clear information architecture connecting projects, opportunities, people and practical resources in one scalable system': 'Результаты исследования легли в основу понятной информационной архитектуры, которая объединяет проекты, возможности, людей и полезные ресурсы.',

  // Artlife process carousel.
  'Interview Guides': 'Гайды интервью',
  'I prepared separate interview scenarios for experienced clients and people choosing an architectural bureau for the first time, so the research could reflect different expectations and decision-making patterns.': 'Я подготовила отдельные сценарии интервью для опытных клиентов и людей, которые впервые выбирают архитектурное бюро, чтобы учесть разные ожидания и способы принятия решения.',
  'Interview Analysis': 'Анализ интервью',
  'Six in-depth interviews were conducted and analysed. I grouped observations, needs and pain points to identify what builds trust in an architectural bureau and what information clients need before making contact.': 'Я провела и проанализировала шесть глубинных интервью. Сгруппировала наблюдения, потребности и сложности, чтобы понять, что вызывает доверие к бюро и какая информация нужна клиентам до первого контакта.',
  'User Flow': 'Пользовательский сценарий',
  'Based on the research, I mapped two core paths: selecting a standard project and searching for an individual project. Both flows lead users from exploration to cost calculation or a consultation request.': 'На основе исследования я составила два основных сценария: выбор типового проекта и поиск индивидуального решения. Оба ведут от знакомства с предложением к расчёту стоимости или заявке на консультацию.',
  'Responsive Design': 'Адаптивный дизайн',
  'I designed the core experience across desktop, tablet and mobile, adapting content hierarchy and navigation while keeping the architectural character of the interface consistent at every breakpoint.': 'Я адаптировала интерфейс для компьютера, планшета и телефона, меняя иерархию контента и навигацию, но сохраняя единый характер дизайна на всех экранах.',
  'UI Kit': 'UI-кит',
  'I built a reusable UI kit for navigation, project cards, service blocks, controls, contact details and calculator elements. A restrained neutral palette and modular components keep the interface precise and consistent.': 'Я собрала переиспользуемый UI-кит для навигации, карточек проектов, блоков услуг, элементов управления, контактов и калькулятора. Сдержанная палитра и модульные компоненты поддерживают точность и целостность интерфейса.',
  'Final Interface': 'Финальный интерфейс',
  'The final interface combines a portfolio-led homepage, service presentation, a catalogue of standard projects and a guided calculator that supports both standard and individual project enquiries.': 'Финальный интерфейс объединяет главную страницу с акцентом на портфолио, услуги, каталог типовых проектов и пошаговый калькулятор для типовых и индивидуальных запросов.',

  // Page titles and descriptions.
  'Dina Radosavlevich — Product Designer': 'Дина Радосавлевич — продуктовый дизайнер',
  'Dina Radosavlevich — product designer portfolio.': 'Портфолио продуктового дизайнера Дины Радосавлевич.',
  'About Me — Dina Radosavlevich': 'Обо мне — Дина Радосавлевич',
  'About Dina Radosavlevich — product designer.': 'О Дине Радосавлевич — продуктовом дизайнере.',
  'Resume — Dina Radosavlevich': 'Резюме — Дина Радосавлевич',
  'Resume of Dina Radosavlevich, product and UX/UI designer.': 'Резюме Дины Радосавлевич, продуктового и UX/UI-дизайнера.',
  'Georgian National Museum (concept) — Dina Radosavlevich': 'Национальный музей Грузии (концепт) — Дина Радосавлевич',
  'Georgian National Museum website redesign — product design case study by Dina Radosavlevich.': 'Редизайн сайта Национального музея Грузии — кейс Дины Радосавлевич.',
  'Mobile App for iOS Fragrantica — Dina Radosavlevich': 'Мобильное приложение Fragrantica для iOS — Дина Радосавлевич',
  'Mobile App for iOS Fragrantica — product design case study by Dina Radosavlevich.': 'Мобильное приложение Fragrantica для iOS — кейс Дины Радосавлевич.',
  'DH Alliance — Dina Radosavlevich': 'DH Alliance — Дина Радосавлевич',
  'DH Alliance — product design case study by Dina Radosavlevich.': 'DH Alliance — кейс по продуктовому дизайну Дины Радосавлевич.',
  'Architectural Firm “Artlife” — Dina Radosavlevich': 'Архитектурное бюро Artlife — Дина Радосавлевич',
  'Architectural Firm “Artlife” — product design case study by Dina Radosavlevich.': 'Архитектурное бюро Artlife — кейс Дины Радосавлевич.',

  // Image descriptions and accessibility labels.
  'Georgian National Museum website redesign': 'Редизайн сайта Национального музея Грузии',
  'Fragrantica iOS mobile app': 'Мобильное приложение Fragrantica для iOS',
  'DH Alliance website': 'Сайт DH Alliance',
  'Artlife architectural firm website': 'Сайт архитектурного бюро Artlife',
  'Portrait of Dina Radosavlevich': 'Портрет Дины Радосавлевич',
  'Georgian National Museum website shown on a tablet': 'Сайт Национального музея Грузии на планшете',
  'Georgian National Museum mobile screens': 'Мобильные экраны Национального музея Грузии',
  'Mobile design mockups': 'Мокапы мобильной версии',
  'Museum website displayed on a phone held in two hands': 'Сайт музея на телефоне в руках',
  'Museum website displayed on a laptop': 'Сайт музея на ноутбуке',
  'Museum website displayed on a phone': 'Сайт музея на телефоне',
  'A collection of museum website references': 'Подборка референсов для сайта музея',
  'Redline versions of the Georgian National Museum desktop screens': 'Редлайны десктопных экранов Национального музея Грузии',
  'Interactive prototype connections between Georgian National Museum screens': 'Связи экранов интерактивного прототипа Национального музея Грузии',
  'Georgian National Museum mobile home screen': 'Мобильный главный экран Национального музея Грузии',
  'Georgian National Museum mobile collections screen': 'Мобильный экран коллекций Национального музея Грузии',
  "Georgian National Museum mobile what's on screen": 'Мобильный экран событий Национального музея Грузии',
  'Georgian National Museum museums screen': 'Экран музеев Национального музея Грузии',
  'Georgian National Museum museum details screen': 'Экран отдельного музея Национального музея Грузии',
  'Georgian National Museum education screen': 'Экран образовательных программ Национального музея Грузии',
  'Georgian National Museum Science desktop screen': 'Десктопный экран науки Национального музея Грузии',
  'Georgian National Museum Collections desktop screen': 'Десктопный экран коллекций Национального музея Грузии',
  'Georgian National Museum 404 desktop screen': 'Десктопный экран ошибки 404 Национального музея Грузии',
  'Georgian National Museum Home desktop screen': 'Десктопный главный экран Национального музея Грузии',
  'Georgian National Museum museum card desktop screen': 'Десктопный экран отдельного музея Национального музея Грузии',
  'Georgian National Museum Our museums desktop screen': 'Десктопный экран раздела «Наши музеи»',
  'Georgian National Museum Education desktop screen': 'Десктопный экран образовательных программ Национального музея Грузии',
  "Georgian National Museum What's on desktop screen": 'Десктопный экран событий Национального музея Грузии',
  'Scroll the Science desktop screen': 'Прокрутить десктопный экран науки',
  'Scroll the Collections desktop screen': 'Прокрутить десктопный экран коллекций',
  'Scroll the 404 desktop screen': 'Прокрутить десктопный экран ошибки 404',
  'Scroll the Home desktop screen': 'Прокрутить десктопный главный экран',
  'Scroll the Museum card desktop screen': 'Прокрутить десктопный экран музея',
  'Scroll the Our museums desktop screen': 'Прокрутить десктопный экран раздела «Наши музеи»',
  'Scroll the Education desktop screen': 'Прокрутить десктопный экран образовательных программ',
  "Scroll the What's on desktop screen": 'Прокрутить десктопный экран событий',
  'Fragrantica fragrance search screen on an iPhone over a bright concrete surface': 'Экран поиска ароматов Fragrantica на iPhone',
  'Dior Addict fragrance details scrolling inside an iPhone in a striped shirt pocket': 'Прокрутка карточки аромата Dior Addict на iPhone',
  'Fragrantica mobile app mockups': 'Мокапы мобильного приложения Fragrantica',
  'Fragrantica welcome screen on an iPhone above a burgundy podium': 'Приветственный экран Fragrantica на iPhone',
  'Fragrantica Dior Addict fragrance screen on an iPhone against a dark circular backdrop': 'Экран аромата Dior Addict в приложении Fragrantica',
  'Fragrantica home screen on an iPhone beside a second phone and burgundy podium': 'Главный экран Fragrantica на iPhone',
  'User comments about the existing Fragrantica mobile experience': 'Отзывы о текущей мобильной версии Fragrantica',
  'Competitor analysis of fragrance, beauty and retail mobile apps': 'Анализ мобильных приложений про ароматы, красоту и покупки',
  'Usability testing results for four tasks in the existing Fragrantica interface': 'Результаты тестирования четырёх задач в текущем интерфейсе Fragrantica',
  'Low-fidelity mobile prototypes for the Fragrantica app': 'Черновые мобильные прототипы приложения Fragrantica',
  'Interactive Fragrantica prototype showing connected mobile screens and user flows': 'Интерактивный прототип Fragrantica с экранами и сценариями',
  'Fragrantica fragrance details mobile screen': 'Мобильный экран карточки аромата Fragrantica',
  'Fragrantica home mobile screen': 'Мобильный главный экран Fragrantica',
  'Fragrantica filters mobile screen': 'Мобильный экран фильтров Fragrantica',
  'Fragrantica barcode scanner mobile screen': 'Мобильный экран сканера штрихкода Fragrantica',
  'Fragrantica search results mobile screen': 'Мобильный экран результатов поиска Fragrantica',
  'Fragrantica fragrance ratings mobile screen': 'Мобильный экран оценок ароматов Fragrantica',
  'Partial view of a MacBook showing the DH Alliance Pushkin project': 'Фрагмент ноутбука с проектом «Пушкин цифровой» от DH Alliance',
  'DH Alliance interface overview': 'Обзор интерфейса DH Alliance',
  'DH Alliance project mockups': 'Мокапы проекта DH Alliance',
  'DH Alliance design process: context slide': 'Этап работы DH Alliance: контекст',
  'DH Alliance projects page displayed on a MacBook': 'Страница проектов DH Alliance на MacBook',
  'DH Alliance tools page displayed on a MacBook': 'Страница инструментов DH Alliance на MacBook',
  'DH Alliance projects screen': 'Экран проектов DH Alliance',
  'DH Alliance home screen': 'Главный экран DH Alliance',
  'DH Alliance vacancies screen': 'Экран вакансий DH Alliance',
  'DH Alliance project screen': 'Экран проекта DH Alliance',
  'DH Alliance vacancy application screen': 'Экран отклика на вакансию DH Alliance',
  'DH Alliance education screen': 'Экран образовательных программ DH Alliance',
  'DH Alliance publications screen': 'Экран публикаций DH Alliance',
  'DH Alliance tools screen': 'Экран инструментов DH Alliance',
  'DH Alliance tool detail screen': 'Экран отдельного инструмента DH Alliance',
  'DH Alliance events screen': 'Экран событий DH Alliance',
  'Artlife website previews': 'Превью сайта Artlife',
  'Artlife website displayed on a MacBook': 'Сайт Artlife на MacBook',
  'Artlife standard project calculator scrolling inside a MacBook': 'Прокрутка калькулятора типового проекта Artlife на MacBook',
  'Artlife laptop mockups': 'Мокапы сайта Artlife на ноутбуках',
  'Artlife portfolio page displayed on a laptop': 'Страница портфолио Artlife на ноутбуке',
  'Artlife standard project calculator displayed on a laptop': 'Калькулятор типового проекта Artlife на ноутбуке',
  'Artlife individual project calculator displayed on a laptop': 'Калькулятор индивидуального проекта Artlife на ноутбуке',
  'Artlife desktop standard projects catalogue': 'Десктопный каталог типовых проектов Artlife',
  'Artlife desktop homepage': 'Десктопный главный экран Artlife',
  'Artlife desktop project cost calculator': 'Десктопный калькулятор стоимости Artlife',
  'Artlife desktop portfolio page': 'Десктопная страница портфолио Artlife',
  'Artlife desktop standard project calculator': 'Десктопный калькулятор типового проекта Artlife',
  'Artlife desktop individual project calculator': 'Десктопный калькулятор индивидуального проекта Artlife',
  'Interview guides for experienced and first-time architecture clients': 'Гайды интервью для опытных и новых клиентов архитектурного бюро',
  'Analysed interview transcripts with highlighted insights': 'Разбор интервью с выделенными наблюдениями',
  'User flows for standard and individual architectural projects': 'Сценарии выбора типового и индивидуального проекта',
  'Artlife responsive layouts and calculator screens': 'Адаптивные макеты и экраны калькулятора Artlife',
  'Artlife UI kit with reusable interface components': 'UI-кит Artlife с переиспользуемыми компонентами',
  'Final Artlife desktop homepage interface': 'Финальный интерфейс главной страницы Artlife'
}));

const siteLanguage = {
  isRussian: document.documentElement.lang === 'ru',
  t(value) { return this.isRussian ? (russianCopy.get(value) || value) : value; }
};
window.siteLanguage = siteLanguage;

if (siteLanguage.isRussian) {
  const introByPage = [
    ['.gnm-page', 'Национальный музей Грузии объединяет больше десяти музеев по всей стране. У каждого — свои коллекции, выставки и характер. После посещения одного из них я создала независимый некоммерческий концепт редизайна сайта музея.'],
    ['.fragrantica-page', 'Fragrantica — онлайн-энциклопедия ароматов и крупнейшее сообщество любителей парфюмерии в мире. Я создала концепт мобильного приложения, который переосмысливает опыт использования платформы на смартфоне.'],
    ['.alliance-page', 'DH Alliance — платформа для поиска проектов цифровой гуманитаристики, вакансий и инструментов. Она помогает студентам и начинающим исследователям находить подходящие инициативы, знакомиться со специалистами и ориентироваться в профессиональном сообществе.'],
    ['.artlife-page', 'Artlife — концепт адаптивного сайта архитектурного бюро, которое работает с жилыми, общественными и ландшафтными проектами. Платформа объединяет услуги бюро, реализованные работы, каталог типовых домов и пошаговый калькулятор стоимости.']
  ];
  for (const [page, copy] of introByPage) {
    const intro = document.querySelector(`${page} .case-intro`);
    if (intro) intro.textContent = copy;
  }
  const aboutIntro = document.querySelector('.about-copy p:first-child');
  if (aboutIntro) aboutIntro.textContent = 'Я получила степень магистра по продуктовому дизайну в Университете ИТМО (2025) и степень бакалавра по журналистике. Это сочетание определяет мой подход: сначала задавать вопросы и разбираться в контексте, затем находить самое понятное решение.';

  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  let node;
  while ((node = walker.nextNode())) {
    const original = node.textContent;
    const trimmed = original.trim();
    const translated = russianCopy.get(trimmed);
    if (translated) node.textContent = original.replace(trimmed, translated);
  }

  for (const element of document.querySelectorAll('[data-ru]')) {
    element.textContent = element.dataset.ru;
  }

  for (const element of document.querySelectorAll('[alt], [aria-label], [title], [data-case-text]')) {
    for (const attribute of ['alt', 'aria-label', 'title', 'data-case-text']) {
      const original = element.getAttribute(attribute);
      if (original) element.setAttribute(attribute, siteLanguage.t(original));
    }
  }
  const description = document.querySelector('meta[name="description"]');
  if (description) description.content = siteLanguage.t(description.content);
  document.title = siteLanguage.t(document.title);
}
