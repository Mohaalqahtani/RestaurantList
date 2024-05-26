document.addEventListener("DOMContentLoaded", function() {
    var placeSelector = document.getElementById('placeSelector');
    var displayData = document.getElementById('displayData');
    var nextBtn = document.getElementById('nextBtn');
    var backBtn = document.getElementById('backBtn');
    
    var poorBtn = document.getElementById('poor');
    var midBtn = document.getElementById('mid');
    var highBtn = document.getElementById('High');
    var clearBtn = document.querySelector('.clear-btn');
    
    var currentIndex = 0;
    var currentData = [];

    var places = {
        "مطاعم": {
            poor: [
                { name: "الرومانسية", img: "img/romansiah.png", bestChoice: "حبة دجاج مظبي رز بشاور 50 ريال " , locationLink : 'https://www.google.com/maps/search/%D8%A7%D9%84%D8%B1%D9%88%D9%85%D8%A7%D9%86%D8%B3%D9%8A%D8%A9%E2%80%AD/@26.3003588,50.2823941,10.25z?entry=ttu' , menuList: 'https://new.alromansiah.com/' },
                { name: "شواية الخليج", img: "img/shiagluf.jpg", bestChoice: "حبة شواية مع رز أحمر 38 ريال" , locationLink: 'https://www.google.com/maps/search/%D8%B4%D9%88%D8%A7%D9%8A%D8%A9+%D8%A7%D9%84%D8%AE%D9%84%D9%8A%D8%AC%E2%80%AD/@25.250051,52.6127707,6.24z?entry=ttu' , menuList: 'https://shwaiatalkhalij.my.taker.io/'},
                { name: "مطعم رخيص 3", img: "cheap3.jpg", bestChoice: "أفضل طبق: طبق 3" }
            ],
            mid: [
                { name: "زاد السلطان", img: "img/zidsltan.jpg", bestChoice: "الوليمة لحم 275 ريال" , locationLink : 'https://www.google.com/maps/search/%D8%B2%D8%A7%D8%AF+%D8%A7%D9%84%D8%B3%D9%84%D8%B7%D8%A7%D9%86%E2%80%AD%E2%80%AD%E2%80%AD/@25.8930279,49.734073,8z/data=!3m1!4b1?entry=ttu' , menuList : 'https://d1fdloi71mui9q.cloudfront.net/ptDBrOTj6SHOrIabJ1Pw_Menu%204-23.pdf'},
                { name: "مطعم معتدل 2", img: "mid2.jpg", bestChoice: "أفضل طبق: طبق 2" },
                { name: "مطعم معتدل 3", img: "mid3.jpg", bestChoice: "أفضل طبق: طبق 3" }
            ],
            high: [
                { name: "مطعم غالي 1", img: "expensive1.jpg", bestChoice: "أفضل طبق: طبق 1" },
                { name: "مطعم غالي 2", img: "expensive2.jpg", bestChoice: "أفضل طبق: طبق 2" },
                { name: "مطعم غالي 3", img: "expensive3.jpg", bestChoice: "أفضل طبق: طبق 3" }
            ]
        },
        "مقاهي": {
            poor: [
                { name: "مقهى رخيص 1", img: "cheapcafe1.jpg", bestChoice: "أفضل قهوة: قهوة 1" },
                { name: "مقهى رخيص 2", img: "cheapcafe2.jpg", bestChoice: "أفضل قهوة: قهوة 2" },
                { name: "مقهى رخيص 3", img: "cheapcafe3.jpg", bestChoice: "أفضل قهوة: قهوة 3" }
            ],
            mid: [
                { name: "مقهى معتدل 1", img: "midcafe1.jpg", bestChoice: "أفضل قهوة: قهوة 1" },
                { name: "مقهى معتدل 2", img: "midcafe2.jpg", bestChoice: "أفضل قهوة: قهوة 2" },
                { name: "مقهى معتدل 3", img: "midcafe3.jpg", bestChoice: "أفضل قهوة: قهوة 3" }
            ],
            high: [
                { name: "مقهى غالي 1", img: "expensivecafe1.jpg", bestChoice: "أفضل قهوة: قهوة 1" },
                { name: "مقهى غالي 2", img: "expensivecafe2.jpg", bestChoice: "أفضل قهوة: قهوة 2" },
                { name: "مقهى غالي 3", img: "expensivecafe3.jpg", bestChoice: "أفضل قهوة: قهوة 3" }
            ]
        }
    };

    function displayCurrentPlace() {
        if (currentData.length === 0) {
            displayData.innerHTML = "<p>يرجى اختيار نوع المكان والفئة السعرية</p>";
            return;
        }

        var place = currentData[currentIndex];
        displayData.innerHTML = `
            <h2>${place.name}</h2>
            <img src="${place.img}" alt="${place.name}">
            <p><strong>أفضل طبق :</strong>${place.bestChoice}</p>
            <p><strong>المواقع :</strong> <a href="${place.locationLink}" target="_blank">أضغط هنا</a></p>
            <p><strong>قائمة الطعام : :</strong><a href="${place.menuList}" target="_blank">أضغط هنا</a></p>
        `;
    }

    function updatePlaces(priceCategory) {
        var selectedType = placeSelector.value;
        if (selectedType === "") {
            displayData.innerHTML = "<p>يرجى اختيار نوع المكان</p>";
            return;
        }

        currentData = places[selectedType][priceCategory];
        currentIndex = 0;
        displayCurrentPlace();
    }

    poorBtn.addEventListener('click', function() {
        updatePlaces('poor');
    });

    midBtn.addEventListener('click', function() {
        updatePlaces('mid');
    });

    highBtn.addEventListener('click', function() {
        updatePlaces('high');
    });

    nextBtn.addEventListener('click', function() {
        if (currentData.length > 0) {
            currentIndex = (currentIndex + 1) % currentData.length;
            displayCurrentPlace();
        }
    });
    backBtn.addEventListener('click', function() {
        if (currentData.length > 0) {
            currentIndex = (currentIndex - 1 + currentData.length) % currentData.length;
            displayCurrentPlace();
        }
    });

    clearBtn.addEventListener('click', function() {
        displayData.innerHTML = "";
        currentData = [];
        currentIndex = 0;
    });

    // Set active class on buttons
    var filterButtons = document.querySelectorAll('.filters span');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });
});
