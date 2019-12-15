require_relative 'server'
require "opal-sprockets"

opal = Opal::Server.new {|s|
  s.append_path 'assets'
  s.main = 'application'
}

#map '/__opal_source_maps__' do
#  run opal.source_maps
#end

map '/assets' do
  run opal.sprockets
end

run HuntBoard