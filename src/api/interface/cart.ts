export interface CartItemProps {
  item: {
    cartId: number
    asset: {
      assetId: number
      assetName: string
      price: number
      discount: number
      discountPrice: number
      extension: string
      size: number
    }
    orderId: number | null
    wishListId: number | null
  }
}
