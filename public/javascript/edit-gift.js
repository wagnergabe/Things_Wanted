async function editFormHandler(event) {
    event.preventDefault();
  
    const wishlist_name = document.querySelector('input[name="inputWishListName"]').value;
    const event_name = document.querySelector('input[name="inputEvent"]').value;
    const item_name = document.querySelector('input[name="inputItemName"]').value;
    const category = document.querySelector('input[name="inputCategory"]').value;
    const url = document.querySelector('input[name="inputURL"]').value;
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
    const response = await fetch(`/api/gifts/${id}`, {
      method: 'PUT',
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
      document.location.replace('/wishlist/');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);
  