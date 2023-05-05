namespace :dev do
    desc 'Reseting database and running migrations'
    task setup: :environment do
        puts "Reseting database and running migrations..."
        %x(rails db:drop db:create db:migrate db:seed)
        puts "Database has been reset!"
    end
end