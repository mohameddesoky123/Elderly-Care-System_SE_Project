// script.js - جميع الدوال الأساسية للمشروع

// الحصول على المستخدم الحالي
function getUser() {
    return JSON.parse(sessionStorage.getItem('currentUser'));
}

// عرض رسالة منبثقة
function showToast(message, isError = false) {
    const toast = document.createElement('div');
    toast.innerText = message;
    toast.style.cssText = `
        position: fixed; bottom: 20px; left: 20px; right: 20px; max-width: 400px;
        margin: auto; background: ${isError ? '#dc2626' : '#2b6ed7'}; color: white;
        padding: 12px 20px; border-radius: 60px; z-index: 9999; text-align: center;
        font-weight: bold; box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    `;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
}

// تسجيل المعاملات في الـ Ledger
function logTransaction(description, pointsDelta, type, relatedId = null) {
    let ledger = JSON.parse(localStorage.getItem('ledger')) || [];
    ledger.push({
        date: new Date().toISOString(),
        desc: description,
        points: pointsDelta,
        type: type, // earn, spend, hold, release
        userId: getUser()?.phone || 'system',
        relatedId: relatedId
    });
    localStorage.setItem('ledger', JSON.stringify(ledger));
}

// تحديث رصيد المستخدم الحالي (مع تسجيل)
function updateUserPoints(pointsChange, reason) {
    let user = getUser();
    if (!user) return false;
    user.silverPoints = (user.silverPoints || 0) + pointsChange;
    sessionStorage.setItem('currentUser', JSON.stringify(user));
    logTransaction(reason, pointsChange, pointsChange > 0 ? 'earn' : 'spend');
    showToast(`${reason}: ${pointsChange > 0 ? '+' : ''}${pointsChange} نقطة. الرصيد الجديد: ${user.silverPoints}`);
    if (document.getElementById('pointsDisplay')) 
        document.getElementById('pointsDisplay').innerText = user.silverPoints;
    return true;
}

// حجز نقاط في حساب الضمان (Escrow)
function holdPointsInEscrow(amount, visitId) {
    let user = getUser();
    if (!user || user.silverPoints < amount) return false;
    user.silverPoints -= amount;
    sessionStorage.setItem('currentUser', JSON.stringify(user));
    let escrow = JSON.parse(localStorage.getItem('escrow')) || [];
    escrow.push({ visitId, amount, userId: user.phone, status: 'held', date: new Date().toISOString() });
    localStorage.setItem('escrow', JSON.stringify(escrow));
    logTransaction(`حجز نقاط للزيارة ${visitId}`, -amount, 'hold', visitId);
    showToast(`🔒 تم حجز ${amount} نقطة كضمان للزيارة`);
    if (document.getElementById('pointsDisplay')) 
        document.getElementById('pointsDisplay').innerText = user.silverPoints;
    return true;
}

// إطلاق النقاط من الضمان للمتطوع
function releaseEscrow(visitId, volunteerId, amount) {
    let escrow = JSON.parse(localStorage.getItem('escrow')) || [];
    let holdIndex = escrow.findIndex(e => e.visitId == visitId && e.status === 'held');
    if (holdIndex === -1) return false;
    escrow[holdIndex].status = 'released';
    localStorage.setItem('escrow', JSON.stringify(escrow));
    
    // إضافة النقاط للمتطوع (لو هو المستخدم الحالي نحدث sessionStorage)
    let current = getUser();
    if (current && current.phone === volunteerId) {
        current.silverPoints = (current.silverPoints || 0) + amount;
        sessionStorage.setItem('currentUser', JSON.stringify(current));
        if (document.getElementById('pointsDisplay')) 
            document.getElementById('pointsDisplay').innerText = current.silverPoints;
    } else {
        // حفظ رصيد المتطوع بشكل منفصل للمستخدمين الآخرين
        let volunteersPoints = JSON.parse(localStorage.getItem('volunteerPoints')) || {};
        volunteersPoints[volunteerId] = (volunteersPoints[volunteerId] || 0) + amount;
        localStorage.setItem('volunteerPoints', JSON.stringify(volunteersPoints));
    }
    logTransaction(`إطلاق نقاط من الضمان للزيارة ${visitId} للمتطوع ${volunteerId}`, amount, 'release', visitId);
    showToast(`✅ تم إطلاق ${amount} نقطة للمتطوع`);
    return true;
}

// قائمة المتطوعين المتاحين (محاكاة)
function getAvailableVolunteers() {
    return [
        { name: 'محمد علي', phone: '0111000111', rating: 4.8, location: 'الزمالك', distance: 1.2, verified: true },
        { name: 'أحمد خالد', phone: '0112000222', rating: 4.9, location: 'المهندسين', distance: 0.8, verified: true },
        { name: 'نورا سمير', phone: '0113000333', rating: 4.7, location: 'الدقي', distance: 2.1, verified: true },
        { name: 'كريم حسن', phone: '0114000444', rating: 4.6, location: 'مدينة نصر', distance: 5.0, verified: false }
    ];
}

// تسجيل طلب مساعدة جديد
function createHelpRequest(title, description, urgency, seniorId) {
    let requests = JSON.parse(localStorage.getItem('helpRequests')) || [];
    let newRequest = {
        id: Date.now(),
        title, description, urgency,
        date: new Date().toLocaleString(),
        status: 'pending',
        seniorId: seniorId
    };
    requests.push(newRequest);
    localStorage.setItem('helpRequests', JSON.stringify(requests));
    return newRequest;
}

// الحصول على طلبات المساعدة لمسن معين
function getHelpRequestsForSenior(seniorId) {
    let all = JSON.parse(localStorage.getItem('helpRequests')) || [];
    return all.filter(r => r.seniorId === seniorId);
}

// تسجيل تقييم بعد الزيارة
function addRating(visitId, rating, comment) {
    let ratings = JSON.parse(localStorage.getItem('ratings')) || [];
    ratings.push({ visitId, rating, comment, date: new Date().toISOString() });
    localStorage.setItem('ratings', JSON.stringify(ratings));
    showToast(`شكراً لتقييمك! ${rating} نجوم`);
}

// تسجيل SOS
function triggerSOS(user) {
    let sosLog = JSON.parse(localStorage.getItem('sosLog')) || [];
    sosLog.push({ time: new Date().toISOString(), userId: user.phone, role: user.role });
    localStorage.setItem('sosLog', JSON.stringify(sosLog));
    showToast('🚨 تم إرسال SOS إلى المشرف والأقارب والمتطوعين القريبين');
}