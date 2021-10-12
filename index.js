function newImage(b, src, left, bottom){
    let b = document.createElement('img')
    b.src = src
    b.style.position = 'fixed'
    b.style.left = left
    b.style.bottom = bottom
    document.body.append(b)
}

newImage(greenCharacter, './assets/green-character.gif', '100px', '100px');

newImage(pineTree, './assets/pine-tree.png', '450px', '200px');

newImage(tree, './assets/tree.png', '200px', '300px');

newImage(pillar, './assets/pillar.png', '350px', '100px');

newImage(crate, './assets/crate.png', '150px', '200px');

newImage(well, './assets/well.png', '500px', '425px');

function newItem(b, src, left, bottom){
    newImage(b, src, left, bottom);
    b.addEventListener('dblclick', function(){
        b.remove()
    })
}

newItem(shield, './assets/shield.png', '165px', '185px');

newItem(staff, './assets.staff.png', '600px', '100px');







l