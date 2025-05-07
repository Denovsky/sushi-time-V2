init_script for dev launch. $USER must be contained in docker group, if not use this:
./init_script.sh
make sure script executable for you: chmod +x init_script.sh

The main problem of init script is double shell create: command "newgrp" create a new shell each time, the correct way is "su - $USER"

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