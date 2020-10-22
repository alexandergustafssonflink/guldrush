
const getProductInfo = require('./functions/getProductInfo.js');

const puppeteer = require('puppeteer');

async function getData () {

    let currentDate = new Date(); 
    /// LIBERTY SILVER
     let heraeus20GoldBar = await getProductInfo('https:www.libertysilver.se/kopa/guld',
            '#productId260_quantity1_ span',
            '#productInfoBox_id260_ > h2 > a', 
            '#productInfoBox_id260_ > h2',
            20,
            "Goldbar",
            "Liberty Silver",
            currentDate
)
    let heraeus50GoldBar = await getProductInfo('https:www.libertysilver.se/kopa/guld',
            '#productId391_quantity1_ span',
            '#productInfoBox_id391_ > h2 > a', 
            '#productInfoBox_id391_ > h2',
            50,
            "Goldbar",
            "Liberty Silver",
            currentDate
)

    let heraeus100GoldBar = await getProductInfo('https:www.libertysilver.se/kopa/guld',
            '#productId311_quantity1_ span',
            '#productInfoBox_id311_ > h2 > a', 
            '#productInfoBox_id311_ > h2',
            100,
            "Goldbar",
            "Liberty Silver",
            currentDate
)



/// TAVEX
let pamp100GoldBar = await getProductInfo('https://tavex.se/guld/guldtackor/',
            'body > div.h-canvas > div.v-category.js-list-modifier > div.h-container > div > div.grid__col--md-9.v-category__body.js-product-archive-results > div.v-category__content.has-pagination.js-loader-target > div.grid.grid--narrow-xs.grid--equalheight > div:nth-child(8) > a > div > div > div.product__price.product__price--single > span.product__price-value.h-price-flash.js-product-price-from',
            'body > div.h-canvas > div.v-category.js-list-modifier > div.h-container > div > div.grid__col--md-9.v-category__body.js-product-archive-results > div.v-category__content.has-pagination.js-loader-target > div.grid.grid--narrow-xs.grid--equalheight > div:nth-child(5) > a', 
            'body > div.h-canvas > div.v-category.js-list-modifier > div.h-container > div > div.grid__col--md-9.v-category__body.js-product-archive-results > div.v-category__content.has-pagination.js-loader-target > div.grid.grid--narrow-xs.grid--equalheight > div:nth-child(5) > a > div.product__meta > div > h3 > span',
            100,
            "Goldbar",
            "Tavex",
            currentDate
)

let pamp50GoldBar = await getProductInfo('https://tavex.se/guld/guldtackor/',
            'body > div.h-canvas > div.v-category.js-list-modifier > div.h-container > div > div.grid__col--md-9.v-category__body.js-product-archive-results > div.v-category__content.has-pagination.js-loader-target > div.grid.grid--narrow-xs.grid--equalheight > div:nth-child(11) > a > div > div > div.product__price.product__price--single > span.product__price-value.h-price-flash.js-product-price-from',
            'body > div.h-canvas > div.v-category.js-list-modifier > div.h-container > div > div.grid__col--md-9.v-category__body.js-product-archive-results > div.v-category__content.has-pagination.js-loader-target > div.grid.grid--narrow-xs.grid--equalheight > div:nth-child(11) > a', 
            'body > div.h-canvas > div.v-category.js-list-modifier > div.h-container > div > div.grid__col--md-9.v-category__body.js-product-archive-results > div.v-category__content.has-pagination.js-loader-target > div.grid.grid--narrow-xs.grid--equalheight > div:nth-child(11) > a > div > div > h3 > span',
            50,
            "Goldbar",
            "Tavex",
            currentDate
)

let pamp20GoldBar = await getProductInfo('https://tavex.se/guld/guldtackor/',
            'body > div.h-canvas > div.v-category.js-list-modifier > div.h-container > div > div.grid__col--md-9.v-category__body.js-product-archive-results > div.v-category__content.has-pagination.js-loader-target > div.grid.grid--narrow-xs.grid--equalheight > div:nth-child(15) > a > div > div > div.product__price.product__price--single > span.product__price-value.h-price-flash.js-product-price-from',
            'body > div.h-canvas > div.v-category.js-list-modifier > div.h-container > div > div.grid__col--md-9.v-category__body.js-product-archive-results > div.v-category__content.has-pagination.js-loader-target > div.grid.grid--narrow-xs.grid--equalheight > div:nth-child(15) > a', 
            'body > div.h-canvas > div.v-category.js-list-modifier > div.h-container > div > div.grid__col--md-9.v-category__body.js-product-archive-results > div.v-category__content.has-pagination.js-loader-target > div.grid.grid--narrow-xs.grid--equalheight > div:nth-child(15) > a > div > div > h3 > span',
            20,
            "Goldbar",
            "Tavex",
            currentDate
)


/// GULDCENTRALEN
let ubs100GoldBar = await getProductInfo('https://www.guldcentralen.se/guld-kop-och-salj',
    'body > div.l-table.container > div.l-table__col.l-table__col--bigger > div > a:nth-child(8) > figure > figcaption > p > span',     
    'body > div.l-table.container > div.l-table__col.l-table__col--bigger > div > a:nth-child(8)', 
    'body > div.l-table.container > div.l-table__col.l-table__col--bigger > div > a:nth-child(8) > figure > figcaption > h2',
    100,
    "Goldbar",
    "Guldcentralen",
    currentDate
)


let ubs50GoldBar = await getProductInfo('https://www.guldcentralen.se/guld-kop-och-salj',
            'body > div.l-table.container > div.l-table__col.l-table__col--bigger > div > a:nth-child(7) > figure > figcaption > p > span',
            'body > div.l-table.container > div.l-table__col.l-table__col--bigger > div > a:nth-child(7)', 
            'body > div.l-table.container > div.l-table__col.l-table__col--bigger > div > a:nth-child(7) > figure > figcaption > h2',
            50,
            "Goldbar",
            "Guldcentralen",
            currentDate
)

let ubs20GoldBar = await getProductInfo('https://www.guldcentralen.se/guld-kop-och-salj',
            'body > div.l-table.container > div.l-table__col.l-table__col--bigger > div > a:nth-child(4) > figure > figcaption > p > span',
            'body > div.l-table.container > div.l-table__col.l-table__col--bigger > div > a:nth-child(4)', 
            'body > div.l-table.container > div.l-table__col.l-table__col--bigger > div > a:nth-child(4) > figure > figcaption > h2',
            20,
            "Goldbar",
            "Guldcentralen",
            currentDate
)

   let products = [
        heraeus100GoldBar,
        heraeus50GoldBar,
        heraeus20GoldBar,
        pamp100GoldBar,
        pamp50GoldBar,
        pamp20GoldBar,
        ubs100GoldBar,
        ubs50GoldBar,
        ubs20GoldBar
    ]

    return products; 
    
}

module.exports = getData; 



