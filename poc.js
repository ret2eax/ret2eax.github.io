(async () => {
      const extract = document.querySelector('input[name="_token"]').value;

      try {
        const request = await fetch('somewhere-1559', {
              method: 'POST',
              cache: 'no-cache',
              mode: 'no-cors',
              headers: {
                'Content-Type': 'text/html',
                'X-CSRF-TOKEN': extract
              }
            });

        const responseJson = await request.json(); 
        
        console.log(responseJson);
      } catch (e) {
        console.log(e);
      }
   })();
