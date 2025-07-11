
  const breakfastDatabase = [
  { name: "املت زعفران و اسفناج", calories: 200, portion: "2 عدد تخم‌مرغ", protein: 14, carbs: 3, fat: 14, diet: "diet-6" }, 
  { name: "اسموتی انبه و بذر چیا", calories: 160, portion: "1 لیوان", protein: 4, carbs: 30, fat: 4, diet: "diet-7" }, 
  { name: "نان سنگک با ارده و شیره خرما", calories: 260, portion: "1 برش", protein: 8, carbs: 40, fat: 10, diet: "diet-2" }, 
  { name: "ماست یونانی با تمشک و گردو", calories: 180, portion: "1 کاسه", protein: 10, carbs: 15, fat: 10, diet: "diet-8" }, 
  { name: "پنکیک کینوا با شربت افرا", calories: 220, portion: "2 عدد", protein: 6, carbs: 35, fat: 6, diet: "diet-2" }, 
  { name: "تخم‌مرغ آب‌پز با آووکادو و لیمو", calories: 200, portion: "2 عدد تخم‌مرغ", protein: 14, carbs: 5, fat: 15, diet: "diet-6" }, 
  { name: "سالاد میوه با ماست و بذر کتان", calories: 170, portion: "1 کاسه", protein: 6, carbs: 25, fat: 6, diet: "diet-5" }, 
  { name: "خاگینه خرما و گردو", calories: 250, portion: "1 برش", protein: 8, carbs: 30, fat: 12, diet: "diet-1" }, 
  { name: "اسموتی اسفناج و آناناس", calories: 140, portion: "1 لیوان", protein: 3, carbs: 25, fat: 2, diet: "diet-7" }, 
  { name: "بیکن بوقلمون با قارچ گریل", calories: 210, portion: "100 گرم", protein: 18, carbs: 3, fat: 14, diet: "diet-4" }, 
  { name: "نان تست با کره بادام و گلابی", calories: 230, portion: "1 برش", protein: 6, carbs: 30, fat: 12, diet: "diet-2" }, 
  { name: "املت قارچ شیتاکه و پنیر بز", calories: 200, portion: "2 عدد تخم‌مرغ", protein: 16, carbs: 3, fat: 15, diet: "diet-6" }, 
  { name: "ماست با انار و دانه کنجد", calories: 170, portion: "1 کاسه", protein: 10, carbs: 15, fat: 8, diet: "diet-1" },
  { name: "پنکیک هویج با ماست یونانی", calories: 210, portion: "2 عدد", protein: 6, carbs: 30, fat: 6, diet: "diet-2" }, 
  { name: "تخم‌مرغ نیمرو با زیتون سیاه", calories: 190, portion: "2 عدد تخم‌مرغ", protein: 14, carbs: 3, fat: 15, diet: "diet-1" }, 
  { name: "اسموتی کیوی و نعنا", calories: 130, portion: "1 لیوان", protein: 3, carbs: 25, fat: 2, diet: "diet-7" }, 
  { name: "نان بربری با پنیر و سبزی معطر", calories: 240, portion: "1 برش", protein: 8, carbs: 35, fat: 10, diet: "diet-1" }, 
  { name: "ماست یونانی با توت سیاه و چیا", calories: 180, portion: "1 کاسه", protein: 10, carbs: 15, fat: 10, diet: "diet-8" }, 
  { name: "فرنی زعفرانی با پسته", calories: 200, portion: "1 کاسه", protein: 6, carbs: 30, fat: 8, diet: "diet-2" }, 
  { name: "املت کدو سبز و گشنیز", calories: 190, portion: "2 عدد تخم‌مرغ", protein: 14, carbs: 5, fat: 14, diet: "diet-6" },
  { name: "اسموتی سیب و دارچین", calories: 150, portion: "1 لیوان", protein: 3, carbs: 28, fat: 2, diet: "diet-7" }, 
  { name: "نان لواش با کره پسته و توت", calories: 230, portion: "1 برش", protein: 6, carbs: 30, fat: 12, diet: "diet-2" }, 
  { name: "تخم‌مرغ پخته با فلفل دلمه‌ای", calories: 180, portion: "2 عدد تخم‌مرغ", protein: 14, carbs: 3, fat: 14, diet: "diet-6" }, 
  { name: "ماست با هلو و دانه آفتابگردان", calories: 170, portion: "1 کاسه", protein: 10, carbs: 15, fat: 8, diet: "diet-5" }, 
  { name: "پنکیک موز و بادام", calories: 240, portion: "2 عدد", protein: 6, carbs: 35, fat: 8, diet: "diet-2" },
  { name: "املت گوجه و ریحان", calories: 190, portion: "2 عدد تخم‌مرغ", protein: 14, carbs: 5, fat: 14, diet: "diet-6" },
  { name: "نان تست با آووکادو و انار", calories: 220, portion: "1 برش", protein: 6, carbs: 25, fat: 12, diet: "diet-2" },
  { name: "اسموتی خرمالو و زنجبیل", calories: 160, portion: "1 لیوان", protein: 3, carbs: 30, fat: 4, diet: "diet-7" },
  { name: "ماست یونانی با انگور و پسته", calories: 180, portion: "1 کاسه", protein: 10, carbs: 15, fat: 10, diet: "diet-8" },
  { name: "نان سنگک با کره و شیره انگور", calories: 250, portion: "1 برش", protein: 6, carbs: 40, fat: 8, diet: "diet-2" },
  { name: "تخم‌مرغ نیمرو با پاپریکا", calories: 180, portion: "2 عدد تخم‌مرغ", protein: 14, carbs: 2, fat: 14, diet: "diet-6" },
  { name: "شیر برنج با هل و گلاب", calories: 200, portion: "1 کاسه", protein: 6, carbs: 30, fat: 6, diet: "diet-2" },
  { name: "اسموتی توت‌فرنگی و اسفناج", calories: 140, portion: "1 لیوان", protein: 3, carbs: 25, fat: 2, diet: "diet-7" },
  { name: "املت فلفل سبز و پنیر پارمزان", calories: 200, portion: "2 عدد تخم‌مرغ", protein: 16, carbs: 3, fat: 15, diet: "diet-6" },
  { name: "نان بربری با ارده و عسل", calories: 260, portion: "1 برش", protein: 8, carbs: 40, fat: 10, diet: "diet-2" },
  { name: "ماست با خرما و دانه چیا", calories: 180, portion: "1 کاسه", protein: 10, carbs: 15, fat: 10, diet: "diet-5" }, 
  { name: "پنکیک سیب‌زمینی شیرین با ماست", calories: 220, portion: "2 عدد", protein: 6, carbs: 35, fat: 6, diet: "diet-2" },
  { name: "تخم‌مرغ پخته با زردچوبه", calories: 180, portion: "2 عدد تخم‌مرغ", protein: 14, carbs: 3, fat: 14, diet: "diet-6" },
  { name: "اسموتی گریپ‌فروت و نعنا", calories: 130, portion: "1 لیوان", protein: 3, carbs: 25, fat: 2, diet: "diet-7" },
  { name: "نان تست با کره بادام‌زمینی و تمشک", calories: 240, portion: "1 برش", protein: 8, carbs: 30, fat: 12, diet: "diet-2" },
  { name: "ماست یونانی با توت و دانه کنجد", calories: 180, portion: "1 کاسه", protein: 10, carbs: 15, fat: 10, diet: "diet-8" }, 
  { name: "املت مارچوبه و پنیر چدار", calories: 210, portion: "2 عدد تخم‌مرغ", protein: 16, carbs: 3, fat: 16, diet: "diet-6" },
  { name: "نان لواش با پنیر و نعنا", calories: 210, portion: "1 برش", protein: 8, carbs: 25, fat: 10, diet: "diet-1" },
  { name: "حلیم جو با شیره خرما", calories: 230, portion: "1 کاسه", protein: 6, carbs: 35, fat: 8, diet: "diet-2" },
  { name: "اسموتی سیب و بذر کتان", calories: 150, portion: "1 لیوان", protein: 4, carbs: 25, fat: 4, diet: "diet-7" },
  { name: "تخم‌مرغ نیمرو با فلفل قرمز", calories: 180, portion: "2 عدد تخم‌مرغ", protein: 14, carbs: 2, fat: 14, diet: "diet-6" },
  { name: "ماست با هلو و بادام", calories: 180, portion: "1 کاسه", protein: 10, carbs: 15, fat: 10, diet: "diet-5" }, 
  { name: "پنکیک بلغور جو با توت", calories: 230, portion: "2 عدد", protein: 6, carbs: 35, fat: 6, diet: "diet-2" },
  { name: "املت گوجه و زیتون سبز", calories: 190, portion: "2 عدد تخم‌مرغ", protein: 14, carbs: 5, fat: 14, diet: "diet-1" },
  { name: "نان تست با آووکادو و توت‌فرنگی", calories: 220, portion: "1 برش", protein: 6, carbs: 25, fat: 12, diet: "diet-2" },
  { name: "اسموتی انار و موز", calories: 160, portion: "1 لیوان", protein: 4, carbs: 30, fat: 4, diet: "diet-7" },
  { name: "ماست یونانی با خرمالو و دانه آفتابگردان", calories: 180, portion: "1 کاسه", protein: 10, carbs: 15, fat: 10, diet: "diet-8" }, 
  { name: "نان سنگک با کره پسته و عسل", calories: 260, portion: "1 برش", protein: 8, carbs: 40, fat: 10, diet: "diet-2" },
  { name: "تخم‌مرغ پخته با گشنیز", calories: 180, portion: "2 عدد تخم‌مرغ", protein: 14, carbs: 3, fat: 14, diet: "diet-6" },
  { name: "پنکیک سیب و دارچین", calories: 220, portion: "2 عدد", protein: 6, carbs: 35, fat: 6, diet: "diet-2" },
  { name: "اسموتی توت سیاه و اسفناج", calories: 140, portion: "1 لیوان", protein: 3, carbs: 25, fat: 2, diet: "diet-7" },
  { name: "املت فلفل دلمه‌ای و زردچوبه", calories: 190, portion: "2 عدد تخم‌مرغ", protein: 14, carbs: 5, fat: 14, diet: "diet-6" },
  { name: "نان بربری با پنیر و زیتون سیاه", calories: 240, portion: "1 برش", protein: 8, carbs: 35, fat: 10, diet: "diet-1" },
  { name: "ماست با انگور و دانه چیا", calories: 180, portion: "1 کاسه", protein: 10, carbs: 15, fat: 10, diet: "diet-5" }, 
  { name: "پنکیک کدو سبز با ماست", calories: 210, portion: "2 عدد", protein: 6, carbs: 30, fat: 6, diet: "diet-2" },
  { name: "تخم‌مرغ نیمرو با زعفران", calories: 180, portion: "2 عدد تخم‌مرغ", protein: 14, carbs: 2, fat: 14, diet: "diet-6" },
  { name: "اسموتی هلو و بذر کتان", calories: 150, portion: "1 لیوان", protein: 4, carbs: 25, fat: 4, diet: "diet-7" },
  { name: "نان تست با کره بادام و انار", calories: 230, portion: "1 برش", protein: 6, carbs: 30, fat: 12, diet: "diet-2" },
  { name: "ماست یونانی با توت‌فرنگی و پسته", calories: 180, portion: "1 کاسه", protein: 10, carbs: 15, fat: 10, diet: "diet-8" }, 
  { name: "املت کلم بروکلی و پنیر گودا", calories: 210, portion: "2 عدد تخم‌مرغ", protein: 16, carbs: 3, fat: 16, diet: "diet-6" },
  { name: "نان لواش با ارده و شیره انگور", calories: 250, portion: "1 برش", protein: 8, carbs: 40, fat: 10, diet: "diet-2" },
  { name: "اسموتی کیوی و اسفناج", calories: 140, portion: "1 لیوان", protein: 3, carbs: 25, fat: 2, diet: "diet-7" },
  { name: "تخم‌مرغ پخته با فلفل سیاه", calories: 180, portion: "2 عدد تخم‌مرغ", protein: 14, carbs: 3, fat: 14, diet: "diet-6" },
  { name: "ماست با خرما و بادام", calories: 180, portion: "1 کاسه", protein: 10, carbs: 15, fat: 10, diet: "diet-5" }, 
  { name: "پنکیک موز و توت‌فرنگی", calories: 230, portion: "2 عدد", protein: 6, carbs: 35, fat: 6, diet: "diet-2" },
  { name: "املت گوجه و پاپریکا", calories: 190, portion: "2 عدد تخم‌مرغ", protein: 14, carbs: 5, fat: 14, diet: "diet-6" },
  { name: "نان تست با آووکادو و هلو", calories: 220, portion: "1 برش", protein: 6, carbs: 25, fat: 12, diet: "diet-2" },
  { name: "اسموتی انار و اسفناج", calories: 140, portion: "1 لیوان", protein: 3, carbs: 25, fat: 2, diet: "diet-7" },
  { name: "ماست یونانی با انگور و دانه آفتابگردان", calories: 180, portion: "1 کاسه", protein: 10, carbs: 15, fat: 10, diet: "diet-8" }, 
  { name: "نان سنگک با پنیر و ریحان", calories: 240, portion: "1 برش", protein: 8, carbs: 35, fat: 10, diet: "diet-1" },
  { name: "تخم‌مرغ نیمرو با گشنیز", calories: 180, portion: "2 عدد تخم‌مرغ", protein: 14, carbs: 2, fat: 14, diet: "diet-6" },
  { name: "پنکیک سیب و انار", calories: 220, portion: "2 عدد", protein: 6, carbs: 35, fat: 6, diet: "diet-2" },
  { name: "اسموتی توت‌فرنگی و بذر چیا", calories: 150, portion: "1 لیوان", protein: 4, carbs: 25, fat: 4, diet: "diet-7" },
  { name: "ماست با هلو و دانه کنجد", calories: 180, portion: "1 کاسه", protein: 10, carbs: 15, fat: 10, diet: "diet-5" }, 
  { name: "املت فلفل دلمه‌ای و گشنیز", calories: 190, portion: "2 عدد تخم‌مرغ", protein: 14, carbs: 5, fat: 14, diet: "diet-6" },
  { name: "نان بربری با کره و توت‌فرنگی", calories: 250, portion: "1 برش", protein: 6, carbs: 40, fat: 8, diet: "diet-2" },
  { name: "تخم‌مرغ پخته با زیتون سبز", calories: 180, portion: "2 عدد تخم‌مرغ", protein: 14, carbs: 3, fat: 14, diet: "diet-1" },
  { name: "اسموتی سیب و توت‌فرنگی", calories: 150, portion: "1 لیوان", protein: 4, carbs: 25, fat: 4, diet: "diet-7" },
  { name: "ماست یونانی با توت و بادام", calories: 180, portion: "1 کاسه", protein: 10, carbs: 15, fat: 10, diet: "diet-8" }, 
  { name: "نان تست با کره بادام‌زمینی و انار", calories: 240, portion: "1 برش", protein: 8, carbs: 30, fat: 12, diet: "diet-2" },
  { name: "املت قارچ و زیتون سیاه", calories: 190, portion: "2 عدد تخم‌مرغ", protein: 14, carbs: 5, fat: 14, diet: "diet-6" },
  { name: "نان لواش با پنیر و زردچوبه", calories: 210, portion: "1 برش", protein: 8, carbs: 25, fat: 10, diet: "diet-1" },
  { name: "پنکیک موز و هلو", calories: 220, portion: "2 عدد", protein: 6, carbs: 35, fat: 6, diet: "diet-2" },
  { name: "تخم‌مرغ نیمرو با فلفل سیاه", calories: 180, portion: "2 عدد تخم‌مرغ", protein: 14, carbs: 2, fat: 14, diet: "diet-6" },
  { name: "اسموتی انار و توت‌فرنگی", calories: 150, portion: "1 لیوان", protein: 4, carbs: 25, fat: 4, diet: "diet-7" },
  { name: "ماست با خرما و دانه آفتابگردان", calories: 180, portion: "1 کاسه", protein: 10, carbs: 15, fat: 10, diet: "diet-5" }, 
  { name: "املت گوجه و زردچوبه", calories: 190, portion: "2 عدد تخم‌مرغ", protein: 14, carbs: 5, fat: 14, diet: "diet-6" },
  { name: "نان سنگک با ارده و توت", calories: 260, portion: "1 برش", protein: 8, carbs: 40, fat: 10, diet: "diet-2" },
  { name: "اسموتی هلو و اسفناج", calories: 140, portion: "1 لیوان", protein: 3, carbs: 25, fat: 2, diet: "diet-7" },
  { name: "ماست یونانی با تمشک و دانه چیا", calories: 180, portion: "1 کاسه", protein: 10, carbs: 15, fat: 10, diet: "diet-8" }, 
  { name: "نان تست با آووکادو و تمشک", calories: 220, portion: "1 برش", protein: 6, carbs: 25, fat: 12, diet: "diet-2" },
  { name: "املت فلفل سبز و زیتون سبز", calories: 190, portion: "2 عدد تخم‌مرغ", protein: 14, carbs: 5, fat: 14, diet: "diet-6" },
  { name: "نان بربری با پنیر و پاپریکا", calories: 240, portion: "1 برش", protein: 8, carbs: 35, fat: 10, diet: "diet-1" },
  { name: "پنکیک سیب و توت‌فرنگی", calories: 220, portion: "2 عدد", protein: 6, carbs: 35, fat: 6, diet: "diet-2" },
  { name: "تخم‌مرغ پخته با زعفران", calories: 180, portion: "2 عدد تخم‌مرغ", protein: 14, carbs: 3, fat: 14, diet: "diet-6" },
  { name: "اسموتی کیوی و توت‌فرنگی", calories: 150, portion: "1 لیوان", protein: 4, carbs: 25, fat: 4, diet: "diet-7" },
  { name: "ماست با انگور و دانه کنجد", calories: 180, portion: "1 کاسه", protein: 10, carbs: 15, fat: 10, diet: "diet-5" }, 
  { name: "املت قارچ و پاپریکا", calories: 190, portion: "2 عدد تخم‌مرغ", protein: 14, carbs: 5, fat: 14, diet: "diet-6" },
  { name: "نان لواش با کره و هلو", calories: 240, portion: "1 برش", protein: 6, carbs: 35, fat: 8, diet: "diet-2" },
  { name: "اسموتی سیب و انار", calories: 150, portion: "1 لیوان", protein: 4, carbs: 25, fat: 4, diet: "diet-7" },
  { name: "ماست یونانی با توت‌فرنگی و دانه آفتابگردان", calories: 180, portion: "1 کاسه", protein: 10, carbs: 15, fat: 10, diet: "diet-8" }, 
  { name: "نان تست با کره بادام و هلو", calories: 230, portion: "1 برش", protein: 6, carbs: 30, fat: 12, diet: "diet-2" },
  { name: "املت گوجه و زیتون سیاه", calories: 190, portion: "2 عدد تخم‌مرغ", protein: 14, carbs: 5, fat: 14, diet: "diet-1" },
  { name: "نان سنگک با پنیر و زعفران", calories: 240, portion: "1 برش", protein: 8, carbs: 35, fat: 10, diet: "diet-1" },
  { name: "پنکیک موز و انار", calories: 220, portion: "2 عدد", protein: 6, carbs: 35, fat: 6, diet: "diet-2" },
  { name: "تخم‌مرغ نیمرو با زردچوبه", calories: 180, portion: "2 عدد تخم‌مرغ", protein: 14, carbs: 2, fat: 14, diet: "diet-6" },
  { name: "اسموتی توت و اسفناج", calories: 140, portion: "1 لیوان", protein: 3, carbs: 25, fat: 2, diet: "diet-7" },
  { name: "ماست با خرمالو و دانه چیا", calories: 180, portion: "1 کاسه", protein: 10, carbs: 15, fat: 10, diet: "diet-5" }, 
  { name: "املت فلفل دلمه‌ای و زیتون سیاه", calories: 190, portion: "2 عدد تخم‌مرغ", protein: 14, carbs: 5, fat: 14, diet: "diet-6" },
  { name: "نان بربری با ارده و توت", calories: 260, portion: "1 برش", protein: 8, carbs: 40, fat: 10, diet: "diet-2" },
  { name: "اسموتی انار و کیوی", calories: 150, portion: "1 لیوان", protein: 4, carbs: 25, fat: 4, diet: "diet-7" },
  { name: "ماست یونانی با هلو و دانه کنجد", calories: 180, portion: "1 کاسه", protein: 10, carbs: 15, fat: 10, diet: "diet-8" }, 
  { name: "نان تست با آووکادو و انار", calories: 220, portion: "1 برش", protein: 6, carbs: 25, fat: 12, diet: "diet-2" },
  { name: "املت قارچ و زردچوبه", calories: 190, portion: "2 عدد تخم‌مرغ", protein: 14, carbs: 5, fat: 14, diet: "diet-6" },
  { name: "نان لواش با پنیر و گشنیز", calories: 210, portion: "1 برش", protein: 8, carbs: 25, fat: 10, diet: "diet-1" },
  { name: "پنکیک سیب و هلو", calories: 220, portion: "2 عدد", protein: 6, carbs: 35, fat: 6, diet: "diet-2" },
  { name: "تخم‌مرغ پخته با پاپریکا", calories: 180, portion: "2 عدد تخم‌مرغ", protein: 14, carbs: 3, fat: 14, diet: "diet-6" },
  { name: "اسموتی توت‌فرنگی و کیوی", calories: 150, portion: "1 لیوان", protein: 4, carbs: 25, fat: 4, diet: "diet-7" },
  { name: "ماست با انگور و دانه آفتابگردان", calories: 180, portion: "1 کاسه", protein: 10, carbs: 15, fat: 10, diet: "diet-5" }, 
  { name: "املت گوجه و فلفل سیاه", calories: 190, portion: "2 عدد تخم‌مرغ", protein: 14, carbs: 5, fat: 14, diet: "diet-6" },
  { name: "نان سنگک با کره و انار", calories: 260, portion: "1 برش", protein: 6, carbs: 40, fat: 8, diet: "diet-2" },
  { name: "اسموتی سیب و کیوی", calories: 150, portion: "1 لیوان", protein: 4, carbs: 25, fat: 4, diet: "diet-7" },
  { name: "ماست یونانی با توت‌فرنگی و دانه چیا", calories: 180, portion: "1 کاسه", protein: 10, carbs: 15, fat: 10, diet: "diet-8" }, 
  { name: "نان تست با کره بادام و توت‌فرنگی", calories: 230, portion: "1 برش", protein: 6, carbs: 30, fat: 12, diet: "diet-2" },
  { name: "املت فلفل سبز و پاپریکا", calories: 190, portion: "2 عدد تخم‌مرغ", protein: 14, carbs: 5, fat: 14, diet: "diet-6" },
  { name: "نان بربری با پنیر و زردچوبه", calories: 240, portion: "1 برش", protein: 8, carbs: 35, fat: 10, diet: "diet-1" },
  { name: "پنکیک موز و توت", calories: 220, portion: "2 عدد", protein: 6, carbs: 35, fat: 6, diet: "diet-2" },
  { name: "تخم‌مرغ نیمرو با زیتون سبز", calories: 180, portion: "2 عدد تخم‌مرغ", protein: 14, carbs: 2, fat: 14, diet: "diet-1" },
  { name: "اسموتی انار و هلو", calories: 150, portion: "1 لیوان", protein: 4, carbs: 25, fat: 4, diet: "diet-7" },
  { name: "ماست با خرما و دانه کنجد", calories: 180, portion: "1 کاسه", protein: 10, carbs: 15, fat: 10, diet: "diet-5" }, 
  { name: "املت قارچ و فلفل سیاه", calories: 190, portion: "2 عدد تخم‌مرغ", protein: 14, carbs: 5, fat: 14, diet: "diet-6" },
  { name: "نان لواش با ارده و هلو", calories: 250, portion: "1 برش", protein: 8, carbs: 40, fat: 10, diet: "diet-2" },
  { name: "اسموتی توت و کیوی", calories: 150, portion: "1 لیوان", protein: 4, carbs: 25, fat: 4, diet: "diet-7" },
  { name: "ماست یونانی با هلو و دانه آفتابگردان", calories: 180, portion: "1 کاسه", protein: 10, carbs: 15, fat: 10, diet: "diet-8" }, 
  { name: "نان تست با آووکادو و توت", calories: 220, portion: "1 برش", protein: 6, carbs: 25, fat: 12, diet: "diet-2" },
  { name: "املت گوجه و زعفران", calories: 190, portion: "2 عدد تخم‌مرغ", protein: 14, carbs: 5, fat: 14, diet: "diet-6" },
  { name: "نان سنگک با پنیر و پاپریکا", calories: 240, portion: "1 برش", protein: 8, carbs: 35, fat: 10, diet: "diet-1" }, 
  { name: "پنکیک سیب و انار", calories: 220, portion: "2 عدد", protein: 6, carbs: 35, fat: 6, diet: "diet-2" },
  { name: "تخم‌مرغ پخته با زردچوبه", calories: 180, portion: "2 عدد تخم‌مرغ", protein: 14, carbs: 3, fat: 14, diet: "diet-6" },
  { name: "اسموتی توت‌فرنگی و انار", calories: 150, portion: "1 لیوان", protein: 4, carbs: 25, fat: 4, diet: "diet-7" },
  { name: "ماست با انگور و دانه چیا", calories: 180, portion: "1 کاسه", protein: 10, carbs: 15, fat: 10, diet: "diet-5" }, 
  { name: "املت فلفل دلمه‌ای و پاپریکا", calories: 190, portion: "2 عدد تخم‌مرغ", protein: 14, carbs: 5, fat: 14, diet: "diet-6" },
  { name: "نان بربری با کره و انار", calories: 250, portion: "1 برش", protein: 6, carbs: 40, fat: 8, diet: "diet-2" },
  { name: "اسموتی سیب و توت", calories: 150, portion: "1 لیوان", protein: 4, carbs: 25, fat: 4, diet: "diet-7" },
  { name: "ماست یونانی با توت‌فرنگی و دانه کنجد", calories: 180, portion: "1 کاسه", protein: 10, carbs: 15, fat: 10, diet: "diet-8" }, 
  { name: "نان تست با کره بادام و سیب", calories: 230, portion: "1 برش", protein: 6, carbs: 30, fat: 12, diet: "diet-2" },
  { name: "املت قارچ و زیتون سبز", calories: 190, portion: "2 عدد تخم‌مرغ", protein: 14, carbs: 5, fat: 14, diet: "diet-6" },
  { name: "نان لواش با پنیر و زیتون سیاه", calories: 210, portion: "1 برش", protein: 8, carbs: 25, fat: 10, diet: "diet-1" },
  { name: "پنکیک موز و سیب", calories: 220, portion: "2 عدد", protein: 6, carbs: 35, fat: 6, diet: "diet-2" },
  { name: "تخم‌مرغ نیمرو با پاپریکا", calories: 180, portion: "2 عدد تخم‌مرغ", protein: 14, carbs: 2, fat: 14, diet: "diet-6" },
  { name: "اسموتی انار و سیب", calories: 150, portion: "1 لیوان", protein: 4, carbs: 25, fat: 4, diet: "diet-7" },
  { name: "ماست با هلو و دانه چیا", calories: 180, portion: "1 کاسه", protein: 10, carbs: 15, fat: 10, diet: "diet-5" }, 
  { name: "املت فلفل سبز و زردچوبه", calories: 190, portion: "2 عدد تخم‌مرغ", protein: 14, carbs: 5, fat: 14, diet: "diet-6" },
  { name: "نان سنگک با ارده و هلو", calories: 260, portion: "1 برش", protein: 8, carbs: 40, fat: 10, diet: "diet-2" },
  { name: "اسموتی توت‌فرنگی و سیب", calories: 150, portion: "1 لیوان", protein: 4, carbs: 25, fat: 4, diet: "diet-7" },
  { name: "ماست یونانی با انار و دانه آفتابگردان", calories: 180, portion: "1 کاسه", protein: 10, carbs: 15, fat: 10, diet: "diet-8" }, 
  { name: "نان تست با آووکادو و سیب", calories: 220, portion: "1 برش", protein: 6, carbs: 25, fat: 12, diet: "diet-2" },
  { name: "املت گوجه و پاپریکا", calories: 190, portion: "2 عدد تخم‌مرغ", protein: 14, carbs: 5, fat: 14, diet: "diet-6" },
  { name: "نان بربری با پنیر و زعفران", calories: 240, portion: "1 برش", protein: 8, carbs: 35, fat: 10, diet: "diet-1" },
  { name: "پنکیک سیب و توت", calories: 220, portion: "2 عدد", protein: 6, carbs: 35, fat: 6, diet: "diet-2" },
  { name: "تخم‌مرغ پخته با زیتون سیاه", calories: 180, portion: "2 عدد تخم‌مرغ", protein: 14, carbs: 3, fat: 14, diet: "diet-1" },
  { name: "اسموتی کیوی و انار", calories: 150, portion: "1 لیوان", protein: 4, carbs: 25, fat: 4, diet: "diet-7" },
  { name: "ماست با توت‌فرنگی و دانه کنجد", calories: 180, portion: "1 کاسه", protein: 10, carbs: 15, fat: 10, diet: "diet-5" },
  { name: "املت فلفل دلمه‌ای و زردچوبه", calories: 190, portion: "2 عدد تخم‌مرغ", protein: 14, carbs: 5, fat: 14, diet: "diet-6" },
  { name: "نان لواش با کره و توت‌فرنگی", calories: 240, portion: "1 برش", protein: 6, carbs: 35, fat: 8, diet: "diet-2" },
  { name: "اسموتی سیب و هلو", calories: 150, portion: "1 لیوان", protein: 4, carbs: 25, fat: 4, diet: "diet-7" },
  { name: "ماست یونانی با هلو و دانه چیا", calories: 180, portion: "1 کاسه", protein: 10, carbs: 15, fat: 10, diet: "diet-8" }, 
  { name: "نان تست با کره بادام و انار", calories: 230, portion: "1 برش", protein: 6, carbs: 30, fat: 12, diet: "diet-2" },
  { name: "املت قارچ و زعفران", calories: 190, portion: "2 عدد تخم‌مرغ", protein: 14, carbs: 5, fat: 14, diet: "diet-6" },
  { name: "نان سنگک با پنیر و زیتون سبز", calories: 240, portion: "1 برش", protein: 8, carbs: 35, fat: 10, diet: "diet-1" },
  { name: "پنکیک موز و هلو", calories: 220, portion: "2 عدد", protein: 6, carbs: 35, fat: 6, diet: "diet-2" },
  { name: "تخم‌مرغ نیمرو با زعفران", calories: 180, portion: "2 عدد تخم‌مرغ", protein: 14, carbs: 2, fat: 14, diet: "diet-6" },
  { name: "اسموتی توت‌فرنگی و هلو", calories: 150, portion: "1 لیوان", protein: 4, carbs: 25, fat: 4, diet: "diet-7" },
  { name: "ماست با انار و دانه کنجد", calories: 180, portion: "1 کاسه", protein: 10, carbs: 15, fat: 10, diet: "diet-5" }, 
  { name: "املت گوجه و زیتون سبز", calories: 190, portion: "2 عدد تخم‌مرغ", protein: 14, carbs: 5, fat: 14, diet: "diet-1" },
  { name: "نان بربری با ارده و انار", calories: 260, portion: "1 برش", protein: 8, carbs: 40, fat: 10, diet: "diet-2" },
  { name: "اسموتی کیوی و سیب", calories: 150, portion: "1 لیوان", protein: 4, carbs: 25, fat: 4, diet: "diet-7" },
  { name: "ماست یونانی با توت و دانه آفتابگردان", calories: 180, portion: "1 کاسه", protein: 10, carbs: 15, fat: 10, diet: "diet-8" }, 
  { name: "نان تست با آووکادو و هلو", calories: 220, portion: "1 برش", protein: 6, carbs: 25, fat: 12, diet: "diet-2" },
  { name: "املت فلفل سبز و زعفران", calories: 190, portion: "2 عدد تخم‌مرغ", protein: 14, carbs: 5, fat: 14, diet: "diet-6" },
  { name: "نان لواش با پنیر و پاپریکا", calories: 210, portion: "1 برش", protein: 8, carbs: 25, fat: 10, diet: "diet-1" },
  { name: "پنکیک سیب و موز", calories: 220, portion: "2 عدد", protein: 6, carbs: 35, fat: 6, diet: "diet-2" },
  { name: "تخم‌مرغ پخته با زیتون سبز", calories: 180, portion: "2 عدد تخم‌مرغ", protein: 14, carbs: 3, fat: 14, diet: "diet-1" },
  { name: "اسموتی انار و توت", calories: 150, portion: "1 لیوان", protein: 4, carbs: 25, fat: 4, diet: "diet-7" },
  { name: "ماست با هلو و دانه کنجد", calories: 180, portion: "1 کاسه", protein: 10, carbs: 15, fat: 10, diet: "diet-5" }, 
  { name: "املت قارچ و پاپریکا", calories: 190, portion: "2 عدد تخم‌مرغ", protein: 14, carbs: 5, fat: 14, diet: "diet-6" },
  { name: "نان سنگک با ارده و سیب", calories: 260, portion: "1 برش", protein: 8, carbs: 40, fat: 10, diet: "diet-2" },
  { name: "اسموتی توت‌فرنگی و انار", calories: 150, portion: "1 لیوان", protein: 4, carbs: 25, fat: 4, diet: "diet-7" },
  { name: "ماست یونانی با انار و دانه چیا", calories: 180, portion: "1 کاسه", protein: 10, carbs: 15, fat: 10, diet: "diet-8" }, 
  { name: "نان تست با کره بادام و توت", calories: 230, portion: "1 برش", protein: 6, carbs: 30, fat: 12, diet: "diet-2" },
  { name: "املت فلفل دلمه‌ای و زیتون سبز", calories: 190, portion: "2 عدد تخم‌مرغ", protein: 14, carbs: 5, fat: 14, diet: "diet-1" },
  { name: "نان بربری با پنیر و زیتون سبز", calories: 240, portion: "1 برش", protein: 8, carbs: 35, fat: 10, diet: "diet-1" },
  { name: "پنکیک موز و توت‌فرنگی", calories: 220, portion: "2 عدد", protein: 6, carbs: 35, fat: 6, diet: "diet-2" },
  { name: "تخم‌مرغ نیمرو با زردچوبه", calories: 180, portion: "2 عدد تخم‌مرغ", protein: 14, carbs: 2, fat: 14, diet: "diet-6" },
  { name: "اسموتی سیب و توت‌فرنگی", calories: 150, portion: "1 لیوان", protein: 4, carbs: 25, fat: 4, diet: "diet-7" },
  { name: "ماست با انگور و دانه کنجد", calories: 180, portion: "1 کاسه", protein: 10, carbs: 15, fat: 10, diet: "diet-5" },
  { name: "املت گوجه و زردچوبه", calories: 190, portion: "2 عدد تخم‌مرغ", protein: 14, carbs: 5, fat: 14, diet: "diet-6" },
  { name: "نان لواش با ارده و توت", calories: 250, portion: "1 برش", protein: 8, carbs: 40, fat: 10, diet: "diet-2" },
  { name: "اسموتی کیوی و هلو", calories: 150, portion: "1 لیوان", protein: 4, carbs: 25, fat: 4, diet: "diet-7" },
  { name: "ماست یونانی با توت‌فرنگی و دانه آفتابگردان", calories: 180, portion: "1 کاسه", protein: 10, carbs: 15, fat: 10, diet: "diet-8" }, 
  { name: "نان تست با آووکادو و انار", calories: 220, portion: "1 برش", protein: 6, carbs: 25, fat: 12, diet: "diet-2" },
  { name: "املت قارچ و زیتون سیاه", calories: 190, portion: "2 عدد تخم‌مرغ", protein: 14, carbs: 5, fat: 14, diet: "diet-6" },
  { name: "نان سنگک با پنیر و زردچوبه", calories: 240, portion: "1 برش", protein: 8, carbs: 35, fat: 10, diet: "diet-1" },
  { name: "پنکیک سیب و هلو", calories: 220, portion: "2 عدد", protein: 6, carbs: 35, fat: 6, diet: "diet-2" },
  { name: "تخم‌مرغ پخته با پاپریکا", calories: 180, portion: "2 عدد تخم‌مرغ", protein: 14, carbs: 3, fat: 14, diet: "diet-6" },
  { name: "اسموتی توت و هلو", calories: 150, portion: "1 لیوان", protein: 4, carbs: 25, fat: 4, diet: "diet-7" },
  { name: "ماست با انار و دانه چیا", calories: 180, portion: "1 کاسه", protein: 10, carbs: 15, fat: 10, diet: "diet-5" }, 
  { name: "املت فلفل سبز و زیتون سیاه", calories: 190, portion: "2 عدد تخم‌مرغ", protein: 14, carbs: 5, fat: 14, diet: "diet-1" },
  { name: "نان بربری با کره و سیب", calories: 250, portion: "1 برش", protein: 6, carbs: 40, fat: 8, diet: "diet-2" },
  { name: "اسموتی انار و سیب", calories: 150, portion: "1 لیوان", protein: 4, carbs: 25, fat: 4, diet: "diet-7" },
  { name: "ماست یونانی با هلو و دانه کنجد", calories: 180, portion: "1 کاسه", protein: 10, carbs: 15, fat: 10, diet: "diet-8" }, 
  { name: "نان تست با کره بادام و هلو", calories: 230, portion: "1 برش", protein: 6, carbs: 30, fat: 12, diet: "diet-2" },
  { name: "املت گوجه و زیتون سبز", calories: 190, portion: "2 عدد تخم‌مرغ", protein: 14, carbs: 5, fat: 14, diet: "diet-1" },
  { name: "نان لواش با پنیر و زعفران", calories: 210, portion: "1 برش", protein: 8, carbs: 25, fat: 10, diet: "diet-1" },
  { name: "پنکیک موز و انار", calories: 220, portion: "2 عدد", protein: 6, carbs: 35, fat: 6, diet: "diet-2" },
  { name: "تخم‌مرغ نیمرو با زیتون سیاه", calories: 180, portion: "2 عدد تخم‌مرغ", protein: 14, carbs: 2, fat: 14, diet: "diet-6" },
  { name: "اسموتی توت‌فرنگی و سیب", calories: 150, portion: "1 لیوان", protein: 4, carbs: 25, fat: 4, diet: "diet-7" },
  { name: "ماست با انگور و دانه آفتابگردان", calories: 180, portion: "1 کاسه", protein: 10, carbs: 15, fat: 10, diet: "diet-5" },
  { name: "املت قارچ و زردچوبه", calories: 190, portion: "2 عدد تخم‌مرغ", protein: 14, carbs: 5, fat: 14, diet: "diet-6" },
  { name: "نان سنگک با ارده و توت‌فرنگی", calories: 260, portion: "1 برش", protein: 8, carbs: 40, fat: 10, diet: "diet-2" },
  { name: "اسموتی کیوی و انار", calories: 150, portion: "1 لیوان", protein: 4, carbs: 25, fat: 4, diet: "diet-7" }, 
  { name: "ماست یونانی با توت و دانه چیا", calories: 180, portion: "1 کاسه", protein: 10, carbs: 15, fat: 10, diet: "diet-8" }, 
  { name: "نان تست با آووکادو و توت‌فرنگی", calories: 220, portion: "1 برش", protein: 6, carbs: 25, fat: 12, diet: "diet-2" },
  { name: "املت فلفل دلمه‌ای و زعفران", calories: 190, portion: "2 عدد تخم‌مرغ", protein: 14, carbs: 5, fat: 14, diet: "diet-6" },
  { name: "نان بربری با پنیر و پاپریکا", calories: 240, portion: "1 برش", protein: 8, carbs: 35, fat: 10, diet: "diet-1" },
  { name: "پنکیک سیب و توت‌فرنگی", calories: 220, portion: "2 عدد", protein: 6, carbs: 35, fat: 6, diet: "diet-2" },
  { name: "تخم‌مرغ پخته با زیتون سبز", calories: 180, portion: "2 عدد تخم‌مرغ", protein: 14, carbs: 3, fat: 14, diet: "diet-1" },
  { name: "اسموتی انار و هلو", calories: 150, portion: "1 لیوان", protein: 4, carbs: 25, fat: 4, diet: "diet-7" },
  { name: "ماست با هلو و دانه آفتابگردان", calories: 180, portion: "1 کاسه", protein: 10, carbs: 15, fat: 10, diet: "diet-5" },
  { name: "املت قارچ و زیتون سبز", calories: 190, portion: "2 عدد تخم‌مرغ", protein: 14, carbs: 5, fat: 14, diet: "diet-6" },
  { name: "نان لواش با ارده و سیب", calories: 250, portion: "1 برش", protein: 8, carbs: 40, fat: 10, diet: "diet-2" },
  { name: "اسموتی توت و سیب", calories: 150, portion: "1 لیوان", protein: 4, carbs: 25, fat: 4, diet: "diet-7" },
  { name: "ماست یونانی با انار و دانه کنجد", calories: 180, portion: "1 کاسه", protein: 10, carbs: 15, fat: 10, diet: "diet-8" },
  { name: "نان تست با کره بادام و سیب", calories: 230, portion: "1 برش", protein: 6, carbs: 30, fat: 12, diet: "diet-2" },
  { name: "املت فلفل سبز و زیتون سبز", calories: 190, portion: "2 عدد تخم‌مرغ", protein: 14, carbs: 5, fat: 14, diet: "diet-1" },
  { name: "نان سنگک با پنیر و زیتون سیاه", calories: 240, portion: "1 برش", protein: 8, carbs: 35, fat: 10, diet: "diet-1" },
  { name: "پنکیک موز و توت", calories: 220, portion: "2 عدد", protein: 6, carbs: 35, fat: 6, diet: "diet-2" },
  { name: "تخم‌مرغ نیمرو با زردچوبه", calories: 180, portion: "2 عدد تخم‌مرغ", protein: 14, carbs: 2, fat: 14, diet: "diet-6" },
  { name: "اسموتی کیوی و توت", calories: 150, portion: "1 لیوان", protein: 4, carbs: 25, fat: 4, diet: "diet-7" },
  { name: "ماست با انگور و دانه چیا", calories: 180, portion: "1 کاسه", protein: 10, carbs: 15, fat: 10, diet: "diet-5" }, 
  { name: "املت گوجه و زعفران", calories: 190, portion: "2 عدد تخم‌مرغ", protein: 14, carbs: 5, fat: 14, diet: "diet-6" },
  { name: "نان بربری با ارده و هلو", calories: 260, portion: "1 برش", protein: 8, carbs: 40, fat: 10, diet: "diet-2" },
  { name: "اسموتی سیب و انار", calories: 150, portion: "1 لیوان", protein: 4, carbs: 25, fat: 4, diet: "diet-7" },
  { name: "ماست یونانی با توت‌فرنگی و دانه آفتابگردان", calories: 180, portion: "1 کاسه", protein: 10, carbs: 15, fat: 10, diet: "diet-8" },   
  { name: "نان تست با آووکادو و سیب", calories: 220, portion: "1 برش", protein: 6, carbs: 25, fat: 12, diet: "diet-2" },
  { name: "املت قارچ و زردچوبه", calories: 190, portion: "2 عدد تخم‌مرغ", protein: 14, carbs: 5, fat: 14, diet: "diet-6" },
  { name: "نان لواش با پنیر و زیتون سبز", calories: 210, portion: "1 برش", protein: 8, carbs: 25, fat: 10, diet: "diet-1" },
  { name: "پنکیک سیب و موز", calories: 220, portion: "2 عدد", protein: 6, carbs: 35, fat: 6, diet: "diet-2" },
  { name: "تخم‌مرغ پخته با زعفران", calories: 180, portion: "2 عدد تخم‌مرغ", protein: 14, carbs: 3, fat: 14, diet: "diet-6" },
  { name: "اسموتی توت‌فرنگی و کیوی", calories: 150, portion: "1 لیوان", protein: 4, carbs: 25, fat: 4, diet: "diet-7" },
  { name: "ماست با هلو و دانه چیا", calories: 180, portion: "1 کاسه", protein: 10, carbs: 15, fat: 10, diet: "diet-5" }, 
  { name: "املت فلفل دلمه‌ای و زیتون سیاه", calories: 190, portion: "2 عدد تخم‌مرغ", protein: 14, carbs: 5, fat: 14, diet: "diet-1" },
  { name: "نان سنگک با ارده و انار", calories: 260, portion: "1 برش", protein: 8, carbs: 40, fat: 10, diet: "diet-2" },
  { name: "اسموتی انار و توت‌فرنگی", calories: 150, portion: "1 لیوان", protein: 4, carbs: 25, fat: 4, diet: "diet-7" },
  { name: "ماست یونانی با توت و دانه کنجد", calories: 180, portion: "1 کاسه", protein: 10, carbs: 15, fat: 10, diet: "diet-8" }, 
  { name: "نان تست با کره بادام و توت‌فرنگی", calories: 230, portion: "1 برش", protein: 6, carbs: 30, fat: 12, diet: "diet-2" },
  { name: "املت گوجه و زیتون سیاه", calories: 190, portion: "2 عدد تخم‌مرغ", protein: 14, carbs: 5, fat: 14, diet: "diet-1" },
  { name: "نان بربری با پنیر و زردچوبه", calories: 240, portion: "1 برش", protein: 8, carbs: 35, fat: 10, diet: "diet-1" },
  { name: "پنکیک موز و سیب", calories: 220, portion: "2 عدد", protein: 6, carbs: 35, fat: 6, diet: "diet-2" },
  { name: "تخم‌مرغ نیمرو با زیتون سبز", calories: 180, portion: "2 عدد تخم‌مرغ", protein: 14, carbs: 2, fat: 14, diet: "diet-6" },
  { name: "اسموتی سیب و کیوی", calories: 150, portion: "1 لیوان", protein: 4, carbs: 25, fat: 4, diet: "diet-7" },
  { name: "ماست با انگور و دانه آفتابگردان", calories: 180, portion: "1 کاسه", protein: 10, carbs: 15, fat: 10, diet: "diet-5" }, 
  { name: "املت قارچ و زعفران", calories: 190, portion: "2 عدد تخم‌مرغ", protein: 14, carbs: 5, fat: 14, diet: "diet-6" },
  { name: "نان لواش با ارده و توت‌فرنگی", calories: 250, portion: "1 برش", protein: 8, carbs: 40, fat: 10, diet: "diet-2" },
  { name: "اسموتی توت و انار", calories: 150, portion: "1 لیوان", protein: 4, carbs: 25, fat: 4, diet: "diet-7" },
  { name: "ماست یونانی با هلو و دانه چیا", calories: 180, portion: "1 کاسه", protein: 10, carbs: 15, fat: 10, diet: "diet-8" },
  { name: "نان تست با آووکادو و هلو", calories: 220, portion: "1 برش", protein: 6, carbs: 25, fat: 12, diet: "diet-2" },
  { name: "املت فلفل سبز و زیتون سیاه", calories: 190, portion: "2 عدد تخم‌مرغ", protein: 14, carbs: 5, fat: 14, diet: "diet-1" },
];

