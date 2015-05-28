get '/' do
  erb :index
end

get '/temperature_change' do
  headers 'Access-Control-Allow-Origin' => '*'
  {temperature: "20"}.to_json
end