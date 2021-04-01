# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Pad.destroy_all
Photo.destroy_all
Review.destroy_all


20.times{User.create!(
  username: Faker::Internet.username(separators: %w(. _ -)),
  email: Faker::Internet.safe_email,
  password: Faker::Internet.password(min_length: 7),
  first_name: Faker::Name.first_name,
  last_name: Faker::Name.last_name,
)}


User.all.find_each do |user|
Pad.create!(
  name: Faker::Company.bs,
  rooms: Faker::Number.number(digits:1),
  available_dates: Faker::Date.between(from: '2021-04-20', to: '2021-08-30'),
  private_kitchen: Faker::Boolean.boolean,
  private_bathroom: Faker::Boolean.boolean,
  location: Faker::Address.full_address,
  user: user
)
end
Pad.all.find_each do |pad|
  2.times {Photo.create!(
    url: Faker::LoremFlickr.image(search_terms: ['house']),
    pad: pad
  )}
end
Pad.all.find_each do |pad|
  2.times {Review.create!(
    content: Faker::Hipster.paragraph,
    pad: pad,
    user:User.all.sample
  )}
end


