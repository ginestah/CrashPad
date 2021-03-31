# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_03_31_192532) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "pads", force: :cascade do |t|
    t.string "name"
    t.integer "rooms"
    t.date "available_dates"
    t.boolean "private_kitchen"
    t.integer "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.boolean "private_bathroom"
    t.string "location"
    t.index ["user_id"], name: "index_pads_on_user_id"
  end

  create_table "photos", force: :cascade do |t|
    t.integer "pad_id", null: false
    t.string "url"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["pad_id"], name: "index_photos_on_pad_id"
  end

  create_table "reviews", force: :cascade do |t|
    t.integer "pad_id", null: false
    t.string "content"
    t.integer "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["pad_id"], name: "index_reviews_on_pad_id"
    t.index ["user_id"], name: "index_reviews_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "email"
    t.string "username"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "pads", "users"
  add_foreign_key "photos", "pads"
  add_foreign_key "reviews", "pads"
  add_foreign_key "reviews", "users"
end
