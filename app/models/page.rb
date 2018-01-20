class Page < ApplicationRecord
  self.inheritance_column = 'sti_type'
end
