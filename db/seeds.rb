puts 'Planting seeds'
u1 = User.create(email: "liz@rd.com",  nickname: "AsburyMoon",  style_influence:"feminine")
u2 = User.create(email: "test@example.com",  nickname: "test1",  style_influence: "androgynous")


i1 = Item.create(item_type: "headwear", name: "baseball cap",color: "pink", occasion: "casual", user_id: u1)
i2 = Item.create(item_type: "top", name: "Roger Harvey t-shirt", color: "multi",occasion: "casual" , user_id: u1)
i3 = Item.create(item_type: "top", name: "Tim Barry t-shirt", color: "Black", occasion: "casual", user_id: u2)
i4 = Item.create(item_type: "top", name: "daisy blouse", color: "black", occasion: "formal", user_id: u1)
i5 = Item.create(item_type: "bottom", name: "tartan skirt", color: "multi", occasion: "casual", user_id: u1)
i6 = Item.create(item_type: "bottom", name: "Dickies pants", color: "gray", occasion: "formal", user_id: u2)
i7 = Item.create(item_type: "shoe", name: "mary janes", color: "black", occasion: "formal", user_id: u1)

o1 = Outfit.create(temp_f: 75, humidity_percent: 45, rain_inch: 0, snow_inch: 0, wind_mph: 5, cloud: 0, details: "A quick look", user_id: u1)
o2 = Outfit.create(temp_f: 68, humidity_percent: 60, rain_inch: 2, snow_inch: 0, wind_mph: 10, cloud: 7, details: "I don't need no shoes", user_id: u2)

ItemOutfitJoin.create(item_id: i1, outfit_id: o1)
ItemOutfitJoin.create(item_id: i2, outfit_id: o1)
ItemOutfitJoin.create(item_id: i5, outfit_id: o1)
ItemOutfitJoin.create(item_id: i3, outfit_id: o2)
ItemOutfitJoin.create(item_id: i6, outfit_id: o2)

puts 'Seeding complete 🌿'