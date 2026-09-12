/**
 * KALKULATOR KALORI AJAIB
 * Author: Coach Mas Anang for Bebeee (Syakira) 
 */
// Tambahan DOM Reset
const resetTodayBtn = document.getElementById('resetTodayBtn');
// --- 1. FOOD DATABASE ---
// Estimasi kalori per 100 gram/ml berbasis data publik (USDA, dll)
const foodDatabase = [
    { name: "Cold Stone Creamery Like It Sweet Cream", category: "Es Krim", kcalPer100g: 290 },
    { name: "Cold Stone Creamery Chocolate Devotion", category: "Es Krim", kcalPer100g: 330 },
    { name: "Cold Stone Creamery Founder's Favorite", category: "Es Krim", kcalPer100g: 340 },
    { name: "Cold Stone Creamery Birthday Cake Remix", category: "Es Krim", kcalPer100g: 320 },
    { name: "Cold Stone Creamery Mint Mint Chocolate Chocolate", category: "Es Krim", kcalPer100g: 315 },
    { name: "Cold Stone Creamery Strawberry Banana Renowned", category: "Es Krim", kcalPer100g: 270 },
    { name: "Cold Stone Creamery Coffee Lover's Only", category: "Es Krim", kcalPer100g: 300 },
    { name: "Cold Stone Creamery Oreo Overload", category: "Es Krim", kcalPer100g: 335 },
    { name: "Cold Stone Creamery Cheesecake Fantasy", category: "Es Krim", kcalPer100g: 325 },
    { name: "Baskin Robbins Single Scoop Vanilla", category: "Es Krim", kcalPer100g: 230 },
    { name: "Baskin Robbins Single Scoop Chocolate", category: "Es Krim", kcalPer100g: 250 },
    { name: "Baskin Robbins Mint Chocolate Chip", category: "Es Krim", kcalPer100g: 265 },
    { name: "Baskin Robbins Jamoca Almond Fudge", category: "Es Krim", kcalPer100g: 270 },
    { name: "Baskin Robbins Very Berry Strawberry", category: "Es Krim", kcalPer100g: 215 },
    { name: "Baskin Robbins Cookie Dough", category: "Es Krim", kcalPer100g: 285 },
    { name: "Baskin Robbins Pralines 'n Cream", category: "Es Krim", kcalPer100g: 280 },
    { name: "Baskin Robbins World Class Chocolate", category: "Es Krim", kcalPer100g: 275 },
    { name: "Baskin Robbins Rainbow Sherbet", category: "Es Krim", kcalPer100g: 190 },
    { name: "Baskin Robbins Milkshake Vanilla", category: "Es Krim", kcalPer100g: 210 },
    { name: "Momoyo Ice Cream Cone Original", category: "Es Krim", kcalPer100g: 170 },
    { name: "Momoyo Boba Sundae", category: "Es Krim", kcalPer100g: 205 },
    { name: "Momoyo Mango Sundae", category: "Es Krim", kcalPer100g: 190 },
    { name: "Momoyo Strawberry Sundae", category: "Es Krim", kcalPer100g: 190 },
    { name: "Momoyo Chocolate Sundae", category: "Es Krim", kcalPer100g: 215 },
    { name: "Momoyo Fruit Tea Original", category: "Es Krim", kcalPer100g: 48 },
    { name: "Momoyo Cheese Tea Series", category: "Es Krim", kcalPer100g: 135 },
    { name: "Momoyo Milk Tea with Pearls", category: "Es Krim", kcalPer100g: 85 },
    { name: "Momoyo Brown Sugar Boba Milk", category: "Es Krim", kcalPer100g: 95 },
    { name: "Momoyo Taro Milk Tea", category: "Es Krim", kcalPer100g: 80 },

    { name: "Bin Xue / Bindo Ice Cream Cone", category: "Es Krim", kcalPer100g: 172 },
    { name: "Bin Xue Sundae Boba Brown Sugar", category: "Es Krim", kcalPer100g: 210 },
    { name: "Bin Xue Sundae Strawberry Jam", category: "Es Krim", kcalPer100g: 192 },
    { name: "Bin Xue Sundae Chocolate Syrup", category: "Es Krim", kcalPer100g: 208 },
    { name: "Bin Xue Fruit Tea Lemon", category: "Es Krim", kcalPer100g: 45 },
    { name: "Bin Xue Milk Tea Boba", category: "Es Krim", kcalPer100g: 82 },
    { name: "Bin Xue Smoothies Mango", category: "Es Krim", kcalPer100g: 165 },
    { name: "Bin Xue Sundae Red Bean", category: "Es Krim", kcalPer100g: 185 },
    { name: "Bin Xue Ice Cream Sundae Taro", category: "Es Krim", kcalPer100g: 195 },
    { name: "Bin Xue Lemon Jasmine Tea", category: "Es Krim", kcalPer100g: 42 },

    { name: "McDonald's Sundae Chocolate", category: "Es Krim", kcalPer100g: 185 },
    { name: "McDonald's Sundae Strawberry", category: "Es Krim", kcalPer100g: 170 },
    { name: "McDonald's Cone Vanilla", category: "Es Krim", kcalPer100g: 165 },
    { name: "McDonald's McFlurry Oreo", category: "Es Krim", kcalPer100g: 220 },
    { name: "McDonald's McFlurry Choco Krunch", category: "Es Krim", kcalPer100g: 230 },
    { name: "McDonald's Fanta Float", category: "Es Krim", kcalPer100g: 65 },
    { name: "McDonald's Coke Float", category: "Es Krim", kcalPer100g: 68 },
    { name: "McDonald's Triple Choco Pie with Ice Cream", category: "Es Krim", kcalPer100g: 275 },
    { name: "McDonald's Soft Serve with Chocolate Dip", category: "Es Krim", kcalPer100g: 210 },
    { name: "McDonald's Iced Coffee Float", category: "Es Krim", kcalPer100g: 90 },

    { name: "Starbucks Java Chip Frappuccino Blended", category: "Es Krim", kcalPer100g: 90 },
    { name: "Starbucks Caramel Frappuccino Blended", category: "Es Krim", kcalPer100g: 85 },
    { name: "Starbucks Espresso Frappuccino", category: "Es Krim", kcalPer100g: 75 },
    { name: "Starbucks Green Tea Cream Frappuccino", category: "Es Krim", kcalPer100g: 92 },
    { name: "Starbucks Vanilla Cream Frappuccino", category: "Es Krim", kcalPer100g: 88 },
    { name: "Starbucks Chocolate Cream Chip Frappuccino", category: "Es Krim", kcalPer100g: 96 },
    { name: "Starbucks Signature Hot Chocolate (Iced)", category: "Es Krim", kcalPer100g: 82 },
    { name: "Starbucks Asian Dolce Frappuccino", category: "Es Krim", kcalPer100g: 94 },
    { name: "Starbucks Double Chocolaty Chip Frappuccino", category: "Es Krim", kcalPer100g: 98 },
    { name: "Starbucks Cold Brew with Sweet Cream", category: "Es Krim", kcalPer100g: 55 },

    { name: "Ai-CHA Ice Cream Cone Original", category: "Es Krim", kcalPer100g: 170 },
    { name: "Ai-CHA Boba Sundae", category: "Es Krim", kcalPer100g: 208 },
    { name: "Ai-CHA Strawberry Sundae", category: "Es Krim", kcalPer100g: 192 },
    { name: "Ai-CHA Chocolate Sundae", category: "Es Krim", kcalPer100g: 212 },
    { name: "Ai-CHA Mi-Shake Smoothies", category: "Es Krim", kcalPer100g: 158 },
    { name: "Ai-CHA Lemon Jasmine Tea", category: "Es Krim", kcalPer100g: 45 },
    { name: "Ai-CHA Passion Fruit Tea", category: "Es Krim", kcalPer100g: 50 },
    { name: "Ai-CHA Milk Tea with Pearl", category: "Es Krim", kcalPer100g: 85 },
    { name: "Ai-CHA Brown Sugar Milk Tea", category: "Es Krim", kcalPer100g: 92 },
    { name: "Ai-CHA Mango Smoothies", category: "Es Krim", kcalPer100g: 165 },

    { name: "Waiwai Ice Cream Cone", category: "Es Krim", kcalPer100g: 168 },
    { name: "Waiwai Sundae Boba", category: "Es Krim", kcalPer100g: 205 },
    { name: "Waiwai Sundae Strawberry", category: "Es Krim", kcalPer100g: 188 },
    { name: "Waiwai Sundae Chocolate", category: "Es Krim", kcalPer100g: 210 },
    { name: "Waiwai Fruit Tea Jasmine", category: "Es Krim", kcalPer100g: 44 },
    { name: "Waiwai Milk Tea Boba", category: "Es Krim", kcalPer100g: 84 },
    { name: "Waiwai Smoothies Avocado", category: "Es Krim", kcalPer100g: 175 },
    { name: "Waiwai Smoothies Taro", category: "Es Krim", kcalPer100g: 165 },
    { name: "Waiwai Lemonade Fresh", category: "Es Krim", kcalPer100g: 48 },
    { name: "Waiwai Cheese Foam Milk Tea", category: "Es Krim", kcalPer100g: 130 },

    { name: "Zaky Ice Cream Cone Vanilla", category: "Es Krim", kcalPer100g: 170 },
    { name: "Zaky Sundae Boba Brown Sugar", category: "Es Krim", kcalPer100g: 208 },
    { name: "Zaky Sundae Strawberry Jam", category: "Es Krim", kcalPer100g: 190 },
    { name: "Zaky Sundae Chocolate", category: "Es Krim", kcalPer100g: 212 },
    { name: "Zaky Milk Tea with Pearl", category: "Es Krim", kcalPer100g: 85 },
    { name: "Zaky Lemon Tea", category: "Es Krim", kcalPer100g: 45 },
    { name: "Zaky Smoothies Mango", category: "Es Krim", kcalPer100g: 160 },
    { name: "Zaky Taro Milk Tea", category: "Es Krim", kcalPer100g: 82 },
    { name: "Zaky Cheese Tea Series", category: "Es Krim", kcalPer100g: 135 },
    { name: "Zaky Brown Sugar Fresh Milk", category: "Es Krim", kcalPer100g: 95 },
    { name: "Mixue Ice Cream (Vanilla Soft Serve Cone)", category: "Es Krim", kcalPer100g: 175 },
    { name: "Mixue Boba Sundae", category: "Es Krim", kcalPer100g: 210 },
    { name: "Mixue Strawberry Sundae", category: "Es Krim", kcalPer100g: 195 },
    { name: "Mixue Lucky Sundae Chocolate", category: "Es Krim", kcalPer100g: 205 },
    { name: "Mixue Mi-Shake (Smoothie Susu)", category: "Es Krim", kcalPer100g: 160 },
    { name: "Mixue Lemon Jasmine Tea", category: "Es Krim", kcalPer100g: 45 },
    { name: "Mixue Real Fruit Tea (Mango/Peach)", category: "Es Krim", kcalPer100g: 55 },
    { name: "Mixue Smooth Ice with Red Bean", category: "Es Krim", kcalPer100g: 180 },
    { name: "Mixue Passion Fruit Jasmine Tea", category: "Es Krim", kcalPer100g: 50 },
    { name: "Mixue Chocolate Cookie Smoothies", category: "Es Krim", kcalPer100g: 225 },
    { name: "Dessert Box (Rasa Regal / Chocolate Ganache)", category: "Dessert", kcalPer100g: 390 }, // Full whipped cream, biskuit, mentega cair, dan coklat
    { name: "Martabak Manis Keju Susu (Terang Bulan - Per Potong Sedang)", category: "Jajanan PKL", kcalPer100g: 360 }, // Adonan tebal penuh mentega *wysman* + keju melimpah
    { name: "Martabak Manis Coklat Kacang", category: "Jajanan PKL", kcalPer100g: 340 }, // Adonan tebal + margarin + taburan gula & coklat
    { name: "Pukis Lumer / Pukis Topping Keju Coklat", category: "Jajanan PKL", kcalPer100g: 270 }, // Adonan telur, santan, terigu, dan gula tinggi
    { name: "Terang Bulan Tipis Kering (Tipker)", category: "Jajanan PKL", kcalPer100g: 410 }, // Tipis renyah tapi kalorinya padat karena karamel gula & mentega
    { name: "Roti Bakar Keju Susu Kental Manis", category: "Jajanan PKL", kcalPer100g: 320 }, // Roti putih + mentega tebal + SKM + keju parut
    { name: "Pisang Nugget Kekinian (Topping Tiramisu/Matcha/Keju)", category: "Jajanan PKL", kcalPer100g: 330 }, // Pisang goreng tepung panir + saus manis aneka rasa
    { name: "Es Krim Cone (Vanilla/Coklat Standar)", category: "Fast Food", kcalPer100g: 207 }, // Susu, gula, dan lemak susu beku
    { name: "Soft Ice Cream (Sundae dengan Saus Coklat/Strawberry)", category: "Fast Food", kcalPer100g: 230 },
    { name: "Bubble Tea / Boba Milk Tea (Gula Normal)", category: "Minuman", kcalPer100g: 85 }, // Per 100 ml (1 gelas 500ml bisa tembus 400+ kcal!)
    { name: "Brown Sugar Fresh Milk with Boba", category: "Minuman", kcalPer100g: 95 }, // Susu segar + sirup brown sugar kental + boba tapioka
    
    // === JAJANAN ASIN & GURIH (Teman Nonton / Nongkrong) ===
    { name: "French Fries / Kentang Goreng (Fast Food)", category: "Fast Food", kcalPer100g: 312 }, // Kentang + rendaman minyak goreng panas
    { name: "Wedges Kentang Goreng (Kulit Tebal Berbumbu)", category: "Fast Food", kcalPer100g: 210 }, // Lebih padat, sedikit lebih rendah minyak dari french fries
    { name: "Hash Brown (Kentang Tumbuh Goreng)", category: "Fast Food", kcalPer100g: 260 },
    { name: "Onion Rings Goreng Tepung", category: "Fast Food", kcalPer100g: 330 }, // Bawang bombay berbalut tepung terigu & minyak
    { name: "Fried Chicken Skin / Kulit Ayam Krispi", category: "Fast Food", kcalPer100g: 540 }, // *The Ultimate Calorie Bomb!* 100% lemak hewani & tepung
    { name: "Keripik Singkong Balado (Sanjai / Keripik Pedas Manis)", category: "Cemilan", kcalPer100g: 480 }, // Singkong tipis digoreng + balutan gula merah & cabai
    { name: "Kerupuk Udang / Kerupuk Kaleng Putih", category: "Cemilan", kcalPer100g: 500 }, // Tapioka kering digoreng minyak (ringan tapi kalorinya pure lemak & karbo)
    { name: "Makaroni Bantat Pedas", category: "Cemilan", kcalPer100g: 400 },
    { name: "Basreng (Bakso Goreng Kering Pedas Daun Jeruk)", category: "Cemilan", kcalPer100g: 420 }, // Bakso ikan diiris tipis, digoreng garing + minyak cabai
    { name: "Salad Buah (Dengan Mayonaise & Keju Parut Melimpah)", category: "Dessert", kcalPer100g: 160 }, // Buahnya sehat, tapi saus mayo + kental manis + keju bikin kalorinya naik drastis!
    // === JAJANAN KEKINIAN GEN Z & PKL (Sering dibeli & Favorit) ===
    { name: "Seblak Original Kerupuk (Kuah Pedas Kencur)", category: "Jajanan PKL", kcalPer100g: 175 }, // Kerupuk kenyal yang direbus melar menyerap banyak air & minyak bumbu
    { name: "Seblak Spesial (Kerupuk, Makaroni, Sosis, Telur, Tulang)", category: "Jajanan PKL", kcalPer100g: 220 }, // Porsi lengkap dengan tambahan lemak hewani dan minyak tumis
    { name: "Cimol Goreng (Bumbu Tabur / Balado)", category: "Jajanan PKL", kcalPer100g: 330 }, // Tepung tapioka murni digoreng deep-fry (padat karbo & minyak)
    { name: "Cilor (Cimol Telur Ditusuk)", category: "Jajanan PKL", kcalPer100g: 270 }, // Tepung kanji digoreng dengan balutan telur kocok
    { name: "Cireng Goreng Crispy (Bumbu Rujak)", category: "Jajanan PKL", kcalPer100g: 310 }, // Tepung tapioka digoreng kering + saus gula merah kacang
    { name: "Baso Aci Kuah Pedas (Porsi Lengkap dengan Siomay/Tahu)", category: "Jajanan PKL", kcalPer100g: 210 }, // Tepung kanji + kaldu berlemak dan minyak bawang
    { name: "Batagor Kuah / Goreng (Bumbu Kacang)", category: "Jajanan PKL", kcalPer100g: 295 }, // Adonan ikan/tahu bersagu digoreng + bumbu kacang pekat
    { name: "Siomay Bandung (Tahu, Kentang, Kol, Telur, Siomay + Bumbu Kacang)", category: "Jajanan PKL", kcalPer100g: 205 }, // Relatif lebih seimbang karena banyak kukusan
    { name: "Telur Gulung PKL (Saus Sambal)", category: "Jajanan PKL", kcalPer100g: 340 }, // Telur dikocok tipis dan digulung dalam rendaman minyak panas melimpah
    { name: "Makaroni Ngehe / Makaroni Goreng Pedas", category: "Jajanan PKL", kcalPer100g: 410 }, // Pasta makaroni digoreng kering garing + bumbu bubuk gurih asin
    { name: "Lidi-Lidian / Mie Lidi Asin Pedas", category: "Jajanan PKL", kcalPer100g: 430 }, // Tepung terigu/kanji digoreng padat minyak dan bumbu penyedap
    { name: "Sempol Ayam (Goreng Tepung Telur)", category: "Jajanan PKL", kcalPer100g: 280 }, // Daging giling dicampur kanji ditusuk lalu digoreng
    { name: "Tahu Bulat Kopong (Digoreng Dadakan)", category: "Jajanan PKL", kcalPer100g: 290 }, // Tahu kopong berongga yang menyerap banyak minyak goreng panas
    { name: "Es Teh Manis Kekinian / Es Esteh", category: "Minuman PKL", kcalPer100g: 50 }, // Tinggi kandungan gula pasir cair
    { name: "Thai Tea / Green Tea Susu Manis", category: "Minuman PKL", kcalPer100g: 85 }, // Teh pekat + susu kental manis + evaporasi berlimpah
    { name: "Es Coklat Kekinian (Collab Roti Dip)", category: "Minuman PKL", kcalPer100g: 95 }, // Susu coklat kental manis + celupan roti tawar
    { name: "Corn Dog Mozzarella (Tepung + Sosis/Keju Leleh)", category: "Fast Food", kcalPer100g: 350 }, // Sosis/keju dilapisi adonan tebal manis lalu digoreng
    { name: "Dimsum Mentai (Saus Mayonaise Dibakar/Blowtorch)", category: "Fast Food", kcalPer100g: 290 }, // Siomay ayam dilapisi saus mayo berlemak tinggi
    // === IKAN SEGAR / KUKUS / REBUS (Protein Murni, Sangat Sehat!) ===
    { name: "Ikan Nila (Mentah/Kukus)", category: "Protein", kcalPer100g: 96 }, // Super rendah kalori!
    { name: "Ikan Dori Fillet / Patin (Mentah/Kukus)", category: "Protein", kcalPer100g: 90 }, // Pilihan favorit menu diet
    { name: "Ikan Kakap Merah (Mentah/Kukus)", category: "Protein", kcalPer100g: 100 },
    { name: "Ikan Tuna Fillet (Mentah/Kukus)", category: "Protein", kcalPer100g: 108 }, // Tinggi protein, nyaris tanpa lemak
    { name: "Ikan Tongkol / Cakalang (Kukus/Rebus)", category: "Protein", kcalPer100g: 130 },
    { name: "Ikan Lele (Mentah/Kukus)", category: "Protein", kcalPer100g: 119 },
    { name: "Ikan Gurame (Mentah/Kukus)", category: "Protein", kcalPer100g: 125 },
    { name: "Ikan Mas (Mentah/Kukus)", category: "Protein", kcalPer100g: 127 },
    { name: "Ikan Bandeng (Mentah/Kukus)", category: "Protein", kcalPer100g: 148 }, // Sedikit lebih berlemak alami
    { name: "Ikan Kembung (Mentah/Kukus)", category: "Protein", kcalPer100g: 167 }, // Mengandung omega-3 tinggi (lemak baik)
    { name: "Ikan Tenggiri (Mentah/Kukus)", category: "Protein", kcalPer100g: 165 },
    { name: "Ikan Salmon (Mentah/Kukus/Sashimi)", category: "Protein", kcalPer100g: 208 }, // Kalori tinggi karena kaya lemak Omega-3 yang sangat sehat
    { name: "Ikan Bawal Mentah", category: "Protein", kcalPer100g: 96 },
    { name: "Ikan Teri Nasi / Teri Medan (Basah/Segar)", category: "Protein", kcalPer100g: 77 }, // Sangat rendah kalori jika segar

    // === IKAN BAKAR (Cocok untuk Diet, Hati-hati Bumbu Kecap) ===
    { name: "Ikan Bakar Rica (Tanpa Kecap)", category: "Protein", kcalPer100g: 130 }, // Bumbu rempah/pedas tidak banyak menyumbang kalori
    { name: "Ikan Nila Bakar Kecap", category: "Protein", kcalPer100g: 150 }, // Ekstra kalori dari karamelisasi kecap manis dan olesan margarin
    { name: "Ikan Gurame Bakar Kecap", category: "Protein", kcalPer100g: 165 },
    { name: "Ikan Bandeng Bakar (Tanpa Minyak)", category: "Protein", kcalPer100g: 160 },
    { name: "Ikan Salmon Panggang (Pan-seared tanpa minyak)", category: "Protein", kcalPer100g: 220 }, // Lemak alami salmon akan keluar saat dipanggang

    // === IKAN GORENG & OLAHAN TINGGI KALORI (Hati-hati!) ===
    { name: "Lele Goreng (Pecel Lele)", category: "Protein", kcalPer100g: 240 }, // Menyerap minyak sangat banyak
    { name: "Nila / Mujair Goreng", category: "Protein", kcalPer100g: 200 }, // Ikan tipis yang digoreng kering menyerap banyak minyak
    { name: "Gurame Goreng Terbang / Kering", category: "Protein", kcalPer100g: 250 },
    { name: "Ikan Mas Goreng", category: "Protein", kcalPer100g: 230 },
    { name: "Bandeng Presto Goreng", category: "Protein", kcalPer100g: 280 }, // Balutan telur + deep fried
    { name: "Ikan Teri Kering Goreng (Teri Kacang)", category: "Protein", kcalPer100g: 350 }, // Ikan kering padat kalori + minyak + gula bumbu
    { name: "Ikan Asin Sepat / Bulu Ayam (Goreng)", category: "Protein", kcalPer100g: 300 }, // Sangat padat kalori & natrium tinggi
    { name: "Fish and Chips (Ikan Dori Goreng Tepung)", category: "Fast Food", kcalPer100g: 280 }, // Adonan tepung tebal (batter) menyerap minyak
    { name: "Pempek Kapal Selam (Olahan Ikan Tenggiri)", category: "Protein", kcalPer100g: 230 }, // Dicampur tepung sagu/tapioka lalu digoreng
    { name: "Otak-Otak Ikan Bakar", category: "Protein", kcalPer100g: 170 }, // Ikan + santan + tepung sagu
    { name: "Sarden Kaleng (Dengan Saus Tomat)", category: "Protein", kcalPer100g: 185 }, // Saus tomatnya mengandung gula dan minyak
    // === OLAHAN AYAM SEHAT (Direbus/Dipanggang Tanpa Minyak) ===
    { name: "Dada Ayam Rebus (Tanpa Kulit)", category: "Protein", kcalPer100g: 165 }, // The Holy Grail of Diet!
    { name: "Dada Ayam Panggang (Tanpa Kulit)", category: "Protein", kcalPer100g: 165 },
    { name: "Paha Ayam Rebus (Tanpa Kulit)", category: "Protein", kcalPer100g: 177 }, // Sedikit lebih tinggi lemak alami dari dada
    { name: "Paha Ayam Panggang (Tanpa Kulit)", category: "Protein", kcalPer100g: 177 },
    { name: "Sayap Ayam Panggang (Dengan Kulit)", category: "Protein", kcalPer100g: 254 }, // Kulit ayam sangat padat lemak & kalori
    { name: "Dada Ayam Fillet (Mentah)", category: "Protein", kcalPer100g: 110 }, // Untuk referensi jika Bebeee menimbang sebelum masak
    { name: "Paha Ayam Fillet (Mentah)", category: "Protein", kcalPer100g: 130 },

    // === AYAM KHAS INDONESIA (Warung / Restoran Tradisional) ===
    { name: "Ayam Goreng Tradisional (Bumbu Kuning/Ungkep)", category: "Protein", kcalPer100g: 260 }, // Menyerap minyak goreng
    { name: "Ayam Bakar Kecap", category: "Protein", kcalPer100g: 200 }, // Karamelisasi kecap manis menambah kalori gula
    { name: "Ayam Pop (Khas Minang)", category: "Protein", kcalPer100g: 210 }, // Direbus air kelapa/santan, digoreng sebentar
    { name: "Gulai Ayam (Khas Minang)", category: "Protein", kcalPer100g: 235 }, // Kuah santan kental menambah ekstra lemak
    { name: "Ayam Rica-Rica (Manado)", category: "Protein", kcalPer100g: 190 }, // Relatif aman, kalori dari sedikit minyak tumisan bumbu
    { name: "Ayam Woku (Manado)", category: "Protein", kcalPer100g: 180 }, // Dimasak dengan kemangi & rempah, tanpa santan kental
    { name: "Ayam Betutu (Bali)", category: "Protein", kcalPer100g: 170 }, // Dikukus/dipanggang lama dengan rempah, sangat aman untuk diet!
    { name: "Ayam Taliwang (Lombok)", category: "Protein", kcalPer100g: 185 }, // Dipanggang dengan bumbu pedas terasi
    { name: "Ayam Penyet (Termasuk Sambal Minyak)", category: "Protein", kcalPer100g: 280 }, // Ayam digoreng + sambal ulek dengan minyak panas
    { name: "Opor Ayam (Dengan Kuah Santan)", category: "Protein", kcalPer100g: 220 },
    { name: "Sate Ayam (Hanya Daging Tanpa Bumbu)", category: "Protein", kcalPer100g: 160 }, // Dipanggang biasa
    { name: "Sate Ayam (Dengan Bumbu Kacang & Kecap)", category: "Protein", kcalPer100g: 230 }, // Bumbu kacang sangat padat kalori lemak & gula

    // === FAST FOOD, CAFE & KEKINIAN ===
    { name: "Ayam Goreng Crispy / Fried Chicken (Ala KFC/McD)", category: "Fast Food", kcalPer100g: 320 }, // Tepung tebal + deep fried
    { name: "Ayam Geprek (Tepung Crispy + Sambal Bawang)", category: "Fast Food", kcalPer100g: 310 }, // Tepung serap minyak + sambal siram minyak
    { name: "Chicken Katsu (Dada Ayam Lapis Tepung Roti)", category: "Fast Food", kcalPer100g: 290 }, // Digoreng deep-fry
    { name: "Chicken Teriyaki (Ala HokBen)", category: "Protein", kcalPer100g: 180 }, // Dada/Paha panggang tumis saus manis
    { name: "Chicken Nugget (Digoreng)", category: "Fast Food", kcalPer100g: 295 }, // Daging olahan + tepung
    { name: "Chicken Nugget (Di-Air Fryer / Panggang)", category: "Fast Food", kcalPer100g: 240 }, // Hemat kalori minyak
    { name: "Chicken Cordon Bleu", category: "Fast Food", kcalPer100g: 310 }, // Dada ayam isi keju leleh & smoked beef + tepung goreng
    { name: "Spicy Chicken Wings / Buffalo Wings", category: "Fast Food", kcalPer100g: 290 }, // Kulit sayap + deep fried + saus mentega/pedas
    { name: "Ayam Shihlin / Taiwanese Crispy Chicken", category: "Fast Food", kcalPer100g: 300 }, // Dada ayam fillet pipih berbalut tepung tapioka goreng
    // === KUE MODERN & BAKERY HITS (Cafe & Restaurant) ===
    { name: "Red Velvet Cake (Ala Union/Harvest)", category: "Kue & Pastry", kcalPer100g: 380 }, // Tinggi cream cheese & mentega
    { name: "New York Cheesecake", category: "Kue & Pastry", kcalPer100g: 400 }, // Hampir full fat dari keju dan biskuit
    { name: "Black Forest (Ala The Harvest)", category: "Kue & Pastry", kcalPer100g: 320 }, 
    { name: "Mille Crepes (Ala First Love/Chateraise)", category: "Kue & Pastry", kcalPer100g: 350 }, // Krim berlapis-lapis
    { name: "Tiramisu Cake", category: "Kue & Pastry", kcalPer100g: 340 },
    { name: "Opera Cake", category: "Kue & Pastry", kcalPer100g: 390 }, // Padat coklat & kopi
    { name: "Brownies Kukus (Ala Amanda)", category: "Kue & Pastry", kcalPer100g: 380 },
    { name: "Brownies Panggang (Ala Prima Rasa)", category: "Kue & Pastry", kcalPer100g: 420 }, // Lebih kering, kalori lebih padat
    { name: "Chiffon Cake (Pandan/Keju)", category: "Kue & Pastry", kcalPer100g: 290 }, // Relatif lebih ringan/spongy
    { name: "Bolu Gulung / Roll Cake", category: "Kue & Pastry", kcalPer100g: 330 },
    { name: "Kue Sus Vanilla (Ala Beard Papa's)", category: "Kue & Pastry", kcalPer100g: 290 }, // Kalori utama ada di fla-nya
    { name: "Macaron", category: "Kue & Pastry", kcalPer100g: 450 }, // Tepung almond + gula murni
    { name: "Croissant Plain (Ala Monsieur Spoon/TLJ)", category: "Kue & Pastry", kcalPer100g: 410 }, // 50% mentega
    { name: "Cromboloni (Isian Coklat/Pistachio)", category: "Kue & Pastry", kcalPer100g: 460 }, // Adonan croissant + isian padat + topping
    { name: "Donat Glaze (Ala J.CO Glazzy/Krispy Kreme)", category: "Kue & Pastry", kcalPer100g: 400 }, // Donat biasanya ringan (40g), tapi kalori per 100g sangat tinggi
    { name: "Donat Coklat / Topping (Ala J.CO/Dunkin)", category: "Kue & Pastry", kcalPer100g: 420 },
    { name: "Roti Abon / Floss Roll (Ala Mako/BreadTalk)", category: "Kue & Pastry", kcalPer100g: 370 }, // Menggunakan mayo manis & abon

    // === KUE TRADISIONAL INDONESIA (Jajanan Pasar) ===
    { name: "Lapis Legit", category: "Kue Tradisional", kcalPer100g: 430 }, // "Final Boss" kalori karena puluhan kuning telur & butter
    { name: "Lapis Surabaya", category: "Kue Tradisional", kcalPer100g: 390 },
    { name: "Klepon", category: "Kue Tradisional", kcalPer100g: 210 }, // Kalori dari gula merah cair & kelapa parut
    { name: "Onde-Onde (Isi Kacang Hijau)", category: "Kue Tradisional", kcalPer100g: 320 }, // Digoreng
    { name: "Dadar Gulung", category: "Kue Tradisional", kcalPer100g: 220 },
    { name: "Kue Lumpur", category: "Kue Tradisional", kcalPer100g: 200 },
    { name: "Nagasari", category: "Kue Tradisional", kcalPer100g: 160 }, // Termasuk paling aman, pisang & tepung beras dikukus
    { name: "Kue Lapis Sagu (Pepe)", category: "Kue Tradisional", kcalPer100g: 220 },
    { name: "Putu Ayu", category: "Kue Tradisional", kcalPer100g: 230 },
    { name: "Kue Cucur", category: "Kue Tradisional", kcalPer100g: 280 }, // Menyerap banyak minyak saat digoreng
    { name: "Kue Pukis", category: "Kue Tradisional", kcalPer100g: 250 },
    { name: "Kue Talam", category: "Kue Tradisional", kcalPer100g: 210 },
    { name: "Serabi / Surabi (Tanpa Kuah Kinca)", category: "Kue Tradisional", kcalPer100g: 200 },
    { name: "Serabi / Surabi (Dengan Kuah Kinca Manis)", category: "Kue Tradisional", kcalPer100g: 270 },
    { name: "Wajik Ketan", category: "Kue Tradisional", kcalPer100g: 250 },
    { name: "Gemblong (Berbalut Gula Karamel)", category: "Kue Tradisional", kcalPer100g: 340 }, // Ketan digoreng + balutan gula
    { name: "Lemper Ayam", category: "Kue Tradisional", kcalPer100g: 240 },
    { name: "Pastel Goreng", category: "Kue Tradisional", kcalPer100g: 310 },
    { name: "Risol Mayo / Smoked Beef", category: "Kue Tradisional", kcalPer100g: 290 },
    // === JUS BUAH (Kalori per 100 ml) ===
    { name: "Jus Apel (Murni/Tanpa Gula)", category: "Jus & Minuman", kcalPer100g: 46 },
    { name: "Jus Apel (Standar/Manis)", category: "Jus & Minuman", kcalPer100g: 65 },
    { name: "Jus Jeruk Peras (Murni)", category: "Jus & Minuman", kcalPer100g: 45 },
    { name: "Jus Jeruk (Standar/Manis)", category: "Jus & Minuman", kcalPer100g: 65 },
    { name: "Jus Mangga (Murni)", category: "Jus & Minuman", kcalPer100g: 50 },
    { name: "Jus Mangga (Kental Manis/Susu)", category: "Jus & Minuman", kcalPer100g: 80 },
    { name: "Jus Alpukat (Murni/Tanpa Tambahan)", category: "Jus & Minuman", kcalPer100g: 85 }, // Berasal dari lemak sehat alpukat
    { name: "Jus Alpukat (Gula & Susu Coklat Kaki Lima)", category: "Jus & Minuman", kcalPer100g: 130 }, // Sangat tinggi kalori
    { name: "Jus Jambu Biji Merah (Murni)", category: "Jus & Minuman", kcalPer100g: 55 },
    { name: "Jus Jambu Biji (Standar/Manis)", category: "Jus & Minuman", kcalPer100g: 75 },
    { name: "Jus Semangka (Murni)", category: "Jus & Minuman", kcalPer100g: 30 }, // Sangat rendah kalori karena tinggi air
    { name: "Jus Semangka (Standar/Manis)", category: "Jus & Minuman", kcalPer100g: 50 },
    { name: "Jus Melon (Murni)", category: "Jus & Minuman", kcalPer100g: 34 },
    { name: "Jus Melon (Standar/Manis)", category: "Jus & Minuman", kcalPer100g: 54 },
    { name: "Jus Sirsak (Murni)", category: "Jus & Minuman", kcalPer100g: 60 },
    { name: "Jus Sirsak (Standar/Manis)", category: "Jus & Minuman", kcalPer100g: 85 },
    { name: "Jus Buah Naga (Murni)", category: "Jus & Minuman", kcalPer100g: 50 },
    { name: "Jus Buah Naga (Standar/Manis)", category: "Jus & Minuman", kcalPer100g: 70 },
    { name: "Jus Strawberry (Murni)", category: "Jus & Minuman", kcalPer100g: 32 },
    { name: "Jus Strawberry (Standar/Manis)", category: "Jus & Minuman", kcalPer100g: 65 },
    { name: "Jus Nanas (Murni)", category: "Jus & Minuman", kcalPer100g: 53 },
    { name: "Jus Belimbing (Murni)", category: "Jus & Minuman", kcalPer100g: 31 },
    { name: "Jus Anggur (Murni)", category: "Jus & Minuman", kcalPer100g: 60 },
    { name: "Jus Delima / Pomegranate (Murni)", category: "Jus & Minuman", kcalPer100g: 54 },
    { name: "Smoothie Pisang (Tanpa Gula, Susu Low Fat)", category: "Jus & Minuman", kcalPer100g: 75 },

    // === JUS SAYUR & COLD-PRESSED (Kalori per 100 ml) ===
    { name: "Jus Tomat (Murni/Tanpa Gula)", category: "Jus & Minuman", kcalPer100g: 17 }, // Sangat rendah kalori
    { name: "Jus Wortel (Murni/Tanpa Gula)", category: "Jus & Minuman", kcalPer100g: 39 },
    { name: "Jus Wortel (Standar/Manis Susu)", category: "Jus & Minuman", kcalPer100g: 60 },
    { name: "Jus Seledri / Celery Juice (Murni)", category: "Jus & Minuman", kcalPer100g: 16 }, // Favorit ahli gizi untuk detoks
    { name: "Jus Mentimun (Murni)", category: "Jus & Minuman", kcalPer100g: 15 }, // Paling rendah kalori!
    { name: "Jus Bit / Beetroot (Murni)", category: "Jus & Minuman", kcalPer100g: 43 }, // Tinggi antioksidan
    { name: "Jus Kale (Murni)", category: "Jus & Minuman", kcalPer100g: 25 },
    { name: "Jus Bayam Hijau (Murni)", category: "Jus & Minuman", kcalPer100g: 23 },
    { name: "Cold-Pressed Green Juice (Sayur Hijau + Apel/Lemon)", category: "Jus & Minuman", kcalPer100g: 35 }, // Rata-rata kalori mixed green juice
    // === OLEH-OLEH & CAFE KHAS MEDAN ===
    { name: "Medan Napoleon (Rasa Coklat/Keju)", category: "Kue & Pastry", kcalPer100g: 390 }, // Paduan puff pastry berlapis, bolu, dan selai/krim
    { name: "Mille Crepes Nelayan (Vanilla/Coklat)", category: "Dessert", kcalPer100g: 350 }, // Krim dan adonan tipis berlapis-lapis
    { name: "Pancake Durian (Nelayan / Ucok)", category: "Dessert", kcalPer100g: 240 }, // Daging durian murni + whipped cream + kulit tipis
    { name: "Roti Canai Susu Keju (Ala Pagaruyung)", category: "Kue & Pastry", kcalPer100g: 340 }, // Adonan berlemak (ghee/margarin) + kental manis
    { name: "Roti Tisu Manis", category: "Kue & Pastry", kcalPer100g: 310 }, // Canai tipis renyah berlapis gula/susu
    { name: "Kue Pia Medan (Isi Kacang Hijau/Babi/Ayam)", category: "Kue Tradisional", kcalPer100g: 320 }, // Kulit berlapis menggunakan lemak mentega/minyak babi (lard)
    { name: "Bika Ubi / Bingka Singkong", category: "Kue Tradisional", kcalPer100g: 180 }, // Singkong parut panggang, lebih rendah kalori dari Bika Ambon

    // === JAJANAN PKL & PASAR PAGI MEDAN ===
    { name: "Kue Putu Bambu Medan", category: "Kue Tradisional", kcalPer100g: 180 }, // Tepung beras, gula merah lumer, kelapa parut kukus (Aman untuk diet!)
    { name: "Kue Cenil / Klanting Medan", category: "Kue Tradisional", kcalPer100g: 150 }, // Berbahan dasar kanji singkong, kelapa, dan gula merah cair
    { name: "Martabak Manis Tebal (Bangka/Medan - Coklat Kacang)", category: "Kue Tradisional", kcalPer100g: 340 }, // Penuh mentega, gula, dan kental manis
    { name: "Kue Pancong / Rangi Medan (Pancung Setengah Matang)", category: "Kue Tradisional", kcalPer100g: 220 }, // Tepung, telur, banyak gula pasir
    { name: "Kue Ku (Ang Ku Kueh)", category: "Kue Tradisional", kcalPer100g: 230 }, // Tepung ketan isi kacang hijau halus (Sering ada di pasar Hindu/Beruang)
    { name: "Pulut Durian (Ketan + Kuah Durian)", category: "Dessert", kcalPer100g: 280 }, // Ketan (pulut) disiram santan dan durian
    { name: "Kue Pohul-Pohul", category: "Kue Tradisional", kcalPer100g: 190 }, // Tepung beras, kelapa parut, gula aren (dikepal dan dikukus)
    { name: "Kue Talam Ebi (Gurih Manis)", category: "Kue Tradisional", kcalPer100g: 190 }, // Kue tepung beras santan dengan taburan ebi (udang kering)
    { name: "Kue Mangkok / Apem Medan", category: "Kue Tradisional", kcalPer100g: 170 }, // Kue beras kukus yang merekah
    { name: "Lupis Medan (Ketan + Gula Merah Kental)", category: "Kue Tradisional", kcalPer100g: 210 }, // Ketan kukus dengan kuah gula aren pekat
    { name: "Dadar Gulung Unti Kelapa", category: "Kue Tradisional", kcalPer100g: 220 }, // Kulit pandan isi kelapa parut manis
    // === KUE MODERN & BAKERY HITS (Cafe & Restaurant) ===
    { name: "Red Velvet Cake (Ala Union/Harvest)", category: "Kue & Pastry", kcalPer100g: 380 }, // Tinggi cream cheese & mentega
    { name: "New York Cheesecake", category: "Kue & Pastry", kcalPer100g: 400 }, // Hampir full fat dari keju dan biskuit
    { name: "Black Forest (Ala The Harvest)", category: "Kue & Pastry", kcalPer100g: 320 }, 
    { name: "Mille Crepes (Ala First Love/Chateraise)", category: "Kue & Pastry", kcalPer100g: 350 }, // Krim berlapis-lapis
    { name: "Tiramisu Cake", category: "Kue & Pastry", kcalPer100g: 340 },
    { name: "Opera Cake", category: "Kue & Pastry", kcalPer100g: 390 }, // Padat coklat & kopi
    { name: "Brownies Kukus (Ala Amanda)", category: "Kue & Pastry", kcalPer100g: 380 },
    { name: "Brownies Panggang (Ala Prima Rasa)", category: "Kue & Pastry", kcalPer100g: 420 }, // Lebih kering, kalori lebih padat
    { name: "Chiffon Cake (Pandan/Keju)", category: "Kue & Pastry", kcalPer100g: 290 }, // Relatif lebih ringan/spongy
    { name: "Bolu Gulung / Roll Cake", category: "Kue & Pastry", kcalPer100g: 330 },
    { name: "Kue Sus Vanilla (Ala Beard Papa's)", category: "Kue & Pastry", kcalPer100g: 290 }, // Kalori utama ada di fla-nya
    { name: "Macaron", category: "Kue & Pastry", kcalPer100g: 450 }, // Tepung almond + gula murni
    { name: "Croissant Plain (Ala Monsieur Spoon/TLJ)", category: "Kue & Pastry", kcalPer100g: 410 }, // 50% mentega
    { name: "Cromboloni (Isian Coklat/Pistachio)", category: "Kue & Pastry", kcalPer100g: 460 }, // Adonan croissant + isian padat + topping
    { name: "Donat Glaze (Ala J.CO Glazzy/Krispy Kreme)", category: "Kue & Pastry", kcalPer100g: 400 }, // Donat biasanya ringan (40g), tapi kalori per 100g sangat tinggi
    { name: "Donat Coklat / Topping (Ala J.CO/Dunkin)", category: "Kue & Pastry", kcalPer100g: 420 },
    { name: "Roti Abon / Floss Roll (Ala Mako/BreadTalk)", category: "Kue & Pastry", kcalPer100g: 370 }, // Menggunakan mayo manis & abon

    // === KUE TRADISIONAL INDONESIA (Jajanan Pasar) ===
    { name: "Lapis Legit", category: "Kue Tradisional", kcalPer100g: 430 }, // "Final Boss" kalori karena puluhan kuning telur & butter
    { name: "Lapis Surabaya", category: "Kue Tradisional", kcalPer100g: 390 },
    { name: "Klepon", category: "Kue Tradisional", kcalPer100g: 210 }, // Kalori dari gula merah cair & kelapa parut
    { name: "Onde-Onde (Isi Kacang Hijau)", category: "Kue Tradisional", kcalPer100g: 320 }, // Digoreng
    { name: "Dadar Gulung", category: "Kue Tradisional", kcalPer100g: 220 },
    { name: "Kue Lumpur", category: "Kue Tradisional", kcalPer100g: 200 },
    { name: "Nagasari", category: "Kue Tradisional", kcalPer100g: 160 }, // Termasuk paling aman, pisang & tepung beras dikukus
    { name: "Kue Lapis Sagu (Pepe)", category: "Kue Tradisional", kcalPer100g: 220 },
    { name: "Putu Ayu", category: "Kue Tradisional", kcalPer100g: 230 },
    { name: "Kue Cucur", category: "Kue Tradisional", kcalPer100g: 280 }, // Menyerap banyak minyak saat digoreng
    { name: "Kue Pukis", category: "Kue Tradisional", kcalPer100g: 250 },
    { name: "Kue Talam", category: "Kue Tradisional", kcalPer100g: 210 },
    { name: "Serabi / Surabi (Tanpa Kuah Kinca)", category: "Kue Tradisional", kcalPer100g: 200 },
    { name: "Serabi / Surabi (Dengan Kuah Kinca Manis)", category: "Kue Tradisional", kcalPer100g: 270 },
    { name: "Wajik Ketan", category: "Kue Tradisional", kcalPer100g: 250 },
    { name: "Gemblong (Berbalut Gula Karamel)", category: "Kue Tradisional", kcalPer100g: 340 }, // Ketan digoreng + balutan gula
    { name: "Lemper Ayam", category: "Kue Tradisional", kcalPer100g: 240 },
    { name: "Pastel Goreng", category: "Kue Tradisional", kcalPer100g: 310 },
    { name: "Risol Mayo / Smoked Beef", category: "Kue Tradisional", kcalPer100g: 290 },
    // === FAST FOOD KEKINIAN GEN Z (Sering nongkrong di Medan) ===
    { name: "Mie Gacoan / Wizzmie (Mie Pedas Manis/Gurih)", category: "Fast Food", kcalPer100g: 230 }, // Mie goreng berminyak
    { name: "Udang Keju (Ala Gacoan)", category: "Fast Food", kcalPer100g: 310 }, // Digoreng deep-fry + keju
    { name: "Udang Rambutan (Ala Gacoan)", category: "Fast Food", kcalPer100g: 290 },
    { name: "Ayam Geprek Mozzarella", category: "Fast Food", kcalPer100g: 320 }, // Ayam goreng tepung + sambal minyak + keju
    { name: "Ayam Geprek Original", category: "Fast Food", kcalPer100g: 290 },
    { name: "Richeese Fire Chicken", category: "Fast Food", kcalPer100g: 280 }, // Ayam goreng + saus pedas manis
    { name: "Saus Keju Richeese", category: "Fast Food", kcalPer100g: 350 }, // Hati-hati, saus keju sangat padat kalori
    { name: "Dimsum Siomay Ayam/Udang (Ala Nelayan)", category: "Fast Food", kcalPer100g: 180 }, // Relatif aman karena dikukus
    { name: "Dimsum Lumpia Kulit Tahu Goreng", category: "Fast Food", kcalPer100g: 280 }, // Digoreng minyak banyak
    { name: "Pancake Mayonaise (Ala Nelayan)", category: "Fast Food", kcalPer100g: 330 }, // Mayo + tepung goreng = kalori tinggi
    { name: "Dessert Taiwan (Zeribowl/Spatula - Es, Boba, Jelly)", category: "Dessert", kcalPer100g: 95 }, // Per 100 gram/ml, hitung total kuah manisnya
    
    // === JAJANAN & KULINER KHAS MEDAN ===
    { name: "Bika Ambon (Zulaikha)", category: "Kue Tradisional", kcalPer100g: 290 }, // Tinggi gula, telur, dan santan
    { name: "Bolu Meranti (Keju)", category: "Kue Tradisional", kcalPer100g: 350 }, // Mentega dan keju melimpah
    { name: "Bolu Meranti (Coklat/Moka)", category: "Kue Tradisional", kcalPer100g: 330 },
    { name: "Pancake Durian", category: "Dessert", kcalPer100g: 240 }, // Durian + Whipped Cream
    { name: "Risol Spesial (Ala Risol Gogo)", category: "Kue Tradisional", kcalPer100g: 260 }, // Isian ragout susu/krim dan digoreng
    { name: "Martabak Piring", category: "Kue Tradisional", kcalPer100g: 250 }, // Mentega dan gula
    { name: "Mie Balap Telur", category: "Karbohidrat", kcalPer100g: 170 }, // Bihun/Mie digoreng porsi besar
    { name: "Mie Balap Seafood", category: "Karbohidrat", kcalPer100g: 190 }, 
    { name: "Sate Padang (Porsi Daging + Bumbu, Tanpa Ketupat)", category: "Lauk", kcalPer100g: 160 }, // Bumbu kental dari tepung beras
    { name: "Ketupat (Untuk Sate Padang)", category: "Karbohidrat", kcalPer100g: 110 },
    { name: "Kue Sus (Isi Vla Vanilla/Krim)", category: "Kue Tradisional", kcalPer100g: 270 },
    { name: "Lupis Medan (Dengan Gula Merah & Kelapa)", category: "Kue Tradisional", kcalPer100g: 210 }, // Ketan + Gula Cair
    { name: "Kue Ombus-Ombus", category: "Kue Tradisional", kcalPer100g: 200 }, // Tepung beras, kelapa, gula aren (dikukus)
    { name: "Putu Bambu", category: "Kue Tradisional", kcalPer100g: 180 }, // Dikukus, kalori dari gula merah dan kelapa
    { name: "Tau Kua Heci", category: "Kue Tradisional", kcalPer100g: 210 }, // Gorengan tahu udang khas Binjai/Medan
    { name: "Rujak Kolam (Buah + Bumbu Kacang)", category: "Cemilan", kcalPer100g: 130 }, // Buahnya rendah kalori, tapi bumbu kacangnya padat
    // -- MATCHA BUBUK (Kalori per 100 gram bubuk kering) --
    { name: "Matcha Bubuk (Murni/Tanpa Gula)", category: "Minuman", kcalPer100g: 2 }, // Sekitar 6 kcal per 1 sdt (2 gram)
    { name: "Matcha Bubuk (Manis/Instan Latte)", category: "Minuman", kcalPer100g: 390 }, // Tinggi kalori karena mengandung gula & creamer
    // === KATEGORI KOPI & MINUMAN CAFE (Kalori per 100 ml) ===
    
    // -- KOPI BASIC / UMUM --
    { name: "Espresso", category: "Minuman", kcalPer100g: 2 },
    { name: "Americano (Tanpa Gula)", category: "Minuman", kcalPer100g: 1 },
    { name: "Kopi Tubruk (Tanpa Gula)", category: "Minuman", kcalPer100g: 1 },
    { name: "Kopi Tubruk Manis (Gula Sedang)", category: "Minuman", kcalPer100g: 25 },
    { name: "Kopi Susu Instan (Sachet)", category: "Minuman", kcalPer100g: 45 },
    { name: "Cappuccino (Tanpa Gula Tambahan)", category: "Minuman", kcalPer100g: 40 },
    { name: "Caffe Latte (Tanpa Gula Tambahan)", category: "Minuman", kcalPer100g: 45 },
    { name: "Flat White", category: "Minuman", kcalPer100g: 45 },
    { name: "Mochaccino", category: "Minuman", kcalPer100g: 75 },
    { name: "Kopi Susu Gula Aren (Umum)", category: "Minuman", kcalPer100g: 65 },

    // -- KOPI TUKU --
    { name: "Tuku - Es Kopi Susu Tetangga", category: "Minuman", kcalPer100g: 63 }, // ~220 kcal per gelas 350ml
    { name: "Tuku - Es Kopi Hitam Tetangga", category: "Minuman", kcalPer100g: 10 },
    { name: "Tuku - Earl Grey Milk Tea", category: "Minuman", kcalPer100g: 55 },

    // -- KOPI KENANGAN --
    { name: "Kopi Kenangan - Kopi Kenangan Mantan", category: "Minuman", kcalPer100g: 69 }, // ~240 kcal per gelas reguler
    { name: "Kopi Kenangan - Dua Shot Iced Shaken", category: "Minuman", kcalPer100g: 42 },
    { name: "Kopi Kenangan - Kopi Kelapa", category: "Minuman", kcalPer100g: 62 },
    { name: "Kopi Kenangan - Avocado Coffee", category: "Minuman", kcalPer100g: 85 }, // Kental & manis
    { name: "Kopi Kenangan - Thai Tea", category: "Minuman", kcalPer100g: 70 },
    { name: "Kopi Kenangan - Matcha Latte", category: "Minuman", kcalPer100g: 75 },
    { name: "Kopi Kenangan - Americano", category: "Minuman", kcalPer100g: 1 },

    // -- TOMORO COFFEE --
    { name: "Tomoro - Aren Latte", category: "Minuman", kcalPer100g: 65 }, // ~230 kcal per gelas reguler
    { name: "Tomoro - Caffe Latte", category: "Minuman", kcalPer100g: 42 },
    { name: "Tomoro - Oat Latte", category: "Minuman", kcalPer100g: 38 }, // Susu oat kalori sedikit lebih rendah
    { name: "Tomoro - Manuka Oat Latte", category: "Minuman", kcalPer100g: 55 },
    { name: "Tomoro - Matcha Macchiato", category: "Minuman", kcalPer100g: 80 },

    // -- STARBUCKS (Basis Susu Full Cream, Normal Sugar) --
    { name: "Starbucks - Caffe Americano", category: "Minuman", kcalPer100g: 1 },
    { name: "Starbucks - Caramel Macchiato", category: "Minuman", kcalPer100g: 56 }, // ~200 kcal per Tall 354ml
    { name: "Starbucks - Vanilla Latte", category: "Minuman", kcalPer100g: 56 }, // ~200 kcal per Tall
    { name: "Starbucks - Asian Dolce Latte", category: "Minuman", kcalPer100g: 70 }, // Sangat manis/kental
    { name: "Starbucks - Java Chip Frappuccino", category: "Minuman", kcalPer100g: 90 }, // ~320 kcal per Tall 
    { name: "Starbucks - Caramel Frappuccino", category: "Minuman", kcalPer100g: 85 },
    { name: "Starbucks - Green Tea Latte (Matcha)", category: "Minuman", kcalPer100g: 68 },
    { name: "Starbucks - Signature Chocolate", category: "Minuman", kcalPer100g: 80 },

    // -- FORE COFFEE --
    { name: "Fore - Aren Latte", category: "Minuman", kcalPer100g: 65 },
    { name: "Fore - Pandan Latte", category: "Minuman", kcalPer100g: 68 },
    { name: "Fore - Butterscotch Sea Salt Latte", category: "Minuman", kcalPer100g: 75 },
    { name: "Fore - Biscuit Chizu", category: "Minuman", kcalPer100g: 90 }, // Ada cream cheese

    // -- JANJI JIWA --
    { name: "Janji Jiwa - Kopi Susu", category: "Minuman", kcalPer100g: 65 },
    { name: "Janji Jiwa - Susu Soklat", category: "Minuman", kcalPer100g: 78 },
    { name: "Janji Jiwa - Matcha Latte", category: "Minuman", kcalPer100g: 70 },

    // -- TAMBAHAN CUSTOM (Penting buat diet Bebeee) --
    { name: "Kopi Susu Gula Aren (Less Sugar)", category: "Minuman", kcalPer100g: 45 },
    { name: "Kopi Susu (Ganti Susu Skim / Low Fat)", category: "Minuman", kcalPer100g: 35 },
    { name: "Kopi Susu (Ganti Oat Milk)", category: "Minuman", kcalPer100g: 40 },
    { name: "Kopi Susu (Ganti Almond Milk)", category: "Minuman", kcalPer100g: 25 },
    // === KATEGORI BUAH-BUAHAN ===
    { name: "Alpukat", category: "Buah", kcalPer100g: 160 },
    { name: "Anggur Merah", category: "Buah", kcalPer100g: 69 },
    { name: "Anggur Hijau", category: "Buah", kcalPer100g: 62 },
    { name: "Apel", category: "Buah", kcalPer100g: 52 },
    { name: "Aprikot", category: "Buah", kcalPer100g: 48 },
    { name: "Belimbing", category: "Buah", kcalPer100g: 31 },
    { name: "Bengkuang", category: "Buah", kcalPer100g: 38 },
    { name: "Blewah", category: "Buah", kcalPer100g: 34 },
    { name: "Blueberry", category: "Buah", kcalPer100g: 57 },
    { name: "Blackberry", category: "Buah", kcalPer100g: 43 },
    { name: "Cempedak", category: "Buah", kcalPer100g: 116 },
    { name: "Ceri", category: "Buah", kcalPer100g: 50 },
    { name: "Delima", category: "Buah", kcalPer100g: 83 },
    { name: "Duku", category: "Buah", kcalPer100g: 70 },
    { name: "Durian", category: "Buah", kcalPer100g: 147 },
    { name: "Jambu Air", category: "Buah", kcalPer100g: 25 },
    { name: "Jambu Biji (Mente)", category: "Buah", kcalPer100g: 68 },
    { name: "Jeruk Manis", category: "Buah", kcalPer100g: 47 },
    { name: "Jeruk Bali (Pomelo)", category: "Buah", kcalPer100g: 38 },
    { name: "Jeruk Nipis", category: "Buah", kcalPer100g: 30 },
    { name: "Jeruk Lemon", category: "Buah", kcalPer100g: 29 },
    { name: "Kedondong", category: "Buah", kcalPer100g: 41 },
    { name: "Kelapa Muda (Daging)", category: "Buah", kcalPer100g: 79 },
    { name: "Kelengkeng", category: "Buah", kcalPer100g: 60 },
    { name: "Kiwi", category: "Buah", kcalPer100g: 61 },
    { name: "Kurma (Kering)", category: "Buah", kcalPer100g: 277 },
    { name: "Kurma (Segar/Muda)", category: "Buah", kcalPer100g: 142 },
    { name: "Mangga", category: "Buah", kcalPer100g: 60 },
    { name: "Manggis", category: "Buah", kcalPer100g: 73 },
    { name: "Markisa", category: "Buah", kcalPer100g: 97 },
    { name: "Matoa", category: "Buah", kcalPer100g: 90 },
    { name: "Melon", category: "Buah", kcalPer100g: 34 },
    { name: "Naga Merah", category: "Buah", kcalPer100g: 60 },
    { name: "Naga Putih", category: "Buah", kcalPer100g: 50 },
    { name: "Nanas", category: "Buah", kcalPer100g: 50 },
    { name: "Nangka (Matang)", category: "Buah", kcalPer100g: 95 },
    { name: "Pepaya", category: "Buah", kcalPer100g: 43 },
    { name: "Persik (Peach)", category: "Buah", kcalPer100g: 39 },
    { name: "Pir", category: "Buah", kcalPer100g: 57 },
    { name: "Pisang (Rata-rata)", category: "Buah", kcalPer100g: 89 },
    { name: "Pisang Kepok", category: "Buah", kcalPer100g: 109 },
    { name: "Pisang Ambon", category: "Buah", kcalPer100g: 89 },
    { name: "Pisang Sunpride / Cavendish", category: "Buah", kcalPer100g: 89 },
    { name: "Plum", category: "Buah", kcalPer100g: 46 },
    { name: "Rambutan", category: "Buah", kcalPer100g: 68 },
    { name: "Raspberry", category: "Buah", kcalPer100g: 52 },
    { name: "Salak", category: "Buah", kcalPer100g: 82 },
    { name: "Sawo", category: "Buah", kcalPer100g: 83 },
    { name: "Semangka", category: "Buah", kcalPer100g: 30 },
    { name: "Sirsak", category: "Buah", kcalPer100g: 66 },
    { name: "Stroberi", category: "Buah", kcalPer100g: 32 },
    { name: "Tomat Merah", category: "Buah", kcalPer100g: 18 },
    { name: "Tin (Fig Segar)", category: "Buah", kcalPer100g: 74 },
    { name: "Zaitun (Olive)", category: "Buah", kcalPer100g: 115 },
    { name: "Nasi Putih", category: "Karbohidrat", kcalPer100g: 130 },
    { name: "Nasi Merah", category: "Karbohidrat", kcalPer100g: 111 },
    { name: "Ayam Goreng (Dada)", category: "Protein", kcalPer100g: 260 },
    { name: "Ayam Bakar (Dada)", category: "Protein", kcalPer100g: 165 },
    { name: "Dada Ayam Rebus", category: "Protein", kcalPer100g: 165 },
    { name: "Telur Rebus", category: "Protein", kcalPer100g: 155 },
    { name: "Telur Goreng (Mata Sapi)", category: "Protein", kcalPer100g: 196 },
    { name: "Ikan Goreng (Nila)", category: "Protein", kcalPer100g: 200 },
    { name: "Ikan Bakar", category: "Protein", kcalPer100g: 130 },
    { name: "Daging Sapi (Cincang)", category: "Protein", kcalPer100g: 250 },
    { name: "Tempe Goreng", category: "Protein Nabati", kcalPer100g: 192 },
    { name: "Tahu Goreng", category: "Protein Nabati", kcalPer100g: 271 },
    { name: "Bayam Rebus", category: "Sayur", kcalPer100g: 23 },
    { name: "Kangkung Tumis", category: "Sayur", kcalPer100g: 73 },
    { name: "Brokoli Rebus", category: "Sayur", kcalPer100g: 35 },
    { name: "Wortel Rebus", category: "Sayur", kcalPer100g: 35 },
    { name: "Kentang Rebus", category: "Karbohidrat", kcalPer100g: 87 },
    { name: "Kentang Goreng", category: "Karbohidrat", kcalPer100g: 312 },
    { name: "Ubi Jalar Rebus", category: "Karbohidrat", kcalPer100g: 86 },
    { name: "Pisang", category: "Buah", kcalPer100g: 89 },
    { name: "Apel", category: "Buah", kcalPer100g: 52 },
    { name: "Jeruk", category: "Buah", kcalPer100g: 47 },
    { name: "Alpukat", category: "Buah", kcalPer100g: 160 },
    { name: "Semangka", category: "Buah", kcalPer100g: 30 },
    { name: "Melon", category: "Buah", kcalPer100g: 34 },
    { name: "Mangga", category: "Buah", kcalPer100g: 60 },
    { name: "Roti Putih", category: "Karbohidrat", kcalPer100g: 265 },
    { name: "Roti Gandum", category: "Karbohidrat", kcalPer100g: 247 },
    { name: "Mie Instan (Rebus)", category: "Karbohidrat", kcalPer100g: 350 },
    { name: "Oatmeal (Kering)", category: "Karbohidrat", kcalPer100g: 389 },
    { name: "Susu Sapi (Full Cream)", category: "Minuman", kcalPer100g: 61 },
    { name: "Susu Sapi (Low Fat)", category: "Minuman", kcalPer100g: 43 },
    { name: "Kopi Hitam (Tanpa Gula)", category: "Minuman", kcalPer100g: 1 },
    { name: "Kopi Susu (Gula Aren)", category: "Minuman", kcalPer100g: 80 }, // estimasi per 100ml
    { name: "Teh Tawar", category: "Minuman", kcalPer100g: 1 },
    { name: "Teh Manis", category: "Minuman", kcalPer100g: 40 },
    { name: "Jus Apel (Murni)", category: "Minuman", kcalPer100g: 46 },
    { name: "Air Mineral", category: "Minuman", kcalPer100g: 0 },
    { name: "Minuman Manis (Boba)", category: "Minuman", kcalPer100g: 85 } // estimasi per 100ml
    
];

