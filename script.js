const images = [
    'https://res.cloudinary.com/dbuwekmex/image/upload/v1767040791/IMG_20251229_153829_cp0rgb.jpg',
    'https://res.cloudinary.com/dbuwekmex/image/upload/v1768190814/IMG_1807_fa9xxb.jpg',
    'https://res.cloudinary.com/dbuwekmex/image/upload/v1768191003/IMG_1763_uaqofi.jpg',
    'https://res.cloudinary.com/dbuwekmex/image/upload/v1768190671/IMG_1922_qw5uma.jpg'
];

const availableImages = {
    "1": [
        'https://res.cloudinary.com/dbuwekmex/image/upload/v1768190583/IMG_2018_1_tamz7k.jpg',
        'https://res.cloudinary.com/dbuwekmex/image/upload/v1768190588/IMG_1789_1_oq9wix.jpg',
        'https://res.cloudinary.com/dbuwekmex/image/upload/v1768190597/IMG_2024_2_fxidsn.jpg'
    ],
    "2": [
        'https://res.cloudinary.com/dbuwekmex/image/upload/v1768190629/IMG_1995_otkmwu.jpg',
        'https://res.cloudinary.com/dbuwekmex/image/upload/v1768190631/IMG_1993_gfnrpa.jpg',
        'https://res.cloudinary.com/dbuwekmex/image/upload/v1768190632/IMG_1985_jcj8mt.jpg',
    ],
    "3": [
        'https://res.cloudinary.com/dbuwekmex/image/upload/v1768190671/IMG_1922_qw5uma.jpg',
        'https://res.cloudinary.com/dbuwekmex/image/upload/v1768190676/IMG_1930_p6khzw.jpg',
        'https://res.cloudinary.com/dbuwekmex/image/upload/v1768190672/IMG_1914_zuvjiq.jpg'
    ],
    "4": [
        'https://res.cloudinary.com/dbuwekmex/image/upload/v1768190736/IMG_1955_ko361e.jpg',
        'https://res.cloudinary.com/dbuwekmex/image/upload/v1768190734/IMG_1974_hilhcx.jpg',
        'https://res.cloudinary.com/dbuwekmex/image/upload/v1768190733/IMG_1945_cesf7a.jpg',
        'https://res.cloudinary.com/dbuwekmex/image/upload/v1768190740/IMG_1951_ktgppy.jpg',
        'https://res.cloudinary.com/dbuwekmex/image/upload/v1768190741/IMG_1947_dryf9l.jpg',
        'https://res.cloudinary.com/dbuwekmex/image/upload/v1768190741/IMG_1940_w6bord.jpg'
    ],
    "5": [
        'https://res.cloudinary.com/dbuwekmex/image/upload/v1768190814/IMG_1807_fa9xxb.jpg',
        'https://res.cloudinary.com/dbuwekmex/image/upload/v1768190802/IMG_1802_mse87m.jpg',
        'https://res.cloudinary.com/dbuwekmex/image/upload/v1768190791/IMG_1796_aamlgk.jpg',
        'https://res.cloudinary.com/dbuwekmex/image/upload/v1768190813/IMG_1850_sin0v0.jpg',
        'https://res.cloudinary.com/dbuwekmex/image/upload/v1768190789/IMG_1846_eaco9p.jpg',
        'https://res.cloudinary.com/dbuwekmex/image/upload/v1768190774/IMG_1851_mcsyfj.jpg',
        'https://res.cloudinary.com/dbuwekmex/image/upload/v1768190908/IMG_1853_f3ureg.jpg',
        'https://res.cloudinary.com/dbuwekmex/image/upload/v1768190817/IMG_1795_zonviq.jpg'
    ],
    "6": [
        'https://res.cloudinary.com/dbuwekmex/image/upload/v1768190957/IMG_1827_fi74mh.jpg',
        'https://res.cloudinary.com/dbuwekmex/image/upload/v1768190966/IMG_1833_ysxp1y.jpg',
        'https://res.cloudinary.com/dbuwekmex/image/upload/v1768190966/IMG_1817_xwzdcq.jpg'
    ],
    "7": [
        'https://res.cloudinary.com/dbuwekmex/image/upload/v1768191002/IMG_1752_pnx8fq.jpg',
        'https://res.cloudinary.com/dbuwekmex/image/upload/v1768191003/IMG_1763_uaqofi.jpg',
        'https://res.cloudinary.com/dbuwekmex/image/upload/v1768191010/IMG_1761_moogwa.jpg'
    ],
    "8": [
        'https://res.cloudinary.com/dbuwekmex/image/upload/v1768191127/IMG_1767_swtsj3.jpg',
        'https://res.cloudinary.com/dbuwekmex/image/upload/v1768191118/IMG_1769_za86hl.jpg'
    ],
    "9": [
        'https://res.cloudinary.com/dbuwekmex/image/upload/v1768191158/IMG_2023_sfo3ov.jpg',
        'https://res.cloudinary.com/dbuwekmex/image/upload/v1768191180/IMG_2019_1_rwxavb.jpg',
        'https://res.cloudinary.com/dbuwekmex/image/upload/v1768191203/IMG_2004_2_jefnqu.jpg',
        'https://res.cloudinary.com/dbuwekmex/image/upload/v1768191205/IMG_1787_szloxa.jpg'
    ],
    "10": [
        'https://res.cloudinary.com/dbuwekmex/image/upload/v1768191244/IMG_1901_majxqd.jpg',
        'https://res.cloudinary.com/dbuwekmex/image/upload/v1768191247/IMG_1909_l01254.jpg',
        'https://res.cloudinary.com/dbuwekmex/image/upload/v1768191239/IMG_1875_pouyds.jpg'
    ],
    "11": [
        'https://res.cloudinary.com/dbuwekmex/image/upload/v1767407510/IMG_20260102_213042_dhlhzj.jpg',
        'https://res.cloudinary.com/dbuwekmex/image/upload/v1767407510/IMG_20260102_213044_botduv.jpg',
        'https://res.cloudinary.com/dbuwekmex/image/upload/v1767407509/IMG_20260102_213046_zfvfu7.jpg'
    ]
}

const indexes = {};
for (let key in availableImages) { indexes[key] = 0; }

const imageCarousel = (e) => {
    const btn = e.target;
    const puppyId = btn.dataset.puppy;
    const list = availableImages[puppyId];
    
    if (btn.classList.contains('right-button')) {
        indexes[puppyId] = (indexes[puppyId] + 1) % list.length;
    } else {
        indexes[puppyId] = (indexes[puppyId] - 1 + list.length) % list.length;
    }

    const container = btn.parentElement;
    const img = container.querySelector('.available-image');
    img.src = list[indexes[puppyId]];
};

document.querySelectorAll('.button').forEach(btn => {
    btn.addEventListener('click', imageCarousel);
});

let currentIndex = 0;
const slideElement = document.getElementById('slideshow');

function changeImage() {
    currentIndex = (currentIndex + 1) % images.length;
    
    slideElement.src = images[currentIndex];
}

setInterval(changeImage, 4000);
