require 'sinatra/base'
require "json"

class HuntBoard < Sinatra::Base
  configure do
    set server: 'thin', connections: []
  end

  @@cards = {
      "test_card" => {:_id => "test_card", :top => 0, :left => 0, :text => "This is a test card <p></p>"}
  }

  get "/test" do
    erb :test_cards
  end

  get "/cards" do
    content_type "application/json"
    @@cards.values.to_json
  end

  post "/cards/update_position" do
    new_top = params[:top]
    new_left = params[:left]
    _id = params[:_id]
    text =params[:text]
    @@cards[_id][:top] = new_top
    @@cards[_id][:left] = new_left
    @@cards[_id][:text] = text

    settings.connections.each { |out| out << "data: #{@@cards[_id].to_json}\n\n" }

    true.to_json
  end

  get '/card_stream', provides: 'text/event-stream' do
    stream :keep_open do |out|
      settings.connections << out
      out.callback { settings.connections.delete(out) }
    end
  end
end