// --- 2. GLOBAL STATE ---
const TARGET_KCAL = 1200;
let currentDate = new Date();
let selectedDateString = getLocalDateString(currentDate); 
let currentCalculatedFood = null; 

// --- 3. DOM ELEMENTS ---
// Inputs & Calculator
const foodInput = document.getElementById('foodInput');
const suggestionList = document.getElementById('suggestionList');
const weightInput = document.getElementById('weightInput');
const unitSelect = document.getElementById('unitSelect');
const calculateBtn = document.getElementById('calculateBtn');
const resultCard = document.getElementById('resultCard');
const addToListBtn = document.getElementById('addToListBtn');

// Result Display
const resName = document.getElementById('resName');
const resWeight = document.getElementById('resWeight');
const resKcal = document.getElementById('resKcal');

// Today List & Progress
const todayListBody = document.getElementById('todayListBody');
const summaryTotalKcal = document.getElementById('summaryTotalKcal');
const progressBar = document.getElementById('progressBar');
const totalCaloriesText = document.getElementById('totalCalories');
const displaySelectedDate = document.getElementById('displaySelectedDate');

// Modal
const warningModal = document.getElementById('warningModal');
const closeModalBtn = document.getElementById('closeModalBtn');
const toast = document.getElementById('toast');

// Calendar
const prevMonthBtn = document.getElementById('prevMonth');
const nextMonthBtn = document.getElementById('nextMonth');
const monthYearText = document.getElementById('monthYear');
const calendarGrid = document.getElementById('calendarGrid');
const calendarInfo = document.getElementById('calendarInfo');

