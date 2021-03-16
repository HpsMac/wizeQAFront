import { Selector } from 'testcafe';

class shoppingCartPage {
    constructor(){
        this.cartHeader = Selector('.subheader').withText('Cart')
        this.checkoutButton = Selector('.checkout_button') 
    }
}

export default new shoppingCartPage();