// mock-locations.js

const mockLocations = [
    {
        id: "senior",
        name: "منزل/ موقع المسن الحالي",
        lat: 30.0444, // الإحداثيات الوهمية (خط العرض)
        lng: 31.2357, // الإحداثيات الوهمية (خط الطول)
        role: "senior",
        icon: "🧓",
        popup: "هذا هو موقع المسن الذي اخترته"
    },
    {
        id: "volunteer",
        name: "موقع المتطوع محمد",
        lat: 30.0520,
        lng: 31.2430,
        role: "volunteer",
        icon: "🤝",
        popup: "هذا موقع محمد، متطوع بالقرب منك"
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = mockLocations;
}