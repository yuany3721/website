async function fetchBackgroundImageUrl() {
    try {
        // const response = await fetch("/bing-image");
        const response = await fetch('https://yuany3721.site/bing-pic')
        const data = await response.json()
        // console.log(data);
        const imageUrl = 'https://cn.bing.com' + data.images[0].url
        document.body.style.backgroundImage = `url(${imageUrl})`
        document.body.style.backgroundSize = 'cover'
        document.body.style.backdropFilter = 'blur(1px)'
    } catch (error) {
        console.error('Failed to fetch background image:', error)
    }
}

export { fetchBackgroundImageUrl }
