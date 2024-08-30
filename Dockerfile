# Используем официальный образ Node.js как базовый
FROM node:18-alpine

# Устанавливаем рабочую директорию внутри контейнера
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем остальной код приложения в контейнер
COPY . .

# Собираем React-приложение
RUN npm run build

# Устанавливаем пакет serve для запуска статических файлов
RUN npm install -g serve

# Открываем порт 3000 для доступа к приложению
EXPOSE 3000

# Запускаем приложение с помощью serve
CMD ["serve", "-s", "build", "-l", "3000"]
