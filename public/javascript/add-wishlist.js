async function createWishlistHandler(event) {
    event.preventDefault();
 

const wishlist_name = document.querySelector('input[name="inputWishListName"]').value;
const event_name = document.querySelector('input[name="inputEvent"]').value;
const item_name = document.querySelector('input[name="inputItemName"]').value;
const category = document.querySelector('input[name="inputCategory"]').value;
const url = document.querySelector('input[name="inputURL"]').value;

console.log("----> wishlistName")



const response = await fetch('api/wishlist', {
  method: 'POST',
  body: JSON.stringify({
    wishlist_name,
    event_name,
    item_name,
    category,
    url
  }),
  headers: {
    'Content-Type': 'application/json'
  }
});

if (response.ok) {
  console.log(response)
  document.location.replace('/gifts');
} else {
  alert(response.statusText)
  console.log(response)
}
}

  document.querySelector('.gift-form').addEventListener('submit', createWishlistHandler);
  