interface InotificationOptions {
  TEXT: string;
  IMAGE_NAME: 'approval' | 'failure';
}

type NotificationData = {
  CALL_REQUEST_SENT: InotificationOptions;
  FAILURE: InotificationOptions;
}

const ROUTES = {
  HOME: '/',
  SERVICES: '/services',
  CALCULATOR: '/calculator',
  ABOUTUS: '/about-us',
};

const URL = {
  MAIN_API: 'http://localhost:8000',
}

const MESSAGES = {
  UNDEFINED: 'Во время выполнения запроса произошла ошибка. Пожалуйста, попробуйте повторить отправку данных'
}

export const NOTIFICATION_OPTIONS: NotificationData = {
  CALL_REQUEST_SENT: {
    TEXT: 'Данные успешно отправлены! Ожидайте звонка от нашего специалиста.',
    IMAGE_NAME: 'approval'
  },
  FAILURE: {
    TEXT: 'Что-то пошло не так! Попробуйте ещё раз.',
    IMAGE_NAME: 'failure'
  }
}

export {
  ROUTES,
  URL,
  MESSAGES
}
