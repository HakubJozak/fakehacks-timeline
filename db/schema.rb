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

ActiveRecord::Schema.define(version: 2018_01_20_002121) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.bigint "byte_size", null: false
    t.string "checksum", null: false
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "pages", force: :cascade do |t|
    t.string "uuid"
    t.datetime "date"
    t.string "type"
    t.string "resource", limit: 2048
    t.string "resource_url", limit: 2048
    t.string "subject", limit: 2048
    t.string "url", limit: 2048
    t.text "text"
    t.string "sentiment"
    t.integer "like_count"
    t.integer "comment_count"
    t.integer "share_count"
    t.string "author"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.json "geneea_entities"
    t.json "geneea_topic"
    t.json "geneea_tags"
    t.json "geneea_sentiment"
    t.string "fakehack_label"
    t.index ["uuid"], name: "index_pages_on_uuid"
  end

  create_table "sources", force: :cascade do |t|
    t.string "domain"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "trust"
  end

end
