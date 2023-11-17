class Api {
    constructor(options) {
      this._baseUrl = options.baseUrl;
      this._headers = options.headers;
    }
  
    getUserInfo() {
      const promise = fetch(`${this._baseUrl}/users/me`,{
        method: 'GET',
        credentials: 'include',
        headers: this._headers,
      });

      return this._checkResult(promise)
    }
  
    getInitialCards(){
        const promise = fetch(`${this._baseUrl}/cards`,{
            method: 'GET',
            credentials: 'include',
            headers: this._headers,
        })
        
        return this._checkResult(promise)
    }
    
    _checkResult(promise){
        return promise.then(res => {
            if(res.ok){
                return res.json()
            } else {
               return Promise.reject(`Ошибка: ${res.status}`)
            }
        })
    }

    getInitialData(){
        return Promise.all([this.getUserInfo(), this.getInitialCards()]);
    }

    editUserInfo(inputValues){
        const promise = fetch(`${this._baseUrl}/users/me`, {
            method: 'PATCH',
            credentials: 'include',
            headers: this._headers,
            body: JSON.stringify({
                name: inputValues.username,
                about: inputValues.userabout,
            })
        })
        return this._checkResult(promise);
    }

    addNewCard(inputValues){
        const promise = fetch(`${this._baseUrl}/cards`,{
            method: 'POST',
            credentials: 'include',
            headers: this._headers,
            body: JSON.stringify({
                name: inputValues.imageName,
                link: inputValues.imageLink,
            })
        })
        return this._checkResult(promise);
    }

    deleteCard(id) {
        const promise = fetch(`${this._baseUrl}/cards/${id}`, {
          method: 'DELETE',
          credentials: 'include',
        });
    
        return this._checkResult(promise);
      }

      changeLikeCardStatus(cardId, likeStatus){
        if(likeStatus){
            const promise = fetch(`${this._baseUrl}/cards/${cardId}/likes`,{
                method: 'PUT',
                credentials: 'include',
                });

            return this._checkResult(promise);
        } else {
            const promise = fetch(`${this._baseUrl}/cards/${cardId}/likes`,{
                method: 'DELETE',
                credentials: 'include',
                })
            return this._checkResult(promise);
        }
      }

    changeAvatar(url){
        const promise = fetch(`${this._baseUrl}/users/me/avatar`,{
            method: 'PATCH',
            credentials: 'include',
            headers: this._headers,
            body: JSON.stringify({
                avatar: url,
            }),
        })
        return this._checkResult(promise);
    }
  }
  


const api = new Api ({
    baseUrl: 'https://api.sunder.mesto.nomoredomainsmonster.ru',
    headers: {
        'Content-Type': 'application/json',
    },
})

  export {api};