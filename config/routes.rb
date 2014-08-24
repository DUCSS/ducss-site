Rails.application.routes.draw do
  root 'home#index'
  devise_for :users, :skip => [:sessions]
  as :user do
    get "admin" => "devise/sessions#new", :as => :new_user_session
    post "admin" => "devise/sessions#create", :as => :user_session
    delete "admin/logout" => "devise/sessions#destroy", :as => :destroy_user_session 
  end
  mount RailsAdmin::Engine => '/admin/dashboard', as: 'rails_admin'
end
