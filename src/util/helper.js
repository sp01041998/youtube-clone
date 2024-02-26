

export function viewCount(views){
    let viewsInSymbol
    if(views.length >= 7){
        viewsInSymbol = (Number(views)/1000000).toFixed(2) + "M"
    }
    if(views.length < 7 && views.length > 3){
        viewsInSymbol = (Number(views)/1000).toFixed(2) + "K"
    }
    if(views.length <= 3){
        viewsInSymbol = Number(views)
    }
    console.log(viewsInSymbol)
    return viewsInSymbol
}

export function formatDate(input) {
    const date = new Date(input);
    const seconds = Math.floor((Date.now() - date) / 1000);
    let interval = Math.floor(seconds / 31536000);

    if (interval > 1) {
        return `${interval} years ago`;
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
        return `${interval} months ago`;
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
        return `${interval} days ago`;
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
        return `${interval} hours ago`;
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
        return `${interval} minutes ago`;
    }
    return `${Math.floor(seconds)} seconds ago`;
}