const lunchDatabase = [
  { name: "خورش قورمه‌سبزی", calories: 250, portion: "100 گرم", protein: 18, carbs: 15, fat: 15, diet: "diet-4" },
  { name: "سالاد کینوا و زیتون", calories: 180, portion: "1 کاسه", protein: 8, carbs: 25, fat: 8, diet: "diet-1" },
  { name: "ماهی سالمون گریل", calories: 220, portion: "100 گرم", protein: 24, carbs: 2, fat: 12, diet: "diet-8" }, 
  { name: "خوراک عدس قرمز", calories: 170, portion: "1 کاسه", protein: 10, carbs: 25, fat: 4, diet: "diet-2" },
  { name: "مرغ بخارپز", calories: 190, portion: "100 گرم", protein: 22, carbs: 3, fat: 8, diet: "diet-5" }, 
  { name: "شیشلیک گوسفندی", calories: 300, portion: "100 گرم", protein: 24, carbs: 2, fat: 22, diet: "diet-6" },
  { name: "سوپ کرفس", calories: 130, portion: "1 کاسه", protein: 3, carbs: 20, fat: 4, diet: "diet-7" },
  { name: "کباب کوبیده", calories: 280, portion: "100 گرم", protein: 22, carbs: 5, fat: 20, diet: "diet-6" },
  { name: "خوراک بادمجان کبابی", calories: 160, portion: "100 گرم", protein: 4, carbs: 15, fat: 8, diet: "diet-2" },
  { name: "جوجه‌کباب", calories: 200, portion: "100 گرم", protein: 24, carbs: 3, fat: 10, diet: "diet-5" }, 
  { name: "خورش بامیه", calories: 230, portion: "100 گرم", protein: 20, carbs: 10, fat: 14, diet: "diet-4" },
  { name: "سالاد آروگولا و انار", calories: 170, portion: "1 کاسه", protein: 5, carbs: 15, fat: 10, diet: "diet-1" },
  { name: "سوپ میسو", calories: 140, portion: "1 کاسه", protein: 6, carbs: 15, fat: 5, diet: "diet-3" },
  { name: "ماهی تون کبابی", calories: 190, portion: "100 گرم", protein: 24, carbs: 2, fat: 10, diet: "diet-8" }, 
  { name: "خوراک توفو و فلفل دلمه‌ای", calories: 160, portion: "100 گرم", protein: 12, carbs: 10, fat: 8, diet: "diet-2" },
  { name: "پیتزا مارگاریتا", calories: 260, portion: "1 برش", protein: 10, carbs: 35, fat: 10, diet: "diet-2" },
  { name: "چلوکباب برگ", calories: 320, portion: "100 گرم", protein: 22, carbs: 30, fat: 15, diet: "diet-4" },
  { name: "سوپ گل‌کلم", calories: 130, portion: "1 کاسه", protein: 4, carbs: 15, fat: 6, diet: "diet-7" },
  { name: "برگر گوشت", calories: 290, portion: "1 عدد", protein: 20, carbs: 25, fat: 15, diet: "diet-4" },
  { name: "سالاد نخود و گوجه", calories: 150, portion: "1 کاسه", protein: 8, carbs: 20, fat: 5, diet: "diet-2" },
  { name: "ماهی کاد کبابی", calories: 180, portion: "100 گرم", protein: 22, carbs: 2, fat: 8, diet: "diet-8" }, 
  { name: "خوراک کدو سبز", calories: 160, portion: "100 گرم", protein: 5, carbs: 15, fat: 10, diet: "diet-2" },
  { name: "ساندویچ مرغ گریل", calories: 240, portion: "1 عدد", protein: 20, carbs: 25, fat: 8, diet: "diet-5" }, 
  { name: "خورش فسنجان", calories: 270, portion: "100 گرم", protein: 18, carbs: 15, fat: 18, diet: "diet-4" },
  { name: "سالاد تمشک و پنیر بز", calories: 170, portion: "1 کاسه", protein: 6, carbs: 15, fat: 10, diet: "diet-1" },
  { name: "ماهی سفید کبابی", calories: 180, portion: "100 گرم", protein: 22, carbs: 2, fat: 8, diet: "diet-8" }, 
  { name: "خوراک قارچ شیتاکه", calories: 150, portion: "100 گرم", protein: 5, carbs: 15, fat: 8, diet: "diet-2" },
  { name: "دیزی", calories: 280, portion: "100 گرم", protein: 20, carbs: 15, fat: 18, diet: "diet-4" },
  { name: "پیتزا پپرونی", calories: 300, portion: "1 برش", protein: 12, carbs: 35, fat: 12, diet: "diet-4" },
  { name: "سوپ چغندر", calories: 140, portion: "1 کاسه", protein: 5, carbs: 20, fat: 4, diet: "diet-7" },
  { name: "خورش کدو حلوایی", calories: 220, portion: "100 گرم", protein: 20, carbs: 15, fat: 10, diet: "diet-4" },
  { name: "سالاد آووکادو و انبه", calories: 180, portion: "1 کاسه", protein: 4, carbs: 15, fat: 12, diet: "diet-1" },
  { name: "ماهی تیلاپیا گریل", calories: 180, portion: "100 گرم", protein: 22, carbs: 2, fat: 8, diet: "diet-8" }, 
  { name: "خوراک تمپه و نارگیل", calories: 190, portion: "100 گرم", protein: 16, carbs: 10, fat: 10, diet: "diet-2" },
  { name: "ساندویچ بوقلمون", calories: 230, portion: "1 عدد", protein: 20, carbs: 25, fat: 8, diet: "diet-5" },
  { name: "کباب چنجه", calories: 270, portion: "100 گرم", protein: 24, carbs: 2, fat: 18, diet: "diet-6" },
  { name: "سوپ کلم‌پیچ", calories: 130, portion: "1 کاسه", protein: 4, carbs: 15, fat: 6, diet: "diet-7" },
  { name: "خورش قیمه", calories: 260, portion: "100 گرم", protein: 18, carbs: 15, fat: 16, diet: "diet-4" },
  { name: "سالاد خرمالو و پنیر", calories: 180, portion: "1 کاسه", protein: 6, carbs: 15, fat: 10, diet: "diet-1" },
  { name: "برگر مرغ", calories: 260, portion: "1 عدد", protein: 18, carbs: 25, fat: 10, diet: "diet-5" }, 
  { name: "خوراک سیب‌زمینی شیرین", calories: 160, portion: "100 گرم", protein: 4, carbs: 25, fat: 5, diet: "diet-2" },
  { name: "خورش آلو", calories: 240, portion: "100 گرم", protein: 18, carbs: 15, fat: 14, diet: "diet-4" },
  { name: "پیتزا سبزیجات", calories: 250, portion: "1 برش", protein: 10, carbs: 35, fat: 8, diet: "diet-2" },
  { name: "سوپ کدو تنبل", calories: 140, portion: "1 کاسه", protein: 4, carbs: 20, fat: 5, diet: "diet-7" },
  { name: "کباب سلطانی", calories: 320, portion: "100 گرم", protein: 24, carbs: 5, fat: 22, diet: "diet-6" },
  { name: "سالاد زیتون و نارنگی", calories: 170, portion: "1 کاسه", protein: 5, carbs: 15, fat: 10, diet: "diet-1" },
  { name: "ماهی سفید تنوری", calories: 180, portion: "100 گرم", protein: 22, carbs: 2, fat: 8, diet: "diet-8" }, 
  { name: "خوراک لوبیا چیتی", calories: 170, portion: "100 گرم", protein: 10, carbs: 25, fat: 4, diet: "diet-2" },
  { name: "ساندویچ فلافل", calories: 220, portion: "1 عدد", protein: 8, carbs: 30, fat: 8, diet: "diet-2" },
  { name: "خورش کرفس", calories: 230, portion: "100 گرم", protein: 20, carbs: 10, fat: 14, diet: "diet-4" },
  { name: "سالاد توت‌فرنگی و اسفناج", calories: 150, portion: "1 کاسه", protein: 4, carbs: 15, fat: 8, diet: "diet-1" },
  { name: "ماهی تون تنوری", calories: 190, portion: "100 گرم", protein: 24, carbs: 2, fat: 10, diet: "diet-8" }, 
  { name: "خوراک نخودفرنگی", calories: 160, portion: "100 گرم", protein: 8, carbs: 20, fat: 5, diet: "diet-2" },
  { name: "برگر سبزیجات", calories: 200, portion: "1 عدد", protein: 10, carbs: 30, fat: 6, diet: "diet-2" },
  { name: "کباب جوجه زعفرانی", calories: 210, portion: "100 گرم", protein: 24, carbs: 3, fat: 10, diet: "diet-5" }, 
  { name: "سوپ هویج", calories: 130, portion: "1 کاسه", protein: 4, carbs: 15, fat: 6, diet: "diet-7" },
  { name: "خورش ریواس", calories: 230, portion: "100 گرم", protein: 20, carbs: 10, fat: 14, diet: "diet-4" },
  { name: "سالاد انبه و ریحان", calories: 150, portion: "1 کاسه", protein: 4, carbs: 15, fat: 8, diet: "diet-1" },
  { name: "ماهی کاد تنوری", calories: 180, portion: "100 گرم", protein: 22, carbs: 2, fat: 8, diet: "diet-8" }, 
  { name: "خوراک کدو حلوایی", calories: 160, portion: "100 گرم", protein: 5, carbs: 20, fat: 6, diet: "diet-2" },
  { name: "پیتزا چهارپنیر", calories: 280, portion: "1 برش", protein: 12, carbs: 35, fat: 10, diet: "diet-2" },
  { name: "خورش کنگر", calories: 230, portion: "100 گرم", protein: 20, carbs: 10, fat: 14, diet: "diet-4" },
  { name: "سالاد هلو و پنیر", calories: 170, portion: "1 کاسه", protein: 6, carbs: 15, fat: 10, diet: "diet-1" },
  { name: "ماهی سالمون تنوری", calories: 220, portion: "100 گرم", protein: 24, carbs: 2, fat: 12, diet: "diet-8" }, 
  { name: "خوراک تمپه", calories: 190, portion: "100 گرم", protein: 16, carbs: 10, fat: 10, diet: "diet-2" },
  { name: "ساندویچ گوشت", calories: 270, portion: "1 عدد", protein: 20, carbs: 25, fat: 12, diet: "diet-4" },
  { name: "کباب بختیاری", calories: 290, portion: "100 گرم", protein: 24, carbs: 3, fat: 20, diet: "diet-6" },
  { name: "سوپ اسفناج", calories: 130, portion: "1 کاسه", protein: 4, carbs: 15, fat: 6, diet: "diet-7" },
  { name: "خورش نعنا جعفری", calories: 230, portion: "100 گرم", protein: 20, carbs: 10, fat: 14, diet: "diet-4" },
  { name: "سالاد انار و پنیر", calories: 180, portion: "1 کاسه", protein: 6, carbs: 15, fat: 10, diet: "diet-1" },
  { name: "ماهی تیلاپیا تنوری", calories: 180, portion: "100 گرم", protein: 22, carbs: 2, fat: 8, diet: "diet-8" }, 
  { name: "خوراک لوبیا سبز", calories: 160, portion: "100 گرم", protein: 8, carbs: 20, fat: 5, diet: "diet-2" },
  { name: "برگر بوقلمون", calories: 250, portion: "1 عدد", protein: 20, carbs: 25, fat: 10, diet: "diet-5" }, 
  { name: "کباب دنده", calories: 300, portion: "100 گرم", protein: 24, carbs: 2, fat: 22, diet: "diet-6" },
  { name: "سوپ کدو سبز", calories: 130, portion: "1 کاسه", protein: 4, carbs: 15, fat: 6, diet: "diet-7" },
  { name: "خورش لوبیا", calories: 230, portion: "100 گرم", protein: 20, carbs: 10, fat: 14, diet: "diet-4" },
  { name: "سالاد توت‌فرنگی و ریحان", calories: 150, portion: "1 کاسه", protein: 4, carbs: 15, fat: 8, diet: "diet-1" },
  { name: "ماهی سفید گریل", calories: 180, portion: "100 گرم", protein: 22, carbs: 2, fat: 8, diet: "diet-8" }, 
  { name: "خوراک قارچ", calories: 150, portion: "100 گرم", protein: 5, carbs: 15, fat: 8, diet: "diet-2" },
  { name: "پیتزا گوشت", calories: 300, portion: "1 برش", protein: 14, carbs: 35, fat: 12, diet: "diet-4" },
  { name: "خورش بادمجان", calories: 240, portion: "100 گرم", protein: 18, carbs: 15, fat: 14, diet: "diet-4" },
  { name: "سالاد انبه و اسفناج", calories: 150, portion: "1 کاسه", protein: 4, carbs: 15, fat: 8, diet: "diet-1" },
  { name: "ماهی تون گریل", calories: 190, portion: "100 گرم", protein: 24, carbs: 2, fat: 10, diet: "diet-8" }, 
  { name: "خوراک نخود", calories: 170, portion: "100 گرم", protein: 10, carbs: 25, fat: 4, diet: "diet-2" },
  { name: "ساندویچ سبزیجات", calories: 200, portion: "1 عدد", protein: 8, carbs: 30, fat: 6, diet: "diet-2" },
  { name: "کباب جوجه تند", calories: 210, portion: "100 گرم", protein: 24, carbs: 3, fat: 10, diet: "diet-5" }, 
  { name: "سوپ کلم", calories: 130, portion: "1 کاسه", protein: 4, carbs: 15, fat: 6, diet: "diet-7" },
  { name: "خورش قارچ", calories: 230, portion: "100 گرم", protein: 20, carbs: 10, fat: 14, diet: "diet-4" },
  { name: "سالاد هلو و اسفناج", calories: 150, portion: "1 کاسه", protein: 4, carbs: 15, fat: 8, diet: "diet-1" },
  { name: "ماهی کاد گریل", calories: 180, portion: "100 گرم", protein: 22, carbs: 2, fat: 8, diet: "diet-8" }, 
  { name: "خوراک لوبیا چیتی", calories: 170, portion: "100 گرم", protein: 10, carbs: 25, fat: 4, diet: "diet-2" },
  { name: "برگر گوشت گوساله", calories: 290, portion: "1 عدد", protein: 20, carbs: 25, fat: 15, diet: "diet-4" },
  { name: "کباب کوبیده زعفرانی", calories: 280, portion: "100 گرم", protein: 22, carbs: 5, fat: 20, diet: "diet-6" },
  { name: "سوپ نخودفرنگی", calories: 140, portion: "1 کاسه", protein: 5, carbs: 20, fat: 4, diet: "diet-7" },
  { name: "خورش فسنجان مرغ", calories: 270, portion: "100 گرم", protein: 18, carbs: 15, fat: 18, diet: "diet-4" },
  { name: "سالاد انار و اسفناج", calories: 150, portion: "1 کاسه", protein: 4, carbs: 15, fat: 8, diet: "diet-1" },
  { name: "ماهی سالمون کبابی", calories: 220, portion: "100 گرم", protein: 24, carbs: 2, fat: 12, diet: "diet-8" }, 
  { name: "خوراک قارچ پورتوبلو", calories: 150, portion: "100 گرم", protein: 5, carbs: 15, fat: 8, diet: "diet-2" },
  { name: "ساندویچ مرغ کبابی", calories: 240, portion: "1 عدد", protein: 20, carbs: 25, fat: 8, diet: "diet-5" }, 
  { name: "شیشلیک مرغ", calories: 250, portion: "100 گرم", protein: 24, carbs: 3, fat: 15, diet: "diet-6" },
  { name: "سوپ لوبیا", calories: 140, portion: "1 کاسه", protein: 5, carbs: 20, fat: 4, diet: "diet-7" },
  { name: "خورش قیمه سیب‌زمینی", calories: 260, portion: "100 گرم", protein: 18, carbs: 15, fat: 16, diet: "diet-4" },
  { name: "سالاد توت‌فرنگی و پنیر", calories: 170, portion: "1 کاسه", protein: 6, carbs: 15, fat: 10, diet: "diet-1" },
  { name: "ماهی تیلاپیا کبابی", calories: 180, portion: "100 گرم", protein: 22, carbs: 2, fat: 8, diet: "diet-8" }, 
  { name: "خوراک نخودفرنگی و قارچ", calories: 160, portion: "100 گرم", protein: 8, carbs: 20, fat: 5, diet: "diet-2" },
  { name: "پیتزا مرغ", calories: 280, portion: "1 برش", protein: 14, carbs: 35, fat: 10, diet: "diet-5" }, 
  { name: "خورش کدو", calories: 230, portion: "100 گرم", protein: 20, carbs: 10, fat: 14, diet: "diet-4" },
  { name: "سالاد هلو و ریحان", calories: 150, portion: "1 کاسه", protein: 4, carbs: 15, fat: 8, diet: "diet-1" },
  { name: "ماهی سفید تنوری", calories: 180, portion: "100 گرم", protein: 22, carbs: 2, fat: 8, diet: "diet-8" }, 
  { name: "خوراک لوبیا", calories: 170, portion: "100 گرم", protein: 10, carbs: 25, fat: 4, diet: "diet-2" },
  { name: "برگر سبزیجات کبابی", calories: 200, portion: "1 عدد", protein: 10, carbs: 30, fat: 6, diet: "diet-2" },
  { name: "کباب جوجه لاری", calories: 210, portion: "100 گرم", protein: 24, carbs: 3, fat: 10, diet: "diet-5" }, 
  { name: "سوپ قارچ", calories: 130, portion: "1 کاسه", protein: 4, carbs: 15, fat: 6, diet: "diet-7" },
  { name: "خورش آلو مرغ", calories: 240, portion: "100 گرم", protein: 18, carbs: 15, fat: 14, diet: "diet-4" },
  { name: "سالاد انبه و پنیر", calories: 180, portion: "1 کاسه", protein: 6, carbs: 15, fat: 10, diet: "diet-1" },
  { name: "ماهی تون کبابی", calories: 190, portion: "100 گرم", protein: 24, carbs: 2, fat: 10, diet: "diet-8" }, 
  { name: "خوراک کدو و قارچ", calories: 160, portion: "100 گرم", protein: 5, carbs: 20, fat: 6, diet: "diet-2" },
  { name: "ساندویچ بوقلمون کبابی", calories: 230, portion: "1 عدد", protein: 20, carbs: 25, fat: 8, diet: "diet-5" }, 
  { name: "کباب چنجه زعفرانی", calories: 270, portion: "100 گرم", protein: 24, carbs: 2, fat: 18, diet: "diet-6" },
  { name: "سوپ نخود", calories: 140, portion: "1 کاسه", protein: 5, carbs: 20, fat: 4, diet: "diet-7" },
  { name: "خورش فسنجان گوشت", calories: 270, portion: "100 گرم", protein: 18, carbs: 15, fat: 18, diet: "diet-4" },
  { name: "سالاد توت‌فرنگی و اسفناج", calories: 150, portion: "1 کاسه", protein: 4, carbs: 15, fat: 8, diet: "diet-1" },
  { name: "ماهی سالمون گریل", calories: 220, portion: "100 گرم", protein: 24, carbs: 2, fat: 12, diet: "diet-8" }, 
  { name: "خوراک لوبیا چیتی و قارچ", calories: 170, portion: "100 گرم", protein: 10, carbs: 25, fat: 4, diet: "diet-2" },
  { name: "پیتزا سبزیجات کبابی", calories: 250, portion: "1 برش", protein: 10, carbs: 35, fat: 8, diet: "diet-2" },
  { name: "خورش قیمه بادمجان", calories: 260, portion: "100 گرم", protein: 18, carbs: 15, fat: 16, diet: "diet-4" },
  { name: "سالاد انار و ریحان", calories: 150, portion: "1 کاسه", protein: 4, carbs: 15, fat: 8, diet: "diet-1" },
  { name: "ماهی تیلاپیا گریل", calories: 180, portion: "100 گرم", protein: 22, carbs: 2, fat: 8, diet: "diet-8" }, 
  { name: "خوراک نخود و کدو", calories: 160, portion: "100 گرم", protein: 8, carbs: 20, fat: 5, diet: "diet-2" },
  { name: "برگر مرغ کبابی", calories: 260, portion: "1 عدد", protein: 18, carbs: 25, fat: 10, diet: "diet-5" }, 
  { name: "کباب کوبیده مرغ", calories: 250, portion: "100 گرم", protein: 22, carbs: 5, fat: 15, diet: "diet-6" },
  { name: "سوپ کدو حلوایی", calories: 140, portion: "1 کاسه", protein: 4, carbs: 20, fat: 5, diet: "diet-7" },
  { name: "خورش بامیه مرغ", calories: 230, portion: "100 گرم", protein: 20, carbs: 10, fat: 14, diet: "diet-4" },
  { name: "سالاد هلو و پنیر", calories: 170, portion: "1 کاسه", protein: 6, carbs: 15, fat: 10, diet: "diet-1" },
  { name: "ماهی سفید کبابی", calories: 180, portion: "100 گرم", protein: 22, carbs: 2, fat: 8, diet: "diet-8" }, 
  { name: "خوراک قارچ و نخودفرنگی", calories: 150, portion: "100 گرم", protein: 5, carbs: 15, fat: 8, diet: "diet-2" },
  { name: "ساندویچ فلافل کبابی", calories: 220, portion: "1 عدد", protein: 8, carbs: 30, fat: 8, diet: "diet-2" },
  { name: "شیشلیک گوساله", calories: 300, portion: "100 گرم", protein: 24, carbs: 2, fat: 22, diet: "diet-6" },
  { name: "سوپ لوبیا سبز", calories: 130, portion: "1 کاسه", protein: 4, carbs: 15, fat: 6, diet: "diet-7" },
  { name: "خورش کرفس مرغ", calories: 230, portion: "100 گرم", protein: 20, carbs: 10, fat: 14, diet: "diet-4" },
  { name: "سالاد انبه و ریحان", calories: 150, portion: "1 کاسه", protein: 4, carbs: 15, fat: 8, diet: "diet-1" },
  { name: "ماهی تون تنوری", calories: 190, portion: "100 گرم", protein: 24, carbs: 2, fat: 10, diet: "diet-8" }, 
  { name: "خوراک لوبیا و قارچ", calories: 170, portion: "100 گرم", protein: 10, carbs: 25, fat: 4, diet: "diet-2" },
  { name: "پیتزا گوشت و قارچ", calories: 300, portion: "1 برش", protein: 14, carbs: 35, fat: 12, diet: "diet-4" },
  { name: "خورش آلو گوسفندی", calories: 240, portion: "100 گرم", protein: 18, carbs: 15, fat: 14, diet: "diet-4" },
  { name: "سالاد توت‌فرنگی و پنیر", calories: 170, portion: "1 کاسه", protein: 6, carbs: 15, fat: 10, diet: "diet-1" },
  { name: "ماهی کاد تنوری", calories: 180, portion: "100 گرم", protein: 22, carbs: 2, fat: 8, diet: "diet-8" }, 
  { name: "خوراک نخودفرنگی و کدو", calories: 160, portion: "100 گرم", protein: 8, carbs: 20, fat: 5, diet: "diet-2" },
  { name: "برگر بوقلمون کبابی", calories: 250, portion: "1 عدد", protein: 20, carbs: 25, fat: 10, diet: "diet-5" }, 
  { name: "کباب جوجه تند", calories: 210, portion: "100 گرم", protein: 24, carbs: 3, fat: 10, diet: "diet-5" }, 
  { name: "سوپ قارچ و نخود", calories: 140, portion: "1 کاسه", protein: 5, carbs: 20, fat: 4, diet: "diet-7" },
  { name: "خورش فسنجان بوقلمون", calories: 270, portion: "100 گرم", protein: 18, carbs: 15, fat: 18, diet: "diet-4" },
  { name: "سالاد انار و پنیر", calories: 180, portion: "1 کاسه", protein: 6, carbs: 15, fat: 10, diet: "diet-1" },
  { name: "ماهی سالمون تنوری", calories: 220, portion: "100 گرم", protein: 24, carbs: 2, fat: 12, diet: "diet-8" }, 
  { name: "خوراک لوبیا چیتی و نخود", calories: 170, portion: "100 گرم", protein: 10, carbs: 25, fat: 4, diet: "diet-2" },
  { name: "ساندویچ مرغ و قارچ", calories: 240, portion: "1 عدد", protein: 20, carbs: 25, fat: 8, diet: "diet-5" },
  { name: "کباب کوبیده گوساله", calories: 280, portion: "100 گرم", protein: 22, carbs: 5, fat: 20, diet: "diet-6" },
  { name: "سوپ کدو و نخود", calories: 140, portion: "1 کاسه", protein: 5, carbs: 20, fat: 4, diet: "diet-7" },
  { name: "خورش قیمه مرغ", calories: 260, portion: "100 گرم", protein: 18, carbs: 15, fat: 16, diet: "diet-4" },
  { name: "سالاد هلو و اسفناج", calories: 150, portion: "1 کاسه", protein: 4, carbs: 15, fat: 8, diet: "diet-1" },
  { name: "ماهی تیلاپیا تنوری", calories: 180, portion: "100 گرم", protein: 22, carbs: 2, fat: 8, diet: "diet-8" }, 
  { name: "خوراک قارچ و کدو", calories: 150, portion: "100 گرم", protein: 5, carbs: 15, fat: 8, diet: "diet-2" },
  { name: "پیتزا سبزیجات و پنیر", calories: 250, portion: "1 برش", protein: 10, carbs: 35, fat: 8, diet: "diet-2" },
  { name: "خورش بامیه گوسفندی", calories: 230, portion: "100 گرم", protein: 20, carbs: 10, fat: 14, diet: "diet-4" },
  { name: "سالاد انبه و اسفناج", calories: 150, portion: "1 کاسه", protein: 4, carbs: 15, fat: 8, diet: "diet-1" },
  { name: "ماهی سفید گریل", calories: 180, portion: "100 گرم", protein: 22, carbs: 2, fat: 8, diet: "diet-8" }, 
  { name: "خوراک لوبیا و نخودفرنگی", calories: 170, portion: "100 گرم", protein: 10, carbs: 25, fat: 4, diet: "diet-2" },
  { name: "برگر مرغ و قارچ", calories: 260, portion: "1 عدد", protein: 18, carbs: 25, fat: 10, diet: "diet-5" }, 
  { name: "شیشلیک بوقلمون", calories: 250, portion: "100 گرم", protein: 24, carbs: 3, fat: 15, diet: "diet-6" },
  { name: "سوپ نخود و قارچ", calories: 140, portion: "1 کاسه", protein: 5, carbs: 20, fat: 4, diet: "diet-7" },
  { name: "خورش کرفس گوساله", calories: 230, portion: "100 گرم", protein: 20, carbs: 10, fat: 14, diet: "diet-4" },
  { name: "سالاد توت‌فرنگی و ریحان", calories: 150, portion: "1 کاسه", protein: 4, carbs: 15, fat: 8, diet: "diet-1" },
  { name: "ماهی تون گریل", calories: 190, portion: "100 گرم", protein: 24, carbs: 2, fat: 10, diet: "diet-8" }, 
  { name: "خوراک نخود و قارچ", calories: 160, portion: "100 گرم", protein: 8, carbs: 20, fat: 5, diet: "diet-2" },
  { name: "ساندویچ سبزیجات کبابی", calories: 200, portion: "1 عدد", protein: 8, carbs: 30, fat: 6, diet: "diet-2" },
  { name: "کباب جوجه زعفرانی", calories: 210, portion: "100 گرم", protein: 24, carbs: 3, fat: 10, diet: "diet-5" }, 
  { name: "سوپ لوبیا و کدو", calories: 130, portion: "1 کاسه", protein: 4, carbs: 15, fat: 6, diet: "diet-7" },
  { name: "خورش فسنجان گوساله", calories: 270, portion: "100 گرم", protein: 18, carbs: 15, fat: 18, diet: "diet-4" },
  { name: "سالاد انار و اسفناج", calories: 150, portion: "1 کاسه", protein: 4, carbs: 15, fat: 8, diet: "diet-1" },
  { name: "ماهی سالمون کبابی", calories: 220, portion: "100 گرم", protein: 24, carbs: 2, fat: 12, diet: "diet-8" }, 
  { name: "خوراک لوبیا چیتی و کدو", calories: 170, portion: "100 گرم", protein: 10, carbs: 25, fat: 4, diet: "diet-2" },
  { name: "پیتزا مرغ و قارچ", calories: 280, portion: "1 برش", protein: 14, carbs: 35, fat: 10, diet: "diet-5" }, 
  { name: "خورش قیمه گوسفندی", calories: 260, portion: "100 گرم", protein: 18, carbs: 15, fat: 16, diet: "diet-4" },
  { name: "سالاد هلو و ریحان", calories: 150, portion: "1 کاسه", protein: 4, carbs: 15, fat: 8, diet: "diet-1" },
  { name: "ماهی تیلاپیا کبابی", calories: 180, portion: "100 گرم", protein: 22, carbs: 2, fat: 8, diet: "diet-8" }, 
  { name: "خوراک نخودفرنگی و لوبیا", calories: 160, portion: "100 گرم", protein: 8, carbs: 20, fat: 5, diet: "diet-2" },
  { name: "برگر بوقلمون و قارچ", calories: 250, portion: "1 عدد", protein: 20, carbs: 25, fat: 10, diet: "diet-5" }, 
  { name: "کباب کوبیده زعفرانی", calories: 280, portion: "100 گرم", protein: 22, carbs: 5, fat: 20, diet: "diet-6" },
  { name: "سوپ کدو حلوایی و نخود", calories: 140, portion: "1 کاسه", protein: 5, carbs: 20, fat: 4, diet: "diet-7" },
  { name: "خورش بامیه بوقلمون", calories: 230, portion: "100 گرم", protein: 20, carbs: 10, fat: 14, diet: "diet-4" },
  { name: "سالاد انبه و پنیر", calories: 180, portion: "1 کاسه", protein: 6, carbs: 15, fat: 10, diet: "diet-1" },
  { name: "ماهی سفید تنوری", calories: 180, portion: "100 گرم", protein: 22, carbs: 2, fat: 8, diet: "diet-8" }, 
  { name: "خوراک قارچ و لوبیا", calories: 150, portion: "100 گرم", protein: 5, carbs: 15, fat: 8, diet: "diet-2" },
  { name: "ساندویچ مرغ کبابی", calories: 240, portion: "1 عدد", protein: 20, carbs: 25, fat: 8, diet: "diet-5" }, 
  { name: "شیشلیک گوسفندی زعفرانی", calories: 300, portion: "100 گرم", protein: 24, carbs: 2, fat: 22, diet: "diet-6" },
  { name: "سوپ نخود و لوبیا", calories: 140, portion: "1 کاسه", protein: 5, carbs: 20, fat: 4, diet: "diet-7" },
  { name: "خورش کرفس بوقلمون", calories: 230, portion: "100 گرم", protein: 20, carbs: 10, fat: 14, diet: "diet-4" },
  { name: "سالاد توت‌فرنگی و پنیر", calories: 170, portion: "1 کاسه", protein: 6, carbs: 15, fat: 10, diet: "diet-1" },
  { name: "ماهی تون تنوری", calories: 190, portion: "100 گرم", protein: 24, carbs: 2, fat: 10, diet: "diet-8" }, 
  { name: "خوراک لوبیا چیتی و قارچ", calories: 170, portion: "100 گرم", protein: 10, carbs: 25, fat: 4, diet: "diet-2" },
  { name: "پیتزا سبزیجات و قارچ", calories: 250, portion: "1 برش", protein: 10, carbs: 35, fat: 8, diet: "diet-2" },
  { name: "خورش فسنجان مرغ زعفرانی", calories: 270, portion: "100 گرم", protein: 18, carbs: 15, fat: 18, diet: "diet-4" },
  { name: "سالاد انار و ریحان", calories: 150, portion: "1 کاسه", protein: 4, carbs: 15, fat: 8, diet: "diet-1" },
  { name: "ماهی سالمون گریل", calories: 220, portion: "100 گرم", protein: 24, carbs: 2, fat: 12, diet: "diet-8" }, 
  { name: "خوراک نخود و لوبیا", calories: 160, portion: "100 گرم", protein: 8, carbs: 20, fat: 5, diet: "diet-2" },
  { name: "برگر مرغ زعفرانی", calories: 260, portion: "1 عدد", protein: 18, carbs: 25, fat: 10, diet: "diet-5" }, 
  { name: "کباب جوجه تند زعفرانی", calories: 210, portion: "100 گرم", protein: 24, carbs: 3, fat: 10, diet: "diet-5" }, 
  { name: "سوپ قارچ و لوبیا", calories: 140, portion: "1 کاسه", protein: 5, carbs: 20, fat: 4, diet: "diet-7" },
  { name: "خورش قیمه بوقلمون", calories: 260, portion: "100 گرم", protein: 18, carbs: 15, fat: 16, diet: "diet-4" },
  { name: "سالاد هلو و اسفناج", calories: 150, portion: "1 کاسه", protein: 4, carbs: 15, fat: 8, diet: "diet-1" },
  { name: "ماهی تیلاپیا گریل", calories: 180, portion: "100 گرم", protein: 22, carbs: 2, fat: 8, diet: "diet-8" }, 
  { name: "خوراک لوبیا و کدو", calories: 170, portion: "100 گرم", protein: 10, carbs: 25, fat: 4, diet: "diet-2" },
  { name: "ساندویچ بوقلمون و قارچ", calories: 230, portion: "1 عدد", protein: 20, carbs: 25, fat: 8, diet: "diet-5" }, 
  { name: "کباب کوبیده گوسفندی", calories: 280, portion: "100 گرم", protein: 22, carbs: 5, fat: 20, diet: "diet-6" },
  { name: "سوپ نخودفرنگی و کدو", calories: 140, portion: "1 کاسه", protein: 5, carbs: 20, fat: 4, diet: "diet-7" },
  { name: "خورش بامیه زعفرانی", calories: 230, portion: "100 گرم", protein: 20, carbs: 10, fat: 14, diet: "diet-4" },
  { name: "سالاد انبه و ریحان", calories: 150, portion: "1 کاسه", protein: 4, carbs: 15, fat: 8, diet: "diet-1" },
  { name: "ماهی سفید کبابی", calories: 180, portion: "100 گرم", protein: 22, carbs: 2, fat: 8, diet: "diet-8" }, 
  { name: "خوراک قارچ و نخود", calories: 150, portion: "100 گرم", protein: 5, carbs: 15, fat: 8, diet: "diet-2" },
  { name: "پیتزا مرغ زعفرانی", calories: 280, portion: "1 برش", protein: 14, carbs: 35, fat: 10, diet: "diet-5" }, 
  { name: "خورش کرفس زعفرانی", calories: 230, portion: "100 گرم", protein: 20, carbs: 10, fat: 14, diet: "diet-4" },
  { name: "سالاد توت‌فرنگی و اسفناج", calories: 150, portion: "1 کاسه", protein: 4, carbs: 15, fat: 8, diet: "diet-1" },
  { name: "ماهی تون گریل", calories: 190, portion: "100 گرم", protein: 24, carbs: 2, fat: 10, diet: "diet-8" }, 
  { name: "خوراک لوبیا چیتی و نخودفرنگی", calories: 170, portion: "100 گرم", protein: 10, carbs: 25, fat: 4, diet: "diet-2" },
  { name: "برگر بوقلمون زعفرانی", calories: 250, portion: "1 عدد", protein: 20, carbs: 25, fat: 10, diet: "diet-5" }, 
  { name: "شیشلیک مرغ زعفرانی", calories: 250, portion: "100 گرم", protein: 24, carbs: 3, fat: 15, diet: "diet-6" },
  { name: "سوپ کدو و لوبیا", calories: 140, portion: "1 کاسه", protein: 5, carbs: 20, fat: 4, diet: "diet-7" },
  { name: "خورش فسنجان زعفرانی", calories: 270, portion: "100 گرم", protein: 18, carbs: 15, fat: 18, diet: "diet-4" },
  { name: "سالاد انار و پنیر", calories: 180, portion: "1 کاسه", protein: 6, carbs: 15, fat: 10, diet: "diet-1" },
  { name: "ماهی سالمون تنوری", calories: 220, portion: "100 گرم", protein: 24, carbs: 2, fat: 12, diet: "diet-8" }, 
  { name: "خوراک نخودفرنگی و قارچ", calories: 160, portion: "100 گرم", protein: 8, carbs: 20, fat: 5, diet: "diet-2" },
  { name: "ساندویچ مرغ زعفرانی", calories: 240, portion: "1 عدد", protein: 20, carbs: 25, fat: 8, diet: "diet-5" }, 
  { name: "کباب جوجه زعفرانی تند", calories: 210, portion: "100 گرم", protein: 24, carbs: 3, fat: 10, diet: "diet-5" }, 
  { name: "سوپ لوبیا و نخود", calories: 140, portion: "1 کاسه", protein: 5, carbs: 20, fat: 4, diet: "diet-7" },
  { name: "خورش قیمه زعفرانی", calories: 260, portion: "100 گرم", protein: 18, carbs: 15, fat: 16, diet: "diet-4" },
  { name: "سالاد هلو و پنیر", calories: 170, portion: "1 کاسه", protein: 6, carbs: 15, fat: 10, diet: "diet-1" },
  { name: "ماهی تیلاپیا تنوری", calories: 180, portion: "100 گرم", protein: 22, carbs: 2, fat: 8, diet: "diet-8" }, 
  { name: "خوراک لوبیا و نخود", calories: 170, portion: "100 گرم", protein: 10, carbs: 25, fat: 4, diet: "diet-2" },
  { name: "پیتزا سبزیجات زعفرانی", calories: 250, portion: "1 برش", protein: 10, carbs: 35, fat: 8, diet: "diet-2" },
  { name: "خورش بامیه زعفرانی", calories: 230, portion: "100 گرم", protein: 20, carbs: 10, fat: 14, diet: "diet-4" },
  { name: "سالاد انبه و اسفناج", calories: 150, portion: "1 کاسه", protein: 4, carbs: 15, fat: 8, diet: "diet-1" },
  { name: "ماهی سفید گریل", calories: 180, portion: "100 گرم", protein: 22, carbs: 2, fat: 8, diet: "diet-8" }, 
  { name: "خوراک قارچ و لوبیا چیتی", calories: 150, portion: "100 گرم", protein: 5, carbs: 15, fat: 8, diet: "diet-2" },
  { name: "برگر مرغ و نخود", calories: 260, portion: "1 عدد", protein: 18, carbs: 25, fat: 10, diet: "diet-5" }, 
  { name: "کباب کوبیده زعفرانی تند", calories: 280, portion: "100 گرم", protein: 22, carbs: 5, fat: 20, diet: "diet-6" },
  { name: "سوپ نخودفرنگی و لوبیا", calories: 140, portion: "1 کاسه", protein: 5, carbs: 20, fat: 4, diet: "diet-7" },
  { name: "خورش فسنجان زعفرانی بوقلمون", calories: 270, portion: "100 گرم", protein: 18, carbs: 15, fat: 18, diet: "diet-4" },
  { name: "سالاد توت‌فرنگی و پنیر", calories: 170, portion: "1 کاسه", protein: 6, carbs: 15, fat: 10, diet: "diet-1" },
  { name: "ماهی تون کبابی", calories: 190, portion: "100 گرم", protein: 24, carbs: 2, fat: 10, diet: "diet-8" }, 
  { name: "خوراک لوبیا چیتی و نخود", calories: 170, portion: "100 گرم", protein: 10, carbs: 25, fat: 4, diet: "diet-2" },
  { name: "ساندویچ بوقلمون زعفرانی", calories: 230, portion: "1 عدد", protein: 20, carbs: 25, fat: 8, diet: "diet-5" }, 
  { name: "شیشلیک گوساله زعفرانی", calories: 300, portion: "100 گرم", protein: 24, carbs: 2, fat: 22, diet: "diet-6" },
  { name: "سوپ کدو حلوایی و لوبیا", calories: 140, portion: "1 کاسه", protein: 5, carbs: 20, fat: 4, diet: "diet-7" },
  { name: "خورش کرفس زعفرانی", calories: 230, portion: "100 گرم", protein: 20, carbs: 10, fat: 14, diet: "diet-4" },
  { name: "سالاد انار و اسفناج", calories: 150, portion: "1 کاسه", protein: 4, carbs: 15, fat: 8, diet: "diet-1" },
  { name: "ماهی سالمون کبابی", calories: 220, portion: "100 گرم", protein: 24, carbs: 2, fat: 12, diet: "diet-8" }, 
  { name: "خوراک نخود و قارچ", calories: 160, portion: "100 گرم", protein: 8, carbs: 20, fat: 5, diet: "diet-2" },
  { name: "پیتزا مرغ و نخود", calories: 280, portion: "1 برش", protein: 14, carbs: 35, fat: 10, diet: "diet-5" }, 
  { name: "خورش قیمه زعفرانی بوقلمون", calories: 260, portion: "100 گرم", protein: 18, carbs: 15, fat: 16, diet: "diet-4" },
  { name: "سالاد هلو و ریحان", calories: 150, portion: "1 کاسه", protein: 4, carbs: 15, fat: 8, diet: "diet-1" },
  { name: "ماهی تیلاپیا کبابی", calories: 180, portion: "100 گرم", protein: 22, carbs: 2, fat: 8, diet: "diet-8" }, 
  { name: "خوراک لوبیا چیتی و قارچ", calories: 170, portion: "100 گرم", protein: 10, carbs: 25, fat: 4, diet: "diet-2" },
  { name: "برگر بوقلمون و نخود", calories: 250, portion: "1 عدد", protein: 20, carbs: 25, fat: 10, diet: "diet-5" }, 
  { name: "کباب جوجه زعفرانی", calories: 210, portion: "100 گرم", protein: 24, carbs: 3, fat: 10, diet: "diet-5" }, 
  { name: "سوپ نخود و لوبیا", calories: 140, portion: "1 کاسه", protein: 5, carbs: 20, fat: 4, diet: "diet-7" },
  { name: "خورش فسنجان زعفرانی گوساله", calories: 270, portion: "100 گرم", protein: 18, carbs: 15, fat: 18, diet: "diet-4" },
  { name: "سالاد انار و پنیر", calories: 180, portion: "1 کاسه", protein: 6, carbs: 15, fat: 10, diet: "diet-1" },
  { name: "ماهی سفید تنوری", calories: 180, portion: "100 گرم", protein: 22, carbs: 2, fat: 8, diet: "diet-8" }, 
  { name: "خوراک قارچ و نخودفرنگی", calories: 150, portion: "100 گرم", protein: 5, carbs: 15, fat: 8, diet: "diet-2" },
  { name: "ساندویچ مرغ و نخود", calories: 240, portion: "1 عدد", protein: 20, carbs: 25, fat: 8, diet: "diet-5" }, 
  { name: "شیشلیک گوسفندی زعفرانی", calories: 300, portion: "100 گرم", protein: 24, carbs: 2, fat: 22, diet: "diet-6" },
  { name: "سوپ لوبیا چیتی و نخود", calories: 140, portion: "1 کاسه", protein: 5, carbs: 20, fat: 4, diet: "diet-7" },
  { name: "خورش بامیه زعفرانی گوساله", calories: 230, portion: "100 گرم", protein: 20, carbs: 10, fat: 14, diet: "diet-4" },
  { name: "سالاد توت‌فرنگی و ریحان", calories: 150, portion: "1 کاسه", protein: 4, carbs: 15, fat: 8, diet: "diet-1" },
  { name: "ماهی تون تنوری", calories: 190, portion: "100 گرم", protein: 24, carbs: 2, fat: 10, diet: "diet-8" }, 
  { name: "خوراک نخود و لوبیا چیتی", calories: 160, portion: "100 گرم", protein: 8, carbs: 20, fat: 5, diet: "diet-2" },
  { name: "پیتزا سبزیجات و نخود", calories: 250, portion: "1 برش", protein: 10, carbs: 35, fat: 8, diet: "diet-2" },
  { name: "خورش قیمه زعفرانی گوساله", calories: 260, portion: "100 گرم", protein: 18, carbs: 15, fat: 16, diet: "diet-4" },
  { name: "سالاد انبه و اسفناج", calories: 150, portion: "1 کاسه", protein: 4, carbs: 15, fat: 8, diet: "diet-1" },
  { name: "ماهی سالمون گریل", calories: 220, portion: "100 گرم", protein: 24, carbs: 2, fat: 12, diet: "diet-8" }, 
  { name: "خوراک لوبیا و قارچ", calories: 170, portion: "100 گرم", protein: 10, carbs: 25, fat: 4, diet: "diet-2" },
  { name: "برگر بوقلمون و قارچ", calories: 250, portion: "1 عدد", protein: 20, carbs: 25, fat: 10, diet: "diet-5" }, 
  { name: "کباب کوبیده زعفرانی گوساله", calories: 280, portion: "100 گرم", protein: 22, carbs: 5, fat: 20, diet: "diet-6" },
  { name: "سوپ نخودفرنگی و قارچ", calories: 140, portion: "1 کاسه", protein: 5, carbs: 20, fat: 4, diet: "diet-7" },
  { name: "خورش فسنجان زعفرانی مرغ", calories: 270, portion: "100 گرم", protein: 18, carbs: 15, fat: 18, diet: "diet-4" },
  { name: "سالاد هلو و پنیر", calories: 170, portion: "1 کاسه", protein: 6, carbs: 15, fat: 10, diet: "diet-1" },
  { name: "ماهی تیلاپیا گریل", calories: 180, portion: "100 گرم", protein: 22, carbs: 2, fat: 8, diet: "diet-8" }, 
  { name: "خوراک لوبیا چیتی و لوبیا", calories: 170, portion: "100 گرم", protein: 10, carbs: 25, fat: 4, diet: "diet-2" },
  { name: "ساندویچ مرغ و لوبیا", calories: 240, portion: "1 عدد", protein: 20, carbs: 25, fat: 8, diet: "diet-5" }, 
  { name: "شیشلیک بوقلمون زعفرانی", calories: 250, portion: "100 گرم", protein: 24, carbs: 3, fat: 15, diet: "diet-6" },
  { name: "سوپ کدو حلوایی و نخودفرنگی", calories: 140, portion: "1 کاسه", protein: 5, carbs: 20, fat: 4, diet: "diet-7" },
  { name: "خورش کرفس زعفرانی گوساله", calories: 230, portion: "100 گرم", protein: 20, carbs: 10, fat: 14, diet: "diet-4" },
  { name: "سالاد انار و ریحان", calories: 150, portion: "1 کاسه", protein: 4, carbs: 15, fat: 8, diet: "diet-1" },
  { name: "ماهی سفید کبابی", calories: 180, portion: "100 گرم", protein: 22, carbs: 2, fat: 8, diet: "diet-8" }, 
  { name: "خوراک نخودفرنگی و لوبیا", calories: 160, portion: "100 گرم", protein: 8, carbs: 20, fat: 5, diet: "diet-2" },
  { name: "پیتزا مرغ و لوبیا", calories: 280, portion: "1 برش", protein: 14, carbs: 35, fat: 10, diet: "diet-5" }, 
  { name: "خورش بامیه زعفرانی مرغ", calories: 230, portion: "100 گرم", protein: 20, carbs: 10, fat: 14, diet: "diet-4" },
  { name: "سالاد توت‌فرنگی و اسفناج", calories: 150, portion: "1 کاسه", protein: 4, carbs: 15, fat: 8, diet: "diet-1" },
  { name: "ماهی تون گریل", calories: 190, portion: "100 گرم", protein: 24, carbs: 2, fat: 10, diet: "diet-8" },
  { name: "خوراک لوبیا و نخودفرنگی", calories: 170, portion: "100 گرم", protein: 10, carbs: 25, fat: 4, diet: "diet-2" }
];

