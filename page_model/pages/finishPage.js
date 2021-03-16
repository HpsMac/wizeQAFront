import { Selector, t } from 'testcafe'

class finishPage{
    constructor(){
        this.finishHeader =  Selector('.subheader').withText('Finish')
    }
}

export default new finishPage();