const statusCheck = status => {
  switch (status) {
    case 'pending':
      console.log('Транзакция в ожидании');
    case 'success':
      console.log('Транзакция прошла успешно');
    case 'failed':
      console.log('Транзакция не прошла успешно');
    case 'other':
      console.log('Неизвестный статус');

    default:
      throw new Error('Не известная ошибка');
      break;
  }
};

statusCheck('pending');
statusCheck('success');
statusCheck('failed');
statusCheck('other');
statusCheck('error');