const dinnerDatabase = [
  { name: "خورش به و آلو", calories: 230, portion: "100 گرم", protein: 18, carbs: 15, fat: 12, diet: "diet-4" },
  { name: "سالاد بلغور و جعفری", calories: 160, portion: "1 کاسه", protein: 6, carbs: 25, fat: 6, diet: "diet-1" },
  { name: "ماهی ساردین کبابی", calories: 200, portion: "100 گرم", protein: 22, carbs: 1, fat: 10, diet: "diet-8" }, 
  { name: "خوراک لوبیا سفید", calories: 170, portion: "1 کاسه", protein: 10, carbs: 25, fat: 4, diet: "diet-2" },
  { name: "مرغ تنوری زعفرانی", calories: 210, portion: "100 گرم", protein: 24, carbs: 2, fat: 12, diet: "diet-5" }, 
  { name: "شیشلیک دنده گوسفندی", calories: 310, portion: "100 گرم", protein: 24, carbs: 2, fat: 24, diet: "diet-6" },
  { name: "سوپ تره‌فرنگی", calories: 120, portion: "1 کاسه", protein: 3, carbs: 18, fat: 4, diet: "diet-7" },
  { name: "کباب کوبیده مرغ", calories: 250, portion: "100 گرم", protein: 22, carbs: 3, fat: 18, diet: "diet-6" }, 
  { name: "خوراک کدوسبز شکم‌پر", calories: 150, portion: "100 گرم", protein: 5, carbs: 15, fat: 8, diet: "diet-2" }, 
  { name: "جوجه‌کباب لیمویی", calories: 200, portion: "100 گرم", protein: 24, carbs: 2, fat: 10, diet: "diet-5" }, 
  { name: "خورش کنگر و گوشت", calories: 240, portion: "100 گرم", protein: 20, carbs: 10, fat: 14, diet: "diet-4" }, 
  { name: "سالاد رازیانه و پرتقال", calories: 140, portion: "1 کاسه", protein: 4, carbs: 20, fat: 6, diet: "diet-1" }, 
  { name: "سوپ رشته گیاهی", calories: 130, portion: "1 کاسه", protein: 5, carbs: 20, fat: 4, diet: "diet-3" }, 
  { name: "ماهی هامور گریل", calories: 190, portion: "100 گرم", protein: 24, carbs: 1, fat: 9, diet: "diet-8" }, 
  { name: "خوراک عدسی تند", calories: 160, portion: "100 گرم", protein: 10, carbs: 25, fat: 3, diet: "diet-2" },
  { name: "پیتزا قارچ و زیتون", calories: 240, portion: "1 برش", protein: 8, carbs: 35, fat: 8, diet: "diet-2" },
  { name: "چلوکباب نگینی", calories: 330, portion: "100 گرم", protein: 22, carbs: 30, fat: 16, diet: "diet-4" },
  { name: "سوپ جو گیاهی", calories: 120, portion: "1 کاسه", protein: 4, carbs: 20, fat: 3, diet: "diet-7" },
  { name: "برگر گوساله کبابی", calories: 280, portion: "1 عدد", protein: 20, carbs: 25, fat: 14, diet: "diet-4" },
  { name: "سالاد لوبیا قرمز", calories: 150, portion: "1 کاسه", protein: 8, carbs: 20, fat: 5, diet: "diet-2" },
  { name: "ماهی شیر تنوری", calories: 180, portion: "100 گرم", protein: 22, carbs: 1, fat: 8, diet: "diet-8" }, 
  { name: "خوراک گل‌کلم کبابی", calories: 140, portion: "100 گرم", protein: 4, carbs: 15, fat: 7, diet: "diet-2" },
  { name: "ساندویچ تن ماهی", calories: 220, portion: "1 عدد", protein: 18, carbs: 25, fat: 8, diet: "diet-5" }, 
  { name: "خورش زرشک و مرغ", calories: 250, portion: "100 گرم", protein: 20, carbs: 12, fat: 15, diet: "diet-4" },
  { name: "سالاد کلم و هویج", calories: 130, portion: "1 کاسه", protein: 3, carbs: 20, fat: 5, diet: "diet-1" },
  { name: "ماهی قزل‌آلا بخارپز", calories: 190, portion: "100 گرم", protein: 24, carbs: 1, fat: 9, diet: "diet-8" }, 
  { name: "خوراک فلفل دلمه‌ای شکم‌پر", calories: 160, portion: "100 گرم", protein: 6, carbs: 20, fat: 6, diet: "diet-2" },
  { name: "دیزی سنتی", calories: 290, portion: "100 گرم", protein: 20, carbs: 15, fat: 18, diet: "diet-4" },
  { name: "پیتزا مرغ و ذرت", calories: 270, portion: "1 برش", protein: 12, carbs: 35, fat: 10, diet: "diet-5" }, 
  { name: "سوپ سیب‌زمینی شیرین", calories: 140, portion: "1 کاسه", protein: 4, carbs: 22, fat: 4, diet: "diet-7" },
  { name: "خورش گوجه‌سبز", calories: 230, portion: "100 گرم", protein: 18, carbs: 15, fat: 12, diet: "diet-4" },
  { name: "سالاد ذرت و آووکادو", calories: 170, portion: "1 کاسه", protein: 5, carbs: 20, fat: 8, diet: "diet-1" },
  { name: "ماهی حلوا گریل", calories: 180, portion: "100 گرم", protein: 22, carbs: 1, fat: 8, diet: "diet-8" }, 
  { name: "خوراک قارچ کبابی", calories: 150, portion: "100 گرم", protein: 5, carbs: 15, fat: 8, diet: "diet-2" },
  { name: "ساندویچ کالباس گیاهی", calories: 200, portion: "1 عدد", protein: 8, carbs: 30, fat: 6, diet: "diet-2" },
  { name: "خورش ریواس و گوشت", calories: 240, portion: "100 گرم", protein: 20, carbs: 10, fat: 14, diet: "diet-4" }, 
  { name: "سالاد کاهو و گردو", calories: 160, portion: "1 کاسه", protein: 4, carbs: 15, fat: 10, diet: "diet-1" },  
  { name: "ماهی کفال تنوری", calories: 180, portion: "100 گرم", protein: 22, carbs: 1, fat: 8, diet: "diet-8" }, 
  { name: "خوراک بادمجان شکم‌پر", calories: 170, portion: "100 گرم", protein: 6, carbs: 20, fat: 8, diet: "diet-2" },  
  { name: "برگر مرغ زعفرانی", calories: 250, portion: "1 عدد", protein: 18, carbs: 25, fat: 10, diet: "diet-5" }, 
  { name: "کباب ترش", calories: 270, portion: "100 گرم", protein: 24, carbs: 2, fat: 18, diet: "diet-6" }, 
  { name: "سوپ کدو و زنجبیل", calories: 130, portion: "1 کاسه", protein: 4, carbs: 20, fat: 4, diet: "diet-7" },
  { name: "خورش کدو و گوشت", calories: 230, portion: "100 گرم", protein: 20, carbs: 10, fat: 14, diet: "diet-4" },
  { name: "سالاد سیب و پنیر", calories: 170, portion: "1 کاسه", protein: 6, carbs: 15, fat: 10, diet: "diet-1" },
  { name: "ماهی حسون گریل", calories: 180, portion: "100 گرم", protein: 22, carbs: 1, fat: 8, diet: "diet-8" }, 
  { name: "خوراک نخود سبز", calories: 150, portion: "100 گرم", protein: 8, carbs: 20, fat: 5, diet: "diet-2" }, 
  { name: "ساندویچ مرغ تنوری", calories: 240, portion: "1 عدد", protein: 20, carbs: 25, fat: 8, diet: "diet-5" }, 
  { name: "کباب شترمرغ", calories: 260, portion: "100 گرم", protein: 24, carbs: 2, fat: 16, diet: "diet-6" }, 
  { name: "سوپ عدس و اسفناج", calories: 140, portion: "1 کاسه", protein: 8, carbs: 20, fat: 4, diet: "diet-7" },
  { name: "خورش لوبیا سبز", calories: 220, portion: "100 گرم", protein: 18, carbs: 15, fat: 12, diet: "diet-4" },
  { name: "سالاد هندوانه و پنیر", calories: 160, portion: "1 کاسه", protein: 5, carbs: 15, fat: 8, diet: "diet-1" },
  { name: "ماهی قباد کبابی", calories: 190, portion: "100 گرم", protein: 24, carbs: 1, fat: 9, diet: "diet-8" }, 
  { name: "خوراک کلم بروکلی", calories: 140, portion: "100 گرم", protein: 5, carbs: 15, fat: 7, diet: "diet-2" }, 
  { name: "پیتزا اسفناج و پنیر", calories: 250, portion: "1 برش", protein: 10, carbs: 35, fat: 8, diet: "diet-2" }, 
  { name: "خورش انار و مرغ", calories: 240, portion: "100 گرم", protein: 20, carbs: 12, fat: 14, diet: "diet-4" },
  { name: "سالاد چغندر و گردو", calories: 170, portion: "1 کاسه", protein: 5, carbs: 15, fat: 10, diet: "diet-1" },
  { name: "ماهی راشگو تنوری", calories: 180, portion: "100 گرم", protein: 22, carbs: 1, fat: 8, diet: "diet-8" }, 
  { name: "خوراک مارچوبه کبابی", calories: 150, portion: "100 گرم", protein: 5, carbs: 15, fat: 8, diet: "diet-2" },
  { name: "ساندویچ بوقلمون تنوری", calories: 230, portion: "1 عدد", protein: 20, carbs: 25, fat: 8, diet: "diet-5" }, 
  { name: "کباب بلدرچین", calories: 250, portion: "100 گرم", protein: 24, carbs: 2, fat: 15, diet: "diet-6" }, 
  { name: "سوپ کلم قرمز", calories: 130, portion: "1 کاسه", protein: 4, carbs: 20, fat: 4, diet: "diet-7" }, 
  { name: "خورش هویج و گوشت", calories: 230, portion: "100 گرم", protein: 20, carbs: 10, fat: 14, diet: "diet-4" },
  { name: "سالاد گلابی و پنیر", calories: 170, portion: "1 کاسه", protein: 6, carbs: 15, fat: 10, diet: "diet-1" }, 
  { name: "ماهی سنگسر گریل", calories: 180, portion: "100 گرم", protein: 22, carbs: 1, fat: 8, diet: "diet-8" }, 
  { name: "خوراک شلغم بخارپز", calories: 140, portion: "100 گرم", protein: 4, carbs: 20, fat: 5, diet: "diet-2" }, 
  { name: "پیتزا بادمجان و قارچ", calories: 240, portion: "1 برش", protein: 8, carbs: 35, fat: 8, diet: "diet-2" },
  { name: "خورش سیب و گوشت", calories: 240, portion: "100 گرم", protein: 20, carbs: 12, fat: 14, diet: "diet-4" }, 
  { name: "سالاد کرفس و سیب", calories: 150, portion: "1 کاسه", protein: 4, carbs: 20, fat: 6, diet: "diet-1" }, 
  { name: "ماهی شوریده کبابی", calories: 190, portion: "100 گرم", protein: 24, carbs: 1, fat: 9, diet: "diet-8" }, 
  { name: "خوراک چغندر کبابی", calories: 150, portion: "100 گرم", protein: 5, carbs: 20, fat: 6, diet: "diet-2" }, 
  { name: "ساندویچ ماهی گریل", calories: 220, portion: "1 عدد", protein: 18, carbs: 25, fat: 8, diet: "diet-5" },
  { name: "کباب فیله گوساله", calories: 270, portion: "100 گرم", protein: 24, carbs: 2, fat: 18, diet: "diet-6" }, 
  { name: "سوپ هویج و زنجبیل", calories: 130, portion: "1 کاسه", protein: 4, carbs: 20, fat: 4, diet: "diet-7" }, 
  { name: "خورش تره و گوشت", calories: 230, portion: "100 گرم", protein: 20, carbs: 10, fat: 14, diet: "diet-4" },
  { name: "سالاد انگور و پنیر", calories: 170, portion: "1 کاسه", protein: 6, carbs: 15, fat: 10, diet: "diet-1" }, 
  { name: "ماهی سرخو گریل", calories: 180, portion: "100 گرم", protein: 22, carbs: 1, fat: 8, diet: "diet-8" }, 
  { name: "خوراک کدو سبز کبابی", calories: 150, portion: "100 گرم", protein: 5, carbs: 15, fat: 8, diet: "diet-2" },
  { name: "برگر قارچ و عدس", calories: 200, portion: "1 عدد", protein: 10, carbs: 30, fat: 6, diet: "diet-2" }, 
  { name: "کباب جوجه تند", calories: 210, portion: "100 گرم", protein: 24, carbs: 2, fat: 10, diet: "diet-5" }, 
  { name: "سوپ فلفل دلمه‌ای", calories: 130, portion: "1 کاسه", protein: 4, carbs: 20, fat: 4, diet: "diet-7" },
  { name: "خورش گشنیز و گوشت", calories: 230, portion: "100 گرم", protein: 20, carbs: 10, fat: 14, diet: "diet-4" },
  { name: "سالاد زردآلو و پنیر", calories: 170, portion: "1 کاسه", protein: 6, carbs: 15, fat: 10, diet: "diet-1" }, 
  { name: "ماهی کپور تنوری", calories: 180, portion: "100 گرم", protein: 22, carbs: 1, fat: 8, diet: "diet-8" }, 
  { name: "خوراک تره‌فرنگی کبابی", calories: 150, portion: "100 گرم", protein: 5, carbs: 15, fat: 8, diet: "diet-2" }, 
  { name: "ساندویچ مرغ و قارچ", calories: 240, portion: "1 عدد", protein: 20, carbs: 25, fat: 8, diet: "diet-5" }, 
  { name: "کباب کوبیده گوساله", calories: 280, portion: "100 گرم", protein: 22, carbs: 3, fat: 20, diet: "diet-6" }, 
  { name: "سوپ بادمجان", calories: 140, portion: "1 کاسه", protein: 4, carbs: 20, fat: 5, diet: "diet-7" }, 
  { name: "خورش کدو حلوایی و مرغ", calories: 230, portion: "100 گرم", protein: 20, carbs: 12, fat: 14, diet: "diet-4" },
  { name: "سالاد شلیل و پنیر", calories: 170, portion: "1 کاسه", protein: 6, carbs: 15, fat: 10, diet: "diet-1" },
  { name: "ماهی تن گریل", calories: 190, portion: "100 گرم", protein: 24, carbs: 1, fat: 9, diet: "diet-8" },
  { name: "خوراک لوبیا سیاه", calories: 160, portion: "100 گرم", protein: 10, carbs: 25, fat: 4, diet: "diet-2" }, 
  { name: "پیتزا کدو و پنیر", calories: 250, portion: "1 برش", protein: 10, carbs: 35, fat: 8, diet: "diet-2" }, 
  { name: "خورش آلبالو و گوشت", calories: 240, portion: "100 گرم", protein: 20, carbs: 12, fat: 14, diet: "diet-4" },
  { name: "سالاد آلو و پنیر", calories: 170, portion: "1 کاسه", protein: 6, carbs: 15, fat: 10, diet: "diet-1" }, 
  { name: "ماهی سالمون بخارپز", calories: 220, portion: "100 گرم", protein: 24, carbs: 1, fat: 12, diet: "diet-8" }, 
  { name: "خوراک هویج کبابی", calories: 150, portion: "100 گرم", protein: 5, carbs: 20, fat: 6, diet: "diet-2" },
  { name: "ساندویچ بوقلمون و قارچ", calories: 230, portion: "1 عدد", protein: 20, carbs: 25, fat: 8, diet: "diet-5" }, 
  { name: "کباب دنده گوساله", calories: 290, portion: "100 گرم", protein: 24, carbs: 2, fat: 20, diet: "diet-6" }, 
  { name: "سوپ لوبیا قرمز", calories: 140, portion: "1 کاسه", protein: 8, carbs: 20, fat: 4, diet: "diet-7" }, 
  { name: "خورش بامیه و مرغ", calories: 230, portion: "100 گرم", protein: 20, carbs: 10, fat: 14, diet: "diet-4" }, 
  { name: "سالاد خربزه و پنیر", calories: 170, portion: "1 کاسه", protein: 6, carbs: 15, fat: 10, diet: "diet-1" }, 
  { name: "ماهی سفید گریل", calories: 180, portion: "100 گرم", protein: 22, carbs: 1, fat: 8, diet: "diet-8" }, 
  { name: "خوراک کلم‌پیچ کبابی", calories: 150, portion: "100 گرم", protein: 5, carbs: 15, fat: 8, diet: "diet-2" }, 
  { name: "برگر مرغ و قارچ", calories: 250, portion: "1 عدد", protein: 18, carbs: 25, fat: 10, diet: "diet-5" }, 
  { name: "شیشلیک مرغ زعفرانی", calories: 250, portion: "100 گرم", protein: 24, carbs: 2, fat: 15, diet: "diet-6" }, 
  { name: "سوپ نخود سبز", calories: 140, portion: "1 کاسه", protein: 8, carbs: 20, fat: 4, diet: "diet-7" }, 
  { name: "خورش قارچ و گوشت", calories: 230, portion: "100 گرم", protein: 20, carbs: 10, fat: 14, diet: "diet-4" }, 
  { name: "سالاد انبه و کاهو", calories: 150, portion: "1 کاسه", protein: 4, carbs: 20, fat: 6, diet: "diet-1" }, 
  { name: "ماهی تیلاپیا کبابی", calories: 180, portion: "100 گرم", protein: 22, carbs: 1, fat: 8, diet: "diet-8" }, 
  { name: "خوراک لوبیا چیتی", calories: 170, portion: "100 گرم", protein: 10, carbs: 25, fat: 4, diet: "diet-2" }, 
  { name: "پیتزا مرغ و قارچ", calories: 270, portion: "1 برش", protein: 12, carbs: 35, fat: 10, diet: "diet-5" }, 
  { name: "خورش فسنجان بوقلمون", calories: 280, portion: "100 گرم", protein: 20, carbs: 12, fat: 18, diet: "diet-4" }, 
  { name: "سالاد توت‌فرنگی و کاهو", calories: 150, portion: "1 کاسه", protein: 4, carbs: 20, fat: 6, diet: "diet-1" },
  { name: "ماهی کاد گریل", calories: 180, portion: "100 گرم", protein: 22, carbs: 1, fat: 8, diet: "diet-8" }, 
  { name: "خوراک نخود و قارچ", calories: 160, portion: "100 گرم", protein: 8, carbs: 20, fat: 5, diet: "diet-2" },
  { name: "ساندویچ مرغ زعفرانی", calories: 240, portion: "1 عدد", protein: 20, carbs: 25, fat: 8, diet: "diet-5" }, 
  { name: "کباب جوجه زعفرانی", calories: 210, portion: "100 گرم", protein: 24, carbs: 2, fat: 10, diet: "diet-5" }, 
  { name: "سوپ لوبیا سیاه", calories: 140, portion: "1 کاسه", protein: 8, carbs: 20, fat: 4, diet: "diet-7" },
  { name: "خورش قیمه زعفرانی", calories: 260, portion: "100 گرم", protein: 18, carbs: 15, fat: 16, diet: "diet-4" }, 
  { name: "سالاد هلو و کاهو", calories: 150, portion: "1 کاسه", protein: 4, carbs: 20, fat: 6, diet: "diet-1" },
  { name: "ماهی تون گریل", calories: 190, portion: "100 گرم", protein: 24, carbs: 1, fat: 9, diet: "diet-8" }, 
  { name: "خوراک لوبیا قرمز", calories: 170, portion: "100 گرم", protein: 10, carbs: 25, fat: 4, diet: "diet-2" },
  { name: "برگر بوقلمون زعفرانی", calories: 250, portion: "1 عدد", protein: 20, carbs: 25, fat: 10, diet: "diet-5" }, 
  { name: "شیشلیک گوساله زعفرانی", calories: 300, portion: "100 گرم", protein: 24, carbs: 2, fat: 22, diet: "diet-6" }, 
  { name: "سوپ نخود و قارچ", calories: 140, portion: "1 کاسه", protein: 8, carbs: 20, fat: 4, diet: "diet-7" },
  { name: "خورش کرفس زعفرانی", calories: 230, portion: "100 گرم", protein: 20, carbs: 10, fat: 14, diet: "diet-4" }, 
  { name: "سالاد انار و کاهو", calories: 150, portion: "1 کاسه", protein: 4, carbs: 20, fat: 6, diet: "diet-1" }, 
  { name: "ماهی سفید تنوری", calories: 180, portion: "100 گرم", protein: 22, carbs: 1, fat: 8, diet: "diet-8" }, 
  { name: "خوراک لوبیا و قارچ", calories: 160, portion: "100 گرم", protein: 8, carbs: 20, fat: 5, diet: "diet-2" },
  { name: "پیتزا سبزیجات زعفرانی", calories: 250, portion: "1 برش", protein: 10, carbs: 35, fat: 8, diet: "diet-2" }, 
  { name: "خورش بامیه زعفرانی", calories: 230, portion: "100 گرم", protein: 20, carbs: 10, fat: 14, diet: "diet-4" }, 
  { name: "سالاد توت‌فرنگی و اسفناج", calories: 150, portion: "1 کاسه", protein: 4, carbs: 20, fat: 6, diet: "diet-1" },
  { name: "ماهی تیلاپیا تنوری", calories: 180, portion: "100 گرم", protein: 22, carbs: 1, fat: 8, diet: "diet-8" }, 
  { name: "خوراک نخودفرنگی و قارچ", calories: 160, portion: "100 گرم", protein: 8, carbs: 20, fat: 5, diet: "diet-2" },
  { name: "ساندویچ بوقلمون زعفرانی", calories: 230, portion: "1 عدد", protein: 20, carbs: 25, fat: 8, diet: "diet-5" }, 
  { name: "کباب کوبیده زعفرانی", calories: 280, portion: "100 گرم", protein: 22, carbs: 3, fat: 20, diet: "diet-6" }, 
  { name: "سوپ لوبیا و نخود", calories: 140, portion: "1 کاسه", protein: 8, carbs: 20, fat: 4, diet: "diet-7" }, 
  { name: "خورش فسنجان زعفرانی", calories: 280, portion: "100 گرم", protein: 20, carbs: 12, fat: 18, diet: "diet-4" }, 
  { name: "سالاد هلو و اسفناج", calories: 150, portion: "1 کاسه", protein: 4, carbs: 20, fat: 6, diet: "diet-1" }, 
  { name: "ماهی سالمون گریل", calories: 220, portion: "100 گرم", protein: 24, carbs: 1, fat: 12, diet: "diet-8" }, 
  { name: "خوراک لوبیا چیتی و قارچ", calories: 170, portion: "100 گرم", protein: 10, carbs: 25, fat: 4, diet: "diet-2" }, 
  { name: "برگر مرغ زعفرانی", calories: 250, portion: "1 عدد", protein: 18, carbs: 25, fat: 10, diet: "diet-5" }, 
  { name: "شیشلیک مرغ زعفرانی", calories: 250, portion: "100 گرم", protein: 24, carbs: 2, fat: 15, diet: "diet-6" }, 
  { name: "سوپ نخودفرنگی و لوبیا", calories: 140, portion: "1 کاسه", protein: 8, carbs: 20, fat: 4, diet: "diet-7" }, 
  { name: "خورش قیمه زعفرانی", calories: 260, portion: "100 گرم", protein: 18, carbs: 15, fat: 16, diet: "diet-4" },
  { name: "سالاد انار و اسفناج", calories: 150, portion: "1 کاسه", protein: 4, carbs: 20, fat: 6, diet: "diet-1" }, 
  { name: "ماهی سفید گریل", calories: 180, portion: "100 گرم", protein: 22, carbs: 1, fat: 8, diet: "diet-8" }, 
  { name: "خوراک لوبیا و نخودفرنگی", calories: 160, portion: "100 گرم", protein: 8, carbs: 20, fat: 5, diet: "diet-2" }, 
  { name: "پیتزا مرغ زعفرانی", calories: 270, portion: "1 برش", protein: 12, carbs: 35, fat: 10, diet: "diet-5" }, 
  { name: "خورش کرفس زعفرانی", calories: 230, portion: "100 گرم", protein: 20, carbs: 10, fat: 14, diet: "diet-4" },
  { name: "سالاد توت‌فرنگی و کاهو", calories: 150, portion: "1 کاسه", protein: 4, carbs: 20, fat: 6, diet: "diet-1" }, 
  { name: "ماهی تیلاپیا گریل", calories: 180, portion: "100 گرم", protein: 22, carbs: 1, fat: 8, diet: "diet-8" }, 
  { name: "خوراک نخودفرنگی و لوبیا", calories: 160, portion: "100 گرم", protein: 8, carbs: 20, fat: 5, diet: "diet-2" } 
];

