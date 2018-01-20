class Page < ApplicationRecord
  self.inheritance_column = 'sti_type'

  default_scope -> { order(date: :desc) }

  scope :by_domain, -> (domain) {
    http  = "http://#{domain}%"
    https = "https://#{domain}%"    
    where("resource_url ILIKE ? OR resource_url ILIKE ?", http, https)
  }
end
