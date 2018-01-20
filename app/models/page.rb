class Page < ApplicationRecord
  self.inheritance_column = 'sti_type'

  default_scope -> { order(date: :desc) }
end