function saveUserSettings(gender, height, weight, age, activityLevel, bodyFatLevel, dietType) {
  const userSettings = {
    gender,
    height,
    weight,
    age,
    activityLevel,
    bodyFatLevel,
    dietType,
    lastUpdated: new Date().toISOString()
  };
  localStorage.setItem('fitFoodUserSettings', JSON.stringify(userSettings));
}

function loadUserSettings() {
  const savedSettings = localStorage.getItem('fitFoodUserSettings');
  if (savedSettings) {
    const settings = JSON.parse(savedSettings);
    
    if (settings.gender === 'male') {
      document.getElementById('Male-option').checked = true;
    } else {
      document.getElementById('Female-option').checked = true;
    }
    
    document.getElementById('height-input').value = settings.height;
    document.getElementById('weight-input').value = settings.weight;
    document.getElementById('age-input').value = settings.age;
    
    const dietRadio = document.querySelector(`input[name="diet"][value="${settings.dietType}"]`);
    if (dietRadio) dietRadio.checked = true;
    
    const bodyfatRadio = document.getElementById(`${settings.bodyFatLevel}-option`);
    if (bodyfatRadio) bodyfatRadio.checked = true;
    
    const activityOption = document.querySelector(`.option[data-value="${settings.activityLevel}"]`);
    if (activityOption) {
      const text = activityOption.textContent;
      document.querySelector('.selected-value').textContent = text;
      document.querySelector('.selected-value').dataset.value = settings.activityLevel;
    }
  }
}

