import { Selector , t } from 'testcafe'

class productsPage{
    constructor(){
        this.hamburger = Selector('#react-burger-menu-btn')
        this.logoutButton = Selector('#logout_sidebar_link')
        this.shoppingCart = Selector('.fa-shopping-cart')
        this.item1Button = Selector('.inventory_item:nth-of-type(1)').find('button')
        this.item2Button = Selector('.inventory_item:nth-of-type(2)').find('button')
        this.item3Button = Selector('.inventory_item:nth-of-type(3)').find('button')
        this.itemCounter = Selector('.fa-layers-counter')
    }
}

export default new productsPage()