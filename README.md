# RUN
## Docker Image
```sh
# Build Image
docker build \
    -f $PWD/robots/Dockerfile \
    -t robots_frontend \
    .
# Run Image
docker run -it \
    -v $PWD/robots:/app \
    -p 5000:5000 \
    robots_frontend
```
## (Ad-Hoc) Docker Container
### Docker-based Environment
```sh
docker run -it \
    -v $PWD/robots:/app \
    -w /app \
    -p 5000:5000 \
    python /bin/bash
```
### Install Required Libraries
```sh
pip install flask
pip install requests
```
### Set Environment Variables
```sh
. .venv/bin/activate 
export FLASK_APP=flaskr
export FLASK_ENV=development
```
### Start App
```sh
flask run --host=0.0.0.0
```

# Quick References
N/A