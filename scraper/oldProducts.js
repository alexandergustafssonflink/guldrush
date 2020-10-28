
const getProductInfo = require('./functions/getProductInfo.js');

const puppeteer = require('puppeteer');

async function getProducts () {

    let currentDate = new Date(); 
    /// LIBERTY SILVER
     let heraeus20GoldBar = await getProductInfo('https:www.libertysilver.se/kopa/guld',
            '#productId260_quantity1_ span',
            '#productInfoBox_id260_ > h2 > a', 
            '#productInfoBox_id260_ > h2',
            20,
            "guld",
            "Liberty Silver",
            currentDate
)
    let heraeus50GoldBar = await getProductInfo('https:www.libertysilver.se/kopa/guld',
            '#productId391_quantity1_ span',
            '#productInfoBox_id391_ > h2 > a', 
            '#productInfoBox_id391_ > h2',
            50,
            "guld",
            "Liberty Silver",
            currentDate
)

    let heraeus100GoldBar = await getProductInfo('https:www.libertysilver.se/kopa/guld',
            '#productId311_quantity1_ span',
            '#productInfoBox_id311_ > h2 > a', 
            '#productInfoBox_id311_ > h2',
            100,
            "guld",
            "Liberty Silver",
            currentDate
)

let heraeus5GoldBar = await getProductInfo('https:www.libertysilver.se/kopa/guld',
            '#productId482_quantity1_ span',
            '#productInfoBox_id482_ > h2 > a', 
            '#productInfoBox_id482_ > h2',
            5,
            "guld",
            "Liberty Silver",
            currentDate
    )

    let heraeus10GoldBar = await getProductInfo('https:www.libertysilver.se/kopa/guld',
            '#productId1240_quantity1_ span',
            '#productInfoBox_id1240_ > h2 > a', 
            '#productInfoBox_id1240_ > h2',
            20,
            "guld",
            "Liberty Silver",
            currentDate
    )

     let kinebar20GoldBar = await getProductInfo('https:www.libertysilver.se/kopa/guld',
            '#productId85_quantity1_ span',
            '#productInfoBox_id85_ > h2 > a', 
            '#productInfoBox_id85_ > h2',
            10,
            "guld",
            "Liberty Silver",
            currentDate
    )


      let argorHeraeus50GoldBar = await getProductInfo('https:www.libertysilver.se/kopa/guld',
            '#productId1105_quantity1_ span',
            '#productInfoBox_id1105_ > h2 > a', 
            '#productInfoBox_id1105_ > h2',
            50,
            "guld",
            "Liberty Silver",
            currentDate
    )
        let kinebar50GoldBar = await getProductInfo('https:www.libertysilver.se/kopa/guld',
            '#productId1242_quantity1_ span',
            '#productInfoBox_id1242_ > h2 > a', 
            '#productInfoBox_id1242_ > h2',
            50,
            "guld",
            "Liberty Silver",
            currentDate
    )
    let libertyUbs50GoldBar = await getProductInfo('https:www.libertysilver.se/kopa/guld',
            '#productId891_quantity1_ span',
            '#productInfoBox_id891_ > h2 > a', 
            '#productInfoBox_id891_ > h2',
            50,
            "guld",
            "Liberty Silver",
            currentDate
    )
       

      let libertyValcambi50GoldBar = await getProductInfo('https:www.libertysilver.se/kopa/guld',
            '#productId449_quantity1_ span',
            '#productInfoBox_id449_ > h2 > a', 
            '#productInfoBox_id449_ > h2',
            50,
            "guld",
            "Liberty Silver",
            currentDate
    )
 

    let heraeusP100GoldBar = await getProductInfo('https:www.libertysilver.se/kopa/guld',
            '#productId360_quantity1_ span',
            '#productInfoBox_id360_ > h2 > a', 
            '#productInfoBox_id360_ > h2',
            100,
            "guld",
            "Liberty Silver",
            currentDate
    )

     let libertyValcambi100GoldBar = await getProductInfo('https:www.libertysilver.se/kopa/guld',
            '#productId366_quantity1_ span',
            '#productInfoBox_id366_ > h2 > a', 
            '#productInfoBox_id366_ > h2',
            100,
            "guld",
            "Liberty Silver",
            currentDate
    )

    let libertyPerthMint100GoldBar = await getProductInfo('https:www.libertysilver.se/kopa/guld',
            '#productId417_quantity1_ span',
            '#productInfoBox_id417_ > h2 > a', 
            '#productInfoBox_id417_ > h2',
            100,
            "guld",
            "Liberty Silver",
            currentDate
    )

    let libertyUbsP100GoldBar = await getProductInfo('https:www.libertysilver.se/kopa/guld',
            '#productId96_quantity1_ span',
            '#productInfoBox_id96_ > h2 > a', 
            '#productInfoBox_id96_ > h2',
            100,
            "guld",
            "Liberty Silver",
            currentDate
    )

      let libertyPampG100GoldBar = await getProductInfo('https:www.libertysilver.se/kopa/guld',
            '#productId536_quantity1_ span',
            '#productInfoBox_id536_ > h2 > a', 
            '#productInfoBox_id536_ > h2',
            100,
            "guld",
            "Liberty Silver",
            currentDate
    )



    let heraeus1000SilverBar = await getProductInfo('https:www.libertysilver.se/kopa/silver',
            '#productId490_quantity1_ span',
            '#productInfoBox_id490_ > h2 > a', 
            '#productInfoBox_id490_ > h2',
            1000,
            "silver",
            "Liberty Silver",
            currentDate
    )

   

/// TAVEX
let pamp100GoldBar = await getProductInfo('https://tavex.se/guld/guldtackor/',
            'body > div.h-canvas > div.v-category.js-list-modifier > div.h-container > div > div.grid__col--md-9.v-category__body.js-product-archive-results > div.v-category__content.has-pagination.js-loader-target > div.grid.grid--narrow-xs.grid--equalheight > div:nth-child(8) > a > div > div > div.product__price.product__price--single > span.product__price-value.h-price-flash.js-product-price-from',
            'body > div.h-canvas > div.v-category.js-list-modifier > div.h-container > div > div.grid__col--md-9.v-category__body.js-product-archive-results > div.v-category__content.has-pagination.js-loader-target > div.grid.grid--narrow-xs.grid--equalheight > div:nth-child(5) > a', 
            'body > div.h-canvas > div.v-category.js-list-modifier > div.h-container > div > div.grid__col--md-9.v-category__body.js-product-archive-results > div.v-category__content.has-pagination.js-loader-target > div.grid.grid--narrow-xs.grid--equalheight > div:nth-child(5) > a > div.product__meta > div > h3 > span',
            100,
            "guld",
            "Tavex",
            currentDate
)

let pamp50GoldBar = await getProductInfo('https://tavex.se/guld/guldtackor/',
            'body > div.h-canvas > div.v-category.js-list-modifier > div.h-container > div > div.grid__col--md-9.v-category__body.js-product-archive-results > div.v-category__content.has-pagination.js-loader-target > div.grid.grid--narrow-xs.grid--equalheight > div:nth-child(11) > a > div > div > div.product__price.product__price--single > span.product__price-value.h-price-flash.js-product-price-from',
            'body > div.h-canvas > div.v-category.js-list-modifier > div.h-container > div > div.grid__col--md-9.v-category__body.js-product-archive-results > div.v-category__content.has-pagination.js-loader-target > div.grid.grid--narrow-xs.grid--equalheight > div:nth-child(11) > a', 
            'body > div.h-canvas > div.v-category.js-list-modifier > div.h-container > div > div.grid__col--md-9.v-category__body.js-product-archive-results > div.v-category__content.has-pagination.js-loader-target > div.grid.grid--narrow-xs.grid--equalheight > div:nth-child(11) > a > div > div > h3 > span',
            50,
            "guld",
            "Tavex",
            currentDate
)

let pamp20GoldBar = await getProductInfo('https://tavex.se/guld/guldtackor/',
            'body > div.h-canvas > div.v-category.js-list-modifier > div.h-container > div > div.grid__col--md-9.v-category__body.js-product-archive-results > div.v-category__content.has-pagination.js-loader-target > div.grid.grid--narrow-xs.grid--equalheight > div:nth-child(15) > a > div > div > div.product__price.product__price--single > span.product__price-value.h-price-flash.js-product-price-from',
            'body > div.h-canvas > div.v-category.js-list-modifier > div.h-container > div > div.grid__col--md-9.v-category__body.js-product-archive-results > div.v-category__content.has-pagination.js-loader-target > div.grid.grid--narrow-xs.grid--equalheight > div:nth-child(15) > a', 
            'body > div.h-canvas > div.v-category.js-list-modifier > div.h-container > div > div.grid__col--md-9.v-category__body.js-product-archive-results > div.v-category__content.has-pagination.js-loader-target > div.grid.grid--narrow-xs.grid--equalheight > div:nth-child(15) > a > div > div > h3 > span',
            20,
            "guld",
            "Tavex",
            currentDate
)

let valcambi100GoldBar = await getProductInfo('https://tavex.se/guld/guldtackor/',
            'body > div.h-canvas > div.v-category.js-list-modifier > div.h-container > div > div.grid__col--md-9.v-category__body.js-product-archive-results > div.v-category__content.has-pagination.js-loader-target > div.grid.grid--narrow-xs.grid--equalheight > div:nth-child(2) > a > div > div > div.product__price.product__price--single > span.product__price-value.h-price-flash.js-product-price-from',
            'body > div.h-canvas > div.v-category.js-list-modifier > div.h-container > div > div.grid__col--md-9.v-category__body.js-product-archive-results > div.v-category__content.has-pagination.js-loader-target > div.grid.grid--narrow-xs.grid--equalheight > div:nth-child(2) > a', 
            'body > div.h-canvas > div.v-category.js-list-modifier > div.h-container > div > div.grid__col--md-9.v-category__body.js-product-archive-results > div.v-category__content.has-pagination.js-loader-target > div.grid.grid--narrow-xs.grid--equalheight > div:nth-child(2) > a > div > div > h3 > span',
            100,
            "guld",
            "Tavex",
            currentDate
)

let valcambiSuisse50GoldBar = await getProductInfo('https://tavex.se/guld/guldtackor/',
            'body > div.h-canvas > div.v-category.js-list-modifier > div.h-container > div > div.grid__col--md-9.v-category__body.js-product-archive-results > div.v-category__content.has-pagination.js-loader-target > div.grid.grid--narrow-xs.grid--equalheight > div:nth-child(10) > a > div > div > div.product__price.product__price--single > span.product__price-value.h-price-flash.js-product-price-from',
            'body > div.h-canvas > div.v-category.js-list-modifier > div.h-container > div > div.grid__col--md-9.v-category__body.js-product-archive-results > div.v-category__content.has-pagination.js-loader-target > div.grid.grid--narrow-xs.grid--equalheight > div:nth-child(10) > a', 
            'body > div.h-canvas > div.v-category.js-list-modifier > div.h-container > div > div.grid__col--md-9.v-category__body.js-product-archive-results > div.v-category__content.has-pagination.js-loader-target > div.grid.grid--narrow-xs.grid--equalheight > div:nth-child(10) > a > div > div > h3 > span',
            50,
            "guld",
            "Tavex",
            currentDate
)


let pampFortuna100GoldBar = await getProductInfo('https://tavex.se/guld/guldtackor/',
            'body > div.h-canvas > div.v-category.js-list-modifier > div.h-container > div > div.grid__col--md-9.v-category__body.js-product-archive-results > div.v-category__content.has-pagination.js-loader-target > div.grid.grid--narrow-xs.grid--equalheight > div:nth-child(8) > a > div > div > div.product__price.product__price--single > span.product__price-value.h-price-flash.js-product-price-from',
            'body > div.h-canvas > div.v-category.js-list-modifier > div.h-container > div > div.grid__col--md-9.v-category__body.js-product-archive-results > div.v-category__content.has-pagination.js-loader-target > div.grid.grid--narrow-xs.grid--equalheight > div:nth-child(8) > a', 
            'body > div.h-canvas > div.v-category.js-list-modifier > div.h-container > div > div.grid__col--md-9.v-category__body.js-product-archive-results > div.v-category__content.has-pagination.js-loader-target > div.grid.grid--narrow-xs.grid--equalheight > div:nth-child(8) > a > div > div > h3 > span',
            100,
            "guld",
            "Tavex",
            currentDate
)

let valcambiSuisse20GoldBar = await getProductInfo('https://tavex.se/guld/guldtackor/',
            'body > div.h-canvas > div.v-category.js-list-modifier > div.h-container > div > div.grid__col--md-9.v-category__body.js-product-archive-results > div.v-category__content.has-pagination.js-loader-target > div.grid.grid--narrow-xs.grid--equalheight > div:nth-child(14) > a > div > div > div.product__price.product__price--single > span.product__price-value.h-price-flash.js-product-price-from',
            'body > div.h-canvas > div.v-category.js-list-modifier > div.h-container > div > div.grid__col--md-9.v-category__body.js-product-archive-results > div.v-category__content.has-pagination.js-loader-target > div.grid.grid--narrow-xs.grid--equalheight > div:nth-child(14) > a', 
            'body > div.h-canvas > div.v-category.js-list-modifier > div.h-container > div > div.grid__col--md-9.v-category__body.js-product-archive-results > div.v-category__content.has-pagination.js-loader-target > div.grid.grid--narrow-xs.grid--equalheight > div:nth-child(14) > a > div > div > h3 > span',
            20,
            "guld",
            "Tavex",
            currentDate
)
let valcambiSuisse5GoldBar = await getProductInfo('https://tavex.se/guld/guldtackor/',
            'body > div.h-canvas > div.v-category.js-list-modifier > div.h-container > div > div.grid__col--md-9.v-category__body.js-product-archive-results > div.v-category__content.has-pagination.js-loader-target > div.grid.grid--narrow-xs.grid--equalheight > div:nth-child(18) > a > div > div > div.product__price.product__price--single > span.product__price-value.h-price-flash.js-product-price-from',
            'body > div.h-canvas > div.v-category.js-list-modifier > div.h-container > div > div.grid__col--md-9.v-category__body.js-product-archive-results > div.v-category__content.has-pagination.js-loader-target > div.grid.grid--narrow-xs.grid--equalheight > div:nth-child(18) > a', 
            'body > div.h-canvas > div.v-category.js-list-modifier > div.h-container > div > div.grid__col--md-9.v-category__body.js-product-archive-results > div.v-category__content.has-pagination.js-loader-target > div.grid.grid--narrow-xs.grid--equalheight > div:nth-child(18) > a > div > div > h3 > span',
            5,
            "guld",
            "Tavex",
            currentDate
)


let valcambi1000SilverBar = await getProductInfo('https://tavex.se/silver/silvertackor/',
            'body > div.h-canvas > div.v-category.js-list-modifier > div.h-container > div > div.grid__col--md-9.v-category__body.js-product-archive-results > div.v-category__content.js-loader-target > div > div:nth-child(1) > a > div > div > div.product__price.product__price--single > span.product__price-value.h-price-flash.js-product-price-from',
            'body > div.h-canvas > div.v-category.js-list-modifier > div.h-container > div > div.grid__col--md-9.v-category__body.js-product-archive-results > div.v-category__content.js-loader-target > div > div:nth-child(1) > a', 
            'body > div.h-canvas > div.v-category.js-list-modifier > div.h-container > div > div.grid__col--md-9.v-category__body.js-product-archive-results > div.v-category__content.js-loader-target > div > div:nth-child(1) > a > div > div > h3 > span',
            1000,
            "silver",
            "Tavex",
            currentDate
)


/// GULDCENTRALEN
let ubs100GoldBar = await getProductInfo('https://www.guldcentralen.se/guld-kop-och-salj',
    'body > div.l-table.container > div.l-table__col.l-table__col--bigger > div > a:nth-child(8) > figure > figcaption > p > span',     
    'body > div.l-table.container > div.l-table__col.l-table__col--bigger > div > a:nth-child(8)', 
    'body > div.l-table.container > div.l-table__col.l-table__col--bigger > div > a:nth-child(8) > figure > figcaption > h2',
    100,
    "guld",
    "Guldcentralen",
    currentDate
)



let ubs50GoldBar = await getProductInfo('https://www.guldcentralen.se/guld-kop-och-salj',
            'body > div.l-table.container > div.l-table__col.l-table__col--bigger > div > a:nth-child(7) > figure > figcaption > p > span',
            'body > div.l-table.container > div.l-table__col.l-table__col--bigger > div > a:nth-child(7)', 
            'body > div.l-table.container > div.l-table__col.l-table__col--bigger > div > a:nth-child(7) > figure > figcaption > h2',
            50,
            "guld",
            "Guldcentralen",
            currentDate
)

let ubs20GoldBar = await getProductInfo('https://www.guldcentralen.se/guld-kop-och-salj',
            'body > div.l-table.container > div.l-table__col.l-table__col--bigger > div > a:nth-child(4) > figure > figcaption > p > span',
            'body > div.l-table.container > div.l-table__col.l-table__col--bigger > div > a:nth-child(4)', 
            'body > div.l-table.container > div.l-table__col.l-table__col--bigger > div > a:nth-child(4) > figure > figcaption > h2',
            20,
            "guld",
            "Guldcentralen",
            currentDate
)

let ubs5GoldBar = await getProductInfo('https://www.guldcentralen.se/guld-kop-och-salj',
    'body > div.l-table.container > div.l-table__col.l-table__col--bigger > div > a:nth-child(2) > figure > figcaption > p > span',     
    'body > div.l-table.container > div.l-table__col.l-table__col--bigger > div > a:nth-child(2)', 
    'body > div.l-table.container > div.l-table__col.l-table__col--bigger > div > a:nth-child(2) > figure > figcaption > h2',
    5,
    "guld",
    "Guldcentralen",
    currentDate
)

let ubs10GoldBar = await getProductInfo('https://www.guldcentralen.se/guld-kop-och-salj',
    'body > div.l-table.container > div.l-table__col.l-table__col--bigger > div > a:nth-child(3) > figure > figcaption > p > span',     
    'body > div.l-table.container > div.l-table__col.l-table__col--bigger > div > a:nth-child(3)', 
    'body > div.l-table.container > div.l-table__col.l-table__col--bigger > div > a:nth-child(3) > figure > figcaption > h2',
    10,
    "guld",
    "Guldcentralen",
    currentDate
)

let kar100GoldBar = await getProductInfo('https://www.guldcentralen.se/guld-kop-och-salj',
    'body > div.l-table.container > div.l-table__col.l-table__col--bigger > div > a:nth-child(9) > figure > figcaption > p > span',     
    'body > div.l-table.container > div.l-table__col.l-table__col--bigger > div > a:nth-child(9)', 
    'body > div.l-table.container > div.l-table__col.l-table__col--bigger > div > a:nth-child(9) > figure > figcaption > h2',
    100,
    "guld",
    "Guldcentralen",
    currentDate
)


let kar1000SilverBar = await getProductInfo('https://www.guldcentralen.se/silver-kop-och-salj',
            'body > div.l-table.container > div.l-table__col.l-table__col--bigger > div > a:nth-child(1) > figure > figcaption > p > span',
            'body > div.l-table.container > div.l-table__col.l-table__col--bigger > div > a:nth-child(1)', 
            'body > div.l-table.container > div.l-table__col.l-table__col--bigger > div > a:nth-child(1) > figure > figcaption > h2',
            1000,
            "silver",
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
        ubs20GoldBar,
        heraeus1000SilverBar,
        valcambi1000SilverBar,
        kar1000SilverBar,
        heraeus5GoldBar,
        heraeus10GoldBar,
        kinebar20GoldBar,
        argorHeraeus50GoldBar,
        kinebar50GoldBar,
        libertyUbs50GoldBar,
        libertyValcambi50GoldBar,
        heraeusP100GoldBar,
        libertyValcambi100GoldBar,
        libertyPerthMint100GoldBar,
        libertyUbsP100GoldBar,
        libertyPampG100GoldBar,
        valcambi100GoldBar,
        valcambiSuisse50GoldBar,
        pampFortuna100GoldBar,
        valcambiSuisse20GoldBar,
        valcambiSuisse5GoldBar,
        ubs5GoldBar,
        ubs10GoldBar,
        kar100GoldBar
    ]

    return products; 
    
}

module.exports = getProducts; 



