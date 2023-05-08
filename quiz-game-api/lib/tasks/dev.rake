namespace :dev do
    desc 'Prepare the ambiente for development'
    task setup: :environment do
        %x(bundle install)
        Rake::Task["dev:reset"].invoke
        Rake::Task["dev:generate_user"].invoke
        Rake::Task["dev:generate_questions"].invoke
    end
    
    desc 'Resting the database'
    task reset: :environment do
        create_spinner("Resetting the database") do
            %x(rails db:drop)
            %x(rails db:create)
            %x(rails db:migrate)
            %x(rails db:seed)
        end
    end

    desc 'Generate a default user'
    task generate_user: :environment do
        create_spinner("Generating default user") do
            User.create(username: "admin", email: "user@admin.com", password: "admin")
        end
    end

    desc 'Generate a default questions'
    task generate_questions: :environment do
        create_spinner("Generating default questions") do
            Question.create(content: "What is the capital of France?", option_a: "Paris", option_b: "London", option_c: "Berlin", option_d: "Madrid", answer: "option_a")
            Question.create(content: "What is the capital of Spain?", option_a: "Paris", option_b: "London", option_c: "Berlin", option_d: "Madrid", answer: "option_d")
            Question.create(content: "What is the capital of Germany?", option_a: "Paris", option_b: "London", option_c: "Berlin", option_d: "Madrid", answer: "option_c")
            Question.create(content: "What is the capital of England?", option_a: "Paris", option_b: "London", option_c: "Berlin", option_d: "Madrid", answer: "option_b")
            Question.create(content: "What is the capital of Italy?", option_a: "Paris", option_b: "London", option_c: "Rome", option_d: "Madrid", answer: "option_c")
        end
    end

    private

    def create_spinner(message)
        spinner = TTY::Spinner.new("[:spinner] #{message}")
        spinner.auto_spin
        yield
        spinner.success
    end
end