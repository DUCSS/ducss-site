Rails.application.routes.draw do
  root 'home#index'
  post 'contact' => 'home#email', as: :send_message
  devise_for :users, skip: [:sessions]
  as :user do
    get "admin" => "devise/sessions#new", as: :new_user_session
    post "admin" => "devise/sessions#create", as: :user_session
    delete "admin/logout" => "devise/sessions#destroy", as: :destroy_user_session
  end
  get "events" => "events#index", as: :all_events
  get "events/upcoming" => "events#upcoming", as: :upcoming_events
  get "events/previous" => "events#previous", as: :previous_events
  get "events/event/:slug" => "events#show", as: :show_event
  get "library" => "books#index", as: :library
  mount RailsAdmin::Engine => '/admin/dashboard', as: 'rails_admin'
end
