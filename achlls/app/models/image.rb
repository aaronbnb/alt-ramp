class Image < ApplicationRecord
  before_validation :generate_alt_text

  def generate_alt_text
    puts self.img_src
  end
end
