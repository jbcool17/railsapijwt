class BeerSerializer < ActiveModel::Serializer
  attributes :id, :name, :style, :alcohol, :hop, :yeast
end
