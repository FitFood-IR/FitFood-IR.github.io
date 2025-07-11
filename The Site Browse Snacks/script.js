function toggleMenu() {
    document.querySelector(".hamburger").classList.toggle("active");
    document.getElementById("myMenu").classList.toggle("show");
    document.body.classList.toggle("menu-open");
  }
  
  const snacks = [
    {
        name: "بادام درختی",
        calories: 160,
        protein: 6,
        carbs: 6,
        fat: 14,
        diet: ["diet-2", "diet-6", "diet-5"]
    },
    {
        name: "ماست یونانی با توت",
        calories: 120,
        protein: 10,
        carbs: 8,
        fat: 5,
        diet: ["diet-2", "diet-5"]
    },
    {
        name: "تخم مرغ آبپز",
        calories: 78,
        protein: 6,
        carbs: 0.6,
        fat: 5,
        diet: ["diet-2", "diet-6", "diet-5"]
    },
    {
        name: "سینه مرغ گریل شده",
        calories: 165,
        protein: 31,
        carbs: 0,
        fat: 3.6,
        diet: ["diet-6", "diet-5"]
    },
    {
        name: "سیب با کره بادام زمینی",
        calories: 200,
        protein: 4,
        carbs: 18,
        fat: 13,
        diet: ["diet-2", "diet-8"]
    },
    {
        name: "حمص با سبزیجات",
        calories: 180,
        protein: 5,
        carbs: 20,
        fat: 9,
        diet: ["diet-1", "diet-2", "diet-8"]
    },
    {
        name: "ماهی ساردین با نان سبوس دار",
        calories: 220,
        protein: 15,
        carbs: 18,
        fat: 10,
        diet: ["diet-1", "diet-8"]
    },
    {
        name: "سالاد یونانی",
        calories: 150,
        protein: 6,
        carbs: 8,
        fat: 10,
        diet: ["diet-1", "diet-2"]
    },
    {
        name: "زیتون و پنیر فتا",
        calories: 120,
        protein: 4,
        carbs: 3,
        fat: 10,
        diet: ["diet-1", "diet-2", "diet-6"]
    },
    {
        name: "بلغور با سبزیجات",
        calories: 160,
        protein: 4,
        carbs: 25,
        fat: 5,
        diet: ["diet-1", "diet-2"]
    },
    {
        name: "پودینگ چیا",
        calories: 140,
        protein: 5,
        carbs: 12,
        fat: 8,
        diet: ["diet-2", "diet-8"]
    },
    {
        name: "کره بادام روی نان تست سبوس دار",
        calories: 190,
        protein: 7,
        carbs: 18,
        fat: 11,
        diet: ["diet-2", "diet-8"]
    },
    {
        name: "مخلوط آجیل و میوه خشک",
        calories: 200,
        protein: 5,
        carbs: 20,
        fat: 12,
        diet: ["diet-2", "diet-4"]
    },
    {
        name: "اسموتی سبزیجات",
        calories: 120,
        protein: 3,
        carbs: 25,
        fat: 1,
        diet: ["diet-2", "diet-5"]
    },
    {
        name: "پنیر کوتاژ با خیار",
        calories: 110,
        protein: 12,
        carbs: 4,
        fat: 5,
        diet: ["diet-2", "diet-5"]
    },
    {
        name: "آب استخوان",
        calories: 50,
        protein: 10,
        carbs: 1,
        fat: 1,
        diet: ["diet-3", "diet-4", "diet-6"]
    },
    {
        name: "چای سبز با لیمو",
        calories: 5,
        protein: 0,
        carbs: 1,
        fat: 0,
        diet: ["diet-3", "diet-5", "diet-7"]
    },
    {
        name: "قهوه سیاه",
        calories: 2,
        protein: 0,
        carbs: 0,
        fat: 0,
        diet: ["diet-3", "diet-5", "diet-6"]
    },
    {
        name: "آب معدنی با لیمو",
        calories: 10,
        protein: 0,
        carbs: 3,
        fat: 0,
        diet: ["diet-3"]
    },
    {
        name: "سالاد کلم با سرکه",
        calories: 60,
        protein: 1,
        carbs: 8,
        fat: 3,
        diet: ["diet-3", "diet-5"]
    },
    {
        name: "گوشت خشک شده",
        calories: 100,
        protein: 12,
        carbs: 2,
        fat: 5,
        diet: ["diet-4", "diet-6"]
    },
    {
        name: "ماهی سالمون دودی",
        calories: 120,
        protein: 15,
        carbs: 0,
        fat: 7,
        diet: ["diet-4", "diet-6", "diet-8"]
    },
    {
        name: "آووکادو با نمک دریایی",
        calories: 160,
        protein: 2,
        carbs: 8,
        fat: 15,
        diet: ["diet-4", "diet-6", "diet-8"]
    },
    {
        name: "توت با خامه نارگیل",
        calories: 150,
        protein: 2,
        carbs: 10,
        fat: 12,
        diet: ["diet-4", "diet-6"]
    },
    {
        name: "تخم کدو تنبل",
        calories: 130,
        protein: 7,
        carbs: 4,
        fat: 10,
        diet: ["diet-4", "diet-2", "diet-6"]
    },
    {
        name: "کرفس با حمص",
        calories: 100,
        protein: 3,
        carbs: 8,
        fat: 6,
        diet: ["diet-5", "diet-2"]
    },
    {
        name: "پاپ کورن هواپز",
        calories: 90,
        protein: 3,
        carbs: 18,
        fat: 1,
        diet: ["diet-5", "diet-2"]
    },
    {
        name: "سوپ سبزیجات",
        calories: 80,
        protein: 2,
        carbs: 12,
        fat: 2,
        diet: ["diet-5", "diet-2"]
    },
    {
        name: "ماست کم چرب با دارچین",
        calories: 100,
        protein: 10,
        carbs: 8,
        fat: 2,
        diet: ["diet-5", "diet-2"]
    },
    {
        name: "پنیر چدار",
        calories: 110,
        protein: 7,
        carbs: 1,
        fat: 9,
        diet: ["diet-6", "diet-2"]
    },
    {
        name: "سالاد تن ماهی با مایونز",
        calories: 180,
        protein: 15,
        carbs: 1,
        fat: 13,
        diet: ["diet-6"]
    },
    {
        name: "چیپس کلم پیچ با روغن زیتون",
        calories: 130,
        protein: 3,
        carbs: 6,
        fat: 11,
        diet: ["diet-6", "diet-8"]
    },
    {
        name: "کوکتل میگو",
        calories: 140,
        protein: 14,
        carbs: 2,
        fat: 8,
        diet: ["diet-6", "diet-8"]
    },
    {
        name: "کره بادام زمینی با کرفس",
        calories: 160,
        protein: 6,
        carbs: 5,
        fat: 14,
        diet: ["diet-6", "diet-2"]
    },
    {
        name: "بادام هندی",
        calories: 160,
        protein: 5,
        carbs: 9,
        fat: 13,
        diet: ["diet-7", "diet-2"]
    },
    {
        name: "پنیر ریکوتا با دارچین",
        calories: 120,
        protein: 8,
        carbs: 4,
        fat: 8,
        diet: ["diet-7", "diet-2"]
    },
    {
        name: "توت فرنگی با خامه",
        calories: 90,
        protein: 2,
        carbs: 8,
        fat: 6,
        diet: ["diet-7", "diet-2"]
    },
    {
        name: "سینه بوقلمون",
        calories: 130,
        protein: 20,
        carbs: 1,
        fat: 5,
        diet: ["diet-7", "diet-5"]
    },
    {
        name: "اسفناج پخته با سیر",
        calories: 70,
        protein: 3,
        carbs: 5,
        fat: 4,
        diet: ["diet-7", "diet-2"]
    },
    {
        name: "ماهی سالمون پخته",
        calories: 180,
        protein: 20,
        carbs: 0,
        fat: 11,
        diet: ["diet-8", "diet-1"]
    },
    {
        name: "آووکادو با گوجه",
        calories: 150,
        protein: 2,
        carbs: 8,
        fat: 13,
        diet: ["diet-8", "diet-1"]
    },
    {
        name: "گردو",
        calories: 190,
        protein: 4,
        carbs: 4,
        fat: 18,
        diet: ["diet-8", "diet-2"]
    },
    {
        name: "بلغور جو دوسر",
        calories: 150,
        protein: 5,
        carbs: 27,
        fat: 3,
        diet: ["diet-8", "diet-2"]
    },
    {
        name: "لوبیا سیاه با سیر",
        calories: 120,
        protein: 8,
        carbs: 20,
        fat: 1,
        diet: ["diet-8", "diet-2"]
    },
    {
        name: "سالاد تبوله",
        calories: 170,
        protein: 5,
        carbs: 25,
        fat: 7,
        diet: ["diet-1", "diet-2"]
    },
    {
        name: "ماهی ماکرل با لیمو",
        calories: 200,
        protein: 18,
        carbs: 2,
        fat: 14,
        diet: ["diet-1", "diet-8"]
    },
    {
        name: "نان پیتا با زیتون و رزماری",
        calories: 180,
        protein: 6,
        carbs: 22,
        fat: 8,
        diet: ["diet-1"]
    },
    {
        name: "پوره نخود با نان تست",
        calories: 190,
        protein: 7,
        carbs: 20,
        fat: 9,
        diet: ["diet-2", "diet-8"]
    },
    {
        name: "کینوا با انار",
        calories: 160,
        protein: 6,
        carbs: 25,
        fat: 4,
        diet: ["diet-2", "diet-1"]
    },
    {
        name: "دمنوش زنجبیل",
        calories: 10,
        protein: 0,
        carbs: 2,
        fat: 0,
        diet: ["diet-3"]
    },
    {
        name: "آب کرفس",
        calories: 15,
        protein: 1,
        carbs: 3,
        fat: 0,
        diet: ["diet-3", "diet-5"]
    },
    {
        name: "جگر گوساله سرخ شده",
        calories: 220,
        protein: 25,
        carbs: 3,
        fat: 12,
        diet: ["diet-4", "diet-6"]
    },
    {
        name: "استیک گوشت گوزن",
        calories: 190,
        protein: 28,
        carbs: 0,
        fat: 8,
        diet: ["diet-4"]
    },
    {
        name: "خیار با نمک و لیمو",
        calories: 30,
        protein: 1,
        carbs: 6,
        fat: 0,
        diet: ["diet-5"]
    },
    {
        name: "سوپ گوجه فرنگی",
        calories: 90,
        protein: 3,
        carbs: 15,
        fat: 2,
        diet: ["diet-5", "diet-2"]
    },
    {
        name: "پنیر بلو چیز با گردو",
        calories: 210,
        protein: 8,
        carbs: 3,
        fat: 18,
        diet: ["diet-6"]
    },
    {
        name: "چیپس پنیر پارمزان",
        calories: 150,
        protein: 10,
        carbs: 2,
        fat: 12,
        diet: ["diet-6"]
    },
    {
        name: "کلم بروکلی بخارپز",
        calories: 50,
        protein: 3,
        carbs: 10,
        fat: 0,
        diet: ["diet-7", "diet-5"]
    },
    {
        name: "تخم کتان با ماست",
        calories: 120,
        protein: 6,
        carbs: 5,
        fat: 8,
        diet: ["diet-7", "diet-2"]
    },
    {
        name: "ماهی قزل‌آلا کبابی",
        calories: 180,
        protein: 22,
        carbs: 0,
        fat: 10,
        diet: ["diet-8", "diet-1"]
    },
    {
        name: "سالاد اسفناج با انار",
        calories: 140,
        protein: 4,
        carbs: 15,
        fat: 7,
        diet: ["diet-8", "diet-2"]
    },
    {
        name: "فلفل دلمه ای پر شده با پنیر بز",
        calories: 150,
        protein: 6,
        carbs: 8,
        fat: 10,
        diet: ["diet-1", "diet-2"]
    },
    {
        name: "کدو سبز گریل شده",
        calories: 40,
        protein: 2,
        carbs: 7,
        fat: 1,
        diet: ["diet-5", "diet-2"]
    },
    {
        name: "چیپس سیب زمینی شیرین",
        calories: 130,
        protein: 2,
        carbs: 20,
        fat: 5,
        diet: ["diet-4", "diet-8"]
    },
    {
        name: "سوشی گیاهی",
        calories: 160,
        protein: 3,
        carbs: 30,
        fat: 2,
        diet: ["diet-2", "diet-5"]
    },
    {
        name: "پنیر هالومی گریل شده",
        calories: 180,
        protein: 14,
        carbs: 2,
        fat: 13,
        diet: ["diet-1", "diet-6"]
    },
    {
        name: "نودل کدو سبز با پستو",
        calories: 120,
        protein: 4,
        carbs: 8,
        fat: 9,
        diet: ["diet-5", "diet-6"]
    },
    {
        name: "شکلات تلخ 85%",
        calories: 150,
        protein: 2,
        carbs: 10,
        fat: 12,
        diet: ["diet-6", "diet-8"]
    },
    {
        name: "کره بادام درختی",
        calories: 190,
        protein: 7,
        carbs: 6,
        fat: 16,
        diet: ["diet-2", "diet-6"]
    },
    {
        name: "سوپ میسو",
        calories: 80,
        protein: 4,
        carbs: 10,
        fat: 2,
        diet: ["diet-2", "diet-3"]
    },
    {
        name: "تمشک با خامه نارگیل",
        calories: 110,
        protein: 2,
        carbs: 8,
        fat: 8,
        diet: ["diet-4", "diet-6"]
    },
    {
        name: "پوره گل کلم",
        calories: 60,
        protein: 3,
        carbs: 8,
        fat: 2,
        diet: ["diet-5", "diet-7"]
    },
    {
        name: "سالاد کینوا و خیار",
        calories: 140,
        protein: 5,
        carbs: 20,
        fat: 4,
        diet: ["diet-1", "diet-2"]
    },
    {
        name: "چیپس کلم بروکلی",
        calories: 90,
        protein: 4,
        carbs: 10,
        fat: 5,
        diet: ["diet-5", "diet-8"]
    },
    {
        name: "پنیر ریکوتا با عسل",
        calories: 130,
        protein: 8,
        carbs: 8,
        fat: 7,
        diet: ["diet-1", "diet-2"]
    },
    {
        name: "سینه اردک کبابی",
        calories: 210,
        protein: 23,
        carbs: 0,
        fat: 13,
        diet: ["diet-4", "diet-6"]
    },
    {
        name: "پودینگ تخم شربتی",
        calories: 100,
        protein: 4,
        carbs: 6,
        fat: 7,
        diet: ["diet-2", "diet-7"]
    },
    {
        name: "گوشت گاو خشک شده",
        calories: 120,
        protein: 15,
        carbs: 3,
        fat: 5,
        diet: ["diet-4", "diet-6"]
    },
    {
        name: "سالاد واکامه",
        calories: 50,
        protein: 2,
        carbs: 8,
        fat: 1,
        diet: ["diet-3", "diet-8"]
    },
    {
        name: "پنیر فتا با هندوانه",
        calories: 140,
        protein: 6,
        carbs: 12,
        fat: 8,
        diet: ["diet-1", "diet-2"]
    },
    {
        name: "کلم قرمز ترشی",
        calories: 30,
        protein: 1,
        carbs: 6,
        fat: 0,
        diet: ["diet-3", "diet-5"]
    },
    {
        name: "ماهی آنچوی با نان تست",
        calories: 180,
        protein: 12,
        carbs: 15,
        fat: 8,
        diet: ["diet-1", "diet-8"]
    },
    {
        name: "پوره سیب زمینی شیرین",
        calories: 120,
        protein: 2,
        carbs: 25,
        fat: 2,
        diet: ["diet-4", "diet-8"]
    },
    {
        name: "سالاد چغندر با گردو",
        calories: 150,
        protein: 4,
        carbs: 12,
        fat: 10,
        diet: ["diet-2", "diet-8"]
    },
    {
        name: "ژامبون بوقلمون",
        calories: 100,
        protein: 12,
        carbs: 2,
        fat: 5,
        diet: ["diet-5", "diet-7"]
    },
    {
        name: "کره کنجد",
        calories: 180,
        protein: 6,
        carbs: 8,
        fat: 15,
        diet: ["diet-2", "diet-8"]
    },
    {
        name: "سوپ قارچ",
        calories: 90,
        protein: 4,
        carbs: 10,
        fat: 4,
        diet: ["diet-2", "diet-5"]
    },
    {
        name: "پنیر کممبر با عسل",
        calories: 170,
        protein: 7,
        carbs: 10,
        fat: 12,
        diet: ["diet-1", "diet-2"]
    },
    {
        name: "تخم بلدرچین آبپز",
        calories: 60,
        protein: 5,
        carbs: 0,
        fat: 4,
        diet: ["diet-4", "diet-6"]
    },
    {
        name: "کلم بروکسل کبابی",
        calories: 70,
        protein: 3,
        carbs: 10,
        fat: 3,
        diet: ["diet-5", "diet-8"]
    },
    {
        name: "پنیر گودا با انگور",
        calories: 160,
        protein: 8,
        carbs: 12,
        fat: 9,
        diet: ["diet-1", "diet-2"]
    },
    {
        name: "ساردین با نان چاودار",
        calories: 200,
        protein: 14,
        carbs: 15,
        fat: 10,
        diet: ["diet-1", "diet-8"]
    },
    {
        name: "پودینگ آووکادو",
        calories: 180,
        protein: 3,
        carbs: 8,
        fat: 16,
        diet: ["diet-6", "diet-8"]
    },
    {
        name: "سالاد جوانه گندم",
        calories: 120,
        protein: 6,
        carbs: 20,
        fat: 2,
        diet: ["diet-2", "diet-5"]
    },
    {
        name: "چیپس چغندر",
        calories: 100,
        protein: 2,
        carbs: 15,
        fat: 4,
        diet: ["diet-4", "diet-8"]
    },
    {
        name: "پنیر بری با نان بیگل",
        calories: 190,
        protein: 9,
        carbs: 18,
        fat: 9,
        diet: ["diet-1", "diet-2"]
    },
    {
        name: "کدو حلوایی پخته",
        calories: 80,
        protein: 2,
        carbs: 15,
        fat: 1,
        diet: ["diet-4", "diet-5"]
    },
    {
        name: "ماهی تن با کرفس",
        calories: 130,
        protein: 16,
        carbs: 2,
        fat: 6,
        diet: ["diet-5", "diet-6"]
    },
    {
        name: "پنیر کوتاژ با آناناس",
        calories: 120,
        protein: 10,
        carbs: 10,
        fat: 4,
        diet: ["diet-2", "diet-5"]
    },
    {
        name: "سالاد کلم و هویج",
        calories: 60,
        protein: 2,
        carbs: 10,
        fat: 1,
        diet: ["diet-3", "diet-5"]
    },
    {
        name: "چیپس کلم قمری",
        calories: 70,
        protein: 3,
        carbs: 10,
        fat: 3,
        diet: ["diet-5", "diet-8"]
    },
    {
        name: "پنیر چدار با سیب",
        calories: 170,
        protein: 7,
        carbs: 15,
        fat: 9,
        diet: ["diet-2", "diet-4"]
    },
    {
        name: "سوپ کدوحلوایی",
        calories: 110,
        protein: 3,
        carbs: 18,
        fat: 4,
        diet: ["diet-2", "diet-5"]
    },
    {
        name: "تخمه آفتابگردان",
        calories: 160,
        protein: 6,
        carbs: 6,
        fat: 14,
        diet: ["diet-2", "diet-6"]
    },
    {
        name: "سالاد لوبیا قرمز",
        calories: 140,
        protein: 8,
        carbs: 20,
        fat: 3,
        diet: ["diet-2", "diet-8"]
    },
    {
        name: "پنیر موزارلا با گوجه گیلاسی",
        calories: 150,
        protein: 8,
        carbs: 6,
        fat: 10,
        diet: ["diet-1", "diet-2"]
    },
    {
        name: "چیپس کلم پیچ",
        calories: 80,
        protein: 4,
        carbs: 10,
        fat: 4,
        diet: ["diet-5", "diet-8"]
    },
    {
        name: "سوپ عدس",
        calories: 130,
        protein: 9,
        carbs: 20,
        fat: 2,
        diet: ["diet-2", "diet-8"]
    },
    {
        name: "پنیر کاممبر با مربای انجیر",
        calories: 180,
        protein: 7,
        carbs: 12,
        fat: 12,
        diet: ["diet-1", "diet-2"]
    },
    {
        name: "سالاد نخود فرنگی",
        calories: 110,
        protein: 6,
        carbs: 15,
        fat: 3,
        diet: ["diet-2", "diet-5"]
    },
    {
        name: "چیپس پارمزان",
        calories: 120,
        protein: 10,
        carbs: 2,
        fat: 8,
        diet: ["diet-6", "diet-4"]
    },
    {
        name: "پوره شلغم",
        calories: 70,
        protein: 2,
        carbs: 12,
        fat: 2,
        diet: ["diet-5", "diet-7"]
    },
    {
        name: "سالاد کیوی و اسفناج",
        calories: 90,
        protein: 3,
        carbs: 15,
        fat: 2,
        diet: ["diet-2", "diet-8"]
    },
    {
        name: "پنیر گورگونزولا با گلابی",
        calories: 190,
        protein: 8,
        carbs: 15,
        fat: 12,
        diet: ["diet-1", "diet-2"]
    },
    {
        name: "سوپ گشنیز و لیمو",
        calories: 70,
        protein: 3,
        carbs: 10,
        fat: 2,
        diet: ["diet-3", "diet-5"]
    },
    {
        name: "چیپس سیب زمینی بنفش",
        calories: 110,
        protein: 2,
        carbs: 18,
        fat: 4,
        diet: ["diet-4", "diet-8"]
    },
    {
        name: "سالاد مرکبات با نعنا",
        calories: 100,
        protein: 2,
        carbs: 20,
        fat: 1,
        diet: ["diet-3", "diet-5"]
    },
    {
        name: "پنیر پرورده با گردو",
        calories: 170,
        protein: 9,
        carbs: 5,
        fat: 13,
        diet: ["diet-1", "diet-2"]
    },
    {
        name: "سوپ هویج و زنجبیل",
        calories: 90,
        protein: 2,
        carbs: 15,
        fat: 3,
        diet: ["diet-2", "diet-5"]
    },
    {
        name: "چیپس بادمجان",
        calories: 90,
        protein: 3,
        carbs: 12,
        fat: 4,
        diet: ["diet-4", "diet-8"]
    },
    {
        name: "سالاد انار و اسفناج",
        calories: 120,
        protein: 4,
        carbs: 18,
        fat: 4,
        diet: ["diet-2", "diet-8"]
    },
    {
        name: "پنیر چدار با خردل",
        calories: 160,
        protein: 9,
        carbs: 3,
        fat: 12,
        diet: ["diet-6", "diet-4"]
    },
    {
        name: "سوپ قارچ و جو",
        calories: 120,
        protein: 5,
        carbs: 18,
        fat: 3,
        diet: ["diet-2", "diet-8"]
    },
    {
        name: "چیپس کدوی سبز",
        calories: 80,
        protein: 3,
        carbs: 10,
        fat: 4,
        diet: ["diet-5", "diet-8"]
    },
    {
        name: "سالاد عدس و لیمو",
        calories: 150,
        protein: 10,
        carbs: 20,
        fat: 3,
        diet: ["diet-2", "diet-8"]
    },
    {
        name: "پنیر فتا با خیار و نعناع",
        calories: 140,
        protein: 7,
        carbs: 6,
        fat: 10,
        diet: ["diet-1", "diet-2"]
    },
    {
        name: "سوپ کرفس و سیب",
        calories: 80,
        protein: 2,
        carbs: 15,
        fat: 2,
        diet: ["diet-3", "diet-5"]
    },
    {
        name: "چیپس تربچه",
        calories: 60,
        protein: 2,
        carbs: 8,
        fat: 2,
        diet: ["diet-5", "diet-7"]
    },
    {
        name: "سالاد کلم بروکلی و کشمش",
        calories: 110,
        protein: 5,
        carbs: 15,
        fat: 4,
        diet: ["diet-2", "diet-5"]
    },
    {
        name: "پنیر بری با عسل و گردو",
        calories: 200,
        protein: 8,
        carbs: 12,
        fat: 14,
        diet: ["diet-1", "diet-2"]
    },
    {
        name: "سوپ گوجه و ریحان",
        calories: 100,
        protein: 3,
        carbs: 15,
        fat: 3,
        diet: ["diet-2", "diet-5"]
    },
    {
        name: "چیپس هویج",
        calories: 70,
        protein: 2,
        carbs: 10,
        fat: 3,
        diet: ["diet-5", "diet-7"]
    },
    {
        name: "سالاد نخود و لیمو",
        calories: 160,
        protein: 8,
        carbs: 20,
        fat: 5,
        diet: ["diet-2", "diet-8"]
    },
    {
        name: "پنیر کممبر با مربای توت",
        calories: 180,
        protein: 7,
        carbs: 10,
        fat: 12,
        diet: ["diet-1", "diet-2"]
    },
    {
        name: "سوپ کدو سبز",
        calories: 90,
        protein: 4,
        carbs: 12,
        fat: 3,
        diet: ["diet-2", "diet-5"]
    },
    {
        name: "چیپس کرفس",
        calories: 50,
        protein: 1,
        carbs: 8,
        fat: 1,
        diet: ["diet-3", "diet-5"]
    },
    {
        name: "سالاد لبو با ماست",
        calories: 130,
        protein: 5,
        carbs: 18,
        fat: 4,
        diet: ["diet-2", "diet-8"]
    },
    {
        name: "پنیر گودا با خرمالو",
        calories: 170,
        protein: 7,
        carbs: 15,
        fat: 9,
        diet: ["diet-1", "diet-2"]
    },
    {
        name: "سوپ پیاز فرانسوی",
        calories: 110,
        protein: 4,
        carbs: 15,
        fat: 4,
        diet: ["diet-1", "diet-2"]
    },
    {
        name: "چیپس کدو تنبل",
        calories: 100,
        protein: 3,
        carbs: 12,
        fat: 5,
        diet: ["diet-4", "diet-8"]
    },
    {
        name: "سالاد جوانه ماش",
        calories: 120,
        protein: 8,
        carbs: 15,
        fat: 3,
        diet: ["diet-2", "diet-5"]
    },
    {
        name: "پنیر چدار با گلابی",
        calories: 160,
        protein: 7,
        carbs: 15,
        fat: 8,
        diet: ["diet-2", "diet-4"]
    },
    {
        name: "سوپ اسفناج و لیمو",
        calories: 80,
        protein: 4,
        carbs: 10,
        fat: 3,
        diet: ["diet-2", "diet-5"]
    },
  ]

  function showResults() {
      const dietSelect = document.querySelector('.diet-select');
      const calorieInput = document.querySelector('.calorie-input');
      const errorElement = document.getElementById('errorMessage');
      
      errorElement.classList.remove('show');
      errorElement.textContent = '';
  
      const diet = dietSelect.value;
      const userCalories = parseInt(calorieInput.value) || 0;
  
      let errorMessage = '';
      
      if (!diet) {
          errorMessage = 'لطفا نوع رژیم غذایی را انتخاب کنید';
      } else if (userCalories <= 0) {
          errorMessage = 'لطفا میزان کالری را وارد کنید';
      }
  
      if (errorMessage) {
          errorElement.textContent = errorMessage;
          errorElement.classList.add('show');
          return;
      }
  
      const dietSnacks = snacks.filter(snack => snack.diet.includes(diet));
      const resultsContainer = document.getElementById('results');
  
      let bestCombination = null;
      let minDifference = Infinity;
      const MAX_ATTEMPTS = 500;
  
      for (let i = 0; i < MAX_ATTEMPTS; i++) {
          const randomSnacks = [...dietSnacks]
              .sort(() => Math.random() - 0.5)
              .slice(0, 3);
          
          const totalCal = randomSnacks.reduce((sum, s) => sum + s.calories, 0);
          const diff = Math.abs(totalCal - userCalories);
  
          if (diff <= 100 && diff < minDifference) {
              bestCombination = randomSnacks;
              minDifference = diff;
              if (diff <= 50) break;
          }
      }
  
      if (bestCombination) {
          const totalCal = bestCombination.reduce((sum, s) => sum + s.calories, 0);
          resultsContainer.innerHTML = `
              <ul>
                  ${bestCombination.map(snack => `
                      <li>
                          <div class="snack-header">
                              <span class="snack-name">${snack.name}</span>
                          </div>
                          <div class="snack-nutrition">
                          <div class="nutrition-item">
                                  <i class="fas fa-fire stat-icon"></i>
                                  کالری: ${snack.calories}kca
                              </div>
                              <div class="nutrition-item">
                                  <i class="fas fa-dumbbell"></i>
                                  پروتئین: ${snack.protein}g
                              </div>
                              <div class="nutrition-item">
                                  <i class="fas fa-bread-slice"></i>
                                  کربوهیدرات: ${snack.carbs}g
                              </div>
                              <div class="nutrition-item">
                                  <i class="fas fa-oil-can"></i>
                                  چربی: ${snack.fat}g
                              </div>
                          </div>
                      </li>
                  `).join('')}
              </ul>
              <div class="total-calories">
                  مجموع کالری: ${totalCal} کیلوکالری
              </div>
          `;
      } else {
          resultsContainer.innerHTML = `
              <div class="no-result">
                  <i class="fas fa-info-circle"></i>
                  متاسفانه میان وعده ای یافت نشد!
                  <br>
                  <small>میزان کالری را تغییر دهید یا رژیم دیگری انتخاب کنید</small>
              </div>
          `;
      }
  
      document.querySelector('.main-content').style.filter = 'blur(5px)';
      document.querySelector('.bottom').style.filter = 'blur(5px)';
      document.querySelector('.search-footer').style.filter = 'blur(5px)';
      document.querySelector('.bottom').style.filter = 'blur(5px)';
      document.querySelector('.menu').style.filter = 'blur(5px)';
      document.getElementById('resultBox').style.display = 'block';

  }
  
  function closeResults() {
      document.querySelector('.main-content').style.filter = 'none';
      document.querySelector('.bottom').style.filter = 'none';
      document.querySelector('.search-footer').style.filter = 'none';
      document.querySelector('.menu').style.filter = 'none';
      document.getElementById('resultBox').style.display = 'none';
  }
  
  document.querySelector('.diet-select').addEventListener('change', function() {
      document.getElementById('errorMessage').classList.remove('show');
  });
  
  document.querySelector('.calorie-input').addEventListener('input', function(e) {
      document.getElementById('errorMessage').classList.remove('show');
      if (e.target.value < 0) e.target.value = 0;
  });
  
  document.addEventListener('DOMContentLoaded', function() {
      const urlParams = new URLSearchParams(window.location.search);
      const dietParam = urlParams.get('diet');
      const calorieParam = urlParams.get('calories');
  
      if (dietParam) document.querySelector('.diet-select').value = dietParam;
      if (calorieParam) document.querySelector('.calorie-input').value = calorieParam;
      if (dietParam && calorieParam) setTimeout(showResults, 300);
  });