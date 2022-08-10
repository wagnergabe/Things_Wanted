async function createWishlistHandler(event) {
    event.preventDefault();
 

const wishlistName = document.querySelector('input[name="inputWishListName"]').value;
const event_name = document.querySelector('input[name="inputEvent"]').value;
const itemName = document.querySelector('input[name="inputItemName"]').value;
const categoryName = document.querySelector('input[name="inputCategory"]').value;
const URLname = document.querySelector('input[name="inputURL"]').value;

const response = await fetch('api/wishlist', {
  method: 'POST',
  body: JSON.stringify({
    wishlistName,
    event_name,
    itemName,
    categoryName,
    URLname
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
  