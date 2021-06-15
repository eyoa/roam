if Rails.env === 'production' 
  Rails.application.config.session_store :cookie_store, key: '_roam', domain: 'domain'
else
  Rails.application.config.session_store :cookie_store, key: '_roam'
end