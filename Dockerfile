FROM ruby:latest
ADD . /opt/HuntBoard
RUN apt-get update -qq && apt-get install -y build-essential
RUN gem install sinatra thin