// Weight
const weeklyWeightInput = document.getElementById('weeklyWeightInput');
const saveWeightBtn = document.getElementById('saveWeightBtn');
const weightMessage = document.getElementById('weightMessage');
const weightList = document.getElementById('weightList');

// 3D Parallax Card
const coachCard = document.getElementById('coachCard');


// --- 4. UTILITY FUNCTIONS ---
function getLocalDateString(dateObj) {
    // Format YYYY-MM-DD
    const tzOffset = dateObj.getTimezoneOffset() * 60000; 
    return (new Date(dateObj - tzOffset)).toISOString().split('T')[0];
}

function formatDateDisplay(dateStr) {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(dateStr);
    return date.toLocaleDateString('id-ID', options);
}

function showToast(message) {
    toast.textContent = message;
    toast.classList.remove('hidden');
    setTimeout(() => {
        toast.classList.add('hidden');
    }, 3000);
}

// --- 5. PARALLAX 3D EFFECT ---
if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.addEventListener('mousemove', (e) => {
        if(!coachCard) return;
        const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
        const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
        coachCard.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });
    // Reset on mouse leave
    document.addEventListener('mouseleave', () => {
        if(coachCard) coachCard.style.transform = `rotateY(0deg) rotateX(0deg)`;
    });
}

// --- 6. AUTOCOMPLETE LOGIC ---
foodInput.addEventListener('input', function() {
    const query = this.value.toLowerCase().trim();
    suggestionList.innerHTML = '';
    
    if (query.length === 0) {
        suggestionList.style.display = 'none';
        return;
    }

    const matches = foodDatabase.filter(food => food.name.toLowerCase().includes(query));
    
    if (matches.length > 0) {
        suggestionList.style.display = 'block';
        matches.forEach(match => {
            const li = document.createElement('li');
            li.textContent = match.name;
            li.addEventListener('click', () => {
                foodInput.value = match.name;
                suggestionList.style.display = 'none';
            });
            suggestionList.appendChild(li);
        });
    } else {
        suggestionList.style.display = 'none';
    }
});

