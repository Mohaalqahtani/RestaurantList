document.addEventListener("DOMContentLoaded", function() {
    var placeSelector = document.getElementById('placeSelector');
    var displayData = document.getElementById('displayData');
    var nextBtn = document.getElementById('nextBtn');
    var backBtn = document.getElementById('backBtn');
    
    var poorBtn = document.getElementById('poor');
    var midBtn = document.getElementById('mid');
    var highBtn = document.getElementById('high');
    var clearBtn = document.querySelector('.clear-btn');
    
    var currentIndex = 0;
    var currentData = [];

    var places = {
        "مطاعم": {
            poor: [
                { name: "الرومانسية", img: "img/romansiah.png", bestChoice: "حبة دجاج مظبي رز بشاور" , locationLink : 'https://www.google.com/maps/search/%D8%A7%D9%84%D8%B1%D9%88%D9%85%D8%A7%D9%86%D8%B3%D9%8A%D8%A9%E2%80%AD/@26.3003588,50.2823941,10.25z?entry=ttu' , menuList: 'https://new.alromansiah.com/' },
                { name: "شواية الخليج", img: "img/shiagluf.jpg", bestChoice: "حبة شواية مع رز أحمر" , locationLink: 'https://www.google.com/maps/search/%D8%B4%D9%88%D8%A7%D9%8A%D8%A9+%D8%A7%D9%84%D8%AE%D9%84%D9%8A%D8%AC%E2%80%AD/@25.250051,52.6127707,6.24z?entry=ttu' , menuList: 'https://shwaiatalkhalij.my.taker.io/'},
                { name: "دكان التسعينات", img: "img/doucan.jpg", bestChoice: "🤷‍♂️" , locationLink: 'https://maps.app.goo.gl/78t4ptYk6L3yQftZ8', menuList: 'https://dekkan-90s.yallaqrcodes.com/'},
                { name: "قوت داينر", img: "img/goatdiner.jpg", bestChoice: "🤷‍♂️" , locationLink: 'https://maps.app.goo.gl/ywWKfZYaSsvRY79f6' , menuList: 'files/goat-diner.pdf'},
                { name: "كوشن برقر", img: "img/caution.jpg", bestChoice: "🤷‍♂️" , locationLink : 'https://maps.app.goo.gl/M4TEvwrpFvWp4JaQ9' , menuList: 'files/caitonmenu.jpg'},
                { name: "اوزي برجر", img: "img/ozi.jpg", bestChoice: "🤷‍♂️" , locationLink : 'https://maps.app.goo.gl/L89zXpjXoREfnzFE9' , menuList: 'files/ozimenu.jpg'},
                { name: "فروج ابو العبد", img: "img/frog.png", bestChoice: "🤷‍♂️" , locationLink : 'https://www.google.com/maps/search/%D9%81%D8%B1%D9%88%D8%AC+%D8%A7%D8%A8%D9%88+%D8%A7%D9%84%D8%B9%D8%A8%D8%AF%E2%80%AD/@26.1061225,50.6600112,9.25z?entry=ttu' , menuList: 'files/frogmenu.pdf'},
                { name: "مطعم عزمي", img: "img/3zmy.jpg", bestChoice: "🤷‍♂️" , locationLink : 'https://maps.app.goo.gl/53A94pdC9vQoohQn6' , menuList: 'files/3zmymenu.jpg'},
                { name: "مطعم قصدير", img: "img/qsder.jpg", bestChoice: "🤷‍♂️" , locationLink : 'https://maps.app.goo.gl/K6oYFZoWcaE5FgwE7' , menuList: 'files/qsder.pdf'}
            ],
            mid: [
                { name: "زاد السلطان", img: "img/zidsltan.jpg", bestChoice: "الوليمة لحم" , locationLink : 'https://www.google.com/maps/search/%D8%B2%D8%A7%D8%AF+%D8%A7%D9%84%D8%B3%D9%84%D8%B7%D8%A7%D9%86%E2%80%AD%E2%80%AD%E2%80%AD/@25.8930279,49.734073,8z/data=!3m1!4b1?entry=ttu' , menuList : 'https://d1fdloi71mui9q.cloudfront.net/ptDBrOTj6SHOrIabJ1Pw_Menu%204-23.pdf'},
                { name: "كيو ايت", img: "img/qeat.jpg", bestChoice: "🤷‍♂️" , locationLink : 'https://maps.app.goo.gl/kPR9sPYnaitqjg4v8' , menuList: 'files/qeat.jpg'},
                { name: "مطعم LMK الخبر", img: "img/lmk.jpg", bestChoice: "🤷‍♂️" , locationLink : 'https://maps.app.goo.gl/XyEMzqSdzHEANfN98' , menuList: 'https://let-me-know.yallaqrcodes.com/'}
            ],
            high: [
                { name: "بيك اب برجر", img: "img/PickupBurger.jpeg", bestChoice: "دبل بيف أر , بيك اب فرايز أر" , locationLink: 'https://maps.app.goo.gl/hDffZtKQSyqsuSYS7' , menuList: 'files/pickupburger.pdf'},
                { name: "اريا", img: "img/arya.jpeg", bestChoice: "🤷‍♂️" , locationLink : 'https://maps.app.goo.gl/2VJLDThPgT4XDb2d7', menuList : 'https://arya.menuspages.com/' },
                { name: "شريمب نيشن", img: "img/shrimp.png", bestChoice: "🤷‍♂️" , locationLink : 'https://maps.app.goo.gl/FZM9TRGWmeYSGYHc7' , menuList: 'https://shrimpnation.com/menu/'},
                { name: "برجر بوتيك", img: "img/Boutique.png", bestChoice: "🤷‍♂️" , locationLink : 'https://maps.app.goo.gl/vnTFXhwXPs7xhKeX6' , menuList: 'https://www.gastronomicaksa.com/jeddahmenueng'},
                { name: "ريجل برجر", img: "img/rejal.jpeg", bestChoice: "نيو يورك برجر , بلاك شرمبس , بطاطس لافا" , locationLink : 'https://www.google.com/maps/search/%D8%B1%D9%8A%D8%AC%D9%84+%D8%A8%D8%B1%D8%AC%D8%B1%E2%80%AD/@25.4780929,51.0310763,7z/data=!3m1!4b1?hl=ar-SA&entry=ttu' , menuList: 'https://emxfk9.yallaqrcodes.com/'},
                { name: "مطعم مسمار", img: "img/mismar.jpg", bestChoice: "🤷‍♂️" , locationLink : 'https://maps.app.goo.gl/Q39BqhocZg1H8ERS7' , menuList: 'https://www.instagram.com/mismar.restaurant/'},
                { name: "مطعم كانز", img: "img/canes.svg", bestChoice: "🤷‍♂️" , locationLink : 'https://www.google.com/maps/search/%D8%B1%D9%8A%D8%B2%D9%8A%D9%86%D8%AC+%D9%83%D9%8A%D9%86%D8%B2+%D8%A7%D9%84%D8%B3%D8%B9%D9%88%D8%AF%D9%8A%D8%A9%E2%80%AD/@27.3668344,47.3368925,4z/data=!3m1!4b1?entry=ttu' , menuList: 'https://www.raisingcanesme.com/ar_sa/menu'},
                { name: "تندر لوين الخبر", img: "img/tenderloin.jpg", bestChoice: "🤷‍♂️" , locationLink : 'https://maps.app.goo.gl/KJiyMtiNtbLdsTVF7' , menuList: 'https://www.easymenu.site/restaurants/Tenderloin_and_Co'},
                { name: "سولد اوت", img: "img/soldout.jpg", bestChoice: "🤷‍♂️" , locationLink : 'https://maps.app.goo.gl/wDhfufYJXu3tWTxTA' , menuList: 'files/soldout.pdf'},
                { name: "برقر سايت", img: "img/burgersite.jpg", bestChoice: "🤷‍♂️" , locationLink : 'https://www.google.com/maps/search/%D8%A8%D8%B1%D8%AC%D8%B1+%D8%B3%D8%A7%D9%8A%D8%AA%E2%80%AD/@26.3076672,50.3559489,12z?entry=ttu' , menuList: 'https://burgersite.my.taker.io/'},
                { name: "ذا كاتس", img: "img/thecuts.jpg", bestChoice: "🤷‍♂️" , locationLink : 'https://maps.app.goo.gl/jh3TuVPfwz7sPKw58' , menuList: 'https://qr.finedinemenu.com/the-cuts-urban-kitchen-1/menu/58ebc04ce7c2460004b89726'},
                { name: "مطعم فطور oriya", img: "img/oriya.jpg", bestChoice: "🤷‍♂️" , locationLink : 'https://maps.app.goo.gl/2CALPgNBk9ZBBJQX7' , menuList: 'https://oriya.sa/'},
                { name: "مطعم اوف وايت ( ارمين)", img: "img/offwhite.svg", bestChoice: "🤷‍♂️" , locationLink : 'https://maps.app.goo.gl/gGJtapG7Tsd5QuMR6' , menuList: 'http://khobar.offwhite-sa.com/en/menu'}
            ]
        },
        "مقاهي": {
            poor: [
                { name: "كيف التوأم الخبر الشمالية", img: "img/keeftwin.jpg", bestChoice: "🤷‍♂️" , locationLink: 'https://maps.app.goo.gl/KF51P58XgkDVq2V3A' , menuList: 'files/keeftwin.pdf'}
            ],
            mid: [
                { name: "كوفي بنما", img: "img/panma.jpg", bestChoice: "🤷‍♂️" , locationLink: 'https://maps.app.goo.gl/wv3Zrm2bYFxven718' , menuList: 'files/panamamenu.pdf'},
                { name: "شاي صليل", img: "img/slayl.jpg", bestChoice: "🤷‍♂️" , locationLink: 'https://maps.app.goo.gl/hagdnAS485qXdWaL6' , menuList: 'files/sallelmenu.pdf'},
                { name: "قهوه عمق", img: "img/umq.jpg", bestChoice: "🤷‍♂️" , locationLink: 'https://maps.app.goo.gl/4XLdBU3RUgnSza7j7' , menuList: 'files/umqmenu.jpg'},
                { name: "ATYPICAL", img: "img/ATYPICAL.jpg", bestChoice: "🤷‍♂️" , locationLink: 'https://maps.app.goo.gl/9GPGNniiX5nBcyRZ7' , menuList: 'files/ATYPICALmenu.jpg'},
                { name: "كوفي اوتن", img: "img/otten.jpg", bestChoice: "🤷‍♂️" , locationLink: 'https://maps.app.goo.gl/kiLpdoQZenp1HLjx7' , menuList: 'files/ottenmenu.pdf'},
                { name: "محمصه ومقهى ويبرو", img: "img/webrew.png", bestChoice: "🤷‍♂️" , locationLink: 'https://maps.app.goo.gl/ZwwBaqceWseyEceP8' , menuList: 'files/webrewroastersMenu.pdf'},
                { name: "مقهى Graph", img: "img/graph.jpg", bestChoice: "كركديه , V60 , فرنش توست سولتيد كرميل" , locationLink: 'https://maps.app.goo.gl/usJpgNnhJ2MmnFBA9' , menuList: 'files/graphmenu.pdf'},
                { name: "دوكه", img: "img/doka.jpg", bestChoice: "V60 , فرنش توست" , locationLink: 'https://maps.app.goo.gl/THTSrrnS8jXV58Jq5' , menuList: 'https://sites.google.com/view/doka5/'},
                { name: "نمق", img: "img/nmq.png", bestChoice: "كيكة نمق , V60" , locationLink: 'https://maps.app.goo.gl/aKvtKt7EzWZDfTHM6' , menuList: 'https://www.namqcafe.com/menu'},
                { name: "قشة", img: "img/qasha.jpg", bestChoice: "كركديه , V60 , كيكة التمر" , locationLink: 'https://maps.app.goo.gl/2CMhFm5VcF2jwKbDA' , menuList: 'files/qashamenu.jpg'},
                { name: "أودن", img: "img/ouden.jpg", bestChoice: "🤷‍♂️" , locationLink: 'https://maps.app.goo.gl/TirvDEM2UQtgjRMg6' , menuList: 'https://ouden.yallaqrcodes.com/'}
            ],
            high: [
                { name: "كوفي مو", img: "img/mo.jpg", bestChoice: "🤷‍♂️" , locationLink: 'https://maps.app.goo.gl/8X5j2cWbhsJcZxvw7' , menuList: 'https://www.instagram.com/select.mo/'},
                { name: "شاي مسكوب", img: "img/maskob.jpg", bestChoice: "🤷‍♂️" , locationLink: 'https://maps.app.goo.gl/anrL45jXzmVb1JN57' , menuList: 'files/mskobMenu.pdf'},
                { name: "كوفي ECLIPSE", img: "img/ECLIPSE.jpg", bestChoice: "🤷‍♂️" , locationLink: 'https://maps.app.goo.gl/TGZZTiWbvTY4B3mr5' , menuList: 'https://eclipse.yallaqrcodes.com/'}
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
            <img class="restaurant-displayimg" src="${place.img}" alt="${place.name}">
            <p><img class="icons-loc" src = "img/favorite.svg">  <strong>أفضل طبق :</strong>${place.bestChoice}</p>
            <p><img class="icons-loc" src = "img/assistant.svg"> <strong>المواقع :</strong> <a href="${place.locationLink}" target="_blank">أضغط هنا</a></p>
            <p><img class="icons-loc" src = "img/restaurant.svg">  <strong>قائمة الطعام :</strong><a href="${place.menuList}" target="_blank">أضغط هنا</a></p>
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
