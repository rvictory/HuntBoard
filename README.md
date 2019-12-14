# How to run (locally):
1. Install the required gems through either `gem install sinatra thin` or `bundle install`
1. `./scripts/run.sh`

# How to run (Docker):
1. Build the image: `./scripts/build_docker_image.sh`
1. Run it: `./scripts/run_huntboard_docker_interactive.sh`
1. Navigate to http://localhost:4567/test in your browser to view the demo page