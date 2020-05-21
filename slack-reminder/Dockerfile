FROM python:3.6-alpine
ENV PYTHONUNBUFFERED 1
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY requirements.txt /usr/src/app
RUN apk --update add tzdata && \
    rm -rf /var/cache/apk/*
ENV TZ Asia/Tokyo
RUN pip install -U pip && pip install -r requirements.txt
COPY . /usr/src/app