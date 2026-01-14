const images = [
    'https://res.cloudinary.com/dbuwekmex/image/upload/v1767040791/IMG_20251229_153829_cp0rgb.jpg',
    'https://res.cloudinary.com/dbuwekmex/image/upload/v1768190814/IMG_1807_fa9xxb.jpg',
    'https://res.cloudinary.com/dbuwekmex/image/upload/v1768191003/IMG_1763_uaqofi.jpg',
    'https://res.cloudinary.com/dbuwekmex/image/upload/v1768190671/IMG_1922_qw5uma.jpg'
];

const availableImages = {
    "1": [
        'https://res.cloudinary.com/dbuwekmex/image/upload/v1768190583/IMG_2018_1_tamz7k.jpg',
        'https://res.cloudinary.com/dbuwekmex/image/upload/v1768420120/IMG_2098_upwgur.jpg',
        'https://res.cloudinary.com/dbuwekmex/image/upload/v1768190588/IMG_1789_1_oq9wix.jpg',
        'https://res.cloudinary.com/dbuwekmex/image/upload/v1768420122/IMG_2094_st0gtn.jpg',
        'https://res.cloudinary.com/dbuwekmex/image/upload/v1768190597/IMG_2024_2_fxidsn.jpg'
    ],
    "2": [
        'https://res.cloudinary.com/dbuwekmex/image/upload/v1768419610/IMG_2165_qmtoks.jpg',
        'https://res.cloudinary.com/dbuwekmex/image/upload/v1768190629/IMG_1995_otkmwu.jpg',
        'https://res.cloudinary.com/dbuwekmex/image/upload/v1768419611/IMG_2151_soj3fm.jpg',
        'https://res.cloudinary.com/dbuwekmex/image/upload/v1768419612/IMG_2148_sbttgl.jpg'
    ],
    "3": [
        'https://res.cloudinary.com/dbuwekmex/image/upload/v1768420182/IMG_2146_ecdtfv.jpg',
        'https://res.cloudinary.com/dbuwekmex/image/upload/v1768190671/IMG_1922_qw5uma.jpg',
        'https://res.cloudinary.com/dbuwekmex/image/upload/v1768420184/IMG_2138_boe5om.jpg',
        'https://res.cloudinary.com/dbuwekmex/image/upload/v1768420184/IMG_2145_fzzeyl.jpg',
        'https://res.cloudinary.com/dbuwekmex/image/upload/v1768190676/IMG_1930_p6khzw.jpg'
    ],
    "4": [
        'https://res.cloudinary.com/dbuwekmex/image/upload/v1768421522/IMG_2224_m8zrpb.jpg',
        'https://res.cloudinary.com/dbuwekmex/image/upload/v1768421523/IMG_2214_cqmu8w.jpg',
        'https://res.cloudinary.com/dbuwekmex/image/upload/v1768190741/IMG_1947_dryf9l.jpg',
        'https://res.cloudinary.com/dbuwekmex/image/upload/v1768421522/IMG_2218_nsrtdn.jpg',
        'https://res.cloudinary.com/dbuwekmex/image/upload/v1768421523/IMG_2217_cfbxqh.jpg'
    ],
    "5": [
        'https://res.cloudinary.com/dbuwekmex/image/upload/v1768190908/IMG_1853_f3ureg.jpg',
        'https://res.cloudinary.com/dbuwekmex/image/upload/v1768190789/IMG_1846_eaco9p.jpg',
        'https://res.cloudinary.com/dbuwekmex/image/upload/v1768420576/IMG_2042_hddh8n.jpg',
        'https://res.cloudinary.com/dbuwekmex/image/upload/v1768420578/IMG_2041_ijnfow.jpg'
    ],
    "6": [
        'https://res.cloudinary.com/dbuwekmex/image/upload/v1768190966/IMG_1833_ysxp1y.jpg',
        'https://res.cloudinary.com/dbuwekmex/image/upload/v1768190957/IMG_1827_fi74mh.jpg',
        'https://res.cloudinary.com/dbuwekmex/image/upload/v1768419462/IMG_2059_pdjet0.jpg',
        'https://res.cloudinary.com/dbuwekmex/image/upload/v1768190966/IMG_1817_xwzdcq.jpg'
    ],
    "7": [
        'https://res.cloudinary.com/dbuwekmex/image/upload/v1768191010/IMG_1761_moogwa.jpg',
        'https://res.cloudinary.com/dbuwekmex/image/upload/v1768191002/IMG_1752_pnx8fq.jpg',
        'https://res.cloudinary.com/dbuwekmex/image/upload/v1768420656/IMG_2064_vdzmqn.jpg',
        'https://res.cloudinary.com/dbuwekmex/image/upload/v1768191003/IMG_1763_uaqofi.jpg',
        'https://res.cloudinary.com/dbuwekmex/image/upload/v1768420655/IMG_2069_rk4m6w.jpg'
    ],
    "8": [
        'https://res.cloudinary.com/dbuwekmex/image/upload/v1768419520/IMG_2087_on2buh.jpg',
        'https://res.cloudinary.com/dbuwekmex/image/upload/v1768419522/IMG_2081_glrtiv.jpg',
        'https://res.cloudinary.com/dbuwekmex/image/upload/v1768191127/IMG_1767_swtsj3.jpg',
        'https://res.cloudinary.com/dbuwekmex/image/upload/v1768419521/IMG_2084_apyfst.jpg'
    ],
    "9": [
        'https://res.cloudinary.com/dbuwekmex/image/upload/v1768420938/IMG_2185_rw4b9u.jpg',
        'https://res.cloudinary.com/dbuwekmex/image/upload/v1768420940/IMG_2178_unhwql.jpg',
        'https://res.cloudinary.com/dbuwekmex/image/upload/v1768420943/IMG_2173_s7r4mo.jpg',
        'https://res.cloudinary.com/dbuwekmex/image/upload/v1768420947/IMG_2168_nxx2pw.jpg',
        'https://res.cloudinary.com/dbuwekmex/image/upload/v1768191205/IMG_1787_szloxa.jpg'
    ],
    "10": [
        'https://res.cloudinary.com/dbuwekmex/image/upload/v1768191244/IMG_1901_majxqd.jpg',
        'https://res.cloudinary.com/dbuwekmex/image/upload/v1768419575/IMG_2116_n17xdu.jpg',
        'https://res.cloudinary.com/dbuwekmex/image/upload/v1768419573/IMG_2117_ppbvl6.jpg',
        'https://res.cloudinary.com/dbuwekmex/image/upload/v1768191247/IMG_1909_l01254.jpg',
        'https://res.cloudinary.com/dbuwekmex/image/upload/v1768419572/IMG_2126_phk9jg.jpg'
    ],
    "11": [
        'https://res.cloudinary.com/dbuwekmex/image/upload/v1768190802/IMG_1802_mse87m.jpg',
        'https://res.cloudinary.com/dbuwekmex/image/upload/v1768190791/IMG_1796_aamlgk.jpg',
        'https://res.cloudinary.com/dbuwekmex/image/upload/v1768190817/IMG_1795_zonviq.jpg',
        'https://res.cloudinary.com/dbuwekmex/image/upload/v1768421077/IMG_2053_zjzlss.jpg',
        'https://res.cloudinary.com/dbuwekmex/image/upload/v1768190814/IMG_1807_fa9xxb.jpg'
    ],
    "12": [
        'https://res.cloudinary.com/dbuwekmex/image/upload/v1768421560/IMG_2236_pjw2fx.jpg',
        'https://res.cloudinary.com/dbuwekmex/image/upload/v1768421561/IMG_2231_blasel.jpg',
        'https://res.cloudinary.com/dbuwekmex/image/upload/v1768190736/IMG_1955_ko361e.jpg',
        'https://res.cloudinary.com/dbuwekmex/image/upload/v1768190734/IMG_1974_hilhcx.jpg'
    ],
    "13": [
        'https://res.cloudinary.com/dbuwekmex/image/upload/v1768421851/IMG_2105_lbwfzh.jpg',
        'https://res.cloudinary.com/dbuwekmex/image/upload/v1768421851/IMG_2107_mppkkt.jpg',
        'https://res.cloudinary.com/dbuwekmex/image/upload/v1768421852/IMG_2102_ou5lcq.jpg',
        'https://res.cloudinary.com/dbuwekmex/image/upload/v1768421850/IMG_2111_rppgv2.jpg'
    ],
    "14": [
        'https://res.cloudinary.com/dbuwekmex/image/upload/v1768421913/IMG_2209_uhc98w.jpg',
        'https://res.cloudinary.com/dbuwekmex/image/upload/v1768421916/IMG_2187_wuonq8.jpg',
        'https://res.cloudinary.com/dbuwekmex/image/upload/v1768421913/IMG_2210_zfwgfl.jpg',
        'https://res.cloudinary.com/dbuwekmex/image/upload/v1768421915/IMG_2190_efxihs.jpg'
    ],
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

let currentIndex = 0;
const slideElement = document.getElementById('slideshow');

function changeImage() {
    currentIndex = (currentIndex + 1) % images.length;
    
    slideElement.src = images[currentIndex];
}

setInterval(changeImage, 4000);
