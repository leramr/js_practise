const refs = {
    container: document.querySelector('.container'),
    parent: document.querySelector('.parent'),
    child :document.querySelector('.child'),
    innerChild : document.querySelector('.inner-child')
}

refs.container.addEventListener('click', container)
refs.parent.addEventListener('click', parent)
refs.child.addEventListener('click', child)
refs.innerChild.addEventListener('click', innerChild)

function container (e){
    console.log ('container')
    console.log ('container -> target', e.target)
    console.log ('container ->', e.currentTarget)
}
function parent (e){
    console.log ('parent')
    console.log ('parent -> target', e.target)
    console.log ('parent ->', e.currentTarget)
}
function child (e){
    console.log ('child')
    console.log ('child -> target', e.target)
    console.log ('child ->', e.currentTarget)
}
function innerChild (e){
    console.log ('innerChild')
    console.log ('innerChild -> target', e.target)
    console.log ('innerChild ->', e.currentTarget)
}