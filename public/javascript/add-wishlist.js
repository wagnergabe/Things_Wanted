async function createWishlistHandler(event) {
    event.preventDefault();
 
const user_id = window.location.toString().split('/')[
  window.location.toString().split('/').length - 1] //-- Source for this code: UofM Bootcamp module 14  --Gabe 
const wishlist_name = document.querySelector('input[name="inputWishListName"]').value;
const event_name = document.querySelector('input[name="inputEvent"]').value;
const item_name = document.querySelector('input[name="inputItemName"]').value;
const category = document.querySelector('input[name="inputCategory"]').value;
const url = document.querySelector('input[name="inputURL"]').value;

const response = await fetch('api/wishlist', {
  method: 'POST',
  body: JSON.stringify({
    user_id,
    wishlist_name,
    event_name,
    item_name,
    category,
    url,
  }),
  headers: {
    'Content-Type': 'application/json'
  }
});

if (response.ok) {
  document.location.replace('/gifts');
} else {
  alert(response.statusText)
}
}

  document.querySelector('.gift-form').addEventListener('submit', createWishlistHandler);
  