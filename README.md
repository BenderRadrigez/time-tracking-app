# страница авторизации ++-
1 регистрация +
2 авторизация +
3 валидация -
4 при успешной регистрации/авторизации переход на доомашнюю страницу и сохранение id пользователя в localStorage +

## главная страница ++-
1 информация пользователя +
2 календарь +
3 виджеты задач (интернет, работа, просмотры фильмов) +
4 виджет добавления задачи +
5 виджет рабочей панели при нажатии на один из виджетов +
    1 виджет +
        1 таймер +
        2 кнопка старта +
            1 получение сегодняшнего времени из стейта +
            2 запуск таймера +
        3 кнопка остановки +-
            1 стоп таймера +
            2 сохранение в стейте -
        4 удаление виджета +
    2 виджет добавления витжетов +-
        1 название задачи +
        2 цвет задачи -
        3 кнопка добавления задачи +

<<<<<<< HEAD
### подключение firebase -
=======
### подключение firebase +
1 post +-
    1 registration +
    2 info -
2 get +
>>>>>>> add-db-firebase
строение:
{
    id: 1,
    login: 'login',
    password: 'password',
    userData: {
        name: 'name',
        photo: 'img',
<<<<<<< HEAD
=======
        taskFor: 'business',
>>>>>>> add-db-firebase
        tasks: [{
            title: 'taskName',
            levelOfPiority: 1,
            timeForCompleteTask: 'time'
            deadline: "date",
        }]
    }
}