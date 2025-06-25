export default function() {
    const cart =  useState('cart', () => [])

    const addToCart = (item) => cart.value.push(item)

    const removeFromCart = (index) => {
        cart.value.splice(index, 1)
    }

    const total = computed(() => {
    return cart.value.reduce((acc, item) => acc + (item.price * item.quantity), 0)

  })

  return {
    cart,
    addToCart,
    removeFromCart,
    total
  }
}