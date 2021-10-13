function newImage(src, left, bottom){
    let image = document.createElement('img')
    image.src = src
    image.style.position = 'fixed'
    image.style.left = left
    image.style.bottom = bottom
    document.body.append(image)
    return image
}

newImage('./assets/green-character.gif', '100px', '100px');

newImage('./assets/pine-tree.png', '450px', '200px');

newImage('./assets/tree.png', '200px', '300px');

newImage('./assets/pillar.png', '350px', '100px');

newImage('./assets/crate.png', '150px', '200px');

newImage('./assets/well.png', '500px', '425px');

function newItem(src, left, bottom){
    let item = newImage(src, left, bottom)
    item.addEventListener('click', function(){
        item.remove()
    })
}

newItem('./assets/shield.png', '165px', '185px');

newItem('./assets.staff.png', '600px', '100px');

