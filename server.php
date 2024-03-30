<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Информация о сервере</title>
</head>
<body>
    <?php
        print_r($_SERVER);
    ?>
<h1>Сервер и клиент</h1>
<u1>
    <li>Адрес сервера: <?= $_SERVER['SERVER_ADDR']; ?></li>
    <li>Имя сервера: <?= $_SERVER['SERVER_NAME']; ?></li>
    <li>Имя и версия интернет протокола: <?= $_SERVER['SERVER_PROTOCOL']; ?></li>
    <li>Порт сервера: <?= $_SERVER['SERVER_PORT']; ?></li>
    <li>Корневой каталог: <?= $_SERVER['DOCUMENT_ROOT']; ?></li>
    <li>Путь к текущему исполняемому скрипту: <?= $_SERVER['SCRIPT_NAME']; ?></li>
    <li>Метод запроса страницы: <?= $_SERVER['REQUEST_METHOD']; ?></li>
    <li>Строка запроса: <?= $_SERVER['QUERY_STRING']; ?></li>
    <li>ip клиента:<?= $_SERVER['REMOTE_ADDR']; ?></li>
    <li>Удаленный хост: <?= $_SERVER['REMOTE_HOST']; ?></li>
    <li>URI: <?= $_SERVER['REQUEST_URI']; ?></li>
    <li>Имя файла: <?= $_SERVER['PHP_SELF']; ?></li>
    <li>Абсолютный путь: <?= $_SERVER['SCRIPT_FILENAME']; ?></li>
</u1>
</body>
</html>