async function createWishlistHandler(event) {
    event.preventDefault();
 
const wishlistName = document.querySelector('input[name="inputWishListName"]').value;
// const eventName = document.querySelector('input[name="inputEvent"]').value;
// const itemName = document.querySelector('input[name="itemName"]').value;
// const categoryName = document.querySelector('input[name="categoryName"]').value;
// const URLname = document.querySelector('input[name="URLname"]').value;

const response = await fetch('/api/wishlist', {
  method: 'POST',
  body: JSON.stringify({
    wishlistName,
    // eventName,
    // itemName,
    // categoryName,
    // URLname
  }),
  headers: {
    'Content-Type': 'application/json'
  }
});

if (response.ok) {
  document.location.replace('/wishlist');
} else {
  alert(response.statusText)
}
}

  document.querySelector('.name-form').addEventListener('submit', createWishlistHandler);