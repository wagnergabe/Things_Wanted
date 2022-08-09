async function newFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="wishListName"]').value;
    const event = document.querySelector('input[name="inputEvent"]').value;
  
    const response = await fetch(`/api/home-routes`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        event
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      console.log(response)
      document.location.replace('/wishlist');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.wishlist').addEventListener('submit', newFormHandler);