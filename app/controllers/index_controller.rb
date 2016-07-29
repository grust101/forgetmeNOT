

get '/' do
  erb :'index'
end

get '/new' do
  erb :'new'
end


post '/' do
	
	@number_to_send = params[:reminder][:phone_number]
	@numbers_to_send_to = @number_to_send.split(" ")
	@message_body = params[:reminder][:message]
	p @message_body

	MessageService.send_message(@numbers_to_send_to, @message_body)

	redirect '/show'

end

get '/show' do
  erb :"show"
end


 class MessageService
    def initialize 
    end

    def self.send_message(numbers_to_send, message_body)

        numbers_to_send.each do |number_to_send| 

    # put your own credentials here
        account_sid = ENV["TWILIO_ACCOUNT_SID"]
        auth_token = ENV["TWILIO_AUTH_TOKEN"]
        auth_number = ENV["TWILIO_NUMBER"]
        # set up a client to talk to the Twilio REST API
        client = Twilio::REST::Client.new account_sid, auth_token

        client.account.messages.create({

            :from => auth_number,
            :to => number_to_send,
            :body => message_body,
            })
        end

    end

end
