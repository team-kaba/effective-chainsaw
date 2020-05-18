FROM python:3.6-alpine
ENV PYTHONUNBUFFERED 1
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
ADD requirements.txt /usr/src/app
RUN pip install -U pip && pip install -r requirements.txt
ADD . /usr/src/app
ENTRYPOINT [ "python manage.py migrate" && "python manage.py runserver 0.0.0.0"]