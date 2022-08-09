async function createWishlistHandler(event) {
    event.preventDefault();
 
const wishlist_name = document.querySelector('input[name="inputWishListName"]').value;
const event = document.querySelector('input[name="inputEvent"]').value;
const item_name = document.querySelector('input[name="inputItemName"]').value;
const category = document.querySelector('input[name="inputCategory"]').value;
const url = document.querySelector('input[name="inputURL"]').value;

const response = await fetch('/api/wishlist', {
  method: 'POST',
  body: JSON.stringify({
    wishlist_name,
    event,
    item_name,
    category,
    url
  }),
  headers: {
    'Content-Type': 'application/json'
  }
});

if (response.ok) {
  document.location.replace('something');
} else {
  alert(response.statusText)
}
}

  document.querySelector('.gift-form').addEventListener('submit', createWishlistHandler);
   