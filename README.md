Server Node.js+Express+TS (from /server):
npm run ts_run
Client Vue3.js+Nodemon+Pinia (from /client):
npm run dev
Database PostgreSQL (from /database):
sudo docker compose up -d


Планы:
- docker-compose на всё
- прописать роуты БД в сервере
- объединить зависимости node.js, разобраться в package.json
- JWT аутентификация админа, ограничение ролей
- добавить компоненты сортировки для продуктов в каталоге (через PSQL)
- организация роутов и страниц в клиентской части
- Добавить кэширование запросов
- Добавить кэширование node_modules
- добавить скрипт автокомитов изменений
- добавить docker compose развертывание
- авто-дамп БД
- CI/CD, AWS/VPS
- настроить веб-сервер (nginx)
- добавить логирование
- скрипт дефрагментации айдишников для БД
- скрипт автоудаления продуктов по тайм штампу
- статистика БД через ClickHouse