function calculateBMR(gender, weight, height, age) {
  if (gender === "male") {
      return 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
  }
  return 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
}

function getDietMultiplier(dietType) {
  const dietFactors = {
    "diet-1": 1.0,  
    "diet-2": 0.98,  
    "diet-3": 0.85,  
    "diet-4": 1.05, 
    "diet-5": 0.8,  
    "diet-6": 0.95,
    "diet-7": 0.9,  
    "diet-8": 1.0,
  };
  return dietFactors[dietType] || 1.0;
}

function getActivityFactor(activityLevel) {
  const factors = {
      option1: 1.2,
      option2: 1.375,
      option3: 1.55,
      option4: 1.725,
      option5: 1.9
  };
  return factors[activityLevel] || 1.2;
}

function calculateBodyFatAdjustment(bodyFatLevel) {
  const adjustments = {
      Low: 1.0,
      Medium: 0.95,
      High: 0.9
  };
  return adjustments[bodyFatLevel] || 1.0;
}

function validateInput(inputElement, errorElementId) {
  const errorElement = document.getElementById(errorElementId);
  const value = parseInt(inputElement.value);
  const min = parseInt(inputElement.min);
  const max = parseInt(inputElement.max);

  if (isNaN(value) || value < min || value > max) {
      errorElement.classList.add('show');
      inputElement.style.borderColor = '#ff4444';
      return false;
  }

  errorElement.classList.remove('show');
  inputElement.style.borderColor = '#4CAF50';
  return true;
}

