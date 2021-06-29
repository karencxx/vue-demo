let dataArr = [
    { id: 1, name: 'i1' },
    { id: 2, name: 'i2', parentId: 1 },
    { id: 6, name: 'i6', parentId: 1 },
    { id: 4, name: 'i4', parentId: 3 },
    { id: 3, name: 'i3', parentId: 2 },
    { id: 13, name: 'i13', parentId: 2 },
    { id: 8, name: 'i8', parentId: 7 },
]

function genArr (dArr){
    let arr = dArr.slice(0).sort((a,b) =>  a.id-b.id)

    let finalArr = {}
    let parentId
    arr.slice(0).map(i=>{
        if(!i.parentId) {
            parentId = i.id
            finalArr[i.id] = { ...i, children: {} }
        } else {
            if(finalArr[i.parentId]) {
                finalArr[i.parentId].children[i.id] = { ...i, children: {}}
            } else {
                let child = Object.values(finalArr[parentId].children || {})

                if(child.length) {
                    child.map(j=> {
                        if(j.id == i.parentId) {
                            j.children[i.id] = { ...i, children: {} }
                        } else {
                            let grandChild = Object.values(j.children || {})
                            console.log(grandChild, 'grandChild')
                            grandChild.map(k => {
                                if (k.id == i.parentId) {
                                    k.children[i.id] = { ...i, children: {} }
                                }
                            })
                        }
                    })
                }
            }
        }
    })
    console.log(finalArr)
}

let finalArr = {}
function genArr1(dArr) {
    let arr = dArr.slice(0).sort((a, b) => a.id - b.id)
    console.log(arr, 'arr', finalArr)
    let parentId
    arr.slice(0).map(i => {
        if (!i.parentId) {
            finalArr[i.id] = i
            parentId = i.id
            finalArr[i.id].children = {}
        } else {
            if (finalArr[i.parentId]) {
                finalArr[i.parentId].children[i.id] = { ...i, children: {} }
            } else {
                let child = Object.values(finalArr[parentId].children || {})
                genArr1(child)
                // if (child.length) {
                //     child.map(j => {
                //         if (j.id == i.parentId) {
                //             j.children[i.id] = { ...i, children: {} }
                //         } else {
                //             let grandChild = Object.values(j.children || {})
                //             console.log(grandChild, 'grandChild')
                //             grandChild.map(k => {
                //                 if (k.id == i.parentId) {
                //                     k.children[i.id] = { ...i, children: {} }
                //                 }
                //             })
                //         }
                //     })
                // }
            }
        }
    })
    console.log(finalArr)
}

function getTree(arr) {
    if (!arr || !Array.isArray(arr)) return "错误的数据类型";
    var len = arr.length;
    if (!len) return "空数组";
    var rootObj = { id: null, name: null, children: [] };
    var nodeObj = {};
    for (var i = 0; i < len; i++) {
        if (!arr[i].parentId) {
            rootObj = {
                id: arr[i].id,
                name: arr[i].name,
                children: [],
            };
            console.log(rootObj, 'root')
        } else {
            if (nodeObj.hasOwnProperty(arr[i].parentId)) {
                nodeObj[arr[i].parentId].children.push(arr[i]);
            } else {
                nodeObj[arr[i].parentId] = {};
                nodeObj[arr[i].parentId].children = [];
                nodeObj[arr[i].parentId].children.push(arr[i]);
            }
        }
    }
    console.log(nodeObj, rootObj, 'root')
    function getChildren(node) {
        if (nodeObj[node.id] && nodeObj[node.id].children) {
            node.children = nodeObj[node.id].children;
            delete nodeObj[node.id];
            var len = node.children.length;
            if (len > 0) {
                for (var i = 0; i < len; i++) {
                    console.log(node.children[i],'i')
                    getChildren(node.children[i]);
                }
            }
        } else {
            console.log(`${node.id}没有children`);
        }
    }
    getChildren(rootObj);

    for (var p in nodeObj) {
        if (nodeObj.hasOwnProperty) {
            console.warn(p + ":没有该父节点");
        }
    }
    return rootObj;
}

genArr(dataArr)