FROM ruby:latest
RUN apt-get update -qq && apt-get install -y build-essential
ADD . /opt/HuntBoard
RUN cd /opt/HuntBoard && bundle install
ENTRYPOINT ["/opt/HuntBoard/run.sh", "0.0.0.0"]
