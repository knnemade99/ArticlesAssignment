export function addArticle(newArticle) {
    return {
        type: 'ADD_NEW_ARTICLE',
        payload: newArticle
    };
}

export function deleteArticle(id) {
    return {
      type: 'DELETE_NEW_ARTICLE',
      payload: id
    };
}