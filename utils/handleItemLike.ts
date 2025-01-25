import { useAccountStore } from '../stores/accountStore'

const as = useAccountStore()
export default function handleItemLike(thisItem) {
  if (as.favoriteItems.some(item => item.name === thisItem.name)) {
    const index = as.favoriteItems.findIndex(item => item.name === thisItem.name)
    if (index !== -1) {
      as.favoriteItems.splice(index, 1)
    }
  }
  else {
    as.favoriteItems.push(thisItem)
  }
}
