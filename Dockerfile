FROM ruby:latest
RUN apt-get update -qq && apt-get install -y build-essential
ADD . /opt/HuntBoard
RUN cd /opt/HuntBoard && bundle install
ENTRYPOINT ["/opt/HuntBoard/scripts/run.sh", "0.0.0.0"]
