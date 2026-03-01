const images = [
    'https://res.cloudinary.com/dbuwekmex/image/upload/v1767040791/IMG_20251229_153829_cp0rgb.jpg',
    'https://res.cloudinary.com/dbuwekmex/image/upload/v1768190814/IMG_1807_fa9xxb.jpg',
    'https://res.cloudinary.com/dbuwekmex/image/upload/v1768191003/IMG_1763_uaqofi.jpg',
    'https://res.cloudinary.com/dbuwekmex/image/upload/v1768190671/IMG_1922_qw5uma.jpg'
];

const availableImages = {
    "1": [
        'https://res.cloudinary.com/dbuwekmex/image/upload/v1772132956/IMG_2267_e0zn38.jpg',
        'https://res.cloudinary.com/dbuwekmex/image/upload/v1772132956/IMG_2251_rry5ft.jpg',
        'https://res.cloudinary.com/dbuwekmex/image/upload/v1772132958/IMG_2275_vp7gvp.jpg',
        'https://res.cloudinary.com/dbuwekmex/image/upload/v1772132958/IMG_2279_begyb5.jpg'
    ],
    "2": [
        'https://res.cloudinary.com/dbuwekmex/image/upload/v1772133035/IMG_2297_r4mkmt.jpg',
        'https://res.cloudinary.com/dbuwekmex/image/upload/v1772133023/IMG_2292_nnbhcb.jpg',
        'https://res.cloudinary.com/dbuwekmex/image/upload/v1772133029/IMG_2288_qnj43p.jpg',
        'https://res.cloudinary.com/dbuwekmex/image/upload/v1772133038/IMG_2284_vwg7y1.jpg'
    ],
    "3": [
        'https://res.cloudinary.com/dbuwekmex/image/upload/v1772133091/IMG_2315_ywzm9x.jpg',
        'https://res.cloudinary.com/dbuwekmex/image/upload/v1772133089/IMG_2336_eq7jc7.jpg',
        'https://res.cloudinary.com/dbuwekmex/image/upload/v1772133092/IMG_2338_cd3i2f.jpg'
    ],
    "4": [
        'https://res.cloudinary.com/dbuwekmex/image/upload/v1772133163/IMG_2328_s865q1.jpg',
        'https://res.cloudinary.com/dbuwekmex/image/upload/v1772133179/IMG_2325_ojmmu1.jpg',
        'https://res.cloudinary.com/dbuwekmex/image/upload/v1772133184/IMG_2322_zfjbqt.jpg',
        'https://res.cloudinary.com/dbuwekmex/image/upload/v1772133184/IMG_2323_sn5acf.jpg',
        'https://res.cloudinary.com/dbuwekmex/image/upload/v1772133184/IMG_2329_i4kgnz.jpg'
    ],
    "5": [
        'https://res.cloudinary.com/dbuwekmex/image/upload/v1772133228/IMG_2348_akl1at.jpg',
        'https://res.cloudinary.com/dbuwekmex/image/upload/v1772133246/IMG_2358_da7qj9.jpg',
        'https://res.cloudinary.com/dbuwekmex/image/upload/v1772133246/IMG_2354_k4di3m.jpg'
    ],
    "6": [
        'https://res.cloudinary.com/dbuwekmex/image/upload/v1772133279/IMG_2376_pva9xj.jpg'
    ],
    "7": [
        'https://res.cloudinary.com/dbuwekmex/image/upload/v1772133340/IMG_2387_gbqyxu.jpg',
        'https://res.cloudinary.com/dbuwekmex/image/upload/v1772133350/IMG_2394_beok4b.jpg',
        'https://res.cloudinary.com/dbuwekmex/image/upload/v1772133339/IMG_2393_d9zfwl.jpg',
        'https://res.cloudinary.com/dbuwekmex/image/upload/v1772133310/IMG_2396_b6egzr.jpg',
        'https://res.cloudinary.com/dbuwekmex/image/upload/v1772133317/IMG_2381_srprxg.jpg'
    ]
};

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


