# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

users = User.create([{name: "Rob", password: "testing"}])

posts = Post.create([{content: "This is a post it is cool", likes: 0, user_id: 1}])

comments = Comment.create([{content: "I like this post", likes:0, user_id: 1, post_id: 1}])