// Hide suggestion on outside click
document.addEventListener('click', function(e) {
    if (e.target !== foodInput) {
        suggestionList.style.display = 'none';
    }
});


// --- 7. CALCULATE LOGIC ---
calculateBtn.addEventListener('click', () => {
    const foodName = foodInput.value.trim();
    const weight = parseFloat(weightInput.value);
    const unit = unitSelect.value;

    // Validation
    if (!foodName) return showToast("Masukkan makanan atau minuman dulu yaa ");
    if (!weight || isNaN(weight)) return showToast("Masukkan berat atau porsinya dulu yaa ");
    if (weight <= 0) return showToast("Berat harus lebih dari 0.");

    // Find in DB (Case insensitive)
    const foodItem = foodDatabase.find(f => f.name.toLowerCase() === foodName.toLowerCase());
    
    if (!foodItem) {
        return showToast("Makanan belum tersedia di database. Coba cari nama makanan lain ");
    }

    // Calculation: calories = (kcalPer100g / 100) * weightInGram
    const calculatedKcal = Math.round((foodItem.kcalPer100g / 100) * weight);
    
    currentCalculatedFood = {
        name: foodItem.name,
        weight: weight,
        unit: unit,
        kcal: calculatedKcal,
        timestamp: new Date().getTime()
    };

    // UI Updates
    resName.textContent = `🍽️ ${foodItem.name}`;
    resWeight.textContent = `${weight} ${unit}`;
    resultCard.classList.remove('hidden');
    
    // Animation Count Up
    animateValue(resKcal, 0, calculatedKcal, 1000);
});

