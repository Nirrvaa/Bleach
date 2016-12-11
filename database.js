var databaseArray = [
  {
    cityName:'Уфа',
    cityContent:[
    {
    memorialName: 'Памятник Салавату Юлаеву',
    memorialDescription: 'Памятник Салавату стал визитной карточкой города, национальным достоянием. Изображение памятника есть на гербе республики. Место пользуется большой популярностью среди коренных жителей и приезжающих туристов. Тем более памятник расположен очень удачно. Со скалы, на которой стоит памятник, открывается уникальный вид на реку Белую и окружающую природу. Это самая высокая точка центральной части города. Памятник включен в число семи чудес республики.',
    memorialPhotos: ['img/112016_010001_1.jpg','img/112016_010001_2.jpg','img/112016_010001_4.jpg'],
    memorialId: 'Ulaev' 
   },
    
    {
    memorialName: 'Памятник героям революции',
    memorialDescription: 'В народе памятник называют — «Без пяти семь». Это объясняется тем, что напротив скульптуры находился продуктовый магазин, закрывавшийся в 19.00, и фигуры напоминали покупателей, которые из последних сил рвутся в магазин.',
    memorialPhotos: ['img/112016_010002_1.jpg','img/112016_010002_2.jpg','img/112016_010002_3.jpg'],
    memorialId: 'Heroes' 
   }, 
  
    {
    memorialName: 'Памятник Владимиру Маяковскому',
    memorialDescription: 'Владимир Маякосвский - Один из крупнейших поэтов XX века.<br>Дочь Маяковского Елена, которая ездила в 2002 году на родину к своей матери, сказала, что этот памятник лучше, чем московский. А все потому, что этот памятник ниже,  и потому здесь поэт',
    memorialPhotos: ['img/112016_010003_1.jpg','img/112016_010003_3.jpg','img/112016_010003_4.jpg'],
    memorialId: 'Mayakovskiy' 
   }, 
    
    {
    memorialName: 'Памятник Максиму Горькому',
    memorialDescription: 'Максим Горький - русский писатель, прозаик, драматург<br>Небольшой, памятник Максиму Горькому установлен перед одной из самых старых школгорода, которая носит имя А. М. Горького с 1938 года, регулярно поставляющей в университеты медалистов. М. Горький изображен в полный рост с тростью в руках.',
    memorialPhotos: ['img/112016_010004_1.jpg','img/112016_010004_2.jpg','img/112016_010004_3.jpg'],
    memorialId: 'Gorkiy' 
   }, 
    
    {
    memorialName: 'Памятник дворнику',
    memorialDescription: 'Памятник представляет собой собирательный образ всех дворников, которые трудятся на благо своего города. Памятник установлен в 2007 году перед главным входом в торгово-развлекательный центр «Мир». Памятник является уникальным в своем роде и привлекает к себе всеобщее внимание. Частенько туристы просят местных дворников встать в ряд с памятником, чтобы придать фотографии более необычный и запоминающийся вид. Не часто встретишь на улицах городов такие произведения искусства.',
    memorialPhotos: ['img/112016_010005_1.jpg','img/112016_010005_2.jpg','img/112016_010005_3.jpg'],
    memorialId: 'Dvornik' 
   }, 
    
    {
    memorialName: 'Памятник подопытным животным',
    memorialDescription: 'Поход к зубному врачу - это всегда стресс. А вот некоторых собачек об этом даже не спрашивали - сажали в стоматологическое кресло и ради науки вставляли им новые зубки. В честь своего юбилея стоматологи решили отдать дань уважения героическим псам.',
    memorialPhotos: ['img/112016_010006_1.jpg','img/112016_010006_3.jpg'],
    memorialId: 'Zhivotnie' 
   }, 
    
    {
    memorialName: 'Памятник Александру Матросову и Миннигали Губайдуллину',
    memorialDescription: 'Памятник двум Героям Советского Союза, совершившим сходные подвиги, славит мужество Солдата войны и в обобщенном, и в конкретном образе. Он стал главным сооружением в только что открытом тогда парке Победы. К Вечному огню, зажженному у подножия памятника, постоянно идут люди, чтобы поклониться воинам, отдавшим свои жизни за счастье и светлое будущее своего народа.',
    memorialPhotos: ['img/112016_010007_1.jpg','img/112016_010007_2.jpg','img/112016_010007_3.jpg'],
    memorialId: 'Heroes2' 
   }, 
    
    {
    memorialName: 'Памятник Фёдору Шаляпину',
    memorialDescription: 'Когда Шаляпин начал выступать в городском театре, он был молод и никому не известен. Поэтому мраморная фигура замерла в трепетном ожидании реакции публики. Художнику хотелось изобразить не популярного и уверенного в себе артиста, а только нащупывающего творческий путь, который начался у Шаляпина в этом городе.',
    memorialPhotos: ['img/112016_010008_1.jpg','img/112016_010008_2.jpg','img/112016_010008_3.jpg'],
    memorialId: 'Shalyapin' 
   }, 
    
    {
    memorialName: 'Памятник Александру Матросову',
    memorialDescription: 'Судьба Александра Матросова связана с этим городом - в здешней трудовой колонии он воспитывался после детского дома. 23 февраля 1943 года во время боя он закрыл своим телом амбразуру вражеского дзота, обеспечив своему подразделению возможность наступления. За свой героический подвиг Матросов был удостоен звания Герой Советского Союза, а его подвиг прославил его в веках.',
    memorialPhotos: ['img/112016_010009_1.jpg','img/112016_010009_2.jpg','img/112016_010009_3.jpg'],
    memorialId: 'Matrosov' 
   }, 
    
    {
    memorialName: 'Дом куницы (скульптура)',
    memorialDescription: 'Куница – символ и эмблема города с середины XVII века. Открытие памятника состоялось 8 июля 2010 года - в этот день Россия празднует День Семьи и это далеко не случайно. Если внимательно присмотреться к памятнику, становится понятно, что в домике живут две куницы - одна из них бегает по ветке дерева, а вторая выглядывает из домика.',
    memorialPhotos: ['img/112016_010010_1.jpg','img/112016_010010_2.jpg','img/112016_010010_3.jpg'],
    memorialId: 'Kunitsa' 
   }, 
    
    {
    memorialName: 'Семь девушек',
    memorialDescription: 'Девушки, танцующие башкирский народный танец. Располагается в историческом центре Уфы. Всегда можно посидеть рядом с фонтаном, отдохнуть, полюбоваться светом и послушать музыку.',
    memorialPhotos: ['img/112016_010011_1.jpg','img/112016_010011_2.jpg','img/112016_010011_3.jpg'],
    memorialId: 'Devushki' 
   }, 
    
    {
    memorialName: 'Памятник быку',
    memorialDescription: 'Памятник быку находится возле мясоконсервного комбината, основанного в 1940 году и являющимся сегодня крупнейшим комплексом по переработке мяса в своем регионе. Огромная фигура быка с покорно склоненной головой расположена на постаменте.',
    memorialPhotos: ['img/112016_010012_1.jpg','img/112016_010012_2.jpg','img/112016_010012_3.jpg'],
    memorialId: 'Bik' 
   },
    
    {
    memorialName: 'Аленький цветочек',
    memorialDescription: 'Высота памятника составляет 2 метра и был приурочен празднованию Дня влюбленных. По замыслу автора, памятник олицетворяет собой романтические чувства, любовь. В центре на сердце два отпечатка ладоней – мужской и женской – символизирующие собой крепкие отношения между влюбленной парой. Люди могут приложить ладони к отпечаткам на счастье.',
    memorialPhotos: ['img/112016_010013_1.jpg','img/112016_010013_2.jpg'],
    memorialId: 'Tsvetok' 
   }
      
  ]
  },
];
