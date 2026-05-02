// lang.js - نظام الترجمة الثنائية للمشروع بالكامل

let currentLang = localStorage.getItem('appLang') || 'ar';

// جميع النصوص المستخدمة في صفحات المشروع
const translations = {
    ar: {
        seniorCareNetwork: "شبكة رعاية المسنين والجيران",
        subTitle: "منصة مجتمعية آمنة لربط كبار السن بمتطوعين موثوقين",
        silverPoints: "SilverPoints",
        logout: "تسجيل الخروج",
        home: "الرئيسية",
        back: "رجوع",
        noData: "لا توجد بيانات",
        pending: "معلق",
        completed: "مكتمل",
        matched: "تم المطابقة",
        cancel: "إلغاء",
        volunteer: "المتطوع",
        location: "الموقع",
        pointsHeld: "نقاط محجوزة",
        senior: "المسن",
        urgency: "الأولوية",
        welcomeSenior: "🧓 مرحباً",
        welcomeVolunteer: "🤝 مرحباً متطوع",
        welcomeProxy: "👨‍👩‍👦 مرحباً وكيل العائلة",
        adminDashboard: "🛡️ لوحة تحكم المشرف",
        totalRequests: "إجمالي الطلبات",
        pendingRequests: "قيد الانتظار",
        completedRequests: "مكتملة",
        sosCount: "طوارئ مسجلة",
        newRequest: "📝 طلب مساعدة جديد",
        scheduleVisit: "📅 جدولة زيارة",
        sosButton: "🚨 SOS طوارئ",
        ledger: "📜 سجل النقاط",
        myRequests: "📌 طلبات المساعدة الخاصة بي",
        completedVisits: "⭐ الزيارات المكتملة (للتقييم)",
        rateVisit: "تقييم",
        rated: "تم التقييم",
        requestCancelled: "تم إلغاء الطلب",
        thankYouRating: "شكراً لتقييمك",
        verification: "✅ التحقق من الهوية",
        assignedVisits: "📋 الزيارات المخصصة لي",
        noVisits: "لا توجد زيارات",
        geofenceCheckin: "تسجيل الوصول (Geofence)",
        completeVisitRelease: "إنهاء الزيارة وصرف النقاط",
        geofencePrompt: "أدخل رمز التحقق الجغرافي (1234)",
        geofenceSuccess: "تم تأكيد الوصول",
        invalidCode: "رمز غير صحيح",
        completeConfirm: "هل أكملت جميع المهام؟ سيتم إطلاق النقاط.",
        pointsReleased: "تم إطلاق النقاط",
        requestForRelative: "📝 طلب مساعدة باسم أحد المسنين",
        scheduleForRelative: "📅 جدولة زيارة لأحد أفراد العائلة",
        verificationRequests: "📄 طلبات التحقق من المتطوعين",
        sosLog: "🚨 سجل الطوارئ",
        manageUsers: "👥 إدارة المستخدمين",
        manageUsersMsg: "محاكاة: إدارة المستخدمين - يمكن حظر أو تعديل",
        noRequests: "لا توجد طلبات",
        approve: "قبول",
        reject: "رفض",
        approved: "تم قبول المتطوع",
        rejected: "تم رفض الطلب",
        noSOS: "لا توجد استغاثات",
        createRequest: "📝 طلب مساعدة جديد",
        serviceType: "نوع المساعدة",
        description: "وصف تفصيلي",
        submit: "إرسال الطلب",
        shopping: "تسوق",
        medicalVisit: "مرافقة طبية",
        cleaning: "تنظيف المنزل",
        techHelp: "تعليم التكنولوجيا",
        low: "عادي",
        medium: "مرتفع",
        high: "طوارئ",
        scheduleVisitTitle: "📅 جدولة زيارة جديدة",
        visitCost: "💰 تكلفة الزيارة: 50 نقطة فضية (تخصم من رصيدك وتوضع في حساب الضمان حتى إتمام الزيارة)",
        chooseVolunteer: "🗺️ اختر المتطوع المناسب (حسب الموقع والتقييم)",
        datetime: "📆 التاريخ والوقت",
        locationAddress: "📍 العنوان أو المنطقة",
        confirmBooking: "تأكيد الحجز وخصم النقاط",
        sosTitle: "🚨 حالة طوارئ",
        sosDesc: "اضغط الزر أدناه لإرسال تنبيه عاجل إلى: وكيل العائلة، المشرف، والمتطوعين القريبين",
        sendSos: "🆘 إرسال SOS",
        verificationTitle: "📎 التحقق كمتطوع",
        uploadDocs: "يرجى رفع المستندات التالية ليتم مراجعتها من قبل المشرف:",
        idImage: "صورة البطاقة الشخصية",
        certificate: "شهادة حسن سير وسلوك (اختياري)",
        sendVerification: "إرسال طلب التحقق",
        ledgerTitle: "📜 سجل المعاملات المالية (SilverPoints Ledger)"
    },
    en: {
        seniorCareNetwork: "Senior Care & Neighborly Network",
        subTitle: "A secure community platform connecting seniors with trusted volunteers",
        silverPoints: "SilverPoints",
        logout: "Logout",
        home: "Home",
        back: "Back",
        noData: "No data",
        pending: "Pending",
        completed: "Completed",
        matched: "Matched",
        cancel: "Cancel",
        volunteer: "Volunteer",
        location: "Location",
        pointsHeld: "Held points",
        senior: "Senior",
        urgency: "Urgency",
        welcomeSenior: "🧓 Welcome",
        welcomeVolunteer: "🤝 Welcome Volunteer",
        welcomeProxy: "👨‍👩‍👦 Welcome Family Proxy",
        adminDashboard: "🛡️ Admin Dashboard",
        totalRequests: "Total Requests",
        pendingRequests: "Pending",
        completedRequests: "Completed",
        sosCount: "SOS Alerts",
        newRequest: "📝 New Help Request",
        scheduleVisit: "📅 Schedule Visit",
        sosButton: "🚨 SOS Emergency",
        ledger: "📜 Points Ledger",
        myRequests: "📌 My Help Requests",
        completedVisits: "⭐ Completed Visits (Rate)",
        rateVisit: "Rate",
        rated: "Rated",
        requestCancelled: "Request cancelled",
        thankYouRating: "Thank you for rating",
        verification: "✅ Identity Verification",
        assignedVisits: "📋 My Assigned Visits",
        noVisits: "No visits",
        geofenceCheckin: "Check-in (Geofence)",
        completeVisitRelease: "Complete Visit & Release Points",
        geofencePrompt: "Enter geofence code (1234)",
        geofenceSuccess: "Check-in confirmed",
        invalidCode: "Invalid code",
        completeConfirm: "Complete all tasks? Points will be released.",
        pointsReleased: "Points released",
        requestForRelative: "📝 Request help for a senior",
        scheduleForRelative: "📅 Schedule visit for a family member",
        verificationRequests: "📄 Volunteer Verification Requests",
        sosLog: "🚨 SOS Log",
        manageUsers: "👥 Manage Users",
        manageUsersMsg: "Simulation: User management (ban/edit)",
        noRequests: "No requests",
        approve: "Approve",
        reject: "Reject",
        approved: "Volunteer approved",
        rejected: "Request rejected",
        noSOS: "No SOS alerts",
        createRequest: "📝 New Help Request",
        serviceType: "Service Type",
        description: "Description",
        submit: "Submit Request",
        shopping: "Shopping",
        medicalVisit: "Medical escort",
        cleaning: "Home cleaning",
        techHelp: "Tech assistance",
        low: "Low",
        medium: "Medium",
        high: "High",
        scheduleVisitTitle: "📅 Schedule New Visit",
        visitCost: "💰 Visit cost: 50 SilverPoints (deducted from your balance and held in escrow until visit completion)",
        chooseVolunteer: "🗺️ Select a suitable volunteer (based on location & rating)",
        datetime: "📆 Date & Time",
        locationAddress: "📍 Address or area",
        confirmBooking: "Confirm Booking & Deduct Points",
        sosTitle: "🚨 Emergency",
        sosDesc: "Press the button below to send an alert to: Family Proxy, Admin, and nearby volunteers",
        sendSos: "🆘 Send SOS",
        verificationTitle: "📎 Volunteer Verification",
        uploadDocs: "Please upload the following documents for review by the admin:",
        idImage: "ID card image",
        certificate: "Good conduct certificate (optional)",
        sendVerification: "Submit Verification Request",
        ledgerTitle: "📜 SilverPoints Ledger"
    }
};

