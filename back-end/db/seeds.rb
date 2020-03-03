# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

users = User.create([{name: "Rob", password: "testing"}, {name: "Joe", password: "123456"}])

posts = Post.create([{content: "This is a post it is cool", likes: 0, user_id: 1}, {content: "My post is even better", likes: 0, user_id: 2}])

comments = Comment.create([{content: "comment 1", likes:0, user_id: 1, post_id: 1},
{content: "comment 2", likes:0, user_id: 1, post_id: 2},
{content: "comment 3", likes:0, user_id: 2, post_id: 1}])