const httpStatus = statusCode => {
  switch (statusCode) {
    case 200:
      return console.log(`OK — Запрос выполнен успешно`);
    case 201:
      return console.log(`Created — Ресурс был создан успешно`);
    case 204:
      return console.log(
        `No Content — Запрос выполнен успешно, но нет содержимого`
      );
    case 400:
      return console.log(`Bad Request — Неверный запрос`);
    case 401:
      return console.log(`Unauthorized — Неавторизованный доступ`);
    case 403:
      return console.log(`Forbidden — Доступ запрещен`);
    case 404:
      return console.log(`Not Found — Ресурс не найден`);
    case 500:
      return console.log(`Internal Server Error — Внутренняя ошибка сервера`);
    case 502:
      return console.log(`Bad Gateway — Неверный шлюз`);
    case 503:
      return console.log(`Service Unavailable — Сервис недоступен`);

    default:
      throw new Error('Unknown Status Code');

      break;
  }
};

httpStatus(200);
httpStatus(201);
httpStatus(204);
httpStatus(400);
httpStatus(401);
httpStatus(403);
httpStatus(404);
httpStatus(500);
httpStatus(502);
httpStatus(503);
httpStatus(700);
