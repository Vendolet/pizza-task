# pizza-task

## Необходимые компоненты
***
1. php, Composer.
2. Локальный сервер, например, OpenServer.
3. git
4. node.js, npm. (при выполнении пунктов 6 и далее.)

## Предварительно
***
1. Склонируйте ветку development из данного репозитория.

## Порядок локального запуска проекта:
***
1. Перейти в каталог "./backend". Выполнить с помощью Composer установку пакетов. (команда "Composer install").
2. Создать локальную БД.
3. Создать файл ".env". Скопировать в него содержимое файла ".env.example". В файле ".env" заполнить параметры: параметры BD (имя пользователя, пароль, порт, имя созданной БД).
4. Выполнить команду "php artisan key:generate". Выполнить миграцию БД командой "php artisan migrate".
5. В каталоге "./sql" содержится sql-запрос для заполнения таблицы "products". В запросе 12 уникальных значений, которые при желании можно продублировать изменив значение поля "article" и "note" на уникальное.

Изначально в каталоге "./backend/public" находятся собранные через webpack файлы frontend. Используемое доменное имя приложения по умолчанию: "pizza-market" с портом http-запросов 81. При запуске через локальный сервер с указанными настройками произойдёт запуск проекта.
Иначе, если необходимо использовать другое доменное имя, выполните пункты ниже.

6. Перейти в каталог frontend.
7. Выполнить установку всех node модулей командой "npm install".
8. Перейти в файл "./src/store/store.js".
9. В объекте state{} изменить значение свойства startPage на используемый домен сохранив '/api', например, 'http://localhost:80/api'.
10. Запустить команду "npm run build" для сборки проекта.
11. Перейти в каталог "./dist". 
12. Скопировать с заменой каталоги "./css", "./img", "./js" в каталог "./backend/public".
13. Вставить содержимое файла "./dist/index.html" взамен содержимого файла ".backend/resources/views/index.blade.php".

14. Запустить на локальном сервере файл "./backend/public/index.php".
