namespace :dev do
    desc 'Creating default ambient for development'
    task setup: :environment do
        puts "Reseting database and running migrations..."
        %x(rails db:drop db:create db:migrate db:seed)
        puts "Database has been reset!"
        puts "Creating test user..."
        User.create("username": "user", "email": "user@teste.com", "password": "123456")
        puts "User has been created!"
    end
end