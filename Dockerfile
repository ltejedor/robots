FROM python

EXPOSE 5000
VOLUME ["/app"]

WORKDIR /app

RUN pip install flask
RUN pip install requests

COPY robots/.venv /venv
RUN . /venv/bin/activate

ENV FLASK_APP=flaskr
ENV FLASK_ENV=development

CMD flask run --host=0.0.0.0