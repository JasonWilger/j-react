import shoe1 from './img/shoe1.jpg';
import shoe2 from './img/shoe2.jpg';
import shoe3 from './img/shoe3.jpg';
import shoe4 from './img/shoe4.jpg';
import shoe5 from './img/shoe5.jpg';
import shoe6 from './img/shoe6.jpg';
import hat1 from './img/hat1.jpg';
import hat2 from './img/hat2.jpg';
import hat3 from './img/hat3.jpg';
import misc1 from './img/misc1.jpg';
import misc2 from './img/misc2.jpg';
import misc3 from './img/misc3.jpg';
import misc4 from './img/misc4.jpg';
import misc5 from './img/misc5.jpg';
import top1 from './img/top1.jpg';
import top2 from './img/top2.jpg';
import top3 from './img/top3.jpg';
import top4 from './img/top4.jpg';
import pant1 from './img/pant1.jpg';
import pant2 from './img/pant2.jpg';
import pant3 from './img/pant3.jpg';
import pant4 from './img/pant4.jpg';
import { ADD_TO_CART, REMOVE_PRODUCT, SUB_QUANTITY, ADD_QUANTITY} from '../actions/Actions'


const initState = {

    products: [
        {
            id: 1,
            title:'Reebok',
            type: "Athletic",
            desc: "Size: 7",
            price: 8,
            img: shoe1
        },
        {
            id: 2,
            title:'The North Face',
            type: "Hiking",
            desc: "Size: 9.5", 
            price: 13,
            img: shoe2
        },
        {
            id: 3,
            title:'Vans',
            type: "Skate/Casual",
            desc: "Size: 9",
            price: 10,
            img: shoe3
        },
        {
            id: 4,
            title:'Urban Outfitters',
            type: "Dress",
            desc: "Size: 4",
            price: 14,
            img: shoe4
        },
        {
            id: 5,
            title:'ASOS',
            type: "Dress",
            desc: "Size: 3",
            price: 7,
            img: shoe5
        },
        {
            id: 6,
            title:'Chuck Taylor',
            type: "Casual",
            desc: "Size: 3",
            price: 12,
            img: shoe6
        },
        {
            id: 7,
            title:'Good Life',
            type: "dad hat",
            desc: "Size: All",
            price: 4,
            img: hat1
        },
        {
            id: 8,
            title:'Vans',
            type: "Beanie",
            desc: "Size: All",
            price: 6,
            img: hat2
        },
        {
            id: 9,
            title:'Patagonia',
            type: "Outerwear",
            desc: "Size: All",
            price: 15,
            img: hat3
        },
        {
            id: 10,
            title:'Patagonia',
            type: "Recreation",
            desc: "Size: All",
            price: 20,
            img: misc1
        },
        {
            id: 11,
            title:'Floral Mug',
            type: "Ceramic",
            desc: "Condition: good",
            price: .99,
            img: misc2
        },
        {
            id: 12,
            title:'Patagonia Mug',
            type: "Ceramic",
            desc: "Condition: excellent",
            price: 1.99,
            img: misc3
        },
        {
            id: 13,
            title:'Mountain Playing Cards',
            type: "Novelty",
            desc: "Condition: new",
            price: 3,
            img: misc4
        },
        {
            id: 14,
            title:'Orange Tabby Cat',
            type: "Living",
            desc: "Condition: fair",
            price: 14,
            img: misc5
        },
        {
            id: 15,
            title:'PacSun',
            type: "Casual Tee",
            desc: "Size: M",
            price: 18,
            img: top1
        },
        {
            id: 16,
            title:'Landmark',
            type: "Casual Tee",
            desc: "Size: M",
            price: 8,
            img: top2
        },
        {
            id: 17,
            title:'United By Blue',
            type: "Adventure",
            desc: "Size: L",
            price: 3.99,
            img: top3
        },
        {
            id: 18,
            title:'H&M',
            type: "Dress/Casual",
            desc: "Size: XS",
            price: 4,
            img: top4
        },
        {
            id: 19,
            title:'Abercrombie & Fitch',
            type: "Jean",
            desc: "Size: 3",
            price: 22,
            img: pant1
        },
        {
            id: 20,
            title:'American Eagle',
            type: "Ripped Jean",
            desc: "Size: 30",
            price: 15,
            img: pant2
        },
        {
            id: 21,
            title:'Good Fellow',
            type: "Khaki Pant",
            desc: "Size: 28",
            price: 10.99,
            img: pant3
        },
        {
            id: 22,
            title:'American Eagle',
            type: "Jean",
            desc: "Size: 32",
            price: 19,
            img: pant4
        }

        
    ],

    addedProducts:[],
    total: 0

}


const Reducer = (state = initState, action) => {  // CHANGE TO SWITCH CASES

    if(action.type === ADD_TO_CART){
        let addedProduct = state.products.find(product => product.id === action.id)

        //check if the action id exists in the addedProducts
       let existed_product = state.addedProducts.find(product => action.id === product.id)
       if(existed_product)
       {
          addedProduct.quantity += 1 
           return {
              ...state,
               total: state.total + addedProduct.price 
                }
      } else {

          addedProduct.quantity = 1;
          //calculating the total
          let newTotal = state.total + addedProduct.price 
          
          return {
              ...state,
              addedProducts: [...state.addedProducts, addedProduct],
              total: newTotal
          }
          
      }

  }

  if(action.type === REMOVE_PRODUCT) {
    let productToRemove = state.addedProducts.find(product => action.id === product.id)
    let new_products = state.addedProducts.filter(product => action.id !== product.id)
    
    //calculating the total
    let newTotal = state.total - (productToRemove.price * productToRemove.quantity )
    console.log(productToRemove)
    return {
        ...state,
        addedProducts: new_products,
        total: newTotal
    }
}
    // FOR CART
    if(action.type === ADD_QUANTITY) {
        let addedProduct = state.products.find(product => product.id === action.id)
        addedProduct.quantity += 1 
        let newTotal = state.total + addedProduct.price
        return {
            ...state,
            total: newTotal
        }
    }
    if(action.type === SUB_QUANTITY) {  
        let addedProduct = state.products.find(product => product.id === action.id) 

        //if the qt == 0 then it should be removed
        if(addedProduct.quantity === 1) {
            let new_products = state.addedProducts.filter(product => product.id !== action.id)
            let newTotal = state.total - addedProduct.price
            return {
                ...state,
                addedProducts: new_products,
                total: newTotal
            }
        } else {
            addedProduct.quantity -= 1
            let newTotal = state.total - addedProduct.price
            return {
                ...state,
                total: newTotal
            }
        }

    }

    return state

}

export default Reducer;