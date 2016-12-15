# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20161215192244) do

  create_table "beers", force: :cascade do |t|
    t.datetime "date"
    t.string   "name"
    t.string   "style"
    t.string   "alcohol"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string   "hop"
    t.string   "yeast"
    t.string   "malts"
    t.string   "ibu"
    t.string   "blg"
  end

  create_table "standings", force: :cascade do |t|
    t.integer  "games"
    t.integer  "wins"
    t.integer  "losses"
    t.integer  "losses_ot"
    t.integer  "points"
    t.integer  "points_pct"
    t.integer  "goals"
    t.integer  "opp_goals"
    t.integer  "srs"
    t.integer  "sos"
    t.integer  "points_pct_old"
    t.integer  "ro_wins"
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
    t.string   "team_name"
  end

  create_table "trackers", force: :cascade do |t|
    t.string   "ip"
    t.string   "country_code"
    t.string   "country_name"
    t.string   "region_code"
    t.string   "region_name"
    t.string   "city"
    t.string   "zip_code"
    t.string   "time_zone"
    t.integer  "latitude"
    t.integer  "longitude"
    t.integer  "metro_code"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
    t.string   "controller"
    t.string   "action"
    t.text     "other"
  end

  create_table "users", force: :cascade do |t|
    t.string   "email",                null: false
    t.string   "password_digest",      null: false
    t.string   "confirmation_token"
    t.datetime "confirmed_at"
    t.datetime "confirmation_sent_at"
    t.datetime "created_at",           null: false
    t.datetime "updated_at",           null: false
    t.boolean  "admin"
  end

end
