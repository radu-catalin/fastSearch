container=$1
task=$2

docker-compose exec -T ${container} npm run ${task}