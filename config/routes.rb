Rails.application.routes.draw do

  root 'welcome#home'
  get '/boatjump', to: 'welcome#boatjump', as: :boatjump
  get '/webdings', to: 'welcome#webdings', as: :webdings
  get '/eatbooking', to: 'welcome#eatbooking', as: :eatbooking
  get '/oasiscatamaran', to: 'welcome#oasiscatamaran', as: :oasiscatamaran
  resources :contact, only: [:new,:create]
  get '/greetings', to: 'contact#greetings', as: :greetings
  get '/consul/budget', to: 'budget#new', as: :consul_budget
  resources :budget, only: [:create, :new]

  if Rails.env.development?
    mount LetterOpenerWeb::Engine, at: "/devel/emails"
  end

end
