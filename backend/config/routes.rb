Rails.application.routes.draw do
  resources :users, only: [:index, :create]  
  
  resources :trips do
    resources :days, only: [:create, :update, :destroy] do
      resources :entries, except: [:index, :show]
    end
    resources :collaborators, only: [:create, :destroy]
    resources :ideas, only: [:index, :show, :create, :destroy] do
      resources :votes, only: [:update]
    end
  end
  

  resources :activities, only: [:index]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

end
