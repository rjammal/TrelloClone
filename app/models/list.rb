# == Schema Information
#
# Table name: lists
#
#  id         :integer          not null, primary key
#  title      :string(255)      not null
#  board_id   :integer          not null
#  created_at :datetime
#  updated_at :datetime
#  ord        :integer          default(0), not null
#

class List < ActiveRecord::Base
  validates :title, :board, :ord, presence: true

  belongs_to :board
  has_many :cards, order: "ord"

  before_validation :set_ord

  def set_ord 
    if !self.ord
      max_ord = List.where(board_id: board_id).maximum(:ord) || 0
      self.ord = max_ord + 1
    end
  end
end
