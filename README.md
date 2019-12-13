# How to run (locally):
1. Install the required gems through either `gem install sinatra thin` or `bundle install`
1. `./run.sh`

# How to run (Docker):
1. Build the image: `docker build -t huntboard .`
1. Run it: `docker run -it -p4567:4567 huntboard`
1. Navigate to http://localhost:4567/test in your browser to view the demo page