TrelloClone::Application.routes.draw do
  root to: 'static_pages#root'

  resources :users
  resource :session

  namespace :api, defaults: { format: :json } do
    resources :boards, except: [:new, :edit] do 
      resources :lists, only: [:create, :update, :destroy], shallow: true do 
        resources :cards, only: [:create, :update, :destroy], shallow: true
      end
    end

    # resources :items
    # resources :board_memberships
    # resources :card_assignments
  end
end
