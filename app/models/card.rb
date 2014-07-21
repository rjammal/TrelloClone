# == Schema Information
#
# Table name: cards
#
#  id          :integer          not null, primary key
#  title       :string(255)      not null
#  list_id     :integer          not null
#  description :text
#  created_at  :datetime
#  updated_at  :datetime
#  ord         :integer          default(0), not null
#

class Card < ActiveRecord::Base
  belongs_to :list
  has_many :items
  has_many :card_assignments

  validates :title, :list, :ord, presence: true

  before_validation :set_ord

  def set_ord 
    if !self.ord
      max_ord = Card.where(list_id: list_id).maximum(:ord) || 0
      self.ord = max_ord + 1
    end
  end
end