// دالة الترجمة
function t(key) {
    return translations[currentLang]?.[key] || key;
}

// تحديث واجهة المستخدم باللغة الجديدة
function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('appLang', lang);
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    document.body.style.fontFamily = lang === 'ar' ? "'Cairo', 'Segoe UI', sans-serif" : "'Segoe UI', 'Cairo', sans-serif";
    
    // تحديث كل العناصر التي تحمل data-key
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        if (translations[lang] && translations[lang][key]) {
            el.innerText = translations[lang][key];
        }
    });
    
    // تحديث عناصر select options
    document.querySelectorAll('[data-key-option]').forEach(opt => {
        const key = opt.getAttribute('data-key-option');
        if (translations[lang] && translations[lang][key]) {
            opt.innerText = translations[lang][key];
        }
    });
    
    // تحديث أي محتوى ديناميكي إذا كانت الصفحة تدعم ذلك
    if (window.refreshUITranslation) window.refreshUITranslation();
}

// عند تحميل الصفحة، طبق اللغة المحفوظة وأضف أحداث الأزرار
document.addEventListener('DOMContentLoaded', () => {
    setLanguage(currentLang);
    
    const arBtn = document.getElementById('langArBtn');
    const enBtn = document.getElementById('langEnBtn');
    if (arBtn && enBtn) {
        arBtn.onclick = () => setLanguage('ar');
        enBtn.onclick = () => setLanguage('en');
        
        function updateActiveBtn() {
            if (currentLang === 'ar') { arBtn.classList.add('active'); enBtn.classList.remove('active'); }
            else { enBtn.classList.add('active'); arBtn.classList.remove('active'); }
        }
        updateActiveBtn();
        
        // override setLanguage لتحديث الأزرار
        const originalSetLang = setLanguage;
        window.setLanguage = (lang) => {
            originalSetLang(lang);
            updateActiveBtn();
        };
        setLanguage(currentLang);
    }
});