function toggleActivitySelect() {
  const select = document.querySelector('.activity-select');
  select.classList.toggle('active');
  document.querySelector('.select-options').classList.toggle('show');
}

function toggleBodyfatHelp(event) {
  event.stopPropagation();
  const tooltip = document.getElementById('bodyfatTooltip');
  tooltip.style.display = tooltip.style.display === 'block' ? 'none' : 'block';
}

function checkInputs() {
    let isValid = true;
  
    const isValidHeight = validateInput(document.getElementById('height-input'), 'height-error');
    const isValidWeight = validateInput(document.getElementById('weight-input'), 'weight-error');
    const isValidAge = validateInput(document.getElementById('age-input'), 'age-error');
    
    const genderSelected = document.querySelector('input[name="option"]:checked');
    if (!genderSelected) {
      document.getElementById('gender-error').classList.add('show');
      isValid = false;
    } else {
      document.getElementById('gender-error').classList.remove('show');
    }
  
    const dietSelected = document.querySelector('input[name="diet"]:checked');
    if (!dietSelected) {
      document.getElementById('diet-error').classList.add('show');
      isValid = false;
    } else {
      document.getElementById('diet-error').classList.remove('show');
    }
  
    const bodyfatSelected = document.querySelector('input[name="options"]:checked');
    if (!bodyfatSelected) {
      document.getElementById('bodyfat-error').classList.add('show');
      isValid = false;
    } else {
      document.getElementById('bodyfat-error').classList.remove('show');
    }
  
    const activityValue = document.querySelector('.selected-value').dataset.value;
    if (!activityValue || activityValue === 'undefined') {
      document.getElementById('activity-error').classList.add('show');
      isValid = false;
    } else {
      document.getElementById('activity-error').classList.remove('show');
    }
  
    if (!isValidHeight || !isValidWeight || !isValidAge || !isValid) {
      window.scrollTo({
        top: document.querySelector('.calculator-container').offsetTop - 100,
        behavior: 'smooth'
      });
      return;
    }

  const gender = document.getElementById('Male-option').checked ? 'male' : 'female';
  const height = parseInt(document.getElementById('height-input').value);
  const weight = parseInt(document.getElementById('weight-input').value);
  const age = parseInt(document.getElementById('age-input').value);
  const activityLevel = document.querySelector('.selected-value').dataset.value || 'option1';
  const bodyFatLevel = document.querySelector('input[name="options"]:checked')?.id.replace('-option', '') || 'Medium';
  const dietType = document.querySelector('input[name="diet"]:checked').value;
  
  const BMR = calculateBMR(gender, weight, height, age);
  const activityFactor = getActivityFactor(activityLevel);
  const bodyFatAdjustment = calculateBodyFatAdjustment(bodyFatLevel);
  const dietMultiplier = getDietMultiplier(dietType);
  
  const dailyCalories = Math.round(BMR * activityFactor * bodyFatAdjustment * dietMultiplier);

  const mealPlan = generateMealPlan(dailyCalories, dietType); 
  showResults(dailyCalories, mealPlan, dietType);
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('input[name="option"]').forEach(radio => {
    radio.addEventListener('change', () => {
      document.getElementById('gender-error').classList.remove('show');
      document.querySelector('.gender-input').classList.remove('invalid');
    });
  });

  document.querySelectorAll('input[name="diet"]').forEach(radio => {
    radio.addEventListener('change', () => {
      document.getElementById('diet-error').classList.remove('show');
      document.querySelector('.diet-options').classList.remove('invalid');
    });
  });

  document.querySelectorAll('input[name="options"]').forEach(radio => {
    radio.addEventListener('change', () => {
      document.getElementById('bodyfat-error').classList.remove('show');
      document.querySelector('.bodyfat-options').classList.remove('invalid');
    });
  });

  document.querySelectorAll('.option').forEach(option => {
    option.addEventListener('click', function() {
      document.getElementById('activity-error').classList.remove('show');
      document.querySelector('.activity-select').classList.remove('invalid');
    });
  });
});

