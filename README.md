# How to run (locally):
### Linux
1. Install the required gems through either `gem install sinatra thin` or `bundle install`
1. `./scripts/run.sh`

### Windows
##### Prep
1. install latest ruby version for windows
1. run `gem install bundler`
1. run `bundle install` to ensure all gems are set up locally

##### Run Locally
1. run `rackup` in command prompt from the path that config.ru is in.  
1. Note the port the server starts with (9292 for me)
1. Navigate to http://localhost:9292/test in your browser to view the demo page

# How to run (Docker):
### Linux
1. Build the image: `./scripts/build_docker_image.sh`
1. Run it: `./scripts/run_huntboard_docker_interactive.sh`
1. Navigate to http://localhost:4567/test in your browser to view the demo page

### Windows
##### Prep
1. Ensure that this code repo is located in /opt/HuntBoard
1. Ensure Docker is installed on your machine and set up in rubymine: https://www.jetbrains.com/help/ruby/using-docker-as-a-remote-interpreter.html
1. Build the image: `docker build -t huntboard ./` from the repo location (/opt/HuntBoard)

##### Run in Docker
1. Run the image as a daemon (mapping in the local code so you can edit on the fly):
   1. `docker run -d -p4567:4567 -v /opt/HuntBoard:\opt\HuntBoard huntboard:latest`
1. Navigate to http://localhost:4567/test in your browser to view the demo page