FROM python:3.6-alpine

WORKDIR /app

ADD requirements.txt /app/requirements.txt

RUN pip install -r requirements.txt

ADD . /app

EXPOSE 8089

CMD ["python","app.py"]