function newImage(source, posLeft, postBottom){
    let imgObj = document.createElement('img')
    imgObj.src = source
    imgObj.style.position = 'fixed'
    imgObj.style.left = posLeft
    imgObj.style.bottom = postBottom
    document.body.append(imgObj)
}


newImage('assets/green-character.gif','100px','100px')
newImage('assets/pine-tree.png','450px','200px')
newImage('assets/tree.png','200px','300px')
newImage('assets/pillar.png','350px','100px')
newImage('assets/crate.png','150px','200px')
newImage('assets/well.png','500px','425px')


function newItem(itemSource,itemLeft,itemBottom){
    let itemObj = document.createElement('img')
    itemObj.src = itemSource
    itemObj.position = 'fixed'
    itemObj.style.left = itemLeft
    itemObj.style.bottom = itemBottom
    document.body.append(itemObj)

    itemObj.addEventListener('dblclick', function(){
        itemObj.remove()

    })
}

newItem('assets/sword.png','500px','405px')
newItem('assets/shield.png','165px','185px')
newItem('assets/staff.png','600px','100px')