function generateMealPlan(calories, dietType) {
  const mealPlan = [];
  const selectedFoodNames = new Set();
  const mealDatabases = {
    breakfast: breakfastDatabase,
    lunch: lunchDatabase,
    dinner: dinnerDatabase
  };

  const mealRatios = {
    breakfast: 0.25,
    lunch: 0.40,
    dinner: 0.35
  };

  const getFilteredMeals = (mealType) => {
    const mealCal = calories * mealRatios[mealType];
    let filteredMeals = mealDatabases[mealType].filter(food => 
      food.diet === dietType &&
      !selectedFoodNames.has(food.name)
    );

    const perfectMatch = filteredMeals.filter(food => 
      food.calories <= mealCal * 0.9 && 
      food.calories >= mealCal * 0.7
    );

    return perfectMatch.length > 0 ? perfectMatch : filteredMeals;
  };

  Object.entries(mealRatios).forEach(([mealType, ratio]) => {
    const mealCal = calories * ratio;
    let filteredMeals = getFilteredMeals(mealType);
    
    if (filteredMeals.length === 0) {
      filteredMeals = mealDatabases[mealType];
    }
    
    const selectedFood = filteredMeals[Math.floor(Math.random() * filteredMeals.length)];
    selectedFoodNames.add(selectedFood.name);
    
    let portions = Math.max(1, Math.round(mealCal / selectedFood.calories));
    let totalCalories = portions * selectedFood.calories;
    
    while (totalCalories > mealCal * 1.1 && portions > 1) {
      portions--;
      totalCalories = portions * selectedFood.calories;
    }
    
    mealPlan.push({
      ...selectedFood,
      mealType,
      quantity: portions,
      totalCalories
    });
  });

  return mealPlan;
}

