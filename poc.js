(async () => {
      const extract = document.querySelector('input[name="_token"]').value;

      try {
        const request = await fetch('https://investorportal.ispt.net.au/user/updateField/1559', {
              method: 'POST',
              cache: 'no-cache',
              mode: 'no-cors',
              headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': extract
              }
            });

        const responseJson = await request.json(); 
        
        console.log(responseJson);
      } catch (e) {
        console.log(e);
      }
   })();
