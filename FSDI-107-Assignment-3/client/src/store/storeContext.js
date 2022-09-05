// This store context file is the PROMISE that has the PROVIDER methods built in 
import { createContext } from "react"

// contect describes the data structure
// but doesnt not provide implementsation

const StoreContext = createContext({
    cart: [],
    user: {},

    addToCart: () => { },
    removeFromCart: () => { },
});

export default StoreContext;