function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// --- 8. ADD TO TODAY & LOCAL STORAGE ---
addToListBtn.addEventListener('click', () => {
    if (!currentCalculatedFood) return;

    let historyData = JSON.parse(localStorage.getItem('calorieHistory')) || {};
    let targetDateStr = selectedDateString; 

    if (!historyData[targetDateStr]) {
        historyData[targetDateStr] = { totalCalories: 0, foods: [], flagged: false };
    }

    historyData[targetDateStr].foods.push(currentCalculatedFood);
    historyData[targetDateStr].totalCalories += currentCalculatedFood.kcal;

    localStorage.setItem('calorieHistory', JSON.stringify(historyData));

    showToast("Berhasil dimasukkan! ");
    
    // Reset Form
    foodInput.value = '';
    weightInput.value = '';
    resultCard.classList.add('hidden');
    currentCalculatedFood = null;

    updateUIForDate(targetDateStr);
    renderCalendar(); // Update calendar highlight dots
});

// --- 9. UI UPDATES & MODAL ---
function updateUIForDate(dateStr) {
    let historyData = JSON.parse(localStorage.getItem('calorieHistory')) || {};
    let dayData = historyData[dateStr] || { totalCalories: 0, foods: [] };

    // Update Text
    displaySelectedDate.textContent = (dateStr === getLocalDateString(new Date())) ? "Hari Ini" : formatDateDisplay(dateStr);
    
    // Render Table
    todayListBody.innerHTML = '';
    if (dayData.foods.length === 0) {
        const tr = document.createElement('tr');
        tr.innerHTML = `<td colspan="3" style="text-align:center; color:#888;">Belum ada makanan dicatat </td>`;
        todayListBody.appendChild(tr);
    } else {
        dayData.foods.forEach(food => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${food.name}</td>
                <td>${food.weight} ${food.unit}</td>
                <td><strong>${food.kcal}</strong> kcal</td>
            `;
            todayListBody.appendChild(tr);
        });
    }

    // Update Summary
    summaryTotalKcal.textContent = `${dayData.totalCalories} KCAL`;
    
    // Update Progress Bar (Only show progress if viewing 'Today')
    if (dateStr === getLocalDateString(new Date())) {
        totalCaloriesText.textContent = dayData.totalCalories;
        let pct = (dayData.totalCalories / TARGET_KCAL) * 100;
        
        if (dayData.totalCalories > TARGET_KCAL) {
            progressBar.style.width = '100%';
            progressBar.classList.add('over-target');
            
            // Check flag for popup
            if (!dayData.flagged) {
                setTimeout(showWarningModal, 500);
                dayData.flagged = true;
                historyData[dateStr] = dayData;
                localStorage.setItem('calorieHistory', JSON.stringify(historyData));
            }
        } else {
            progressBar.style.width = `${pct}%`;
            progressBar.classList.remove('over-target');
        }
    }
}

function showWarningModal() {
    warningModal.classList.remove('hidden');
}

closeModalBtn.addEventListener('click', () => {
    warningModal.classList.add('hidden');
});

// --- 10. CALENDAR SYSTEM ---
let currentCalDate = new Date();

function renderCalendar() {
    calendarGrid.innerHTML = '';
    const year = currentCalDate.getFullYear();
    const month = currentCalDate.getMonth();
    
    const firstDay = new Date(year, month, 1).getDay(); // 0 (Sun) to 6 (Sat)
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    const monthNames = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
    monthYearText.textContent = `${monthNames[month]} ${year}`;

    let historyData = JSON.parse(localStorage.getItem('calorieHistory')) || {};
    let todayStr = getLocalDateString(new Date());

    // Empty cells
    for (let i = 0; i < firstDay; i++) {
        const div = document.createElement('div');
        div.classList.add('cal-day', 'empty');
        calendarGrid.appendChild(div);
    }

    // Days
    for (let i = 1; i <= daysInMonth; i++) {
        const div = document.createElement('div');
        div.classList.add('cal-day');
        div.textContent = i;
        
        // Construct date string for this block
        const d = new Date(year, month, i);
        const dStr = getLocalDateString(d);

        if (dStr === todayStr) div.classList.add('today');
        if (dStr === selectedDateString) div.classList.add('selected');
        if (historyData[dStr] && historyData[dStr].totalCalories > 0) div.classList.add('has-data');

        div.addEventListener('click', () => {
            selectedDateString = dStr;
            renderCalendar(); // Re-render to update selected class
            updateUIForDate(selectedDateString);
            
            // Update calendar info text
            if (historyData[dStr] && historyData[dStr].totalCalories > 0) {
                calendarInfo.innerHTML = `<strong>${formatDateDisplay(dStr)}</strong><br>Total Kalori: ${historyData[dStr].totalCalories} kcal ✨`;
            } else {
                calendarInfo.innerHTML = `<strong>${formatDateDisplay(dStr)}</strong><br>Belum ada data kalori di tanggal ini 💗`;
            }
        });

        calendarGrid.appendChild(div);
    }
}

prevMonthBtn.addEventListener('click', () => {
    currentCalDate.setMonth(currentCalDate.getMonth() - 1);
    renderCalendar();
});

nextMonthBtn.addEventListener('click', () => {
    currentCalDate.setMonth(currentCalDate.getMonth() + 1);
    renderCalendar();
});


// --- 11. WEEKLY WEIGHT TRACKING ---
function initWeightSection() {
    let weightData = JSON.parse(localStorage.getItem('weightHistory')) || {};
    let todayStr = getLocalDateString(new Date());
    let currentDayOfWeek = new Date().getDay(); // 0 is Sunday

    if (currentDayOfWeek !== 0) {
        weightInput.disabled = true;
        saveWeightBtn.disabled = true;
        weightMessage.textContent = "Input berat badan dilakukan setiap hari Minggu yaa ";
    } else {
        if (weightData[todayStr]) {
            weightInput.disabled = true;
            saveWeightBtn.disabled = true;
            weightMessage.textContent = "Berat badan minggu ini sudah dicatat ";
        } else {
            weightInput.disabled = false;
            saveWeightBtn.disabled = false;
            weightMessage.textContent = "Yeay hari Minggu! Waktunya catat progressmu ";
        }
    }
    renderWeightList();
}

saveWeightBtn.addEventListener('click', () => {
    const val = parseFloat(weeklyWeightInput.value);
    if (!val || val <= 0) return showToast("Masukkan berat badan yang valid yaa ");

    let weightData = JSON.parse(localStorage.getItem('weightHistory')) || {};
    let todayStr = getLocalDateString(new Date());

    weightData[todayStr] = val;
    localStorage.setItem('weightHistory', JSON.stringify(weightData));

    showToast("Berat badan berhasil dicatat! ✨");
    weeklyWeightInput.value = '';
    initWeightSection(); // re-evaluates UI state
});

function renderWeightList() {
    let weightData = JSON.parse(localStorage.getItem('weightHistory')) || {};
    weightList.innerHTML = '';
    
    // Sort dates
    const sortedDates = Object.keys(weightData).sort((a,b) => new Date(b) - new Date(a));
    
    if (sortedDates.length === 0) {
        weightList.innerHTML = '<li><span style="color:#888;">Belum ada data berat badan.</span></li>';
        return;
    }

    for (let i = 0; i < sortedDates.length; i++) {
        let dateStr = sortedDates[i];
        let currentW = weightData[dateStr];
        let diffText = "";

        if (i < sortedDates.length - 1) {
            let prevW = weightData[sortedDates[i+1]];
            let diff = (currentW - prevW).toFixed(1);
            if (diff > 0) diffText = `<span style="color:#d9534f; font-size:0.85rem;">(↑ ${diff} kg)</span>`;
            else if (diff < 0) diffText = `<span style="color:#5cb85c; font-size:0.85rem;">(↓ ${Math.abs(diff)} kg) Yay!</span>`;
            else diffText = `<span style="color:#888; font-size:0.85rem;">(- Stabil)</span>`;
        }

        const li = document.createElement('li');
        li.innerHTML = `<span>${formatDateDisplay(dateStr)}</span> <span><strong>${currentW} kg</strong> ${diffText}</span>`;
        weightList.appendChild(li);
    }
}

// --- RESET HARI INI LOGIC ---
resetTodayBtn.addEventListener('click', () => {
    let historyData = JSON.parse(localStorage.getItem('calorieHistory')) || {};
    let targetDateStr = selectedDateString; // Mengambil tanggal yang sedang aktif dilihat/dipilih

    if (!historyData[targetDateStr] || historyData[targetDateStr].foods.length === 0) {
        showToast("Belum ada data kalori di hari ini untuk direset 💗");
        return;
    }

    // Konfirmasi interaksi aman
    if (confirm(`Yakin ingin menghapus seluruh riwayat kalori untuk tanggal ${formatDateDisplay(targetDateStr)}?`)) {
        // Hapus data pada tanggal spesifik tersebut saja
        delete historyData[targetDateStr];
        localStorage.setItem('calorieHistory', JSON.stringify(historyData));

        // Update UI secara real-time
        updateUIForDate(targetDateStr);
        renderCalendar();
        showToast("Riwayat hari ini berhasil direset! ✨");
    }
});

// --- 12. INITIALIZATION ---
function initApp() {
    updateUIForDate(selectedDateString);
    renderCalendar();
    initWeightSection();
    
    // Default calendar info msg
    calendarInfo.innerHTML = "Pilih tanggal di kalender untuk melihat riwayat ";
}

// Run on load
document.addEventListener('DOMContentLoaded', initApp);