puts 'Planting seeds'
u1 = User.create(email: "liz@rd.com",  nickname: "AsburyMoon",  style_influence:"feminine")
u2 = User.create(email: "test@example.com",  nickname: "test1",  style_influence: "androgynous")

o1 = Outfit.create(temp_f: "90", humidity_percent: "90", wind_mph: "0", cloud: "0", details: "All I need are some tasty waves, a cool buzz, and I'm fine.", weather_summary: "Scorhing hot", user_id: u1.id)
o2 = Outfit.create(temp_f: "80", humidity_percent: "59", wind_mph: "9", cloud: "0", details: "Graduation Day", weather_summary: "Mostly sunny", user_id: u1.id)
# "temp_f"
#     t.integer "humidity_percent"
#     t.integer "wind_mph"
#     t.integer "cloud"
#     t.text "details"
#     t.string "weather_summary"
#     t.integer "user_id"

# i1 = Item.create(item_type: "headwear", name: "baseball cap",color: "pink", occasion: "casual", user_id: u1.id)
# i1.image.attach(io: File.open('../public/noImage.jpg'), filename: 'noImage.jpg')
# i2 = Item.create(item_type: "top", name: "Roger Harvey t-shirt", color: "multi",occasion: "casual" , user_id: u1.id)
# i3 = Item.create(item_type: "top", name: "Tim Barry t-shirt", color: "Black", occasion: "casual", user_id: u2.id)
# i4 = Item.create(item_type: "top", name: "daisy blouse", color: "black", occasion: "formal", user_id: u1.id)
# i5 = Item.create(item_type: "bottom", name: "tartan skirt", color: "multi", occasion: "casual", user_id: u1.id)
# i6 = Item.create(item_type: "bottom", name: "Dickies pants", color: "gray", occasion: "formal", user_id: u2.id)
# i7 = Item.create(item_type: "shoe", name: "mary janes", color: "black", occasion: "formal", user_id: u1.id)

# o1 = Outfit.create(temp_f: 75, humidity_percent: 45, rain_inch: 0, snow_inch: 0, wind_mph: 5, cloud: 0, details: "A quick look", user_id: u1.id)
# o2 = Outfit.create(temp_f: 68, humidity_percent: 60, rain_inch: 2, snow_inch: 0, wind_mph: 10, cloud: 7, details: "I don't need no shoes", user_id: u2.id)

# ItemOutfitJoin.create(item_id: i1.id, outfit_id: o1.id)
# ItemOutfitJoin.create(item_id: i2.id, outfit_id: o1.id)
# ItemOutfitJoin.create(item_id: i5.id, outfit_id: o1.id)
# ItemOutfitJoin.create(item_id: i3.id, outfit_id: o2.id)
# ItemOutfitJoin.create(item_id: i6.id, outfit_id: o2.id)

puts 'Seeding complete 🌿'