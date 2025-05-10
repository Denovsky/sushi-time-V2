Database x Server:
docker compose up -d
Client:
cd /client && npm run dev

Use ./init_script.sh to add docker group to current user

Database port 5505 for both localhost and inner docker network,
Server port 3000 for localhost, 5506 for inner docker network.

Plans:
- done vue components
- docker-compose for server and client sides
- end all routes for database on server (maybe add factory method) 
- connect common dependencies in main one
- setup and optimize packages 
- admin panel, JWT token, roles model
- add sorting component (database + client)
- hash query (server side)
- hash node_modules
- auto commit / auto push by script / CI/CD
- auto pg_dump
- CI/CD, AWS/VPS
- настроить веб-сервер (nginx)
- logging
- defragmentation script of ID in DB
- timestamp auto delete (after week maybe)
- DB statisticks, server side logging load