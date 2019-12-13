FROM ruby:latest
RUN apt-get update -qq && apt-get install -y build-essential
RUN gem install sinatra thin
ADD . /opt/HuntBoard
ENTRYPOINT ["/opt/HuntBoard/run.sh", "0.0.0.0"]