function saveMealToHistory(mealPlan) {
  const today = new Date().toISOString().split('T')[0];
  let mealHistory = JSON.parse(localStorage.getItem('fitFoodMealHistory')) || [];
  
  mealHistory = mealHistory.filter(meal => meal.date !== today);
  
  mealHistory.push({
    date: today,
    meals: mealPlan.map(meal => ({
      name: meal.name,
      mealType: meal.mealType,
      portion: meal.portion,
      totalCalories: meal.totalCalories,
      protein: meal.protein,
      carbs: meal.carbs,
      fat: meal.fat
    }))
  });
  
  localStorage.setItem('fitFoodMealHistory', JSON.stringify(mealHistory));
}

function hasMealForToday() {
  const today = new Date().toISOString().split('T')[0];
  const mealHistory = JSON.parse(localStorage.getItem('fitFoodMealHistory')) || [];
  return mealHistory.some(meal => meal.date === today);
}

function showResults(dailyCalories, mealPlan, dietType) {
  const totalSuggested = mealPlan.reduce((sum, food) => sum + food.totalCalories, 0);
  const remaining = Math.max(0, dailyCalories - totalSuggested);
  
  const mealNames = {
    breakfast: 'صبحانه',
    lunch: 'ناهار',
    dinner: 'شام'
  };

  let resultHTML = `
    <div class="result-container animate__animated animate__fadeInUp">
      <h3>🍎 برنامه تغذیه روزانه شما</h3>
      <div class="calorie-summary">
        <p>🔄 کالری مورد نیاز روزانه: <strong>${dailyCalories} کیلوکالری</strong></p>
        <p>🍽 کالری پیشنهادی وعده‌ها: ${totalSuggested} کیلوکالری</p>
        ${remaining > 0 ? `<p>🍏 کالری باقیمانده برای میان وعده: ${remaining} کیلوکالری</p>` : ''}
      </div>
      <div class="food-suggestions">
        <h4>🍽 پیشنهادات غذایی:</h4>`;

  mealPlan.forEach((food, index) => {
    const protein = food.protein ? food.protein * food.quantity : 0;
    const carbs = food.carbs ? food.carbs * food.quantity : 0;
    const fat = food.fat ? food.fat * food.quantity : 0;
    
    resultHTML += `
      <div class="food-item">
        <div class="food-number">${mealNames[food.mealType]}</div>
        <div class="food-details">
          <span class="food-name">${food.name}</span>
          <span class="food-portion">${food.quantity} × ${food.portion}</span>
        </div>
        <div class="nutrition-info">
          <span class="food-calories">${food.totalCalories} کیلوکالری</span>
          <span class="food-protein">پروتئین: ${protein}g</span>
          ${carbs ? `<span class="food-carbs">کربوهیدرات: ${carbs}g</span>` : ''}
          <br>
          ${fat ? `<span class="food-fat">چربی: ${fat}g</span>` : ''}
        </div>
      </div>`;
  });

  resultHTML += `
      </div>
      <div class="action-buttons">
        <button class="select-plan-btn" onclick="selectMealPlan()">
          <span class="check-icon">✓</span> انتخاب این برنامه غذایی برای امروز
        </button>
        ${remaining > 0 ? `
        <a href="../The Site Browse Snacks/index.html?diet=${encodeURIComponent(dietType)}&calories=${remaining}" 
           class="snack-link-btn">
           🕵️♀️ جستجوی میان وعده‌ها 
        </a>` : ''}
        <button class="save-btn" onclick="saveMealPlan()">
          📸 دانلود تصویر برنامه
        </button>
        <button class="share-btn" onclick="shareMealPlan()">
          📢 اشتراک گذاری برنامه
        </button>
      </div>
    </div>`;

  const existingResults = document.querySelector('.result-container');
  if (existingResults) existingResults.remove();

  const mainElement = document.querySelector('main');
  mainElement.insertAdjacentHTML('beforeend', resultHTML);
  document.querySelector('.result-container').scrollIntoView({behavior: 'smooth'});
  const gender = document.getElementById('Male-option').checked ? 'male' : 'female';
  const height = parseInt(document.getElementById('height-input').value);
  const weight = parseInt(document.getElementById('weight-input').value);
  const age = parseInt(document.getElementById('age-input').value);
  const activityLevel = document.querySelector('.selected-value').dataset.value || 'option1';
  const bodyFatLevel = document.querySelector('input[name="options"]:checked')?.id.replace('-option', '') || 'Medium';
  
  saveUserSettings(gender, height, weight, age, activityLevel, bodyFatLevel, dietType);

  document.querySelector('.result-container').scrollIntoView({behavior: 'smooth'});

   localStorage.setItem('currentMealPlan', JSON.stringify({
    dailyCalories,
    mealPlan,
    dietType
  }));
}

function selectMealPlan() {
  if (hasMealForToday()) {
    alert('تنها یک برنامه غذایی برای امروز می‌توانید انتخاب کنید. برای افزودن این برنامه غذایی لطفاً از بخش تاریخچه برنامه غذایی نسبت به حذف برنامه غذایی انتخاب شده پیشین امروز، اقدام فرمایید.');
    return;
  }
  
  const currentMealPlan = JSON.parse(localStorage.getItem('currentMealPlan'));
  if (currentMealPlan) {
    saveMealToHistory(currentMealPlan.mealPlan);
    alert('برنامه غذایی با موفقیت برای امروز انتخاب شد!');
  }
}
function shareMealPlan() {
  const mealText = generateShareableText();
  
  if (navigator.share) {
    navigator.share({
      title: 'برنامه غذایی FitFood',
      text: mealText,
      url: window.location.href
    }).catch(err => {
      fallbackShare(mealText);
    });
  } else {
    fallbackShare(mealText);
  }
}

function generateShareableText() {
  const meals = document.querySelectorAll('.food-item');
  let text = '🍏 برنامه غذایی امروز من:\n\n';
  
  meals.forEach(meal => {
    const name = meal.querySelector('.food-name').textContent;
    const portion = meal.querySelector('.food-portion').textContent;
    const calories = meal.querySelector('.food-calories').textContent;
    text += `- ${name} (${portion}) | ${calories}\n`;
  });
  
  text += `\nتوسط FitFood - ${window.location.href}`;
  return text;
}

function fallbackShare(text) {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text)
      .then(() => alert('متن برنامه غذایی کپی شد!'))
      .catch(() => prompt('متن زیر را کپی کنید:', text));
  } else {
    prompt('متن زیر را کپی کنید:', text);
  }
}
function saveMealPlan() {
  const resultContainer = document.querySelector('.result-container');
  
  html2canvas(resultContainer, {
    scale: 2, 
    logging: false,
    useCORS: true,
    allowTaint: true
  }).then(canvas => {
    const link = document.createElement('a');
    link.download = 'FitFood-Program.png';
    link.href = canvas.toDataURL('image/png');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }).catch(err => {
    console.error('خطا در ذخیره تصویر:', err);
    alert('ذخیره تصویر ناموفق بود. لطفاً از روش اسکرین‌شات استفاده کنید.');
  });
}

document.addEventListener('DOMContentLoaded', () => {
  loadUserSettings();
});

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.option').forEach(option => {
      option.addEventListener('click', function() {
          const value = this.dataset.value;
          const text = this.textContent;
          
          document.querySelector('.selected-value').textContent = text;
          document.querySelector('.selected-value').dataset.value = value;
          document.querySelector('.activity-select').classList.remove('active');
          document.querySelector('.select-options').classList.remove('show');
      });
  });

  document.querySelectorAll('.gender-tab').forEach(tab => {
      tab.addEventListener('click', function() {
          document.querySelectorAll('.gender-tab').forEach(t => t.classList.remove('active'));
          this.classList.add('active');
          
          const gender = this.dataset.gender;
          document.querySelectorAll('.fat-level').forEach(level => {
              level.classList.remove('active');
              if(level.classList.contains(gender)) level.classList.add('active');
          });
      });
  });

  document.addEventListener('click', (e) => {
      if (!e.target.closest('.bodyfat-section')) {
          document.getElementById('bodyfatTooltip').style.display = 'none';
      }
  });
});

`../The Site Browse Snacks/index.html?diet=${encodeURIComponent(dietType)}&calories=${remaining}`